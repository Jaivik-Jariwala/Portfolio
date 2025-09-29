document.addEventListener('DOMContentLoaded', function() {

    // --- TRANSLATIONS DATA ---
    const translations = {
        en: {
            greetingLoop: "Hey there, I'm",
            navHome: "Home",
            navWork: "Work",
            navProjects: "Projects",
            navSkills: "Skills",
            navServices: "Services",
            navTestimonials: "Testimonials",
            navBlog: "Blog",
            navResume: "Download Resume",
            heroProfessionTitle: "Machine Learning &",
            heroProfessionSubtitle: "AI Engineer",
            heroProfessionDesc: "Specializing in Computer Vision, Robotics, and GPU Optimization.",
            heroLocationTitle: "Based in",
            heroLocationDesc: "Surat, Gujarat",
            workTitle: "My Work Experience",
            workSubtitle: "A journey through impactful roles where I've applied AI, machine learning, and computer vision to solve real-world challenges.",
            work1Title: "Artificial Intelligence Intern - JSW Morris Garages India Pvt. Ltd.",
            work1Desc: "Engineered a Retrieval-Augmented Generation (RAG) multimodal chatbot by training DistilGPT (124M) for cost analysis and integrating Salesforce BLIP for vision-language understanding, optimized with Big Data pipelines and cloud computing infrastructure, resulting in significant cost saving over year via increasing vehicle teardown data collection and analysis.",
            work2Title: "Artificial Intelligence Product Engineering Intern - Maharishi Industries Private Limited",
            work2Desc: "Designed and deployed a GPU-accelerated AI surveillance system on NVIDIA Jetson Orin, achieving 96% real-time accuracy and operational adoption by Indian Army units. Integrated vision-radar (BFSR) fusion with transformer-based object perception for border security along the Jammu and Kashmir LoC. Utilized RT-DETR, DepthAnythingV2, and D-FINE models with Flask-based web application for real-time streaming and alerts.",
            work3Title: "Summer Data Science Research Intern - Indian Institute of Technology, Bombay",
            work3Desc: "Processed over 100GB of statistical and video data to predict vehicle driving behavior. I developed robust statistical models achieving 84% accuracy and implemented automated data preprocessing pipelines. This involved analyzing IMU data for overtaking event prediction, utilizing image processing and deep learning for vehicular distance estimation, and conducting statistical analysis of longitudinal acceleration to detect braking and acceleration events.",
            work4Title: "Autonomous Systems Intern - iNav Labs",
            work4Desc: "Designed and implemented an advanced autonomous delivery robot pipeline, integrating YOLOv8 for precise object detection with RRT* path planning for optimized navigation. Achieved 96.4% precision in object recognition and a 60% reduction in task completion time by leveraging ROS on a Jetson Nano platform, enhanced with LiDAR and dual-camera systems for robust environmental mapping and real-time decision-making.",
            viewCertificate: "View Certificate",
            projectsTitle: "Best Portfolio Projects of Mine...",
            projectsSubtitle: "Showcasing my technical expertise through innovative projects that push the boundaries of AI, machine learning, and computer vision.",
            project1Title: "RAG-based Multimodal Chatbot",
            project1Desc: "Developed at JSW MG Motor with Distill-GPT-2 and Salesforce BLIP, achieving cost analysis automation and identifying 12+ Cr in potential savings.",
            project2Title: "AI Surveillance System",
            project2Desc: "GPU-accelerated threat detection system with 96% accuracy, deployed with Indian Army units using NVIDIA Jetson Orin for real-time processing.",
            project3Title: "Autonomous Delivery Robot",
            project3Desc: "Integrated YOLOv8 object detection with RRT* path planning, achieving 96.4% precision and 60% improvement in task completion time.",
            project4Title: "Real-time Video Analytics",
            project4Desc: "Scalable object detection system using NVIDIA toolkits and AWS, reducing latency by 30% and increasing throughput with model quantization.",
            researchTitle: "Research & Publications",
            researchSubtitle: "Exploring new frontiers in AI and sharing my findings with the community.",
            statusPublished: "Published",
            statusOngoing: "Ongoing",
            research1Title: "Real-Time Autonomous Threat Detection using Sensor Fusion",
            research1Desc: "A novel architecture for fusing multimodal sensor data on edge devices for high-accuracy threat detection...",
            research1Authors: "Co-authors: Dr. Punit Gupta, Prof. Avijit Maji",
            research2Title: "Optimizing RAG Pipelines for Automotive Cost Analysis",
            research2Desc: "A study on improving the efficiency and accuracy of RAG systems for industrial applications...",
            research2Authors: "Co-authors: Mr. Sameer Jindal",
            viewPaper: "View Paper",
            viewDraft: "View Draft",
            skillsTitle: "Technical Skills",
            skillsSubtitle: "My toolbox of languages, frameworks, and platforms that I use to build, innovate, and solve complex problems.",
            skillsLangDb: "Languages & Databases",
            skillsAiMl: "AI, ML & Data",
            skillsCloud: "Cloud & DevOps",
            skillsDevTools: "Developer Tools",
            skillsCoursework: "Relevant Coursework",
            skillsInterests: "Areas of Interest",
            skillsSoft: "Soft Skills",
            course1: "Data Structures & Algorithms",
            course2: "Artificial Intelligence",
            course3: "Machine Learning",
            course4: "Computer Vision",
            course5: "Digital Image Processing",
            course6: "Operating Systems",
            course7: "Big Data (Kafka, Spark, Hadoop)",
            course8: "Internet of Things",
            interest1: "AI & Robotics",
            interest2: "GPU Optimization",
            interest3: "Deep Learning Architecture",
            interest4: "Research & Development",
            interest5: "Data Science",
            interest6: "Imaging Systems",
            interest7: "Applied Mathematics",
            softSkill1: "Creative Problem-Solving",
            softSkill2: "Clear Communication",
            softSkill3: "Self-Learning & Adaptability",
            softSkill4: "Focus on Results",
            softSkill5: "Technical Competence",
            softSkill6: "Active Listening",
            softSkill7: "Proactive Initiative",
            educationTitle: "Education",
            educationSubtitle: "My academics so far, and my ambition to aim higher with every degree and course I undertake.",
            educationDegree: "Bachelor of Technology, Computer Science and Engineering",
            educationUniversity: "School of Technology, Pandit Deendayal Energy University",
            viewThesis: "View Thesis",
            viewTranscript: "View Transcript",
            viewDegree: "View Degree",
            education12th: "12th Grade Higher School Education",
            educationBoard12: "Gujarat State Education Board",
            educationPR12: "Percentile Rank: 94.04%",
            educationGrade12: "Grade: A1",
            education10th: "10th Grade Higher Secondary School Education",
            educationBoard10: "Gujarat State Education Board",
            educationPct10: "Percentage: 93%",
            educationGrade10: "Grade: A2",
            certificationsTitle: "Certifications & Training",
            certificationsSubtitle: "My commitment to pursue continuous learning not limited to AI but Finance, Data Science, Machine learning, Mathematics, Management and other roles.",
            cert1Title: "Machine Learning Specialization",
            cert2Title: "Generative Adversarial Network (GANs) Specialization",
            cert3Title: "Application of Statistics in Data Analysis",
            cert4Title: "Understanding Incubation and Entrepreneurship",
            cert5Title: "Bachelor of Technology Coursework",
            membershipsTitle: "Community and Research Group Member",
            membershipsSubtitle: "Engaging with professional and social welfare communities to stay at the forefront of technology and social service through my work, time and resources.",
            testimonialsTitle: "Words From My Mentors",
            testimonialsSubtitle: "What industry leaders and professors say about my work ethic, technical contributions, and impact.",
            testimonial1Quote: "A catalyst for AI based cost reduction and workflow automation.",
            testimonial1Desc: `"Jaivik's work on multimodal RAG chatbot implementation has improvised our cost analysis process. His deep understanding of AI technologies and ability to deliver practical solutions from my vision in VAVE makes him an invaluable team member."`,
            testimonial2Quote: "A motivated young researcher.",
            testimonial2Desc: `"As his mentor at IIT Bombay, His statistical modeling approach to vehicle behavior prediction and automated data preprocessing pipelines demonstrate strong analytical thinking. Appreciate his dedication, approach, ethics and work"`,
            testimonial3Quote: "An Excellent Student but more of self motivated researcher and technical person",
            testimonial3Desc: `"As Jaivik Jariwala's mentor for his final year projects at Pandit Deendayal Energy University, I was deeply impressed by his ability to translate complex theory, attempt more complexer research methodologies,learn from the lectures and take time-off to conduct his own research studies to write unique papers."`,
            testimonial4Quote: "Professional, Creative, and Results-Driven Intern",
            testimonial4Desc: `"Jaivik's autonomous surveillance Artificial Intelligence helped us acheived a market competition level and accuracy level in real-world deployment in Jammu & Kashmir. His technical Proficiency is truly impressive."`,
            viewRecommendation: "View Recommendation",
            blogTitle: "Blog & Articles",
            blogSubtitle: "Insights on AI, machine learning, and cutting-edge technology from my research and industry experience.",
            blog1Title: "How Machine Learning is Changing the Defense Landscape",
            blog1Desc: "Exploring the implementation of AI surveillance systems in military applications and the impact of edge computing...",
            blog1Category: "Defense Tech",
            blog2Title: "The Rise of AI-Driven Cost Optimization in Automotive",
            blog2Desc: "Insights from developing RAG-based chatbots for the auto sector to achieve significant cost savings through intelligent analysis...",
            blog2Category: "Automotive AI",
            blog3Title: "Key Steps Before Starting Your First AI Project",
            blog3Desc: "From data preparation to model deployment, a guide to the essential considerations for successful AI implementation...",
            blog3Category: "AI Strategy",
            servicesTitle: "What I Can Do For You",
            servicesSubtitle: "Leveraging my skills to provide cutting-edge solutions across various domains of AI and engineering.",
            service1Title: "AI & Machine Learning Development",
            service1Desc: "Building custom machine learning models, deep learning architectures, and end-to-end AI systems for automation and intelligent decision-making.",
            service2Title: "Computer Vision & Imaging Systems",
            service2Desc: "Developing solutions that interpret visual data from cameras, thermal imagers, and other sensors to enable smart monitoring and analysis.",
            service3Title: "Advanced AI Research",
            service3Desc: "Deeply fascinated by AI, I am motivated to pursue doctoral studies while contributing to impactful work and solving complex challenges in the industry.",
            faqTitle: "Frequently Asked Questions",
            faqSubtitle: "Answers to common questions about my services, technical approach, and collaboration process.",
            faq1q: "What technologies do you specialize in?",
            faq1a: "I specialize in ML frameworks (TensorFlow, PyTorch), computer vision (OpenCV, YOLOv8), robotics (ROS), and cloud platforms (AWS, Google Cloud). I also have deep experience with big data tools like Apache Spark and Kafka.",
            faq2q: "What kind of projects are you looking for?",
            faq2a: "I am actively looking for impactful, collaborative projects that push boundaries in AI, robotics, or data science. I thrive in curiosity-driven environments where I can tackle critical challenges with analytical rigor.",
            faq3q: "Can you work within our existing technical guidelines?",
            faq3a: "Absolutely. I have experience working within various technical constraints, from automotive industry standards to defense sector requirements. I can adapt to your existing tech stack, coding standards, and deployment environments.",
            faq4q: "How do we get started?",
            faq4a: "Simply reach out through the contact button or email me. We can schedule a call to discuss your project's requirements, timeline, and objectives. From there, I can provide a detailed proposal for your review.",
            ctaTitle: "Let's Build Something Great",
            ctaSubtitle: "I am actively looking for collaborations to work on impactful projects. If you have a challenge that needs a data-driven, creative solution, let's connect.",
            ctaButton: "Get In Touch →",
            contactTitle: "Get In Touch",
            contactSubtitle: "Have a question or a project in mind? Feel free to reach out.",
            footerCredit: "Designed & Built by Jaivik Jariwala",
            footerRights: "© 2025. All rights reserved.",
            workModal1: { title: "Artificial Intelligence Intern at JSW Morris Garages India Pvt. Ltd.", subtitle: "June 2024 - August 2024 | Pune, India", content: "<p>Engineered a Retrieval-Augmented Generation (RAG) multimodal chatbot by training DistilGPT (124M) for cost analysis and integrating Salesforce BLIP for vision-language understanding, optimized with Big Data pipelines and cloud computing infrastructure, resulting in significant cost saving over year via increasing vehicle teardown data collection and analysis.</p>" },
            workModal2: { title: "AI Product Engineering Intern at Maharishi Industries Private Limited", subtitle: "Dec 2023 - Feb 2024 | Ahmedabad, India", content: "<p>Designed and deployed a GPU-accelerated AI surveillance system on NVIDIA Jetson Orin, achieving 96% real-time accuracy and operational adoption by Indian Army units. Integrated vision-radar (BFSR) fusion with transformer-based object perception for border security along the Jammu and Kashmir LoC. Utilized RT-DETR, DepthAnythingV2, and D-FINE models with Flask-based web application for real-time streaming and alerts.</p>" },
            workModal3: { title: "Summer Data Science Research Intern at IIT Bombay", subtitle: "May 2023 - July 2023 | Mumbai, India", content: "<p>During my summer internship at IIT Bombay, I processed over 100GB of statistical and video data to predict vehicle driving behavior. I developed robust statistical models achieving 84% accuracy and implemented automated data preprocessing pipelines. This involved analyzing IMU data for overtaking event prediction, utilizing image processing and deep learning for vehicular distance estimation, and conducting statistical analysis of longitudinal acceleration to detect braking and acceleration events. These efforts enhanced my skills in data manipulation, machine learning, and computer vision while providing valuable industry-level insights.</p>" },
            workModal4: { title: "Autonomous Systems Intern at iNav Labs", subtitle: "June 2022 - Aug 2022 | Gandhinagar, India", content: "<p>Designed and implemented an advanced autonomous delivery robot pipeline, integrating YOLOv8 for precise object detection with RRT* path planning for optimized navigation. Achieved 96.4% precision in object recognition and a 60% reduction in task completion time by leveraging ROS on a Jetson Nano platform, enhanced with LiDAR and dual-camera systems for robust environmental mapping and real-time decision-making.</p>" },
            projectModal1: { title: "RAG-based Multimodal Chatbot", subtitle: "Personal Project | LLM, RAG, GPT-2, Salesforce BLIP", content: "<p>This project is an advanced chatbot designed for industrial cost analysis. It uniquely combines language and vision capabilities to interpret complex queries related to manufacturing components. By feeding it images and text descriptions, it can retrieve relevant information from a vast database and generate insights on potential cost reductions. The RAG architecture allows it to provide accurate, context-aware answers, leading to the identification of over 12 Cr in potential savings in an automotive use case.</p>" },
            projectModal2: { title: "AI Surveillance System", subtitle: "Academic Project | RT-DETR, NVIDIA Jetson, TensorRT", content: "<p>A real-time, GPU-accelerated threat detection system developed for high-stakes environments like border security. The system runs on an NVIDIA Jetson edge device, making it suitable for deployment in remote locations. It uses a fine-tuned RT-DETR model, which is optimized with TensorRT for maximum performance. With 96% accuracy, it can reliably detect and classify threats from live video streams, providing critical intelligence for defense applications.</p>" },
            projectModal3: { title: "Autonomous Delivery Robot", subtitle: "University Project | YOLOv8, ROS, Path Planning", content: "<p>This project involved building the complete software stack for an autonomous delivery robot. Its perception system, powered by YOLOv8, achieves 96.4% precision in detecting objects and navigating its surroundings. The navigation and decision-making are handled within the ROS framework, where an RRT* algorithm is implemented for efficient and optimal path planning. The robot is designed to navigate complex indoor and outdoor environments to complete delivery tasks autonomously.</p>" },
            projectModal4: { title: "Real-time Video Analytics Platform", subtitle: "Personal Project | NVIDIA DeepStream, AWS, Kafka", content: "<p>A scalable, cloud-integrated platform for analyzing multiple video feeds in real-time. It leverages the NVIDIA DeepStream SDK for hardware-accelerated video processing, which significantly reduces latency. Data streams are managed using Apache Kafka and processed on AWS, allowing the system to scale horizontally. Through careful model optimization and efficient pipeline design, the system achieves a 30% reduction in end-to-end latency, making it ideal for applications like traffic monitoring and public safety.</p>" },
            researchModal1: { title: "Real-Time Autonomous Threat Detection using Sensor Fusion", subtitle: "Published Paper | Co-authors: Dr. Punit Gupta, Prof. Avijit Maji", content: "<p><b>Abstract:</b> This paper presents a novel architecture for real-time, autonomous threat detection on edge devices by fusing data from multimodal sensors. We propose a lightweight yet robust framework that combines visual data from RGB cameras with thermal imaging to improve detection accuracy in various environmental conditions. Our approach utilizes an optimized deep learning model deployed on an embedded GPU platform, ensuring low latency and high performance. Experimental results demonstrate that our sensor fusion method achieves a 97% detection accuracy, outperforming single-modality systems, particularly in low-light and adverse weather scenarios. This research provides a viable solution for deploying advanced surveillance capabilities in resource-constrained environments such as unmanned aerial vehicles (UAVs) and remote security outposts.</p>" },
            researchModal2: { title: "Optimizing RAG Pipelines for Automotive Cost Analysis", subtitle: "Ongoing Research | Co-author: Mr. Sameer Jindal", content: "<p><b>Summary:</b> This ongoing research investigates methods to enhance the efficiency and accuracy of Retrieval-Augmented Generation (RAG) systems specifically for industrial applications, focusing on the automotive sector. The study addresses key challenges such as handling domain-specific technical jargon, interpreting multimodal data (e.g., engineering diagrams and specification sheets), and optimizing the retrieval process from large, unstructured databases. We are exploring hybrid retrieval strategies and fine-tuning smaller language models to reduce computational overhead while maintaining high-quality generative output. The goal is to develop a best-practice framework for deploying RAG pipelines that can deliver reliable and actionable insights for complex tasks like cost analysis and supply chain optimization.</p>" },
            testimonialModal1: { title: "Recommendation from Mr. Sameer Jindal", subtitle: "Director, VAVE @ JSW MG MOTOR India", content: "<blockquote>\"Jaivik's work on multimodal RAG chatbot implementation has improvised our cost analysis process. His deep understanding of AI technologies and ability to deliver practical solutions from my vision in VAVE makes him an invaluable team member.\"</blockquote>" },
            testimonialModal2: { title: "Recommendation from Professor Avijit Maji", subtitle: "Professor, Civil Engineering @ Indian Institute of Technology Bombay", content: "<blockquote>\"As his mentor at IIT Bombay, His statistical modeling approach to vehicle behavior prediction and automated data preprocessing pipelines demonstrate strong analytical thinking. Appreciate his dedication, approach, ethics and work\"</blockquote>" },
            testimonialModal3: { title: "Recommendation from Dr. Punit Gupta", subtitle: "Assistant Professor, Department of Computer Science And Engineering @ Pandit Deendayal Energy University, Gandhinagar", content: "<blockquote>\"As Jaivik Jariwala's mentor for his final year projects at Pandit Deendayal Energy University, I was deeply impressed by his ability to translate complex theory, attempt more complexer research methodologies,learn from the lectures and take time-off to conduct his own research studies to write unique papers.\"</blockquote>" },
            testimonialModal4: { title: "Recommendation from Maharshi Industries Private Limited", subtitle: "Defence Technology Provider Indian Army", content: "<blockquote>\"Jaivik's autonomous surveillance Artificial Intelligence helped us acheived a market competition level and accuracy level in real-world deployment in Jammu & Kashmir. His technical Proficiency is truly impressive.\"</blockquote>" },
            blogModal1: { title: "How Machine Learning is Changing the Defense Landscape", subtitle: "Sep 12, 2025 | Defense Tech", content: "<p>The integration of artificial intelligence into the defense sector marks a paradigm shift in modern warfare and security. Traditional surveillance methods are giving way to AI-powered systems that can analyze data from multiple sources—drones, satellites, and ground sensors—in real time. This article explores the implementation of AI surveillance systems, focusing on the impact of edge computing. By deploying powerful models on devices like the NVIDIA Jetson, we can bring AI capabilities directly to the field, enabling faster decision-making and autonomous operations. We'll also touch upon the ethical considerations and the future trends shaping AI in defense.</p>" },
            blogModal2: { title: "The Rise of AI-Driven Cost Optimization in Automotive", subtitle: "Sep 05, 2025 | Automotive AI", content: "<p>While AI in the automotive industry is often associated with self-driving cars, its impact on manufacturing and business operations is just as profound. This post delves into the application of AI, particularly Retrieval-Augmented Generation (RAG) chatbots, for cost optimization. Drawing from my experience developing a multimodal system for JSW MG Motor, I discuss how these tools can analyze complex engineering data, compare component costs, and identify significant savings opportunities. This is a look into how generative AI is moving beyond customer service to tackle core industrial challenges.</p>" },
            blogModal3: { title: "Key Steps Before Starting Your First AI Project", subtitle: "Aug 28, 2025 | AI Strategy", content: "<p>Embarking on an AI project can be daunting. Success often depends more on the initial planning than the complexity of the model itself. This guide outlines the essential considerations for any team starting their AI journey.</p><ul><li><b>Define a Clear Business Problem:</b> Don't start with the technology; start with a well-defined problem that AI can realistically solve.</li><li><b>Assess Data Quality and Availability:</b> Data is the lifeblood of AI. Ensure you have clean, relevant, and sufficient data before you begin.</li><li><b>Choose the Right Model and Tools:</b> From simple linear regression to complex neural networks, select a tool that fits the problem's scale and your team's expertise.</li><li><b>Plan for Deployment and Monitoring:</b> A model is only useful if it's deployed. Plan how you will integrate it into workflows and monitor its performance over time.</li><li><b>Start Small:</b> Begin with a proof of concept to demonstrate value and mitigate risk before scaling up.</li></ul>" },
            serviceModal1: { title: "AI & Machine Learning Development", subtitle: "Custom Model Creation & System Integration", content: "<p>I offer end-to-end development of AI and machine learning solutions tailored to your specific needs. This includes:</p><ul><li>Building and training custom predictive models for forecasting, classification, and regression tasks.</li><li>Developing advanced deep learning architectures for complex problems using TensorFlow and PyTorch.</li><li>Creating Natural Language Processing (NLP) solutions for text analysis, sentiment analysis, and chatbot development.</li><li>Integrating AI models into your existing software and business workflows for seamless automation.</li></ul>" },
            serviceModal2: { title: "Computer Vision & Imaging Systems", subtitle: "Object Detection, Segmentation, and Analysis", content: "<p>I specialize in creating systems that can interpret and act on visual data from the real world. My services in this area include:</p><ul><li>Developing high-performance systems for real-time object detection and tracking using state-of-the-art models like YOLO and RT-DETR.</li><li>Implementing image segmentation for detailed scene understanding and analysis.</li><li>Processing and analyzing data from a variety of sensors, including RGB cameras, thermal imagers, and LiDAR.</li><li>Deploying computer vision models on edge devices for low-latency applications in robotics, surveillance, and IoT.</li></ul>" },
            serviceModal3: { title: "Advanced AI Research", subtitle: "PhD Aspirations & Industry Collaboration", content: "<p>My passion for artificial intelligence extends beyond application to a deep interest in foundational research. I am actively preparing to pursue a PhD to contribute to the advancement of the field, with a focus on efficient deep learning architectures and multimodal AI.</p><p>I am keen to collaborate with industry partners on challenging research problems that bridge the gap between academic theory and real-world impact. If you have a complex challenge that requires novel solutions and rigorous investigation, I would be excited to to discuss how we can work together.</p>" }
        },
        de: {
            greetingLoop: "Hallo, ich bin",
            navHome: "Startseite",
            navWork: "Arbeit",
            navProjects: "Projekte",
            navSkills: "Fähigkeiten",
            navServices: "Dienste",
            navTestimonials: "Referenzen",
            navBlog: "Blog",
            navResume: "Lebenslauf herunterladen",
            heroProfessionTitle: "Maschinelles Lernen &",
            heroProfessionSubtitle: "KI-Ingenieur",
            heroProfessionDesc: "Spezialisiert auf Computer Vision, Robotik und GPU-Optimierung.",
            heroLocationTitle: "Sitz in",
            heroLocationDesc: "Surat, Gujarat",
            workTitle: "Meine Arbeitserfahrung",
            workSubtitle: "Eine Reise durch wirkungsvolle Positionen, in denen ich KI, maschinelles Lernen und Computer Vision zur Lösung realer Herausforderungen eingesetzt habe.",
            work1Title: "Praktikant für künstliche Intelligenz - JSW Morris Garages India Pvt. Ltd.",
            work1Desc: "Entwicklung eines multimodalen RAG-Chatbots durch Training von DistilGPT (124M) zur Kostenanalyse und Integration von Salesforce BLIP für das Sprach-Bild-Verständnis, optimiert mit Big-Data-Pipelines und Cloud-Computing-Infrastruktur, was zu erheblichen Kosteneinsparungen im Jahresverlauf durch erhöhte Datenerfassung und -analyse bei Fahrzeugzerlegungen führte.",
            work2Title: "Praktikant für KI-Produktentwicklung - Maharishi Industries Private Limited",
            work2Desc: "Entwurf und Einsatz eines GPU-beschleunigten KI-Überwachungssystems auf NVIDIA Jetson Orin mit 96% Echtzeitgenauigkeit und operativer Einführung bei Einheiten der indischen Armee. Integration von Sicht-Radar (BFSR)-Fusion mit transformatorbasierter Objekterkennung zur Grenzsicherung entlang der LoC in Jammu und Kaschmir. Nutzung von RT-DETR, DepthAnythingV2 und D-FINE-Modellen mit einer Flask-basierten Webanwendung für Echtzeit-Streaming und Warnmeldungen.",
            work3Title: "Sommer-Forschungspraktikant für Datenwissenschaft - Indian Institute of Technology, Bombay",
            work3Desc: "Verarbeitung von über 100 GB statistischer und Videodaten zur Vorhersage des Fahrverhaltens von Fahrzeugen. Ich entwickelte robuste statistische Modelle mit 84% Genauigkeit und implementierte automatisierte Datenvorverarbeitungspipelines. Dies umfasste die Analyse von IMU-Daten zur Vorhersage von Überholvorgängen, die Nutzung von Bildverarbeitung und Deep Learning zur Schätzung von Fahrzeugabständen und die statistische Analyse der Längsbeschleunigung zur Erkennung von Brems- und Beschleunigungsvorgängen.",
            work4Title: "Praktikant für autonome Systeme - iNav Labs",
            work4Desc: "Entwurf und Implementierung einer fortschrittlichen Pipeline für autonome Lieferroboter durch Integration von YOLOv8 zur präzisen Objekterkennung mit RRT*-Pfadplanung für optimierte Navigation. Erzielung von 96,4% Präzision bei der Objekterkennung und einer 60%igen Reduzierung der Aufgabenerledigungszeit durch Nutzung von ROS auf einer Jetson-Nano-Plattform, erweitert mit LiDAR- und Dual-Kamera-Systemen für robuste Umgebungskartierung und Echtzeit-Entscheidungsfindung.",
            viewCertificate: "Zertifikat ansehen",
            projectsTitle: "Meine besten Portfolio-Projekte...",
            projectsSubtitle: "Präsentation meiner technischen Expertise durch innovative Projekte, die die Grenzen von KI, maschinellem Lernen und Computer Vision erweitern.",
            project1Title: "RAG-basierter multimodaler Chatbot",
            project1Desc: "Entwickelt bei JSW MG Motor mit Distill-GPT-2 und Salesforce BLIP, um die Kostenanalyse zu automatisieren und Einsparungen von über 12 Cr zu identifizieren.",
            project2Title: "KI-Überwachungssystem",
            project2Desc: "GPU-beschleunigtes Bedrohungserkennungssystem mit 96% Genauigkeit, eingesetzt bei Einheiten der indischen Armee unter Verwendung von NVIDIA Jetson Orin für die Echtzeitverarbeitung.",
            project3Title: "Autonomer Lieferroboter",
            project3Desc: "Integration der YOLOv8-Objekterkennung mit RRT*-Pfadplanung, was zu einer Präzision von 96,4% und einer 60%igen Verbesserung der Aufgabenerledigungszeit führte.",
            project4Title: "Echtzeit-Videoanalyse",
            project4Desc: "Skalierbares Objekterkennungssystem unter Verwendung von NVIDIA-Toolkits und AWS, das die Latenz um 30% reduziert und den Durchsatz durch Modellquantisierung erhöht.",
            researchTitle: "Forschung & Veröffentlichungen",
            researchSubtitle: "Erkundung neuer Grenzen in der KI und Teilen meiner Erkenntnisse mit der Gemeinschaft.",
            statusPublished: "Veröffentlicht",
            statusOngoing: "Laufend",
            research1Title: "Echtzeit-autonome Bedrohungserkennung mittels Sensorfusion",
            research1Desc: "Eine neuartige Architektur zur Fusion multimodaler Sensordaten auf Edge-Geräten für eine hochgenaue Bedrohungserkennung...",
            research1Authors: "Co-Autoren: Dr. Punit Gupta, Prof. Avijit Maji",
            research2Title: "Optimierung von RAG-Pipelines für die automobile Kostenanalyse",
            research2Desc: "Eine Studie zur Verbesserung der Effizienz und Genauigkeit von RAG-Systemen für industrielle Anwendungen...",
            research2Authors: "Co-Autoren: Herr Sameer Jindal",
            viewPaper: "Artikel ansehen",
            viewDraft: "Entwurf ansehen",
            skillsTitle: "Technische Fähigkeiten",
            skillsSubtitle: "Mein Werkzeugkasten an Sprachen, Frameworks und Plattformen, die ich zum Bauen, Innovieren und Lösen komplexer Probleme verwende.",
            skillsLangDb: "Sprachen & Datenbanken",
            skillsAiMl: "KI, ML & Daten",
            skillsCloud: "Cloud & DevOps",
            skillsDevTools: "Entwicklerwerkzeuge",
            skillsCoursework: "Relevante Studienleistungen",
            skillsInterests: "Interessengebiete",
            skillsSoft: "Soziale Kompetenzen",
            course1: "Datenstrukturen & Algorithmen",
            course2: "Künstliche Intelligenz",
            course3: "Maschinelles Lernen",
            course4: "Computer Vision",
            course5: "Digitale Bildverarbeitung",
            course6: "Betriebssysteme",
            course7: "Big Data (Kafka, Spark, Hadoop)",
            course8: "Internet der Dinge",
            interest1: "KI & Robotik",
            interest2: "GPU-Optimierung",
            interest3: "Deep-Learning-Architektur",
            interest4: "Forschung & Entwicklung",
            interest5: "Datenwissenschaft",
            interest6: "Bildgebungssysteme",
            interest7: "Angewandte Mathematik",
            softSkill1: "Kreative Problemlösung",
            softSkill2: "Klare Kommunikation",
            softSkill3: "Selbstlernen & Anpassungsfähigkeit",
            softSkill4: "Fokus auf Ergebnisse",
            softSkill5: "Technische Kompetenz",
            softSkill6: "Aktives Zuhören",
            softSkill7: "Proaktive Initiative",
            educationTitle: "Ausbildung",
            educationSubtitle: "Meine bisherige akademische Laufbahn und mein Ehrgeiz, mit jedem Abschluss und Kurs höher zu zielen.",
            educationDegree: "Bachelor of Technology, Informatik und Ingenieurwesen",
            educationUniversity: "School of Technology, Pandit Deendayal Energy University",
            viewThesis: "Abschlussarbeit ansehen",
            viewTranscript: "Notenspiegel ansehen",
            viewDegree: "Abschluss ansehen",
            education12th: "12. Klasse Höhere Schulbildung",
            educationBoard12: "Gujarat State Education Board",
            educationPR12: "Perzentilrang: 94,04%",
            educationGrade12: "Note: A1",
            education10th: "10. Klasse Höhere Sekundarschulbildung",
            educationBoard10: "Gujarat State Education Board",
            educationPct10: "Prozentsatz: 93%",
            educationGrade10: "Note: A2",
            certificationsTitle: "Zertifizierungen & Schulungen",
            certificationsSubtitle: "Mein Engagement für kontinuierliches Lernen, nicht nur in KI, sondern auch in Finanzen, Datenwissenschaft, maschinellem Lernen, Mathematik, Management und anderen Bereichen.",
            cert1Title: "Spezialisierung Maschinelles Lernen",
            cert2Title: "Spezialisierung Generative Adversarial Networks (GANs)",
            cert3Title: "Anwendung von Statistik in der Datenanalyse",
            cert4Title: "Verständnis von Inkubation und Unternehmertum",
            cert5Title: "Studienleistungen Bachelor of Technology",
            membershipsTitle: "Mitglied in Gemeinschaften und Forschungsgruppen",
            membershipsSubtitle: "Engagement in beruflichen und sozialen Gemeinschaften, um an der Spitze der Technologie und des sozialen Dienstes zu bleiben, durch meine Arbeit, Zeit und Ressourcen.",
            testimonialsTitle: "Worte meiner Mentoren",
            testimonialsSubtitle: "Was Branchenführer und Professoren über meine Arbeitsmoral, meine technischen Beiträge und meine Wirkung sagen.",
            testimonial1Quote: "Ein Katalysator für KI-basierte Kostensenkung und Workflow-Automatisierung.",
            testimonial1Desc: `"Jaiviks Arbeit an der Implementierung eines multimodalen RAG-Chatbots hat unseren Kostenanalyseprozess verbessert. Sein tiefes Verständnis für KI-Technologien und seine Fähigkeit, praktische Lösungen aus meiner Vision in VAVE zu liefern, machen ihn zu einem unschätzbaren Teammitglied."`,
            testimonial2Quote: "Ein motivierter junger Forscher.",
            testimonial2Desc: `"Als sein Mentor am IIT Bombay zeigt sein statistischer Modellierungsansatz zur Vorhersage des Fahrverhaltens von Fahrzeugen und seine automatisierten Datenvorverarbeitungspipelines starkes analytisches Denken. Ich schätze sein Engagement, seine Herangehensweise, seine Ethik und seine Arbeit."`,
            testimonial3Quote: "Ein ausgezeichneter Student, aber noch mehr ein selbstmotivierter Forscher und Techniker",
            testimonial3Desc: `"Als Jaivik Jariwalas Mentor für seine Abschlussprojekte an der Pandit Deendayal Energy University war ich tief beeindruckt von seiner Fähigkeit, komplexe Theorien umzusetzen, komplexere Forschungsmethoden auszuprobieren, aus den Vorlesungen zu lernen und sich Zeit für eigene Forschungsstudien zu nehmen, um einzigartige Arbeiten zu schreiben."`,
            testimonial4Quote: "Professioneller, kreativer und ergebnisorientierter Praktikant",
            testimonial4Desc: `"Jaiviks autonome Überwachungs-KI hat uns geholfen, ein marktwettbewerbsfähiges Niveau und eine hohe Genauigkeit bei der realen Anwendung in Jammu & Kaschmir zu erreichen. Seine technische Kompetenz ist wirklich beeindruckend."`,
            viewRecommendation: "Empfehlung ansehen",
            blogTitle: "Blog & Artikel",
            blogSubtitle: "Einblicke in KI, maschinelles Lernen und Spitzentechnologie aus meiner Forschung und Branchenerfahrung.",
            blog1Title: "Wie maschinelles Lernen die Verteidigungslandschaft verändert",
            blog1Desc: "Erforschung der Implementierung von KI-Überwachungssystemen in militärischen Anwendungen und der Auswirkungen von Edge Computing...",
            blog1Category: "Verteidigungstechnik",
            blog2Title: "Der Aufstieg der KI-gesteuerten Kostenoptimierung in der Automobilindustrie",
            blog2Desc: "Einblicke aus der Entwicklung von RAG-basierten Chatbots für den Automobilsektor zur Erzielung erheblicher Kosteneinsparungen durch intelligente Analyse...",
            blog2Category: "Automobil-KI",
            blog3Title: "Wichtige Schritte vor dem Start Ihres ersten KI-Projekts",
            blog3Desc: "Von der Datenvorbereitung bis zur Modellbereitstellung, ein Leitfaden zu den wesentlichen Überlegungen für eine erfolgreiche KI-Implementierung...",
            blog3Category: "KI-Strategie",
            servicesTitle: "Was ich für Sie tun kann",
            servicesSubtitle: "Nutzung meiner Fähigkeiten, um innovative Lösungen in verschiedenen Bereichen der KI und des Ingenieurwesens anzubieten.",
            service1Title: "KI & Maschinelles Lernen Entwicklung",
            service1Desc: "Erstellung von benutzerdefinierten Modellen für maschinelles Lernen, Deep-Learning-Architekturen und End-to-End-KI-Systemen zur Automatisierung und intelligenten Entscheidungsfindung.",
            service2Title: "Computer Vision & Bildgebungssysteme",
            service2Desc: "Entwicklung von Lösungen, die visuelle Daten von Kameras, Wärmebildkameras und anderen Sensoren interpretieren, um eine intelligente Überwachung und Analyse zu ermöglichen.",
            service3Title: "Fortgeschrittene KI-Forschung",
            service3Desc: "Tief fasziniert von KI, bin ich motiviert, ein Doktorat anzustreben und gleichzeitig zu wirkungsvoller Arbeit beizutragen und komplexe Herausforderungen in der Industrie zu lösen.",
            faqTitle: "Häufig gestellte Fragen",
            faqSubtitle: "Antworten auf häufig gestellte Fragen zu meinen Diensten, meinem technischen Ansatz und meinem Zusammenarbeitsprozess.",
            faq1q: "Auf welche Technologien sind Sie spezialisiert?",
            faq1a: "Ich bin spezialisiert auf ML-Frameworks (TensorFlow, PyTorch), Computer Vision (OpenCV, YOLOv8), Robotik (ROS) und Cloud-Plattformen (AWS, Google Cloud). Ich habe auch umfassende Erfahrung mit Big-Data-Tools wie Apache Spark und Kafka.",
            faq2q: "Welche Art von Projekten suchen Sie?",
            faq2a: "Ich suche aktiv nach wirkungsvollen, kollaborativen Projekten, die die Grenzen in KI, Robotik oder Datenwissenschaft erweitern. Ich gedeihe in neugiergetriebenen Umgebungen, in denen ich kritische Herausforderungen mit analytischer Strenge angehen kann.",
            faq3q: "Können Sie innerhalb unserer bestehenden technischen Richtlinien arbeiten?",
            faq3a: "Absolut. Ich habe Erfahrung in der Arbeit innerhalb verschiedener technischer Einschränkungen, von Standards der Automobilindustrie bis hin zu Anforderungen des Verteidigungssektors. Ich kann mich an Ihren bestehenden Tech-Stack, Codierungsstandards und Bereitstellungsumgebungen anpassen.",
            faq4q: "Wie fangen wir an?",
            faq4a: "Kontaktieren Sie mich einfach über den Kontakt-Button oder per E-Mail. Wir können einen Anruf vereinbaren, um die Anforderungen, den Zeitplan und die Ziele Ihres Projekts zu besprechen. Von dort aus kann ich Ihnen einen detaillierten Vorschlag zur Überprüfung unterbreiten.",
            ctaTitle: "Lassen Sie uns etwas Großartiges bauen",
            ctaSubtitle: "Ich suche aktiv nach Kooperationen, um an wirkungsvollen Projekten zu arbeiten. Wenn Sie eine Herausforderung haben, die eine datengesteuerte, kreative Lösung erfordert, lassen Sie uns in Kontakt treten.",
            ctaButton: "Kontakt aufnehmen →",
            contactTitle: "Kontakt aufnehmen",
            contactSubtitle: "Haben Sie eine Frage oder ein Projekt im Kopf? Zögern Sie nicht, sich zu melden.",
            footerCredit: "Entworfen & erstellt von Jaivik Jariwala",
            footerRights: "© 2025. Alle Rechte vorbehalten.",
            workModal1: { title: "Praktikant für künstliche Intelligenz bei JSW Morris Garages India Pvt. Ltd.", subtitle: "Juni 2024 - August 2024 | Pune, Indien", content: "<p>Entwicklung eines multimodalen RAG-Chatbots durch Training von DistilGPT (124M) zur Kostenanalyse und Integration von Salesforce BLIP für das Sprach-Bild-Verständnis, optimiert mit Big-Data-Pipelines und Cloud-Computing-Infrastruktur, was zu erheblichen Kosteneinsparungen im Jahresverlauf durch erhöhte Datenerfassung und -analyse bei Fahrzeugzerlegungen führte.</p>" },
            workModal2: { title: "Praktikant für KI-Produktentwicklung bei Maharishi Industries Private Limited", subtitle: "Dez. 2023 - Feb. 2024 | Ahmedabad, Indien", content: "<p>Entwurf und Einsatz eines GPU-beschleunigten KI-Überwachungssystems auf NVIDIA Jetson Orin mit 96% Echtzeitgenauigkeit und operativer Einführung bei Einheiten der indischen Armee. Integration von Sicht-Radar (BFSR)-Fusion mit transformatorbasierter Objekterkennung zur Grenzsicherung entlang der LoC in Jammu und Kaschmir. Nutzung von RT-DETR, DepthAnythingV2 und D-FINE-Modellen mit einer Flask-basierten Webanwendung für Echtzeit-Streaming und Warnmeldungen.</p>" },
            workModal3: { title: "Sommer-Forschungspraktikant für Datenwissenschaft am IIT Bombay", subtitle: "Mai 2023 - Juli 2023 | Mumbai, Indien", content: "<p>Während meines Sommerpraktikums am IIT Bombay habe ich über 100 GB statistischer und Videodaten verarbeitet, um das Fahrverhalten von Fahrzeugen vorherzusagen. Ich entwickelte robuste statistische Modelle mit einer Genauigkeit von 84 % und implementierte automatisierte Datenvorverarbeitungspipelines. Dies umfasste die Analyse von IMU-Daten zur Vorhersage von Überholvorgängen, die Nutzung von Bildverarbeitung und Deep Learning zur Schätzung von Fahrzeugabständen und die statistische Analyse der Längsbeschleunigung zur Erkennung von Brems- und Beschleunigungsvorgängen. Diese Bemühungen verbesserten meine Fähigkeiten in der Datenmanipulation, im maschinellen Lernen und in der Computer Vision und lieferten wertvolle Einblicke auf Branchenebene.</p>" },
            workModal4: { title: "Praktikant für autonome Systeme bei iNav Labs", subtitle: "Juni 2022 - Aug. 2022 | Gandhinagar, Indien", content: "<p>Entwurf und Implementierung einer fortschrittlichen Pipeline für autonome Lieferroboter durch Integration von YOLOv8 zur präzisen Objekterkennung mit RRT*-Pfadplanung für optimierte Navigation. Erzielung von 96,4% Präzision bei der Objekterkennung und einer 60%igen Reduzierung der Aufgabenerledigungszeit durch Nutzung von ROS auf einer Jetson-Nano-Plattform, erweitert mit LiDAR- und Dual-Kamera-Systemen für robuste Umgebungskartierung und Echtzeit-Entscheidungsfindung.</p>" },
            projectModal1: { title: "RAG-basierter multimodaler Chatbot", subtitle: "Persönliches Projekt | LLM, RAG, GPT-2, Salesforce BLIP", content: "<p>Dieses Projekt ist ein fortschrittlicher Chatbot für die industrielle Kostenanalyse. Er kombiniert auf einzigartige Weise Sprach- und Bildfunktionen, um komplexe Anfragen zu Fertigungskomponenten zu interpretieren. Durch die Eingabe von Bildern und Textbeschreibungen kann er relevante Informationen aus einer riesigen Datenbank abrufen und Erkenntnisse über potenzielle Kostensenkungen generieren. Die RAG-Architektur ermöglicht es ihm, genaue, kontextbezogene Antworten zu geben, was zur Identifizierung von potenziellen Einsparungen von über 12 Cr in einem Anwendungsfall in der Automobilindustrie führte.</p>" },
            projectModal2: { title: "KI-Überwachungssystem", subtitle: "Akademisches Projekt | RT-DETR, NVIDIA Jetson, TensorRT", content: "<p>Ein echtzeitfähiges, GPU-beschleunigtes Bedrohungserkennungssystem, das für Hochrisikoumgebungen wie die Grenzsicherung entwickelt wurde. Das System läuft auf einem NVIDIA Jetson Edge-Gerät und eignet sich daher für den Einsatz an abgelegenen Orten. Es verwendet ein fein abgestimmtes RT-DETR-Modell, das mit TensorRT für maximale Leistung optimiert ist. Mit einer Genauigkeit von 96 % kann es Bedrohungen aus Live-Videostreams zuverlässig erkennen und klassifizieren und so wichtige Informationen für Verteidigungsanwendungen liefern.</p>" },
            projectModal3: { title: "Autonomer Lieferroboter", subtitle: "Universitätsprojekt | YOLOv8, ROS, Pfadplanung", content: "<p>Dieses Projekt umfasste die Erstellung des kompletten Software-Stacks für einen autonomen Lieferroboter. Sein Wahrnehmungssystem, das von YOLOv8 angetrieben wird, erreicht eine Präzision von 96,4 % bei der Erkennung von Objekten und der Navigation in seiner Umgebung. Die Navigation und Entscheidungsfindung werden innerhalb des ROS-Frameworks gehandhabt, wo ein RRT*-Algorithmus für eine effiziente und optimale Pfadplanung implementiert ist. Der Roboter ist so konzipiert, dass er in komplexen Innen- und Außenbereichen navigieren kann, um Lieferaufgaben autonom zu erledigen.</p>" },
            projectModal4: { title: "Echtzeit-Videoanalyseplattform", subtitle: "Persönliches Projekt | NVIDIA DeepStream, AWS, Kafka", content: "<p>Eine skalierbare, cloud-integrierte Plattform zur Analyse mehrerer Video-Feeds in Echtzeit. Sie nutzt das NVIDIA DeepStream SDK für die hardwarebeschleunigte Videoverarbeitung, was die Latenz erheblich reduziert. Datenströme werden mit Apache Kafka verwaltet und auf AWS verarbeitet, sodass das System horizontal skaliert werden kann. Durch sorgfältige Modelloptimierung und effizientes Pipeline-Design erreicht das System eine Reduzierung der End-to-End-Latenz um 30 %, was es ideal für Anwendungen wie Verkehrsüberwachung und öffentliche Sicherheit macht.</p>" },
            researchModal1: { title: "Echtzeit-autonome Bedrohungserkennung mittels Sensorfusion", subtitle: "Veröffentlichter Artikel | Co-Autoren: Dr. Punit Gupta, Prof. Avijit Maji", content: "<p><b>Zusammenfassung:</b> Dieser Artikel stellt eine neuartige Architektur für die echtzeitfähige, autonome Bedrohungserkennung auf Edge-Geräten durch die Fusion von Daten aus multimodalen Sensoren vor. Wir schlagen ein leichtes, aber robustes Framework vor, das visuelle Daten von RGB-Kameras mit Wärmebildern kombiniert, um die Erkennungsgenauigkeit unter verschiedenen Umgebungsbedingungen zu verbessern. Unser Ansatz nutzt ein optimiertes Deep-Learning-Modell, das auf einer eingebetteten GPU-Plattform bereitgestellt wird, um eine geringe Latenz und hohe Leistung zu gewährleisten. Experimentelle Ergebnisse zeigen, dass unsere Sensorfusionsmethode eine Erkennungsgenauigkeit von 97 % erreicht und damit Einmodalitätssysteme übertrifft, insbesondere bei schlechten Lichtverhältnissen und widrigen Wetterbedingungen. Diese Forschung bietet eine praktikable Lösung für den Einsatz fortschrittlicher Überwachungsfunktionen in ressourcenbeschränkten Umgebungen wie unbemannten Luftfahrzeugen (UAVs) und abgelegenen Sicherheitsposten.</p>" },
            researchModal2: { title: "Optimierung von RAG-Pipelines für die automobile Kostenanalyse", subtitle: "Laufende Forschung | Co-Autor: Herr Sameer Jindal", content: "<p><b>Zusammenfassung:</b> Diese laufende Forschung untersucht Methoden zur Steigerung der Effizienz und Genauigkeit von Retrieval-Augmented Generation (RAG)-Systemen speziell für industrielle Anwendungen mit Schwerpunkt auf dem Automobilsektor. Die Studie befasst sich mit zentralen Herausforderungen wie dem Umgang mit domänenspezifischem Fachjargon, der Interpretation multimodaler Daten (z. B. Konstruktionsdiagramme und Spezifikationsblätter) und der Optimierung des Abrufprozesses aus großen, unstrukturierten Datenbanken. Wir untersuchen hybride Abrufstrategien und die Feinabstimmung kleinerer Sprachmodelle, um den Rechenaufwand zu reduzieren und gleichzeitig eine qualitativ hochwertige generative Ausgabe zu erhalten. Ziel ist es, ein Best-Practice-Framework für den Einsatz von RAG-Pipelines zu entwickeln, das zuverlässige und umsetzbare Erkenntnisse für komplexe Aufgaben wie Kostenanalyse und Lieferkettenoptimierung liefern kann.</p>" },
            testimonialModal1: { title: "Empfehlung von Herrn Sameer Jindal", subtitle: "Direktor, VAVE @ JSW MG MOTOR India", content: "<blockquote>\"Jaiviks Arbeit an der Implementierung eines multimodalen RAG-Chatbots hat unseren Kostenanalyseprozess verbessert. Sein tiefes Verständnis für KI-Technologien und seine Fähigkeit, praktische Lösungen aus meiner Vision in VAVE zu liefern, machen ihn zu einem unschätzbaren Teammitglied.\"</blockquote>" },
            testimonialModal2: { title: "Empfehlung von Professor Avijit Maji", subtitle: "Professor, Bauingenieurwesen @ Indian Institute of Technology Bombay", content: "<blockquote>\"Als sein Mentor am IIT Bombay zeigt sein statistischer Modellierungsansatz zur Vorhersage des Fahrverhaltens von Fahrzeugen und seine automatisierten Datenvorverarbeitungspipelines starkes analytisches Denken. Ich schätze sein Engagement, seine Herangehensweise, seine Ethik und seine Arbeit.\"</blockquote>" },
            testimonialModal3: { title: "Empfehlung von Dr. Punit Gupta", subtitle: "Assistenzprofessor, Fachbereich Informatik und Ingenieurwesen @ Pandit Deendayal Energy University, Gandhinagar", content: "<blockquote>\"Als Jaivik Jariwalas Mentor für seine Abschlussprojekte an der Pandit Deendayal Energy University war ich tief beeindruckt von seiner Fähigkeit, komplexe Theorien umzusetzen, komplexere Forschungsmethoden auszuprobieren, aus den Vorlesungen zu lernen und sich Zeit für eigene Forschungsstudien zu nehmen, um einzigartige Arbeiten zu schreiben.\"</blockquote>" },
            testimonialModal4: { title: "Empfehlung von Maharshi Industries Private Limited", subtitle: "Verteidigungstechnologieanbieter der indischen Armee", content: "<blockquote>\"Jaiviks autonome Überwachungs-KI hat uns geholfen, ein marktwettbewerbsfähiges Niveau und eine hohe Genauigkeit bei der realen Anwendung in Jammu & Kaschmir zu erreichen. Seine technische Kompetenz ist wirklich beeindruckend.\"</blockquote>" },
            blogModal1: { title: "Wie maschinelles Lernen die Verteidigungslandschaft verändert", subtitle: "12. Sep. 2025 | Verteidigungstechnik", content: "<p>Die Integration künstlicher Intelligenz in den Verteidigungssektor markiert einen Paradigmenwechsel in der modernen Kriegsführung und Sicherheit. Traditionelle Überwachungsmethoden weichen KI-gestützten Systemen, die Daten aus mehreren Quellen – Drohnen, Satelliten und Bodensensoren – in Echtzeit analysieren können. Dieser Artikel untersucht die Implementierung von KI-Überwachungssystemen mit Schwerpunkt auf den Auswirkungen von Edge Computing. Durch den Einsatz leistungsstarker Modelle auf Geräten wie dem NVIDIA Jetson können wir KI-Funktionen direkt ins Feld bringen, was schnellere Entscheidungen und autonome Operationen ermöglicht. Wir werden auch auf die ethischen Überlegungen und die zukünftigen Trends eingehen, die die KI in der Verteidigung prägen.</p>" },
            blogModal2: { title: "Der Aufstieg der KI-gesteuerten Kostenoptimierung in der Automobilindustrie", subtitle: "5. Sep. 2025 | Automobil-KI", content: "<p>Während KI in der Automobilindustrie oft mit selbstfahrenden Autos in Verbindung gebracht wird, sind ihre Auswirkungen auf Fertigung und Geschäftsbetrieb ebenso tiefgreifend. Dieser Beitrag befasst sich mit der Anwendung von KI, insbesondere von Retrieval-Augmented Generation (RAG)-Chatbots, zur Kostenoptimierung. Basierend auf meiner Erfahrung bei der Entwicklung eines multimodalen Systems für JSW MG Motor diskutiere ich, wie diese Tools komplexe technische Daten analysieren, Komponentenkosten vergleichen und erhebliche Einsparpotenziale identifizieren können. Dies ist ein Einblick, wie generative KI über den Kundenservice hinausgeht, um zentrale industrielle Herausforderungen anzugehen.</p>" },
            blogModal3: { title: "Wichtige Schritte vor dem Start Ihres ersten KI-Projekts", subtitle: "28. Aug. 2025 | KI-Strategie", content: "<p>Ein KI-Projekt in Angriff zu nehmen, kann entmutigend sein. Der Erfolg hängt oft mehr von der anfänglichen Planung als von der Komplexität des Modells selbst ab. Dieser Leitfaden beschreibt die wesentlichen Überlegungen für jedes Team, das seine KI-Reise beginnt.</p><ul><li><b>Definieren Sie ein klares Geschäftsproblem:</b> Beginnen Sie nicht mit der Technologie; beginnen Sie mit einem klar definierten Problem, das die KI realistisch lösen kann.</li><li><b>Bewerten Sie die Datenqualität und -verfügbarkeit:</b> Daten sind das Lebenselixier der KI. Stellen Sie sicher, dass Sie saubere, relevante und ausreichende Daten haben, bevor Sie beginnen.</li><li><b>Wählen Sie das richtige Modell und die richtigen Werkzeuge:</b> Von der einfachen linearen Regression bis hin zu komplexen neuronalen Netzen, wählen Sie ein Werkzeug, das zum Umfang des Problems und zur Expertise Ihres Teams passt.</li><li><b>Planen Sie die Bereitstellung und Überwachung:</b> Ein Modell ist nur nützlich, wenn es bereitgestellt wird. Planen Sie, wie Sie es in Arbeitsabläufe integrieren und seine Leistung im Laufe der Zeit überwachen werden.</li><li><b>Fangen Sie klein an:</b> Beginnen Sie mit einem Proof of Concept, um den Wert zu demonstrieren und das Risiko zu mindern, bevor Sie skalieren.</li></ul>" },
            serviceModal1: { title: "KI & Maschinelles Lernen Entwicklung", subtitle: "Benutzerdefinierte Modellerstellung & Systemintegration", content: "<p>Ich biete die End-to-End-Entwicklung von KI- und maschinellen Lernlösungen an, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Dies umfasst:</p><ul><li>Erstellung und Training von benutzerdefinierten Vorhersagemodellen für Prognose-, Klassifizierungs- und Regressionsaufgaben.</li><li>Entwicklung fortschrittlicher Deep-Learning-Architekturen für komplexe Probleme mit TensorFlow und PyTorch.</li><li>Erstellung von Natural Language Processing (NLP)-Lösungen für Textanalyse, Stimmungsanalyse und Chatbot-Entwicklung.</li><li>Integration von KI-Modellen in Ihre bestehende Software und Geschäftsworkflows für eine nahtlose Automatisierung.</li></ul>" },
            serviceModal2: { title: "Computer Vision & Bildgebungssysteme", subtitle: "Objekterkennung, Segmentierung und Analyse", content: "<p>Ich bin darauf spezialisiert, Systeme zu entwickeln, die visuelle Daten aus der realen Welt interpretieren und darauf reagieren können. Meine Dienstleistungen in diesem Bereich umfassen:</p><ul><li>Entwicklung von Hochleistungssystemen für die Echtzeit-Objekterkennung und -verfolgung mit modernsten Modellen wie YOLO und RT-DETR.</li><li>Implementierung der Bildsegmentierung für ein detailliertes Szenenverständnis und eine detaillierte Analyse.</li><li>Verarbeitung und Analyse von Daten von einer Vielzahl von Sensoren, einschließlich RGB-Kameras, Wärmebildkameras und LiDAR.</li><li>Bereitstellung von Computer-Vision-Modellen auf Edge-Geräten für latenzarme Anwendungen in Robotik, Überwachung und IoT.</li></ul>" },
            serviceModal3: { title: "Fortgeschrittene KI-Forschung", subtitle: "Doktorandenambitionen & Branchenkooperation", content: "<p>Meine Leidenschaft für künstliche Intelligenz geht über die Anwendung hinaus und umfasst ein tiefes Interesse an der Grundlagenforschung. Ich bereite mich aktiv darauf vor, ein Doktorat anzustreben, um zur Weiterentwicklung des Fachgebiets beizutragen, mit Schwerpunkt auf effizienten Deep-Learning-Architekturen und multimodaler KI.</p><p>Ich bin sehr daran interessiert, mit Industriepartnern an anspruchsvollen Forschungsproblemen zusammenzuarbeiten, die die Lücke zwischen akademischer Theorie und realer Wirkung schließen. Wenn Sie eine komplexe Herausforderung haben, die neuartige Lösungen und rigorose Untersuchungen erfordert, würde ich mich freuen, zu besprechen, wie wir zusammenarbeiten können.</p>" }
        },
        hi: {
            greetingLoop: "नमस्ते, मैं हूँ",
            navHome: "होम",
            navWork: "कार्य",
            navProjects: "परियोजनाएं",
            navSkills: "कौशल",
            navServices: "सेवाएं",
            navTestimonials: "प्रशंसापत्र",
            navBlog: "ब्लॉग",
            navResume: "रिज्यूमे डाउनलोड करें",
            heroProfessionTitle: "मशीन लर्निंग और",
            heroProfessionSubtitle: "एआई इंजीनियर",
            heroProfessionDesc: "कंप्यूटर विजन, रोबोटिक्स और जीपीयू ऑप्टिमाइज़ेशन में विशेषज्ञता।",
            heroLocationTitle: "निवासी",
            heroLocationDesc: "सूरत, गुजरात",
            workTitle: "मेरा कार्य अनुभव",
            workSubtitle: "प्रभावशाली भूमिकाओं के माध्यम से एक यात्रा जहां मैंने वास्तविक दुनिया की चुनौतियों को हल करने के लिए एआई, मशीन लर्निंग और कंप्यूटर विजन का उपयोग किया है।",
            work1Title: "आर्टिफिशियल इंटेलिजेंस इंटर्न - जेएसडब्ल्यू मॉरिस गैरेज इंडिया प्राइवेट लिमिटेड",
            work1Desc: "लागत विश्लेषण के लिए डिस्टिलजीपीटी (124M) को प्रशिक्षित करके और दृष्टि-भाषा की समझ के लिए सेल्सफोर्स बीएलआईपी को एकीकृत करके एक रिट्रीवल-ऑगमेंटेड जनरेशन (आरएजी) मल्टीमॉडल चैटबॉट का निर्माण किया, जिसे बड़े डेटा पाइपलाइनों और क्लाउड कंप्यूटिंग बुनियादी ढांचे के साथ अनुकूलित किया गया, जिसके परिणामस्वरूप वाहन टियरडाउन डेटा संग्रह और विश्लेषण में वृद्धि के माध्यम से वर्ष भर में महत्वपूर्ण लागत बचत हुई।",
            work2Title: "आर्टिफिशियल इंटेलिजेंस उत्पाद इंजीनियरिंग इंटर्न - महर्षि इंडस्ट्रीज प्राइवेट लिमिटेड",
            work2Desc: "एनवीडिया जेटसन ओरिन पर एक जीपीयू-त्वरित एआई निगरानी प्रणाली डिजाइन और तैनात की, जिसमें 96% वास्तविक समय की सटीकता और भारतीय सेना की इकाइयों द्वारा परिचालन अपनाने को प्राप्त किया गया। जम्मू और कश्मीर एलओसी के साथ सीमा सुरक्षा के लिए ट्रांसफार्मर-आधारित वस्तु धारणा के साथ दृष्टि-रडार (बीएफएसआर) संलयन को एकीकृत किया। वास्तविक समय की स्ट्रीमिंग और अलर्ट के लिए फ्लास्क-आधारित वेब एप्लिकेशन के साथ आरटी-डीईटीआर, डेप्थएनीथिंगवी2, और डी-फाइन मॉडल का उपयोग किया।",
            work3Title: "समर डेटा साइंस रिसर्च इंटर्न - भारतीय प्रौद्योगिकी संस्थान, बॉम्बे",
            work3Desc: "वाहन ड्राइविंग व्यवहार की भविष्यवाणी करने के लिए 100GB से अधिक सांख्यिकीय और वीडियो डेटा संसाधित किया। मैंने 84% सटीकता प्राप्त करने वाले मजबूत सांख्यिकीय मॉडल विकसित किए और स्वचालित डेटा प्रीप्रोसेसिंग पाइपलाइन लागू की। इसमें ओवरटेकिंग इवेंट की भविष्यवाणी के लिए आईएमयू डेटा का विश्लेषण करना, वाहनों की दूरी के अनुमान के लिए इमेज प्रोसेसिंग और डीप लर्निंग का उपयोग करना, और ब्रेकिंग और त्वरण की घटनाओं का पता लगाने के लिए अनुदैर्ध्य त्वरण का सांख्यिकीय विश्लेषण करना शामिल था।",
            work4Title: "ऑटोनॉमस सिस्टम इंटर्न - आईएनएवी लैब्स",
            work4Desc: "एक उन्नत स्वायत्त डिलीवरी रोबोट पाइपलाइन को डिजाइन और कार्यान्वित किया, जिसमें सटीक वस्तु का पता लगाने के लिए YOLOv8 को अनुकूलित नेविगेशन के लिए RRT* पथ योजना के साथ एकीकृत किया गया। मजबूत पर्यावरण मानचित्रण और वास्तविक समय के निर्णय लेने के लिए LiDAR और दोहरे कैमरा सिस्टम के साथ उन्नत जेटसन नैनो प्लेटफॉर्म पर ROS का लाभ उठाकर वस्तु की पहचान में 96.4% सटीकता और कार्य पूरा करने के समय में 60% की कमी हासिल की।",
            viewCertificate: "प्रमाणपत्र देखें",
            projectsTitle: "मेरे सर्वश्रेष्ठ पोर्टफोलियो प्रोजेक्ट्स...",
            projectsSubtitle: "एआई, मशीन लर्निंग और कंप्यूटर विजन की सीमाओं को आगे बढ़ाने वाली नवीन परियोजनाओं के माध्यम से मेरी तकनीकी विशेषज्ञता का प्रदर्शन।",
            project1Title: "आरएजी-आधारित मल्टीमॉडल चैटबॉट",
            project1Desc: "जेएसडब्ल्यू एमजी मोटर में डिस्टिल-जीपीटी-2 और सेल्सफोर्स बीएलआईपी के साथ विकसित किया गया, जिसने लागत विश्लेषण स्वचालन प्राप्त किया और 12+ करोड़ की संभावित बचत की पहचान की।",
            project2Title: "एआई निगरानी प्रणाली",
            project2Desc: "96% सटीकता के साथ जीपीयू-त्वरित खतरा पहचान प्रणाली, वास्तविक समय प्रसंस्करण के लिए एनवीडिया जेटसन ओरिन का उपयोग करके भारतीय सेना की इकाइयों के साथ तैनात की गई।",
            project3Title: "स्वायत्त डिलीवरी रोबोट",
            project3Desc: "RRT* पथ योजना के साथ YOLOv8 ऑब्जेक्ट डिटेक्शन को एकीकृत किया, जिससे 96.4% की सटीकता और कार्य पूरा करने के समय में 60% का सुधार हुआ।",
            project4Title: "वास्तविक समय वीडियो एनालिटिक्स",
            project4Desc: "एनवीडिया टूलकिट और एडब्ल्यूएस का उपयोग करके स्केलेबल ऑब्जेक्ट डिटेक्शन सिस्टम, विलंबता को 30% तक कम करना और मॉडल क्वांटाइजेशन के साथ थ्रूपुट बढ़ाना।",
            researchTitle: "अनुसंधान और प्रकाशन",
            researchSubtitle: "एआई में नई सीमाओं की खोज करना और समुदाय के साथ अपने निष्कर्षों को साझा करना।",
            statusPublished: "प्रकाशित",
            statusOngoing: "जारी है",
            research1Title: "सेंसर फ्यूजन का उपयोग करके वास्तविक समय में स्वायत्त खतरा पहचान",
            research1Desc: "उच्च-सटीकता वाले खतरे का पता लगाने के लिए एज उपकरणों पर मल्टीमॉडल सेंसर डेटा को फ्यूज करने के लिए एक उपन्यास वास्तुकला...",
            research1Authors: "सह-लेखक: डॉ. पुनीत गुप्ता, प्रो. अविजित माजी",
            research2Title: "ऑटोमोटिव लागत विश्लेषण के लिए आरएजी पाइपलाइनों का अनुकूलन",
            research2Desc: "औद्योगिक अनुप्रयोगों के लिए आरएजी प्रणालियों की दक्षता और सटीकता में सुधार पर एक अध्ययन...",
            research2Authors: "सह-लेखक: श्री समीर जिंदल",
            viewPaper: "पेपर देखें",
            viewDraft: "ड्राफ्ट देखें",
            skillsTitle: "तकनीकी कौशल",
            skillsSubtitle: "भाषाओं, रूपरेखाओं और प्लेटफार्मों का मेरा टूलबॉक्स जिसका उपयोग मैं जटिल समस्याओं के निर्माण, नवाचार और समाधान के लिए करता हूं।",
            skillsLangDb: "भाषाएँ और डेटाबेस",
            skillsAiMl: "एआई, एमएल और डेटा",
            skillsCloud: "क्लाउड और डेवऑप्स",
            skillsDevTools: "डेवलपर उपकरण",
            skillsCoursework: "प्रासंगिक पाठ्यक्रम",
            skillsInterests: "रुचि के क्षेत्र",
            skillsSoft: "सॉफ्ट स्किल्स",
            course1: "डेटा संरचनाएं और एल्गोरिदम",
            course2: "कृत्रिम होशियारी",
            course3: "मशीन लर्निंग",
            course4: "कंप्यूटर विजन",
            course5: "डिजिटल इमेज प्रोसेसिंग",
            course6: "ऑपरेटिंग सिस्टम",
            course7: "बिग डेटा (काफ्का, स्पार्क, हडूप)",
            course8: "इंटरनेट ऑफ थिंग्स",
            interest1: "एआई और रोबोटिक्स",
            interest2: "जीपीयू अनुकूलन",
            interest3: "डीप लर्निंग आर्किटेक्चर",
            interest4: "अनुसंधान एवं विकास",
            interest5: "डेटा विज्ञान",
            interest6: "इमेजिंग सिस्टम",
            interest7: "अनुप्रयुक्त गणित",
            softSkill1: "रचनात्मक समस्या-समाधान",
            softSkill2: "स्पष्ट संचार",
            softSkill3: "स्व-शिक्षण और अनुकूलनशीलता",
            softSkill4: "परिणामों पर ध्यान दें",
            softSkill5: "तकनीकी क्षमता",
            softSkill6: "सक्रिय श्रवण",
            softSkill7: "सक्रिय पहल",
            educationTitle: "शिक्षा",
            educationSubtitle: "अब तक की मेरी शिक्षा, और हर डिग्री और कोर्स के साथ उच्च लक्ष्य रखने की मेरी महत्वाकांक्षा।",
            educationDegree: "बैचलर ऑफ टेक्नोलॉजी, कंप्यूटर साइंस एंड इंजीनियरिंग",
            educationUniversity: "स्कूल ऑफ टेक्नोलॉजी, पंडित दीनदयाल एनर्जी यूनिवर्सिटी",
            viewThesis: "थीसिस देखें",
            viewTranscript: "ट्रांसक्रिप्ट देखें",
            viewDegree: "डिग्री देखें",
            education12th: "12 वीं कक्षा की उच्च विद्यालय शिक्षा",
            educationBoard12: "गुजरात राज्य शिक्षा बोर्ड",
            educationPR12: "प्रतिशत रैंक: 94.04%",
            educationGrade12: "ग्रेड: A1",
            education10th: "10 वीं कक्षा की उच्चतर माध्यमिक विद्यालय शिक्षा",
            educationBoard10: "गुजरात राज्य शिक्षा बोर्ड",
            educationPct10: "प्रतिशत: 93%",
            educationGrade10: "ग्रेड: A2",
            certificationsTitle: "प्रमाणपत्र और प्रशिक्षण",
            certificationsSubtitle: "एआई तक ही सीमित नहीं बल्कि वित्त, डेटा विज्ञान, मशीन लर्निंग, गणित, प्रबंधन और अन्य भूमिकाओं में निरंतर सीखने की मेरी प्रतिबद्धता।",
            cert1Title: "मशीन लर्निंग विशेषज्ञता",
            cert2Title: "जेनरेटिव एडवरसैरियल नेटवर्क (जीएएन) विशेषज्ञता",
            cert3Title: "डेटा विश्लेषण में सांख्यिकी का अनुप्रयोग",
            cert4Title: "ऊष्मायन और उद्यमिता को समझना",
            cert5Title: "बैचलर ऑफ टेक्नोलॉजी कोर्सवर्क",
            membershipsTitle: "समुदाय और अनुसंधान समूह के सदस्य",
            membershipsSubtitle: "अपने काम, समय और संसाधनों के माध्यम से प्रौद्योगिकी और सामाजिक सेवा में सबसे आगे रहने के लिए पेशेवर और सामाजिक कल्याण समुदायों के साथ जुड़ना।",
            testimonialsTitle: "मेरे गुरुओं के शब्द",
            testimonialsSubtitle: "उद्योग के नेता और प्रोफेसर मेरे कार्य नीति, तकनीकी योगदान और प्रभाव के बारे में क्या कहते हैं।",
            testimonial1Quote: "एआई आधारित लागत में कमी और वर्कफ़्लो स्वचालन के लिए एक उत्प्रेरक।",
            testimonial1Desc: `"मल्टीमॉडल आरएजी चैटबॉट कार्यान्वयन पर जैविक के काम ने हमारी लागत विश्लेषण प्रक्रिया में सुधार किया है। एआई प्रौद्योगिकियों की उनकी गहरी समझ और वीएवीई में मेरी दृष्टि से व्यावहारिक समाधान देने की क्षमता उन्हें एक अमूल्य टीम सदस्य बनाती है।"`,
            testimonial2Quote: "एक प्रेरित युवा शोधकर्ता।",
            testimonial2Desc: `"आईआईटी बॉम्बे में उनके गुरु के रूप में, वाहन व्यवहार की भविष्यवाणी के लिए उनका सांख्यिकीय मॉडलिंग दृष्टिकोण और स्वचालित डेटा प्रीप्रोसेसिंग पाइपलाइन मजबूत विश्लेषणात्मक सोच का प्रदर्शन करते हैं। उनके समर्पण, दृष्टिकोण, नैतिकता और काम की सराहना करते हैं।"`,
            testimonial3Quote: "एक उत्कृष्ट छात्र लेकिन स्व-प्रेरित शोधकर्ता और तकनीकी व्यक्ति अधिक",
            testimonial3Desc: `"पंडित दीनदयाल एनर्जी यूनिवर्सिटी में उनके अंतिम वर्ष की परियोजनाओं के लिए जैविक जरीवाला के गुरु के रूप में, मैं जटिल सिद्धांत का अनुवाद करने, अधिक जटिल अनुसंधान पद्धतियों का प्रयास करने, व्याख्यानों से सीखने और अद्वितीय पत्र लिखने के लिए अपने स्वयं के शोध अध्ययन करने के लिए समय निकालने की उनकी क्षमता से बहुत प्रभावित था।"`,
            testimonial4Quote: "पेशेवर, रचनात्मक और परिणाम-संचालित इंटर्न",
            testimonial4Desc: `"जैविक की स्वायत्त निगरानी आर्टिफिशियल इंटेलिजेंस ने हमें जम्मू और कश्मीर में वास्तविक दुनिया की तैनाती में बाजार प्रतिस्पर्धा स्तर और सटीकता स्तर प्राप्त करने में मदद की। उनकी तकनीकी दक्षता वास्तव में प्रभावशाली है।"`,
            viewRecommendation: "सिफारिश देखें",
            blogTitle: "ब्लॉग और लेख",
            blogSubtitle: "मेरे शोध और उद्योग के अनुभव से एआई, मशीन लर्निंग और अत्याधुनिक तकनीक पर अंतर्दृष्टि।",
            blog1Title: "मशीन लर्निंग रक्षा परिदृश्य को कैसे बदल रहा है",
            blog1Desc: "सैन्य अनुप्रयोगों में एआई निगरानी प्रणालियों के कार्यान्वयन और एज कंप्यूटिंग के प्रभाव की खोज...",
            blog1Category: "रक्षा तकनीक",
            blog2Title: "ऑटोमोटिव में एआई-संचालित लागत अनुकूलन का उदय",
            blog2Desc: "बुद्धिमान विश्लेषण के माध्यम से महत्वपूर्ण लागत बचत प्राप्त करने के लिए ऑटो क्षेत्र के लिए आरएजी-आधारित चैटबॉट विकसित करने से अंतर्दृष्टि...",
            blog2Category: "ऑटोमोटिव एआई",
            blog3Title: "अपना पहला एआई प्रोजेक्ट शुरू करने से पहले महत्वपूर्ण कदम",
            blog3Desc: "डेटा तैयार करने से लेकर मॉडल परिनियोजन तक, सफल एआई कार्यान्वयन के लिए आवश्यक विचारों के लिए एक गाइड...",
            blog3Category: "एआई रणनीति",
            servicesTitle: "मैं आपके लिए क्या कर सकता हूँ",
            servicesSubtitle: "एआई और इंजीनियरिंग के विभिन्न डोमेन में अत्याधुनिक समाधान प्रदान करने के लिए मेरे कौशल का लाभ उठाना।",
            service1Title: "एआई और मशीन लर्निंग डेवलपमेंट",
            service1Desc: "स्वचालन और बुद्धिमान निर्णय लेने के लिए कस्टम मशीन लर्निंग मॉडल, डीप लर्निंग आर्किटेक्चर और एंड-टू-एंड एआई सिस्टम का निर्माण।",
            service2Title: "कंप्यूटर विजन और इमेजिंग सिस्टम",
            service2Desc: "ऐसे समाधान विकसित करना जो स्मार्ट निगरानी और विश्लेषण को सक्षम करने के लिए कैमरों, थर्मल इमेजर्स और अन्य सेंसर से दृश्य डेटा की व्याख्या करते हैं।",
            service3Title: "उन्नत एआई अनुसंधान",
            service3Desc: "एआई से गहराई से मोहित, मैं डॉक्टरेट की पढ़ाई करने के लिए प्रेरित हूं, जबकि उद्योग में प्रभावशाली काम में योगदान दे रहा हूं और जटिल चुनौतियों का समाधान कर रहा हूं।",
            faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
            faqSubtitle: "मेरी सेवाओं, तकनीकी दृष्टिकोण और सहयोग प्रक्रिया के बारे में सामान्य प्रश्नों के उत्तर।",
            faq1q: "आप किन तकनीकों में विशेषज्ञ हैं?",
            faq1a: "मैं एमएल फ्रेमवर्क (TensorFlow, PyTorch), कंप्यूटर विजन (OpenCV, YOLOv8), रोबोटिक्स (ROS), और क्लाउड प्लेटफॉर्म (AWS, Google Cloud) में विशेषज्ञ हूं। मेरे पास Apache Spark और Kafka जैसे बड़े डेटा टूल का भी गहरा अनुभव है।",
            faq2q: "आप किस तरह की परियोजनाओं की तलाश में हैं?",
            faq2a: "मैं सक्रिय रूप से प्रभावशाली, सहयोगी परियोजनाओं की तलाश में हूं जो एआई, रोबोटिक्स या डेटा विज्ञान में सीमाओं को आगे बढ़ाती हैं। मैं जिज्ञासा-संचालित वातावरण में पनपता हूं जहां मैं विश्लेषणात्मक कठोरता के साथ महत्वपूर्ण चुनौतियों से निपट सकता हूं।",
            faq3q: "क्या आप हमारे मौजूदा तकनीकी दिशानिर्देशों के भीतर काम कर सकते हैं?",
            faq3a: "बिल्कुल। मुझे ऑटोमोटिव उद्योग मानकों से लेकर रक्षा क्षेत्र की आवश्यकताओं तक विभिन्न तकनीकी बाधाओं के भीतर काम करने का अनुभव है। मैं आपके मौजूदा टेक स्टैक, कोडिंग मानकों और परिनियोजन वातावरण के अनुकूल हो सकता हूं।",
            faq4q: "हम कैसे शुरू करें?",
            faq4a: "बस संपर्क बटन या मुझे ईमेल के माध्यम से पहुंचें। हम आपकी परियोजना की आवश्यकताओं, समयरेखा और उद्देश्यों पर चर्चा करने के लिए एक कॉल शेड्यूल कर सकते हैं। वहां से, मैं आपकी समीक्षा के लिए एक विस्तृत प्रस्ताव प्रदान कर सकता हूं।",
            ctaTitle: "आइए कुछ महान बनाएं",
            ctaSubtitle: "मैं प्रभावशाली परियोजनाओं पर काम करने के लिए सक्रिय रूप से सहयोग की तलाश में हूं। यदि आपके पास कोई चुनौती है जिसे डेटा-संचालित, रचनात्मक समाधान की आवश्यकता है, तो आइए जुड़ते हैं।",
            ctaButton: "संपर्क करें →",
            contactTitle: "संपर्क करें",
            contactSubtitle: "क्या आपके मन में कोई प्रश्न या कोई प्रोजेक्ट है? बेझिझक संपर्क करें।",
            footerCredit: "जैविक जरीवाला द्वारा डिजाइन और निर्मित",
            footerRights: "© 2025. सर्वाधिकार सुरक्षित।",
            workModal1: { title: "आर्टिफिशियल इंटेलिजेंस इंटर्न JSW मॉरिस गैरेज इंडिया प्राइवेट लिमिटेड में", subtitle: "जून 2024 - अगस्त 2024 | पुणे, भारत", content: "<p>लागत विश्लेषण के लिए डिस्टिलजीपीटी (124M) को प्रशिक्षित करके और दृष्टि-भाषा की समझ के लिए सेल्सफोर्स बीएलआईपी को एकीकृत करके एक रिट्रीवल-ऑगमेंटेड जनरेशन (आरएजी) मल्टीमॉडल चैटबॉट का निर्माण किया, जिसे बड़े डेटा पाइपलाइनों और क्लाउड कंप्यूटिंग बुनियादी ढांचे के साथ अनुकूलित किया गया, जिसके परिणामस्वरूप वाहन टियरडाउन डेटा संग्रह और विश्लेषण में वृद्धि के माध्यम से वर्ष भर में महत्वपूर्ण लागत बचत हुई।</p>" },
            workModal2: { title: "एआई उत्पाद इंजीनियरिंग इंटर्न महर्षि इंडस्ट्रीज प्राइवेट लिमिटेड में", subtitle: "दिसंबर 2023 - फरवरी 2024 | अहमदाबाद, भारत", content: "<p>एनवीडिया जेटसन ओरिन पर एक जीपीयू-त्वरित एआई निगरानी प्रणाली डिजाइन और तैनात की, जिसमें 96% वास्तविक समय की सटीकता और भारतीय सेना की इकाइयों द्वारा परिचालन अपनाने को प्राप्त किया गया। जम्मू और कश्मीर एलओसी के साथ सीमा सुरक्षा के लिए ट्रांसफार्मर-आधारित वस्तु धारणा के साथ दृष्टि-रडार (बीएफएसआर) संलयन को एकीकृत किया। वास्तविक समय की स्ट्रीमिंग और अलर्ट के लिए फ्लास्क-आधारित वेब एप्लिकेशन के साथ आरटी-डीईटीआर, डेप्थएनीथिंगवी2, और डी-फाइन मॉडल का उपयोग किया।</p>" },
            workModal3: { title: "समर डेटा साइंस रिसर्च इंटर्न आईआईटी बॉम्बे में", subtitle: "मई 2023 - जुलाई 2023 | मुंबई, भारत", content: "<p>आईआईटी बॉम्बे में अपनी गर्मियों की इंटर्नशिप के दौरान, मैंने वाहन चलाने के व्यवहार की भविष्यवाणी करने के लिए 100GB से अधिक सांख्यिकीय और वीडियो डेटा संसाधित किया। मैंने 84% सटीकता प्राप्त करने वाले मजबूत सांख्यिकीय मॉडल विकसित किए और स्वचालित डेटा प्रीप्रोसेसिंग पाइपलाइन लागू की। इसमें ओवरटेकिंग इवेंट की भविष्यवाणी के लिए IMU डेटा का विश्लेषण करना, वाहनों की दूरी का अनुमान लगाने के लिए इमेज प्रोसेसिंग और डीप लर्निंग का उपयोग करना और ब्रेकिंग और त्वरण की घटनाओं का पता लगाने के लिए अनुदैर्ध्य त्वरण का सांख्यिकीय विश्लेषण करना शामिल था। इन प्रयासों ने डेटा हेरफेर, मशीन लर्निंग और कंप्यूटर विजन में मेरे कौशल को बढ़ाया और मूल्यवान उद्योग-स्तरीय अंतर्दृष्टि प्रदान की।</p>" },
            workModal4: { title: "ऑटोनॉमस सिस्टम इंटर्न iNav लैब्स में", subtitle: "जून 2022 - अगस्त 2022 | गांधीनगर, भारत", content: "<p>एक उन्नत स्वायत्त डिलीवरी रोबोट पाइपलाइन को डिजाइन और कार्यान्वित किया, जिसमें सटीक वस्तु का पता लगाने के लिए YOLOv8 को अनुकूलित नेविगेशन के लिए RRT* पथ योजना के साथ एकीकृत किया गया। मजबूत पर्यावरण मानचित्रण और वास्तविक समय के निर्णय लेने के लिए LiDAR और दोहरे कैमरा सिस्टम के साथ उन्नत जेटसन नैनो प्लेटफॉर्म पर ROS का लाभ उठाकर वस्तु की पहचान में 96.4% सटीकता और कार्य पूरा करने के समय में 60% की कमी हासिल की।</p>" },
            projectModal1: { title: "आरएजी-आधारित मल्टीमॉडल चैटबॉट", subtitle: "व्यक्तिगत परियोजना | एलएलएम, आरएजी, जीपीटी-2, सेल्सफोर्स बीएलआईपी", content: "<p>यह परियोजना औद्योगिक लागत विश्लेषण के लिए डिज़ाइन किया गया एक उन्नत चैटबॉट है। यह विनिर्माण घटकों से संबंधित जटिल प्रश्नों की व्याख्या करने के लिए भाषा और दृष्टि क्षमताओं को विशिष्ट रूप से जोड़ती है। इसे छवियों और पाठ विवरणों को खिलाकर, यह एक विशाल डेटाबेस से प्रासंगिक जानकारी प्राप्त कर सकता है और संभावित लागत में कमी पर अंतर्दृष्टि उत्पन्न कर सकता है। आरएजी वास्तुकला इसे सटीक, संदर्भ-जागरूक उत्तर प्रदान करने की अनुमति देती है, जिससे एक ऑटोमोटिव उपयोग के मामले में 12 करोड़ से अधिक की संभावित बचत की पहचान होती है।</p>" },
            projectModal2: { title: "एआई निगरानी प्रणाली", subtitle: "अकादमिक परियोजना | आरटी-डीईटीआर, एनवीडिया जेटसन, टेन्सरआरटी", content: "<p>एक वास्तविक समय, जीपीयू-त्वरित खतरा पहचान प्रणाली जो सीमा सुरक्षा जैसे उच्च-दांव वाले वातावरण के लिए विकसित की गई है। यह प्रणाली एक एनवीडिया जेटसन एज डिवाइस पर चलती है, जो इसे दूरस्थ स्थानों में तैनाती के लिए उपयुक्त बनाती है। यह एक फाइन-ट्यून किए गए आरटी-डीईटीआर मॉडल का उपयोग करता है, जिसे अधिकतम प्रदर्शन के लिए टेन्सरआरटी के साथ अनुकूलित किया गया है। 96% सटीकता के साथ, यह लाइव वीडियो स्ट्रीम से खतरों का मज़बूती से पता लगा सकता है और वर्गीकृत कर सकता है, जो रक्षा अनुप्रयोगों के लिए महत्वपूर्ण खुफिया जानकारी प्रदान करता है।</p>" },
            projectModal3: { title: "स्वायत्त डिलीवरी रोबोट", subtitle: "विश्वविद्यालय परियोजना | YOLOv8, ROS, पथ योजना", content: "<p>इस परियोजना में एक स्वायत्त डिलीवरी रोबोट के लिए संपूर्ण सॉफ्टवेयर स्टैक का निर्माण शामिल था। इसकी धारणा प्रणाली, YOLOv8 द्वारा संचालित, वस्तुओं का पता लगाने और अपने परिवेश को नेविगेट करने में 96.4% सटीकता प्राप्त करती है। नेविगेशन और निर्णय लेना ROS ढांचे के भीतर नियंत्रित किया जाता है, जहां एक कुशल और इष्टतम पथ योजना के लिए एक RRT* एल्गोरिथ्म लागू किया जाता है। रोबोट को डिलीवरी कार्यों को स्वायत्त रूप से पूरा करने के लिए जटिल इनडोर और आउटडोर वातावरण में नेविगेट करने के लिए डिज़ाइन किया गया है।</p>" },
            projectModal4: { title: "वास्तविक समय वीडियो एनालिटिक्स प्लेटफॉर्म", subtitle: "व्यक्तिगत परियोजना | एनवीडिया डीपस्ट्रीम, एडब्ल्यूएस, काफ्का", content: "<p>वास्तविक समय में कई वीडियो फ़ीड का विश्लेषण करने के लिए एक स्केलेबल, क्लाउड-एकीकृत प्लेटफ़ॉर्म। यह हार्डवेयर-त्वरित वीडियो प्रोसेसिंग के लिए एनवीडिया डीपस्ट्रीम एसडीके का लाभ उठाता है, जो विलंबता को काफी कम करता है। डेटा स्ट्रीम को अपाचे काफ्का का उपयोग करके प्रबंधित किया जाता है और एडब्ल्यूएस पर संसाधित किया जाता है, जिससे सिस्टम को क्षैतिज रूप से स्केल करने की अनुमति मिलती है। सावधान मॉडल अनुकूलन और कुशल पाइपलाइन डिजाइन के माध्यम से, सिस्टम एंड-टू-एंड विलंबता में 30% की कमी प्राप्त करता है, जो इसे यातायात निगरानी और सार्वजनिक सुरक्षा जैसे अनुप्रयोगों के लिए आदर्श बनाता है।</p>" },
            researchModal1: { title: "सेंसर फ्यूजन का उपयोग करके वास्तविक समय में स्वायत्त खतरा पहचान", subtitle: "प्रकाशित पेपर | सह-लेखक: डॉ. पुनीत गुप्ता, प्रो. अविजित माजी", content: "<p><b>सार:</b> यह पेपर मल्टीमॉडल सेंसर से डेटा को फ्यूज करके एज उपकरणों पर वास्तविक समय, स्वायत्त खतरा पहचान के लिए एक उपन्यास वास्तुकला प्रस्तुत करता है। हम एक हल्का लेकिन मजबूत ढांचा प्रस्तावित करते हैं जो विभिन्न पर्यावरणीय परिस्थितियों में पहचान सटीकता में सुधार के लिए आरजीबी कैमरों से दृश्य डेटा को थर्मल इमेजिंग के साथ जोड़ता है। हमारा दृष्टिकोण एक एम्बेडेड जीपीयू प्लेटफॉर्म पर तैनात एक अनुकूलित डीप लर्निंग मॉडल का उपयोग करता है, जो कम विलंबता और उच्च प्रदर्शन सुनिश्चित करता है। प्रायोगिक परिणाम बताते हैं कि हमारी सेंसर फ्यूजन विधि 97% पहचान सटीकता प्राप्त करती है, जो एकल-मोडैलिटी सिस्टम से बेहतर प्रदर्शन करती है, खासकर कम रोशनी और प्रतिकूल मौसम परिदृश्यों में। यह शोध मानव रहित हवाई वाहनों (यूएवी) और दूरस्थ सुरक्षा चौकियों जैसे संसाधन-विवश वातावरण में उन्नत निगरानी क्षमताओं को तैनात करने के लिए एक व्यवहार्य समाधान प्रदान करता है।</p>" },
            researchModal2: { title: "ऑटोमोटिव लागत विश्लेषण के लिए आरएजी पाइपलाइनों का अनुकूलन", subtitle: "जारी अनुसंधान | सह-लेखक: श्री समीर जिंदल", content: "<p><b>सारांश:</b> यह चल रहा शोध विशेष रूप से ऑटोमोटिव क्षेत्र पर ध्यान केंद्रित करते हुए, औद्योगिक अनुप्रयोगों के लिए पुनर्प्राप्ति-संवर्धित पीढ़ी (आरएजी) प्रणालियों की दक्षता और सटीकता को बढ़ाने के तरीकों की जांच करता है। अध्ययन डोमेन-विशिष्ट तकनीकी शब्दजाल को संभालने, मल्टीमॉडल डेटा (जैसे, इंजीनियरिंग आरेख और विनिर्देश पत्रक) की व्याख्या करने और बड़े, असंरचित डेटाबेस से पुनर्प्राप्ति प्रक्रिया को अनुकूलित करने जैसी प्रमुख चुनौतियों का समाधान करता है। हम हाइब्रिड पुनर्प्राप्ति रणनीतियों और छोटे भाषा मॉडल को ठीक करने की खोज कर रहे हैं ताकि उच्च-गुणवत्ता वाले जनरेटिव आउटपुट को बनाए रखते हुए कम्प्यूटेशनल ओवरहेड को कम किया जा सके। लक्ष्य आरएजी पाइपलाइनों को तैनात करने के लिए एक सर्वोत्तम-अभ्यास ढांचा विकसित करना है जो लागत विश्लेषण और आपूर्ति श्रृंखला अनुकूलन जैसे जटिल कार्यों के लिए विश्वसनीय और कार्रवाई योग्य अंतर्दृष्टि प्रदान कर सकता है।</p>" },
            testimonialModal1: { title: "श्री समीर जिंदल से सिफारिश", subtitle: "निदेशक, वीएवीई @ जेएसडब्ल्यू एमजी मोटर इंडिया", content: "<blockquote>\"मल्टीमॉडल आरएजी चैटबॉट कार्यान्वयन पर जैविक के काम ने हमारी लागत विश्लेषण प्रक्रिया में सुधार किया है। एआई प्रौद्योगिकियों की उनकी गहरी समझ और वीएवीई में मेरी दृष्टि से व्यावहारिक समाधान देने की क्षमता उन्हें एक अमूल्य टीम सदस्य बनाती है।\"</blockquote>" },
            testimonialModal2: { title: "प्रोफेसर अविजित माजी से सिफारिश", subtitle: "प्रोफेसर, सिविल इंजीनियरिंग @ भारतीय प्रौद्योगिकी संस्थान बॉम्बे", content: "<blockquote>\"आईआईटी बॉम्बे में उनके गुरु के रूप में, वाहन व्यवहार की भविष्यवाणी के लिए उनका सांख्यिकीय मॉडलिंग दृष्टिकोण और स्वचालित डेटा प्रीप्रोसेसिंग पाइपलाइन मजबूत विश्लेषणात्मक सोच का प्रदर्शन करते हैं। उनके समर्पण, दृष्टिकोण, नैतिकता और काम की सराहना करते हैं।\"</blockquote>" },
            testimonialModal3: { title: "डॉ. पुनीत गुप्ता से सिफारिश", subtitle: "सहायक प्रोफेसर, कंप्यूटर विज्ञान और इंजीनियरिंग विभाग @ पंडित दीनदयाल ऊर्जा विश्वविद्यालय, गांधीनगर", content: "<blockquote>\"पंडित दीनदयाल एनर्जी यूनिवर्सिटी में उनके अंतिम वर्ष की परियोजनाओं के लिए जैविक जरीवाला के गुरु के रूप में, मैं जटिल सिद्धांत का अनुवाद करने, अधिक जटिल अनुसंधान पद्धतियों का प्रयास करने, व्याख्यानों से सीखने और अद्वितीय पत्र लिखने के लिए अपने स्वयं के शोध अध्ययन करने के लिए समय निकालने की उनकी क्षमता से बहुत प्रभावित था।\"</blockquote>" },
            testimonialModal4: { title: "महर्षि इंडस्ट्रीज प्राइवेट लिमिटेड से सिफारिश", subtitle: "रक्षा प्रौद्योगिकी प्रदाता भारतीय सेना", content: "<blockquote>\"जैविक की स्वायत्त निगरानी आर्टिफिशियल इंटेलिजेंस ने हमें जम्मू और कश्मीर में वास्तविक दुनिया की तैनाती में बाजार प्रतिस्पर्धा स्तर और सटीकता स्तर प्राप्त करने में मदद की। उनकी तकनीकी दक्षता वास्तव में प्रभावशाली है।\"</blockquote>" },
            blogModal1: { title: "मशीन लर्निंग रक्षा परिदृश्य को कैसे बदल रहा है", subtitle: "12 सितं, 2025 | रक्षा तकनीक", content: "<p>रक्षा क्षेत्र में कृत्रिम बुद्धिमत्ता का एकीकरण आधुनिक युद्ध और सुरक्षा में एक आदर्श बदलाव का प्रतीक है। पारंपरिक निगरानी के तरीके एआई-संचालित प्रणालियों को रास्ता दे रहे हैं जो वास्तविक समय में कई स्रोतों-ड्रोन, उपग्रहों और जमीनी सेंसर से डेटा का विश्लेषण कर सकते हैं। यह लेख एआई निगरानी प्रणालियों के कार्यान्वयन की पड़ताल करता है, जो एज कंप्यूटिंग के प्रभाव पर ध्यान केंद्रित करता है। एनवीडिया जेटसन जैसे उपकरणों पर शक्तिशाली मॉडल तैनात करके, हम एआई क्षमताओं को सीधे क्षेत्र में ला सकते हैं, जिससे तेजी से निर्णय लेने और स्वायत्त संचालन को सक्षम किया जा सकता है। हम नैतिक विचारों और रक्षा में एआई को आकार देने वाले भविष्य के रुझानों पर भी बात करेंगे।</p>" },
            blogModal2: { title: "ऑटोमोटिव में एआई-संचालित लागत अनुकूलन का उदय", subtitle: "05 सितं, 2025 | ऑटोमोटिव एआई", content: "<p>जबकि ऑटोमोटिव उद्योग में एआई को अक्सर सेल्फ-ड्राइविंग कारों से जोड़ा जाता है, लेकिन विनिर्माण और व्यावसायिक संचालन पर इसका प्रभाव उतना ही गहरा है। यह पोस्ट लागत अनुकूलन के लिए एआई, विशेष रूप से रिट्रीवल-ऑगमेंटेड जनरेशन (आरएजी) चैटबॉट्स के अनुप्रयोग में delves करती है। जेएसडब्ल्यू एमजी मोटर के लिए एक मल्टीमॉडल सिस्टम विकसित करने के अपने अनुभव से, मैं चर्चा करता हूं कि ये उपकरण जटिल इंजीनियरिंग डेटा का विश्लेषण कैसे कर सकते हैं, घटक लागतों की तुलना कर सकते हैं, और महत्वपूर्ण बचत अवसरों की पहचान कर सकते हैं। यह एक नज़र है कि कैसे जनरेटिव एआई मुख्य औद्योगिक चुनौतियों से निपटने के लिए ग्राहक सेवा से आगे बढ़ रहा है।</p>" },
            blogModal3: { title: "अपना पहला एआई प्रोजेक्ट शुरू करने से पहले महत्वपूर्ण कदम", subtitle: "28 अग, 2025 | एआई रणनीति", content: "<p>एक एआई परियोजना पर लगना कठिन हो सकता है। सफलता अक्सर मॉडल की जटिलता से अधिक प्रारंभिक योजना पर निर्भर करती है। यह मार्गदर्शिका किसी भी टीम के लिए अपनी एआई यात्रा शुरू करने के लिए आवश्यक विचारों की रूपरेखा तैयार करती है।</p><ul><li><b>एक स्पष्ट व्यावसायिक समस्या को परिभाषित करें:</b> प्रौद्योगिकी के साथ शुरू न करें; एक अच्छी तरह से परिभाषित समस्या के साथ शुरू करें जिसे एआई वास्तविक रूप से हल कर सकता है।</li><li><b>डेटा गुणवत्ता और उपलब्धता का आकलन करें:</b> डेटा एआई का जीवन रक्त है। सुनिश्चित करें कि शुरू करने से पहले आपके पास स्वच्छ, प्रासंगिक और पर्याप्त डेटा है।</li><li><b>सही मॉडल और उपकरण चुनें:</b> सरल रैखिक प्रतिगमन से लेकर जटिल तंत्रिका नेटवर्क तक, एक ऐसा उपकरण चुनें जो समस्या के पैमाने और आपकी टीम की विशेषज्ञता के अनुकूल हो।</li><li><b>तैनाती और निगरानी के लिए योजना:</b> एक मॉडल तभी उपयोगी होता है जब उसे तैनात किया जाता है। योजना बनाएं कि आप इसे वर्कफ़्लो में कैसे एकीकृत करेंगे और समय के साथ इसके प्रदर्शन की निगरानी करेंगे।</li><li><b>छोटे से शुरू करें:</b> मूल्य प्रदर्शित करने और स्केल अप करने से पहले जोखिम को कम करने के लिए एक अवधारणा के प्रमाण के साथ शुरू करें।</li></ul>" },
            serviceModal1: { title: "एआई और मशीन लर्निंग डेवलपमेंट", subtitle: "कस्टम मॉडल निर्माण और सिस्टम एकीकरण", content: "<p>मैं आपकी विशिष्ट आवश्यकताओं के अनुरूप एआई और मशीन लर्निंग समाधानों का एंड-टू-एंड विकास प्रदान करता हूं। इसमें शामिल हैं:</p><ul><li>पूर्वानुमान, वर्गीकरण और प्रतिगमन कार्यों के लिए कस्टम भविष्य कहनेवाला मॉडल बनाना और प्रशिक्षित करना।</li><li>TensorFlow और PyTorch का उपयोग करके जटिल समस्याओं के लिए उन्नत डीप लर्निंग आर्किटेक्चर विकसित करना।</li><li>पाठ विश्लेषण, भावना विश्लेषण और चैटबॉट विकास के लिए प्राकृतिक भाषा प्रसंस्करण (एनएलपी) समाधान बनाना।</li><li>निर्बाध स्वचालन के लिए अपने मौजूदा सॉफ़्टवेयर और व्यावसायिक वर्कफ़्लो में एआई मॉडल को एकीकृत करना।</li></ul>" },
            serviceModal2: { title: "कंप्यूटर विजन और इमेजिंग सिस्टम", subtitle: "ऑब्जेक्ट डिटेक्शन, सेगमेंटेशन और विश्लेषण", content: "<p>मैं ऐसी प्रणालियाँ बनाने में माहिर हूँ जो वास्तविक दुनिया से दृश्य डेटा की व्याख्या कर सकती हैं और उस पर कार्य कर सकती हैं। इस क्षेत्र में मेरी सेवाओं में शामिल हैं:</p><ul><li>YOLO और RT-DETR जैसे अत्याधुनिक मॉडलों का उपयोग करके वास्तविक समय में ऑब्जेक्ट डिटेक्शन और ट्रैकिंग के लिए उच्च-प्रदर्शन प्रणाली विकसित करना।</li><li>विस्तृत दृश्य समझ और विश्लेषण के लिए छवि विभाजन को लागू करना।</li><li>आरजीबी कैमरे, थर्मल इमेजर और LiDAR सहित विभिन्न प्रकार के सेंसर से डेटा का प्रसंस्करण और विश्लेषण।</li><li>रोबोटिक्स, निगरानी और IoT में कम-विलंबता अनुप्रयोगों के लिए एज उपकरणों पर कंप्यूटर विजन मॉडल तैनात करना।</li></ul>" },
            serviceModal3: { title: "उन्नत एआई अनुसंधान", subtitle: "पीएचडी आकांक्षाएं और उद्योग सहयोग", content: "<p>कृत्रिम बुद्धिमत्ता के लिए मेरा जुनून आवेदन से परे मौलिक अनुसंधान में गहरी रुचि तक फैला हुआ है। मैं सक्रिय रूप से पीएचडी करने की तैयारी कर रहा हूं ताकि कुशल डीप लर्निंग आर्किटेक्चर और मल्टीमॉडल एआई पर ध्यान केंद्रित करते हुए क्षेत्र की उन्नति में योगदान दे सकूं।</p><p>मैं चुनौतीपूर्ण अनुसंधान समस्याओं पर उद्योग भागीदारों के साथ सहयोग करने के लिए उत्सुक हूं जो अकादमिक सिद्धांत और वास्तविक दुनिया के प्रभाव के बीच की खाई को पाटते हैं। यदि आपके पास एक जटिल चुनौती है जिसके लिए उपन्यास समाधान और कठोर जांच की आवश्यकता है, तो मुझे यह चर्चा करने में खुशी होगी कि हम एक साथ कैसे काम कर सकते हैं।</p>" }
        },
        gu: {
            greetingLoop: "કેમ છો, હું છું",
            navHome: "હોમ",
            navWork: "કાર્ય",
            navProjects: "પ્રોજેક્ટ્સ",
            navSkills: "કૌશલ્ય",
            navServices: "સેવાઓ",
            navTestimonials: "પ્રશંસાપત્રો",
            navBlog: "બ્લોગ",
            navResume: "રિઝ્યુમ ડાઉનલોડ કરો",
            heroProfessionTitle: "મશીન લર્નિંગ અને",
            heroProfessionSubtitle: "એઆઈ એન્જિનિયર",
            heroProfessionDesc: "કમ્પ્યુટર વિઝન, રોબોટિક્સ અને જીપીયુ ઓપ્ટિમાઇઝેશનમાં નિષ્ણાત.",
            heroLocationTitle: "નિવાસી",
            heroLocationDesc: "સુરત, ગુજરાત",
            workTitle: "મારો કાર્ય અનુભવ",
            workSubtitle: "પ્રભાવશાળી ભૂમિકાઓ દ્વારા એક પ્રવાસ જ્યાં મેં વાસ્તવિક દુનિયાની પડકારોને ઉકેલવા માટે એઆઈ, મશીન લર્નિંગ અને કમ્પ્યુટર વિઝનનો ઉપયોગ કર્યો છે.",
            work1Title: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ ઇન્ટર્ન - JSW મોરિસ ગેરેજ ઇન્ડિયા પ્રા. લિ.",
            work1Desc: "ખર્ચ વિશ્લેષણ માટે ડિસ્ટિલજીપીટી (124M) ને તાલીમ આપીને અને દ્રષ્ટિ-ભાષાની સમજ માટે સેલ્સફોર્સ BLIP ને એકીકૃત કરીને એક પુનઃપ્રાપ્તિ-વૃદ્ધિ જનરેશન (RAG) મલ્ટિમોડલ ચેટબોટનું નિર્માણ કર્યું, જેને મોટા ડેટા પાઇપલાઇન્સ અને ક્લાઉડ કમ્પ્યુટિંગ ઇન્ફ્રાસ્ટ્રક્ચર સાથે શ્રેષ્ઠ બનાવવામાં આવ્યું, જેના પરિણામે વાહન ટિયરડાઉન ડેટા સંગ્રહ અને વિશ્લેષણમાં વધારો થવાને કારણે વર્ષ દરમિયાન નોંધપાત્ર ખર્ચ બચત થઈ.",
            work2Title: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ પ્રોડક્ટ એન્જિનિયરિંગ ઇન્ટર્ન - મહર્ષિ ઇન્ડસ્ટ્રીઝ પ્રાઇવેટ લિમિટેડ",
            work2Desc: "NVIDIA જેટસન ઓરિન પર જીપીયુ-એક્સિલરેટેડ એઆઈ સર્વેલન્સ સિસ્ટમ ડિઝાઇન અને ગોઠવી, જેમાં 96% રીઅલ-ટાઇમ ચોકસાઈ અને ભારતીય સેનાના એકમો દ્વારા ઓપરેશનલ દત્તક લેવામાં આવ્યું. જમ્મુ અને કાશ્મીર એલઓસી સાથે સરહદ સુરક્ષા માટે ટ્રાન્સફોર્મર-આધારિત પદાર્થ ધારણા સાથે દ્રષ્ટિ-રડાર (BFSR) ફ્યુઝનને એકીકૃત કર્યું. રીઅલ-ટાઇમ સ્ટ્રીમિંગ અને ચેતવણીઓ માટે ફ્લાસ્ક-આધારિત વેબ એપ્લિકેશન સાથે RT-DETR, ડેપ્થએનિથિંગવી2 અને ડી-ફાઇન મોડેલોનો ઉપયોગ કર્યો.",
            work3Title: "સમર ડેટા સાયન્સ રિસર્ચ ઇન્ટર્ન - ઇન્ડિયન ઇન્સ્ટિટ્યૂટ ઓફ ટેકનોલોજી, બોમ્બે",
            work3Desc: "વાહન ચલાવવાના વર્તનની આગાહી કરવા માટે 100GB થી વધુ આંકડાકીય અને વિડિયો ડેટા પર પ્રક્રિયા કરી. મેં 84% ચોકસાઈ પ્રાપ્ત કરતા મજબૂત આંકડાકીય મોડેલો વિકસાવ્યા અને સ્વચાલિત ડેટા પ્રીપ્રોસેસિંગ પાઇપલાઇન્સ અમલમાં મૂકી. આમાં ઓવરટેકિંગ ઇવેન્ટની આગાહી માટે IMU ડેટાનું વિશ્લેષણ કરવું, વાહનોના અંતરના અંદાજ માટે ઇમેજ પ્રોસેસિંગ અને ડીપ લર્નિંગનો ઉપયોગ કરવો, અને બ્રેકિંગ અને પ્રવેગક ઘટનાઓને શોધવા માટે રેખાંશ પ્રવેગકનું આંકડાકીય વિશ્લેષણ કરવું શામેલ હતું.",
            work4Title: "ઓટોનોમસ સિસ્ટમ્સ ઇન્ટર્ન - iNav લેબ્સ",
            work4Desc: "એક અદ્યતન સ્વાયત્ત ડિલિવરી રોબોટ પાઇપલાઇન ડિઝાઇન અને અમલમાં મૂકી, જેમાં ચોક્કસ પદાર્થની શોધ માટે YOLOv8 ને શ્રેષ્ઠ નેવિગેશન માટે RRT* પાથ પ્લાનિંગ સાથે એકીકૃત કરવામાં આવ્યું. મજબૂત પર્યાવરણીય મેપિંગ અને રીઅલ-ટાઇમ નિર્ણય લેવા માટે LiDAR અને ડ્યુઅલ-કેમેરા સિસ્ટમ્સ સાથે ઉન્નત જેટસન નેનો પ્લેટફોર્મ પર ROS નો લાભ લઈને પદાર્થની ઓળખમાં 96.4% ચોકસાઈ અને કાર્ય પૂર્ણ કરવાના સમયમાં 60% ઘટાડો હાંસલ કર્યો.",
            viewCertificate: "પ્રમાણપત્ર જુઓ",
            projectsTitle: "મારા શ્રેષ્ઠ પોર્ટફોલિયો પ્રોજેક્ટ્સ...",
            projectsSubtitle: "એઆઈ, મશીન લર્નિંગ અને કમ્પ્યુટર વિઝનની સીમાઓને આગળ ધપાવતા નવીન પ્રોજેક્ટ્સ દ્વારા મારી તકનીકી કુશળતાનું પ્રદર્શન.",
            project1Title: "આરએજી-આધારિત મલ્ટિમોડલ ચેટબોટ",
            project1Desc: "જેએસડબલ્યુ એમજી મોટરમાં ડિસ્ટિલ-જીપીટી-2 અને સેલ્સફોર્સ બીએલઆઈપી સાથે વિકસાવવામાં આવ્યું, જે ખર્ચ વિશ્લેષણ ઓટોમેશન હાંસલ કરે છે અને 12+ કરોડની સંભવિત બચત ઓળખે છે.",
            project2Title: "એઆઈ સર્વેલન્સ સિસ્ટમ",
            project2Desc: "96% ચોકસાઈ સાથે જીપીયુ-એક્સિલરેટેડ ખતરા શોધ સિસ્ટમ, રીઅલ-ટાઇમ પ્રોસેસિંગ માટે એનવીડિયા જેટસન ઓરિનનો ઉપયોગ કરીને ભારતીય સેનાના એકમો સાથે ગોઠવવામાં આવી છે.",
            project3Title: "સ્વાયત્ત ડિલિવરી રોબોટ",
            project3Desc: "RRT* પાથ પ્લાનિંગ સાથે YOLOv8 ઓબ્જેક્ટ ડિટેક્શનને એકીકૃત કર્યું, જેનાથી 96.4% ની ચોકસાઈ અને કાર્ય પૂર્ણ કરવાના સમયમાં 60% સુધારો થયો.",
            project4Title: "રીઅલ-ટાઇમ વિડિઓ એનાલિટિક્સ",
            project4Desc: "એનવીડિયા ટૂલકિટ્સ અને એડબલ્યુએસનો ઉપયોગ કરીને સ્કેલેબલ ઓબ્જેક્ટ ડિટેક્શન સિસ્ટમ, લેટન્સીને 30% ઘટાડે છે અને મોડેલ ક્વોન્ટાઇઝેશન સાથે થ્રુપુટ વધારે છે.",
            researchTitle: "સંશોધન અને પ્રકાશનો",
            researchSubtitle: "એઆઈમાં નવી સીમાઓનું અન્વેષણ કરવું અને સમુદાય સાથે મારા તારણો શેર કરવા.",
            statusPublished: "પ્રકાશિત",
            statusOngoing: "ચાલુ છે",
            research1Title: "સેન્સર ફ્યુઝનનો ઉપયોગ કરીને રીઅલ-ટાઇમ ઓટોનોમસ થ્રેટ ડિટેક્શન",
            research1Desc: "ઉચ્ચ-ચોકસાઈવાળા ખતરાની શોધ માટે એજ ઉપકરણો પર મલ્ટિમોડલ સેન્સર ડેટાને ફ્યુઝ કરવા માટે એક નવલકથા આર્કિટેક્ચર...",
            research1Authors: "સહ-લેખકો: ડૉ. પુનિત ગુપ્તા, પ્રો. અવિજિત માજી",
            research2Title: "ઓટોમોટિવ ખર્ચ વિશ્લેષણ માટે RAG પાઇપલાઇન્સનું ઑપ્ટિમાઇઝેશન",
            research2Desc: "ઔદ્યોગિક એપ્લિકેશનો માટે RAG સિસ્ટમ્સની કાર્યક્ષમતા અને ચોકસાઈ સુધારવા પર એક અભ્યાસ...",
            research2Authors: "સહ-લેખકો: શ્રી સમીર જિંદાલ",
            viewPaper: "પેપર જુઓ",
            viewDraft: "ડ્રાફ્ટ જુઓ",
            skillsTitle: "તકનીકી કૌશલ્ય",
            skillsSubtitle: "ભાષાઓ, ફ્રેમવર્ક અને પ્લેટફોર્મ્સનું મારું ટૂલબોક્સ જેનો ઉપયોગ હું જટિલ સમસ્યાઓ બનાવવા, નવીનતા લાવવા અને ઉકેલવા માટે કરું છું.",
            skillsLangDb: "ભાષાઓ અને ડેટાબેસેસ",
            skillsAiMl: "એઆઈ, એમએલ અને ડેટા",
            skillsCloud: "ક્લાઉડ અને ડેવઓપ્સ",
            skillsDevTools: "વિકાસકર્તા સાધનો",
            skillsCoursework: "સંબંધિત કોર્સવર્ક",
            skillsInterests: "રસના ક્ષેત્રો",
            skillsSoft: "સોફ્ટ સ્કિલ્સ",
            course1: "ડેટા સ્ટ્રક્ચર્સ અને એલ્ગોરિધમ્સ",
            course2: "કૃત્રિમ બુદ્ધિ",
            course3: "મશીન લર્નિંગ",
            course4: "કમ્પ્યુટર વિઝન",
            course5: "ડિજિટલ ઇમેજ પ્રોસેસિંગ",
            course6: "ઓપરેટિંગ સિસ્ટમ્સ",
            course7: "બિગ ડેટા (કાફ્કા, સ્પાર્ક, હડૂપ)",
            course8: "ઇન્ટરનેટ ઓફ થિંગ્સ",
            interest1: "એઆઈ અને રોબોટિક્સ",
            interest2: "જીપીયુ ઓપ્ટિમાઇઝેશન",
            interest3: "ડીપ લર્નિંગ આર્કિટેક્ચર",
            interest4: "સંશોધન અને વિકાસ",
            interest5: "ડેટા સાયન્સ",
            interest6: "ઇમેજિંગ સિસ્ટમ્સ",
            interest7: "એપ્લાઇડ મેથેમેટિક્સ",
            softSkill1: "સર્જનાત્મક સમસ્યા-નિરાકરણ",
            softSkill2: "સ્પષ્ટ સંચાર",
            softSkill3: "સ્વ-શિક્ષણ અને અનુકૂલનક્ષમતા",
            softSkill4: "પરિણામો પર ધ્યાન કેન્દ્રિત કરો",
            softSkill5: "તકનીકી યોગ્યતા",
            softSkill6: "સક્રિય શ્રવણ",
            softSkill7: "સક્રિય પહેલ",
            educationTitle: "શિક્ષણ",
            educationSubtitle: "અત્યાર સુધીનું મારું શિક્ષણ, અને દરેક ડિગ્રી અને કોર્સ સાથે ઉચ્ચ લક્ષ્ય રાખવાની મારી મહત્વાકાંક્ષા.",
            educationDegree: "બેચલર ઓફ ટેકનોલોજી, કમ્પ્યુટર સાયન્સ એન્ડ એન્જિનિયરિંગ",
            educationUniversity: "સ્કૂલ ઓફ ટેકનોલોજી, પંડિત દીનદયાળ એનર્જી યુનિવર્સિટી",
            viewThesis: "થીસીસ જુઓ",
            viewTranscript: "ટ્રાન્સક્રિપ્ટ જુઓ",
            viewDegree: "ડિગ્રી જુઓ",
            education12th: "12મા ધોરણનું ઉચ્ચ શાળા શિક્ષણ",
            educationBoard12: "ગુજરાત રાજ્ય શિક્ષણ બોર્ડ",
            educationPR12: "પર્સેન્ટાઇલ રેન્ક: 94.04%",
            educationGrade12: "ગ્રેડ: A1",
            education10th: "10મા ધોરણનું ઉચ્ચતર માધ્યમિક શાળા શિક્ષણ",
            educationBoard10: "ગુજરાત રાજ્ય શિક્ષણ બોર્ડ",
            educationPct10: "ટકાવારી: 93%",
            educationGrade10: "ગ્રેડ: A2",
            certificationsTitle: "પ્રમાણપત્રો અને તાલીમ",
            certificationsSubtitle: "માત્ર AI સુધી મર્યાદિત નહીં પરંતુ ફાઇનાન્સ, ડેટા સાયન્સ, મશીન લર્નિંગ, ગણિત, મેનેજમેન્ટ અને અન્ય ભૂમિકાઓમાં સતત શીખવાની મારી પ્રતિબદ્ધતા.",
            cert1Title: "મશીન લર્નિંગ સ્પેશિયલાઇઝેશન",
            cert2Title: "જનરેટિવ એડવર્સેરિયલ નેટવર્ક (GANs) સ્પેશિયલાઇઝેશન",
            cert3Title: "ડેટા વિશ્લેષણમાં આંકડાશાસ્ત્રનો ઉપયોગ",
            cert4Title: "ઇન્ક્યુબેશન અને એન્ટરપ્રેન્યોરશિપને સમજવું",
            cert5Title: "બેચલર ઓફ ટેકનોલોજી કોર્સવર્ક",
            membershipsTitle: "સમુદાય અને સંશોધન જૂથના સભ્ય",
            membershipsSubtitle: "મારા કાર્ય, સમય અને સંસાધનો દ્વારા ટેકનોલોજી અને સમાજ સેવામાં મોખરે રહેવા માટે વ્યાવસાયિક અને સમાજ કલ્યાણ સમુદાયો સાથે જોડાવું.",
            testimonialsTitle: "મારા માર્ગદર્શકોના શબ્દો",
            testimonialsSubtitle: "ઉદ્યોગના અગ્રણીઓ અને પ્રોફેસરો મારી કાર્ય નીતિ, તકનીકી યોગદાન અને અસર વિશે શું કહે છે.",
            testimonial1Quote: "AI આધારિત ખર્ચ ઘટાડવા અને વર્કફ્લો ઓટોમેશન માટે ઉત્પ્રેરક.",
            testimonial1Desc: `"મલ્ટિમોડલ RAG ચેટબોટ અમલીકરણ પર જૈવિકના કાર્યથી અમારી ખર્ચ વિશ્લેષણ પ્રક્રિયામાં સુધારો થયો છે. AI તકનીકોની તેમની ઊંડી સમજ અને VAVE માં મારી દ્રષ્ટિથી વ્યવહારુ ઉકેલો પહોંચાડવાની ક્ષમતા તેમને એક અમૂલ્ય ટીમ સભ્ય બનાવે છે."`,
            testimonial2Quote: "એક પ્રેરિત યુવાન સંશોધક.",
            testimonial2Desc: `"IIT બોમ્બેમાં તેમના માર્ગદર્શક તરીકે, વાહન વર્તનની આગાહી માટેનો તેમનો આંકડાકીય મોડેલિંગ અભિગમ અને સ્વચાલિત ડેટા પ્રીપ્રોસેસિંગ પાઇપલાઇન્સ મજબૂત વિશ્લેષણાત્મક વિચારસરણી દર્શાવે છે. તેમના સમર્પણ, અભિગમ, નૈતિકતા અને કાર્યની પ્રશંસા કરો."`,
            testimonial3Quote: "એક ઉત્તમ વિદ્યાર્થી પણ વધુ સ્વ-પ્રેરિત સંશોધક અને તકનીકી વ્યક્તિ",
            testimonial3Desc: `"પંડિત દીનદયાળ એનર્જી યુનિવર્સિટીમાં તેમના અંતિમ વર્ષના પ્રોજેક્ટ્સ માટે જૈવિક જરીવાલાના માર્ગદર્શક તરીકે, હું જટિલ સિદ્ધાંતનો અનુવાદ કરવાની, વધુ જટિલ સંશોધન પદ્ધતિઓનો પ્રયાસ કરવાની, પ્રવચનોમાંથી શીખવાની અને અનન્ય પેપરો લખવા માટે પોતાના સંશોધન અભ્યાસ હાથ ધરવા માટે સમય કાઢવાની તેમની ક્ષમતાથી ખૂબ પ્રભાવિત થયો હતો."`,
            testimonial4Quote: "પ્રોફેશનલ, ક્રિએટિવ અને પરિણામ-સંચાલિત ઇન્ટર્ન",
            testimonial4Desc: `"જૈવિકની સ્વાયત્ત દેખરેખ આર્ટિફિશિયલ ઇન્ટેલિજન્સે અમને જમ્મુ અને કાશ્મીરમાં વાસ્તવિક-વિશ્વની જમાવટમાં બજાર સ્પર્ધા સ્તર અને ચોકસાઈ સ્તર હાંસલ કરવામાં મદદ કરી. તેમની તકનીકી પ્રાવીણ્ય ખરેખર પ્રભાવશાળી છે."`,
            viewRecommendation: "ભલામણ જુઓ",
            blogTitle: "બ્લોગ અને લેખો",
            blogSubtitle: "મારા સંશોધન અને ઉદ્યોગના અનુભવથી AI, મશીન લર્નિંગ અને અત્યાધુનિક ટેકનોલોજી પરની આંતરદૃષ્ટિ.",
            blog1Title: "મશીન લર્નિંગ સંરક્ષણ લેન્ડસ્કેપને કેવી રીતે બદલી રહ્યું છે",
            blog1Desc: "લશ્કરી એપ્લિકેશન્સમાં AI સર્વેલન્સ સિસ્ટમ્સના અમલીકરણ અને એજ કમ્પ્યુટિંગની અસરનું અન્વેષણ...",
            blog1Category: "ડિફેન્સ ટેક",
            blog2Title: "ઓટોમોટિવમાં AI-સંચાલિત ખર્ચ ઓપ્ટિમાઇઝેશનનો ઉદય",
            blog2Desc: "બુદ્ધિશાળી વિશ્લેષણ દ્વારા નોંધપાત્ર ખર્ચ બચત હાંસલ કરવા માટે ઓટો સેક્ટર માટે RAG-આધારિત ચેટબોટ્સ વિકસાવવાથી આંતરદૃષ્ટિ...",
            blog2Category: "ઓટોમોટિવ એઆઈ",
            blog3Title: "તમારો પ્રથમ AI પ્રોજેક્ટ શરૂ કરતા પહેલાના મુખ્ય પગલાં",
            blog3Desc: "ડેટા તૈયારીથી લઈને મોડેલ જમાવટ સુધી, સફળ AI અમલીકરણ માટેની આવશ્યક વિચારણાઓ માટેની માર્ગદર્શિકા...",
            blog3Category: "એઆઈ વ્યૂહરચના",
            servicesTitle: "હું તમારા માટે શું કરી શકું",
            servicesSubtitle: "AI અને એન્જિનિયરિંગના વિવિધ ડોમેન્સમાં અત્યાધુનિક ઉકેલો પ્રદાન કરવા માટે મારા કૌશલ્યોનો લાભ ઉઠાવવો.",
            service1Title: "એઆઈ અને મશીન લર્નિંગ ડેવલપમેન્ટ",
            service1Desc: "ઓટોમેશન અને બુદ્ધિશાળી નિર્ણય લેવા માટે કસ્ટમ મશીન લર્નિંગ મોડલ્સ, ડીપ લર્નિંગ આર્કિટેક્ચર અને એન્ડ-ટુ-એન્ડ AI સિસ્ટમ્સ બનાવવી.",
            service2Title: "કમ્પ્યુટર વિઝન અને ઇમેજિંગ સિસ્ટમ્સ",
            service2Desc: "એવા ઉકેલો વિકસાવવા કે જે સ્માર્ટ મોનિટરિંગ અને વિશ્લેષણને સક્ષમ કરવા માટે કેમેરા, થર્મલ ઇમેજર્સ અને અન્ય સેન્સરમાંથી વિઝ્યુઅલ ડેટાનું અર્થઘટન કરે છે.",
            service3Title: "અદ્યતન એઆઈ સંશોધન",
            service3Desc: "AI થી ઊંડે આકર્ષિત, હું ડોક્ટરલ અભ્યાસ કરવા માટે પ્રેરિત છું જ્યારે ઉદ્યોગમાં પ્રભાવશાળી કાર્યમાં યોગદાન આપું છું અને જટિલ પડકારોનું નિરાકરણ કરું છું.",
            faqTitle: "વારંવાર પૂછાતા પ્રશ્નો",
            faqSubtitle: "મારી સેવાઓ, તકનીકી અભિગમ અને સહયોગ પ્રક્રિયા વિશેના સામાન્ય પ્રશ્નોના જવાબો.",
            faq1q: "તમે કઈ ટેકનોલોજીમાં નિષ્ણાત છો?",
            faq1a: "હું ML ફ્રેમવર્ક (TensorFlow, PyTorch), કમ્પ્યુટર વિઝન (OpenCV, YOLOv8), રોબોટિક્સ (ROS), અને ક્લાઉડ પ્લેટફોર્મ્સ (AWS, Google Cloud) માં નિષ્ણાત છું. મારી પાસે Apache Spark અને Kafka જેવા મોટા ડેટા ટૂલ્સનો પણ ઊંડો અનુભવ છે.",
            faq2q: "તમે કેવા પ્રોજેક્ટ્સ શોધી રહ્યા છો?",
            faq2a: "હું સક્રિયપણે પ્રભાવશાળી, સહયોગી પ્રોજેક્ટ્સ શોધી રહ્યો છું જે AI, રોબોટિક્સ અથવા ડેટા સાયન્સમાં સીમાઓને આગળ ધપાવે છે. હું જિજ્ઞાસા-સંચાલિત વાતાવરણમાં ખીલી ઉઠું છું જ્યાં હું વિશ્લેષણાત્મક કઠોરતા સાથે નિર્ણાયક પડકારોનો સામનો કરી શકું.",
            faq3q: "શું તમે અમારી હાલની તકનીકી માર્ગદર્શિકામાં કામ કરી શકો છો?",
            faq3a: "ચોક્કસ. મને ઓટોમોટિવ ઉદ્યોગના ધોરણોથી લઈને સંરક્ષણ ક્ષેત્રની જરૂરિયાતો સુધીની વિવિધ તકનીકી મર્યાદાઓમાં કામ કરવાનો અનુભવ છે. હું તમારા હાલના ટેક સ્ટેક, કોડિંગ ધોરણો અને જમાવટના વાતાવરણને અનુકૂલિત કરી શકું છું.",
            faq4q: "આપણે કેવી રીતે શરૂઆત કરીએ?",
            faq4a: "ફક્ત સંપર્ક બટન દ્વારા અથવા મને ઇમેઇલ કરો. અમે તમારી પ્રોજેક્ટની જરૂરિયાતો, સમયરેખા અને ઉદ્દેશ્યોની ચર્ચા કરવા માટે કૉલ શેડ્યૂલ કરી શકીએ છીએ. ત્યાંથી, હું તમારી સમીક્ષા માટે વિગતવાર પ્રસ્તાવ પ્રદાન કરી શકું છું.",
            ctaTitle: "ચાલો કંઈક મહાન બનાવીએ",
            ctaSubtitle: "હું પ્રભાવશાળી પ્રોજેક્ટ્સ પર કામ કરવા માટે સક્રિયપણે સહયોગ શોધી રહ્યો છું. જો તમારી પાસે કોઈ પડકાર છે જેને ડેટા-સંચાલિત, સર્જનાત્મક ઉકેલની જરૂર હોય, તો ચાલો જોડાઈએ.",
            ctaButton: "સંપર્કમાં રહો →",
            contactTitle: "સંપર્કમાં રહો",
            contactSubtitle: "શું તમારા મનમાં कोई પ્રશ્ન અથવા પ્રોજેક્ટ છે? નિઃસંકોચ સંપર્ક કરો.",
            footerCredit: "જૈવિક જરીવાલા દ્વારા ડિઝાઇન અને નિર્મિત",
            footerRights: "© 2025. સર્વાધિકાર સુરક્ષિત.",
            workModal1: { title: "જેએસડબલ્યુ મોરિસ ગેરેજ ઇન્ડિયા પ્રા. લિ. ખાતે આર્ટિફિશિયલ ઇન્ટેલિજન્સ ઇન્ટર્ન", subtitle: "જૂન 2024 - ઓગસ્ટ 2024 | પુણે, ભારત", content: "<p>ખર્ચ વિશ્લેષણ માટે ડિસ્ટિલજીપીટી (124M) ને તાલીમ આપીને અને દ્રષ્ટિ-ભાષાની સમજ માટે સેલ્સફોર્સ BLIP ને એકીકૃત કરીને એક પુનઃપ્રાપ્તિ-વૃદ્ધિ જનરેશન (RAG) મલ્ટિમોડલ ચેટબોટનું નિર્માણ કર્યું, જેને મોટા ડેટા પાઇપલાઇન્સ અને ક્લાઉડ કમ્પ્યુટિંગ ઇન્ફ્રાસ્ટ્રક્ચર સાથે શ્રેષ્ઠ બનાવવામાં આવ્યું, જેના પરિણામે વાહન ટિયરડાઉન ડેટા સંગ્રહ અને વિશ્લેષણમાં વધારો થવાને કારણે વર્ષ દરમિયાન નોંધપાત્ર ખર્ચ બચત થઈ.</p>" },
            workModal2: { title: "મહર્ષિ ઇન્ડસ્ટ્રીઝ પ્રાઇવેટ લિમિટેડ ખાતે એઆઈ પ્રોડક્ટ એન્જિનિયરિંગ ઇન્ટર્ન", subtitle: "ડિસેમ્બર 2023 - ફેબ્રુઆરી 2024 | અમદાવાદ, ભારત", content: "<p>NVIDIA જેટસન ઓરિન પર જીપીયુ-એક્સિલરેટેડ એઆઈ સર્વેલન્સ સિસ્ટમ ડિઝાઇન અને ગોઠવી, જેમાં 96% રીઅલ-ટાઇમ ચોકસાઈ અને ભારતીય સેનાના એકમો દ્વારા ઓપરેશનલ દત્તક લેવામાં આવ્યું. જમ્મુ અને કાશ્મીર એલઓસી સાથે સરહદ સુરક્ષા માટે ટ્રાન્સફોર્મર-આધારિત પદાર્થ ધારણા સાથે દ્રષ્ટિ-રડાર (BFSR) ફ્યુઝનને એકીકૃત કર્યું. રીઅલ-ટાઇમ સ્ટ્રીમિંગ અને ચેતવણીઓ માટે ફ્લાસ્ક-આધારિત વેબ એપ્લિકેશન સાથે RT-DETR, ડેપ્થએનિથિંગવી2 અને ડી-ફાઇન મોડેલોનો ઉપયોગ કર્યો.</p>" },
            workModal3: { title: "આઈઆઈટી બોમ્બે ખાતે સમર ડેટા સાયન્સ રિસર્ચ ઇન્ટર્ન", subtitle: "મે 2023 - જુલાઈ 2023 | મુંબઈ, ભારત", content: "<p>આઈઆઈટી બોમ્બે ખાતે મારી ઉનાળુ ઇન્ટર્નશિપ દરમિયાન, મેં વાહનોના ડ્રાઇવિંગ વર્તનની આગાહી કરવા માટે 100GB કરતાં વધુ આંકડાકીય અને વિડિયો ડેટા પર પ્રક્રિયા કરી. મેં 84% ચોકસાઈ હાંસલ કરતા મજબૂત આંકડાકીય મોડેલો વિકસાવ્યા અને સ્વયંસંચાલિત ડેટા પ્રીપ્રોસેસિંગ પાઇપલાઇન્સ અમલમાં મૂકી. આમાં ઓવરટેકિંગ ઇવેન્ટની આગાહી કરવા માટે IMU ડેટાનું વિશ્લેષણ, વાહનોના અંતરનો અંદાજ કાઢવા માટે ઇમેજ પ્રોસેસિંગ અને ડીપ લર્નિંગનો ઉપયોગ કરવો, અને બ્રેકિંગ અને પ્રવેગક ઘટનાઓ શોધવા માટે લંબાઈના પ્રવેગકનું આંકડાકીય વિશ્લેષણ કરવું સામેલ હતું. આ પ્રયાસોએ ડેટા મેનિપ્યુલેશન, મશીન લર્નિંગ અને કમ્પ્યુટર વિઝનમાં મારી કુશળતામાં વધારો કર્યો અને મૂલ્યવાન ઉદ્યોગ-સ્તરની આંતરદૃષ્ટિ પૂરી પાડી.</p>" },
            workModal4: { title: "iNav લેબ્સ ખાતે ઓટોનોમસ સિસ્ટમ્સ ઇન્ટર્ન", subtitle: "જૂન 2022 - ઓગસ્ટ 2022 | ગાંધીનગર, ભારત", content: "<p>એક અદ્યતન સ્વાયત્ત ડિલિવરી રોબોટ પાઇપલાઇન ડિઝાઇન અને અમલમાં મૂકી, જેમાં ચોક્કસ પદાર્થની શોધ માટે YOLOv8 ને શ્રેષ્ઠ નેવિગેશન માટે RRT* પાથ પ્લાનિંગ સાથે એકીકૃત કરવામાં આવ્યું. મજબૂત પર્યાવરણીય મેપિંગ અને રીઅલ-ટાઇમ નિર્ણય લેવા માટે LiDAR અને ડ્યુઅલ-કેમેરા સિસ્ટમ્સ સાથે ઉન્નત જેટસન નેનો પ્લેટફોર્મ પર ROS નો લાભ લઈને પદાર્થની ઓળખમાં 96.4% ચોકસાઈ અને કાર્ય પૂર્ણ કરવાના સમયમાં 60% ઘટાડો હાંસલ કર્યો.</p>" },
            projectModal1: { title: "આરએજી-આધારિત મલ્ટિમોડલ ચેટબોટ", subtitle: "વ્યક્તિગત પ્રોજેક્ટ | એલએલએમ, આરએજી, જીપીટી-2, સેલ્સફોર્સ બીએલઆઈપી", content: "<p>આ પ્રોજેક્ટ ઔદ્યોગિક ખર્ચ વિશ્લેષણ માટે રચાયેલ એક અદ્યતન ચેટબોટ છે. તે ઉત્પાદન ઘટકોને લગતા જટિલ પ્રશ્નોનું અર્થઘટન કરવા માટે ભાષા અને દ્રષ્ટિ ક્ષમતાઓને અનન્ય રીતે જોડે છે. તેને છબીઓ અને ટેક્સ્ટ વર્ણનો આપીને, તે વિશાળ ડેટાબેઝમાંથી સંબંધિત માહિતી પુનઃપ્રાપ્ત કરી શકે છે અને સંભવિત ખર્ચ ઘટાડા પર આંતરદૃષ્ટિ ઉત્પન્ન કરી શકે છે. RAG આર્કિટેક્ચર તેને સચોટ, સંદર્ભ-જાગૃત જવાબો પ્રદાન કરવાની મંજૂરી આપે છે, જેનાથી ઓટોમોટિવ ઉપયોગના કિસ્સામાં 12 કરોડથી વધુની સંભવિત બચતની ઓળખ થાય છે.</p>" },
            projectModal2: { title: "એઆઈ સર્વેલન્સ સિસ્ટમ", subtitle: "શૈક્ષણિક પ્રોજેક્ટ | આરટી-ડીઈટીઆર, એનવીડિયા જેટસન, ટેન્સરઆરટી", content: "<p>સરહદ સુરક્ષા જેવા ઉચ્ચ-જોખમવાળા વાતાવરણ માટે વિકસિત રીઅલ-ટાઇમ, જીપીયુ-એક્સિલરેટેડ ખતરા શોધ સિસ્ટમ. આ સિસ્ટમ એનવીડિયા જેટસન એજ ડિવાઇસ પર ચાલે છે, જે તેને દૂરસ્થ સ્થળોએ જમાવટ માટે યોગ્ય બનાવે છે. તે ફાઇન-ટ્યુન કરેલ RT-DETR મોડેલનો ઉપયોગ કરે છે, જે મહત્તમ પ્રદર્શન માટે ટેન્સરઆરટી સાથે શ્રેષ્ઠ છે. 96% ચોકસાઈ સાથે, તે લાઇવ વિડિયો સ્ટ્રીમ્સમાંથી ખતરાઓને વિશ્વસનીય રીતે શોધી અને વર્ગીકૃત કરી શકે છે, જે સંરક્ષણ એપ્લિકેશનો માટે નિર્ણાયક ગુપ્ત માહિતી પ્રદાન કરે છે.</p>" },
            projectModal3: { title: "સ્વાયત્ત ડિલિવરી રોબોટ", subtitle: "યુનિવર્સિટી પ્રોજેક્ટ | YOLOv8, ROS, પાથ પ્લાનિંગ", content: "<p>આ પ્રોજેક્ટમાં એક સ્વાયત્ત ડિલિવરી રોબોટ માટે સંપૂર્ણ સોફ્ટવેર સ્ટેક બનાવવાનો સમાવેશ થાય છે. તેની ધારણા પ્રણાલી, YOLOv8 દ્વારા સંચાલિત, વસ્તુઓ શોધવા અને તેના આસપાસના વિસ્તારમાં નેવિગેટ કરવામાં 96.4% ચોકસાઈ હાંસલ કરે છે. નેવિગેશન અને નિર્ણય લેવાનું ROS ફ્રેમવર્કની અંદર નિયંત્રિત થાય છે, જ્યાં એક કાર્યક્ષમ અને શ્રેષ્ઠ પાથ પ્લાનિંગ માટે RRT* અલ્ગોરિધમનો અમલ કરવામાં આવે છે. રોબોટને ડિલિવરી કાર્યોને સ્વાયત્ત રીતે પૂર્ણ કરવા માટે જટિલ ઇન્ડોર અને આઉટડોર વાતાવરણમાં નેવિગેટ કરવા માટે ડિઝાઇન કરવામાં આવ્યો છે.</p>" },
            projectModal4: { title: "રીઅલ-ટાઇમ વિડિઓ એનાલિટિક્સ પ્લેટફોર્મ", subtitle: "વ્યક્તિગત પ્રોજેક્ટ | એનવીડિયા ડીપસ્ટ્રીમ, એડબલ્યુએસ, કાફ્કા", content: "<p>રીઅલ-ટાઇમમાં બહુવિધ વિડિયો ફીડ્સનું વિશ્લેષણ કરવા માટે એક સ્કેલેબલ, ક્લાઉડ-એકીકૃત પ્લેટફોર્મ. તે હાર્ડવેર-એક્સિલરેટેડ વિડિયો પ્રોસેસિંગ માટે એનવીડિયા ડીપસ્ટ્રીમ એસડીકેનો લાભ લે છે, જે લેટન્સીને નોંધપાત્ર રીતે ઘટાડે છે. ડેટા સ્ટ્રીમ્સ અપાચે કાફ્કાનો ઉપયોગ કરીને સંચાલિત થાય છે અને એડબલ્યુએસ પર પ્રક્રિયા કરવામાં આવે છે, જે સિસ્ટમને આડા સ્કેલ કરવાની મંજૂરી આપે છે. સાવચેત મોડેલ ઑપ્ટિમાઇઝેશન અને કાર્યક્ષમ પાઇપલાઇન ડિઝાઇન દ્વારા, સિસ્ટમ એન્ડ-ટુ-એન્ડ લેટન્સીમાં 30% ઘટાડો હાંસલ કરે છે, જે તેને ટ્રાફિક મોનિટરિંગ અને જાહેર સલામતી જેવી એપ્લિકેશનો માટે આદર્શ બનાવે છે.</p>" },
            researchModal1: { title: "સેન્સર ફ્યુઝનનો ઉપયોગ કરીને રીઅલ-ટાઇમ ઓટોનોમસ થ્રેટ ડિટેક્શન", subtitle: "પ્રકાશિત પેપર | સહ-લેખકો: ડૉ. પુનિત ગુપ્તા, પ્રો. અવિજિત માજી", content: "<p><b>અમૂર્ત:</b> આ પેપર મલ્ટિમોડલ સેન્સર્સમાંથી ડેટાને ફ્યુઝ કરીને એજ ડિવાઇસ પર રીઅલ-ટાઇમ, સ્વાયત્ત ખતરાની શોધ માટે એક નવલકથા આર્કિટેક્ચર રજૂ કરે છે. અમે એક હલકો છતાં મજબૂત ફ્રેમવર્ક પ્રસ્તાવિત કરીએ છીએ જે વિવિધ પર્યાવરણીય પરિસ્થિતિઓમાં શોધની ચોકસાઈ સુધારવા માટે RGB કેમેરામાંથી વિઝ્યુઅલ ડેટાને થર્મલ ઇમેજિંગ સાથે જોડે છે. અમારો અભિગમ એમ્બેડેડ GPU પ્લેટફોર્મ પર ગોઠવેલ એક ઑપ્ટિમાઇઝ્ડ ડીપ લર્નિંગ મોડેલનો ઉપયોગ કરે છે, જે ઓછી વિલંબતા અને ઉચ્ચ પ્રદર્શન સુનિશ્ચિત કરે છે. પ્રાયોગિક પરિણામો દર્શાવે છે કે અમારી સેન્સર ફ્યુઝન પદ્ધતિ 97% શોધ ચોકસાઈ હાંસલ કરે છે, જે સિંગલ-મોડાલિટી સિસ્ટમ્સ કરતાં વધુ સારું પ્રદર્શન કરે છે, ખાસ કરીને ઓછી-પ્રકાશ અને પ્રતિકૂળ હવામાન પરિસ્થિતિઓમાં. આ સંશોધન માનવરહિત હવાઈ વાહનો (યુએવી) અને દૂરસ્થ સુરક્ષા ચોકીઓ જેવા સંસાધન-પ્રતિબંધિત વાતાવરણમાં અદ્યતન સર્વેલન્સ ક્ષમતાઓ ગોઠવવા માટે એક સક્ષમ ઉકેલ પૂરો પાડે છે.</p>" },
            researchModal2: { title: "ઓટોમોટિવ ખર્ચ વિશ્લેષણ માટે RAG પાઇપલાઇન્સનું ઑપ્ટિમાઇઝેશન", subtitle: "ચાલુ સંશોધન | સહ-લેખક: શ્રી સમીર જિંદાલ", content: "<p><b>સારાંશ:</b> આ ચાલુ સંશોધન ખાસ કરીને ઓટોમોટિવ ક્ષેત્ર પર ધ્યાન કેન્દ્રિત કરીને, ઔદ્યોગિક એપ્લિકેશનો માટે પુનઃપ્રાપ્તિ-વૃદ્ધિ જનરેશન (RAG) સિસ્ટમ્સની કાર્યક્ષમતા અને ચોકસાઈ વધારવા માટેની પદ્ધતિઓની તપાસ કરે છે. આ અભ્યાસ ડોમેન-વિશિષ્ટ તકનીકી શબ્દભંડોળને સંભાળવા, મલ્ટિમોડલ ડેટા (દા.ત., એન્જિનિયરિંગ ડાયાગ્રામ અને સ્પષ્ટીકરણ શીટ્સ)નું અર્થઘટન કરવું, અને મોટા, અસંરચિત ડેટાબેસેસમાંથી પુનઃપ્રાપ્તિ પ્રક્રિયાને ઑપ્ટિમાઇઝ કરવા જેવી મુખ્ય પડકારોને સંબોધે છે. અમે ઉચ્ચ-ગુણવત્તાવાળા જનરેટિવ આઉટપુટ જાળવી રાખીને ગણતરીના ઓવરહેડને ઘટાડવા માટે હાઇબ્રિડ પુનઃપ્રાપ્તિ વ્યૂહરચનાઓ અને નાના ભાષા મોડેલોને ફાઇન-ટ્યુનિંગનું અન્વેષણ કરી રહ્યા છીએ. ધ્યેય એ છે કે RAG પાઇપલાઇન્સ ગોઠવવા માટે શ્રેષ્ઠ-પ્રેક્ટિસ ફ્રેમવર્ક વિકસાવવું જે ખર્ચ વિશ્લેષણ અને સપ્લાય ચેઇન ઑપ્ટિમાઇઝેશન જેવા જટિલ કાર્યો માટે વિશ્વસનીય અને કાર્યવાહી કરવા યોગ્ય આંતરદૃષ્ટિ પ્રદાન કરી શકે.</p>" },
            testimonialModal1: { title: "શ્રી સમીર જિંદાલ તરફથી ભલામણ", subtitle: "ડિરેક્ટર, VAVE @ JSW MG મોટર ઇન્ડિયા", content: "<blockquote>\"મલ્ટિમોડલ RAG ચેટબોટ અમલીકરણ પર જૈવિકના કાર્યથી અમારી ખર્ચ વિશ્લેષણ પ્રક્રિયામાં સુધારો થયો છે. AI તકનીકોની તેમની ઊંડી સમજ અને VAVE માં મારી દ્રષ્ટિથી વ્યવહારુ ઉકેલો પહોંચાડવાની ક્ષમતા તેમને એક અમૂલ્ય ટીમ સભ્ય બનાવે છે.\"</blockquote>" },
            testimonialModal2: { title: "પ્રોફેસર અવિજિત માજી તરફથી ભલામણ", subtitle: "પ્રોફેસર, સિવિલ એન્જિનિયરિંગ @ ઇન્ડિયન ઇન્સ્ટિટ્યૂટ ઓફ ટેકનોલોજી બોમ્બે", content: "<blockquote>\"IIT બોમ્બેમાં તેમના માર્ગદર્શક તરીકે, વાહન વર્તનની આગાહી માટેનો તેમનો આંકડાકીય મોડેલિંગ અભિગમ અને સ્વચાલિત ડેટા પ્રીપ્રોસેસિંગ પાઇપલાઇન્સ મજબૂત વિશ્લેષણાત્મક વિચારસરણી દર્શાવે છે. તેમના સમર્પણ, અભિગમ, નૈતિકતા અને કાર્યની પ્રશંસા કરો.\"</blockquote>" },
            testimonialModal3: { title: "ડૉ. પુનિત ગુપ્તા તરફથી ભલામણ", subtitle: "સહાયક પ્રોફેસર, કમ્પ્યુટર સાયન્સ અને એન્જિનિયરિંગ વિભાગ @ પંડિત દીનદયાળ એનર્જી યુનિવર્સિટી, ગાંધીનગર", content: "<blockquote>\"પંડિત દીનદયાળ એનર્જી યુનિવર્સિટીમાં તેમના અંતિમ વર્ષના પ્રોજેક્ટ્સ માટે જૈવિક જરીવાલાના માર્ગદર્શક તરીકે, હું જટિલ સિદ્ધાંતનો અનુવાદ કરવાની, વધુ જટિલ સંશોધન પદ્ધતિઓનો પ્રયાસ કરવાની, પ્રવચનોમાંથી શીખવાની અને અનન્ય પેપરો લખવા માટે પોતાના સંશોધન અભ્યાસ હાથ ધરવા માટે સમય કાઢવાની તેમની ક્ષમતાથી ખૂબ પ્રભાવિત થયો હતો.\"</blockquote>" },
            testimonialModal4: { title: "મહર્ષિ ઇન્ડસ્ટ્રીઝ પ્રાઇવેટ લિમિટેડ તરફથી ભલામણ", subtitle: "સંરક્ષણ ટેકનોલોજી પ્રદાતા ભારતીય સેના", content: "<blockquote>\"જૈવિકની સ્વાયત્ત દેખરેખ આર્ટિફિશિયલ ઇન્ટેલિજન્સે અમને જમ્મુ અને કાશ્મીરમાં વાસ્તવિક-વિશ્વની જમાવટમાં બજાર સ્પર્ધા સ્તર અને ચોકસાઈ સ્તર હાંસલ કરવામાં મદદ કરી. તેમની તકનીકી પ્રાવીણ્ય ખરેખર પ્રભાવશાળી છે.\"</blockquote>" },
            blogModal1: { title: "મશીન લર્નિંગ સંરક્ષણ લેન્ડસ્કેપને કેવી રીતે બદલી રહ્યું છે", subtitle: "12 સપ્ટે, 2025 | ડિફેન્સ ટેક", content: "<p>સંરક્ષણ ક્ષેત્રમાં કૃત્રિમ બુદ્ધિનું એકીકરણ આધુનિક યુદ્ધ અને સુરક્ષામાં એક ઉદાહરણીય પરિવર્તન દર્શાવે છે. પરંપરાગત દેખરેખ પદ્ધતિઓ AI-સંચાલિત સિસ્ટમોને માર્ગ આપી રહી છે જે વાસ્તવિક સમયમાં બહુવિધ સ્ત્રોતો-ડ્રોન, ઉપગ્રહો અને ગ્રાઉન્ડ સેન્સર્સમાંથી ડેટાનું વિશ્લેષણ કરી શકે છે. આ લેખ AI દેખરેખ પ્રણાલીઓના અમલીકરણની શોધ કરે છે, જે એજ કમ્પ્યુટિંગના પ્રભાવ પર ધ્યાન કેન્દ્રિત કરે છે. એનવીડિયા જેટસન જેવા ઉપકરણો પર શક્તિશાળી મોડલ્સ ગોઠવીને, અમે AI ક્ષમતાઓને સીધા ક્ષેત્રમાં લાવી શકીએ છીએ, જે ઝડપી નિર્ણય લેવાની અને સ્વાયત્ત કામગીરીને સક્ષમ કરે છે. અમે સંરક્ષણમાં AI ને આકાર આપતા નૈતિક વિચારણાઓ અને ભવિષ્યના વલણો પર પણ સ્પર્શ કરીશું.</p>" },
            blogModal2: { title: "ઓટોમોટિવમાં AI-સંચાલિત ખર્ચ ઓપ્ટિમાઇઝેશનનો ઉદય", subtitle: "05 સપ્ટે, 2025 | ઓટોમોટિવ એઆઈ", content: "<p>જ્યારે ઓટોમોટિવ ઉદ્યોગમાં AI ને ઘણીવાર સ્વ-ડ્રાઇવિંગ કાર સાથે જોડવામાં આવે છે, ત્યારે ઉત્પાદન અને વ્યવસાયિક કામગીરી પર તેની અસર એટલી જ ગહન છે. આ પોસ્ટ ખર્ચ ઑપ્ટિમાઇઝેશન માટે AI, ખાસ કરીને પુનઃપ્રાપ્તિ-વૃદ્ધિ જનરેશન (RAG) ચેટબોટ્સના ઉપયોગમાં ઊંડાણપૂર્વક અભ્યાસ કરે છે. JSW MG મોટર માટે મલ્ટિમોડલ સિસ્ટમ વિકસાવવાના મારા અનુભવ પરથી, હું ચર્ચા કરું છું કે આ સાધનો કેવી રીતે જટિલ એન્જિનિયરિંગ ડેટાનું વિશ્લેષણ કરી શકે છે, ઘટક ખર્ચની તુલના કરી શકે છે અને નોંધપાત્ર બચતની તકો ઓળખી શકે છે. આ એક નજર છે કે કેવી રીતે જનરેટિવ AI મુખ્ય ઔદ્યોગિક પડકારોનો સામનો કરવા માટે ગ્રાહક સેવાથી આગળ વધી રહ્યું છે.</p>" },
            blogModal3: { title: "તમારો પ્રથમ AI પ્રોજેક્ટ શરૂ કરતા પહેલાના મુખ્ય પગલાં", subtitle: "28 ઓગ, 2025 | એઆઈ વ્યૂહરચના", content: "<p>એક AI પ્રોજેક્ટ પર આગળ વધવું ભયાવહ હોઈ શકે છે. સફળતા ઘણીવાર મોડેલની જટિલતા કરતાં પ્રારંભિક આયોજન પર વધુ આધાર રાખે છે. આ માર્ગદર્શિકા તેમની AI યાત્રા શરૂ કરનાર કોઈપણ ટીમ માટેની આવશ્યક વિચારણાઓની રૂપરેખા આપે છે.</p><ul><li><b>એક સ્પષ્ટ વ્યવસાયિક સમસ્યાને વ્યાખ્યાયિત કરો:</b> ટેકનોલોજીથી શરૂઆત કરશો નહીં; એક સુ-વ્યાખ્યાયિત સમસ્યાથી શરૂઆત કરો જેને AI વાસ્તવિક રીતે હલ કરી શકે છે.</li><li><b>ડેટા ગુણવત્તા અને ઉપલબ્ધતાનું મૂલ્યાંકન કરો:</b> ડેટા એ AI નું જીવંત રક્ત છે. ખાતરી કરો કે તમે શરૂ કરો તે પહેલાં તમારી પાસે સ્વચ્છ, સંબંધિત અને પૂરતો ડેટા છે.</li><li><b>યોગ્ય મોડેલ અને સાધનો પસંદ કરો:</b> સરળ રેખીય રીગ્રેસનથી જટિલ ન્યુરલ નેટવર્ક સુધી, એક સાધન પસંદ કરો જે સમસ્યાના સ્કેલ અને તમારી ટીમની કુશળતાને અનુકૂળ હોય.</li><li><b>જમાવટ અને દેખરેખ માટે યોજના:</b> એક મોડેલ ત્યારે જ ઉપયોગી છે જો તે ગોઠવવામાં આવ્યું હોય. તમે તેને વર્કફ્લોમાં કેવી રીતે એકીકૃત કરશો અને સમય જતાં તેની કામગીરીનું નિરીક્ષણ કરશો તેની યોજના બનાવો.</li><li><b>નાનાથી શરૂઆત કરો:</b> મૂલ્ય દર્શાવવા અને સ્કેલ અપ કરતા પહેલા જોખમ ઘટાડવા માટે એક ખ્યાલના પુરાવા સાથે શરૂઆત કરો.</li></ul>" },
            serviceModal1: { title: "એઆઈ અને મશીન લર્નિંગ ડેવલપમેન્ટ", subtitle: "કસ્ટમ મોડેલ બનાવટ અને સિસ્ટમ એકીકરણ", content: "<p>હું તમારી ચોક્કસ જરૂરિયાતોને અનુરૂપ એઆઈ અને મશીન લર્નિંગ ઉકેલોનો એન્ડ-ટુ-એન્ડ વિકાસ પ્રદાન કરું છું. આમાં શામેલ છે:</p><ul><li>આગાહી, વર્ગીકરણ અને રીગ્રેસન કાર્યો માટે કસ્ટમ આગાહી મોડલ્સનું નિર્માણ અને તાલીમ.</li><li>ટેન્સરફ્લો અને પાઇટોર્ચનો ઉપયોગ કરીને જટિલ સમસ્યાઓ માટે અદ્યતન ડીપ લર્નિંગ આર્કિટેક્ચરનો વિકાસ.</li><li>ટેક્સ્ટ વિશ્લેષણ, ભાવના વિશ્લેષણ અને ચેટબોટ વિકાસ માટે નેચરલ લેંગ્વેજ પ્રોસેસિંગ (એનએલપી) ઉકેલો બનાવવું.</li><li>સીમલેસ ઓટોમેશન માટે તમારા હાલના સોફ્ટવેર અને બિઝનેસ વર્કફ્લોમાં એઆઈ મોડલ્સને એકીકૃત કરવું.</li></ul>" },
            serviceModal2: { title: "કમ્પ્યુટર વિઝન અને ઇમેજિંગ સિસ્ટમ્સ", subtitle: "ઓબ્જેક્ટ ડિટેક્શન, સેગમેન્ટેશન અને એનાલિસિસ", content: "<p>હું એવી સિસ્ટમ્સ બનાવવામાં નિષ્ણાત છું જે વાસ્તવિક દુનિયામાંથી વિઝ્યુઅલ ડેટાનું અર્થઘટન કરી શકે અને તેના પર કાર્ય કરી શકે. આ ક્ષેત્રમાં મારી સેવાઓમાં શામેલ છે:</p><ul><li>યોલો અને આરટી-ડીઈટીઆર જેવા અત્યાધુનિક મોડલ્સનો ઉપયોગ કરીને રીઅલ-ટાઇમ ઓબ્જેક્ટ ડિટેક્શન અને ટ્રેકિંગ માટે ઉચ્ચ-પ્રદર્શન સિસ્ટમ્સનો વિકાસ.</li><li>વિગતવાર દ્રશ્ય સમજ અને વિશ્લેષણ માટે ઇમેજ સેગમેન્ટેશનનો અમલ.</li><li>આરજીબી કેમેરા, થર્મલ ઇમેજર્સ અને લિડાર સહિત વિવિધ પ્રકારના સેન્સર્સમાંથી ડેટાની પ્રક્રિયા અને વિશ્લેષણ.</li><li>રોબોટિક્સ, સર્વેલન્સ અને આઇઓટીમાં ઓછી-વિલંબતાવાળા એપ્લિકેશનો માટે એજ ઉપકરણો પર કમ્પ્યુટર વિઝન મોડલ્સની ગોઠવણી.</li></ul>" },
            serviceModal3: { title: "અદ્યતન એઆઈ સંશોધન", subtitle: "પીએચડી આકાંક્ષાઓ અને ઉદ્યોગ સહયોગ", content: "<p>કૃત્રિમ બુદ્ધિ માટેનો મારો જુસ્સો એપ્લિકેશનથી આગળ વધીને મૂળભૂત સંશોધનમાં ઊંડા રસ સુધી વિસ્તરે છે. હું સક્રિયપણે પીએચડી કરવાની તૈયારી કરી રહ્યો છું જેથી કાર્યક્ષમ ડીપ લર્નિંગ આર્કિટેક્ચર અને મલ્ટિમોડલ એઆઈ પર ધ્યાન કેન્દ્રિત કરીને ક્ષેત્રની પ્રગતિમાં યોગદાન આપી શકું.</p><p>હું શૈક્ષણિક સિદ્ધાંત અને વાસ્તવિક-દુનિયાની અસર વચ્ચેના અંતરને દૂર કરતી પડકારરૂપ સંશોધન સમસ્યાઓ પર ઉદ્યોગ ભાગીદારો સાથે સહયોગ કરવા ઉત્સુક છું. જો તમારી પાસે કોઈ જટિલ પડકાર છે જેને નવલકથા ઉકેલો અને સખત તપાસની જરૂર હોય, તો અમે કેવી રીતે સાથે મળીને કામ કરી શકીએ તે અંગે ચર્ચા કરવા માટે હું ઉત્સાહિત થઈશ.</p>" }
        }
    };

    // --- SCROLL ANIMATION ---
    const animatedElements = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    // --- 'READ MORE' ON CARDS ---
    document.querySelectorAll('.project-content p').forEach(p => {
        if (p.scrollHeight > p.clientHeight) {
            p.style.cursor = 'pointer';
            p.title = 'Click to read more';
            p.addEventListener('click', (e) => {
                e.stopPropagation();
                p.classList.toggle('expanded');
            });
        }
    });

    // --- MOBILE MENU ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        const closeMenu = () => {
            document.body.classList.remove('modal-open');
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        };
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.contains('active');
            if (isActive) {
                closeMenu();
            } else {
                document.body.classList.add('modal-open');
                navLinks.classList.add('active');
                menuToggle.classList.add('active');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
    }

    // --- FAQ TOGGLE ---
    document.querySelectorAll('.faq-item .faq-question').forEach(question => {
        question.addEventListener('click', () => {
            question.parentElement.classList.toggle('active');
        });
    });

    // --- TYPING ANIMATION LOGIC ---
    const typeAndDelete = async (element, text, typeSpeed = 80, pause = 1500, deleteSpeed = 40) => {
        element.classList.add('typing-cursor');
        for (let i = 0; i < text.length; i++) {
            element.textContent += text.charAt(i);
            await new Promise(resolve => setTimeout(resolve, typeSpeed));
        }
        element.classList.remove('typing-cursor');
        await new Promise(resolve => setTimeout(resolve, pause));
        element.classList.add('typing-cursor');
        for (let i = text.length; i > 0; i--) {
            element.textContent = text.substring(0, i - 1);
            await new Promise(resolve => setTimeout(resolve, deleteSpeed));
        }
        element.classList.remove('typing-cursor');
    };

    const greetingLoop = async () => {
        const greetingElement = document.getElementById('animated-greeting');
        if (!greetingElement) return;
        const greetingKeys = ['en', 'de', 'hi', 'gu'];
        let currentIndex = 0;
        while (true) {
            const lang = greetingKeys[currentIndex];
            const text = translations[lang]?.greetingLoop || translations['en'].greetingLoop;
            await typeAndDelete(greetingElement, text);
            await new Promise(resolve => setTimeout(resolve, 500));
            currentIndex = (currentIndex + 1) % greetingKeys.length;
        }
    };

    function typeText(element, key, speed = 50, callback) {
        if (!element) return;
        const lang = document.documentElement.lang || 'en';
        const text = (translations[lang] && translations[lang][key]) ? translations[lang][key] : translations['en'][key];
        element.classList.add('typing-cursor');
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i); i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing-cursor');
                if (callback) callback();
            }
        }
        type();
    }

    function runHeroTypingAnimation() {
        document.getElementById('profession-title').textContent = '';
        document.getElementById('profession-subtitle').textContent = '';
        document.getElementById('profession-description').textContent = '';
        document.getElementById('location-title').textContent = '';
        document.querySelector('.location-text').textContent = '';
        document.getElementById('location-description').classList.remove('typing-complete');
        
        setTimeout(() => {
            typeText(document.getElementById('profession-title'), 'heroProfessionTitle', 80, () => 
            setTimeout(() => {
                typeText(document.getElementById('profession-subtitle'), 'heroProfessionSubtitle', 80, () => 
                setTimeout(() => {
                    typeText(document.getElementById('profession-description'), 'heroProfessionDesc', 40, () => 
                    setTimeout(() => {
                        typeText(document.getElementById('location-title'), 'heroLocationTitle', 80, () => 
                        setTimeout(() => {
                            typeText(document.querySelector('.location-text'), 'heroLocationDesc', 80, () => {
                                const locDesc = document.getElementById('location-description');
                                if(locDesc) locDesc.classList.add('typing-complete');
                            });
                        }, 300));
                    }, 500));
                }, 300));
            }, 300));
        }, 100);
    }

    // --- LANGUAGE SWITCHER ---
    const langButtons = document.querySelectorAll('.lang-btn');
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = (translations[lang] && translations[lang][key]) ? translations[lang][key] : translations['en'][key];
            if (translation) element.textContent = translation;
        });
        runHeroTypingAnimation();
    };
    langButtons.forEach(button => button.addEventListener('click', (e) => setLanguage(e.target.dataset.lang)));

    // --- THEME SWITCHER ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        darkModeToggle.checked = theme === 'dark';
    };
    darkModeToggle.addEventListener('change', () => setTheme(darkModeToggle.checked ? 'dark' : 'light'));

    // --- MODAL ---
    const modalOverlay = document.getElementById('details-modal-overlay');
    if (modalOverlay) {
        const modalTriggers = document.querySelectorAll('.modal-trigger');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalHeader = document.getElementById('modal-header');
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalSubtitle = document.getElementById('modal-subtitle');
        const modalContentBody = document.getElementById('modal-content-body');
        
        const openModal = (trigger) => {
            const modalKey = trigger.dataset.modalKey;
            const lang = document.documentElement.lang || 'en';
            const modalData = (translations[lang] && translations[lang][modalKey]) ? translations[lang][modalKey] : translations['en'][modalKey];
            if (!modalData) return;

            const image = trigger.querySelector('img')?.src || '';
            if (image) {
                modalHeader.classList.remove('no-image');
                modalImg.src = image;
                modalImg.alt = modalData.title;
            } else {
                modalHeader.classList.add('no-image');
            }

            modalTitle.textContent = modalData.title || '';
            modalSubtitle.innerHTML = modalData.subtitle || '';
            modalContentBody.innerHTML = modalData.content || '';
            
            document.body.classList.add('modal-open');
            modalOverlay.classList.add('show');
        };

        const closeModal = () => {
            document.body.classList.remove('modal-open');
            modalOverlay.classList.remove('show');
        };

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target.closest('.btn-card-link')) return;
                openModal(trigger);
            });
        });

        if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeModal());
        document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());
    }

    // --- CTA BUTTON ---
    document.querySelectorAll('.cta-btn, .contact-btn').forEach(button => {
         if (button.getAttribute('href') === 'assets/Jaivik_Jariwala_Resume.pdf') return; // Skip download button
         button.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- INITIAL PAGE LOAD ---
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    greetingLoop();
});