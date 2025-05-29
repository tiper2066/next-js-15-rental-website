'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPinHouse, UserRoundSearch } from 'lucide-react';
import { Button } from '../ui/button';

const products = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Security',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: FingerPrintIcon,
    },
    {
        name: 'Integrations',
        description: 'Connect with third-party tools',
        href: '#',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='bg-white'>
            <nav
                aria-label='Global'
                className='mx-auto flex container items-center justify-between p-6 lg:px-8'
            >
                {/* ---------- Site Logo ---------- */}
                <div className='flex lg:flex-1'>
                    <Link href='#'>
                        <Image
                            src='/logo.png'
                            alt='logo'
                            width={160}
                            height={80}
                        />
                    </Link>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon aria-hidden='true' className='size-6' />
                    </button>
                </div>
                {/* ---------- main menu ---------- */}
                <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
                    <Link
                        href='#'
                        className='text-lg font-normal tracking-wide text-gray-900'
                    >
                        Home
                    </Link>
                    <Link
                        href='#'
                        className='text-lg font-normal tracking-wide text-gray-900'
                    >
                        About Us
                    </Link>
                    <Link
                        href='#'
                        className='text-lg font-normal tracking-wide text-gray-900'
                    >
                        Services
                    </Link>
                    <Link
                        href='#'
                        className='text-lg font-normal tracking-wide text-gray-900'
                    >
                        Facilites
                    </Link>
                    <Link
                        href='#'
                        className='text-lg font-normal tracking-wide text-gray-900'
                    >
                        Blogs
                    </Link>
                </PopoverGroup>
                {/* ---------- login 버튼 ---------- */}
                <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-5'>
                    {/* <Link
                        href='#'
                        className='flex items-center gap-2 text-lg font-normal tracking-wide text-gray-900'
                    >
                        Log in <ArrowRight size={20} />
                    </Link> */}
                    <Button variant='secondary'>
                        <MapPinHouse size={30} />
                        Visit Now
                    </Button>
                    <Button>
                        <UserRoundSearch size={30} /> Contact Us
                    </Button>
                </div>
            </nav>
            {/* ---------- Mobile menu ---------- */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className='lg:hidden'
            >
                <div className='fixed inset-0 z-10' />
                <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                        <Link href='#'>
                            <Image
                                src='/logo.png'
                                alt='logo'
                                width={120}
                                height={60}
                            />
                        </Link>
                        <button
                            type='button'
                            onClick={() => setMobileMenuOpen(false)}
                            className='-m-2.5 rounded-md p-2.5 text-gray-700'
                        >
                            <span className='sr-only'>Close menu</span>
                            <XMarkIcon aria-hidden='true' className='size-6' />
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/10'>
                            <div className='flex flex-col space-y-5 py-10'>
                                <Link
                                    href='#'
                                    className='text-lg font-normal tracking-wide text-gray-900'
                                >
                                    Home
                                </Link>
                                <Link
                                    href='#'
                                    className='text-lg font-normal tracking-wide text-gray-900'
                                >
                                    About Us
                                </Link>
                                <Link
                                    href='#'
                                    className='text-lg font-normal tracking-wide text-gray-900'
                                >
                                    Facilites
                                </Link>
                            </div>
                            <div className='flex gap-5 py-6 mt-5'>
                                <Button variant='secondary'>
                                    <MapPinHouse size={30} />
                                    Blogs
                                </Button>
                                <Button>
                                    <UserRoundSearch size={30} /> Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
