import React from "react";

// compoents
import Group from "./common/group";

const GroupList = ({ groups }) => {
  const copiedGroups = [];
  if (groups) {
    groups.map((element) => copiedGroups.push(element));
  }

  // Iterate all group components
  const groupList = copiedGroups.map((group) => (
    <Group key={group._id} data={group} />
  ));

  // return
  return <div>{groupList}</div>;
};

export default GroupList;
