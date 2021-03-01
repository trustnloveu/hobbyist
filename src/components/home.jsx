import React, { useEffect, useState } from "react";
import SearchBox from "./common/searchBox";

// import $ from "jquery";

// components
import MainSlider from "./slides/mainSlider";

// services
import { getCategories } from "./../services/categoryService";

// main (Home)
const Home = () => {
  const [categories, setCategories] = useState([]);
  const ranIndex = [];

  // useEffect
  useEffect(() => {
    // get categories from DB
    async function loadCategories() {
      const { data } = await getCategories();
      setCategories(data);
    }

    // execute
    loadCategories();
  });

  // set random index array for rendering group list in Home component
  const loadRandom = (length) => {
    for (let i = 0; i < 4; i++) {
      const number = Math.floor(Math.random() * length); // 0 ~ category length
      const isFound = ranIndex.find((value) => value === number);

      if (!isFound) {
        ranIndex.push(number);
      } else i--;
    }
    console.log(ranIndex);
    return true;
  };

  // call function to render groups one by one
  const renderGroups = () => {
    for (let i = 0; i < ranIndex.length; i++) {
      const index = ranIndex[i];
      renderGroup(categories[index]);
    }
  };

  // render one group
  const renderGroup = (props) => {
    // console.log(props);
    return <div>1</div>;
  };

  return (
    <>
      <MainSlider />
      <SearchBox />
      {categories && loadRandom(categories.length) && renderGroups()}
    </>
  );
};

export default Home;
