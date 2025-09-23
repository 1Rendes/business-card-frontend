import { JSX } from "react";
import css from "./BasicCard.module.css";
import qrCode from "../images/Volodymyr-QR-Code.svg";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

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
          <a onClick={handleDownloadVcf} >
            <p className={clsx(css.downloadButton, css.name)}>{t("secondCard.download")}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
