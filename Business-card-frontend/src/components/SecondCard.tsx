import { JSX, useState } from "react";
import css from "./BasicCard.module.css";
import qrCode from "../images/Volodymyr-QR-Code.svg";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Captcha from "./Captcha";
import { useEffect } from "react";

const VCF_FILE_PATH: string = "/Volodymyr_Solonin.vcf";

const handleDownloadVcf = (): void => {
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = VCF_FILE_PATH;
  link.download = "Volodymyr_Solonin.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const SecondCard = (): JSX.Element => {
  const { t } = useTranslation();
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [captchaError, setCaptchaError] = useState<boolean>(false);
  const handleDownloadClick = (): void => {
    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }
    if (isCaptchaVerified) {
      handleDownloadVcf();
    }
  };

  useEffect(() => {
    if (isCaptchaVerified) {
      handleDownloadVcf();
    }
  },[isCaptchaVerified]);

  const handleCaptchaClose = (): void => {
    setShowCaptcha(false);
    setIsCaptchaVerified(false);
    setCaptchaError(false);
  };

  const handleCaptchaVerify = (token: string | null): void => {
    if (token) {
      setIsCaptchaVerified(true);
      setCaptchaError(false);
    } else {
      setIsCaptchaVerified(false);
    }
  };


  const handleCaptchaError = (): void => {
    setIsCaptchaVerified(false);
    setCaptchaError(true);
  };

  return (
    <div className={`${css.basicCard} ${css.noTopMargin}`}>
      <div className={css.secondCardWhiteback}>
        <div className={css.qrContentSection}>
          <p className={css.name}>{t("secondCard.scanContact")}</p>
        </div>
        <div className={css.qrSection}>
          <img className={css.qrCode} src={qrCode} alt="QR Code" />
        </div>
        <div className={css.qrContentSection}>
          {showCaptcha && !isCaptchaVerified && (
            <>
              <Captcha
                isOpen={showCaptcha && !isCaptchaVerified}
                onVerify={handleCaptchaVerify}
                onError={handleCaptchaError}
                onClose={handleCaptchaClose}
              />
              {captchaError && (
                <p className={css.captchaErrorMessage}>{t("captcha.error")}</p>
              )}
            </>
          )}
          <a onClick={handleDownloadClick}>
            <p className={clsx(css.downloadButton, css.name)}>
              {isCaptchaVerified ? t("captcha.downloadNow") : t("secondCard.download")}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
