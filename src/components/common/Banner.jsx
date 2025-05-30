import { Handshake } from 'lucide-react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 items-center justify-around gap-20 py-24'>
                {/* ---------- Left Block ---------- */}
                <div className='p-10'>
                    {/* ---------- Head Copy ---------- */}
                    <h1 className='text-7xl font-semibold'>
                        Search And Tour With{' '}
                        <span className='text-primary'>Ozalams</span>
                    </h1>
                    {/* ---------- Sub Copy ---------- */}
                    <p className='pt-5 text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius fugiat explicabo, ea iure debitis veritatis
                        molestiae aliquid sit officiis aspernatur quam quasi
                        quisquam quos laboriosam, inventore perferendis eaque
                        praesentium dolores.
                    </p>
                    {/* ---------- 3 images ---------- */}
                    <div className='flex gap-20 py-14 px-4'>
                        <Image
                            src='/assets/icon3.png'
                            alt='icons'
                            width={100}
                            height={50}
                            className='w-22 object-cover'
                        />
                        <Image
                            src='/assets/icon2.png'
                            alt='icons'
                            width={100}
                            height={50}
                            className='w-22 object-cover'
                        />
                        <Image
                            src='/assets/icon1.png'
                            alt='icons'
                            width={100}
                            height={50}
                            className='w-22 object-cover'
                        />
                    </div>
                    {/* ---------- Search Bar ---------- */}
                    <div>
                        <div className='flex flex-col gap-2 '>
                            <form action='' method='POST'>
                                <div className='flex'>
                                    <input
                                        type='text'
                                        className='border rounded-l-md p-4 w-full'
                                        placeholder='Address, Schools City etc.'
                                        required
                                    />
                                    <button
                                        className='bg-primary cursor-pointer text-lg text-white rounded-r-md px-8 py-3'
                                        type='submit '
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* ---------- Right Block ---------- */}
                <div className='relative flex justify-center'>
                    {/* ---------- 작은 아치 모양 ---------- */}
                    <div className='absolute top-5 left-16'>
                        <div className='bg-gray-200/90 w-40 p-3 rounded-t-full shadow-md'>
                            <div className='bg-white shadow-md w-34 p-3 rounded-t-full'>
                                <div className='w-28 p-5 bg-gradient-to-r from-primary to-[#6088f4af] rounded-t-full'>
                                    <h1 className='text-xl text-white font-semibold pt-4 text-center'>
                                        Super Sale$
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------- 수평 플로팅 메뉴 버튼 ---------- */}
                    <div className='absolute right-5 top-78'>
                        <div className='w-56 space-y-5 bg-gray-200/60 p-3 rounded-lg'>
                            <div className='flex gap-3 items-center justify-center p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Paid Partner Ship
                            </div>
                            <div className='flex gap-3 items-center justify-center p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Paid Partner Ship
                            </div>
                            <div className='flex gap-3 items-center justify-center p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Paid Partner Ship
                            </div>
                            <div className='flex gap-3 items-center justify-center p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Paid Partner Ship
                            </div>
                        </div>
                    </div>
                    {/* ---------- 큰 배경 Image ---------- */}
                    <div>
                        <Image
                            src='/assets/main-home1.jpg'
                            alt='main-home1'
                            width={600}
                            height={600}
                            className='object-cover object-center rounded-t-full px-10'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;
