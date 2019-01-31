import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const Chat = (props) => {
  return (
    <div className="pt-3">
      <Card className="ml-5 mb-2 border-rounded shadow-sm" style={ {width: '400px'} }>
        <CardBody className="p-0">
          <CardText className="mb-1 pl-3 pr-3 pt-2 text-left" style={{fontSize: '14px'}}><strong>{props.newMessage.username}</strong></CardText>
          <CardText className="mb-1 pl-3 pr-3 text-left" style={{fontSize: '14px'}}>{props.newMessage.message}</CardText>
          <CardText className="pr-2 pb-1 text-right text-muted" style={{fontSize: '11px'}}>{props.newMessage.timestamp}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Chat;
