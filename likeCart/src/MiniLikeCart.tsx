import React, { useState } from "react";
import { useLikeCartContext } from "likeCart/store";
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const MiniLikeCart = () => {
  const [likes, setLikes] = useLikeCartContext();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <button onClick={() => setShowCart(!showCart)}>
        <AiFillHeart className="inline" /> ({likes.length})
      </button>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
            style={{
              width: 300,
              top: "3rem",
              left: -96,
              zIndex: 99,
            }}
          >
            <div
              className="grid gap-3 text-base"
              style={{
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {likes.map((item) => (
                <React.Fragment key={item.guid}>
                  <div>{item.title}</div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="max-h-25"
                  />
                </React.Fragment>
              ))}
            </div>
            <p style={{ fontSize: 14, textAlign: "center" }}>
              {likes.length
                ? likes.length
                : "Oopsy, nothing here, try to like something!"}
            </p>
            <div className="flex">
              <div className="flex-grow">
                <button
                  className="bg-white border border-blue-800 text-blue-800 py-2 px-5 rounded-md text-sm"
                  onClick={() => setLikes([])}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <NavLink
                  className="bg-blue-700 text-white py-2 px-5 rounded-md text-sm"
                  to="/favPodcasts"
                >
                  Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MiniLikeCart;
