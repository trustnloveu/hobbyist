import React from "react";

const Select = ({
  classNameObj,
  name,
  label,
  onChange,
  placeholder,
  lists,
  error,
}) => {
  // select options
  let options;
  Array.isArray(lists)
    ? (options = lists.map((list) => [list._id, list.name]))
    : (options = Object.keys(lists)
        .filter((list) => list !== "anywhere")
        .map((key) => [key, lists[key]]));

  // return
  return (
    <div className={classNameObj.container}>
      <div className={classNameObj.label}>{label}</div>
      <select id={name} name={name} onChange={onChange}>
        <option hidden>{placeholder}</option>
        {options.map((element) => (
          <option key={element[0]} value={element[0]}>
            {element[1]}
          </option>
        ))}
      </select>
      {error && <div className="invalid_msg alert_mark">{error}</div>}
    </div>
  );
};

export default Select;
