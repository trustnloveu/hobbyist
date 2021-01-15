import React from "react";
import styled from "styled-components";

const AddressInput = ({
  value,
  mainName,
  detailName,
  label,
  onClick,
  onChange,
  error,
}) => {
  return (
    <>
      <InputWrapper>
        <InputLabel>
          <label htmlFor={mainName} style={{ pointer: "cursor" }}>
            {label}
          </label>
        </InputLabel>
        <MainAddressCon>
          <MainAddressInput
            id={mainName}
            name={mainName}
            value={value}
            disabled
            placeholder="모임 장소에 대한 주소를 입력해주세요."
          />
          <SearchButton onClick={onClick}>주소찾기</SearchButton>
        </MainAddressCon>
        <DetailAddressInput
          name={detailName}
          onChange={onChange}
          placeholder="상세주소를 입력해주세요."
        />
      </InputWrapper>
      {error && <div className="invalid_msg alert_mark">{error}</div>}
    </>
  );
};

const InputWrapper = styled.div`
  display: block;
`;

const InputLabel = styled.div`
  margin-top: 20px;
  text-indent: 5px;
`;

const MainAddressCon = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainAddressInput = styled.input`
  background-color: white;
  width: 80%;
  height: 35px;
  margin-top: 7px;
  border-radius: 5px;
  border: 1px solid indigo;
  text-indent: 5px;
  box-sizing: border-box;
`;

const DetailAddressInput = styled.input`
  width: 50%;
  height: 35px;
  margin-top: 7px;
  border-radius: 5px;
  border: 1px solid indigo;
  text-indent: 5px;
  box-sizing: border-box;
`;

const SearchButton = styled.button`
  width: 17%;
  height: 35px;
  margin-top: 7px;
  border-radius: 5px;
  text-align: center;
  outline: none;
  border: 1px solid indigo;
  background-color: #eee;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #f38181;
    border: transparent;
    color: white;
    font-weight: 600;
  }
`;

export default AddressInput;
