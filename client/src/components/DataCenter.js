import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import User from './User';

class Data extends React.Component {
  state = {
    users: []
  };
  
  componentDidMount() {   
    
      axiosWithAuth()
      .get('/users')
      .then(resp=> {
        
        this.setState({
          users: resp.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
  }

  render() {
    return (
      <div className ="">
        {this.state.users.map(user => {
          return <User user={user} key={user.user_id}  />
        })}
      </div>
    );
  }
}

export default Data;
