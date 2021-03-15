import React, { useEffect, useState } from "react";

// compoents
import Group from "../common/group";

const GroupList = ({ groups }) => {
  const [groupList, setGroupList] = useState();

  useEffect(() => {
    setGroupList(groups);
  }, [groups]);

  // // Group List
  // const copiedGroups = [];
  // if (groups) {
  //   groups.map((element) => copiedGroups.push(element));
  // }

  // // Iterate all group components
  // const groupList = copiedGroups.map((group) => (
  //   <Group key={group._id} data={group} />
  // ));

  // return
  return (
    <>
      {groupList &&
        groupList.map((group) => <Group key={group._id} data={group} />)}
    </>
  );
};

export default GroupList;
