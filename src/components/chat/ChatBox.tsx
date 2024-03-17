import { Textarea } from '../../shadcn/components/ui/textarea.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';

export function ChatBox () {
    return (
        <form className="flex flex-col gap-2 overflow-hidden">
            <Textarea placeholder="Écrivez votre message ici ..." className="w-full h-20"/>
            <Button>Envoyer</Button>
        </form>
    );
}