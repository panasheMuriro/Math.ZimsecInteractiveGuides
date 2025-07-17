import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Financial Mathematics",
    icon: "💰",
    content: `Financial mathematics deals with practical applications of mathematics in everyday financial situations, from personal budgeting to business calculations.`,
    subsections: [
      {
        title: "Consumer Arithmetic",
        content: `**CONSUMER ARITHMETIC**

Everyday calculations involving money and purchases:

**Basic Concepts:**
- Cost Price (CP): Original price paid for an item
- Selling Price (SP): Price at which item is sold
- Marked Price (MP): Listed price before discounts
- Discount: Reduction from marked price

**Key Formulas:**
- Discount = Marked Price - Selling Price
- Discount% = $\\frac{\\text{Discount}}{\\text{Marked Price}} \\times 100\\%$
- Final Price = Marked Price - Discount

**Example:**
A shirt marked at $50 has a 20% discount:
- Discount = $50 \\times 0.20 = $10
- Final Price = $50 - $10 = $40`,
        interactive: "consumer-arithmetic",
      },
      {
        title: "Household Bills and Budgets",
        content: `**HOUSEHOLD BILLS**

Common household expenses and calculations:

**Types of Bills:**
- Electricity: Based on units consumed (kWh)
- Water: Based on volume used (liters/gallons)
- Gas: Based on units consumed
- Phone/Internet: Fixed + variable charges

**Bill Calculation:**
- Total = Fixed Charge + (Rate × Units Used)
- VAT may be added to final amount

**HOUSEHOLD BUDGETS**
Planning and managing family finances:

**Budget Components:**
- Income: Salary, allowances, other sources
- Fixed Expenses: Rent, insurance, loan payments
- Variable Expenses: Food, transport, entertainment
- Savings: Emergency fund, investments

**Budget Formula:**
Income = Fixed Expenses + Variable Expenses + Savings`,
        interactive: "household-bills",
      },
      {
        title: "Profit and Loss",
        content: `**PROFIT AND LOSS**

Business calculations for buying and selling:

**Key Terms:**
- Cost Price (CP): Price paid to acquire goods
- Selling Price (SP): Price at which goods are sold
- Profit: When SP > CP
- Loss: When CP > SP

**Formulas:**
- Profit = SP - CP
- Loss = CP - SP
- Profit% = $\\frac{\\text{Profit}}{\\text{CP}} \\times 100\\%$
- Loss% = $\\frac{\\text{Loss}}{\\text{CP}} \\times 100\\%$

**Finding SP/CP:**
- SP = CP + Profit = CP(1 + Profit%)
- CP = $\\frac{SP}{1 + p}$, where _p_ is the profit percentage in decimal

**Example:**
Article bought for $80, sold for $100:
- Profit = $100 - $80 = $20
- Profit% = $\\frac{20}{80} \\times 100\\% = 25\\%$`,
        interactive: "profit-loss",
      },
      {
        title: "Simple Interest",
        content: `**SIMPLE INTEREST**

Interest calculated only on the principal amount:

**Formula:**
$I = \\frac{PRT}{100}$

Where:
- I = Interest earned
- P = Principal (initial amount)
- R = Rate of interest per year
- T = Time in years

**Amount Formula:**
$A = P + I = P + \\frac{PRT}{100} = P(1 + \\frac{RT}{100})$

**Example:**
Principal = $1000, Rate = 5% per year, Time = 3 years
- Interest = $\\frac{1000 \\times 5 \\times 3}{100} = $150
- Amount = $1000 + $150 = $1150

**Applications:**
- Bank savings accounts
- Simple loans
- Investment calculations`,
        interactive: "simple-interest",
      },
      {
        title: "Compound Interest",
        content: `**COMPOUND INTEREST**

Interest calculated on principal plus accumulated interest:

**Annual Compounding:**
$A = P(1 + \\frac{r}{100})^t$

Where:
- A = Final amount
- P = Principal
- r = Annual interest rate
- t = Time in years

**Compound Interest:**
$CI = A - P = P(1 + \\frac{r}{100})^t - P$

**Other Compounding Periods:**
- Semi-annually: $A = P(1 + \\frac{r}{200})^{2t}$
- Quarterly: $A = P(1 + \\frac{r}{400})^{4t}$
- Monthly: $A = P(1 + \\frac{r}{1200})^{12t}$

**Example:**
$1000 at 8% compounded annually for 2 years:
$A = 1000(1 + \\frac{8}{100})^2 = 1000(1.08)^2 = $1166.40$`,
        interactive: "compound-interest",
      },
      {
        title: "Hire Purchase",
        content: `**HIRE PURCHASE**

System of buying goods through installments:

**Key Components:**
- Cash Price: Full price if paid immediately
- Down Payment: Initial payment made
- Monthly Installments: Regular payments
- Total HP Price: Down payment + all installments

**Calculations:**
- Balance after down payment = Cash Price - Down Payment
- Total HP Price = Down Payment + (Monthly Payment × Number of months)
- Extra amount paid = Total HP Price - Cash Price

**Interest Rate:**
Interest% = $\\frac{\\text{Extra Amount}}{\\text{Cash Price}} \\times 100\\%$

**Example:**
TV costs $800 cash or $200 down + $55/month for 12 months:
- Total HP = $200 + ($55 × 12) = $200 + $660 = $860
- Extra paid = $860 - $800 = $60
- Interest = $\\frac{60}{800} \\times 100\\% = 7.5\\%$`,
        interactive: "hire-purchase",
      },
      {
        title: "Commission and Sales Tax",
        content: `**COMMISSION**

Payment based on sales performance:

**Types:**
- Flat Rate: Fixed percentage of sales
- Graduated: Different rates for different levels
- Salary + Commission: Base salary plus commission

**Calculation:**
Commission = Sales × Commission Rate

**SALES TAX AND VAT**
**Value Added Tax (VAT):**
- Tax on goods and services
- Usually expressed as percentage
- VAT = Price × VAT Rate
- Total Cost = Price + VAT

**Income Tax (PAYE):**
- Pay As You Earn system
- Progressive tax rates
- Calculated on taxable income

**Example:**
Item costs $100, VAT = 15%:
- VAT Amount = $100 × 0.15 = $15
- Total Cost = $100 + $15 = $115`,
        interactive: "commission-tax",
      },
      {
        title: "Foreign Exchange and Banking",
        content: `**FOREIGN EXCHANGE**

Converting between different currencies:

**Exchange Rate:**
- Price of one currency in terms of another
- Buying Rate: Rate at which bank buys foreign currency
- Selling Rate: Rate at which bank sells foreign currency

**Conversion:**
Amount in Currency B = Amount in Currency A × Exchange Rate

**BANK STATEMENTS**
Record of account transactions:

**Components:**
- Date of transaction
- Description
- Debit (money out)
- Credit (money in)
- Running balance

**Balance Calculation:**
New Balance = Previous Balance + Credits - Debits

**Example:**
Convert $100 USD to ZWL at rate 1 USD = 25 ZWL:
Amount in ZWL = $100 × 25 = 2500 ZWL`,
        interactive: "foreign-exchange",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question:
      "A shirt marked at $60 is sold with a 25% discount. What is the selling price?",
    options: ["$35", "$40", "$45", "$50"],
    correct: 2,
    explanation: "Discount = $60 × 0.25 = $15. Selling price = $60 - $15 = $45",
  },
  {
    question:
      "An article is bought for $80 and sold for $100. What is the profit percentage?",
    options: ["20%", "25%", "30%", "35%"],
    correct: 1,
    explanation: "Profit = $100 - $80 = $20. Profit% = (20/80) × 100% = 25%",
  },
  {
    question: "Find the simple interest on $1200 at 8% per annum for 3 years:",
    options: ["$288", "$296", "$304", "$312"],
    correct: 0,
    explanation: "I = PRT/100 = (1200 × 8 × 3)/100 = $288",
  },
  {
    question:
      "What is the compound interest on $1000 at 10% per annum for 2 years?",
    options: ["$200", "$210", "$220", "$230"],
    correct: 1,
    explanation: "A = 1000(1.10)² = $1210. CI = $1210 - $1000 = $210",
  },
  {
    question:
      "A TV costs $800 cash or $150 down + $60/month for 12 months. How much extra is paid in hire purchase?",
    options: ["$70", "$80", "$90", "$100"],
    correct: 0,
    explanation:
      "HP total = $150 + ($60 × 12) = $870. Extra = $870 - $800 = $70",
  },
  {
    question: "If an item costs $120 and VAT is 15%, what is the total cost?",
    options: ["$135", "$138", "$140", "$142"],
    correct: 1,
    explanation: "VAT = $120 × 0.15 = $18. Total = $120 + $18 = $138",
  },
  {
    question:
      "A salesperson earns 5% commission on sales of $8000. What is the commission?",
    options: ["$350", "$400", "$450", "$500"],
    correct: 1,
    explanation: "Commission = $8000 × 0.05 = $400",
  },
  {
    question: "Convert $200 USD to ZWL at exchange rate 1 USD = 30 ZWL:",
    options: ["5000 ZWL", "6000 ZWL", "7000 ZWL", "8000 ZWL"],
    correct: 1,
    explanation: "Amount in ZWL = $200 × 30 = 6000 ZWL",
  },
];
