import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HomeAbout = () => {
    return (
        <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who We Are</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Indus Fire Safety Pvt. Ltd. is a pioneering leader in India's industrial fire and safety sector,
                        established in 1993. Headquartered in Vadodara, Gujarat, we are an ISO 9001:2015,
                        ISO 14001:2015, and ISO 45001:2018 certified company. Our comprehensive services
                        encompass skilled manpower deployment, advanced fire truck manufacturing, end-to-end fire protection systems,
                        NFPA-compliant training, and 24/7 emergency response services. Operating across 26+ states,
                        our solutions are trusted by leading refineries, chemical plants, ports, warehouses, and critical infrastructure.
                        We ensure safety, compliance, and operational continuity in high-risk environments.
                        With a strong legacy and future-focused approach, Indus Fire Safety remains committed to safeguarding lives,
                        assets, and industry operations across India’s most demanding sectors.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block mt-4 px-6 py-3 bg-[#950101] hover:bg-[#FF0000] active:bg-[#FF0000] text-white rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Learn More About Us
                    </Link>

                </motion.div>

                <motion.div

                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full"
                >
                    <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg border border-white/10 backdrop-blur-md">
                        <img
                            src="http://209.182.233.237/images/indusdrone.jpg"
                            alt="About Us"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeAbout;
