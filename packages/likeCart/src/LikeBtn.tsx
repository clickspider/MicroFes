import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLikeCartContext } from "likeCart/store";

interface LikeBtnProps {
  episode: {
    guid: string;
    title: string;
    description: string;
    thumbnail: string;
    enclosure: {
      link: string;
      duration: string;
    };
  };
}

const LikeBtn = ({ episode }: LikeBtnProps) => {
  const [likes, setLikes] = useLikeCartContext();

  const isLiked = likes.some((item) => item.guid === episode.guid);

  const handleLike = () => setLikes((prev) => [...prev, episode]);

  const handleDislike = () =>
    setLikes((prev) => prev.filter((like) => like.guid !== episode.guid));

  return (
    <button>
      {isLiked ? (
        <AiFillHeart onClick={handleDislike} />
      ) : (
        <AiOutlineHeart onClick={handleLike} />
      )}
    </button>
  );
};
export default LikeBtn;
