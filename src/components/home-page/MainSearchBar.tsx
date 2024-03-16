import { SearchBar } from '../search-results/SearchBar.tsx';

export default function MainSearchBar () {
    
    return (
        <div className="flex flex-col flex-1 items-center h-full bg-opacity-80 gap-24">
            <h1 className="main-title pt-24">
                Vous souhaitez réparer plutôt que de jeter ? ♻<br/>
                Recherchez directement un maker pour vous aider ! 🛠
            </h1>
            <SearchBar isMainSearch/>
        </div>
    );
}