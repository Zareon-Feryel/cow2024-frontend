import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../../shadcn/components/ui/carousel.tsx';
import { getUniqueID } from '../../helpers/getUniquerID.helper.ts';
import { useState } from 'react';
import { clsx } from 'clsx';

interface Props {
    images: string[];
}

export function ImageCarousel ({ images }: Readonly<Props>) {
    const [loading, setLoading] = useState(true);
    
    return (
        <Carousel
            opts={{
                loop: true,
                align: 'start',
            }}
            className="w-full z-10 max-w-xs"
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={getUniqueID(image, index)}>
                        <div className={clsx('h-52 bg-gray-200 rounded-xl skeleton', !loading && 'hidden')}/>
                        <img className={clsx('h-52 rounded-xl', loading && 'hidden')}
                             onLoad={() => setLoading(false)}
                             src={image}
                             alt={image}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    
    );
}