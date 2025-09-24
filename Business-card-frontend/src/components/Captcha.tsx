import { JSX, useCallback } from "react";
import { useTranslation } from "react-i18next";
import css from "./captcha.module.css";
import footerCss from "./Footer.module.css";
import ReactModal from "react-modal";
import recaptchaIcon from "../images/google_recaptcha-icon.svg";

interface CaptchaProps {
  onVerify: (token: string | null) => void;
  onError: () => void;
  onClose: () => void;
}

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const Captcha = ({ onVerify, onError, onClose }: CaptchaProps): JSX.Element => {
  const { t } = useTranslation();
  const siteKey: string = "6LelNdMrAAAAAJ3UkBzSZoLv15UFgYja9XKjjP3i";
  
  ReactModal.setAppElement("#root");

  const handleClose = (): void => {
    onClose();
  };

  const handleVerify = useCallback(async (): Promise<void> => {
    if (!window.grecaptcha?.enterprise) {
      onError();
      return;
    }
    try {
      await new Promise<void>((resolve) => {
        window.grecaptcha.enterprise.ready(() => {
          resolve();
        });
      });
      const token: string = await window.grecaptcha.enterprise.execute(siteKey, {
        action: "download_vcf"
      });
      
      if (token) {
        onVerify(token);
      } else {
        onError();
      }
    } catch (error) {
      onError();
    }
  }, [siteKey, onVerify, onError]);

  return (
    <ReactModal
      overlayClassName={css.backdrop}
      className={css.modal}
      isOpen={true}
      onRequestClose={handleClose}
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
        <p className={css.captchaText}>{t("captcha.verifyHuman")}</p>
        <img src={recaptchaIcon} alt="reCAPTCHA" className={css.captchaIcon} />
        <button
        onClick={handleVerify}
        className={footerCss.button}
      >
        {t("captcha.verifyButton")}
        </button>
    </ReactModal>
  );
};

export default Captcha;