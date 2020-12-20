import React, { useEffect, useState } from "react";
import { getCategory } from "../services/categoryService";

import FilterBox from "./common/filterList";
import CategoryForm from "./common/categoryForm";

const CategoryBoard = (props) => {
  const categoryLabel = "다른 카테고리도 확인해보세요.";
  const [categoryName, setCategoryName] = useState();

  useEffect(() => {
    async function getName() {
      const result = await getCategory(props.match.params.id);
      setCategoryName(result.data.name);
    }
    getName();
  }, [props.match.params.id]);

  return (
    <>
      <FilterBox label={categoryName} />
      <CategoryForm label={categoryLabel} />
    </>
  );
};

export default CategoryBoard;
