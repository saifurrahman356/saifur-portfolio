import express, { type Request, type Response } from "express";
import nunjucks from "nunjucks";
import path from "node:path";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const root = path.resolve(__dirname, "..");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(root, "public")));

nunjucks.configure(path.join(root, "views"), {
  autoescape: true,
  express: app,
  noCache: process.env.NODE_ENV !== "production",
});
app.set("view engine", "njk");

const profile = {
  name: "Md Saifur Rahman",
  role: "Lead Software Engineer · Software Architect",
  location: "Munich, Germany",
  email: "msaifurr@yahoo.com", // Change this before publishing if you prefer another public email.
  intro:
    "I design and build reliable software systems, lead engineering teams, and turn complex business problems into scalable products.",
  summary:
    "Software engineering professional with 20 years of experience across backend platforms, distributed systems, cloud infrastructure and web applications. Experienced in microservices architecture, technical leadership, mentoring and the full software development lifecycle.",
  skills: [
    {
      group: "Backend Engineering",
      items: [
        "Java",
        "JEE / Jakarta EE",
        "Spring Framework",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "SOAP APIs",
        "GraphQL",
        "Node.js",
        "Express.js",
        "NestJs",
        "Python",
        "Microservices Development",
        "API Development & Integration",
        "Asynchronous Processing",
        "Concurrency & Multithreading",
        "Performance Optimization",
        "Transaction Management",
        "Agentic Software Development",
      ],
    },
    {
      group: "Software Architecture & Design",
      items: [
        "Software Architecture",
        "Solution Architecture",
        "System Design",
        "Microservices Architecture",
        "Distributed Systems",
        "Event-Driven Architecture",
        "Domain-Driven Design (DDD)",
        "Clean Architecture",
        "Hexagonal Architecture",
        "CQRS",
        "Event Sourcing",
        "Domain Events",
        "GoF Design Patterns",
        "SOLID Principles",
        "Object-Oriented Design",
        "High Availability & Scalability",
        "Resilience & Fault Tolerance",
        "Cloud-Native Architecture",
      ],
    },
    {
      group: "Cloud, DevOps & Infrastructure",
      items: [
        "AWS",
        "Amazon S3",
        "Amazon EC2",
        "Amazon EKS",
        "Amazon ECS",
        "AWS Lambda",
        "AWS IAM",
        "AWS CloudFormation",
        "AWS Bedrock",
        "AWS SageMaker",
        "Docker",
        "Kubernetes",
        "Helm",
        "Terraform",
        "Infrastructure as Code (IaC)",
        "CI/CD",
        "Jenkins",
        "GitHub Actions",
        "GitOps",
        "Argo CD",
      ],
    },
    {
      group: "Data Engineering & AI Integration",
      items: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Microsoft SQL Server",
        "Redis",
        "Elasticsearch",
        "OpenSearch",
        "Algolia",
        "Database Design",
        "Data Modeling",
        "SQL Optimization",
        "Apache Spark",
        "Data Processing",
        "Vector Databases",
        "Vector Search",
        "Embeddings",
        "Semantic Search",
        "Retrieval-Augmented Generation (RAG)",
        "Pinecone",
        "pgvector",
      ],
    },
    {
      group: "Messaging & Integration",
      items: [
        "Apache Kafka",
        "Kafka Streams",
        "RabbitMQ",
        "Message-Driven Architecture",
        "Event Streaming",
        "Distributed Messaging",
        "Asynchronous Communication",
        "API Gateway",
        "Service Integration",
        "Enterprise Integration Patterns",
        "Webhooks",
        "Real-Time Data Processing",
        "Stream Processing",
        "AI Service Integration",
        "LLM Function Calling",
        "Model Context Protocol (MCP)",
        "AI Agent Integration",
        "LangChain",
        "LangGraph",
        "Spring AI",
      ],
    },
    {
      group: "Frontend & Web Technologies",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "HTML5",
        "CSS3",
        "Node.js",
        "Express.js",
        "Nunjucks",
        "Responsive Web Design",
        "Server-Side Rendering",
        "Frontend Architecture",
        "Component-Based Development",
        "REST API Integration",
        "State Management",
        "Web Application Security",
        "UI/UX Collaboration",
        "Progressive Web Applications",
        "AI-Powered User Interfaces",
      ],
    },
    {
      group: "Quality Engineering & Testing",
      items: [
        "JUnit 5",
        "Mockito",
        "AssertJ",
        "Test-Driven Development (TDD)",
        "Behavior-Driven Development (BDD)",
        "Unit Testing",
        "Integration Testing",
        "Contract Testing",
        "End-to-End Testing",
        "Test Automation",
        "Performance Testing",
        "Load Testing",
        "Code Reviews",
        "Static Code Analysis",
        "SonarQube",
        "Test Coverage",
        "API Testing",
        "LLM Evaluation",
      ],
    },
    {
      group: "Technical Leadership & Collaboration",
      items: [
        "Technical Leadership",
        "Team Leadership",
        "Technical Mentoring",
        "Developer Coaching",
        "Architecture Reviews",
        "Technical Decision Making",
        "Engineering Best Practices",
        "Agile / Scrum",
        "Sprint Planning",
        "Project Coordination",
        "Stakeholder Communication",
        "Cross-functional Collaboration",
        "Technical Documentation",
        "Code Quality Management",
        "Problem Solving",
        "Knowledge Sharing",
        "AI Adoption Strategy",
        "Technical Roadmapping",
      ],
    },
  ],
  experience: [
    {
      role: "Senior Developer / Lead Developer",
      company: "CarSync GmbH",
      place: "Munich, Germany",
      period: "Apr 2022 – 2026",
      points: [
        "Designed microservices architecture, infrastructure and interfaces across system components.",
        "Built SaaS fleet dashboards for total cost of ownership (TCO) insights and real-time fleet monitoring with Kafka streaming.",
        "Worked with Spring Boot, MongoDB and MySQL; contributed to an OCR and machine-learning document scanner for automated data extraction.",
        "Led architecture decisions, code reviews and mentoring with a focus on clean architecture, quality, security and maintainability.",
      ],
    },
    {
      role: "Senior Full Stack Developer",
      company: "MAN Truck & Bus SE",
      place: "Munich, Germany",
      period: "Sep 2018 – Mar 2022",
      points: [
        "Built backend microservices processing and storing millions of vehicle maintenance and diagnostic trouble code (DTC) records using Kafka, Spring Boot, MongoDB and PostgreSQL.",
        "Developed vehicle-health analytics and dashboards with AWS Athena, Spring Boot and React.",
        "Implemented scheduled data collection and anomaly reporting using S3, Spring Boot and PostgreSQL.",
        "Delivered web applications for fleet and workshop users and helped evolve the supporting cloud infrastructure.",
      ],
    },
    {
      role: "Senior Backend Developer",
      company: "KI Labs GmbH",
      place: "Munich, Germany",
      period: "Nov 2017 – Aug 2018",
      points: [
        "Designed and implemented a chemical B2B marketplace using Django and Python.",
        "Worked on real-time logistics software for DHL using REST APIs, microservices and React.",
      ],
    },
    {
      role: "Senior Software Developer",
      company: "Mühlbauer ID Services",
      place: "Rostock, Germany",
      period: "Jan 2013 – Oct 2017",
      points: [
        "Delivered business-critical, high-performance ABIS solutions used for large-scale identity projects.",
        "Integrated and adapted ABIS SDK components to build scalable solutions and reduce customer costs.",
      ],
    },
    {
      role: "Lead Engineer",
      company: "Samsung Electronics",
      place: "Dhaka, Bangladesh",
      period: "Dec 2011 – Dec 2012",
      points: [
        "Provided high-level architecture and detailed application design.",
        "Led and mentored project teams and technical team members.",
      ],
    },
    {
      role: "Development Team Leader / Software Engineer",
      company: "Dohatec New Media",
      place: "Dhaka, Bangladesh",
      period: "Feb 2005 – Dec 2011",
      points: [
        "Worked across software development and team leadership responsibilities.",
      ],
    },
  ],
  projects: [
    {
      number: "01",
      title: "Fleet Intelligence Platform",
      category: "SaaS · Microservices · Kafka",
      description:
        "Fleet dashboards and real-time monitoring that help customers understand total cost of ownership and vehicle operations.",
      stack: ["Java", "Spring Boot", "Kafka", "MongoDB", "MySQL"],
    },
    {
      number: "02",
      title: "Vehicle Diagnostics Analytics",
      category: "Data Engineering · Cloud",
      description:
        "Data pipelines and analytics for large volumes of vehicle maintenance and diagnostic records, including anomaly reporting.",
      stack: ["AWS", "S3", "Athena", "PostgreSQL", "React"],
    },
    {
      number: "03",
      title: "Intelligent Document Processing",
      category: "OCR · Machine Learning",
      description:
        "A document-scanning workflow using OCR and machine-learning techniques to automate data extraction.",
      stack: ["Spring Boot", "OCR", "Machine Learning"],
    },
  ],
  languages: ["Bangla — Native", "English — Fluent", "German — Fluent"],
};

app.get("/", (_req: Request, res: Response) => {
  res.render("index.njk", { profile });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use((_req: Request, res: Response) => {
  res.status(404).render("404.njk", { profile });
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
