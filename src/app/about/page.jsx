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
        <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
            {/* ---------- Hero Section ---------- */}
        </div>
    );
};
export default AboutPage;
