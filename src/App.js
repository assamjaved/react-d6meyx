import React from "react";
import "./style.css";
import ClassComp from "./components/ClassComp";
import FunComp from "./components/FunComp";
import ListComp from "./components/ListComp"

export default function App() {
  return (
    <React.Fragment>
      <ClassComp name='Assam'/>
      <FunComp note='Functional Comp'>
        <p>Child of FunComp</p>
      </FunComp>
      <ListComp/>
    </React.Fragment>
  );
}
