import React from 'react'
import { Col } from 'reactstrap'
import '../App.css';
import Chat from '../components/Chat'

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'xXxP1MPGuy69xXx',
      textInput: '',
      messages: [],
      isEmpty: true,
      textInputCount: 0
    };
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
      newMessages.push(textInput)
      this.setState({
        messages: newMessages,
        textInput: '',
        isEmpty: true
      })
      console.log(newMessages)
      console.log(this.state.textInput)
    } else {
      alert('Message cannot be blank!')
    }


    if(textInput === '')
      e.preventDefault();
    // this .setstate this.textinput back to ''
    //
  }

  render() {
    return(
      <Col md='9' className="p-0" style={ {position:'relative'} }>
        <div className="bg-white border-left border-muted" style={ { height:'40px'} }>
          <div className="bg-muted" style={ { overflow: 'none', height: '100vh', background: '#EEE'} }>
            <Chat />
            <div className="chat-input fixed-bottom">
              <form>
                <input
                  className="border border-muted rounded-pill pl-3"
                  style={ {width: '68%', height:'50px', position: 'absolute', bottom: '7px', right: '6%'} }
                  onChange={this.handleTextInput}
                  value={this.state.textInput}
                  placeholder="Type a message..."
                  maxlength="500"
                />
                {/* <input
                  className="btn btn-sm btn-outline-primary"
                  type="submit"
                  value="Send"
                  style={ {position: 'absolute', bottom: '17px', right: '1.75%'} }
                  onClick ={this.sendMessage}
                  messages={this.state.messages}
                /> */}
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
