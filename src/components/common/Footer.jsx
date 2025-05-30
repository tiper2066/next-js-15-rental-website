import { Facebook, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container mx-auto py-10'>
            {/* ---------- 메뉴 그룹 영역 ---------- */}
            <div className='grid grid-cols-3 gap-10 items-start'>
                {/* ---------- 로고 그룹 영역 ---------- */}
                <div className=''>
                    <div className=''>
                        <Image
                            src='/logo.png'
                            alt='logo'
                            width={200}
                            height={100}
                            className='pb-5'
                        />
                        <p className='text-lg pr-16 pt-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla iure asperiores dolores illum suscipit
                            at? Ipsa iure modi numquam dicta sunt veritatis
                            illum cumque cum soluta culpa, esse eum ab.
                        </p>
                    </div>
                </div>
                {/* ---------- Links & Contact그룹 영역 ---------- */}
                <div className='flex gap-10 justify-around'>
                    {/* ---------- Links 그룹 영역 ---------- */}
                    <div className=''>
                        <h3 className='text-2xl font-semibold'>Links</h3>
                        <ul className='space-y-3 text-lg font-medium pt-8 flex flex-col'>
                            <Link
                                href='#'
                                className='hover:text-primary hover:animate-pulse hover:transition-all hover:scale-105'
                            >
                                Home
                            </Link>
                            <Link
                                href='#'
                                className='hover:text-primary hover:animate-pulse hover:transition-all hover:scale-105'
                            >
                                About
                            </Link>
                            <Link
                                href='#'
                                className='hover:text-primary hover:animate-pulse hover:transition-all hover:scale-105'
                            >
                                Services
                            </Link>
                            <Link
                                href='#'
                                className='hover:text-primary hover:animate-pulse hover:transition-all hover:scale-105'
                            >
                                Contact
                            </Link>
                        </ul>
                    </div>
                    {/* ---------- Contact 그룹 영역 ---------- */}
                    <div className=''>
                        <h3 className='text-2xl font-semibold'>Contact</h3>
                        <ul className='space-y-3 text-lg font-medium pt-8'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                {/* ---------- 썸네일 이미지 + 설명문구 그룹 영역 ---------- */}
                <div className='flex justify-around'>
                    <div className='space-y-4'>
                        {/* ---------- 썸네일 이미지 블록 1 */}
                        <div className='flex items-center space-x-7'>
                            <div className='w-16 h-16 rounded-lg overflow-hidden'>
                                <Image
                                    src='/assets/ab1.png'
                                    alt='House Update 1'
                                    width={64}
                                    height={64}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div>
                                <h3 className='text-black text-lg font-medium'>
                                    Here are updates
                                </h3>
                                <p className='text-gray-700'>
                                    Lorem ipsum, dolor sit amet consectetur
                                </p>
                            </div>
                        </div>
                        {/* ---------- 썸네일 이미지 블록 2 */}
                        <div className='flex items-center space-x-7'>
                            <div className='w-16 h-16 rounded-lg overflow-hidden'>
                                <Image
                                    src='/assets/ab2.jpg'
                                    alt='House Update 1'
                                    width={64}
                                    height={64}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div>
                                <h3 className='text-black text-lg font-medium'>
                                    Here are updates
                                </h3>
                                <p className='text-gray-700'>
                                    Lorem ipsum, dolor sit amet consectetur
                                </p>
                            </div>
                        </div>
                        {/* ---------- 썸네일 이미지 블록 3 */}
                        <div className='flex items-center space-x-7'>
                            <div className='w-16 h-16 rounded-lg overflow-hidden'>
                                <Image
                                    src='/assets/ab3.jpg'
                                    alt='House Update 1'
                                    width={64}
                                    height={64}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div>
                                <h3 className='text-black text-lg font-medium'>
                                    Here are updates
                                </h3>
                                <p className='text-gray-700'>
                                    Lorem ipsum, dolor sit amet consectetur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------- Copyright & SNS 영역 ---------- */}
            <div className='border-t-2 border-gray-200 mt-10'>
                <div className='flex justify-between items-center py-5'>
                    <p className='text-gray-500'>
                        &copy; 2025 Real Estate. All rights reserved.
                    </p>
                    <div className='flex gap-5'>
                        <Facebook
                            size={20}
                            className='cursor-pointer hover:scale-125 hover:transition-all animate-in hover:text-primary'
                        />
                        <Twitter
                            size={20}
                            className='cursor-pointer hover:scale-125 hover:transition-all animate-in hover:text-primary'
                        />
                        <Linkedin
                            size={20}
                            className='cursor-pointer hover:scale-125 hover:transition-all animate-in hover:text-primary'
                        />
                        <MessageCircle
                            size={20}
                            className='cursor-pointer hover:scale-125 hover:transition-all animate-in hover:text-primary'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
