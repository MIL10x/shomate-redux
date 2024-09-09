import { remove } from "../store/Cartslice";
import { useDispatch } from "react-redux";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id={item.Id}
        className="h-auto w-full bg-slate-300 flex  gap-6 items-center justify-between rounded-2xl p-4"
      >
        <div className="flex items-center gap-5">
          <div>
            <img src={item.Pic} alt="" className="size-64 rounded-2xl" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-medium">{item.Name}</p>
            <p className="text-xl font-medium">price:${item.Price}</p>
          </div>
        </div>
        <button
          className="bg-slate-700 p-2 rounded-xl text-white me-5"
          onClick={() => dispatch(remove(item))}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Card;
