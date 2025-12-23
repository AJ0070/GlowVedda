import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, Leaf } from 'lucide-react';

const benefits = [
    {
        icon: Sparkles,
        title: "Visible Results",
        description: "See noticeable improvements in your skin within 2-4 weeks of regular use"
    },
    {
        icon: Shield,
        title: "Dermatologist Tested",
        description: "All products are clinically tested and approved by certified dermatologists"
    },
    {
        icon: Heart,
        title: "Gentle & Safe",
        description: "Suitable for all skin types with no harmful chemicals or parabens"
    },
    {
        icon: Leaf,
        title: "Natural Ingredients",
        description: "Formulated with 100% natural and ethically sourced ingredients"
    }
];

const BenefitsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-4">
                        The GlowVedda Promise
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Experience the perfect blend of nature and science for radiant, healthy skin
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mb-6 shadow-lg"
                            >
                                <benefit.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-blue-950 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-center shadow-2xl"
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Join 10,000+ Happy Customers
                        </h3>
                        <p className="text-blue-100 text-lg mb-8">
                            Experience the transformation that thousands have already discovered
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-white">
                            <div>
                                <div className="text-4xl font-bold text-amber-400">4.8/5</div>
                                <div className="text-sm text-blue-200">Average Rating</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-400">10K+</div>
                                <div className="text-sm text-blue-200">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-400">98%</div>
                                <div className="text-sm text-blue-200">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;