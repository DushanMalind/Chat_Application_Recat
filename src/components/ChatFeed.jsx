import MessageFrom from "./MessageFrom"; 
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed =(props) =>{
 const {chats, activChat, userName, messages}=props;

 const chat=chats && chats[activChat];

//  console.log(chat, userName, messages);

const renderMessages =() =>{
    const keys=Object.keys(messages);

    // console.log(keys);

    return keys.map((key, index) =>{
        const message=messages[key];
        const lastMessageKey=index === 0 ? null : keys[index - 1];
        const isMyMessage=userName === message.sender.username;

        return(
            <div key={`msg_${index}`} style={{width:'100%'}}>
                <div className="message-block">
                    {
                        isMyMessage
                        ? <MyMessage />
                        : <TheirMessage />
                    }
                </div>
                <div className="read-receipts" style={{marginRight:isMyMessage ? '18px' : '0px', marginLeft:isMyMessage ? '0px' : '68px'}}>
                read-receipts
                </div>
            </div>
        )
    })
 }

renderMessages();

return (
    <div>
        
    </div>
);

}
export default ChatFeed;