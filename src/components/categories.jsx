import React, { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

// components
import CategorySlide from "./slides/categorySlide";
import Li from "./common/categoryList";

// css
import "../css/category.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getList() {
      const result = await getCategories();
      setCategories(result.data);
    }
    getList();
  }, []);

  return (
    <>
      <CategorySlide />
      <ul className="category_list">
        <li className="category_title">관심 있는 카테고리를 선택해보세요.</li>
        {categories.map((category) => (
          <Li key={category._id} context={category.name} />
        ))}
      </ul>
    </>
  );
};

export default Categories;
