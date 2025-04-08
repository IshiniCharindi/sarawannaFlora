import aboutImage from "../assets/videos/about.mp4"
const BaseHomeAbout = () => {
    return (
        <div>
            <section className="py-10 bg-[var(--color-bg)] sm:py-16 lg:py-24">
                <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div
                        className="grid items-center grid-cols-1 md:grid-cols-12 lg:items-stretch gap-y-8 gap-x-12 xl:gap-x-20">
                        <div className="md:col-span-6 relative">
                            <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
                                <video
                                    src={aboutImage}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-[370px] object-cover border-white"
                                    style={{borderWidth: "16px"}}
                                />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center rounded-full w-28 h-28 bg-white/20">
                                    <button type="button"
                                            className="flex items-center justify-center w-20 h-20 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-90">
                                        <svg className="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5 flex flex-col justify-between md:py-5">
                            <blockquote>
                                <p className="text-2xl leading-relaxed text-black">You made it so simple. My new site is
                                    so much faster and easier to work with than my old site. I just choose the page,
                                    make the change and click save. No need to think twice before making it.</p>
                            </blockquote>

                            <div className="mt-6 lg:mt-auto">
                                <p className="text-xl font-semibold text-black">Jenny Wilson</p>
                                <p className="mt-2 text-base text-gray-600">Co-founder, Appson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BaseHomeAbout;