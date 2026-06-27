import React from 'react'
import { useState } from 'react'

const faqs = [
    {
        question: "How do I apply for a job?",
        answer: "Create an account, upload your CV, and click the Apply button on any job listing."
    },
    {
        question: "Is creating an account free?",
        answer: "Yes, creating a Jobseeker account on Rogjar Bank is completely free."
    },
    {
        question: "How can employers post jobs?",
        answer: "Employers can register an employer account and post job vacancies from their dashboard."
    },
    {
        question: "Can I update my CV after uploading it?",
        answer: "Yes, you can update or replace your CV anytime from your profile."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-bold text-center mb-10 text-cyan-700">
                Frequently Asked Questions
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg mb-4 shadow-sm">
                        <button onClick={() => handleClick(index)} className="w-full flex justify-between items-center p-5 font-semibold text-left">
                            {faq.question}

                            <span>
                                {openIndex === index ? "-" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="px-5 pb-5 text-black">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </section>
    );
};
export default Faq