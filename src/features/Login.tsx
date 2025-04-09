import React from 'react';

const Login = () => {
    return (
        <div className="login w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-admin)] to-[var(--color-primary)]">
            <section className="py-10 sm:py-16 lg:py-24 w-full">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Welcome Back!</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white/80">Login to your account</p>
                    </div>

                    <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div className="overflow-hidden bg-white/20 backdrop-blur-lg rounded-xl shadow-xl border border-white/20">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">
                                <form action="#" method="POST">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-white"> Email address </label>
                                            <div className="mt-2.5 relative text-white/80 focus-within:text-white">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5 text-[var(--color-admin)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter email to get started"
                                                    className="block w-full py-4 pl-10 pr-4 text-white placeholder-white/50 transition-all duration-200 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-white/80 focus:ring-1 focus:ring-white/30 caret-white"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="" className="text-base font-medium text-white"> Password </label>

                                                <a href="#" title="" className="text-sm font-medium text-white/80 transition-all duration-200 hover:text-white focus:text-white hover:underline"> Forgot password? </a>
                                            </div>
                                            <div className="mt-2.5 relative text-white/80 focus-within:text-white">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5 text-[var(--color-admin)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="password"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter your password"
                                                    className="block w-full py-4 pl-10 pr-4 text-white placeholder-white/50 transition-all duration-200 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-white/80 focus:ring-1 focus:ring-white/30 caret-white"
                                                />
                                            </div>
                                        </div>

                                        <div >
                                            <button type="submit" className="inline-flex items-center justify-center bg-[var(--color-admin)] w-full px-4 py-4 text-base font-semibold text-[var(--color-bg)] transition-all duration-200 border border-transparent rounded-lg focus:outline-none hover:bg-[var(--color-primary)] focus:bg-[var(--color-primary)]">
                                                Log in
                                            </button>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-base text-white/80"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;