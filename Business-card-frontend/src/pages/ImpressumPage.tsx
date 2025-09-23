import { JSX } from "react";
import { useTranslation } from "react-i18next";

const ImpressumPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{t("impressum.title")}</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("impressum.tmgInfo")}</h2>
        <p>
          <strong>Volodymyr Solonin</strong>
          <br />
          {t("basicCard.profession")}
          <br />
          {t("basicCard.address.street")}
          <br />
          {t("basicCard.address.city")}
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("impressum.contact")}</h2>
        <p>
          <strong>{t("impressum.phone")}</strong>{" "}
          <a href="tel:+491717494053">+49 (0)171 749 4053</a>
          <br />
          <strong>{t("impressum.email")}</strong>{" "}
          <a href="mailto:mail@volo.rocks">mail@volo.rocks</a>
          <br />
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("impressum.responsible")}</h2>
        <p>Volodymyr Solonin</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("impressum.liabilityContent")}</h2>
        <p>{t("impressum.liabilityContentText")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("impressum.liabilityLinks")}</h2>
        <p>{t("impressum.liabilityLinksText")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("impressum.copyright")}</h2>
        <p>{t("impressum.copyrightText")}</p>
      </section>

      <section>
        <h2>{t("impressum.privacy")}</h2>
        <p>{t("impressum.privacyText")}</p>
      </section>
    </div>
  );
};

export default ImpressumPage;
