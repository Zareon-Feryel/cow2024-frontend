import { clsx } from 'clsx';

interface Props {
    message: any;
}

export function Message ({ message }: Readonly<Props>) {
    return (
        <div className={clsx(message.isUserMessage ? 'self-end bg-primary text-white' : 'bg-secondary', 'p-5 w-2/3 rounded-xl')}>
            {message.content}
        </div>
    );
}