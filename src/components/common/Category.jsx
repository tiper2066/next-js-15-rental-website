import { Handshake } from 'lucide-react';
import Image from 'next/image';

const categories = [
    {
        src: '/assets/category1.jpg',
        alt: 'bedroom',
        title: 'Bathroom Comfotable',
        className: 'rounded-xl',
    },
    {
        src: '/assets/category2.jpg',
        alt: 'bedroom',
        title: 'Bathroom Comfotable',
        className: 'rounded-xl',
    },
    {
        src: '/assets/category3.jpg',
        alt: 'bedroom',
        title: 'Bathroom Comfotable',
        className: 'rounded-xl',
    },
    {
        src: '/assets/category4.jpg',
        alt: 'bedroom',
        title: 'Bathroom Comfotable',
        className: 'rounded-xl',
    },
    {
        src: '/assets/category5.jpg',
        alt: 'bedroom',
        title: 'Bathroom Comfotable',
        className: 'rounded-xl',
    },
    {
        src: '/assets/category6.jpg',
        alt: 'bedroom',
        title: 'Bathroom Comfotable',
        className: 'rounded-xl',
    },
];

const Category = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-10 items-center'>
                {/* ---------- Left 썸네일 영역 ---------- */}
                <div className=''>
                    {/* ---------- 썸네일 6개 영역 ---------- */}
                    <div className='grid grid-cols-3 space-y-4 gap-10'>
                        {categories.map((category) => (
                            <div
                                key={category.src}
                                className='space-y-2 flex flex-col items-center'
                            >
                                <Image
                                    src={category.src}
                                    alt={category.alt}
                                    width={170}
                                    height={170}
                                    className={category.className}
                                />
                                <h2 className='text-lg font-normal pt-3'>
                                    {category.title}
                                </h2>
                            </div>
                        ))}
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
                <div className='relative'>
                    {/* ---------- 수평 플로팅 메뉴 버튼 ---------- */}
                    <div className='absolute -right-10 top-78'>
                        <div className='w-44 space-y-5 bg-gray-200/60 p-3 rounded-lg'>
                            <div className='flex gap-3 items-center justify-start p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Facebook
                            </div>
                            <div className='flex gap-3 items-center justify-start p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Twitter
                            </div>
                            <div className='flex gap-3 items-center justify-start p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Instagram
                            </div>
                            <div className='flex gap-3 items-center justify-start p-3 bg-white rounded-lg'>
                                <Handshake
                                    size={35}
                                    className='bg-primary p-2 rounded-sm text-white'
                                />
                                Telegram
                            </div>
                        </div>
                    </div>
                    {/* ---------- Right 단독 이미지 영역 ---------- */}
                    <div className='flex justify-end'>
                        <Image
                            src='/assets/next-door22.webp'
                            alt='bedroom'
                            width={600}
                            height={600}
                            className='rounded-t-full object-cover object-center p-10'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category;
