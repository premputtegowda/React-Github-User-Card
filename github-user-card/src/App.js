import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users:[],
      followers:[]
     
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users")
      .then(res => {
        this.setState({users: res.data})
        
      })
      .catch(err => console.log(err))
  }

  fetchFollowers = (url) => {
   
    axios.get(url)
    .then(res => {
      console.log('onClick: ', res)
      this.setState({
        followers: res.data
      })
    })
    .catch(err=> console.log(err))
  }
  render(){
    return (
      <div className="App">

        <UserList users={this.state.users} fetchFollowers={this.fetchFollowers} followers={this.state.followers} />
       
      </div>
    )
  }
}

export default App;
