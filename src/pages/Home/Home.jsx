import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news=useLoaderData();
  console.log(news)
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2 className="text-3xl font-poppins font-bold">This is Home</h2>
      <div className="text-3xl grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border p-2">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 p-2 border">
          {
            news.map(aNews=><NewsCard key={}></NewsCard>)
          }
          <h2 className="text-3xl">News Coming Soon....</h2>
        </div>
        <div className="border p-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
