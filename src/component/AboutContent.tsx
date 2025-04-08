type AboutContentProps = {
    images: string[];
    heading: string;
    description: string;
};

const AboutContent: React.FC<AboutContentProps> = ({ images, heading, description }) => {
    return (
        <div className="w-full bg-white mt-10">
            <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> About
                Us</h1>
            <div className="flex justify-center items-center">
                <p className="text-center text-gray-400 mb-5 relative inline-block leading-[3] tracking-[4px]">
                    Know about us
                    <span
                        className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                </p>
            </div>
            <section className="py-5">
                <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12">
                        <div className="relative flex justify-center">
                            <div className="relative -ml-10 w-64 sm:w-72 md:w-80 lg:w-98 ">
                                <img
                                    className="w-full object-cover rounded-md h-[71%]"
                                    src={images[0]}
                                    alt="Main"
                                />
                                <img
                                    className="absolute w-32 sm:w-40 md:w-48 lg:w-48 border-2 border-gray-300 shadow-xl shadow-blue-900/50 rounded-md bottom-24 -right-12"
                                    src={images[1]}
                                    alt="Overlay"
                                />
                            </div>
                        </div>

                        <div className=" -mt-20 md:-mt-40 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                                {heading}
                            </h2>
                            <p className="mt-6 text-[13px] sm:text-base lg:text-lg 2xl:text-xl  min-[1900px]:text-xl leading-relaxed text-gray-600 sm:mt-8 ">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
