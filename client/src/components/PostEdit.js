import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Container,Button, Form, FormGroup, Label, Input } from 'reactstrap';


 class PostEdit extends Component {
     state = {
         posts: {}
     }

     componentDidMount () {
         axios.get(`/api/posts/${this.props.match.params.id}`)
            .then(res => {this.setState({posts: res.data})})
     }

     handleChange = e => {
         const state = this.state
         this.setState({
             posts: state[e.target.name] = e.target.value
         })
     }

     handleSubmit = e => {
         e.preventDefault()
         const { title, category, description } = this.state
         axios.put(`/api/posts/${this.props.match.params.id}`, {title,category,description})
            .then(res => {
                this.props.history.push(`/post/${this.props.match.params.id}`)
            })
     }


  render() {
    const { title, category, description } = this.state.posts
    console.log(this.state.posts);
    

    return (
        <Container>
         <Button color='info'><Link to='/' style={{textDecoration: 'none', color: 'white'}}> Back To Homepage </Link></Button>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
            <Input type='text' name='title'  value={title} onChange={this.handleChange}  placeholder="Title..." />
        </FormGroup>

        <FormGroup>
          <Label for="category">Category</Label>
            <Input type='text' name='category' value={category} onChange={this.handleChange}  placeholder="Category..." />
        </FormGroup>
            
        <FormGroup>
          <Label for="description">Description</Label>
            <Input type='textarea' name='description' value={description} onChange={this.handleChange}  placeholder="Description..." />
        </FormGroup>
            
            <Button color='primary'>Submit</Button>
            </Form>
        
        </Container> 
    )
  }
}
export default PostEdit