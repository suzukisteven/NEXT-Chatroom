import React from 'react'

class UserSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],

    }
  }

  render(){
    return(
      <h1>Hi from UserSidebar!</h1>
    )
  }
}

export default UserSidebar
