import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

// components
import Li from "./categoryList";
import Loader from "./loader/loader";

// css
import "../../css/category.css";

const CategoriesForm = ({ label, location }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getList() {
      const result = await getCategories();
      setCategories(result.data);
    }
    getList();
  }, []);

  // const clickHandler = async (id) => {
  //   const category = await getCategory(id);
  //   console.log(category);
  // };

  return (
    <ul
      className={
        location === "searchMenu" ? "category_search_list" : "category_list"
      }
    >
      <li className="category_title">{label}</li>
      {categories.length === 0 && (
        <Loader type="spin" color="#f38181" width="100px" />
      )}
      {categories.map((category) => (
        <Li key={category._id} context={category.name} pathId={category._id} />
      ))}
    </ul>
  );
};

export default CategoriesForm;
