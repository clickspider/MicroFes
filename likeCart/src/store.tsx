import React, { createContext, useContext, useMemo } from "react";
import useLocalStorage from "home/useLocalStorage";

type Props = {
  children: React.ReactNode;
};

const LikeCartContext = createContext<any>([[], () => {}]);

export function LikeCartProvider({ children }: Props) {
  const [likeCartArray, setLikeCartArray] = useLocalStorage(
    "likeCartArray",
    []
  );

  const value = useMemo(
    () => [likeCartArray, setLikeCartArray],
    [likeCartArray]
  );
  return (
    <LikeCartContext.Provider value={value}>
      {children}
    </LikeCartContext.Provider>
  );
}

export function useLikeCartContext() {
  return useContext(LikeCartContext);
}
