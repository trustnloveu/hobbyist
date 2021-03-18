import React, { useEffect, useState } from "react";

// compoents
import Group from "../common/group";
import Loader from "../common/loader/loader";

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
      {!groupList && <Loader type="spin" color="#f38181" width="100px" />}
      {groupList &&
        groupList.map((group) => <Group key={group._id} data={group} />)}
    </>
  );
};

export default GroupList;
