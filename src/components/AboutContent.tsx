const AboutPage = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white py-16">
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-12">
                    About Us
                </h1>
                <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg shadow-lg space-y-6">
                    <p className="text-neutral-400 text-2xl">
                        Welcome to MiFood, a company dedicated to revolutionizing agriculture with advanced robotics solutions.
                        Our mission is to reduce world hunger, food waste, and harvesting labor costs by providing cutting-edge
                        technology to farms. Our robots help increase harvesting speed, energy efficiency, and overall productivity,
                        while promoting sustainable farming practices.
                    </p>
                    <p className="text-neutral-400 text-2xl">
                        At MiFood, we are passionate about leveraging innovation to make a positive impact on the environment
                        and the global food supply chain. We work closely with over 200 businesses, delivering tailored automation
                        and robotization services to meet their unique needs.
                    </p>
                    <p className="text-neutral-400 text-2xl">
                        Our team of experts is committed to pushing the boundaries of what is possible in agricultural technology,
                        and we are continuously exploring new ways to enhance our offerings. Join us on our journey to create a
                        more efficient, sustainable, and food-secure world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
