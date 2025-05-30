import Image from 'next/image';
import { Button } from '../ui/button';
import {
    ArrowRight,
    CircleDollarSign,
    Handshake,
    HomeIcon,
} from 'lucide-react';

const Features = () => {
    return (
        <div>
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
                            src='/assets/next-door31.png'
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
                        {/* ---------- 아이콘 + 문장 2 ---------- */}
                        <div className='pt-7'>
                            <div className='grid grid-cols-9 py-5 gap-5 items-center'>
                                <div className='col-span-2'>
                                    <CircleDollarSign
                                        size={90}
                                        className='bg-gray-200 hover:text-white hover:bg-primary rounded-full p-5 cursor-pointer hover:transition-all hover:animate-pulse shadow-xl hover:shadow-2xl'
                                    />
                                </div>
                                <div className='col-span-7'>
                                    <h1 className='text-2xl font-semibold py-3'>
                                        The Ability to Indentify market Entry
                                    </h1>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Tempore, ipsa
                                        exercitationem veniam molestias
                                        reiciendis, iure corrupti laudantium
                                        officiis, quaerat nisi sunt laborum
                                        saepe neque quam impedit a sed ex!
                                        Nesciunt?
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-9 py-5 gap-5 items-center'>
                                <div className='col-span-2'>
                                    <Handshake
                                        size={90}
                                        className='bg-gray-200 hover:text-white hover:bg-primary rounded-full p-5 cursor-pointer hover:transition-all hover:animate-pulse shadow-xl hover:shadow-2xl'
                                    />
                                </div>
                                <div className='col-span-7'>
                                    <h1 className='text-2xl font-semibold py-3'>
                                        The Ability to Indentify market Entry
                                    </h1>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Tempore, ipsa
                                        exercitationem veniam molestias
                                        reiciendis, iure corrupti laudantium
                                        officiis, quaerat nisi sunt laborum
                                        saepe neque quam impedit a sed ex!
                                        Nesciunt?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Features;
