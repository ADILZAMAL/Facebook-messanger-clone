import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./App.css";
import db from "./friebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import {
  Button,
  FormControlLabel,
  InputLabel,
  Input,
  FormControl,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      userName: userName,

      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=99&h=99"
        alt=""
      />
      <h1>Facebook-Messanger-Clone</h1>
      <h2>Welcome {userName}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {messages.map((message) => (
        <FlipMove>
          <Message key={message.id} userName={userName} data={message.data} />
        </FlipMove>
      ))}
    </div>
  );
}

export default App;
