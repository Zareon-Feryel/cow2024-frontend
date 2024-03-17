import { IGetMakers } from '../../services/nswag-generated-file.ts';
import { ImageCarousel } from '../carousel/ImageCarousel.tsx';
import { useNavigate } from 'react-router-dom';
import Paths from '../../routes/paths.ts';

interface Props {
    result: IGetMakers;
}

export function MakerCard ({ result }: Readonly<Props>) {
    const navigate = useNavigate();
    
    const test = 'https://github.com/EloiStree/2024_03_16_UniCraftWalloniaMirrorSample/blob/main/3D%20Mirror/Images/2020_03_10_ArduinoNanoFlatNanoPaint/Arduino%20Nano%20Paint%20Capacitive%20v6.stl.png?raw=true';
    
    const handleNavigate = () => {
        navigate(`/${Paths.Maker}/${result.id}`);
    };
    
    return (
        <div className="container-shadow hover-effect py-5 flex gap-10">
            <ImageCarousel images={result.images}/>
            <button onClick={handleNavigate} className="flex flex-1 h-52 relative text-xl">
                <div className="text-left">
                    <h2>{result?.name?.toUpperCase()}</h2>
                    <p>{result.email}</p>
                </div>
                <div className="flex absolute right-0 top-0">
                    {result.zipCode &&
						<p><span className="text-gray-500 text-xs pr-3">Code Postal</span>{result.zipCode}</p>}
                    {result.country && <p><span className="text-gray-500 text-xs px-3">Pays</span>{result.country}</p>}
                    {result.distance && <p className="border-l px-5 ml-5">
						<span className="text-gray-500 text-xs pr-3">Distance</span>{result.distance !== -1 ? result.distance : '-'} Km
					</p>}
                </div>
                <p className="text-xs absolute bottom-0 text-gray-500">{result.keywords?.join(', ')}</p>
            </button>
        </div>
    );
}