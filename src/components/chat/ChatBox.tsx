import { Textarea } from "../../shadcn/components/ui/textarea.tsx";
import { Button } from "../../shadcn/components/ui/button.tsx";
import { useState } from "react";

interface Props {
	sendMessage: (message: string) => void;
}

export function ChatBox({ sendMessage }: Readonly<Props>) {
	const [message, setMessage] = useState("");

	return (
		<form
			className="flex flex-col gap-2 overflow-hidden"
			onSubmit={(e) => {
				e.preventDefault();
				sendMessage(message);
				setMessage("");
			}}
		>
			<Textarea
				placeholder="Écrivez votre message ici ..."
				className="w-full h-20"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<Button type="submit">Envoyer</Button>
		</form>
	);
}
