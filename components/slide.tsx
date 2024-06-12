import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


function Slides() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                // autoplay={{
                //     delay: 4500,
                //     disableOnInteraction: false,
                // }}
                // grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                // spaceBetween={100}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='relative'>
                    <Image
                        src='/banner/banner1.jpg'
                        width={1200}
                        height={600}
                        alt='banner'
                        className='mx-auto w-full'
                    />
                    <div className='absolute top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.4)] text-black'>
                        <p>title</p>
                        <p>desc</p>
                        <p>links</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/banner/banner2.jpg'
                        width={1200}
                        height={600}
                        alt='banner'
                        className='mx-auto w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/banner/banner3.jpg'
                        width={1200}
                        height={600}
                        alt='banner'
                        className='mx-auto w-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/banner/banner4.jpg'
                        width={1200}
                        height={600}
                        alt='banner'
                        className='mx-auto w-full'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slides;