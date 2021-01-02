import React, { useEffect, useState } from "react";
import { getGroup } from "../services/groupService";

const Group = (props) => {
  // state
  const [group, setGroup] = useState({});
  const [image, setImage] = useState();

  // useEffect
  useEffect(() => {
    // getSingleGroup with Image Buffer
    async function getSingleGroup() {
      const { data } = await getGroup(props.match.params.id);

      for (let key in data) {
        if (key === "coverImage") {
          let binary = "";
          let bytes = new Uint8Array(data[key].data);
          let length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          setImage(binary); // setImage(window.btoa(binary));
        }
      }

      setGroup(data);
    }

    getSingleGroup();
  }, [props.match.params.id]);

  // return
  return (
    { group } && (
      <div>
        {group.title}
        {/* <img
          src={group ? Buffer.from(group.coverImage, "base64") : null}
          alt=""
        /> */}
        <img src={"data:image/png;base64" + image} alt="" />
      </div>
    )
  );
};

export default Group;
