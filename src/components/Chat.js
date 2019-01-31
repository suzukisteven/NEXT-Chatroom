import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const Chat = (props) => {
  return (
    <div className="pt-3">
      <Card className="ml-3 mb-3 border-rounded" style={ {width: '400px'} }>
        <CardBody>
          <CardText className="text-left">Hmm... this is a great message. The most insightful message ever written.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Chat;
