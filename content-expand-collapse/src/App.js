import React, { Component } from 'react';

class App extends Component{
  constructor (props) {
    super(props);
    
    this.state = {
      isExpand: false
    }
    
    this.content = "State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components, từ đó bạn có thể luân chuyển dữ liệu đến các thành phần trong Component và đến các Component khác."
  }
  
  handleExpand = () => {
    this.setState({
      isExpand: !this.state.isExpand
    })
  }
  
  render () {
    const { isExpand } = this.state
  
    if (isExpand) {
      return (
          <div>
            <button onClick={this.handleExpand}>{this.state.isExpand ? "Collapse" : "Expand"}</button>
            <div>
              {this.content}
            </div>
          </div>
      )
    } else {
      return (
          <button onClick={this.handleExpand}>{this.state.isExpand ? "Collapse" : "Expand"}</button>
      )
    }
  }
}

export default App