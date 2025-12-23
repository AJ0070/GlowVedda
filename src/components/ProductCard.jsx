import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, index, imageElement }) => {
    const { toast } = useToast();
    const discountPercentage = Math.round(((product.mrp - product.discountedPrice) / product.mrp) * 100);
    const amountSaved = (product.mrp - product.discountedPrice).toFixed(2);

    const handleBuyNow = () => {
        if (product.link) {
            window.open(product.link, '_blank');
        } else {
            toast({
                title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            });
        }
    };

    const handleWishlist = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
            <div className="relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                    {discountPercentage}% OFF
                </div>
                <button
                    onClick={handleWishlist}
                    className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-amber-500 hover:text-white transition-all duration-300"
                >
                    <Heart className="w-5 h-5" />
                </button>
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-blue-50">
                    {imageElement ? (
                        imageElement
                    ) : (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                    )}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                </h3>

                <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-amber-500">₹{product.discountedPrice}</span>
                        <span className="text-lg text-gray-400 line-through">₹{product.mrp}</span>
                    </div>
                    <span className="text-sm text-green-600 font-semibold">
                        You save ₹{amountSaved}
                    </span>
                </div>

                <div className="mb-4 space-y-2">
                    {product.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                    ))}
                </div>

                <Button
                    onClick={handleBuyNow}
                    className="w-full bg-blue-950 hover:bg-amber-500 text-white py-6 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                </Button>
            </div>
        </motion.div>
    );
};

export default ProductCard;