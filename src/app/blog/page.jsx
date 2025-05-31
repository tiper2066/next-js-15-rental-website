import Image from 'next/image';
import { Card } from '@/components/ui/card';
const BlogPage = () => {
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* ---------- Hero Section ---------- */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/main.jpg"
                        alt="Hero background"
                        width={2400}
                        height={600}
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
                        Our Blog
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

            {/* ---------- Team Section ---------- */}
            <div className="bg-gray-50 py-30">
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

            {/* ---------- CTA Section ---------- */}
            <div className="bg-primary text-white py-20 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
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
export default BlogPage;
