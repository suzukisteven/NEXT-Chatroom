import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const User = (props) => {
  return (
    <div className="mb-2">
      <Card className="mx-auto border-rounded border-muted" style={ {width: '350px'} }>
        <CardBody>
          <CardText className="text-left" style={{fontSize:'14px'}}>profileimg | {props.userid} | timestamp</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default User
