"use client";
import React, { createContext, useContext, useState } from "react";
import { useAlert } from "@/hooks/useAlert";
import { ContextState, props } from "./AppContext.model";

export const AppContext = createContext<ContextState>({} as ContextState);

// Provider
export function ProviderAuth({ children }: props) {
  return (
    <AppContext.Provider value={useAlert()}>{children}</AppContext.Provider>
  );
}

export const useAlertContext = () => {
  const { alert, showAlert } = useContext(AppContext);

  return { alert, showAlert };
};
