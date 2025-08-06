import React, { useState } from "react";
import "./App.css";
import NexusLogo from "./assets/Nexus.png";
import AtlasLogo from "./assets/Atlas Esport Consulting.jpg";
import UTKLogo from "./assets/University of Tennessee Knoxville.png";
import MeImg from "./assets/Me.jpg";
import ResumePDF from "./assets/Alex_Chen_Resume.pdf";

function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [modalExp, setModalExp] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experienceData = [
    {
      id: 1,
      title: "Incoming Machine Learning Research Assistant",
      company: "University of Tennessee",
      logo: UTKLogo,
      location: "Knoxville, TN",
      period: "August 2025 - Present",
      technologies: ["Python", "React", "Azure"],
      description: [
        "Leading full-stack development for NLP-based research project funded by Oak Ridge National Laboratory."
      ]
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "AskNexus.AI",
      companyLink: "https://www.asknexus.ai/",
      logo: NexusLogo,
      location: "Knoxville, TN",
      period: "March 2025 - August 2025",
      technologies: ["React/React Native", "Python", "C#", "SQL", "Azure", "Git"],
      description: [
        "During my internship at a EdTech startup, I worked on the frontend/backend for the Nexus product, ETL processes for client data onboarding, and worked on our Loop mobile app product as well. Some things I worked on were: Designing new product features end-to-end, optimizing SQL queries, refactoring REST endpoints, automating ETL processes, and resolving critical bugs in both products. My favorite 'project' was building an internal support system with native email integration, which replaced manual inbox workflows and decreased ticket handling time for our CEO/CSM."
      ]
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Atlas Esports Consulting",
      companyLink: "https://x.com/AtlasOfEsports",
      logo: AtlasLogo,
      location: "Remote",
      period: "August 2024 - February 2025",
      technologies: ["React", "Node.js", "Python", "Flask", "Riot API"],
      description: [
        "For this internship, I developed a full-stack platform using React, Node.js, and Python, enabling users to manage profiles, tournaments, and schedules. I integrated player statistics by connecting to the Riot API and implemented a Redis caching layer to improve data retrieval efficiency. Additionally, I engineered APIs with Flask to provide real-time Twitch streams and videos directly on the site. This project strengthened my skills in scalable web architecture and real-time data integration."
      ]
    },
    {
      id: 4,
      title: "AI/ML Research Assistant",
      company: "Zhao Robot Lab (University of Tennessee)",
      logo: UTKLogo,
      location: "Knoxville, TN",
      period: "December 2023 - May 2024",
      technologies: ["Python", "PyTorch", "Kotlin"],
      description: [
        "I leveraged large language models such as GPT, Llama, and Qwen to extract linguistic patterns from participant responses for Alzheimer’s research. I integrated retrieval-augmented generation systems with FAISS vector indexing to improve relevant data retrieval. I also collaborated with the research team to streamline the user experience for study subjects, reducing experiment times. Additionally, I built a mobile app in Kotlin that integrated the OpenAI API, enabling on-the-go analysis and data collection."
      ]
    }
  ];

  const projectsData = [
    {
      id: 1,
      title: "Float.AI - Embedded AI Coach",
      tech: ["React", "FastAPI", "OpenAI API", "DynamoDB", "Overwolf", "Azure", "PyTorch"],
      link: "https://floatdemo.vercel.app/",
      short: "Valorant AI Coach In-Game Overlay", // editable short description
      description: [
        "Developed a Valorant AI Agent, using Python microservices to generate context-aware guides and suggestions.",
        "Trained reinforcement learning models using 200+ pro matches to deliver optimal setups and strategies.",
        "Enhanced and deployed backend services using Azure and Render, incorporating load balancing to decrease AI response time by 21%."
      ]
    },
    {
      id: 2,
      title: "SpeakGeek - Google AI Hackathon",
      tech: ["React", "Firebase", "TailwindCSS", "Gemini"],
      link: "https://6610ac02dfac427cb4cf4d6b--serene-douhua-d88e0e.netlify.app/",
      short: "Mock Interview App Built For A Hackathon Sponsored By Google",
      description: [
        "Built immersive mock interview app with React/Firebase, combining real-time feedback and practice.",
        "Led live-streaming feature with 95% accuracy using Google Speech API for text-to-speech integration.",
        "Integrated Google's Gemini API to improve scoring and understanding, resulting in a 25% increase in user confidence as reflected in post-use surveys."
      ]
    },
    {
      id: 3,
      title: "Jukebox'd - Social Platform for Music",
      tech: ["React", "Flask", "TailwindCSS"],
      short: "Social Platform For Music Built For a School Project",
      description: [
        "Engineered responsive, interactive music feed and library with Flask backend, charts, forums, and reviews.",
        "Aggregated user behaviors, preferences, and listening data for analytics and recommendations.",
        "Built real-time notifications, integrated with Spotify API, and enabled collaborative playlist creation and discussion."
      ]
    }
  ];

  const skillsData = [
    {
      id: 1,
      category: "Languages",
      skills: ["Python", "JavaScript", "C#", "C++", "Kotlin", "Java", "SQL", "HTML/CSS"]
    },
    {
      id: 2,
      category: "Frameworks/Libraries",
      skills: ["React", "Next.js", "Node.js", "Express.js", "LangChain", "PyTorch", "Flask", "FastAPI", "Pandas", "Numpy"]
    },
    {
      id: 3,
      category: "Technologies/Tools",
      skills: ["Git/GitHub", "AWS", "Azure", "Jupyter Notebook", "Docker", "Firebase", "MongoDB", "DynamoDB"]
    }
  ];

  const renderExperienceTimeline = () => (
    <div className="timeline">
      {experienceData.map((exp, idx) => (
        <div key={exp.id} className="timeline-item" onClick={() => setModalExp(exp)}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <img src={exp.logo} alt={exp.company + ' logo'} className="timeline-logo" />
            <div>
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-company">{exp.company}</div>
            </div>
            {!isMobile && <div className="timeline-period">{exp.period}</div>}
          </div>
          {isMobile && <div className="timeline-period" style={{marginTop: '0.5rem'}}>{exp.period}</div>}
        </div>
      ))}
      <div className="timeline-line" />
    </div>
  );

  const renderModal = () => (
    modalExp && (
      <div className="exp-modal-overlay" onClick={() => setModalExp(null)}>
        <div className="exp-modal" onClick={e => e.stopPropagation()}>
          <img src={modalExp.logo} alt={modalExp.company + ' logo'} className="modal-logo" />
          <div className="modal-header">
            <div className="modal-title">{modalExp.title}</div>
            <div className="modal-company">
              {modalExp.companyLink ? (
                <a href={modalExp.companyLink} className="card-title-link" target="_blank" rel="noopener noreferrer">{modalExp.company}</a>
              ) : (
                <span>{modalExp.company}</span>
              )}
            </div>
            <div className="modal-meta">{modalExp.location} • {modalExp.period}</div>
          </div>
          <div className="modal-tech">
            <span>Technologies:</span>
            {modalExp.technologies.map((tech, i) => (
              <span key={i} className="modal-tech-tag">{tech}</span>
            ))}
          </div>
          {Array.isArray(modalExp.description)
            ? modalExp.description.map((desc, i) => <p key={i} className="modal-desc-paragraph">{desc}</p>)
            : <p className="modal-desc-paragraph">{modalExp.description}</p>
          }
          <button className="modal-close" onClick={() => setModalExp(null)}>Close</button>
        </div>
      </div>
    )
  );

  const renderProjects = () => (
    <div className="content-grid">
      {projectsData.map(project => (
        <div key={project.id} className="content-card" onClick={() => setModalProject(project)}>
          <h3 className="card-title-link">{project.title}</h3>
          <p className="card-subtitle project-short-desc">{project.short}</p>
        </div>
      ))}
    </div>
  );

  const renderProjectModal = () => (
    modalProject && (
      <div className="exp-modal-overlay" onClick={() => setModalProject(null)}>
        <div className="exp-modal" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title">{modalProject.title}</div>
            {modalProject.link && (
              <a href={modalProject.link} className="modal-title-link" target="_blank" rel="noopener noreferrer">Project Link</a>
            )}
            <div className="modal-company">{Array.isArray(modalProject.tech) ? modalProject.tech.join(', ') : modalProject.tech}</div>
          </div>
          <div className="modal-tech">
            <span>Technologies:</span>
            {Array.isArray(modalProject.tech) ? modalProject.tech.map((tech, i) => (
              <span key={i} className="modal-tech-tag">{tech}</span>
            )) : (
              <span className="modal-tech-tag">{modalProject.tech}</span>
            )}
          </div>
          <ul className="modal-desc">
            {modalProject.description.map((desc, i) => <li key={i}>{desc}</li>)}
          </ul>
          <button className="modal-close" onClick={() => setModalProject(null)}>Close</button>
        </div>
      </div>
    )
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'experience':
        return (
          <>
            {renderExperienceTimeline()}
            {renderModal()}
          </>
        );
      case 'projects':
        return (
          <>
            {renderProjects()}
            {renderProjectModal()}
          </>
        );
      case 'skills':
        return (
          <div className="skills-grid">
            {skillsData.map(skillGroup => (
              <div key={skillGroup.id} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-image" style={{ backgroundImage: `url(${MeImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
          <h1>Alex Chen</h1>
          <div className="profile-edu">CS @ The University of Tennessee</div>
          <p className="profile-title">Software Engineer</p>
          <p className="profile-bio">I love to build things. I'm really into Anime, Music, Fashion, and Video Games.</p>
          <div className="contact-label">Contact</div>
          <div className="contact-info retro-contact">
            <a href="mailto:alex.ch7@outlook.com" target="_blank" rel="noopener noreferrer" className="retro-link">
              <span className="retro-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
              </span>
              alex.ch7@outlook.com
            </a>
            <a href="https://linkedin.com/in/alexch7" target="_blank" rel="noopener noreferrer" className="retro-link">
              <span className="retro-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/></svg>
              </span>
              linkedin.com/in/alexch7
            </a>
            <a href="https://github.com/alexchen1337" target="_blank" rel="noopener noreferrer" className="retro-link">
              <span className="retro-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
              </span>
              github.com/alexchen1337
            </a>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Relevant Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
        </button>
          <a href={ResumePDF} className="resume-btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
        <div className="content-area">
          <div className="content-window">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;