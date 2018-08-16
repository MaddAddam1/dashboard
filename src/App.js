import React, { Component } from 'react';
import './App.css';

const styles = {
  margin: '30px',
  border: '2px solid black',
  boxShadow: '1px 3px 1px #9E9E9E',

}
const FriendsList = (props) => {
  return (
  <div style={styles}>
    <ul>
      {props.list.map((name) => (
        <li key={name}>
          <span>{name}</span>
          <button style={{margin: 10}} onClick={() => props.onRemoveFriend(name)}>
            Remove Friend
          </button>   
          <button onClick={() => props.onDeactivateFriend(name)}>
            Deactivate
          </button>   
        </li>
      ))} 
    </ul>
  </div>
  )
}

const InactiveList = (props) => {
  return (
  <div style={styles}>
    <ul>
      {props.list.map((name) => (
        <li key={name}>
          <span>{name}</span>
          <button style={{margin: 10}} onClick={() => props.onActivateFriend(name)}>
            Activate
          </button>   
        </li>
      ))} 
    </ul>
  </div>
  )
}


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      friends: ['Bill', 'Ted', 'Jane'],
      inactiveFriends: ['Lori'],
      input: '',   
    }
  }

  handleAddFriend = () => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat([currentState.input]),
        input: ''
      }  
    })
  }
  
  handleRemoveFriend = (name) => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.filter((friend) => friend !== name )
      }
    })
  }

  handleDeactivateFriend = (name) => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.filter((friend) => friend !== name ),
        inactiveFriends: currentState.inactiveFriends.concat(name)
      }
    })
  }

  handleActivateFriend = (name) => {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat(name),
        inactiveFriends: currentState.inactiveFriends.filter((friend) => friend !== name),

      }  
    })
  }


  updateInput = (event) => {
    const value = event.target.value
    this.setState({
      input: value
    })
  }
  
  render() {
    
    return (
      <div><br/>

        <input
        style={{margin: 15}}
        type='text'
        placeholder='New Friend'
        value={this.state.input}
        onChange={this.updateInput}
        />

        <button style={{margin: 10}} onClick={this.handleAddFriend}>Submit</button><br/>
        <button style={{margin: 10}} onClick={() => this.setState({
          friends: [],
          inactiveFriends: []
        })}>Clear All</button>

        <h2>Active Friends</h2>
        <FriendsList 
        list={this.state.friends}
        onRemoveFriend={this.handleRemoveFriend}
        onAddFriend={this.handleAddFriend}
        onDeactivateFriend={this.handleDeactivateFriend}
        />

        <h2>Inactive Friends</h2>
        <InactiveList
        list={this.state.inactiveFriends}
        onActivateFriend={this.handleActivateFriend}
        />

      </div>
    );
  }
}

export default App;
