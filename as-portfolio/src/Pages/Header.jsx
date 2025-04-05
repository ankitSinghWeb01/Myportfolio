import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import Union from '../assets/Icons/Union.png';
import Group from '../assets/Icons/Group.png';
import Line from '../assets/Icons/Line.png';
import Html from '../assets/Icons/Html.png';
import Bootstrap from "../assets/Icons/Bootstrap.png";
import Antd from "../assets/Icons/Antd.png";
import Reactlogo from "../assets/Icons/Reactlogo.png";
import javascriptlogo from "../assets/Icons/javascriptlogo.png";
import zillitlogo from "../assets/Icons/zillitlogo.png";
import whatsp from "../assets/Icons/whatsp.png";
import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
const HeroSection = () => {


    const experiences = [
        "Developed and integrated Firebase authentication for secure user login and registration.",
        "Implemented User Management system to handle user roles and permissions.",
        "Designed and developed Admin Modules with role-based access control (RBAC) for dynamic feature access.",
        "Managed the User Onboarding process, including document management and user agreement signing.",
        "Integrated Socket.io for real-time chat features and notifications.",
        "Assisted in the integration of Agora for one-on-one and group video calling functionality.",
        "Developed an SOS functionality for urgent user requests",
    ];


    const phoneNumber = "8076950595";
    const message = encodeURIComponent("Hi there, I want to get in touch!");
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="min-h-screen w-full bg-[#0e0e0e] text-white relative px-4 md:px-20 py-4 font-sans overflow-hidden">
            {/* Top Navigation Bar */}
            <Row justify="center" className="z-10 relative mb-10">
                <div className="bg-black rounded-xl px-4 py-4 shadow border border-gray-700 w-full max-w-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <a href="/resume.pdf" download className="w-full sm:w-auto">
                            <Button
                                type="default"
                                className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Download Resume
                            </Button>
                        </a>

                        <Divider
                            type="vertical"
                            className="hidden sm:block bg-gray-600 h-6"
                        />

                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button
                                type="default"
                                className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Contact Now
                            </Button>
                        </a>

                        <Divider
                            type="vertical"
                            className="hidden sm:block bg-gray-600 h-6"
                        />

                        <Button
                            type="default"
                            className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Work Portfolio
                        </Button>
                    </div>
                </div>
            </Row>




            {/* Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:32px_32px] opacity-10 z-0 pointer-events-none" />

            {/* Hero Section Content */}
            <div
                className="relative z-10 px-6 py-10 rounded shadow-md "
                style={{ backgroundImage: `url(${Union})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <Row gutter={[32, 32]} align="middle">
                    {/* Left Column */}
                    <Col xs={24} md={12}>
                        <div className="text-left">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                                <span className="text-gray-300">Ankit</span> Singh
                            </h1>
                            <h2 className="text-xl sm:text-2xl text-gray-400 mb-4">Frontend Developer</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Result-oriented software professional with over 1 years of experience in software design and development.
                                Proven ability to produce brainstorming strategies. Expertise spans all phases of Content Development,
                                including Study, Analysis, Content Design, Deployment, Integration, and Implementation.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <Button
                                    type="primary"
                                    size="large"
                                    className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105  transition"
                                >
                                    Download Resume
                                </Button>



                                <a href={waLink} target="_blank" rel="noopener noreferrer">

                                    <Button
                                        type="primary"
                                        size="large"
                                        className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition"
                                    >
                                        Contact Now
                                    </Button>
                                </a>
                            </div>
                        </div>

                    </Col>

                    {/* Right Column */}
                    <Col xs={24} md={12} className="flex justify-center md:justify-end">
                        <img
                            src={Group}
                            alt="Ankit Singh"
                            className="rounded-xl border-[3px] border-white max-w-[350px] w-full"
                        />
                    </Col>
                </Row>
            </div>
            {/* <div className="mt-10 flex flex-col items-center text-center">
                <h2 className="text-2xl">Skills</h2>
                <img
                    src={Line}
                    alt="Portfolio Line"
                    className="rounded-xl border-[3px] border-white max-w-[300px] w-full mt-2"
                />
            </div> */}


            {/* Skills Placeholder */}
            <div className='mt-6 flex flex-col items-center text-center' >
                <h1 className="text-4xl">Skills</h1>
                <div className=" p-4 rounded-lg text-center">
                    <img
                        src={Line}
                        className="rounded-xl border-[3px] border-white max-w-[300px] w-full mt-2"
                        alt="Portfolio Line"
                    />
                </div>

            </div>
            <div>

                <div className='flex flex-wrap gap-8 justify-center mt-4'>
                    <div className="p-4 rounded-lg text-center">

                        <img
                            src={Html}
                            alt="Portfolio Line"

                        />
                    </div>
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={Bootstrap}


                        />
                    </div>
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={Reactlogo}
                        />
                    </div>
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={javascriptlogo}
                        />
                    </div>
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={Antd}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-6 flex flex-col items-center text-center' >
                <h1 className="text-4xl">Experience</h1>
                <div className=" p-4 rounded-lg text-center">
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={Line}
                            className="rounded-xl border-[3px] border-white max-w-[300px] w-full mt-2"
                            alt="Portfolio Line"
                        />
                    </div>
                </div>
            </div>

            <div className="relative w-full z-10 px-6 py-10 rounded shadow-md overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 w-full bg-slate-950 opacity-50 z-0"></div>

                {/* Content */}
                <div
                    className="relative z-10"
                    style={{
                        backgroundImage: `url(${Union})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <Row gutter={[32, 32]} align="middle">
                        {/* Left Column */}
                        <Col xs={24} md={12}>
                            <div className="text-left px-8 ">
                                <div>  <img
                                    src={zillitlogo}
                                    className="rounded-xl border-[3px] border-white text-lg h-32 w-32 mt-2"
                                    alt="Zillit Logo"
                                />
                                    <p className="text-4xl font-semibold mt-4 ml-8 text-gray-300">Zillit</p></div>
                                <p className="text-2xl font-semibold mt-2 text-gray-400">Frontend Developer</p>
                                <p className="text-xl font-semibold mt-2 text-gray-400">2022 - Present</p>
                                <p className="text-md font-semibold mt-2 text-gray-400">
                                    <span className='font-bold'>Technologies:</span> Firebase, Socket.io, Agora, React.js, JavaScript, HTML/CSS, Ant Design
                                </p>

                                <div className="flex flex-wrap gap-6 mt-6">

                                    <a href="
                                    https://web.zillit.com/home" target="_blank" rel="noopener noreferrer">

                                        <Button
                                            type="primary"
                                            size="large"
                                            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition w-52 h-14"
                                        >
                                            Visit Zillit
                                        </Button>
                                    </a>

                                </div>
                            </div>
                        </Col>

                        {/* Right Column - Experience List */}
                        <Col xs={24} md={12}>
                            <div className="text-white p-2 md:p-6">
                                <ul className="list-disc pl-5 space-y-4 text-base md:text-lg leading-relaxed text-gray-300">
                                    {experiences.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


            <div className='mt-6 flex flex-col items-center text-center' >
                <h1 className="text-4xl">Want to hire</h1>
                <div className=" p-4 rounded-lg text-center">
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={Line}
                            className="rounded-xl border-[3px] border-white max-w-[300px] w-full mt-2"
                            alt="Portfolio Line"
                        />
                    </div>
                </div>
            </div>

            <Row justify="center" className="z-10 relative mb-10 gap-3">
                {/* <div className="bg-black rounded-xl px-4 h-14 flex items-center gap-4 shadow border border-gray-700"> */}
                <a href="/resume.pdf" download>
                    <Button
                        type="default"
                        className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition w-52 h-14 font-bold text-white"
                    >
                        Download Resume
                    </Button>
                </a>

                {/* <Button
                    type="default"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition w-52 h-14 font-bold text-white"
                >
                    Contact Now
                </Button> */}

                <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <Button
                        type="default"
                        className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition w-52 h-14 font-bold text-white"
                    >
                        Contact Now
                    </Button>
                </a>
                {/* </div> */}
            </Row>

            <div className='mt-6 flex flex-col items-center text-center' >
                <h1 className="text-4xl">Contact Me</h1>
                <div className=" p-4 rounded-lg text-center">
                    <div className=" p-4 rounded-lg text-center">
                        <img
                            src={Line}
                            className="rounded-xl border-[3px] border-white max-w-[300px] w-full mt-2"
                            alt="Portfolio Line"
                        />
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-4 mt-4 list-disc pl-5  text-base md:text-lg leading-relaxed text-gray-300'>
                    <p><span className='text-xl font-bold'>Email:</span> ankitrajput0014@gmail.com</p>
                    <p><span className='text-xl font-bold'>Contact : {''}</span>8076950595</p>
                </div>
                <div className='grid grid-cols-3 gap-12 justify-center text-center mt-6'>
                    <a href={waLink} target="_blank" rel="noopener noreferrer">

                        <img
                            src={whatsp}
                            alt="Portfolio Line"
                        />
                    </a>
                    <img
                        src={linkedin}
                        alt="Portfolio Line"
                    />
                    <img
                        src={github}
                        alt="Portfolio Line"
                    />


                </div>
                <Row justify="center" className="z-10 relative mt-8">
                    <div className="bg-black rounded-xl px-4 py-4 shadow border border-gray-700 w-full max-w-3xl">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <a href="/resume.pdf" download className="w-full sm:w-auto">
                                <Button
                                    type="default"
                                    className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Download Resume
                                </Button>
                            </a>

                            <Divider
                                type="vertical"
                                className="hidden sm:block bg-gray-600 h-6"
                            />

                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button
                                    type="default"
                                    className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Contact Now
                                </Button>
                            </a>

                            <Divider
                                type="vertical"
                                className="hidden sm:block bg-gray-600 h-6"
                            />

                            <Button
                                type="default"
                                className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Work Portfolio
                            </Button>
                        </div>
                    </div>
                </Row>

            </div>





        </div>
    );
};

export default HeroSection;
