import {Component} from "react";
import React from 'react'

import Screen from "./components/Screen";
import Number from "./components/Number";
import Operator from "./components/Operator";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.screenValue = React.createRef()
    
        this.state = {
            result: 0,
            screenNumber: "",
            numberFirst: "",
            numberSecond: "",
            operator: "",
            isDelete: false
        }
        
        this.handleNumber = this.handleNumber.bind(this)
        this.handleOperator = this.handleOperator.bind(this)
        this.handleResult = this.handleResult.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleNumber (number) {
        if ( this.state.screenNumber === "") {
            this.setState({
                screenNumber: number
            })
            console.log(this.state);
    
            this.screenValue.current.handleValue(number)
        } else {
            this.setState({
                screenNumber: this.state.screenNumber + number
            })
            this.screenValue.current.handleValue(this.state.screenNumber)
        }
    }
    
    /**
     *
     * Chi can 1 number vaf cong them s tren manhinh
     */
    
    handleOperator(operator) {
        this.setState({
            operator: operator,
        })
        
        if(this.state.screenNumber !== "") {
            this.setState({
                numberFirst: parseInt(this.state.screenNumber),
                screenNumber: "",
            })
            this.screenValue.current.handleValue(this.state.screenNumber)
        } else {
        
        }
    }
    
    handleResult() {
        if(this.state.screenNumber !== "") {
            this.setState({
                numberSecond: parseInt(this.state.screenNumber),
            })
            this.screenValue.current.handleValue(this.state.screenNumber)
        }
        
        switch(this.state.operator) {
            case '+':
                this.setState({
                    result: this.state.numberFirst + this.state.numberSecond
                });
                break;
            case '-':
                this.setState({
                    result: this.state.numberFirst - this.state.numberSecond
                });
                break;
            case '*':
                this.setState({
                    result: this.state.numberFirst * this.state.numberSecond
                });
                break;
            case '/':
                this.setState({
                    result: this.state.numberFirst / this.state.numberSecond
                });
                break;
        }
    
        this.setState({
            screenNumber: this.state.result
        })
        this.screenValue.current.handleValue(this.state.screenNumber)
        console.log(this.state)
    }
    
    handleDelete() {
        this.setState({
            result: 0,
            screenNumber: "",
            numberFirst: "",
            numberSecond: "",
            operator: "",
            isDelete: false
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="board">
                    <Screen ref={this.screenValue}/>
                    <Number value={1} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={2} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={3} type={"number"} handleNumber={this.handleNumber}/>
                    <Operator operator={"+"} handleOperator={this.handleOperator}/>
                    
                    <Number value={4} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={5} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={6} type={"number"} handleNumber={this.handleNumber}/>
                    <Operator operator={"-"} handleOperator={this.handleOperator}/>
                    
                    <Number value={7} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={8} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={9} type={"number"} handleNumber={this.handleNumber}/>
                    <Operator operator={"*"} handleOperator={this.handleOperator}/>
                    
                    <Number value={"C"} type={"C"} handleDelete={this.handleDelete}/>
                    <Number value={0} type={"number"} handleNumber={this.handleNumber}/>
                    <Number value={"="} type={"equal"} handleResult={this.handleResult}/>
                    <Operator operator={"/"} handleOperator={this.handleOperator}/>
                </div>
            </div>
        )
    }
}

export default App;
