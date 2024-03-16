import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../../shadcn/components/ui/carousel.tsx';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';

interface Props {
    images: string[];
}

export function ImageCarousel ({ images }: Readonly<Props>) {
    return (
        <Carousel
            opts={{
                loop: true,
                align: 'start',
            }}
            className="w-full max-w-xs"
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={getUniqueID(image, index)}>
                        <img className="h-52 rounded-xl" src={image} alt={image}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    
    );
}