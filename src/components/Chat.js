import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import '../App.css'
import moment from 'moment'

const Chat = (props) => {
  let styling = props.username === props.newMessage.username
    ? "mr-5 mb-2 border-rounded border-outline-success shadow-sm float-right self-message-style"
    : "ml-5 mb-2 border-rounded shadow-sm"
  const {newMessage} = props;
  return (
    <div className="pt-3 clearfix">
      <Card className={styling} style={ {width: '400px'} }>
        <CardBody className="p-0">
          <CardText className="mb-1 pl-3 pr-3 pt-2 text-left" style={{fontSize: '14px'}}><strong>{newMessage.username}</strong></CardText>
          <CardText className="mb-1 pl-3 pr-3 text-left" style={{fontSize: '14px'}}>{newMessage.message}</CardText>
          <CardText className="pr-2 pb-1 text-right text-muted" style={{fontSize: '11px'}}>{newMessage.timestamp.toString().length === 13 ? moment(newMessage.timestamp).calendar() : newMessage.timestamp}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Chat;
