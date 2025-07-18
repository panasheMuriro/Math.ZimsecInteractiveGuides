import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Measures",
    icon: "📏",
    content: `Measures involve understanding and working with different units of measurement for various physical quantities like length, mass, time, temperature, area, volume, and density.`,
    subsections: [
      {
        title: "Units of Time",
        content: `**UNITS OF TIME**

Time is measured in various units depending on the duration:

**Basic Units:**
- Second (s): Base unit of time
- Minute (min): 60 seconds
- Hour (h): 60 minutes = 3600 seconds
- Day: 24 hours
- Week: 7 days
- Month: Approximately 30 days
- Year: 365 days (366 in leap year)

**Conversions:**
- 1 minute = 60 seconds
- 1 hour = 60 minutes = 3600 seconds
- 1 day = 24 hours = 1440 minutes = 86400 seconds

**Time Calculations:**
- Duration = End time - Start time
- Speed = Distance ÷ Time
- Time = Distance ÷ Speed

**Example:**
Convert 2 hours 30 minutes to seconds:
2 hours = 2 × 3600 = 7200 seconds
30 minutes = 30 × 60 = 1800 seconds
Total = 7200 + 1800 = 9000 seconds`,
        interactive: "time-units",
      },
      {
        title: "Units of Mass",
        content: `**UNITS OF MASS**

Mass measures the amount of matter in an object:

**Metric System:**
- Milligram (mg): 0.001 g
- Gram (g): Base unit
- Kilogram (kg): 1000 g
- Tonne (t): 1000 kg = 1,000,000 g

**Conversions:**
- 1 kg = 1000 g
- 1 g = 1000 mg
- 1 tonne = 1000 kg

**Imperial System:**
- Ounce (oz): 28.35 g
- Pound (lb): 16 oz = 453.6 g
- Stone: 14 lb = 6.35 kg

**Applications:**
- Cooking and recipes
- Medical dosages
- Shipping and packaging
- Scientific measurements

**Example:**
Convert 2.5 kg to grams:
2.5 kg = 2.5 × 1000 = 2500 g`,
        interactive: "mass-units",
      },
      {
        title: "Units of Length",
        content: `**UNITS OF LENGTH**

Length measures distance and size:

**Metric System:**
- Millimeter (mm): 0.001 m
- Centimeter (cm): 0.01 m
- Meter (m): Base unit
- Kilometer (km): 1000 m

**Conversions:**
- 1 m = 100 cm = 1000 mm
- 1 km = 1000 m = 100,000 cm
- 1 cm = 10 mm

**Imperial System:**
- Inch (in): 2.54 cm
- Foot (ft): 12 in = 30.48 cm
- Yard (yd): 3 ft = 0.914 m
- Mile: 1760 yd = 1.609 km

**Applications:**
- Construction and engineering
- Map reading
- Sports measurements
- Scientific research

**Example:**
Convert 3.2 km to meters:
3.2 km = 3.2 × 1000 = 3200 m`,
        interactive: "length-units",
      },
      {
        title: "Units of Temperature",
        content: `**UNITS OF TEMPERATURE**

Temperature measures how hot or cold something is:

**Temperature Scales:**
- Celsius (°C): Water freezes at 0°C, boils at 100°C
- Fahrenheit (°F): Water freezes at 32°F, boils at 212°F
- Kelvin (K): Absolute scale, 0 K = -273.15°C

**Conversion Formulas:**
- °F = (°C × 9/5) + 32
- °C = (°F - 32) × 5/9
- K = °C + 273.15

**Common Temperatures:**
- Human body temperature: 37°C (98.6°F)
- Room temperature: 20-25°C (68-77°F)
- Freezing point of water: 0°C (32°F)
- Boiling point of water: 100°C (212°F)

**Applications:**
- Weather forecasting
- Cooking and baking
- Medical diagnosis
- Scientific experiments

**Example:**
Convert 25°C to Fahrenheit:
°F = (25 × 9/5) + 32 = 45 + 32 = 77°F`,
        interactive: "temperature-units",
      },
      {
        title: "Units of Capacity",
        content: `**UNITS OF CAPACITY**

Capacity measures how much liquid a container can hold:

**Metric System:**
- Milliliter (ml): 0.001 L
- Liter (L): Base unit
- Kiloliter (kL): 1000 L

**Conversions:**
- 1 L = 1000 ml
- 1 kL = 1000 L = 1,000,000 ml

**Imperial System:**
- Fluid ounce (fl oz): 29.57 ml
- Pint (pt): 20 fl oz = 568 ml
- Quart (qt): 2 pt = 1.137 L
- Gallon (gal): 4 qt = 4.546 L

**Relationship with Volume:**
- 1 liter = 1000 cm³
- 1 ml = 1 cm³

**Applications:**
- Cooking and recipes
- Fuel measurements
- Medical dosages
- Container specifications

**Example:**
Convert 2.5 L to milliliters:
2.5 L = 2.5 × 1000 = 2500 ml`,
        interactive: "capacity-units",
      },
      {
        title: "Units of Area",
        content: `**UNITS OF AREA**

Area measures the size of a surface:

**Metric System:**
- Square millimeter (mm²)
- Square centimeter (cm²)
- Square meter (m²): Base unit
- Square kilometer (km²)
- Hectare (ha): 10,000 m²

**Conversions:**
- 1 m² = 10,000 cm² = 1,000,000 mm²
- 1 km² = 1,000,000 m² = 100 ha
- 1 ha = 10,000 m²

**Imperial System:**
- Square inch (in²): 6.45 cm²
- Square foot (ft²): 144 in² = 0.093 m²
- Square yard (yd²): 9 ft² = 0.836 m²
- Acre: 4840 yd² = 4047 m²

**Applications:**
- Real estate
- Agriculture
- Construction
- Geography

**Example:**
Convert 0.5 km² to hectares:
0.5 km² = 0.5 × 100 = 50 ha`,
        interactive: "area-units",
      },
      {
        title: "Units of Volume",
        content: `**UNITS OF VOLUME**

Volume measures the amount of space occupied by an object:

**Metric System:**
- Cubic millimeter (mm³)
- Cubic centimeter (cm³): Also written as cc
- Cubic meter (m³): Base unit
- Cubic kilometer (km³)

**Conversions:**
- 1 m³ = 1,000,000 cm³ = 1,000,000,000 mm³
- 1 km³ = 1,000,000,000 m³

**Relationship with Capacity:**
- 1 cm³ = 1 ml
- 1 m³ = 1000 L
- 1 L = 1000 cm³

**Imperial System:**
- Cubic inch (in³): 16.39 cm³
- Cubic foot (ft³): 1728 in³ = 0.028 m³
- Cubic yard (yd³): 27 ft³ = 0.765 m³

**Applications:**
- Architecture and construction
- Shipping and logistics
- Engineering design
- Scientific research

**Example:**
Convert 2.5 m³ to liters:
2.5 m³ = 2.5 × 1000 = 2500 L`,
        interactive: "volume-units",
      },
      {
        title: "Density",
        content: `**DENSITY**

Density is the mass per unit volume of a substance:

**Formula:**
$\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$

$\\rho = \\frac{m}{V}$

**Units:**
- kg/m³ (kilograms per cubic meter)
- g/cm³ (grams per cubic centimeter)
- g/ml (grams per milliliter)

**Conversions:**
- 1 g/cm³ = 1000 kg/m³
- 1 g/ml = 1 g/cm³ (for liquids)

**Common Densities:**
- Water: 1 g/cm³ = 1000 kg/m³
- Ice: 0.92 g/cm³
- Aluminum: 2.7 g/cm³
- Iron: 7.87 g/cm³
- Gold: 19.3 g/cm³

**Applications:**
- Material identification
- Quality control
- Floating and sinking
- Engineering design

**Example:**
Find the density of a block with mass 240 g and volume 80 cm³:
Density = 240 g ÷ 80 cm³ = 3 g/cm³`,
        interactive: "density",
      },
    ],
  },
  {
    title: "Mensuration",
    icon: "📐",
    content: `Mensuration deals with the measurement of geometric figures, including perimeter, area, surface area, and volume of various shapes and solids.`,
    subsections: [
      {
        title: "Perimeter of Plane Shapes",
        content: `**PERIMETER OF PLANE SHAPES**

Perimeter is the total distance around the boundary of a shape:

**Rectangle:**
Perimeter = 2(length + width) = 2(l + w)

**Square:**
Perimeter = 4 × side = 4s

**Triangle:**
Perimeter = side₁ + side₂ + side₃ = a + b + c

**Circle (Circumference):**
Perimeter = 2πr = πd
Where r = radius, d = diameter

**Regular Polygon:**
Perimeter = n × side length
Where n = number of sides

**Parallelogram:**
Perimeter = 2(base + side) = 2(b + s)

**Trapezium:**
Perimeter = sum of all four sides = a + b + c + d

**Example:**
Find the perimeter of a rectangle with length 8 cm and width 5 cm:
Perimeter = 2(8 + 5) = 2(13) = 26 cm`,
        interactive: "perimeter",
      },
      {
        title: "Area of Plane Shapes",
        content: `**AREA OF PLANE SHAPES**

Area is the amount of surface enclosed by a shape:

**Rectangle:**
Area = length × width = l × w

**Square:**
Area = side² = s²

**Triangle:**
Area = ½ × base × height = ½bh

**Circle:**
Area = πr² (where r = radius)

**Parallelogram:**
Area = base × height = b × h

**Trapezium:**
Area = ½(sum of parallel sides) × height = ½(a + b) × h

**Rhombus:**
Area = base × height = b × h
Or Area = ½ × d₁ × d₂ (where d₁, d₂ are diagonals)

**Regular Polygon:**
Area = ½ × perimeter × apothem

**Example:**
Find the area of a triangle with base 10 cm and height 6 cm:
Area = ½ × 10 × 6 = 30 cm²`,
        interactive: "area-shapes",
      },
      {
        title: "Combined Shapes",
        content: `**COMBINED SHAPES**

Areas and perimeters of shapes made from combining basic shapes:

**Approach for Area:**
1. Break the shape into recognizable parts
2. Calculate the area of each part
3. Add areas for shapes that don't overlap
4. Subtract areas for cut-out sections

**Approach for Perimeter:**
1. Identify the outer boundary
2. Add up all the outer edge lengths
3. Don't include internal boundaries

**Common Combined Shapes:**
- Rectangle with semicircle
- Rectangle with triangle
- Circle with rectangle removed
- L-shaped figures
- Compound shapes with curves

**Example:**
Find the area of a shape made from a rectangle (8×5) with a semicircle (radius 3) attached:
Rectangle area = 8 × 5 = 40 cm²
Semicircle area = ½ × π × 3² = 4.5π cm²
Total area = 40 + 4.5π ≈ 54.14 cm²`,
        interactive: "combined-shapes",
      },
      {
        title: "Volume of Cuboids",
        content: `**VOLUME OF CUBOIDS**

Volume is the amount of space occupied by a 3D object:

**Cuboid (Rectangular Prism):**
Volume = length × width × height = l × w × h

**Cube:**
Volume = side³ = s³

**Properties:**
- All angles are 90°
- Opposite faces are equal and parallel
- Has 6 faces, 12 edges, 8 vertices

**Applications:**
- Storage containers
- Room volumes
- Packaging calculations
- Building materials

**Units:**
- Cubic centimeters (cm³)
- Cubic meters (m³)
- Liters (1000 cm³ = 1 L)

**Example:**
Find the volume of a cuboid with length 10 cm, width 6 cm, and height 4 cm:
Volume = 10 × 6 × 4 = 240 cm³`,
        interactive: "volume-cuboids",
      },
      {
        title: "Volume of Cylinders",
        content: `**VOLUME OF CYLINDERS**

A cylinder is a 3D shape with circular cross-section:

**Formula:**
Volume = π × radius² × height = πr²h

**Where:**
- r = radius of the circular base
- h = height of the cylinder
- π ≈ 3.14159

**Types:**
- Right circular cylinder: Axis perpendicular to base
- Oblique cylinder: Axis at an angle to base

**Applications:**
- Pipes and tubes
- Cans and containers
- Fuel tanks
- Structural columns

**Related Formulas:**
- Surface area of curved surface = 2πrh
- Total surface area = 2πr² + 2πrh = 2πr(r + h)

**Example:**
Find the volume of a cylinder with radius 5 cm and height 12 cm:
Volume = π × 5² × 12 = π × 25 × 12 = 300π ≈ 942.48 cm³`,
        interactive: "volume-cylinders",
      },
      {
        title: "Surface Area of Solid Shapes",
        content: `**SURFACE AREA OF SOLID SHAPES**

Surface area is the total area of all faces of a 3D object:

**Cuboid:**
Surface Area = 2(lw + lh + wh)
Where l = length, w = width, h = height

**Cube:**
Surface Area = 6s²
Where s = side length

**Cylinder:**
Surface Area = 2πr² + 2πrh = 2πr(r + h)
Where r = radius, h = height

**Cone:**
Surface Area = πr² + πrl = πr(r + l)
Where r = radius, l = slant height

**Sphere:**
Surface Area = 4πr²
Where r = radius

**Pyramid (Square base):**
Surface Area = base area + 4 × triangular face area
= s² + 4 × (½ × s × slant height)

**Example:**
Find the surface area of a cube with side 6 cm:
Surface Area = 6 × 6² = 6 × 36 = 216 cm²`,
        interactive: "surface-area",
      },
      {
        title: "Volume and Density of Solids",
        content: `**VOLUME AND DENSITY OF SOLIDS**

Combining volume calculations with density:

**Volume Formulas:**
- Sphere: V = (4/3)πr³
- Cone: V = (1/3)πr²h
- Pyramid: V = (1/3) × base area × height
- Prism: V = base area × height

**Density Applications:**
- Finding mass: Mass = Density × Volume
- Finding volume: Volume = Mass ÷ Density
- Finding density: Density = Mass ÷ Volume

**Composite Solids:**
For objects made of different materials:
1. Calculate volume of each part
2. Use appropriate density for each material
3. Find mass of each part
4. Sum for total mass

**Hollow Objects:**
Volume = Volume of outer solid - Volume of inner cavity

**Example:**
A solid iron sphere has radius 3 cm. If iron has density 7.8 g/cm³:
Volume = (4/3)π × 3³ = 36π cm³
Mass = 7.8 × 36π ≈ 882.5 g`,
        interactive: "volume-density",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Convert 3 hours 45 minutes to seconds:",
    options: ["12,300 s", "13,500 s", "14,700 s", "15,900 s"],
    correct: 1,
    explanation: "3 hours = 3 × 3600 = 10,800 s, 45 minutes = 45 × 60 = 2,700 s. Total = 10,800 + 2,700 = 13,500 s",
  },
  {
    question: "Convert 2.5 kg to grams:",
    options: ["250 g", "2500 g", "25,000 g", "250,000 g"],
    correct: 1,
    explanation: "1 kg = 1000 g, so 2.5 kg = 2.5 × 1000 = 2500 g",
  },
  {
    question: "Convert 25°C to Fahrenheit:",
    options: ["45°F", "57°F", "77°F", "97°F"],
    correct: 2,
    explanation: "°F = (°C × 9/5) + 32 = (25 × 9/5) + 32 = 45 + 32 = 77°F",
  },
  {
    question: "Find the density of an object with mass 150 g and volume 50 cm³:",
    options: ["2 g/cm³", "3 g/cm³", "4 g/cm³", "5 g/cm³"],
    correct: 1,
    explanation: "Density = Mass ÷ Volume = 150 g ÷ 50 cm³ = 3 g/cm³",
  },
  {
    question: "Find the perimeter of a rectangle with length 12 cm and width 8 cm:",
    options: ["20 cm", "32 cm", "40 cm", "48 cm"],
    correct: 2,
    explanation: "Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40 cm",
  },
  {
    question: "Find the area of a triangle with base 10 cm and height 8 cm:",
    options: ["40 cm²", "50 cm²", "60 cm²", "80 cm²"],
    correct: 0,
    explanation: "Area = ½ × base × height = ½ × 10 × 8 = 40 cm²",
  },
  {
    question: "Find the volume of a cuboid with dimensions 6 cm × 4 cm × 3 cm:",
    options: ["48 cm³", "62 cm³", "72 cm³", "86 cm³"],
    correct: 2,
    explanation: "Volume = length × width × height = 6 × 4 × 3 = 72 cm³",
  },
  {
    question: "Find the volume of a cylinder with radius 4 cm and height 10 cm:",
    options: ["120π cm³", "140π cm³", "160π cm³", "180π cm³"],
    correct: 2,
    explanation: "Volume = πr²h = π × 4² × 10 = π × 16 × 10 = 160π cm³",
  },
  {
    question: "Find the surface area of a cube with side length 5 cm:",
    options: ["125 cm²", "150 cm²", "175 cm²", "200 cm²"],
    correct: 1,
    explanation: "Surface area = 6s² = 6 × 5² = 6 × 25 = 150 cm²",
  },
  {
    question: "A sphere has radius 3 cm. Find its volume:",
    options: ["36π cm³", "42π cm³", "48π cm³", "54π cm³"],
    correct: 0,
    explanation: "Volume = (4/3)πr³ = (4/3)π × 3³ = (4/3)π × 27 = 36π cm³",
  },
];