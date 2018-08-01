import React, { Component } from 'react';



class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
        .then(data => this.setState({posts: data}))
  }
  render() {
    
    console.log(this.state);
    
    const length = this.state.posts.length
    return (
      <div className="App">
       Lenght of state is {length}
      </div>
    );
  }
}

export default Post;
