import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS_KEY, ZIP_CODE_KEY } from '../../constants/constants.ts';
import { useEffect, useState } from 'react';
import { MakerCard } from './MakerCard.tsx';
import { SearchBar } from './SearchBar.tsx';
import { MakersService } from '../../services/services/MakersService.ts';
import { IGetMakers } from '../../services/nswag-generated-file.ts';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';

export default function SearchResultsPage () {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState<IGetMakers[]>();
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        const searchParam = searchParams.get(SEARCH_PARAMS_KEY);
        const zipcodeParam = searchParams.get(ZIP_CODE_KEY);
        
        if (!searchParam || searchParam?.length === 0 || !zipcodeParam || (zipcodeParam && zipcodeParam.length < 4)) return;
        
        setLoading(true);
        new MakersService().makers(zipcodeParam, searchParam.replace(' ', ';'))
        .then((res) => setResults(res.result))
        .finally(() => setLoading(false));
        
    }, [searchParams]);
    return (
        <div className="flex flex-col gap-4 container-shadow main-container">
            <SearchBar/>
            {!loading && results?.map((result, index) => (
                <MakerCard key={getUniqueID(`${result.id ?? index}`, index)} result={result}/>
            ))}
            {loading && <div className="flex justify-center items-center h-40">Chargement...</div>}
        </div>
    );
}