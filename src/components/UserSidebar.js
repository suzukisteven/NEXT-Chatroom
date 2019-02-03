import React from 'react'
import { Col } from 'reactstrap'
import User from './User'
import '../App.css'
import Socket from '../utils/socket'

class UserSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      currentUser: '',
      messages: []
    }
    Socket.on('UPDATE_USER_LIST', users => {
      this.setState({
        users: users
      })
    })
    Socket.on('GET_CURRENT_USER', user => {
      console.log(user)
      this.setState({
        currentUser: user
      })
    })
    Socket.on('RECEIVE_BROADCAST', message => {
      let newMessages = this.state.messages;
      newMessages.push(message)
      newMessages.reverse()
      this.setState({
        messages: newMessages
      })
    })
  }

  render(){
    const {users, currentUser, messages} = this.state;
    let allUsers = users.map(user => {
      let lastMessageIndex = messages.findIndex(m => {
        if(m.username === user.username){
          return m
        } else {
          return null
        }
      })
      let lastMessage = lastMessageIndex != -1
        ? messages[lastMessageIndex]
        : {username: currentUser.username, message: ' ', timestamp: Date.now()}
      return(
        <User userid={user.username} currentUser={currentUser} lastMessage={lastMessage.message} />
      )
    })
    let displayUsers = currentUser && users
      ? allUsers
      : null

    return(
      <Col md='3' className="p-0">
      <div style={ {height: '100vh'} }>
        <nav className="d-none d-md-block bg-dark sidebar m-0 shadow" style={ {height: '100%', backgroundImage:'linear-gradient(#F2C94C, #F2994A)', scrolling: 'no', overflowY:'scroll'} }>
          <div className="sidebar-sticky bg-dark">
            <div className="sidebar-title border border-muted" style={ { height: '70px', background:'#F9F7F3' } }>
              <h4 className="pt-3" style={ {marginBottom: '35px'} }>WhatsChat</h4>
              <div>
                {displayUsers}
                <User userid={"Josh"} currentUser={currentUser}/>
                <User userid={"Steven"} currentUser={currentUser}/>
                <User userid={"Nicholas"} currentUser={currentUser}/>
                <User userid={"Liren"} currentUser={currentUser}/>
                <User userid={"Matt"} currentUser={currentUser}/>
                <User userid={"Edwind"} currentUser={currentUser}/>
                <User userid={"Emika"} currentUser={currentUser}/>
                <User userid={"Audrey"} currentUser={currentUser}/>
                <User userid={"FakeUser396"} currentUser={currentUser}/>
                <User userid={"FakeUser46"} currentUser={currentUser}/>
                <User userid={"FakeUser134"} currentUser={currentUser}/>
                <User userid={"FakeUser239"} currentUser={currentUser}/>
              </div>
            </div>
          </div>
        </nav>
      </div>
      </Col>
    )
  }
}

export default UserSidebar
