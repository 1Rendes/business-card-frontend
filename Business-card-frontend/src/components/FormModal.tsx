import { FC } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import css from "./FormModal.module.css";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error";
}

export const FormModal: FC<FormModalProps> = ({ isOpen, onClose, status }) => {
  const { t } = useTranslation();
  const isSuccess = status === "success";
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      closeTimeoutMS={300}
    >
      <button onClick={onClose} className={css.closeButton} type="button">
        <IoCloseSharp />
      </button>
      <div className={css.content}>
        <h2 className={css.title}>
          {isSuccess
            ? t("aboutMe.modal.thankYou")
            : t("aboutMe.modal.errorTitle")}
        </h2>
        <p className={css.message}>
          {isSuccess
            ? t("aboutMe.modal.message")
            : t("aboutMe.modal.errorMessage")}
        </p>
      </div>
    </Modal>
  );
};

