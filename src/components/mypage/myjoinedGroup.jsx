import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Group from "./groupPreview";
import Loader from "../common/loader/loader";

// service
import { getGroup } from "../../services/groupService";

const MyJoinedGroup = ({ id }) => {
  // address, category, coverImage, description, host, keywords, launchedDate, location, meetingDate, members, startTime, title, _id

  // state
  const [group, setGroup] = useState();
  const [done, setDone] = useState(false);

  // useEffect
  useEffect(() => {
    async function loadGroupData(id) {
      try {
        const { data } = await getGroup(id);
        setGroup(data);
        setDone(true);
      } catch (err) {
        if (err.response.status === 404) {
          setDone(true);
        }
      }
    }

    // execute
    loadGroupData(id);
  }, [id]);

  // return
  return (
    <Container>
      {!group && !done && (
        <LoaderCon>
          <Loader type="spin" color="#95e1d3" width="30px" />
        </LoaderCon>
      )}
      {group && <Group data={group} />}
    </Container>
  );
};

const Container = styled.div``;

const LoaderCon = styled.div`
  width: 170px;
`;

export default MyJoinedGroup;
