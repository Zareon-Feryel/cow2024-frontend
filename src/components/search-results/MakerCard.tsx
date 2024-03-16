import { IGetMakers } from '../../services/nswag-generated-file.ts';

interface Props {
    result: IGetMakers;
}

export function MakerCard ({ result }: Readonly<Props>) {
    return (
        <div key={result.id} className="container-shadow">
            <h2>{result.name}</h2>
            <p>{result.email}</p>
            <p>{result.zipCode}</p>
            <p>{result.country}</p>
            <p>{result.images?.map(image => (
                <img src={image} alt="Maker Image"/>
            ))}</p>
            <p>{result.distance} KM</p>
            <p>{result.keywords?.join(', ')}</p>
        </div>
    );
}