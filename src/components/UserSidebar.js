import React from 'react'
import { Col } from 'reactstrap'
import User from './User'
import '../App.css'

class UserSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],

    }
  }

  render(){
    return(
      <Col md='3' className="p-0">
      <div style={ {height: '100vh'} }>
        <nav className="d-none d-md-block bg-dark sidebar m-0 shadow" style={ {height: '100%', backgroundImage:'linear-gradient(#F2C94C, #F2994A)', scrolling: 'no', overflowY:'scroll'} }>
          <div className="sidebar-sticky bg-dark">
            <div className="sidebar-title bg-white border border-muted" style={ { height: '70px' } }>
              <h6 className="pt-4" style={{marginBottom: '35px'}}>NEXT Academy Chatroom</h6>
              <div>
                <User userid={"Josh"}/>
                <User userid={"Steven"}/>
                <User userid={"Nicholas"}/>
                <User userid={"Liren"}/>
                <User userid={"Matt"}/>
                <User userid={"Edwind"}/>
                <User userid={"Emika"}/>
                <User userid={"Audrey"}/>
                <User userid={"FakeUser396"}/>
                <User userid={"FakeUser46"}/>
                <User userid={"FakeUser134"}/>
                <User userid={"FakeUser239"}/>
                <User userid={"FakeUser67"}/>
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
