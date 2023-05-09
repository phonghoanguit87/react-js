import {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header className="App-header">
                <div className="col-md-2">
                    <img src={this.props.logo} className="App-logo" alt="logo"/>
                </div>
                <div className="col-md-8">
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;