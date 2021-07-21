import React from 'react';

class ListComp extends React.Component {
  render() {
    const numbers = ['Honda', 'Toyota', 'Nissan', 'Suzuki'];
    const newnumbers = numbers.map(numbers => <li>{numbers}</li>);

    return (
      <React.Fragment>
        <ol>{newnumbers}</ol>
      </React.Fragment>
    );
  }
}
export default ListComp;
