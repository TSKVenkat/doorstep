import React, { useState, useEffect, useRef } from 'react';

function Feature() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: "https://www.vodafone.com.au/images/devices/apple/iphone-16-pro/river-images/hero_glow_large.png?600011c748f0",
            title: "Majestic Mountains",
            description: "Discover the breathtaking views of snow-capped peaks"
        },
        {
            image: "https://www.vodafone.com.au/images/devices/apple/iphone-16-pro/river-images/ai_large.png?600011c132e0",
            title: "Ocean Waves",
            description: "Experience the calming sounds of the sea"
        },
        {
            image: "https://www.vodafone.com.au/images/devices/apple/iphone-16-pro/river-images/design_large.png?600011c67440",
            title: "Desert Sunset",
            description: "Witness the golden hour in the vast desert landscape"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (isVisible) {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [isVisible]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);


    return (
        <div>
            <div className="wrapper">
                <div className="item-right item1"><p>Sheesh</p></div>
                <div className="item-right item2"></div>
                <div className="item-right item3"></div>
                <div className="item-right item4"></div>
                <div className="item-right item5"></div>
                <div className="item-right item6"></div>
                <div className="item-right item7"></div>
                <div className="item-right item8"></div>
            </div>
            <div className="wrapper">
                <div className="item item1"><p>Sheesh</p></div>
                <div className="item item2"></div>
                <div className="item item3"></div>
                <div className="item item4"></div>
                <div className="item item5"></div>
                <div className="item item6"></div>
                <div className="item item7"></div>
                <div className="item item8"></div>
            </div>
            <div className='features'>
                <div className='feature-1'>
                    <div>
                        <p className="tag1">Reliable</p>
                        <p className="tag2">Delivery</p>
                        <p className="tag3">Options</p>
                    </div>
                    <div className="feature-para1">We know the thrill of waiting for your order to arrive, and at DoorStep, we make that wait as short as possible! Whether you need a last-minute gift or essentials delivered ASAP, our super-fast delivery options—like same-day and next-day services—have got you covered. With real-time tracking and reliable updates, you’ll always know where your package is. Say goodbye to late deliveries and hello to convenience delivered to your doorstep!
                    </div>
                </div>
                <div className='feature-2'>
                    <div>
                        <p className="tag1">Diverse</p>
                        <p className="tag2">Product</p>
                        <p className="tag3">Categories</p>
                    </div>
                    <div className="feature-para2">Imagine this: a single platform where you can shop for everything you need—be it stylish outfits for your next big event, the latest gadgets to keep you ahead in tech, or home décor that turns your house into a masterpiece. That’s DoorStep for you! From everyday essentials to hard-to-find treasures, we’ve curated a wide variety of categories to make your shopping experience delightful. Why juggle multiple apps when you can find it all here?</div>
                </div>
                <div
                    ref={sliderRef}
                    className="slider-container"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: `translateY(${isVisible ? '0' : '50px'})`,
                        transition: 'all 1s ease-out'
                    }}
                >
                    <style>{`
        .slider-container {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 40px 0;
        }
        
        .slider {
          position: relative;
          width: 90%;
          height: 500px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(100%);
          transition: all 0.7s ease-in-out;
        }
        
        .slide.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide img {
          width: 100%;
          height: 100%;
          background-size: cover;
          object-fit: cover;
        }
        
        .slide:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
        }
        
        .slide:hover:before {
          background: rgba(0, 0, 0, 0.4);
        }
        
        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          color: white;
          transform: translateY(100%);
          transition: transform 0.5s ease;
        }
        
        .slide:hover .slide-content {
          transform: translateY(0);
        }
        
        .slide-title {
          font-size: 24px;
          font-family: "Host Grotesk", sans-serif;
          font-weight: bold;
          margin-bottom: 8px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .slide-description {
        font-family: "Geist Mono", sans-serif;
          font-size: 16px;
          opacity: 0.9;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .nav-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }
        
        .nav-button.prev { left: 20px; }
        .nav-button.next { right: 20px; }
        
        .progress-bars {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        
        .progress-bar {
          width: 40px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .progress-bar:hover {
          transform: scaleY(1.5);
        }
        
        .progress-bar.active {
          background: white;
        }
      `}</style>

                    <div className="slider">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                <img src={slide.image} alt={slide.title} />
                                <div className="slide-content">
                                    <h2 className="slide-title">{slide.title}</h2>
                                    <p className="slide-description">{slide.description}</p>
                                </div>
                            </div>
                        ))}

                        <button className="nav-button prev" onClick={prevSlide}>←</button>
                        <button className="nav-button next" onClick={nextSlide}>→</button>

                        <div className="progress-bars">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`progress-bar ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>


                <div className='feature-1'>
                    <div style={{ "lineHeight": '1' }}>
                        <p className="tag1">Secure</p>
                        <p className="tag2">Payment</p>
                        <p className="tag3">Gateways</p>
                    </div>
                    <div className="feature-para2" style={{ "lineHeight": "normal" }}>Your safety is our priority! Shopping at DoorStep means enjoying peace of mind with every transaction. We’ve built a fortress around your payment data using advanced encryption and cutting-edge security measures. Whether you prefer paying with UPI, cards, wallets, or even cash on delivery, we ensure that every payment is smooth, swift, and secure. Because trust isn’t just earned—it’s protected!
                    </div>
                </div>
                <div className='feature-2'>
                    <div style={{ "lineHeight": '1' }}>
                        <p className="tag1">Product</p>
                        <p className="tag2">Reviews &</p>
                        <p className="tag3">Ratings</p>
                    </div>
                    <div className="feature-para2" style={{ "lineHeight": "normal" }}>Who has time for trial and error? With our verified product reviews and ratings, you can shop smarter, not harder. Every review is authentic, written by real customers like you, ensuring complete transparency. Found a product you love? Rate it and share your experience with the community. DoorStep isn’t just a shopping platform; it’s where informed decisions are made, one review at a time!</div>
                </div>
                <div className='feature-1'>
                    <div style={{ "lineHeight": '1.15' }}>
                        <p className="tag1">Buyer &</p>
                        <p className="tag2">Seller</p>
                        <p className="tag3">Portal</p>
                    </div>
                    <div className="feature-para2" style={{ "lineHeight": "normal" }}>DoorStep isn’t just for buyers—it’s a thriving hub for sellers too! If you’re a buyer, enjoy a smooth, tailored experience with curated recommendations and easy access to your orders. If you’re a seller, manage your business like a pro with our intuitive seller portal that offers tools to track sales, manage inventory, and connect with buyers. Whether you’re browsing or building a brand, DoorStep is the ultimate platform where great shopping stories begin.</div>
                </div>
            </div>

        </div>
    );
}

export default Feature;