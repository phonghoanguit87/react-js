import {Component} from "react";
import Welcome from "./components/Welcome";

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            display: true,
        };
        this.name = "ReactJS";
    }
    
    delete = () => {
        this.setState({display: false});
    }
    
    render() {
        let comp;
        if (this.state.display) {
            comp = <Welcome name={this.name}/>;
        }
        
        return (
            <div style={{textAlign: 'center'}}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}

export default App;
