import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import BenefitsSection from '@/components/BenefitsSection';
import CallToAction from '@/components/CallToAction';
import { Toaster } from '@/components/ui/toaster';

function App() {
    return (
        <>
            <Helmet>
                <title>GlowVedda - Premium Natural Skincare Products</title>
                <meta name="description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash. Extra discount on all products. Limited time offer!" />
            </Helmet>
            <div className="min-h-screen bg-white">
                <HeroSection />
                <ProductShowcase />
                <BenefitsSection />
                <CallToAction />
                <Toaster />
            </div>
        </>
    );
}

export default App;