import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="4d0c3452-1941-467e-b829-105d690e1796"
            userName="Dushan"
            userSecret="123456"
            rendarChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
    
}
export default App;