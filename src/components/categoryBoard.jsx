import React, { useEffect, useState } from "react";

// services
import { getCategory } from "../services/categoryService";
import { getGroups } from "../services/groupService";

// components
import FilterBox from "./common/filterList";
import CategoryForm from "./common/categoryForm";
import GroupList from "./groupList";

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

    // keywords, launchedDate, _id, title, category, location, description, startTime, meetingDate
    // group list
    async function getGroupList() {
      const { data } = await getGroups();
      setGroups(data);
    }

    // execution
    getName();
    getGroupList();
  }, [props.match.params.id]);

  // return
  return (
    <>
      <FilterBox label={categoryName} />
      <GroupList groups={groups} />
      <CategoryForm label={categoryLabel} />
    </>
  );
};

export default CategoryBoard;
