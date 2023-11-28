import React, { useState } from "react";
import axios from "axios";

const LoginFrom = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, serError] = useState("");

    const handleSubmit = async(event) => {
        e.preventDefault();

        const authObject={'Project_ID': "4d0c3452-1941-467e-b829-105d690e1796", 'User-Name':username,'User-Secret':password};

        try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});

           localStorage.setItem('username',username);
           localStorage.setItem('password',password);

           window.location.reload();
        }catch(error){
            serError('Oops,incorrect credentials.')
        }
    }

    return (
        <div className="warapper">
            <div className="from">
                <h1 className="title">Chat Application</h1>
                <from onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) =setUsername(e.target.value)} className="input" placeholder="Username" required />
                    
                    <input type="password" value={password} onChange={(e) =setPassword(e.target.value)} className="input" placeholder="password" required />

                    <div align="center">
                        <button type="submit" className="button"></button>
                        <span>Start Chatting</span>
                    </div>
                    <h2 className="error">{error}</h2>
                </from>
            </div>
        </div>
    )
}
export default LoginFrom;