import React, { useEffect, useState } from "react";

// services
import { getCategory } from "../../services/categoryService";
import { getGroupsByCategory } from "../../services/groupService";

// components
import FilterList from "../common/filterList";
import CategoryForm from "../common/categoryForm";
import GroupList from "../group/groupList";

// main
const CategoryBoard = (props) => {
  const categoryLabel = "다른 카테고리도 확인해보세요.";
  const [categoryName, setCategoryName] = useState();
  const [groups, setGroups] = useState();

  // useEffect
  useEffect(() => {
    // category title
    async function getName() {
      const result = await getCategory(props.match.params.id);
      setCategoryName(result.data.name);
    }

    async function getGroupListByCategory() {
      const { data } = await getGroupsByCategory(props.match.params.id);
      setGroups(data);
    }

    // execute
    getName();
    getGroupListByCategory(); // getGroupList();
  }, [props.match.params.id]);

  const style = {
    width: "70%",
    margin: "auto",
  };

  // return
  return (
    <div style={style}>
      <FilterList label={categoryName} />
      <GroupList groups={groups} />
      <CategoryForm label={categoryLabel} />
    </div>
  );
};

export default CategoryBoard;
