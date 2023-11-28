import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageFrom =() =>{
    const [value, setValue]=useState('');

    const handleSubmit =() =>{

    }


    const handleChange =(event) =>{
        setValue(event.target.value);
    }

    return (
         <from className="message-from" onSubmit={hadleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={hadleSubmit}
            />
         </from>
    );
}
export default MessageFrom;