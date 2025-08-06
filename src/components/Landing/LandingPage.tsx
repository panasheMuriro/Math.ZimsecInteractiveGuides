import { Award, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const neubrutalismPalette = {
    background: "#f4f1de",
    primary: "#e07a5f",
    secondary: "#3d405b",
    accent: "#81b29a",
    text: "#3d405b",
    border: "#000000",
    shadow: "#f2cc8f",
  };

  const screenshotData = [
    {
      title: "Screenshot1",
      bgColor: neubrutalismPalette.secondary,
      rotation: "-rotate-6",
      shadowColor: neubrutalismPalette.primary,
      imageUrl: "picture6.png",
    },
    {
      title: "Interactive Section",
      bgColor: neubrutalismPalette.accent,
      rotation: "rotate-3",
      shadowColor: neubrutalismPalette.secondary,
      imageUrl: "picture2.png",
    },
    {
      title: "Quiz Challenge",
      bgColor: neubrutalismPalette.secondary,
      rotation: "-rotate-3",
      shadowColor: neubrutalismPalette.accent,
      imageUrl: "picture1.png",
    },
    {
      title: "Progress Tracking",
      bgColor: neubrutalismPalette.accent,
      rotation: "rotate-6",
      shadowColor: neubrutalismPalette.primary,
      imageUrl: "picture3.png",
    },
    {
      title: "Concept Explanation",
      bgColor: neubrutalismPalette.secondary,
      rotation: "-rotate-2",
      shadowColor: neubrutalismPalette.accent,
      imageUrl: "picture5.png",
    },
    {
      title: "Practice Problems",
      bgColor: neubrutalismPalette.accent,
      rotation: "rotate-4",
      shadowColor: neubrutalismPalette.secondary,
      imageUrl: "picture4.png",
    },
  ];

  const topics = [
    "Real Numbers",
    "Sets",
    "Financial Mathematics",
    "Measures and Mensuration",
    "Graphs",
    "Variation",
    "Algebra",
    "Geometry",
    "Statistics",
    "Trigonometry",
    "Vectors",
    "Matrices",
    "Transformation",
    "Probability",
  ];

  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopicIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <div
      className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center p-6 lg:p-0 relative overflow-hidden"
      style={{ backgroundColor: neubrutalismPalette.background }}
    >
      {/* Decorative elements (simple shapes for visual interest) */}
      <div
        className="absolute top-10 left-10 w-24 h-24 border-4 rounded-full hidden md:block"
        style={{
          borderColor: neubrutalismPalette.accent,
          boxShadow: `8px 8px 0 0 ${neubrutalismPalette.secondary}`,
        }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border-4 rounded-lg transform rotate-12 hidden md:block"
        style={{
          borderColor: neubrutalismPalette.primary,
          boxShadow: `8px 8px 0 0 ${neubrutalismPalette.accent}`,
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left p-6 lg:p-24 gap-6 z-10">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight border-b-4 pb-2"
          style={{
            borderColor: neubrutalismPalette.primary,
            color: neubrutalismPalette.secondary,
          }}
        >
          ZIMSEC MATHEMATICS <br className="hidden lg:block"></br> INTERACTIVE
          GUIDE
        </h1>
        <div
          className="inline-flex items-center px-6 py-3 rounded-full text-md font-bold border-2"
          style={{
            backgroundColor: neubrutalismPalette.accent,
            color: neubrutalismPalette.text,
            borderColor: neubrutalismPalette.border,
            boxShadow: `4px 4px 0 0 ${neubrutalismPalette.secondary}`,
          }}
        >
          <Award className="w-5 h-5 mr-2" />
          O-Level Excellence
        </div>
        <p
          className="text-base sm:text-lg lg:text-xl max-w-prose"
          style={{ color: neubrutalismPalette.text }}
        >
          Transform your O-Level math journey with over 170 interactive
          components covering Forms 1-4. Explore topics like:{" "}
          <span
            className="font-bold"
            style={{ color: neubrutalismPalette.primary }}
          >
            {topics[currentTopicIndex]}
          </span>
          . Revising has never been more fun! This app is completely free to
          use.
        </p>
        <Link
          to="/home"
          className="flex items-center justify-center px-10 py-5 rounded-full text-white font-bold text-xl border-2 transition-all transform
                     hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95"
          style={{
            backgroundColor: neubrutalismPalette.primary,
            borderColor: neubrutalismPalette.border,
            boxShadow: `8px 8px 0 0 ${neubrutalismPalette.shadow}`,
          }}
        >
          <Play className="w-6 h-6 mr-3" />
          Start Learning Now
        </Link>
      </div>

      {/* Image/Placeholder Section - Now with six rotated placeholders with mobile aspect ratio */}
      <div className="flex flex-wrap items-center justify-center p-6 lg:p-0 z-10 space-y-4 lg:space-y-0 lg:flex-row lg:flex-wrap lg:gap-4 lg:max-w-xl">
        {screenshotData.map((screenshot, index) => (
          <div
            key={index}
            className={`relative w-32 h-48 sm:w-36 sm:h-56 lg:w-40 lg:h-64 border-4 flex items-center justify-center overflow-hidden
                       transition-all duration-300 ${screenshot.rotation}`}
            style={{
              backgroundColor: screenshot.bgColor,
              borderColor: neubrutalismPalette.border,
              boxShadow: `8px 8px 0 0 ${screenshot.shadowColor}`,
              borderRadius: "1rem",
            }}
          >
            <img
              src={screenshot.imageUrl}
              alt={screenshot.title}
              style={{ objectPosition: "top" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
