import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Card
        className={
          props.data.userName === props.userName ? "message__user" : "message"
        }
      >
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {props.data.userName === props.userName
              ? ""
              : props.data.userName + ":"}
            {props.data.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
