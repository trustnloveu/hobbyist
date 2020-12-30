import React, { useEffect, useState } from "react";
import { getGroup } from "../services/groupService";

const Group = (props) => {
  // state
  const [group, setGroup] = useState({});

  // useEffect
  useEffect(() => {
    // getSingleGroup
    async function getSingleGroup() {
      const { data } = await getGroup(props.match.params.id);
      setGroup(data);
    }

    getSingleGroup();
  }, [props.match.params.id]);

  // return
  return { group } && <div>{group.title}</div>;
};

export default Group;
