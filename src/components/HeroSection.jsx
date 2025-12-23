import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import heroImage from '@/assets/images/General-1.jpg';

const HeroSection = () => {
    const { toast } = useToast();

    const handleShopNow = () => {
        window.open('https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/ref=sr_1_1_sspa?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-1-spons&aref=Tytq0ROeEj&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', '_blank');
    };

    return (
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 overflow-hidden">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block"
                        >
                            <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
                                Natural Skincare
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-bold text-blue-950 leading-tight"
                        >
                            Glow From Within
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            Discover the power of nature with GlowVedda's premium skincare collection.
                            Formulated with pure ingredients for radiant, healthy skin.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                onClick={handleShopNow}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Shop Now
                            </Button>
                            <Button
                                onClick={handleShopNow}
                                variant="outline"
                                className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
                            >
                                Learn More
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-8 pt-4"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-500">100%</div>
                                <div className="text-sm text-gray-600">Natural</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-500">18%</div>
                                <div className="text-sm text-gray-600">Off Today</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-500">5+</div>
                                <div className="text-sm text-gray-600">Products</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src={heroImage}
                                alt="GlowVedda Natural Skincare Collection"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                        </div>
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 z-0"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, -5, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-8 -right-8 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 z-0"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;