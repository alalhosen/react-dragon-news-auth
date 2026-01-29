import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  return (
    <div>
      <Header>
        <div className="grid md:grid-cols-4">
          <div className="col-span-3">
            <h2 className="text-5xl">News Details</h2>
          </div>
          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default News;
