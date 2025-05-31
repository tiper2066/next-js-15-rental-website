import { Card } from '@/components/ui/card';
import { Building2, Users, Award, Home } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
    // Team Section Data
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            image: '/assets/team1.jpg',
            bio: '10+ years of experience in real estate and property mamagement.',
        },
        {
            name: 'Micleal Chen',
            role: 'Chief operations Officer',
            image: '/assets/team2.jpg',
            bio: 'Expert in operational efficiency and customer service.',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Customer Relations',
            image: '/assets/team3.jpg',
            bio: 'Passionte about creating exceptional customer experiences.',
        },
    ];

    // Stats Section Data
    const stats = [
        {
            icon: Building2,
            value: '500+',
            label: 'Properties Listed',
        },
        {
            icon: Users,
            value: '1000+',
            label: 'Happy Clients',
        },
        {
            icon: Award,
            value: '15+',
            label: 'Years Experience',
        },
        {
            icon: Home,
            value: '50+',
            label: 'Cities Covered',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* ---------- Hero Section ---------- */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/aboutbackground.jpg"
                        alt="Hero background"
                        width={2400}
                        height={600}
                        className="object-cover brightness-30"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About Rent Home
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        leading-relaxed : 줄간격을 넓게 해준다. lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                    </p>
                </div>
            </div>
            {/* ---------- Stats Section ---------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="p-6 text-center bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <stat.icon className="w-12 h-12 mx-auto mb-2 text-primary" />
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </Card>
                    ))}
                </div>
            </div>
            {/* ---------- Our Story Section ---------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-semibold text-gray-900">
                            Our Story
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
                            src="/assets/main.jpg"
                            alt="Company Story"
                            width={600}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* ---------- Team Section ---------- */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-semibold text-gray-900 mb-12 text-center">
                        Our Leadership Team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 pt-10">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="p-6 text-center bg-white hover:shadow-xl transitoin-shadow duration-300"
                            >
                                <div className="relative w-48 h-48 mx-auto mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600">{member.bio}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutPage;
