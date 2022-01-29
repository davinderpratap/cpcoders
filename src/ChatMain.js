import React, { useState } from 'react';
import socketIO, { connect } from 'socket.io-client'
import Message from './Message';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
function ChatMain() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("Codeforces");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="container">
      {!showChat ? (
        <div className="joinChatContainer i1">
          <h3>Join a room</h3>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <select class="form-control" id="exampleFormControlSelect1" onChange={(event) => {
        setRoom(event.target.value);
      }} style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: 'white' }}>
        <option >Codeforces</option>
        <option>Codechef</option>
        <option>AtCoder</option>
        <option>HackerEarth</option>
        <option>HackerRank</option>
        <option>LeetCode</option>
        <option>KickStart</option>
      </select>
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Message socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatMain;
