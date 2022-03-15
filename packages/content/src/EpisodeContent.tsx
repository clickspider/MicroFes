import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEpisodes } from "home/store";
import { Episode } from "home/src/HomeContent";
import MediaPlayer from "player/MediaPlayer";

import LikeBtn from "likeCart/LikeBtn";

const defaultEpisode: Episode = {
  title: "",
  guid: "",
  thumbnail: "",
  description: "",
  link: "",
  enclosure: {
    link: "",
    duration: 0,
  },
};

const EpisodeContent = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState<Episode>(defaultEpisode);
  const [episodes] = useEpisodes();

  useEffect(() => {
    if (!episode.enclosure.duration && Object.keys(episodes).length) {
      const e = episodes.find((el: Episode) => el.guid.includes(id));
      setEpisode(e);
    }
  }, [episodes]);

  return Object.keys(episode).length ? (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={episode.thumbnail} alt={episode.title} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{episode.title}</h1>
        </div>
        <LikeBtn episode={episode} />
        <div className="mt-10 text-base">{episode.description}</div>
        <div className="my-10">
          <MediaPlayer
            src={episode.enclosure.link}
            length={episode.enclosure.duration}
          />
        </div>
        <a
          href={episode.link}
          target="_blank"
          className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default EpisodeContent;
