import { CreditCard, Navigation } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const servicesData = [
    {
        image: '/assets/ab3.jpg',
        profiles: ['/assets/ab1.png', '/assets/ab2.jpg', '/assets/ab3.jpg'],
        visited: '2k+ People Visited',
        buttonColor: 'bg-primary',
        actions: [
            {
                icon: (
                    <Navigation
                        size={36}
                        className='p-2 rounded-lg bg-gray-200 text-black'
                    />
                ),
                title: 'Second Money',
                description: 'Take Acc to Acc',
            },
            {
                icon: (
                    <CreditCard
                        size={36}
                        className='p-2 rounded-lg bg-gray-200 text-black'
                    />
                ),
                title: 'Pay The Bill',
                description: 'Budget On Rent',
            },
        ],
    },
    {
        image: '/assets/ab3.jpg',
        profiles: ['/assets/ab1.png', '/assets/ab2.jpg', '/assets/ab3.jpg'],
        visited: '2k+ People Visited',
        buttonColor: 'bg-primary',
        actions: [
            {
                icon: (
                    <Navigation
                        size={36}
                        className='p-2 rounded-lg bg-gray-200 text-black'
                    />
                ),
                title: 'Second Money',
                description: 'Take Acc to Acc',
            },
            {
                icon: (
                    <CreditCard
                        size={36}
                        className='p-2 rounded-lg bg-gray-200 text-black'
                    />
                ),
                title: 'Pay The Bill',
                description: 'Budget On Rent',
            },
        ],
    },
    {
        image: '/assets/ab3.jpg',
        profiles: ['/assets/ab1.png', '/assets/ab2.jpg', '/assets/ab3.jpg'],
        visited: '2k+ People Visited',
        buttonColor: 'bg-primary',
        actions: [
            {
                icon: (
                    <Navigation
                        size={36}
                        className='p-2 rounded-lg bg-gray-200 text-black'
                    />
                ),
                title: 'Second Money',
                description: 'Take Acc to Acc',
            },
            {
                icon: (
                    <CreditCard
                        size={36}
                        className='p-2 rounded-lg bg-gray-200 text-black'
                    />
                ),
                title: 'Pay The Bill',
                description: 'Budget On Rent',
            },
        ],
    },
];

const Services = () => {
    return (
        <div className='container mx-auto py-20'>
            {/* ---------- 타이틀 및 설명 문구 ---------- */}
            <div className='pb-20 space-y-5'>
                <h1 className='text-5xl font-semibold capitalize'>
                    Take The First <span className='text-primary'>Steps</span>
                </h1>
                <p className='text-lg text-gray-500'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* ---------- 카드 3개 영역 ---------- */}
            <div className='grid grid-cols-3 gap-16'>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className='bg-white p-8 rounded-4xl shadow-md'
                    >
                        <div className=''>
                            <Image
                                src={service.image}
                                alt='about'
                                width={300}
                                height={300}
                                className='object-center w-full rounded-2xl'
                            />
                            {/* ---------- 아이타 그룹 아이콘 영역 ---------- */}
                            <div className='flex items-center space-x-2 mt-4 bg-gray-100 py-3 px-4 rounded-full'>
                                <div className='flex -space-x-2'>
                                    {service.profiles.map((profile, idx) => (
                                        <Image
                                            key={idx}
                                            src={profile}
                                            alt={`profile ${idx + 1}`}
                                            width={300}
                                            height={300}
                                            className='w-8 h-8 rounded-full border-2 border-white'
                                        />
                                    ))}
                                </div>
                                <span className='text-gray-700 font-medium'>
                                    {service.visited}
                                </span>
                                <Button
                                    className={`ml-auto ${service.buttonColor} text-white px-6 py-2 rounded-full`}
                                >
                                    Visit
                                </Button>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-10 pt-5 items-center justify-center'>
                            {service.actions.map((action, idx) => (
                                <div
                                    key={idx}
                                    className='p-5 rounded-2xl bg-gray-100 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white cursor-pointer hover:transition-all'
                                >
                                    {action.icon}
                                    <h1 className='mt-2 text-xl font-medium'>
                                        {action.title}
                                    </h1>
                                    <p>{action.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Services;
