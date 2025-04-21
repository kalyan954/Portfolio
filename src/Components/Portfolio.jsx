import React from 'react';
import './portfolio.css'; // Importing your custom CSS

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            {/* Home Section */}
            <section className="section text-center">
                <h1 className="text-4xl font-extrabold text-blue-700">Hi, I'm Kalyan Varma Kakarlapudi</h1>
                <p className="text-xl text-gray-600">Aspiring Software Developer | CSE Graduate</p>
                <button className="primary-btn">Contact Me</button>
            </section>


            {/* About Me Section */}
            <section className="section">
                <h2>About Me</h2>
                <p>
                    Aspiring to secure a full-time position that presents dynamic professional challenges, allowing me to leverage exceptional interpersonal skills, effective time management, and problem-solving abilities for sustained success and organizational growth.
                </p>
            </section>

            {/* Education Section */}
            <section className="section">
                <h2>Education</h2>
                <ul>
                    <li><strong>B.Tech CSE</strong> - Usha Rama College of Engineering and Technology, JNTU-K (2023) - CGPA: 8.3</li>
                    <li><strong>Intermediate MPC</strong> - Sri Chaitanya Junior College, Telangana (2019) - CGPA: 9.7</li>
                    <li><strong>SSC</strong> - Siddhartha EM High School, Vijayawada (2017) - CGPA: 9.5</li>
                </ul>
            </section>

            {/* Skills Section */}
            <section className="section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'Node.js', 'Express.js', 'Spring Boot', 'Hibernate', 'MySQL', 'MongoDB', 'PostgreSql'].map(skill => (
                        <div key={skill} className="skill-item">{skill}</div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="section">
                <h2>Projects</h2>
                <ul>
                    <li>
                        <strong>Mobile-Enabled Password Less Authentication:</strong> Implemented a secure mobile authorization login system using Node.js, Express.js, Firebase, and MySQL to eliminate traditional passwords.
                    </li>
                    <li>
                        <strong>Driver Drowsiness Detection:</strong> Developed a real-time system using machine learning and image processing to detect driver drowsiness based on visual behavior.
                    </li>
                    <li>
                        <strong>QR Code Generator:</strong> Created a Python-based QR code generator using tkinter for UI and the qrcode package.
                    </li>
                </ul>
            </section>

            {/* Internships Section */}
            <section className="section">
                <h2>Internships</h2>
                <ul>
                    <li>Process Mining Virtual Internship - Celonis (Jul–Sep 2022)</li>
                    <li>Cybersecurity Virtual Internship - Palo Alto Networks (Oct–Dec 2021)</li>
                    <li>AI-ML Virtual Internship - AWS Academy (Mar–May 2022)</li>
                </ul>
            </section>

            {/* Achievements Section */}
            <section className="section">
                <h2>Achievements</h2>
                <ul>
                    <li>Elite Certificate in Big Data Computing from NPTEL</li>
                    <li>Academic Excellence in 2015 and 2016</li>
                    <li>Director General of English in school among 25 participants</li>
                    <li>ILM English Today International – Intermediate 1C certificate</li>
                </ul>
            </section>

            {/* Extracurricular Activities Section */}
            <section className="section">
                <h2>Extracurricular Activities</h2>
                <ul>
                    <li>Attended 4.0 Tech Bootcamp by Nxtwave</li>
                    <li>Participated in Engineer ka Maha Sangramam, March 2022</li>
                    <li>Volunteered for Crossword Puzzle and Techbuzz Championship at National Level Fest</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className="section">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:kalyankakarlapudi954@gmail.com">kalyankakarlapudi954@gmail.com</a></p>
                <p>Phone: 6301215349</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/kalyan-varma-kakarlapudi-177378260" target="_blank" rel="noreferrer">Kalyan Varma Kakarlapudi</a></p>
            </section>
        </div>
    );
}
