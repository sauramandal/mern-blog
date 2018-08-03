import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Container, Table, Button } from 'reactstrap';


class Home extends Component {
    state = {
        posts:[]
    }

    componentDidMount() {
        axios.get('/api/posts')
            .then(res => this.setState({posts: res.data}))
        }
            
         


  render() {
      console.log('this.state.posts', this.state.posts);
      const {posts} = this.state
    return (
        <Container>

       
       <Button color='primary' > <Link style={{textDecoration: 'none', color: 'white', marginBottom: '20px'}} to='/newpost'>Add Post</Link></Button>
      <Table striped>
          
          <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
          
          </tr>
        </thead>
        <tbody >
          {posts.map((post,i) => {
            return (
                
                <tr key={post._id} >
                  <td><Link to={`/post/${post._id}`}>{post.title}</Link></td>
                    <td>{post.category}</td>
                   
                </tr>
                
            )
        })  }
        </tbody>
      </Table>
      </Container>
    )}
  }


export default Home