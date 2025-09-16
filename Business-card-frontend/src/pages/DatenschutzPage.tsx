import { JSX } from "react";
import { useTranslation } from "react-i18next";

const DatenschutzPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{t("datenschutz.title")}</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.overview")}</h2>
        <h3>{t("datenschutz.generalInfo")}</h3>
        <p>{t("datenschutz.generalInfoText")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.dataCollection")}</h2>
        <h3>{t("datenschutz.responsibleForData")}</h3>
        <p>{t("datenschutz.responsibleForDataText")}</p>

        <h3>{t("datenschutz.howWeCollect")}</h3>
        <p>{t("datenschutz.howWeCollectText1")}</p>
        <p>{t("datenschutz.howWeCollectText2")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.hosting")}</h2>
        <p>{t("datenschutz.hostingText")}</p>
        <p>
          <strong>{t("datenschutz.hostingProvider")}</strong>
          <br />
          {t("datenschutz.hostingAddress")}
          <br />
          {t("datenschutz.hostingCity")}
          <br />
          {t("datenschutz.hostingCountry")}
        </p>
        <p>{t("datenschutz.hostingPrivacy")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.generalNotes")}</h2>
        <h3>{t("datenschutz.privacyTitle")}</h3>
        <p>{t("datenschutz.privacyText1")}</p>
        <p>{t("datenschutz.privacyText2")}</p>
        <p>{t("datenschutz.privacyText3")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.serverLogs")}</h2>
        <h3>{t("datenschutz.serverLogFiles")}</h3>
        <p>{t("datenschutz.serverLogText")}</p>
        <ul>
          {(
            t("datenschutz.serverLogItems", { returnObjects: true }) as string[]
          ).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{t("datenschutz.serverLogNote")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.contactForm")}</h2>
        <p>{t("datenschutz.contactFormText")}</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>{t("datenschutz.plugins")}</h2>
        <h3>{t("datenschutz.googleFonts")}</h3>
        <p>{t("datenschutz.googleFontsText")}</p>
      </section>

      <section>
        <h2>{t("datenschutz.responsibleEntity")}</h2>
        <p>{t("datenschutz.responsibleEntityText")}</p>
        <p>
          <strong>Volodymyr Solonin</strong>
          <br />
          {t("basicCard.address.street")}
          <br />
          {t("basicCard.address.city")}
          <br />
          Deutschland
        </p>
        <p>
          <strong>{t("impressum.phone")}</strong>{" "}
          <a href="tel:+491717494053">+49 (0)171 749 4053</a>
          <br />
          <strong>{t("impressum.email")}</strong>{" "}
          <a href="mailto:mail@volo.rocks">mail@volo.rocks</a>
        </p>
        <p>{t("datenschutz.responsibleEntityNote")}</p>
      </section>
    </div>
  );
};

export default DatenschutzPage;
