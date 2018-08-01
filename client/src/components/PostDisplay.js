import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Container, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class PostDisplay extends Component {
    state = {
        posts: {}
    }

    componentDidMount() {
        axios.get(`/api/posts/${this.props.match.params.id}`)
            .then(res => this.setState({posts: res.data}))
    }

    handleDelete = (id) => {
        axios.delete(`/api/posts/${this.props.match.params.id}`)
            .then(res => {
                this.props.history.push('/')
            })

    }

  render() {
      console.log('this.state.posts', this.state.posts);
      const {posts} = this.state
    return (



      <Container>
          <Button color='info'><Link to='/'  style={{textDecoration: 'none', color: 'white'}}> Back To Homepage </Link></Button>
        <Card>
        
       
          <CardTitle>{posts.title}</CardTitle>
          <CardSubtitle>{posts.category}</CardSubtitle>
          <CardBody>
          <CardText>{posts.description}</CardText>
          
        </CardBody>
      </Card>

<Button color='danger' onClick={() => this.handleDelete(posts._id)}>Delete</Button>
        <Button color='primary'><Link style={{textDecoration: 'none', color: 'white'}} to={`/edit/${posts._id}`}>Edit</Link></Button> 

        {/* <h6>{posts.title}</h6>
        <h6>{posts.category}</h6>
        <h6>{posts.description}</h6>
        <button onClick={() => this.handleDelete(posts._id)}>Delete</button>
       <button> </button> */}
      </Container>
    )
  }
}

export default PostDisplay
