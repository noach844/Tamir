import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Main from './components/Main.jsx';
import './App.css';
import axios from 'axios';

const ENDPOINT = 'http://127.0.0.1:4001';

function App() {
  const [response, setResponse] = useState([]);
  const [balance, setBalance] = useState();
  const balanceByBank = (bankName) => {
    axios
      .post('http://127.0.0.1:4001/balance', { bankName: bankName })
      .then((res) => {
        setBalance(res.data.response);
      })
      .catch(function (error) {
        console.log('object');
        console.log(error);
      });
  };

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('tick', (data) => {
      setResponse(data);
    });
  }, []);

  console.log(response);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Tradair Coding Assignment</h1>
        <Main response={response} />
        <h1>{`balance: ${balance}`}</h1>
        <button onClick={() => balanceByBank('bank1')}>bank1</button>
        <button onClick={() => balanceByBank('bank2')}>bank2</button>
      </div>
    </>
  );
}

export default App;
