import React from "react";
import { useLikeCartContext } from "like_cart/store";

const CartContent = () => {
  const [likes, setLikes] = useLikeCartContext();

  if (!likes.length) return "Add some epeisodes to your cart!";
  return (
    <section className="">
      <div className="my-10 grid grid-cols-4 gap-5">
        {likes.map((item) => (
          <React.Fragment key={item.guid}>
            <div>{item.title}</div>
            <img src={item.thumbnail} alt={item.title} className="max-h-25" />
          </React.Fragment>
        ))}
      </div>
      {likes.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              className="bg-white border border-blue-800 text-blue-800 py-2 px-5 rounded-md text-sm"
              onClick={() => setLikes([])}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-blue-700 text-white py-2 px-5 rounded-md text-sm"
              onClick={() => setLikes([])}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartContent;
