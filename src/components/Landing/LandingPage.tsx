import { Award, Play } from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  // Define the neubrutalism color palette
  const neubrutalismPalette = {
    background: "#f4f1de", // Creamy off-white
    primary: "#e07a5f",    // Coral red
    secondary: "#3d405b",  // Deep blue
    accent: "#81b29a",     // Sage green
    text: "#3d405b",       // Deep blue for main text
    border: "#000000",      // Pure black for strong borders
    shadow: "#f2cc8f",     // Sandy yellow for prominent shadows
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center p-6 lg:p-0 relative overflow-hidden"
      style={{ backgroundColor: neubrutalismPalette.background }}
    >
      {/* Decorative elements (simple shapes for visual interest) */}
      <div
        className="absolute top-10 left-10 w-24 h-24 border-4 rounded-full hidden md:block"
        style={{ borderColor: neubrutalismPalette.accent, boxShadow: `8px 8px 0 0 ${neubrutalismPalette.secondary}` }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border-4 rounded-lg transform rotate-12 hidden md:block"
        style={{ borderColor: neubrutalismPalette.primary, boxShadow: `8px 8px 0 0 ${neubrutalismPalette.accent}` }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left p-6 lg:p-24 gap-6 z-10">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight border-b-4 pb-2"
          style={{ borderColor: neubrutalismPalette.primary, color: neubrutalismPalette.secondary }}
        >
          ZIMSEC MATHEMATICS <br className="hidden lg:block"></br> INTERACTIVE GUIDE
        </h1>
        <div
          className="inline-flex items-center px-6 py-3 rounded-full text-md font-bold border-2"
          style={{
            backgroundColor: neubrutalismPalette.accent,
            color: neubrutalismPalette.text,
            borderColor: neubrutalismPalette.border,
            boxShadow: `4px 4px 0 0 ${neubrutalismPalette.secondary}`
          }}
        >
          <Award className="w-5 h-5 mr-2" />
          O-Level Excellence
        </div>
        <p className="text-base sm:text-lg lg:text-xl max-w-prose" style={{ color: neubrutalismPalette.text }}>
          Transform your O-Level math journey with over 170 interactive learning sections
          covering Forms 1-4. From Real Numbers to Probability, revising has never
          been more fun! This app is completely free to use.
        </p>
        <Link
        to="/home"
          className="flex items-center justify-center px-10 py-5 rounded-full text-white font-bold text-xl border-2 transition-all transform
                     hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95"
          style={{
            backgroundColor: neubrutalismPalette.primary,
            borderColor: neubrutalismPalette.border,
            boxShadow: `8px 8px 0 0 ${neubrutalismPalette.shadow}`
          }}
        >
          <Play className="w-6 h-6 mr-3" />
          Start Learning Now
        </Link>
      </div>

      {/* Image/Placeholder Section - Enhanced for Neubrutalism */}
      <div className="flex w-full items-center justify-center p-6 lg:p-0 z-10">
        <div
          className="relative w-full h-64 lg:h-96 max-w-md lg:max-w-none border-4 rounded-xl flex items-center justify-center overflow-hidden
                     group transition-all duration-300 hover:scale-[1.02]"
          style={{
            backgroundColor: neubrutalismPalette.secondary,
            borderColor: neubrutalismPalette.border,
            boxShadow: `10px 10px 0 0 ${neubrutalismPalette.primary}`
          }}
        >
          {/* Internal decorative elements within the placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl font-bold p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
          >
            Interactive App Preview
           
          </div>
          <div
            className="absolute inset-0 bg-white flex items-center justify-center text-center text-xl font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: neubrutalismPalette.text }}
          >
           
            [Your App Screenshots Here]
            <br/>
            (Imagine vibrant, bold interfaces!)
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
