import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="container flex pb-5 pt-5">
      <ul className="flex gap-4">
        <li>{t("links.o")}</li>
        <li>{t("links.s")}</li>
        <li>{t("links.t")}</li>
        <li>{t("links.f")}</li>
      </ul>
      <select
        className="ml-6 mr-6 border-black border rounded font-bold font-sans cursor-pointer"
        name="language"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="ru" name="ru">
          ru
        </option>
        <option value="en" name="en">
          en
        </option>
      </select>
    </header>
  );
};

export default Header;
