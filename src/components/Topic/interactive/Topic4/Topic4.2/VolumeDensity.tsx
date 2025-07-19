import { QuizData, SolidShapesQuizTemplate } from './SolidShapesQuizTemplate';

const volumeDensityData: QuizData = {
  title: "Volume and Density of Solids",
  subtitle: "Master calculations combining volume and density concepts",
  questions: [
    {
      type: 'findMass',
      shape: 'sphere',
      question: "A solid iron sphere has radius 3 cm. If iron has density 7.8 g/cm³, what is its mass? (Use π = 3.14)",
      given: { radius: 3, density: 7.8 },
      answer: 882.5,
      unit: 'g',
      hint: "First calculate volume (4/3πr³), then multiply by density",
      formula: "\\text{Mass} = \\text{Density} \\times \\frac{4}{3}\\pi r^3",
      context: "Iron spheres like this are used in manufacturing ball bearings."
    },
    {
      type: 'findVolume',
      shape: 'cone',
      question: "A lead cone has mass 565.2 g and density 11.3 g/cm³. What is its volume?",
      given: { mass: 565.2, density: 11.3 },
      answer: 50,
      unit: 'cm³',
      hint: "Rearrange the density formula: Volume = Mass ÷ Density",
      formula: "V = \\frac{m}{\\rho}",
      context: "Lead cones are used in scientific equipment for radiation shielding."
    },
    {
      type: 'findDensity',
      shape: 'pyramid',
      question: "A stone pyramid has volume 120 cm³ and mass 300 g. What is its density?",
      given: { volume: 120, mass: 300 },
      answer: 2.5,
      unit: 'g/cm³',
      hint: "Density = Mass ÷ Volume",
      formula: "\\rho = \\frac{m}{V}",
      context: "Ancient Zimbabwean stone structures used similar density materials."
    },
    {
      type: 'compositeMass',
      shape: 'composite',
      question: "An object consists of a copper cylinder (ρ=8.96 g/cm³, r=2cm, h=5cm) and aluminum sphere (ρ=2.7 g/cm³, r=3cm). Find total mass. (Use π=3.14)",
      given: { copperDensity: 8.96, copperRadius: 2, copperHeight: 5, aluminumDensity: 2.7, aluminumRadius: 3 },
      answer: 1033.5,
      unit: 'g',
      hint: "Calculate each volume, find each mass, then sum them",
      formula: "m_{total} = (\\pi r_c^2 h_c \\times \\rho_c) + (\\frac{4}{3}\\pi r_a^3 \\times \\rho_a)",
      context: "Composite objects like this are common in engineering applications."
    },
    {
      type: 'hollowVolume',
      shape: 'sphere',
      question: "A hollow steel ball has outer radius 5 cm and inner radius 4 cm. What is the volume of steel? (Use π=3.14)",
      given: { outerRadius: 5, innerRadius: 4 },
      answer: 255.5,
      unit: 'cm³',
      hint: "Subtract inner sphere volume from outer sphere volume",
      formula: "V_{steel} = \\frac{4}{3}\\pi (r_o^3 - r_i^3)",
      context: "Hollow spheres are used in buoyancy devices and sports equipment."
    },
    {
      type: 'findMass',
      shape: 'prism',
      question: "A gold rectangular prism (2cm×3cm×4cm) has density 19.3 g/cm³. What is its mass?",
      given: { length: 2, width: 3, height: 4, density: 19.3 },
      answer: 463.2,
      unit: 'g',
      hint: "First calculate volume (l×w×h), then multiply by density",
      formula: "m = l \\times w \\times h \\times \\rho",
      context: "Gold prisms are used in jewelry manufacturing and electronics."
    },
    {
      type: 'findVolume',
      shape: 'irregular',
      question: "An irregular object has mass 450 g and displaces 150 mL of water. What is its density?",
      given: { mass: 450, displacedVolume: 150 },
      answer: 3,
      unit: 'g/cm³',
      hint: "Density = Mass ÷ Volume (1 mL = 1 cm³)",
      formula: "\\rho = \\frac{m}{V_{displaced}}",
      context: "This method is used to find density of irregular objects like minerals."
    },
    {
      type: 'conversion',
      shape: 'cylinder',
      question: "A cylindrical copper rod (ρ=8.96 g/cm³, r=0.5cm, h=100cm) has mass ____ kg. (Use π=3.14)",
      given: { density: 8.96, radius: 0.5, height: 100 },
      answer: 0.703,
      unit: 'kg',
      hint: "Calculate mass in grams, then convert to kilograms (1000g=1kg)",
      formula: "m = \\pi r^2 h \\times \\rho \\div 1000",
      context: "Copper rods are used in electrical wiring and plumbing systems."
    }
  ]
};

// export default volumeDensityData;

export function VolumeDensity() {
  return <SolidShapesQuizTemplate quizData={volumeDensityData} />;
}