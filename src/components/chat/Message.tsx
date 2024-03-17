import { clsx } from "clsx";
import { IMessagesResponse } from "../../services/nswag-generated-file";

interface Props {
	message: IMessages;
}

interface IMessages extends IMessagesResponse {
	isSending: boolean;
}

export function Message({ message }: Readonly<Props>) {
	return (
		<div
			className={clsx(
				message.isMine ? "self-end bg-primary text-white" : "bg-secondary",
				"p-5 w-2/3 rounded-xl",
				message.isSending ? "opacity-50 animate-pulse" : ""
			)}
		>
			{message.message}
		</div>
	);
}
