import React from 'react';
import { Card, CardText, CardBody, CardImg, Row, Col } from 'reactstrap';

const User = (props) => {
  let image = `https://api.adorable.io/avatars/100/${props.userid}.png`
  return (
    <div className="mb-2">
      <Card className="mx-auto border-rounded border-muted shadow" style={ {width: '95%'} }>
        <CardBody className="p-0">
          <Row className="p-0 m-0">
            <Col md='3'>
              <CardImg src={image} className="text-left my-auto pt-1" style={{fontSize:'14px', borderRadius:'100px'}}></CardImg>
            </Col>
            <Col md='7'>
              <CardText className="text-left ml-0 pt-2 pb-1 my-auto " style={{fontSize:'14px', fontWeight:'bold'}}>{props.userid}</CardText>
              <CardText className="text-left text-muted ml-0 pb-2 my-auto " style={{fontSize:'14px'}}>Last message</CardText>
            </Col>
            <Col md='2' className="p-2">
              <CardText className="text-right text-muted ml-2 my-auto " style={{fontSize:'11px'}}>17:22</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default User
