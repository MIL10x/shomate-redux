import { add, remove } from "../store/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const HomeCard = ({ item }) => {
  const [textchange, settexchange] = useState(false);
  const dispatch = useDispatch();
  const ithas = useSelector((state) => state.cartState.cartList);
  useEffect(() => {
    const check = ithas.some((i) => i.Id === item.Id);
    settexchange(check);
    if (check) {
      settexchange(true);
    } else {
      settexchange(false);
    }
  }, [ithas, item.Id]);
  const handleButtonClick = () => {
    if (textchange) {
      dispatch(remove(item));
    } else {
      dispatch(add(item));
    }
  };

  return (
    <div
      id={item.id}
      className="h-auto w-72 bg-slate-300 flex flex-col gap-6 justify-center rounded-2xl p-4"
    >
      <img src={item.Pic} alt="" className="size-64 rounded-t-2xl" />
      <p className="text-2xl font-medium">{item.Name}</p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error at
        architecto ut illo, tempore perspiciatis harum ab veniam assumenda
        eveniet.
      </p>
      <p className="text-xl font-medium">price:${item.Price}</p>
      <button
        onClick={handleButtonClick}
        className="bg-slate-700 p-2 rounded-xl text-white"
      >
        {textchange ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default HomeCard;
