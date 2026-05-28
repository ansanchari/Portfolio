import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-[#121212] text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>ansanchari.</title>
        <meta
          name="description"
          content="Sanchari Mukherjee is an AI Engineer and Software Developer skilled in agentic workflows, multi-agent state machines, retrieval-augmented generation and fullstack projects."
        />
        <meta
          name="keywords"
          content="ai, artificial intelligence, python, streamlit, langchain, crewai, chromadb, rag, agentic workflows, nextjs, react, portfolio, software development, fullstack"
        />
        <meta name="author" content="Sanchari Mukherjee" />
        <meta name="theme-color" content="#121212" />
        
        <meta property="og:title" content="Sanchari Mukherjee | AI & Software Engineer" />
        <meta property="og:description" content="Portfolio showcasing agentic workflows, RAG pipelines, and full-stack AI applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-future-domain.com" />
        <meta property="og:image" content="https://your-future-domain.com/social-preview.jpg" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;