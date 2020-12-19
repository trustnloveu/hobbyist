import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";

// components
import Li from "./categoryList";

// css
import "../../css/category.css";

const CategoriesForm = ({ label }) => {
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
    <ul className="category_list">
      <li className="category_title">{label}</li>
      {categories.map((category) => (
        <Li key={category._id} context={category.name} pathId={category._id} />
      ))}
    </ul>
  );
};

export default CategoriesForm;
