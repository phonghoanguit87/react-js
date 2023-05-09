import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import Book from "./components/Book";

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bookList: [
        {name: "Book 1", img: logo, description: "This is book 1"},
        {name: "Book 2", img: logo, description: "This is book 2"},
        {name: "Book 3", img: logo, description: "This is book 3"},
        {name: "Book 4", img: logo, description: "This is book 4"},
      ],
    }
  }
  
  render() {
    return <>
      <div className="container-fluid">
        <div className="row">
          <Header logo={logo}/>
        </div>
  
        <div className="row">
          <div className="book-list">
            {this.state.bookList.map(book =>
                <Book book={book}/>
            )}
          </div>
        </div>
      </div>
    </>
  }
}

export default App;
