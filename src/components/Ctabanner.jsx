import React from 'react'
import { Button } from './ui/button';


const stats = [
    { value: "10K+", label: "CANDIDATE" },
    { value: "100+", label: "JOBS DAILY" },
    { value: "200+", label: "COMPANIES" },
    { value: "5+", label: "YEARS" },
    { value: "500+", label: "DAILY VISITS" },
];


const Ctabanner = () => {
    return (
        <section className="px-4 py-10">
            <div className="w-full bg-gradient-to-r from-teal-400 to-cyan-600 px-8 py-12 text-white text-center rounded-3xl">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Find Your Dream Job in Nepal Now with RogjarBank
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Ready to move to the next level in your career? Start today with RogjarBank! Create your
                    free profile, upload your resume, and apply for hundreds of available jobs in a few easy
                    steps. Whether you're looking for jobs in Kathmandu, or anywhere else in Nepal, RogjarBank
                    is here to help you get connected to your dream job.
                </p>

                {/* CTA Button */}
                <Button className="bg-white text-cyan-600 font-semibold text-sm px-8 py-3 rounded-full hover:bg-cyan-50 transition-colors duration-200 inline-flex items-center gap-2">
                    Search Jobs Now <span>→</span>
                </Button>

                {/* Divider */}
                <div className="border-t border-white/20 mt-10 mb-8" />

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center">
                            <span className="text-3xl font-bold">{value}</span>
                            <span className="text-xs tracking-widest text-white/80 mt-1">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Ctabanner
