import React from 'react'
import { Col } from 'reactstrap'
import User from './User'

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
        <nav className="d-none d-md-block bg-dark sidebar m-0 shadow" style={ {height: '100%', backgroundImage:'linear-gradient(#F2C94C, #F2994A)'} }>
          <div className="sidebar-sticky bg-dark">
            <div className="sidebar-title bg-white" style={ { height: '40px' } }>
              <h6 className="pt-1 mb-4">User Profile Pic and some dummy fa-icons</h6>
              <div>
                <User userid={"Josh Teng"}/>
                <User userid={"Steven Suzuki"}/>
                <User userid={"Buttman"}/>
                <User userid={"R3AC7I$C00L69"}/>
                <User userid={"mattyc246"}/>
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
