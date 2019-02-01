import React from 'react'
import { Col } from 'reactstrap'
import '../App.css';
import Chat from '../components/Chat'
import Socket from '../utils/socket'

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'Guest User',
      textInput: '',
      messages: [
        {username: 'Edwind', message: 'What did the ocean say to another ocean?', timestamp: 1544532325758},
        {username: 'Liren', message: 'sea you later?', timestamp: 1544532341078},
        {username: 'Edwind', message: 'Nothing. It just waved', timestamp: 1544532347412},
        {username: 'Josh', message: "I'm leaving this chatroom", timestamp: 1544532402998},
        {username: 'Nicholas', message: "Sir", timestamp: 1544532402998},
      ],
      isEmpty: true,
      textInputCount: 0,
    };
    Socket.emit('NEW_USER')

    Socket.on('GET_CURRENT_USER', user => {
      this.setState({
        username: user.username
      })
    })

    Socket.on('RECEIVE_BROADCAST', message => {
      let newMessages = this.state.messages
      newMessages.push(message)
      this.setState({
        messages: newMessages
      })
    })

  }

  handleTextInput = (e) => {
    let input = e.target.value
    if (input.length === 500){
      alert('Max 500 characters per message!')
    } else if (input.length > 0){
      this.setState({
        textInput: input,
        isEmpty: false,
        textInputCount: input.length
      })
    } else {
      this.setState({
        textInput: input,
        isEmpty: true,
        textInputCount: input.length
      })
    }
  }

  sendMessage = (e) => {
    e.preventDefault();
    let textInput = this.state.textInput
    let newMessages = this.state.messages
    if(!this.state.isEmpty) {
      let newMessage = {
        username: this.state.username,
        message: textInput,
        timestamp: Date.now()
      }
      Socket.emit('BROADCAST_MESSAGE', newMessage)

      this.setState({
        textInput: '',
        isEmpty: true
      })


    } else {
      alert('Message cannot be blank!')
    }
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages, username } = this.state;
    let allMessages = messages.map(message => {
      return(
        <Chat newMessage={message} username={username} />
      )
    })
    return(
      <Col md='9' className="p-0" style={ {position:'relative'} }>
        <div className="bg-white border-left border-muted" style={ { height:'40px'} }>
          <div className="bg-muted" style={ { overflow: 'none', height: '100vh', background: '#EEE', overflowY:'scroll', paddingBottom: '75px'} }>
            {allMessages}
            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
            </div>
            <div className="chat-input fixed-bottom">
              <form onSubmit={this.sendMessage}>
                <input
                  className="border border-muted rounded-pill pl-3"
                  style={ {width: '68%', height:'50px', position: 'absolute', bottom: '7px', right: '6%'} }
                  onChange={this.handleTextInput}
                  value={this.state.textInput}
                  placeholder="Type a message..."
                  maxlength="500"
                />
                <i className="text-muted fas fa-2x fa-microphone" style={ {position: 'absolute', bottom: '18px', right: '2.75%'} }></i>
              </form>
            </div>
          </div>
        </div>
      </Col>
    )
  }
}

export default MainContainer

{/*
  Below Max Length=500
  <input
  className="btn btn-sm btn-outline-primary"
  type="submit"
  value="Send"
  style={ {position: 'absolute', bottom: '17px', right: '1.75%'} }
  onClick ={this.sendMessage}
  messages={this.state.messages}
/> */}
