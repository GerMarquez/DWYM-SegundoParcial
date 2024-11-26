import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FlagContextType {
  reload_flag: boolean;
  setFlag: (value: boolean) => void;
}

const FlagContext = createContext<FlagContextType | undefined>(undefined);

export const FlagProvider = ({ children }: { children: ReactNode }) => {
  const [reload_flag, setFlag] = useState<boolean>(false);

  return (
    <FlagContext.Provider value={{ reload_flag, setFlag }}>
      {children}
    </FlagContext.Provider>
  );
};

export const useFlag = () => {
  const context = useContext(FlagContext);
  if (!context) {
    throw new Error('useFlag must be used within a FlagProvider');
  }
  return context;
};
