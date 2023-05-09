import {Component} from "react";

class Alert extends Component {
    render() {
        return (
            <div className="alert alert-warning" role="alert">
                {this.props.message}
            </div>
        )
    }
}

export default Alert;