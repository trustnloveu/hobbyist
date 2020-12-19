import React, { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

import CategorySlide from "./slides/categorySlide";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const result = await getCategories();
    setCategories(result.data);
  }, []);

  return (
    <>
      <CategorySlide />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
