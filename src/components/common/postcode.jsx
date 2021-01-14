import React from "react";
import DaumPostcode from "react-daum-postcode"; // https://www.npmjs.com/package/react-daum-postcode

const Postcode = () => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addresType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;

        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";

        console.log(fullAddress);
      }
    }
  };

  const postcodeStyle = {
    display: "block",
    position: "absolute",
    top: "50px",
    zindex: "100",
    width: "500px",
    padding: "10px",
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
