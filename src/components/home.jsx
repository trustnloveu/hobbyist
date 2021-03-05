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
  const [index, setIndex] = useState([]);

  // useEffect
  useEffect(() => {
    // get categories from DB
    async function loadCategories() {
      const { data } = await getCategories();
      setCategories(data); // to set category array
      loadRandom(data.length); // to get random categories
    }

    // execute
    loadCategories();
  }, []);

  // set random index array for rendering group list in Home component
  const loadRandom = (length) => {
    const ranIndex = [];
    for (let i = 0; i < 4; i++) {
      const number = Math.floor(Math.random() * length); // 0 ~ category length
      const isFound = ranIndex.find((value) => value === number);

      if (!isFound) {
        ranIndex.push(number);
      } else i--;
    }
    // setIndex
    setIndex(ranIndex);
  };

  // call function to render groups one by one
  const renderGroups = () => {
    let output = "";

    for (let i = 0; i < index.length; i++) {
      output += renderGroup(categories[index[i]]);
    }

    return <div>{output}</div>;
  };

  // render one group
  const renderGroup = (categoryData) => {
    console.log(categoryData);
    if (categoryData === undefined) return;
    return categoryData.name;
  };

  return (
    <>
      <MainSlider />
      <SearchBox />
      {categories && renderGroups()}
    </>
  );
};

export default Home;
