import React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
  return (
    <Container>
      <SearchWrapper>
        <TagWrapper>
          <FontAwesomeIcon style={{ position: "absolute" }} icon={faSearch} />
          <TagInput />
        </TagWrapper>
        <DateWrapper>
          <FontAwesomeIcon style={{ position: "absolute" }} icon={faSearch} />
          <DateInput />
        </DateWrapper>
        <LocationWrapper>
          <FontAwesomeIcon style={{ position: "absolute" }} icon={faSearch} />
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
  padding: 10px;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 600px;
`;

const TagWrapper = styled.div`
  width: 50%;
`;

const TagInput = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  text-indent: 5px;
  border-right: 1px solid black;

  &:focus {
    outline: none;
    border: none;
  }
`;

const DateWrapper = styled.div`
  width: 25%;
`;

const DateInput = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  text-indent: 5px;

  &:focus {
    outline: none;
    border: none;
  }
`;

const LocationWrapper = styled.div`
  width: 25%;
`;

const LocationInput = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  text-indent: 5px;
  border-left: 1px solid black;

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
