import { SearchBar } from '../search-results/SearchBar.tsx';

export default function MainSearchBar () {
    
    return (
        <div className="flex flex-col flex-1 items-center h-full bg-opacity-80">
            <h1 className="main-title">🦄 Unicraft 🛠️</h1>
            <SearchBar isMainSearch/>
        </div>
    );
}