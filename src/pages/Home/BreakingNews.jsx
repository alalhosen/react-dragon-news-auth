import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12 bg-red-50 p-2
        " to='/'>
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12 bg-red-50 p-2
        " to='/'>
          Internet Services Disrupted Across the Country, Causing Public Inconvenience.....
        </Link>
        <Link className="mr-12 bg-red-50 p-2
        " to='/'>
         The Dragon News is in the best news all over the world.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
