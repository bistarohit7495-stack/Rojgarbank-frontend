import React, { useState } from 'react'
import Navbar from './Navbar'
import ceo from '../assets/ceo.png'
import cfo from '../assets/cfo.png'
import manager from '../assets/manager.png'
import hr from '../assets/hr.png'
import Footer from './Footer'
import { Plus } from 'lucide-react'
import fd from '../assets/fd.png'
import mission from '../assets/mission.png'
import vision from '../assets/vision.png'
import opp from '../assets/opp.png'
import wr from '../assets/wr.png'

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
    }
]

const pillars = [
    {
        title: 'Our Mission',
        image: mission,
        description:
            "To connect job seekers and employers through a trusted, transparent platform, making it simple for talent to find meaningful work and for organizations to find the people who will help them grow.",
    },
    {
        title: 'Our Vision',
        image: vision,
        description:
            "To become the most trusted employment platform, known for opening doors, closing gaps in opportunity, and building a future where every job seeker can find work that matches their potential.",
    },
    {
        title: 'Opportunities at Rogjarbank',
        image: opp,
        description:
            "To become the most trusted employment platform, known for opening doors, closing gaps in opportunity, and building a future where every job seeker can find work that matches their potential.",
    },
    {
        title: 'Why Choose Rogjarbank?',
        image: wr,
        description:
            "Rogjarbank is more than a job board. We are a trusted partner for both job seekers and employers, providing a platform that prioritizes transparency, efficiency, and meaningful connections.",
    }
]

const team = [
    {
        name: "Karuna Thapa",
        role: "FRONT DESK EXECUTIVE",
        bio: "Front Desk Executive skilled in customer service and office coordination.",
        image: hr,
    },
    {
        name: "Ishika",
        role: "HR EXECUTIVE",
        bio: "HR Executive focused on recruitment, coordination, and team support.",
        image: fd,
    },
    {
        name: "Bishnu Thapa",
        role: "SENIOR HR ASSISTANT",
        bio: "Dedicated HR professional skilled in hiring, coordination, and employee support.",
        image: cfo,
    },
]

function TeamCard({ member }) {
    const [imgError, setImgError] = useState(false)

    return (
        <div className="flex flex-col items-center rounded-xl border-2 border-teal-400 bg-white px-8 py-10 text-center shadow-sm transition-shadow hover:shadow-md">
            {member.image && !imgError ? (
                <img
                    src={member.image}
                    alt={member.name}
                    onError={() => setImgError(true)}
                    className="mb-5 h-24 w-24 rounded-md object-cover"
                />
            ) : (
                <button
                    type="button"
                    aria-label={`Add photo for ${member.name}`}
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white transition-colors hover:bg-teal-600"
                >
                    <Plus className="h-5 w-5" strokeWidth={2.5} />
                </button>
            )}

            <h3 className="text-lg font-bold text-teal-800">
                {member.image ? member.name : `About ${member.name}`}
            </h3>

            {member.image && (
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-teal-500">
                    {member.role}
                </p>
            )}

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                {member.bio}
            </p>
        </div>
    )
}

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
            {/* Mission, Vision, Opportunities */}
            <div className="max-w-8xl mx-auto px-6 pb-24 space-y-20">
                {pillars.map((pillar, index) => (
                    <div
                        key={pillar.title}
                        className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                            }`}>
                        <div className="relative">
                            <div className="absolute -inset-3 border border-[#C9A227]/40 rounded-2xl -z-10 hidden md:block" />
                            <img
                                src={pillar.image}
                                alt={`${pillar.title} image`}
                                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div
                            key={pillar.title}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold  mb-3">
                                {pillar.title}
                            </h3>
                            <div className="w-10 h-[3px] bg-[#2D6A6A] mb-4" />
                            <p className="text-slate-600 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Our Team */}
            <section className="w-full">
                <div className="max-w-5xl mx-auto px-6 pb-24">
                    <h2 className="mb-12 text-center text-3xl font-bold text-teal-800">
                        Our Team
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Aboutus