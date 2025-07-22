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
- **Tally marks:** Quick counting method (||||  ̸)
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
---
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
- Doesn’t show distribution of middle values
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
