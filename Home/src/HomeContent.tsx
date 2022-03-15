import React, { useState, useEffect, useCallback } from "react";

import MediaPlayer from "player/MediaPlayer";
import Card from "home/Card";
import { useEpisodes } from "home/store";
export type Episode = {
  title: string;
  guid: string;
  thumbnail: string;
  description: string;
  link: string;
  enclosure: {
    link: string;
    duration: number;
  };
};

const HomeContent = () => {
  const [episodes] = useEpisodes();

  return (
    <section className="grid-card-container">
      {episodes && episodes.length > 0
        ? episodes.map((episode: Episode) => (
            <Card key={episode.guid} episode={episode}>
              <MediaPlayer
                src={episode.enclosure.link}
                length={episode.enclosure.duration}
              />
            </Card>
          ))
        : "Loading..."}
    </section>
  );
};

export default HomeContent;
