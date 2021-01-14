import React from "react";
import styled from "styled-components";

const AddressInput = ({ name, label, onClick, error }) => {
  return (
    <>
      <InputWrapper>
        <InputLabel>
          <label htmlFor={name} style={{ pointer: "cursor" }}>
            {label}
          </label>
        </InputLabel>
        <MainAddressCon>
          <MainAddressInput
            id={name}
            name={name}
            onClick={onClick}
            placeholder="모임 장소에 대한 주소를 입력해주세요."
          />
          <SearchButton onClick={onClick}>주소찾기</SearchButton>
        </MainAddressCon>
        <DetailAddressInput
          name="detailAddress"
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
`;

export default AddressInput;
