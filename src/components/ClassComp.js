import React from 'react';

class ClassComp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      msg:'State Msg from ClassComp',
      name: this.props.name
    }
  }
  change = ()=>{
    this.setState({
     msg: 'Msg Chagned',
     name: 'Name is Changed'
    })
  }

  render(){
    return(
        <React.Fragment>
          <h1>{this.state.msg}</h1>
          <h2>{this.state.name}</h2>
          <button onClick={this.change}>Click Change</button>
        </React.Fragment>
    );
  }
}
export default ClassComp;