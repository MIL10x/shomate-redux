import HomeCard from "../components/HomeCard";

const Home = ({ item }) => {
  return (
    <div id="20" className="flex justify-start gap-5  flex-wrap">
      {item.map((i) => (
        <HomeCard item={i} />
      ))}
    </div>
  );
};

export default Home;
