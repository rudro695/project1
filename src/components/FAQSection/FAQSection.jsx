
import React from "react";
import Faqs from '../Faqs/Faqs'

const QUESTIONS = [
    "What is the difference between lease and licence agreement?",
    "How ownership of property is acquired by a person?",
    "Can a registered will be rectified or changed?",
    "Is the certified copy of a registered will available to any body?",
];


const WHY_US_DATA = [
    {
        title: "Great Infrastructure",
        desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
        icon: "🏥",
    },
    {
        title: "24/7 Ambulance Services",
        desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
        icon: "🚑",
    },
    {
        title: "Cutting Edge Technology",
        desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
        icon: "💉",
    },
]

const FAQSection = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 px-6 py-10">
            {/* FAQs */}
            <div>
                <h2 className="text-2xl font-bold mb-6">FAQ's</h2>
                <div className="space-y-3">
                    {QUESTIONS.map((q, i) => (
                        <Faqs key={i} question={q} isOpen={i === 3} />
                    ))}
                </div>
            </div>

            {/* Why Us */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Why Us?</h2>
                <div className="space-y-6">
                    {WHY_US_DATA.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="bg-cyan-400 text-white p-4 rounded-full text-2xl">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
