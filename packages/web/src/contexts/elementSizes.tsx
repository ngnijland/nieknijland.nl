import React, { createContext, useContext, useState } from "react";

type SizesState = { image: number; card: number } | undefined;

export interface SizesContext {
  sizes: SizesState;
  setSizes: React.Dispatch<React.SetStateAction<SizesState>>;
}

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

const defaultState = {
  sizes: undefined,
  setSizes: () => {},
};

const Context = createContext<SizesContext>(defaultState);

export function ImageHeightProvider({ children }: ProviderProps): JSX.Element {
  const [sizes, setSizes] = useState<SizesState>();

  const exposed = {
    sizes,
    setSizes,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export const useElementSizes = () => useContext(Context);
