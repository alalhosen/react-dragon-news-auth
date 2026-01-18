import { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fatch("categories.json");
  }, []);

  return (
    <div>
      <h2 className="text-2xl">LeftSideNav</h2>
    </div>
  );
};

export default LeftSideNav;
