import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

// Imports
import vitaminCImage from '@/assets/images/Vitamin-C-Serum-1.jpg';
import salicylicSerumImage from '@/assets/images/Salicylic-Serum-1.jpg';
import sunscreenImage from '@/assets/images/Sunscreen-1.jpg';
import creamyWashImage from '@/assets/images/Creamy-Face-Wash-1.jpeg';
import salicylicWashImage from '@/assets/images/Salicylic-Face-Wash-1.jpg';

const products = [
    {
        id: 1,
        name: "12% Vitamin C Face Serum",
        mrp: 999,
        discountedPrice: 699,
        benefits: ["Brightens Dull Skin", "Boosts Collagen", "Evens Skin Tone"],
        image: vitaminCImage,
        alt: "Glow Vedda 12% Vitamin C Face Serum bottle with orange and yellow branding",
        link: "https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/ref=sr_1_1_sspa?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-1-spons&aref=Tytq0ROeEj&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },
    {
        id: 2,
        name: "2% Salicylic Acid Face Serum",
        mrp: 799,
        discountedPrice: 549,
        benefits: ["Unclogs Pores", "Controls Oil", "Smooths Skin Texture"],
        image: salicylicSerumImage,
        alt: "Glow Vedda 2% Salicylic Acid Face Serum bottle with navy blue branding",
        link: "https://www.amazon.in/GLOW-VEDDA-Blackheads-Pigmentation-Combination/dp/B0G7X5LMJT/ref=sr_1_6?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-6"
    },
    {
        id: 3,
        name: "Sunscreen SPF 50 PA++++",
        mrp: 699,
        discountedPrice: 459,
        benefits: ["Broad Spectrum Protection", "UVA & UVB Protection", "Keeps Skin Smooth"],
        image: sunscreenImage,
        alt: "Glow Vedda Sunscreen SPF 50 tube with yellow and white branding",
        link: "https://www.amazon.in/GLOW-VEDDA-Sunscreen-Combination-Protection/dp/B0G7X937T7/ref=sr_1_5?crid=LV10EYE14U64&dib=eyJ2IjoiMSJ9.ByTHUgWj2od4fwt4U1cTpb21yzxrNFpHm0ufyaxeEa3F9jbRTwt4n1_2DW_fAxPcuRRO6Y4yAMnbMpUaWMuujm4OsPjHS5Z4c5nZCR41v2k8033byWLkOzFFAEuPbh67mC-zFxdn5UfGboJfflmYTT8lEEoV4ftm5Zf92cLyAiaXu3ATU0EFSNj1v2pOoA-AmSD5YDe1yS4EZdmCaS9evadZYUgmkIU0f6dutgg3oJ4.vxDXTMqIF2gmxMOg0TK8Bic5HBLfD1ijnlHQyTPtbE4&dib_tag=se&keywords=glow+vedda&qid=1766475956&sprefix=glow+vedda%2Caps%2C180&sr=8-5"
    },
    {
        id: 4,
        name: "Glow Vedda Face Wash - Creamy",
        mrp: 380,
        discountedPrice: 311.60,
        benefits: ["Deeply Cleanses", "Exfoliates Dead Cells", "Prevents Acne"],
        image: creamyWashImage,
        alt: "Glow Vedda Creamy Face Wash tube with green and teal branding"
    },
    {
        id: 5,
        name: "Glow Vedda Face Wash - Salicylic",
        mrp: 270,
        discountedPrice: 221.40,
        benefits: ["Oil Control", "Deep Cleansing", "Acne Prevention"],
        image: salicylicWashImage,
        alt: "Glow Vedda Salicylic Face Wash tube with teal and blue branding"
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
                        Our Collection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-4">
                        Premium Skincare Products
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Get extra discount on all products. Limited time offer!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            imageElement={
                                <img
                                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                    alt={product.alt}
                                    src={product.image}
                                />
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;