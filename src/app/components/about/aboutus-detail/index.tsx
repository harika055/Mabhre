const AboutusDetail = () => {
    return (
        <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-8">
                    <div className="max-w-xl w-full">
                        <h2 className="text-56">About Mabhre</h2>
                    </div>
                    <div className="flex flex-col gap-12">
                        <p className="text-secondary dark:text-white">
                            MABHRE is a multidisciplinary company delivering innovation across energy, technology, construction, and design. 
                            Our mission is to create sustainable solutions that blend infrastructure, digital transformation, and advanced technologies.
                        </p>
                        <p className="text-secondary dark:text-white">
                            From <strong>Renewable Energy & Green Building</strong> to <strong>Drone Technology, Smart Infrastructure, AI & Machine Learning, Cybersecurity, DevOps, Embedded Systems, Electronics, and Interior Design</strong>, 
                            MABHRE provides end-to-end expertise. We also extend our capabilities to <strong>eCommerce, material supply, import/export, and product distribution</strong>, ensuring that we serve both industrial and consumer needs. 
                            Our diverse portfolio makes us a trusted partner for innovation and growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusDetail;
