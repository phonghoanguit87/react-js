import {Component} from "react";

class Operator extends Component {
    constructor(props) {
        super(props);
    
        this.handleOperator = this.handleOperator.bind(this)
    }
    
    handleOperator() {
        this.props.handleOperator(this.props.operator)
    }
    
    render() {
        return (
            <button type="button" onClick={this.handleOperator}>{this.props.operator}</button>
        )
    }
}

export default Operator;