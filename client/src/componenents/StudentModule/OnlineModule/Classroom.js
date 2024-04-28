import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
export default function Classroom() {
  const messages = [
    { id: 1, sender: 'Teacher', message: 'Hello students!', timestamp: '10:00 AM' },
    { id: 2, sender: 'Student', message: 'Hi Teacher!', timestamp: '10:05 AM' },
    // Add more messages here
  ];


  return (
    <>
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', padding: '20px' }}>
      <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginBottom: '10px' }}>
        Chat Room
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.sender === 'Teacher' ? 'flex-start' : 'flex-end',
            }}
          >
            <div style={{ backgroundColor: msg.sender === 'Teacher' ? 'white' : 'blue', color: msg.sender === 'Teacher' ? 'blue' : 'white', padding: '10px', borderRadius: '10px', maxWidth: '60%', wordWrap: 'break-word' }}>
              <div>{msg.sender}</div>
              <div>{msg.message}</div>
              <div style={{ fontSize: '0.8em', textAlign: 'right' }}>{msg.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <input type="text" placeholder="Your message" style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid blue' }} />
        <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none' }}>
          <AiOutlineSend />
        </button>
      </div>
    </div>

    </>
  );
}



  

