import { useEffect, useState } from "react";

const AboutPage = () => {
  const [sections, setSections] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const aboutContent = [
    {
      heading: "Hey there! 👋 I'm Pruthvi",
      description:
        "I'm a Full Stack Developer with a passion for turning AI innovations into practical, real-world solutions. Think of me as the bridge between cutting-edge technology and the applications that make our lives easier! Currently working as a Junior Full Stack Developer, where I'm building AI-powered applications that help businesses streamline their operations. My recent work focuses on document processing systems and performance optimization tools - because who doesn't love making things faster and smarter?",
    },
    {
      heading: "What makes me tick? 🚀",
      description:
        "I love taking on challenges that push the boundaries of what's possible with technology. Whether it's creating intelligent document systems, optimizing web architectures, or building engaging user interfaces, I bring a problem-solver's mindset and an enthusiast's energy to every project.",
    },
    {
      heading: "My Tech Arsenal 💻",
      description:
        "I wield a versatile stack including Next.js, Node.js, Python, and AWS, but what really gets me excited is how we can use these tools alongside AI technologies to create something truly innovative. I believe in writing clean, maintainable code that makes debugging a breeze (your future self will thank you!).",
    },
    {
      heading: "Beyond the Code 🏀",
      description:
        "When I'm not immersed in code, you might catch me on the basketball court or helping organize cultural festivals. I believe that being well-rounded makes us better developers - after all, the best solutions come when we bring different perspectives together! Currently pursuing my MCA with a solid 7.9 CGPA, I'm always eager to learn and grow. I'm looking for opportunities where I can push my limits, contribute to meaningful projects, and continue my journey in the ever-evolving tech landscape. Let's build something awesome together! 🚀",
    },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const currentSection = aboutContent[currentSectionIndex];
    const fullText = `${currentSection.heading}\n\n${currentSection.description}`;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setCurrentText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(typeText, 5);
      } else {
        setIsTyping(false);
        // Add completed section to sections array
        setSections((prev) => [
          ...prev,
          {
            heading: currentSection.heading,
            description: currentSection.description,
          },
        ]);
        // Move to next section after a delay
        if (currentSectionIndex < aboutContent.length - 1) {
          setTimeout(() => {
            setCurrentSectionIndex((prev) => prev + 1);
            setCurrentText("");
            setIsTyping(true);
          }, 1000);
        }
      }
    };

    if (isTyping) {
      timer = setTimeout(typeText, 100);
    }

    return () => clearTimeout(timer);
  }, [currentSectionIndex, isTyping]);
  return (
    <div>
      <h3 className="m-1">A Little Bit About Me</h3>
      {/* Completed sections */}
      {sections.map((section, index) => (
        <div key={index} className="whitespace-pre-line">
          <h2 className="font-bold mb-2">{section.heading}</h2>
          <p>{section.description}</p>
        </div>
      ))}

      {/* Currently typing section */}
      {isTyping && (
        <div className="whitespace-pre-line">
          {currentText}
          <span className="inline-block w-2 h-4 ml-1 bg-black animate-pulse" />
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
