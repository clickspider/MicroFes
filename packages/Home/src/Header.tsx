import React from "react";
import { NavLink } from "react-router-dom";

import MiniLikeCart from "likeCart/MiniLikeCart";

const Header = () => (
  <header className="p-5 bg-blue-500 text-white text-3xl font-bold">
    <div className="flex">
      <div className="flex-grow flex">Welcome to DanielFrey.me Talks</div>
      <div className="flex-end relative">
        <NavLink to={"/"}>Home | </NavLink>
        <MiniLikeCart />
      </div>
    </div>
  </header>
);

export default Header;
