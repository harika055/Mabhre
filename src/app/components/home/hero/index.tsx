"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
    return (
        <ParallaxProvider>
            <Parallax speed={-25}>
                <section className="relative flex items-end text-white bg-black h-full min-h-screen">
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="/video/banner-video1.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Content */}
                    <div className="relative z-10 container text-left">
                        <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
                            {/* Tagline */}
                            <div className="flex items-start gap-2 md:gap-6">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <Image
                                        src={"/images/Icon/primary-leaf.svg"}
                                        alt="icon"
                                        width={44}
                                        height={44}
                                        className="animate-spin"
                                    />
                                </div>
                                <p className="text-white/80 max-w-xl">
                                    Driving the future with <span className="text-primary font-semibold">renewable energy</span>,{" "}
                                    <span className="text-primary font-semibold">drone innovation</span>, and{" "}
                                    <span className="text-primary font-semibold">sustainable solutions</span>.
                                </p>
                            </div>

                            {/* Title + CTA */}
                            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6">
                                <h1 className="large-heading">Mabhre</h1>
                                <div>
                                    <a
                                        href="/about-us"
                                        className="group bg-primary rounded-full p-1.5 pl-8 flex items-center gap-3 hover:bg-white transition-all"
                                    >
                                        <span className="text-secondary font-bold group-hover:text-black">
                                            Learn More
                                        </span>
                                        <Image
                                            src={"/images/Icon/arrow-icon.svg"}
                                            alt="icon"
                                            height={52}
                                            width={52}
                                            className="transition-transform group-hover:translate-x-2"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* Subtext */}
                            <p className="mt-6 max-w-2xl text-white/70 text-lg">
                                From <strong>AI-driven insights</strong> to <strong>renewable projects</strong>, Mabhre blends
                                innovation and sustainability to create meaningful impact worldwide.
                            </p>
                        </div>
                    </div>
                </section>
            </Parallax>
        </ParallaxProvider>
    );
}

export default HeroSection;
