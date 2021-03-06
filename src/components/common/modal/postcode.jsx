import React from "react";
import DaumPostcode from "react-daum-postcode"; // https://www.npmjs.com/package/react-daum-postcode

const Postcode = ({ setMainAddress }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // update address input value
    setMainAddress(fullAddress);
  };

  const postcodeStyle = {
    width: "500px",
    margin: "100px auto",
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      style={postcodeStyle}
      height={700}
    />
  );
};

export default Postcode;
