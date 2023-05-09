import {Component} from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillUnmount() {
        alert('The component is going to be unmounted');
    }
    
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} !!!</h1>
            </div>
        )
    }
}

export default Welcome;