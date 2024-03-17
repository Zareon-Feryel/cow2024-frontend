import { ChatBox } from "./ChatBox.tsx";
import { MessagesBox } from "./MessagesBox.tsx";
import { IMessages, Message } from "./Message.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChatsService } from "../../services/services/ChatsServices.ts";
import { SendMessageRequest } from "../../services/nswag-generated-file.ts";

export function Chat() {
	const navigate = useNavigate();
	const [messages, setMessages] = useState<IMessages[]>([]);
	const [chatId, setChatId] = useState<number | null>(null);
	const params = useParams();
	const { makerId } = params;

	useEffect(() => {
		if (!makerId || isNaN(parseInt(makerId))) {
			// Redirect to the chat list
			navigate("/chat");
			return;
		} else {
			new ChatsService().messages(parseInt(makerId)).then((chat) => {
				setMessages(chat.messages);
				setChatId(chat.chatId);
			});
		}
	}, [makerId]);

	const sendMessage = (message: string) => {
		if (message === "") return;
		setMessages([
			...messages,
			{
				message,
				isMine: true,
				isSending: true,
				id: messages.length + 1,
				chatId: chatId!,
				senderId: 0,
			},
		]);
		new ChatsService()
			.messagesAll(
				chatId!,
				new SendMessageRequest({
					message,
				})
			)
			.then((messages) => {
				setMessages(messages);
			});
	};

	return (
		<div className="main-container container-shadow flex flex-col justify-between min-h-[85%] max-h-[85%]">
			<MessagesBox>
				{messages.map((message) => (
					<Message message={message} />
				))}
			</MessagesBox>

			<ChatBox sendMessage={sendMessage} />
		</div>
	);
}
