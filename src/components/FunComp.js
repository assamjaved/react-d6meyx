import React, {Fragment} from 'react';


function FunComp(props){
  return(
    <Fragment>
    <h1>{props.note}</h1>
      {props.children}
    </Fragment>
  );
}
export default FunComp;