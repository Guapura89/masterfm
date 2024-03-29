import { useState } from "react";

export type AlertState = {
  message: string;
  hidden: boolean;
};

type AlertType = "warning" | "success" | "info";


const initialState: AlertState = {
  message: "",
  hidden: true,
};

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>(initialState);

  const showAlert = (msg: string) => {
    setAlert({
      message: msg,
      hidden: false,
    });
    setTimeout(() => {
      setAlert(initialState);
    }, 5000);
  };

  return {
    alert,
    showAlert,
    initialState,
  };
};
