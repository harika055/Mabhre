"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AboutusFullimg = () => {
    // Instead of fetching, directly list key services from the PDF
    const servicesData = [
        "Renewable Energy Solutions",
        "Drone Technology & Surveying",
        "Smart Infrastructure Development",
        "Sports Infrastructure",
        "Interior Design & Fit-Out",
        "Software Development & IT",
        "AI & Machine Learning",
        "Cyber Security",
        "DevOps & Cloud",
        "Embedded Systems",
        "Hardware & Electronics",
        "Electrical Solutions",
        "Ecommerce & Product Supply",
        "Import & Export"
    ];

    return (
        <section>
            <div className="w-full h-50vh lg:h-80vh">
                <Image
                    src={"/images/about-us/image-section/full-w-image.png"}
                    alt="MABHRE About Us"
                    width={1800}
                    height={800}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-primary flex">
                <Marquee autoFill={true}>
                    {servicesData.map((value, index) => (
                        <div key={index} className="flex items-center py-6 gap-6 pr-6 md:pr-10 md:gap-10">
                            <h4 className="dark:text-secondary">{value}</h4>
                            <div className="w-2.5 h-2.5 bg-secondary/12 rounded-full" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

export default AboutusFullimg;
