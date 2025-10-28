import { useState, useRef } from "react";
import { useFormik } from "formik";
import css from "./Form.module.css";
import footerCss from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { FormModal } from "./FormModal";
import { sendFeedback } from "../utils/sendFeedback";

interface FormValues {
  email: string;
  comment: string;
}

interface FormErrors {
  email?: string;
  comment?: string;
}

type ModalStatus = "success" | "error";

export const Form = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<ModalStatus>("success");
  const modalClosedRef = useRef<boolean>(true);
  const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.email) {
      errors.email = t("aboutMe.validation.required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = t("aboutMe.validation.emailInvalid");
    }
    if (!values.comment) {
      errors.comment = t("aboutMe.validation.required");
    }
    return errors;
  };
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      comment: "",
    },
    validate: validateForm,
    onSubmit: (values: FormValues, { resetForm }) => {
      setIsSubmitting(true);
      const formData = {
        email: values.email,
        comment: values.comment,
      };
      modalClosedRef.current = false;
      setModalStatus("success");
      setIsModalOpen(true);
      resetForm();
      setIsSubmitting(false);
      sendFeedback(formData).catch(() => {
        if (modalClosedRef.current) {
          setModalStatus("error");
          setIsModalOpen(true);
        }
      });
    },
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errors = validateForm(formik.values);
    const hasErrors = Boolean(errors.email || errors.comment);
    if (hasErrors) {
      formik.setTouched({
        email: true,
        comment: true,
      });
      formik.setErrors(errors);
    } else {
      formik.submitForm();
    }
  };
  const shouldShowError = (fieldName: keyof FormValues): boolean => {
    return Boolean(formik.touched[fieldName] && formik.errors[fieldName]);
  };
  const isFieldValid = (fieldName: keyof FormValues): boolean => {
    return Boolean(formik.touched[fieldName] && !formik.errors[fieldName] && formik.values[fieldName]);
  };
  const isFieldInvalid = (fieldName: keyof FormValues): boolean => {
    return Boolean(formik.touched[fieldName] && formik.errors[fieldName]);
  };
  return (
    <form onSubmit={handleSubmit} className={css.contactForm} noValidate>
      <div className={css.inputBlock}>
        <div className={css.inputWrapper}>
          <input
            id="email"
            name="email"
            className={`${css.input} ${
              isFieldInvalid("email")
                ? css.inputInvalid
                : isFieldValid("email")
                ? css.inputValid
                : ""
            }`}
            type="email"
            placeholder={t("aboutMe.emailPlaceholder")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {shouldShowError("email") && (
            <span className={css.error}>{formik.errors.email}</span>
          )}
        </div>
        <div className={css.inputWrapper}>
          <input
            id="comment"
            name="comment"
            className={`${css.input} ${
              isFieldInvalid("comment")
                ? css.inputInvalid
                : isFieldValid("comment")
                ? css.inputValid
                : ""
            }`}
            type="text"
            placeholder={t("aboutMe.commentPlaceholder")}
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {shouldShowError("comment") && (
            <span className={css.error}>{formik.errors.comment}</span>
          )}
        </div>
      </div>
      <button
        className={footerCss.button}
        type="submit"
        disabled={isSubmitting}
      >
        {t("aboutMe.sendButton")}
      </button>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          modalClosedRef.current = true;
        }}
        status={modalStatus}
      />
    </form>
  );
};