import React from "react";

function Products() {
    return (
        <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-evenly", "height": "auto" }}>
            <div className="Products-text">Explore our diverse product categories, each crafted to meet your needs! In Electronics & Gadgets, dive into cutting-edge tech with the latest smartphones, laptops, and gadgets for work and play. Update your style in Fashion & Accessories, featuring trendy outfits and bold jewelry to elevate any look. Transform your home with modern furniture and cozy decor in Home & Living, and boost your health with premium fitness gear, wellness products, and self-care essentials. Bookworms and creatives will love our Books & Stationery section, full of captivating novels and high-quality notebooks. Adventurers can gear up in Sports & Outdoors for top-tier sportswear and equipment. Enhance your beauty routine with our luxurious skincare, makeup, and grooming products in Beauty & Personal Care. Parents, explore Kids & Toys for fun, educational products for little ones, while savvy shoppers can find unbeatable deals in Deals & Discounts.</div>
            <div style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-evenly", "position": "relative", "top": "50px" }}>
                <div className="marquee-container">
                    <div class="marquee-1">
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                    </div>
                </div>
                <div class="marquee-container">
                    <div class="marquee-2">
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                    </div>
                </div>
                <div class="marquee-container">
                    <div class="marquee-3">
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                    </div>
                </div>
                <div className="marquee-container">
                    <div class="marquee-1">
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                        <div class="marquee-item"></div>
                    </div>
                </div>
            </div>
            <div className="Products-text" style={{ "position": "relative", "top": "150px" }}>Our UI design ensures a smooth and user-friendly experience. At the top, a search bar with a placeholder text like “What are you looking for today?” guides users to quickly find what they need, while a categories dropdown offers easy access to all sections. Plus, the cart & wishlist icons are always visible for convenience. The landing page features a bold hero section with rotating deals and product highlights, while category cards offer vibrant images and hover effects, making it easy to explore various sections. A featured products grid shows bestsellers with clear “Add to Cart” and “View Details” buttons. Trust is key, so we ensure transparency by displaying security assurances like 100% Secure Transactions, Fast & Free Shipping, and 24/7 Customer Support.</div>
            <div class="marquee-container horizontal" style={{ "position": "relative", "top": "250px", "display": "flex", "flexDirection": "column" }}>
                <div class="marquee horizontal">
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                </div>
                <div class="marquee horizontal" style={{ "position": "relative", "top": "50px", "animationDuration": "15s" }}>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                </div>
                <div class="marquee horizontal" style={{ "position": "relative", "top": "100px", "animationDuration": "13s" }}>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                    <div class="marquee-item horizontal"></div>
                </div>
            </div>

        </div>
    );
}

export default Products;