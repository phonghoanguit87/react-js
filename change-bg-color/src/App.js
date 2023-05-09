import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            color: '#383636'
        }
    }
    
    /**
     * The func will be random and return the color
     *
     * @returns {string}
     */
    _getRandomColor() {
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        
        if (randomColor === '#ffffff' || randomColor.length < 7) {
            randomColor = this._getRandomColor();
        }
        
        return randomColor
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({color: this._getRandomColor()});
        }, 1000);
    }
    
    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: 'auto'
                    }}
                />
            </div>
        );
    }
}

export default App;
