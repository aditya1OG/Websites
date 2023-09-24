'use client'

import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import '../app/globals.css'

function Contact() {
    const [isContactVisible, setIsContactVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                setIsContactVisible(rect.top < window.innerHeight * 0.75);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Element name="contact">
                <div
                    id="contact"
                    className={`border-t h-screen text-white flex flex-col gap-5 text-center items-center justify-center bg-black ${isContactVisible ? "animate-fadeIn-10" : ""}`}
                >
                    <h2 className="font-nunito text-[48px]">Get In Touch</h2>
                    <p className="text-lg font-sans2 w-[75%] lg:w-[55%]">
                        I'm actively seeking opportunities in the field of front-end
                        development. If there's a vacant position that aligns with my skills
                        and expertise, please don't hesitate to reach out. My inbox is
                        always open, whether you have inquiries, wish to discuss anything
                        further, or simply want to say hello. I'm committed to promptly
                        responding to all messages and look forward to connecting with you!
                    </p>

                    <button
                        className="border px-4 py-2"
                        onClick={() => {
                            window.location.href = "mailto:adityatiwari9410@gmail.com";
                        }}
                    >
                        Say Hello👋
                    </button>
                </div>
            </Element>
        </div>
    );
}

export default Contact;
