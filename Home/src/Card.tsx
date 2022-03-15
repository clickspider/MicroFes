import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Episode } from "home/HomeContent";
import LikeBtn from "likeCart/LikeBtn";

const Card: React.FC = ({ episode, children }: Episode) => {
  const { thumbnail, title, description, guid } = episode;
  const id = useMemo(() => guid.split("/")[1], [guid]);

  const routerToUrl = `/episode/${id}`;

  console.log("render card");

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={routerToUrl}>
        <img className="rounded-t-lg" src={thumbnail} alt={title} />
      </Link>
      <div className="p-5">
        <Link to={routerToUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <LikeBtn episode={episode} />
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 max-h-36 truncate">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
