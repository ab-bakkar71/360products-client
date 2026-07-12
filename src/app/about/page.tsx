import { BiPalette } from "react-icons/bi";
import { BsLayers } from "react-icons/bs";
import { FiZap } from "react-icons/fi";


const AboutPage = () => {
    return (
        <section className="min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-center bg-neutral-bg py-12">
            <h1 className="text-3xl font-bold text-center mx-auto text-primary">
                About 360<span className="text-secondary">Products</span>
            </h1>
            <p className="text-sm text-slate-500 text-center mt-3 max-w-lg mx-auto px-4">
                A premium, full-stack catalog ecosystem designed to help you discover, manage, and explore next-generation tech and smart lifestyle gadgets.
            </p>
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-0 pt-16 gap-8 md:gap-0">
                <div className="absolute w-[520px] h-[520px] -top-40 left-1/2 -translate-x-1/2 rounded-full blur-[150px] -z-10 bg-secondary/10 pointer-events-none"></div>
                <div className="py-6 border-b border-gray-200 md:py-0 md:border-r md:border-b-0 md:px-10">
                    <div className="w-10 h-10 p-2 bg-primary/10 border border-primary/20 rounded-global flex items-center justify-center text-primary">
                        <BsLayers size={20} />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Advanced Cataloging</h3>
                        <p className="text-sm text-slate-500">
                            Effortlessly browse through multi-category items with lightning-fast live search, smart sorting, and dynamic two-field filtering.
                        </p>
                    </div>
                </div>

        
                <div className="py-6 border-b border-gray-200 md:py-0 lg:border-r md:border-b-0 md:px-10">
                    <div className="w-10 h-10 p-2 bg-secondary/10 border border-secondary/20 rounded-global flex items-center justify-center text-secondary">
                        <BiPalette size={20} />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Consistent UI Design</h3>
                        <p className="text-sm text-slate-500">
                            Engineered with a strict 3-color palette, uniform card layouts, and responsive components for seamless desktop and mobile flows.
                        </p>
                    </div>
                </div>

         
                <div className="py-6 border-b border-gray-200 md:py-0 md:border-b-0 md:px-10">
                    <div className="w-10 h-10 p-2 bg-accent/10 border border-accent/20 rounded-global flex items-center justify-center text-accent">
                        <FiZap size={20} />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Secure Product Management</h3>
                        <p className="text-sm text-slate-500">
                            Robust authentication protects data pipelines. Authorized users can dynamically add, monitor, and manage items securely via database integration.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutPage;