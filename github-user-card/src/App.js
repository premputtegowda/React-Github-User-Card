import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './components/UserList'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users:[],
      followers:{login:'',follower_data:[]}
     
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users")
      .then(res => {
        this.setState({users: res.data})
        
      })
      .catch(err => console.log(err))
  }

  fetchFollowers = (user) => {
   
    axios.get(`https://api.github.com/users/${user}/followers`)
    .then(res => {
      console.log('onClick: ', res)
      this.setState({followers: {login:user, follower_data: res.data}})
    })
    .catch(err=> console.log(err))
  }

  resetFollowers = () => {
    this.setState({followers: {login:'', follower_data:[]}})
  }
  
  render(){
    return (
      <div className="App">

        <UserList users={this.state.users} fetchFollowers={this.fetchFollowers} followers={this.state.followers} resetFollowers={this.resetFollowers}/>
       
      </div>
    )
  }
}

export default App;
