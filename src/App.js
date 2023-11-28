import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginFrom from './components/LoginFrom';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginFrom/>

    return (
        <ChatEngine
            height="100vh"
            projectID="4d0c3452-1941-467e-b829-105d690e1796"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            rendarChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
    
}
export default App;