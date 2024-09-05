'use client';

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Image from "next/image";
export default function Carrossel() {
    return (
        <Splide aria-label="My Favorite Images" options={{type:"loop", autoplay:true, interval:2000}}>
            <SplideSlide>
                <Image src="/logo/a.jpg" 
                width={1200}
                height={1080}
                alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <Image src="/logo/jogohellokitty.jpg" 
                width={1200}
                height={1080}
                alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
            <Image src="/logo/aniversariokitty.jpg" 
                width={1200}
                height={1080}
                alt="Image 3" />
            </SplideSlide>
            <SplideSlide>
            <Image src="/logo/kittyeamigos.jpg" 
                width={1200}
                height={1080}
                alt="Image 4" />
            </SplideSlide>
        </Splide>

    );
}
