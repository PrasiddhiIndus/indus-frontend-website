import React, { useEffect, useState, useRef } from 'react';
import { motion, useViewportScroll, useTransform, animate } from 'framer-motion';
import logo from '../../assets/image/website_logo.webp';

const ProjectsHero = () => {
    const { scrollY } = useViewportScroll();
    const [showGlass, setShowGlass] = useState(true);
    const lastScrollY = useRef(0);
    const isAnimating = useRef(false);
    const [glassOpacity, setGlassOpacity] = useState(1);

    const yMotion = useTransform(scrollY, [0, 300], [0, -100]);
    const opacityMotion = useTransform(scrollY, [0, 300], [1, 0.6]);

    const animateGlass = (target) => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        animate(glassOpacity, target, {
            duration: 0.5,
            onUpdate: (v) => setGlassOpacity(v),
            onComplete: () => {
                isAnimating.current = false;
            }
        });
    };

    useEffect(() => {
        if (showGlass) animateGlass(1);
        else animateGlass(0);
    }, [showGlass]);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > lastScrollY.current + 10) {
                setShowGlass(false);
            } else if (latest < lastScrollY.current - 10) {
                setShowGlass(true);
            }
            lastScrollY.current = latest;
        });
    }, [scrollY]);

    return (
        <section className="relative h-screen w-full overflow-hidden select-none">
             <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 scale-150"
                style={{ transformOrigin: 'center center' }}
            >
                <source src="http://209.182.233.237/videos/servicesprojects.mp4" type="video/mp4" />
            </video>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
                style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    zIndex: 5,
                }}
            />

            {glassOpacity > 0 && (
                <motion.div
                    style={{ y: yMotion, opacity: glassOpacity }}
                    className="absolute inset-0 z-10 backdrop-blur-xl bg-black bg-opacity-70 flex flex-col justify-center items-center px-4 sm:px-6 md:px-20 text-white"
                >
                    <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 rounded-full" style={{
                        width: '320px',
                        height: '320px',
                        background: 'radial-gradient(ellipse at top right, rgba(255, 20, 20, 0.8), transparent 65%)',
                        filter: 'blur(80px)',
                        transform: 'translate(40%, -40%)',
                        zIndex: 20,
                    }} />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 rounded-full" style={{
                        width: '1880px',
                        height: '1880px',
                        background: 'radial-gradient(ellipse at bottom left, rgba(180, 0, 0, 0.7), transparent 65%)',
                        filter: 'blur(50px)',
                        transform: 'translate(-40%, 40%)',
                        zIndex: 20,
                    }} />
                    <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 rounded-full" style={{
                        width: '1880px',
                        height: '1880px',
                        background: 'radial-gradient(ellipse at top right, rgba(180, 0, 0, 0.7), transparent 65%)',
                        filter: 'blur(50px)',
                        transform: 'translate(40%, -40%)',
                        zIndex: 20,
                    }} />

                    <div className="w-full max-w-5xl flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                loading="lazy"
                            />
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                                Projects
                            </h1>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-3xl leading-relaxed sm:leading-normal">
                            Indus Fire Safety delivers end-to-end fire protection projects built on precision, compliance, and reliability.
                            <br /><br />
                            From design and installation to testing, commissioning, and AMC support, we provide complete turnkey solutions for industrial, commercial, and infrastructure facilities. Every project is executed by certified professionals, ensuring safety integrity, quality workmanship, and on-time delivery.
                        </p>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default ProjectsHero;
