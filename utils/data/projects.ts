import shopifyImg from "../../public/shopify-price-transformer.png";
import project1Img from "../../public/project1.png";

export interface ProjectData {
  slug: string;
  title: string;
  tag: string;
  tagLine: string;
  description: string;
  tech: string[];
  link: string;
  image: any;
  overview: string;
  features: string[];
  problemSolved: string;
  techStackDetailed: {
    framework: string;
    design: string;
    backend: string;
    api: string;
    database: string;
    tools: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    slug: "shopify-price-transformer",
    title: "Shopify Price Transformer",
    tag: "Dynamic Pricing Automation",
    tagLine: "Elevating Merchant Control over Dynamic Pricing",
    description:
      "A high-performance full-stack Shopify application designed to automate complex pricing transformations. Leverages Shopify's Admin GraphQL API to apply bulk discounts via merchant-defined tags.",
    tech: ["Remix", "Shopify Polaris", "GraphQL", "Prisma"],
    link: "/projects/shopify-price-transformer",
    image: shopifyImg,
    overview:
      "A high-performance, full-stack Shopify application designed to automate complex pricing transformations. The app allows merchants to apply bulk discounts (e.g., 10%, 20%) to products based on custom tags (like sale-20), automatically archiving original prices in the 'Compare at price' field to ensure transparency and drive sales.",
    features: [
      "Tag-Driven Automation: Seamlessly maps merchant-defined tags to specific discount percentages.",
      "Bulk Processing Engine: High-performance backend service that leverages Shopify's Admin GraphQL API for efficient processing of thousands of variants.",
      "Premium Admin Interface: A professional, user-centric dashboard built with Shopify Polaris, featuring real-time configuration and sync controls.",
      "Data Integrity: Intelligent logic ensures original prices are always backed up before applying new discounts, preventing data loss.",
    ],
    problemSolved:
      "Manual price adjustments in Shopify are time-consuming and prone to human error, especially during promotional seasons. This app transforms a multi-hour manual task into a single-click automated workflow, allowing merchants to scale their marketing efforts effortlessly.",
    techStackDetailed: {
      framework: "Remix (React + Vite)",
      design: "Shopify Polaris + Polaris Icons",
      backend: "Node.js Service Layer",
      api: "Admin GraphQL API (Custom Bulk Operations)",
      database: "Prisma + SQLite (for session management)",
      tools: "Shopify CLI 3.x, MCP-validated code structures",
    },
  },
  {
    slug: "job-tracker-saas",
    title: "Job Tracker SaaS",
    tag: "Revenue-Driven Platform",
    tagLine: "Architecting Scalable Job Search Orchestration",
    description:
      "A full-scale job tracking ecosystem featuring secure JWT authentication, role-based access, and a data-driven dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Auth0"],
    link: "https://job-tracker1.onrender.com/all-jobs",
    image: project1Img,
    overview:
      "A comprehensive SaaS platform designed to streamline the job application process. It provides users with a centralized dashboard to track applications, manage interview schedules, and analyze search performance with real-time data visualization.",
    features: [
      "Secure Authentication: Multi-factor authentication via Auth0 integration.",
      "Dynamic Dashboard: Real-time analytics and status tracking components.",
      "Role-Based Access: Granular permissions for different user tiers.",
      "Optimized Performance: Server-side rendering and efficient state management.",
    ],
    problemSolved:
      "Traditional spreadsheets for job tracking are inefficient and lack analytical depth. This SaaS platform offers a structured, scalable solution for modern job seekers to manage high-volume application cycles with precision.",
    techStackDetailed: {
      framework: "React / Next.js",
      design: "Styled Components",
      backend: "Node.js / Express",
      api: "RESTful API with JWT Security",
      database: "MongoDB (Atlas)",
      tools: "Vercel, Git, Render",
    },
  },
];
