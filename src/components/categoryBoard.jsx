import React, { useEffect, useState } from "react";
import { getCategory } from "../services/categoryService";

import CategoryForm from "./common/categoryForm";

const CategoryBoard = (props) => {
  const categoryLabel = "다른 카테고리도 확인해보세요.";

  const [category, setCategory] = useState();

  useEffect(() => {
    async function getData() {
      const result = await getCategory(props.match.params.id);
      setCategory(result.data);
    }
    getData();
  }, []);

  return (
    <>
      <div>
        group board
        <h3></h3>
      </div>
      <CategoryForm label={categoryLabel} />
    </>
  );
};

export default CategoryBoard;
