import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import ButtonFetch from './ButtonFetch';

const API = 'https://randomuser.me/api/?results=1';

class App extends Component {

  state = {
    users: [],
  }

  handelDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          // console.log(response)
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }))
      })
      .catch(error => console.log(error))
  }

  render() {
    const users = this.state.users
    return (
      <div className="App">
        <ButtonFetch
          click={this.handelDataFetch}
        />
        {users.length > 0 ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
