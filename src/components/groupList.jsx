import React from "react";

import Group from "./common/group";

// keywords, launchedDate, _id, title, category, location, description, startTime, meetingDate
const GroupList = ({ groups }) => {
  const copiedGroups = [];
  if (groups) {
    groups.map((element) => copiedGroups.push(element));
  }

  const groupList = copiedGroups.map((group) => (
    <Group key={group._id} data={group} />
  ));

  return <div>{groupList}</div>;
};

export default GroupList;
