import {Component} from "react";

class Screen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <input className="screen" type="text" value={this.props.value}/>
        )
    }
}

export default Screen;