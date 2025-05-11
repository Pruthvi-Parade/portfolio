const AboutPage = () => {
  const aboutContent = [
    {
      id: "intro",
      heading: "Hey there! 👋 I'm Pruthvi",
      description:
        "I'm a Software Engineer with over 2.5 years of experience in AI-driven applications and full-stack development. I specialize in developing RAG systems, Agentic AI workflows, and LLM integrations. Currently, I'm working as a Gen-AI Developer, building scalable AI solutions that deliver tangible business value through intelligent automation.",
    },
    {
      id: "motivation",
      heading: "What makes me tick? 🚀",
      description:
        "I love taking on challenges that push the boundaries of what's possible with technology. Whether it's creating intelligent document systems, optimizing web architectures, or building engaging user interfaces, I bring a problem-solver's mindset and an enthusiast's energy to every project.",
    },
    {
      id: "stack",
      heading: "My Tech Arsenal 💻",
      description:
        "I possess a robust skill set that bridges AI technologies and full-stack development. My expertise includes AI/ML technologies like LangChain, LangGraph, and Retrieval Augmented Generation (RAG), as well as full-stack frameworks such as Next.js and ReactJS. I am proficient in programming languages like JavaScript and Python, and I leverage cloud services like AWS and Firebase to build scalable applications. My work often involves integrating AI models with web applications to create intelligent, user-friendly solutions.",
    },
    {
      id: "beyond",
      heading: "Beyond the Code 🏀",
      description:
        "When I'm not immersed in code, you might catch me on the basketball court or helping organize cultural festivals. I believe that being well-rounded makes us better developers - after all, the best solutions come when we bring different perspectives together! Currently pursuing my MCA with a CGPA of 8.2, I'm always eager to learn and grow. I'm looking for opportunities where I can push my limits, contribute to meaningful projects, and continue my journey in the ever-evolving tech landscape. Let's build something awesome together! 🚀",
    },
  ];

  return (
    // Using regular CSS classes now instead of Tailwind (adjust if you still use Tailwind)
    <div className="about-container">
      <h1 className="about-main-heading">
        A Little Bit About Me
      </h1>

      <div className="about-sections-wrapper">
        {aboutContent.map((section, index) => (
          // Add a common class for CSS targeting and animation
          <section key={section.id || index} className="about-section">
             <h2 className="about-section-heading">
               {/* Optional: Styling heading - keep it simple */}
               {section.heading}
             </h2>
             <p className="about-section-description">
               {section.description}
             </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;