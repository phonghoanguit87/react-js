import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
        }
    }
  
    increase = () => {
        this.setState({count: this.state.count + 1})
    }
    
    decrease = () => {
        this.setState({count: this.state.count - 1});
    };
    
    render() {
        return (
            <div style={{textAlign: "center", padding: 30}}>
                <button onClick={this.decrease}>Decrease</button>
                <span style={{padding: 10}}>{this.state.count}</span>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
    
}

export default App;
