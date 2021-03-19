import React, { useState } from "react";
import styled from "styled-components";
import {
  faSearch,
  faLocationArrow,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import filterOptions from "../../objects/filterOptions";

const SearchBox = () => {
  const [regionVisible, setRegionVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState();
  const [selectBoxColor, setSelectBoxColor] = useState("white");

  // all region options
  const regions = Object.values(filterOptions.regionFilter);

  // region filter toggle
  const toggleRegionFilter = () => {
    setRegionVisible(!regionVisible);
    selectBoxColor === "white"
      ? setSelectBoxColor("#eee")
      : setSelectBoxColor("white");
  };

  // inject region data into serach box
  const inputRegion = (selected) => {
    setSelectedRegion(selected);
  };

  return (
    <Container>
      <SearchWrapper>
        <TagWrapper>
          <FontAwesomeIcon icon={faSearch} />
          <TagInput placeholder="찾으시는 그룹의 키워드 입력" />
        </TagWrapper>
        <LocationWrapper onClick={() => toggleRegionFilter()}>
          {regionVisible && (
            <RegionCon>
              {regions.map((region, index) => (
                <Region key={index} onClick={() => inputRegion(region)}>
                  {region}
                </Region>
              ))}
            </RegionCon>
          )}
          <FontAwesomeIcon icon={faLocationArrow} />
          <LocationInput
            disabled
            value={selectedRegion}
            style={{ backgroundColor: selectBoxColor }}
            placeholder="지역 선택"
          />
        </LocationWrapper>
        <DateWrapper>
          <FontAwesomeIcon icon={faCalendarDay} />
          <DateInput placeholder="작업예정" />
        </DateWrapper>
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
  padding: 1px;
`;

const SearchWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  width: 100%;

  & input {
    letter-spacing: 2px;
    font-size: 13pt;
  }

  & svg {
    position: absolute;
    height: 100%;
    font-size: 14pt;
    margin-left: 8px;
  }
`;

const TagWrapper = styled.div`
  position: relative;
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

const LocationWrapper = styled.div`
  position: relative;
  border-left: 1px solid #eee;
  background-color: white;
  width: 25%;

  & svg {
    z-index: 20;
  }
`;

const LocationInput = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  border: none;
  text-indent: 30px;
  font-size: 14pt;
  cursor: pointer;

  &:disabled {
    background-color: white;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const RegionCon = styled.ul`
  position: absolute;
  width: 100%;
  margin: 40px 0;
  padding: 0;
  text-align: center;
  background-color: #a1eafb;
  z-index: 100;
`;

const Region = styled.li`
  list-style: none;
  padding: 10px 0;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #f38181;
  }
`;

const DateWrapper = styled.div`
  position: relative;
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

const SearchButton = styled.button`
  width: 150px;
  border: none;
  background-color: #f38181;
  color: white;
  border-radius: 5px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: #95e1d3;
  }
  &:focus {
    border: transparent;
    outline: none;
  }
`;

export default SearchBox;
