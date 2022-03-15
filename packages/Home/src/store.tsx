import React, { createContext, useContext, useEffect, useMemo } from "react";
import { getPodcast } from "./api";
import useLocalStorage from "home/useLocalStorage";

const defaultState = [
  {
    title: "",
    guid: "",
    thumbnail: "",
    description: "",
    link: "",
    enclosure: {
      link: "",
      duration: 0,
    },
  },
];

type Props = {
  children: React.ReactNode;
};

const EpisodesContext = createContext<any>([defaultState, () => {}]);

export function EpisodesProvider({ children }: Props) {
  const [episodes, setEpisodes] = useLocalStorage("episodes", defaultState);

  useEffect(() => {
    getPodcast().then((res) => {
      if (res.items.length > episodes.length) {
        console.log(res);
        setEpisodes(res.items);
      }
    });
  }, []);

  const value = useMemo(() => [episodes, setEpisodes], [episodes]);
  return (
    <EpisodesContext.Provider value={value}>
      {children}
    </EpisodesContext.Provider>
  );
}

export function useEpisodes() {
  return useContext(EpisodesContext);
}
