import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="container text-center">
      <h2 className="text-bold text-4xl">{t("sections.about.title")}</h2>
      <p>{t("sections.about.desc")}</p>
    </section>
  );
};

export default About;
