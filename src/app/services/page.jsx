import { Card } from '@/components/ui/card';
import {
    Home,
    Search,
    Shield,
    CreditCard,
    Star,
    Building,
    Building2,
    User,
} from 'lucide-react';
import Image from 'next/image';

const ServicesPage = () => {
    const Services = [
        {
            icon: Home,
            title: 'Property Management',
            description:
                'Comprihensive property management services including mainterance, repairs, and maintenance.',
            features: [
                '24/7 Maintenance',
                'Tenent Screenging',
                'Rent Collection',
            ],
        },
        {
            icon: Search,
            title: 'Property Search',
            description:
                'Advanced property Search tools to help you find your perfect rental property quickly and easily.',
            features: ['Advanced Filters', 'Vertual Tours', 'Saved Searches'],
        },
        {
            icon: Shield,
            title: 'Rental Insurance',
            description:
                'Protect your investment with our comprehensive rental insurance coverage.',
            features: [
                'Property Coverage',
                'Laiavility Protection',
                'Quick Claims',
            ],
        },
        {
            icon: CreditCard,
            title: 'Online Payments',
            description:
                'Secure and Convient way to make payments online for your rental property.',
            features: [
                'Secure Payments',
                'Automatic Billing',
                'Payment History',
            ],
        },
    ];
    const testimonials = [
        {
            name: 'John Smith',
            role: 'Property Owner',
            image: '/assets/team1.jpg',
            text: 'RentHome ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
            rating: 5,
        },
        {
            name: 'Sarah Johnson',
            role: 'Tenant',
            image: '/assets/team2.jpg',
            text: 'The First ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
            rating: 3,
        },
        {
            name: 'Micleal Chen',
            role: 'Investor',
            image: '/assets/team3.jpg',
            text: 'Finding ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.',
            rating: 4,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* ---------- Services Section ---------- */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/services-img.jpg"
                        alt="Services Hero"
                        fill
                        className="object-cover brightness-30"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        leading-relaxed : 줄간격을 넓게 해준다. lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </p>
                </div>
            </div>
            {/* ---------- Services Grid ---------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Services.map((service, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-12 h12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center text-gray-600"
                                    >
                                        <Star className="w-4 h-4 text-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
            {/* ---------- Feature Section ---------- */}
            <div className="bg-gray-50 py-28 my-10 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900 pb-6">
                                Why Choose Our Services?
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Expensive Propertiy Network
                                        </h3>
                                        <p className="text-gray-600">
                                            Access to a wide range of properties
                                            consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Expert Support Team
                                        </h3>
                                        <p className="text-gray-600">
                                            Access to a wide range of properties
                                            consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Secure Transactions
                                        </h3>
                                        <p className="text-gray-600">
                                            Safe and protected pament processing
                                            for the transactions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/services-img.jpeg"
                                alt="Services Feature"
                                fill
                                className="object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------- Transmission Section ---------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-32">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    What Ouer Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map(
                                    (_, idx) => (
                                        <Star
                                            key={idx}
                                            className="w-4 h-4 text-yellow-400"
                                        />
                                    )
                                )}
                            </div>
                            <p>
                                lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusantium necessitatibus
                                aliquam consectetur
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ServicesPage;
