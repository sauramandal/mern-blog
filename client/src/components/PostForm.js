import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container,Button, Form, FormGroup, Label, Input } from 'reactstrap';



class PostForm extends Component {
    state ={
        title: '',
        category: '',
        description: ''
    }

    handleChange = e => {
        console.log(this.state);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, category, description } = this.state
        axios.post('api/posts/', {title, category, description})
            .then(res => {
                this.props.history.push('/')
            })
    }

  render() {
    const { title, category, description } = this.state
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

export default PostForm