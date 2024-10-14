import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import '../components/HeroSection.css';
import '../components/FeaturesSection.css';
import '../components/TestimonialsSection.css';
import '../components/ContactSection.css';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage">
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
}

export default HomePage;
