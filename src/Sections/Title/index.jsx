import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <section className="container text-center">
      <h2 className="text-bold text-4xl">{t("sections.title.title")}</h2>
    </section>
  );
};

export default Title;
