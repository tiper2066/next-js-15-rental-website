import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, HomeIcon } from 'lucide-react';

const About = () => {
    return (
        <>
            <div className='container py-40 mx-auto'>
                <div className='grid grid-cols-2 gap-20 items-center'>
                    {/* ---------- Left Image 영역 ---------- */}
                    <div className='relative'>
                        {/* ---------- 작은 아치 모양 ---------- */}
                        <div className='absolute top-0 right-34'>
                            <div className='bg-gray-200/90 w-40 p-3 rounded-t-full shadow-md'>
                                <div className='bg-white shadow-md w-34 p-3 rounded-t-full'>
                                    <div className='w-28 p-5 bg-gradient-to-r from-primary to-[#3c63cda5] rounded-t-full'>
                                        <h1 className='text-xl text-white font-semibold pt-4 text-center'>
                                            Super Sale$
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image
                            src='/assets/next-door11.png'
                            alt='about'
                            width={600}
                            height={600}
                            className='object-center rounded-t-full px-10'
                        />
                    </div>
                    {/* ---------- Right Copy & 썸네일 영역 ---------- */}
                    <div>
                        {/* ---------- Head Copy ---------- */}
                        <h1 className='text-7xl font-semibold py-5 capitalize'>
                            Sell for more than the home{' '}
                            <span className='text-primary'>Next Door</span>
                        </h1>
                        {/* ---------- Sub Copy ---------- */}
                        <p className='pt-5 text-lg'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Eius fugiat explicabo, ea iure debitis
                            veritatis molestiae aliquid sit officiis aspernatur
                            quam quasi quisquam quos laboriosam, inventore
                            perferendis eaque praesentium dolores.
                        </p>
                        {/* ---------- 썸네일 이미지 3 ---------- */}
                        <div>
                            <div className='grid grid-cols-3 gap-10 pt-16'>
                                <div className='relative p-5 bg-gray-100 rounded-t-full text-center'>
                                    <Image
                                        src='/assets/ab1.png'
                                        alt='about'
                                        width={600}
                                        height={400}
                                        className='rounded-t-full h-40'
                                    />
                                    <h1 className='py-2 text-lg'>
                                        Rent a Home
                                    </h1>
                                    <Button size='sm'>
                                        Search Now
                                        <ArrowRight size={20} />
                                    </Button>
                                    {/* Home Badge */}
                                    <div className='absolute top-0 right-0 bg-gray-100/50 p-[5px] rounded-xl shadow-md'>
                                        <div className='bg-gray-100 p-[5px] rounded-xl'>
                                            <div className='bg-primary rounded-xl p-2 w-13'>
                                                <HomeIcon
                                                    size={35}
                                                    className='text-white p-1'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative p-5 bg-gray-100 rounded-t-full text-center'>
                                    <Image
                                        src='/assets/ab2.jpg'
                                        alt='about'
                                        width={600}
                                        height={400}
                                        className='rounded-t-full h-40'
                                    />
                                    <h1 className='py-2 text-lg'>
                                        Rent a Home
                                    </h1>
                                    <Button size='sm'>
                                        Search Now
                                        <ArrowRight size={20} />
                                    </Button>
                                    {/* Home Badge */}
                                    <div className='absolute top-0 right-0 bg-gray-100/50 p-[5px] rounded-xl shadow-md'>
                                        <div className='bg-gray-100 p-[5px] rounded-xl'>
                                            <div className='bg-primary rounded-xl p-2 w-13'>
                                                <HomeIcon
                                                    size={35}
                                                    className='text-white p-1'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative p-5 bg-gray-100 rounded-t-full text-center'>
                                    <Image
                                        src='/assets/ab3.jpg'
                                        alt='about'
                                        width={600}
                                        height={400}
                                        className='rounded-t-full h-40'
                                    />
                                    <h1 className='py-2 text-lg'>
                                        Rent a Home
                                    </h1>
                                    <Button size='sm'>
                                        Search Now
                                        <ArrowRight size={20} />
                                    </Button>
                                    {/* Home Badge */}
                                    <div className='absolute top-0 right-0 bg-gray-100/50 p-[5px] rounded-xl shadow-md'>
                                        <div className='bg-gray-100 p-[5px] rounded-xl'>
                                            <div className='bg-primary rounded-xl p-2 w-13'>
                                                <HomeIcon
                                                    size={35}
                                                    className='text-white p-1'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
