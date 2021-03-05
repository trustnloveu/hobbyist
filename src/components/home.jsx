import React, { useEffect, useState } from "react";
import SearchBox from "./common/searchBox";

// import $ from "jquery";

// components
import MainSlider from "./slides/mainSlider";
import MainGroupsByCate from "./main/mainGroupsByCate";

// services
import { getCategories } from "./../services/categoryService";

// main (Home)
const Home = () => {
  const [categories, setCategories] = useState([]);

  // useEffect
  useEffect(() => {
    // get categories from DB
    async function loadCategories() {
      const { data: allCate } = await getCategories();

      const indexArray = loadRandomIndex(allCate.length); // to get random indexes
      loadRandomCategories(allCate, indexArray); // to set random categories
    }

    // execute
    loadCategories();
  }, []);

  // loadRandomIndex
  const loadRandomIndex = (length) => {
    const ranIndex = [];

    for (let i = 0; i < 4; i++) {
      const number = Math.floor(Math.random() * length); // 0 ~ category length
      const isFound = ranIndex.find((value) => value === number);

      if (!isFound) {
        ranIndex.push(number);
      } else i--;
    }
    return ranIndex;
  };

  // loadRandomCategories
  const loadRandomCategories = (all, index) => {
    const array = [];

    for (let i = 0; i < index.length; i++) {
      array.push(all[index[i]]);
    }

    // setCategories
    setCategories(array);
  };

  // return
  return (
    <>
      <MainSlider />
      <SearchBox />
      {categories && <MainGroupsByCate categories={categories} />}
    </>
  );
};

export default Home;
