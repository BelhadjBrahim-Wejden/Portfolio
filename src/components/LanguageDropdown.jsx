import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useTranslation } from "react-i18next";

import i18n from "../i18n.js";

import arFlag from "../Assets/flags/tunis.png";
import frFlag from "../Assets/flags/french.jpg";
import grFlag from "../Assets/flags/germany.jpg";
import usFlag from "../Assets/flags/us.jpg";

export default function LanguageDropdown() {
  const { t } = useTranslation();
  const [menu, setMenu] = React.useState(false);
  console.log(i18n.language);
  const [lng, setLanguage] = React.useState(
    i18n.language === "ar"
      ? t("arabic")
      : i18n.language === "fr"
      ? t("frensh")
      : i18n.language === "gr"
      ? t("german")
      : t("english")
  );

  const [flag, setFlag] = React.useState(
    i18n.language === "fr" ? frFlag : usFlag
  );

  function changeLanguageAction(currentLanguage) {
    i18n.changeLanguage(
      currentLanguage === "ar"
        ? "ar"
        : currentLanguage === "fr"
        ? "fr"
        : currentLanguage === "gr"
        ? "gr"
        : "us"
    );

    if (currentLanguage === "ar") {
      setLanguage(t("arabic"));
      setFlag(arFlag);
    } else if (currentLanguage === "fr") {
      setLanguage(t("frensh"));
      setFlag(frFlag);
    } else if (currentLanguage === "gr") {
      setLanguage(t("german"));
      setFlag(grFlag);
    } else if (currentLanguage === "en") {
      setLanguage(t("english"));
      setFlag(usFlag);
    }
  }

  function toggle() {
    setMenu(!menu);
  }

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item waves-effect" tag="button">
          <img src={flag} alt={lng} height="25" className="mr-1 mt-2" />
          <span className="align-middle">{lng}</span>
        </DropdownToggle>
        <DropdownMenu
          className="language-switch"
          right
          style={{
            right: "55px",
          }}
        >
          {/* <DropdownItem
            tag="a"
            onClick={() => changeLanguageAction("ar")}
            className={`notify-item ${
              lng === t("arabic") ? "active" : "none"
            } ${lng === t("arabic") ? "d-none" : ""}`}
          >
            <img src={arFlag} alt="Flag" className="mr-1" height="12" />
            <span className="align-middle">{t("arabic")}</span>
          </DropdownItem> */}
          <DropdownItem
            tag="a"
            onClick={() => changeLanguageAction("fr")}
            className={`notify-item ${
              lng === t("frensh") ? "active" : "none"
            } ${lng === t("frensh") ? "d-none" : ""}`}
          >
            <img src={frFlag} alt="Flag" className="mr-1" height="12" />
            <span className="align-middle">{t("frensh")}</span>
          </DropdownItem>
          <DropdownItem
            tag="a"
            onClick={() => changeLanguageAction("en")}
            className={`notify-item ${
              lng === t("english") ? "active" : "none"
            } ${lng === t("english") ? "d-none" : ""}`}
          >
            <img src={usFlag} alt="Flag" className="mr-1" height="12" />
            <span className="align-middle">{t("english")}</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
}
