import React from "react";
import { useTranslation } from "react-i18next";
export default function AdminDashboard() {
  const [t] = useTranslation();
  return (
    <div>
      <h1>{t("Wellcome_Admin")}</h1>
    </div>
  );
}
