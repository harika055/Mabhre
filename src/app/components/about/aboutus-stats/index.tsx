"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutusStats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const aboutusStats = [
        { number: 12, postfix: "+", title: "Core Service Domains", descp: "From renewable energy to AI, MABHRE covers a wide spectrum of industries." },
        { number: 50, postfix: "+", title: "Successful Projects", descp: "Executed across construction, IT, and infrastructure sectors." },
        { number: 10, postfix: "+", title: "Global Partnerships", descp: "Collaborations for import, export, and product distribution worldwide." },
    ];

    return (
        <section className="pb-10 md:pb-20 xl:pb-40 dark:bg-secondary">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
                    {aboutusStats.map((value, index) => (
                        <div ref={ref} key={index} className="flex flex-col gap-5 md:gap-8 xl:pr-10">
                            <h3 className="text-5xl md:text-6xl Xxl:text-7xl font-bold border-b border-secondary/12 dark:border-white/12 pb-4 md:pb-8">
                                {inView ? <CountUp start={0} end={value.number} duration={3} /> : "0"}
                                {value.postfix}
                            </h3>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h4>{value.title}</h4>
                                <p className="text-base text-secondary/70 dark:text-white/70">{value.descp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutusStats;
