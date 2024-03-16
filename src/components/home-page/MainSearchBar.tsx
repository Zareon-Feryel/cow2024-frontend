import { Input } from '../../shadcn/components/ui/input.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';

export default function MainSearchBar () {
    return (
        <div className="flex flex-col flex-1 items-center">
            <h1 className="main-title">🦄 Unicraft 🛠️</h1>
            <form className="w-full">
                <h2>Rechercher par mot-clé, modèle, pièce, etc.</h2>
                <div className="flex gap-2">
                    <Input placeholder="Que souhaitez réparer ?" className="bg-white h-12"/>
                    <Button type="submit" className="h-12 px-16">Rechercher</Button>
                </div>
            </form>
        </div>
    );
}