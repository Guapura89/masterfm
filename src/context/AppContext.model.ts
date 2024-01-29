import { AlertState } from "@/hooks/useAlert";

export interface props {
  children: React.ReactNode;
}

export interface ContextState {
  alert: {
    message: string;
    hidden: boolean;
  };
  showAlert: (msg: string) => void;
  initialState: AlertState;
}
