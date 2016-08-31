'use strict';

class InputString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e){
   this.setState({value:e.target.value});
  }
  render() {
    return (
      <div className="inputString">
	<h1>{this.state.value}</h1>
	<label>{this.props.label}</label>
	<input type="text" value={this.state.value} onChange={this.handleTextChange} />
      </div>
    );
  }
}

export default InputString;
