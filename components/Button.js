'use strict';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    console.log("handleSubmit "+e);
  }
  render() {
    return (
      <div className="Button">
	<button onClick={this.handleSubmit}>{this.props.value}</button>
      </div>
    );
  }
}

export default Button;
