import { useState } from "react";

const LIstGroup = ({ items, heading, onSelectedItem }) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <li>Item Not Found</li> : null}
      {items.length === 0 && <li>Item Not Found</li>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>

          // if we want to render the item 👍

          // <li
          //   key={item}
          //   onClick={(event) => {
          //     console.log(item);
          //   }}
          // >
          //   {item}
          // </li>
        ))}
      </ul>
    </>
  );
};

export default LIstGroup;
