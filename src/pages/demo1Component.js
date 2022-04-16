import React from 'react';

class Demo1Component extends React.Component {
  constructor() {
    super();
    this.state = { value: 'Hello' }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  
  render() {
    return (
      <InputComponent value={this.state.value} onChange={this.handleChange}/>
    )
  }
};

const InputComponent = props => {  
  return(
    <div>
        <h3>Please typing</h3>
        <input type="text" value={props.value} onChange={props.onChange} />        
    </div>
  );
}

export default Demo1Component;