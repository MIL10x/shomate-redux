import { Link } from "react-router-dom";
import Logo from "../assets/beer.png";
import Menu from "../assets/menu.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Header = () => {
  const [open, setopen] = useState(false);
  const cartList = useSelector((state) => state.cartState.cartList);
  const [Dark, Light] = useState(false);
  useEffect(() => {
    if (Dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Dark]);

  return (
    <div className="h-auto w-full flex p-5 bg-orange-500 items-center dark:bg-slate-900 px-10 justify-between flex-wrap text-white">
      <Link to="/">
        <img className="size-16" src={Logo} alt="" />
      </Link>
      <div className="hidden md:flex gap-10 text-xl">
        <Link to="/">
          <p className=" hover:underline">Home</p>
        </Link>
        <Link to="/Cart">
          <p className=" hover:underline">Cart</p>
        </Link>
      </div>
      <div className=" hidden md:flex gap-2">
        <Link to="/Cart">
          <p className="bg-orange-400 p-3 rounded-xl text-xl">
            Cart:{cartList.length}{" "}
          </p>
        </Link>
        <button
          onClick={() => Light(!Dark)}
          className="bg-orange-400 rounded-xl p-3"
        >
          {Dark ? "DarkMode" : "LightMode"}
        </button>
      </div>
      <div className="size-11 md:hidden dark:bg-slate-100 p-1 rounded-xl">
        <button onClick={() => setopen(!open)}>
          <img src={Menu} alt="" />
        </button>
      </div>
      {open && (
        <div className="flex flex-col basis-full items-center gap-2 py-4 md:hidden text-xl">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/Cart">
            <p>Cart</p>
          </Link>
          <Link to="/Cart">
            <p>Cart:{cartList.length} </p>
          </Link>
          <button
            onClick={() => Light(!Dark)}
            className="bg-orange-400 rounded-xl p-3"
          >
            {Dark ? "DarkMode" : "LightMode"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
