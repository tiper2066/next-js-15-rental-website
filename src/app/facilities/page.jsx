import { Card } from '@/components/ui/card';
import {
    Wifi,
    CircleParking,
    Lock,
    Tv,
    Coffee,
    Building,
    Utensils,
    AirVent,
    WavesLadder,
    Dumbbell,
    CookingPot,
    Pyramid,
} from 'lucide-react';
import Image from 'next/image';

const FacilitiesPage = () => {
    const facilities = [
        {
            category: 'Basic Amenities',
            items: [
                {
                    icon: Wifi,
                    title: 'High-Speed Wifi',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: CircleParking,
                    title: 'Packing Space',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Lock,
                    title: '24/7 Security',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Building,
                    title: 'Elevator Access',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
            ],
        },
        {
            category: 'Recreational facilities',
            items: [
                {
                    icon: WavesLadder,
                    title: 'Swimming Pool',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Dumbbell,
                    title: 'Packing Space',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Tv,
                    title: 'Entertainment Room',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Coffee,
                    title: 'Cafe Lounge',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
            ],
        },
        {
            category: 'Home Comforts',
            items: [
                {
                    icon: CookingPot,
                    title: 'Modorn Kitchen',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Pyramid,
                    title: 'Laundry Room',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: AirVent,
                    title: 'Air Conditioning',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
                {
                    icon: Utensils,
                    title: 'Dining Area',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* ---------- Hero Section ---------- */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/facilities.png"
                        alt="Facilities Hero"
                        fill
                        className="object-cover brightness-30"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-6"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        Our Facilities
                    </h1>
                    <p
                        className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        leading-relaxed : 줄간격을 넓게 해준다. lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </p>
                </div>
            </div>
            {/* ---------- Facilities Categories ---------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {facilities.map((category, index) => (
                    <div key={index} className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            {category.category}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {category.items.map((item, idx) => (
                                <Card
                                    key={idx}
                                    className="p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ---------- Take a Virtual Tour Section ---------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-semibold text-gray-900">
                            Take a Virtual Tour
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                lorem ipsum dolor sit amet consectetur
                                adipiscing elit lorem ipsum dolor sit amet
                                consectetur adipiscing elit lorem ipsum dolor
                                sit amet consectetur adipiscing elit lorem ipsum
                                dolor sit amet consectetur adipiscing elit
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                lorem ipsum dolor sit amet consectetur
                                adipiscing elit lorem ipsum dolor sit amet
                                consectetur adipiscing elit lorem ipsum dolor
                                sit amet consectetur adipiscing elit lorem ipsum
                                dolor sit amet consectetur adipiscing elit
                            </p>
                        </div>
                        {/* ----- Button 2 ----- */}
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                                Learn More
                            </button>
                            <button className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/facilities1.jpg"
                            alt="Company Story"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ---------- CTA Section ---------- */}
            <div className="bg-gray-900 text-white py-20 mb-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Experience Our Facilities
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-10 transition-colors duration-300">
                            Book Viewing
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-gray-10 transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FacilitiesPage;
