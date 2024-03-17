import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MakersService } from '../../services/services/MakersService.ts';
import { IGetMaker, IGetMakerImages } from '../../services/nswag-generated-file.ts';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';
import { Button } from '../../shadcn/components/ui/button.tsx';
import Paths from '../../routes/paths.ts';

const makerService = new MakersService();

export function MakerPage () {
    const [maker, setMaker] = useState<IGetMaker>();
    const [projects, setProjects] = useState<IGetMakerImages>();
    
    const { makerId } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const makerIdNumber = Number(makerId);
        if (isNaN(makerIdNumber)) return;
        
        makerService.makers2(makerIdNumber).then((res) => {
            setMaker(res.result);
        });
        
        makerService.getMakerImages(makerIdNumber).then((res) => {
            console.log(res.result);
            setProjects(res.result);
        });
    }, [makerId]);
    
    return (
        <div className="main-container h-full overflow-y-auto">
            <div className="border-b-2 flex flex-col">
                <h1 className="main-title">{maker?.name}</h1>
                <h3 className="self-center">{`Nombre de projet${(projects?.projects && projects.projects.length > 1) ? 's' : ''}: ${projects?.projects?.length ?? '-'}`}</h3>
                <div>
                    <h3 className="font-semibold">Coordonnées</h3>
                    <p>{maker?.street}, {maker?.streetNumber}</p>
                    <p>{maker?.zipCode}, {maker?.city}</p>
                    <p>{maker?.country}</p>
                </div>
                <Button onClick={() => navigate(Paths.Chat)} className="my-20 py-6 text-xl">
                    Contacter le Maker 💬
                </Button>
            </div>
            <div>
                <h2 className="main-title">Projets</h2>
                {projects?.projects?.map((project, index) => (
                    <div key={getUniqueID(project?.name ?? 'project', index)}>
                        <h2 className="uppercase font-semibold text-lg">{project.name}</h2>
                        <div className="flex flex-wrap justify-between">
                            {(project?.images && project.images.length > 0) ? project.images?.map((image, index) => (
                                    <img key={getUniqueID(image, index)}
                                         src={`${image}${projects['sizesList'][1]}.jpeg`}
                                         height={100}
                                         width={100}
                                         alt={project.name}/>
                                ))
                                : 'Pas d\'images pour ce projet.'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}