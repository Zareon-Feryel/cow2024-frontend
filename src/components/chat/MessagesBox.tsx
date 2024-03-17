import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function MessagesBox ({ children }: Readonly<Props>) {
    return (
        <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
            {children}
        </div>
    );
}