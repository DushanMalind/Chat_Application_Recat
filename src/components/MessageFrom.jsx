import { useState } from "react";

const MessageFrom =() =>{
    const [value, setValue]=useState('');

    const handleSubmit =() =>{

    }


    const handleChange =() =>{

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