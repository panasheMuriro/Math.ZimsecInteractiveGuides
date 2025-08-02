import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Data Collection & Representation",
    icon: "📊",
    content: `Data collection and representation form the foundation of statistics, involving gathering raw data and presenting it in meaningful visual and tabular formats.
**Syllabus Objectives**:
- Recognize and apply statistical symbols, terms, and definitions (e.g., frequency, cumulative frequency, relative frequency).
- Draw tables, graphs, charts, and diagrams accurately to represent data.
- Interpret tables, graphs, charts, and diagrams to summarize and communicate data trends.
- Make effective use of ICT tools (e.g., spreadsheets, graphing software) to organize and display data.
- Apply mathematical reasoning to describe data patterns and communicate findings clearly.`,
    subsections: [
      {
        title: "Data Collection Methods",
        content: `**DATA COLLECTION TECHNIQUES**
**Primary Data Collection:**
- **Surveys:** Questionnaires, interviews, polls
- **Experiments:** Controlled conditions, variables manipulation  
- **Observations:** Recording natural phenomena, behaviors
- **Census:** Complete enumeration of population
- **Sampling:** Representative subset selection
---
**Secondary Data Collection:**
- Government statistics, published reports
- Research papers, databases
- Historical records, archives
---
**Data Quality Considerations:**
- **Accuracy:** Minimize measurement errors
- **Reliability:** Consistent results over time
- **Validity:** Measures what it claims to measure
- **Bias:** Avoid systematic errors in collection
- **Sample size:** Adequate for reliable conclusions
---
**Sampling Methods:**
- **Random sampling:** Every member has equal chance
- **Systematic sampling:** Every nth member selected
- **Stratified sampling:** Population divided into groups
- **Cluster sampling:** Groups selected randomly
**Example:**
A school wants to survey student satisfaction with the cafeteria food. They could use:
- **Random sampling:** Select 50 students randomly from all 500 students
- **Stratified sampling:** Select 10 students from each grade level (Grades 8-12)
- **Systematic sampling:** Select every 10th student from the alphabetical list
- **Primary data:** Direct survey responses from students
- **Secondary data:** Previous cafeteria satisfaction reports
**Syllabus Objectives**:
- Collect and organize data accurately using appropriate methods (e.g., surveys, sampling).
- Recognize statistical terms related to data collection (e.g., sample, population, bias).
- Conduct simple research projects involving data collection, ensuring accuracy and validity.
- Use ICT tools to record and manage collected data efficiently.`,
        interactive: "data-collection",
      },
      {
        title: "Data Classification",
        content: `**DATA CLASSIFICATION SYSTEMS**
**By Grouping:**
- **Ungrouped Data:** Individual values listed separately
  - Easy to identify exact values
  - Suitable for small datasets
  - Mode clearly visible
- **Grouped Data:** Values organized in class intervals
  - Compact representation for large datasets
  - Loses individual value precision
  - Uses class boundaries and midpoints
**By Nature:**
- **Discrete Data:** Countable, distinct values
  - Number of students, cars, goals scored
  - Can only take specific values (0, 1, 2, 3...)
- **Continuous Data:** Measurable, any value in range
  - Height, weight, time, temperature
  - Can take any value within limits
**Class Intervals:**
- **Equal width:** All classes same size
- **Unequal width:** Classes different sizes
- **Open-ended:** No upper or lower limit
- Class boundaries, midpoints, and widths
**Example:**
Heights of 30 students in a class:
- **Ungrouped:** 150, 152, 155, 158, 160, 162, 165... (individual values)
- **Grouped:** 
  - 150-154 cm: 5 students
  - 155-159 cm: 12 students  
  - 160-164 cm: 8 students
  - 165-169 cm: 5 students
- **Continuous data:** Height can be 156.7 cm, 158.23 cm (any value)
- **Class width:** 5 cm for each interval
- **Midpoint of 155-159:** (155 + 159) ÷ 2 = 157 cm
**Syllabus Objectives**:
- Recognize and apply statistical terms (e.g., discrete, continuous, class interval, midpoint).
- Organize data into appropriate classification systems (grouped/ungrouped, discrete/continuous).
- Use ICT tools to create and manage data classifications for analysis.
- Interpret classified data to identify patterns and communicate findings.`,
        interactive: "data-classification",
      },
      {
        title: "Data Representation Methods",
        content: `**TABULAR REPRESENTATION**
**Frequency Tables:**
- **Frequency (f):** Number of occurrences
- **Cumulative frequency (CF):** Running total
- **Relative frequency:** Proportion of total
**GRAPHICAL REPRESENTATION**
**Charts:**
- **Bar charts:** Discrete data, separate bars
- **Pie charts:** Parts of whole, sectors proportional
- **Histograms:** Continuous data, adjacent rectangles
  - Equal class widths: height = frequency
  - Unequal widths: height = frequency density
**Graphs:**
- **Frequency polygon:** Line connecting midpoints
- **Cumulative frequency curves (Ogives):**
  - Less than ogive: CF plotted against upper boundaries
  - More than ogive: CF plotted against lower boundaries
**Choosing Representation:**
- Bar chart: Comparing categories
- Histogram: Distribution shape
- Pie chart: Parts of whole
- Ogive: Quartiles and percentiles
**Example:**
Favorite subjects of 40 students:
- Math: 12 students, Science: 10 students, English: 8 students, History: 6 students, Art: 4 students
**Frequency Table:**
$\\begin{array}{|c|c|c|c|}
\\hline
\\text{Subject} & \\text{Freq.} & \\text{Cum. Freq.} \\\\
\\hline
\\text{Math} & 12 & 12 \\\\
\\hline
\\text{Science} & 10 & 22  \\\\
\\hline
\\text{English} & 8 & 30 \\\\
\\hline
\\text{History} & 6 & 36 \\\\
\\hline
\\text{Art} & 4 & 40  \\\\
\\hline
\\end{array}$
**Pie Chart:** Math = 108°, Science = 90°, English = 72°, History = 54°, Art = 36°
**Syllabus Objectives**:
- Draw tables, charts, and graphs (e.g., bar charts, pie charts, histograms, ogives) accurately.
- Interpret statistical diagrams to deduce trends and communicate mathematical ideas clearly.
- Use a suitable degree of accuracy in constructing graphical representations.
- Apply ICT tools to create and analyze statistical diagrams for effective presentation.`,
        interactive: "data-representation",
      },
    ],
  },
  {
    title: "Measures of Central Tendency",
    icon: "🎯",
    content: `Central tendency measures identify the typical or middle value in a dataset, providing insight into where data tends to cluster.
**Syllabus Objectives**:
- Recognize and apply statistical terms (e.g., mean, median, mode) accurately.
- Carry out calculations for measures of central tendency with precision.
- Interpret measures of central tendency to summarize data and communicate findings.
- Solve routine and non-routine problems using appropriate central tendency measures.
- Use ICT tools to compute and analyze central tendency measures.`,
    subsections: [
      {
        title: "Mean Calculations",
        content: `**ARITHMETIC MEAN**
**Ungrouped Data:**
$$\\bar{x} = \\frac{\\sum x}{n}$$
Where: $\\bar{x}$ = mean, $\\sum x$ = sum of values, $n$ = number of values
**Grouped Data (Direct Method):**
$$\\bar{x} = \\frac{\\sum fx}{\\sum f}$$
Where: $f$ = frequency, $x$ = midpoint of class
**Grouped Data (Assumed Mean Method):**
$$\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$$
Where: $A$ = assumed mean, $d = x - A$
**Advantages:**
- Uses all data values
- Algebraically defined
- Suitable for further calculations
**Disadvantages:**
- Affected by extreme values (outliers)
- May not represent actual data value
- Not suitable for open-ended distributions
**When to Use:**
- Symmetric distributions
- No extreme outliers present
- Need for further statistical analysis
**Example:**
Test scores of 8 students: 75, 82, 68, 91, 77, 85, 73, 89
**Ungrouped Mean:**
$\\bar{x} = \\frac{75 + 82 + 68 + 91 + 77 + 85 + 73 + 89}{8} = \\frac{640}{8} = 80$
**Grouped Data Example:**
$\\begin{array}{|c|c|c|c|}
\\hline
\\text{Score Range} & \\text{Midpt. (x)} & \\text{Freq. (f)} & fx \\\\
\\hline
60-69 & 64.5 & 2 & 129 \\\\
\\hline
70-79 & 74.5 & 3 & 223.5 \\\\
\\hline
80-89 & 84.5 & 4 & 338 \\\\
\\hline
90-99 & 94.5 & 1 & 94.5 \\\\
\\hline
\\text{Total} & & 10 & 785 \\\\
\\hline
\\end{array}$
$\\bar{x} = \\frac{\\sum fx}{\\sum f} = \\frac{785}{10} = 78.5$
**Syllabus Objectives**:
- Calculate the mean accurately for ungrouped and grouped data.
- Apply mathematical reasoning to interpret the mean in context.
- Solve problems involving the mean using appropriate methods.
- Use ICT tools (e.g., spreadsheets) to compute the mean efficiently.`,
        interactive: "mean-calculations",
      },
      {
        title: "Median Determination",
        content: `**MEDIAN CALCULATIONS**
**Ungrouped Data:**
- Arrange in ascending order
- **Odd n:** Median = middle value = $\\frac{n+1}{2}$th term
- **Even n:** Median = average of two middle values
**Grouped Data:**
$$Median = L + \\frac{\\frac{n}{2} - CF}{f} \\times h$$
Where:
- $L$ = lower boundary of median class
- $n$ = total frequency
- $CF$ = cumulative frequency before median class
- $f$ = frequency of median class  
- $h$ = class width
**Using Ogives:**
- Plot cumulative frequency curve
- Draw horizontal line at $\\frac{n}{2}$
- Read corresponding x-value
**Advantages:**
- Not affected by extreme values
- Suitable for open-ended distributions
- Always exists for numerical data
**When to Use:**
- Skewed distributions
- Presence of outliers
- Ordinal data analysis
**Example:**
Ages of 9 people: 23, 25, 28, 30, 32, 35, 38, 42, 45
**Ungrouped Median:**
- Already in order: 23, 25, 28, 30, **32**, 35, 38, 42, 45
- Position = $\\frac{9+1}{2} = 5$th term
- Median = 32 years
**Grouped Data Example:**
$\\begin{array}{|c|c|c|}
\\hline
\\text{Age Group} & \\text{Freq.} & \\text{Cum. Freq.} \\\\
\\hline
20-29 & 3 & 3 \\\\
\\hline
30-39 & 5 & 8 \\\\
\\hline
40-49 & 4 & 12 \\\\
\\hline
\\end{array}$
- $n = 12$, so $\\frac{n}{2} = 6$
- Median class: 30-39 (CF = 8 ≥ 6)
- $L = 30$, $CF = 3$, $f = 5$, $h = 10$
- Median = $30 + \\frac{6-3}{5} \\times 10 = 30 + 6 = 36$ years
**Syllabus Objectives**:
- Calculate the median accurately for ungrouped and grouped data.
- Use ogives to determine the median and interpret results.
- Apply the median to analyze skewed data sets and communicate findings.
- Use ICT tools to compute and visualize medians.`,
        interactive: "median-calculations",
      },
      {
        title: "Mode Identification",
        content: `**MODE IDENTIFICATION**
**Ungrouped Data:**
- Value appearing most frequently
- Can have no mode, one mode, or multiple modes
- **Unimodal:** One mode
- **Bimodal:** Two modes  
- **Multimodal:** More than two modes
**Grouped Data:**
- **Modal Class:** Class with highest frequency
- **Mode estimation:**
$$Mode = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$$
Where:
- $L$ = lower boundary of modal class
- $f_1$ = frequency of modal class
- $f_0$ = frequency of class before modal class
- $f_2$ = frequency of class after modal class
- $h$ = class width
**Advantages:**
- Not affected by extreme values
- Can be used for qualitative data
- Easy to identify in frequency distributions
**Disadvantages:**
- May not exist or be unique
- Not suitable for further calculations
- Can be misleading with small datasets
**When to Use:**
- Categorical data
- Identifying most common value
- Business applications (most popular product)
**Example:**
Shoe sizes sold in a store: 6, 7, 7, 8, 8, 8, 9, 9, 10
**Ungrouped Mode:**
- Size 8 appears 3 times (most frequent)
- Mode = 8
**Grouped Data Example:**
$\\begin{array}{|c|c|}
\\hline
\\text{Shoe Size} & \\text{Freq.} \\\\
\\hline
5-6 & 2 \\\\
\\hline
7-8 & 8 \\text{ } \\leftarrow \\text{ Modal class} \\\\
\\hline
9-10 & 5 \\\\
\\hline
11-12 & 1 \\\\
\\hline
\\end{array}$
- Modal class: 7-8 (highest frequency = 8)
- $L = 7$, $f_1 = 8$, $f_0 = 2$, $f_2 = 5$, $h = 2$
- Mode = $7 + \\frac{8-2}{2(8)-2-5} \\times 2 = 7 + \\frac{6}{9} \\times 2 = 7 + 1.33 = 8.33$
**Syllabus Objectives**:
- Identify and calculate the mode accurately for ungrouped and grouped data.
- Interpret the mode to describe data frequency patterns.
- Solve problems involving the mode in categorical and numerical data sets.
- Use ICT tools to identify and analyze modal values.`,
        interactive: "mode-identification",
      },
      {
        title: "Choosing Appropriate Measures",
        content: `**SELECTING THE RIGHT MEASURE**
**Distribution Shape:**
- **Symmetric distribution:** Mean = Median = Mode
- **Positively skewed:** Mean > Median > Mode
- **Negatively skewed:** Mode > Median > Mean
---
**Data Type:**
- **Numerical (continuous):** All three measures applicable
- **Ordinal:** Median and mode appropriate
- **Nominal:** Only mode applicable
---
**Presence of Outliers:**
- **With outliers:** Use median (robust measure)
- **Without outliers:** Mean preferred for calculations
---
**Purpose of Analysis:**
- **Descriptive summary:** Mean for symmetric data
- **Typical value:** Median for skewed data
- **Most common value:** Mode for frequency analysis
---
**Practical Applications:**
- **Income data:** Median (due to high earners)
- **Test scores:** Mean (normally distributed)
- **Product sales:** Mode (most popular item)
- **House prices:** Median (skewed by expensive properties)
---
**Combined Interpretation:**
Use multiple measures together for complete understanding of data distribution
**Example:**
Monthly salaries of 10 employees (in thousands):
25, 28, 30, 32, 35, 38, 40, 42, 45, 200
**Calculations:**
- **Mean:** $\\frac{515}{10} = 51.5$ thousand
- **Median:** $\\frac{35 + 38}{2} = 36.5$ thousand  
- **Mode:** No mode (all values appear once)
**Analysis:**
- The outlier (200) pulls the mean much higher than typical salaries
- Median (36.5) better represents the typical employee salary
- Mean (51.5) is misleading due to the CEO's high salary
- **Best choice:** Median, because income data is positively skewed
**Syllabus Objectives**:
- Select and justify appropriate measures of central tendency based on data type and distribution.
- Interpret multiple measures to provide a comprehensive data analysis.
- Solve routine and non-routine problems by choosing suitable measures.
- Communicate mathematical ideas clearly when justifying measure selection.`,
        interactive: "measure-selection",
      },
    ],
  },
  {
    title: "Measures of Dispersion",
    icon: "📏",
    content: `Dispersion measures quantify the spread or variability of data, indicating how much individual values deviate from the central tendency.
**Syllabus Objectives**:
- Recognize and apply statistical terms (e.g., range, interquartile range, quartile deviation).
- Calculate measures of dispersion accurately to describe data variability.
- Interpret dispersion measures to analyze data spread and communicate findings.
- Deduce and draw inferences through manipulation of statistical data.
- Use ICT tools to compute and visualize dispersion measures.`,
    subsections: [
      {
        title: "Range Calculations",
        content: `**RANGE ANALYSIS**
**Simple Range:**
$$Range = Highest\\ Value - Lowest\\ Value$$
**Advantages:**
- Easy to calculate and understand
- Gives quick idea of data spread
- Uses extreme values of distribution
**Disadvantages:**
- Only considers two extreme values
- Heavily influenced by outliers
- Doesn't show distribution of middle values
- Not suitable for grouped data with open classes
**Applications:**
- Quality control (acceptable limits)
- Weather data (temperature ranges)  
- Stock price fluctuations
- Initial data exploration
**Coefficient of Range:**
$$Coefficient\\ of\\ Range = \\frac{H - L}{H + L}$$
Where: $H$ = highest value, $L$ = lowest value
**Interpretation:**
- Larger range indicates greater variability
- Smaller range suggests more consistent data
- Compare ranges between similar datasets
**Example:**
Daily temperatures (°C) over a week: 18, 22, 25, 28, 31, 29, 24
**Range Calculation:**
- Highest value = 31°C
- Lowest value = 18°C
- Range = 31 - 18 = 13°C
**Coefficient of Range:**
$\\frac{31 - 18}{31 + 18} = \\frac{13}{49} = 0.265$
**Interpretation:** The temperature varied by 13°C during the week, showing moderate variability in weather conditions.
**Syllabus Objectives**:
- Calculate the range accurately for ungrouped data sets.
- Interpret the range to describe data variability.
- Solve problems involving the range in practical contexts.
- Use ICT tools to compute and compare ranges across data sets.`,
        interactive: "range-calculations",
      },
      {
        title: "Quartiles and IQR",
        content: `**QUARTILE CALCULATIONS**
**Quartile Positions:**
- **Q₁ (First Quartile):** 25% of data below
- **Q₂ (Second Quartile):** 50% of data below (Median)
- **Q₃ (Third Quartile):** 75% of data below
**Ungrouped Data:**
- $Q_1$ position = $\\frac{n+1}{4}$
- $Q_3$ position = $\\frac{3(n+1)}{4}$
**Grouped Data:**
$$Q_1 = L + \\frac{\\frac{n}{4} - CF}{f} \\times h$$
$$Q_3 = L + \\frac{\\frac{3n}{4} - CF}{f} \\times h$$
**Interquartile Range (IQR):**
$$IQR = Q_3 - Q_1$$
**Properties:**
- Contains middle 50% of data
- Less affected by outliers than range
- Useful for identifying outliers: values beyond $Q_1 - 1.5 \\times IQR$ or $Q_3 + 1.5 \\times IQR$
**Box Plot Components:**
- Median line, quartile boxes, whiskers, outliers
**Example:**
Test scores of 12 students: 45, 52, 58, 63, 67, 71, 74, 78, 82, 85, 89, 94
**Quartile Calculations:**
- $Q_1$ position = $\\frac{12+1}{4} = 3.25$ → between 3rd and 4th values
- $Q_1 = 58 + 0.25(63-58) = 58 + 1.25 = 59.25$
- $Q_3$ position = $\\frac{3(12+1)}{4} = 9.75$ → between 9th and 10th values  
- $Q_3 = 82 + 0.75(85-82) = 82 + 2.25 = 84.25$
- $IQR = 84.25 - 59.25 = 25$
**Interpretation:** The middle 50% of students scored within a 25-point range, from 59.25 to 84.25.
**Syllabus Objectives**:
- Calculate quartiles and IQR accurately for ungrouped and grouped data.
- Use box plots to visualize and interpret data spread.
- Deduce outliers and data distribution patterns using IQR.
- Apply ICT tools to compute and display quartiles and IQR.`,
        interactive: "quartiles-iqr",
      },
      {
        title: "Semi-Interquartile Range",
        content: `**SEMI-INTERQUARTILE RANGE**
**Definition:**
$$Semi\\text{-}IQR = \\frac{IQR}{2} = \\frac{Q_3 - Q_1}{2}$$
**Also known as:**
- Quartile deviation
- Q-deviation
- Half the interquartile range
**Characteristics:**
- Measures average spread around median
- Robust against outliers
- Represents typical deviation from median
- Always positive value
**Comparison with Other Measures:**
- More stable than range
- Less sensitive than standard deviation
- Appropriate for skewed distributions
- Good for ordinal data
**Applications:**
- Educational assessment (grade distributions)
- Medical research (patient response ranges)
- Economic data (income quartiles)
- Quality control (process variation)
**Interpretation:**
- Smaller values indicate data clustered around median
- Larger values suggest greater spread
- Use with median for complete dispersion picture
**Example:**
Using the previous test scores example:
- $Q_1 = 59.25$, $Q_3 = 84.25$, $IQR = 25$
**Semi-IQR Calculation:**
$Semi\\text{-}IQR = \\frac{25}{2} = 12.5$
**Interpretation:** On average, students' scores deviate by 12.5 points from the median in either direction. This represents the typical spread of the middle 50% of students around the median score.
**Comparison:**
- Range = 94 - 45 = 49 points (affected by extreme scores)
- Semi-IQR = 12.5 points (focuses on central spread)
- The semi-IQR gives a more stable measure of variability
**Syllabus Objectives**:
- Calculate the semi-interquartile range accurately.
- Interpret the semi-IQR to describe data spread around the median.
- Apply the semi-IQR in contexts with skewed distributions.
- Use ICT tools to compute and analyze semi-IQR values.`,
        interactive: "semi-iqr",
      },
      {
        title: "Using Ogives for Quartiles",
        content: `**OGIVE METHOD FOR QUARTILES**
**Constructing Cumulative Frequency Curves:**
- **Less than ogive:** CF vs upper class boundaries
- **More than ogive:** CF vs lower class boundaries
- Plot points and connect with smooth curve
**Reading Quartiles from Ogives:**
**From Less Than Ogive:**
1. Mark $\\frac{n}{4}$ on y-axis (for Q₁)
2. Draw horizontal line to curve
3. Draw vertical line to x-axis
4. Read Q₁ value
**From More Than Ogive:**
1. Mark $\\frac{3n}{4}$ on y-axis (for Q₁)
2. Follow same process
**Percentile Calculations:**
- Pth percentile position: $\\frac{P \\times n}{100}$
- Use same ogive method
- Common percentiles: P₁₀, P₉₀ (deciles)
**Advantages of Ogive Method:**
- Visual representation of data distribution
- Easy to estimate any percentile
- Shows cumulative pattern clearly
- Useful for large datasets
**Accuracy Considerations:**
- Smooth curve assumption
- Interpolation between points
- More accurate with larger sample sizes
**Example:**
Heights of 40 students:
$\\begin{array}{|c|c|c|}
\\hline
\\text{Height (cm)} & \\text{Freq.} & \\text{Cum. Freq.} \\\\
\\hline
150-154 & 4 & 4 \\\\
\\hline
155-159 & 8 & 12 \\\\
\\hline
160-164 & 12 & 24 \\\\
\\hline
165-169 & 10 & 34 \\\\
\\hline
170-174 & 6 & 40 \\\\
\\hline
\\end{array}$
**Using Less Than Ogive:**
- Plot points: (154.5, 4), (159.5, 12), (164.5, 24), (169.5, 34), (174.5, 40)
- For Q₁: $\\frac{n}{4} = \\frac{40}{4} = 10$ on y-axis
- Read across to curve, then down to x-axis: Q₁ ≈ 158 cm
- For Q₃: $\\frac{3n}{4} = 30$ on y-axis
- Read across to curve, then down: Q₃ ≈ 167 cm
- IQR = 167 - 158 = 9 cm
**Syllabus Objectives**:
- Construct and interpret ogives accurately to determine quartiles.
- Use ogives to estimate percentiles and analyze data distribution.
- Apply mathematical reasoning to deduce statistical inferences from ogives.
- Use ICT tools to create and analyze cumulative frequency curves.`,
        interactive: "ogive-quartiles",
      },
    ],
  },
];



export const quizQuestions: QuizQuestion[] = [
  {
    question: "Coming soon",
    options: ["Coming soon"],
    correct: 1,
    explanation: "",
  },
];
