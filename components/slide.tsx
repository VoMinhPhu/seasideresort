import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import banner from '@/constants/banner';


function Slides() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
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
                {banner?.map(b => {
                    return (
                        <SwiperSlide className='relative'>
                            <Image
                                src={b.path}
                                width={1200}
                                height={600}
                                alt='banner'
                                className='mx-auto w-full'
                            />
                            <div className='absolute top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.4)] text-black'>
                                <div className='flex flex-col h-full w-full items-center justify-center text-white'>
                                    <p className='text-[37px] uppercase font-semibold'>{b.title}</p>
                                    <p>{b.desc}</p>
                                    <Link href='#'
                                        className='uppercase text-xs py-[7px] px-[23px] border hover:bg-white hover:text-black' >
                                        {b.linkName}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
}

export default Slides;