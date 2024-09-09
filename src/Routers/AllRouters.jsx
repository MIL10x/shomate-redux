import { Cart, Home, PageNotFound } from "../Pages/index";
import { Route, Routes } from "react-router";
import wineone from "../assets/wineone.jpg";
import wine2 from "../assets/wine2.jpg";
import wine3 from "../assets/wine3.jpg";
import wine4 from "../assets/wine4.jpg";
import wine5 from "../assets/wine5.jpg";

const AllRouters = () => {
  const item = [
    {
      Id: 1,
      Name: "QueenWine",
      Pic: wineone,
      Price: Number(100),
    },
    {
      Id: 2,
      Name: "Red Wine",
      Pic: wine2,
      Price: 100,
    },
    {
      Id: 3,
      Name: "Arc Wine",
      Pic: wine3,
      Price: 100,
    },
    {
      Id: 4,
      Name: "Delight Brown Wine",
      Pic: wine4,
      Price: 100,
    },
    {
      Id: 5,
      Name: "Dense Red wine",
      Pic: wine5,
      Price: 100,
    },
  ];
  return (
    <main className="container mx-auto my-16 min-h-[90vh]">
      <Routes>
        <Route path="/" element={<Home item={item} />} />
        <Route path="/Cart" element={<Cart item={item} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default AllRouters;
