import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Gift } from 'lucide-react';

const CallToAction = () => {
    const { toast } = useToast();

    const handleShopNow = () => {
        window.open('https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/ref=sr_1_1_sspa?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-1-spons&aref=Tytq0ROeEj&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', '_blank');
    };

    return (
        <section className="py-20 bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-400 relative overflow-hidden">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ willChange: "transform" }}
                className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl hidden md:block"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ willChange: "transform" }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950 opacity-10 rounded-full blur-3xl hidden md:block"
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-8 shadow-lg"
                    >
                        <Gift className="w-5 h-5 text-amber-500" />
                        <span className="font-semibold text-blue-950">Limited Time Offer - Special Discounts!</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-blue-950 mb-6"
                    >
                        Ready to Transform Your Skin?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-blue-900 mb-10 leading-relaxed"
                    >
                        Start your skincare journey today with GlowVedda's premium products.
                        Natural ingredients, proven results, and a glowing complexion await you!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            onClick={handleShopNow}
                            size="lg"
                            className="bg-blue-950 hover:bg-blue-900 text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
                        >
                            Shop Now
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button
                            onClick={handleShopNow}
                            size="lg"
                            variant="outline"
                            className="bg-white border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white px-10 py-7 text-lg rounded-full shadow-lg transition-all duration-300"
                        >
                            View All Products
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12 flex flex-wrap justify-center gap-8 text-blue-950"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-950" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-950" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">30-Day Returns</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-blue-950" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Secure Checkout</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;