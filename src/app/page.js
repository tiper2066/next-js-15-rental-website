import About from '@/components/common/About';
import Banner from '@/components/common/Banner';
import Category from '@/components/common/Category';
import Features from '@/components/common/Features';
import Services from '@/components/common/Services';

export default function Home() {
    return (
        <div>
            <Banner />
            <About />
            <div className='bg-gray-100/40 py-20'>
                <Category />
            </div>
            <Features />
            <div className='bg-gray-100/40 py-20'>
                <Services />
            </div>
        </div>
    );
}
