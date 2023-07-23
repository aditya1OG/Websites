import React from "react";
import { FirstName, LastName } from "../App";

const DemoC = () => {
  return (
    <FirstName.Consumer>
      {(Fname) => {
        return (
          <LastName.Consumer>
            {(Lname) => {
              return (
                <h1>
                  hii i'm {Fname }
                  {Lname}
                </h1>
              );
            }}
          </LastName.Consumer>
        );
      }}
    </FirstName.Consumer>
  );
};

export default DemoC;
