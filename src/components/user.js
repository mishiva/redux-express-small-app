import React, { Component, PropTypes } from 'react';


export default class User extends Component {
  render() {
    const { user, getFriends, rows } = this.props
    const { name, surname, age, friends, message } = user
    const haveFriends = friends.length > 0
    const firendsList = friends.map((friend, i) =>{
      return <li key={i}>{friend.fname} {friend.lname}</li>
    })
    return (
      <div className='ib user'>
        <p>Привет {name} {surname}</p>
        <p>Age is {age}</p>
        <button onClick={() => getFriends(rows)}>Show my friends</button>
        {
          haveFriends ?
          <div>
            <p>Your friends are:</p>
            <ul className='friends-list'>{firendsList}</ul>
          </div>
          :
          <p>Your don't have friends!</p>
        }
        <p className='error message' style={{color: '#E36049'}}>{message}</p>
      </div>
    );
  }

}

User.propTypes = {
  user: React.PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  })
}
