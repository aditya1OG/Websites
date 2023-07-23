import React from "react";
import { firstName, lastName } from "../App";
const DemoC = () => {
  return (
    <>
      <firstName.Consumer>
        {(fName) => {
          return (
            <lastName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    my name is {fName}
                    {lName}
                  </h1>
                );
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </>
  );
};

export default DemoC;
