import { ChatBox } from './ChatBox.tsx';
import { MessagesBox } from './MessagesBox.tsx';
import { Message } from './Message.tsx';

const MOCK_MESSAGES = [
    { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
    { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
    // { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    // { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
    // { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    // { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
    // { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    // { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
    // { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    // { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
    // { id: 1, content: 'Salut, comment ça va ?', date: '2021-10-01T12:00:00Z', isUserMessage: false },
    // { id: 2, content: 'Salut, ça va et toi ?', date: '2021-10-01T12:01:00Z', isUserMessage: true },
];

export function Chat () {
    return (
        <div className="main-container container-shadow flex flex-col justify-between min-h-[85%] max-h-[85%]">
            <MessagesBox>
                {MOCK_MESSAGES.map((message) => (
                    <Message message={message}/>
                ))}
            </MessagesBox>
            
            <ChatBox/>
        </div>
    );
}