import React from "react";
import styled from "styled-components";
import {
  faSearch,
  faLocationArrow,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconStyle = {
  "margin-top": "12px",
  "margin-left": "7px",
  "font-size": "13pt",
};

const SearchBox = () => {
  return (
    <Container>
      <SearchWrapper>
        <TagWrapper>
          <FontAwesomeIcon
            style={(iconStyle, { postion: "absolute" })}
            icon={faSearch}
          />
          <TagInput />
        </TagWrapper>
        <DateWrapper>
          <FontAwesomeIcon
            style={(iconStyle, { postion: "absolute" })}
            icon={faLocationArrow}
          />
          <DateInput />
        </DateWrapper>
        <LocationWrapper>
          <FontAwesomeIcon
            style={(iconStyle, { postion: "absolute" })}
            icon={faCalendarDay}
          />
          <LocationInput />
        </LocationWrapper>
      </SearchWrapper>
      <SearchButton>모임찾기</SearchButton>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  margin: 570px auto 20px auto;
  border: 1px solid lightcoral;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 600px;
  overflow: hidden;
  border-radius: 5px;
`;

const TagWrapper = styled.div`
  width: 50%;
`;

const TagInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  text-indent: 30px;
  font-size: 14pt;

  &:focus {
    outline: none;
    border: none;
  }
`;

const DateWrapper = styled.div`
  border-left: 1px solid #eee;
  width: 25%;
`;

const DateInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  text-indent: 30px;
  font-size: 14pt;

  &:focus {
    outline: none;
    border: none;
  }
`;

const LocationWrapper = styled.div`
  border-left: 1px solid #eee;
  width: 25%;
`;

const LocationInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  text-indent: 30px;
  font-size: 14pt;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchButton = styled.button`
  width: 150px;
  border: none;
  background-color: #f38181;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: #95e1d3;
  }
`;

export default SearchBox;
