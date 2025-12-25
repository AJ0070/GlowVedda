import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import BenefitsSection from '@/components/BenefitsSection';
import CallToAction from '@/components/CallToAction';
import { Toaster } from '@/components/ui/toaster';
import SnowEffect from '@/components/SnowEffect';

function App() {
    return (
        <>
            <Helmet>
                <title>GlowVedda - Premium Natural Skincare Products</title>
                <meta name="description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash. Extra discount on all products. Limited time offer!" />
                <meta name="keywords" content="skincare, natural skincare, vitamin c serum, salicylic acid, sunscreen, face wash, glowvedda, beauty products" />
                <link rel="canonical" href="https://glowvedda.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://glowvedda.com/" />
                <meta property="og:title" content="GlowVedda - Premium Natural Skincare Products" />
                <meta property="og:description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash." />
                <meta property="og:image" content="https://glowvedda.com/android-chrome-512x512.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://glowvedda.com/" />
                <meta property="twitter:title" content="GlowVedda - Premium Natural Skincare Products" />
                <meta property="twitter:description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash." />
                <meta property="twitter:image" content="https://glowvedda.com/android-chrome-512x512.png" />
            </Helmet>
            <div className="min-h-screen bg-white">
                <SnowEffect />
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