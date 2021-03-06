import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLikeCartContext } from "like_cart/store";
import { Episode } from "home/src/HomeContent";

interface LikeBtnProps {
  episode: Episode;
}

const LikeBtn = ({ episode }: LikeBtnProps) => {
  const [likes, setLikes] = useLikeCartContext();

  const isLiked = likes.some((item: Episode) => item.guid === episode.guid);

  const handleLike = () => setLikes((prev: Episode[]) => [...prev, episode]);

  const handleDislike = () =>
    setLikes((prev: Episode[]) =>
      prev.filter((like) => like.guid !== episode.guid)
    );

  return (
    <button>
      {isLiked ? (
        <AiFillHeart style={{ fill: "red" }} onClick={handleDislike} />
      ) : (
        <AiOutlineHeart style={{ fill: "red" }} onClick={handleLike} />
      )}
    </button>
  );
};
export default LikeBtn;
