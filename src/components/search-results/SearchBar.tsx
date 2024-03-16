import { Input } from '../../shadcn/components/ui/input.tsx';
import { Button } from '../../shadcn/components/ui/button.tsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import RouterKeys from '../../routes/routerKeys.ts';
import { SEARCH_PARAMS_KEY, ZIP_CODE_KEY } from '../../constants/constants.ts';
import { Label } from '@radix-ui/react-label';

interface Props {
    isMainSearch?: boolean;
}

export function SearchBar ({ isMainSearch = false }: Readonly<Props>) {
    const [zipCode, setZipCode] = useState('');
    const [search, setSearch] = useState('');
    
    const [searchParams] = useSearchParams();
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const searchParam = searchParams.get(SEARCH_PARAMS_KEY);
        const zipcodeParam = searchParams.get(ZIP_CODE_KEY);
        
        if (!searchParam || searchParam?.length === 0 || !zipcodeParam || (zipcodeParam && zipcodeParam.length < 4)) return;
        setZipCode(zipcodeParam);
        setSearch(searchParam);
        
    }, []);
    
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formattedSearch = search.trim().replace(/ /g, '+');
        navigate(`/${RouterKeys.SearchResults}?${SEARCH_PARAMS_KEY}=${formattedSearch}&${ZIP_CODE_KEY}=${zipCode}`);
    };
    
    const mainSearchDisabled = search.length === 0 || zipCode.length < 4;
    const searchDisabled = isMainSearch ? mainSearchDisabled : search == searchParams.get(SEARCH_PARAMS_KEY);
    
    return (
        <form onSubmit={(e) => handleSearch(e)} className="w-full">
            <div className="flex gap-2">
                <Label className="flex flex-col">
                    Code postal
                    <Input className="bg-white h-12"
                           placeholder="Code postal"
                           value={zipCode}
                           onChange={(e) => setZipCode(e.target.value)}/>
                </Label>
                <Label className="flex flex-col flex-1">
                    Rechercher par mot-clé, modèle, pièce, etc.
                    <Input onChange={(e) => setSearch(e.target.value)}
                           placeholder="Que souhaitez réparer ?"
                           value={search}
                           className="bg-white h-12"/>
                </Label>
                <Button disabled={searchDisabled} type="submit" className="h-12 px-16 self-end">Rechercher</Button>
            </div>
        </form>
    );
}