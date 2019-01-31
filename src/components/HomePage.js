import React from 'react'
import { Row } from 'reactstrap'
import UserSidebar from './UserSidebar'
import MainContainer from '../containers/MainContainer'

const homepage = () => {
  return (
    <Row className="m-0">
      <UserSidebar />
      <MainContainer />
    </Row>
  )
}

export default homepage
