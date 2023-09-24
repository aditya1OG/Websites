'use client'

import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'YouTube Clone',
        github_link: 'https://github.com/aditya1OG/YouTube_Clone.git',
        Live: 'https://you-tube-clone-aditya1q.vercel.app/',
        description: 'The YouTube Clone project is a web application that replicates the core features and user interface of the YouTube. Developed using React for  functionality and Tailwind CSS for styling,',
        img: '../assests/youtube.png',
        technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
        id: 2,
        title: 'Amazon Clone',
        github_link: 'https://github.com/aditya1OG/Amazon_Clone.git',
        Live: 'https://amazon-clone-1ysq-aditya1q.vercel.app/',
        description: 'The Amazon Clone - Frontend is a demonstration of frontend development skills and serves as a portfolio project for showcasing the ability to create a responsive, feature-rich e-commerce platform interface.',
        img: '../assests/amazon.png',
        technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
        id: 3,
        title: 'Nike Shoe Website',
        github_link: 'https://nike-store-green.vercel.app/',
        Live: 'https://nike-store-aditya1q.vercel.app/',
        description: 'The Nike Store Website project serves as a demonstration of web development skills, including HTML, CSS, and JavaScript and serves as a portfolio project for showcasing the ability to create a responsive interface ',
        img: '../assests/nike.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 4,
        title: 'Restaurant Website',
        github_link: 'https://github.com/aditya1OG/Restaurent_web.git',
        Live: 'https://restaurent-lbiuddmjp-aditya1q.vercel.app/',
        description: 'This web project utilizes the power of Next.js and Tailwind CSS to deliver an exceptional front-end user interface that captures the essence of the restaurant, promotes its menu, and provides essential information to diners.',
        img: '../assests/logo.svg',
        technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
        id: 5,
        title: 'Netflix Clone',
        github_link: 'https://github.com/aditya1OG/Netflix_Clone.git',
        Live: 'https://netflix-clone-bice-xi.vercel.app/',
        description: 'The Netflix Clone project serves as a demonstration of front-end web development skills and creativity.And offering users a taste of the Netflix experience while highlighting the capabilities of HTML, CSS, and JavaScript.',
        img: '../assests/netflix.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 6,
        title: 'Facebook Clone',
        github_link: 'https://github.com/aditya1q/Facebook_Clone.git',
        Live: 'https://facebook-clone-ebon.vercel.app/',
        description: 'The Facebook clone project serves as a demonstration of web development skills, including HTML, TailwindCSS, and JavaScript and also It is responsive for mobile devices.In this project i have created sign-up and sign-in page',
        img: '../assests/facebook.png',
        technologies: ['HTML', 'TailwindCSS'],
    },
    {
        id: 7,
        title: 'First Demo Portfolio',
        github_link: 'https://github.com/aditya1OG/Gym_Web.git',
        Live: 'https://demo-portfolio-topaz.vercel.app/',
        description: 'The goal of this portfolio project is to design and develop a modern Portfolio. This is my First portfolio',
        img: '../assests/body-part.png',
        technologies: ['HTML', 'CSS', 'Javascript'],
    },
    {
        id: 8,
        title: 'Figma Practices',
        github_link: 'https://github.com/aditya1q/Demo_Portfolio.git',
        Live: 'https://figma-practice-aditya1q.vercel.app/',
        description: 'The objective of the "Four Card Project" is to design a visually appealing and cohesive set of four cards that showcase different pieces of content or concepts.',
        img: '../assests/icon-karma.svg',
        technologies: ['HTML', 'CSS'],
    },
];

export default function Projects() {
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                setIsProjectsVisible(rect.top < window.innerHeight * 0.75);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Element name="projects">
                <div
                    id="projects"
                    className={`mt-16 lg:mt-24 text-black border-t pb-20 ${isProjectsVisible ? 'animate-fadeIn-9' : ''
                        }`}
                >
                    <h1 className="text-2xl font-bold text-center text-white pt-6">Projects</h1>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12 text-sm md:text-base place-items-center shadow-[3xl]">
                        {projects.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-center gap-5 h-[420px] xl:h-96 text-center text-white w-[90%] xl:w-72 shadow-2xl border rounded-2xl"
                            >
                                <a
                                    href={item.Live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-xl flex flex-col items-center justify-center gap-5"
                                >
                                    <div className="flex items-center justify-around cursor-pointer">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="flex items-center justify-center object-contain w-[30%]"
                                        />
                                    </div>
                                    {item.title}
                                    <p className="font-medium text-xs text-center w-[85%]">
                                        {item.description}
                                    </p>
                                </a>
                                <div className="flex space-x-2 mt-4">
                                    {item.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-5">
                                    <Link href={item.github_link} legacyBehavior>
                                        <a
                                            href={item.github_link}
                                            className="text-white border rounded-lg px-3 py-1 bg-[#131921] text-xs hover:bg-[black]"
                                        >
                                            Source Code
                                        </a>
                                    </Link>
                                    <Link href={item.Live} legacyBehavior>
                                        <a
                                            href={item.Live}
                                            className="text-white border rounded-lg px-3 py-1 bg-[#131921] text-xs hover:bg-black"
                                        >
                                            Live Demo
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </div>
    );
}
