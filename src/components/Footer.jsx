import React from "react";
import Logo from "../assets/beer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-400 dark:bg-slate-800 h-auto p-5 px-20 w-full flex justify-between items-center text-white">
      <Link to="/">
        <img className="size-16" src={Logo} alt="" />
      </Link>
      <div className="flex gap-3 justify-between">
        <a href="#">Instagram</a>
        <a href="#">LinkIn</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  );
};

export default Footer;
