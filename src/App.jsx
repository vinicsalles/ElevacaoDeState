import { useState } from 'react'
import './App.css' 
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }


  return (
    <>
    <Message msg={message}/>
    <ChangeMessage handleMessage={handleMessage}/>
    </>
  )
}

export default App
