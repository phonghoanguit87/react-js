import {Component} from "react";

class Number extends Component {
    constructor(props) {
        super(props);
    
        this.handleNumber = this.handleNumber.bind(this)
        this.handleResult = this.handleResult.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleNumber() {
        this.props.handleNumber(this.props.value)
    }
    
    handleResult () {
        this.props.handleResult()
    }
    
    handleDelete() {
        this.props.handleDelete()
    }
    
    render() {
        if(this.props.type === "number") {
            return (
                <button type="button" onClick={this.handleNumber}>{this.props.value}</button>
            )
        } else if(this.props.type === "equal") {
            return (
                <button type="button" onClick={this.handleResult}>{this.props.value}</button>
            )
        } else {
            return (
                <button type="button" onClick={this.handleDelete}>{this.props.value}</button>
            )
        }
    }
}

export default Number;