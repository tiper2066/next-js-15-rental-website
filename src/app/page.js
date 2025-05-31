'use client';
import { useEffect } from 'react';
import About from '@/components/common/About';
import Banner from '@/components/common/Banner';
import Category from '@/components/common/Category';
import Features from '@/components/common/Features';
import Services from '@/components/common/Services';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Home() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    });
    return (
        <div>
            <Banner />
            <About />
            <div className="bg-gray-100/40 py-20">
                <Category />
            </div>
            <Features />
            <div className="bg-gray-100/40 py-20">
                <Services />
            </div>
        </div>
    );
}
