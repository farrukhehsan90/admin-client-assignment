import React from "react";
import { useTranslation } from "react-i18next";
import { Alert } from "react-bootstrap";

const NotifyUserModal = ({ variant, open, closeModal, message }) => {
  const [t] = useTranslation();
  return (
    <div>
      {open ? (
        <Alert variant={variant} onClose={() => closeModal()} dismissible>
          <p>{message}</p>
        </Alert>
      ) : null}
    </div>
  );
};

export default NotifyUserModal;
