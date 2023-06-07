import {Component} from "react";

class Screen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: ""
        }
    }
    
    handleValue = (value) => {
        console.log(value)
        this.setState({
            value: value
        })
    }
    
    render() {
        return (
            <input className="screen" type="text" value={this.state.value}/>
        )
    }
}

export default Screen;