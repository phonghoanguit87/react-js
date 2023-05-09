import {Component} from "react";

class Book extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="card m-3" style={{width: "18rem"}}>
                <img src={this.props.book.img} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.book.name}</h5>
                    <p className="card-text">{this.props.book.description}</p>
                    <a href="#" className="btn btn-primary">Buy</a>
                </div>
            </div>
        )
    }
}

export default Book;