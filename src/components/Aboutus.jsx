import React from 'react'
import Navbar from './Navbar'
import ceo from '../assets/ceo.png'
import cfo from '../assets/cfo.png'
import manager from '../assets/manager.png'
import hr from '../assets/hr.png'
import Footer from './Footer'

const leadership = [
    {
        name: 'CEO',
        role: 'Chief Executive Officer',
        image: ceo,
        message:
            "At our company, we believe that people are the foundation of every success. Our mission is to create opportunities, foster innovation, and build a workplace where talent can thrive. We are committed to maintaining the highest standards of integrity, professionalism, and customer satisfaction. Whether you are a job seeker, an employer, or a valued partner, we appreciate your trust in us. Together, we will continue to grow, embrace new opportunities, and create a brighter future for everyone.",
    },
    {
        name: 'Manager',
        role: 'Operations Manager',
        image: manager,
        message:
            "Our goal is to ensure that every project, service, and interaction reflects excellence and professionalism. We believe that teamwork, continuous learning, and effective communication are the keys to achieving outstanding results. We are dedicated to providing a supportive environment where employees can grow, clients receive exceptional service, and innovation is encouraged every day. Thank you for your confidence in our organization. We look forward to achieving success together.",
    },
    {
        name: 'CFO',
        role: 'Chief Financial Officer',
        image: cfo,
        message:
            "Sound financial stewardship is what allows this company to keep its promises, to our clients, our people, and our partners. We approach every decision with discipline and transparency, because trust is built through consistency over time. I'm proud of the foundation we've built, and even more excited about where it will take us next.",
    },
    {
        name: 'HR',
        role: 'Head of Human Resources',
        image: hr,
        message:
            "Our people are our greatest asset, and everything we do starts with putting them first. We work hard to build a culture where every voice is heard, every contribution is valued, and every person has room to grow. It's a privilege to help shape a workplace people are genuinely proud to be part of.",
    },
]

const pillars = [
    {

        title: 'Our Mission',
        description:
            "To connect job seekers and employers through a trusted, transparent platform, making it simple for talent to find meaningful work and for organizations to find the people who will help them grow.",
    },
    {

        title: 'Our Vision',
        description:
            "To become the most trusted employment platform, known for opening doors, closing gaps in opportunity, and building a future where every job seeker can find work that matches their potential.",
    },
    {

        title: 'Opportunities at Rogjarbank',
        description:
            "From verified job listings to direct employer connections and career guidance, Rogjarbank is built to widen the door for job seekers and simplify hiring for businesses of every size.",
    },
]

const Aboutus = () => {
    return (
        <div className="bg-[#F8F7F4] min-h-screen">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Page intro */}
            <div className="max-w-4xl mx-auto text-center px-6 pt-20 pb-16">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                    About Us
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                    Leadership That Puts People First
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Meet the team guiding our mission, our values, and the way we work every single day.
                </p>
            </div>

            {/* Mission, Vision, Opportunities */}
            <div className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                {pillar.title}
                            </h3>
                            <div className="w-10 h-[3px] bg-[#2D6A6A] mb-4" />
                            <p className="text-slate-600 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Leadership messages */}
            <div className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
                {leadership.map((person, index) => (
                    <div
                        key={person.name}
                        className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                            }`}>
                        <div className="relative">
                            <div className="absolute -inset-3 border border-[#C9A227]/40 rounded-2xl -z-10 hidden md:block" />
                            <img
                                src={person.image}
                                alt={`${person.role} portrait`}
                                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                                Message from our {person.name}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                {person.role}
                            </h2>
                            <div className="w-12 h-[3px] bg-[#C9A227] mb-6" />
                            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                                {person.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Aboutus