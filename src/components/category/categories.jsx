import React from "react";

// components
import CategorySlide from "../slides/categorySlide";
import CategoriesForm from "./categoryForm";

const Categories = () => {
  const label = "관심있는 카테고리를 선택해보세요.";

  return (
    <>
      <CategorySlide />
      <CategoriesForm label={label} location="searchMenu" />
    </>
  );
};

export default Categories;
