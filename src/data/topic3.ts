import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Consumer Finance and Budgeting",
    icon: "🏠",
    content: `Consumer finance covers everyday financial calculations, household management, and personal budgeting skills essential for managing domestic finances.`,
    subsections: [
      {
        title: "Consumer Arithmetic and Discounts",
        content: `**CONSUMER ARITHMETIC**

Foundation of financial mathematics covering everyday calculations:

**Basic Concepts:**
- Cost Price (CP): Original price paid for an item
- Selling Price (SP): Price at which item is sold
- Marked Price (MP): Listed price before discounts
- Discount: Reduction from marked price

**Key Formulas:**
- Discount = Marked Price - Selling Price
- Discount% = $\\frac{\\text{Discount}}{\\text{Marked Price}} \\times 100\\%$
- Final Price = Marked Price - Discount

**Data Interpretation:**
- Reading and interpreting bills, receipts, and price lists
- Extracting relevant data for calculations
- Understanding different pricing structures

**Example:**
A shirt marked at $50 has a 20% discount:
- Discount = $50 \\times 0.20 = $10
- Final Price = $50 - $10 = $40`,
        interactive: "consumer-arithmetic",
      },
      {
        title: "Household Bills and Budgets",
        content: `**HOUSEHOLD BILLS (Forms 1-2)**

Managing domestic financial responsibilities:

**Types of Household Bills:**
- Electricity: Based on units consumed (kWh)
- Water: Based on volume used (liters/gallons)
- Gas: Based on units consumed
- Phone/Internet: Fixed + variable charges
- Municipal rates and taxes

**Bill Calculation:**
- Total = Fixed Charge + (Rate × Units Used) + VAT
- Understanding tariff structures
- Reading meter readings and calculating consumption

**HOUSEHOLD BUDGETS**
Planning and managing family finances:

**Budget Components:**
- Income: Salaries, allowances, other sources
- Fixed Expenses: Rent, insurance, loan payments
- Variable Expenses: Food, transport, entertainment
- Savings: Emergency fund, investments

**Budget Preparation:**
- Listing all income sources
- Categorizing expenses
- Calculating surplus/deficit
- Budget Formula: Income = Fixed Expenses + Variable Expenses + Savings

**Activities:**
- Preparing monthly household budgets
- Analyzing spending patterns
- Making budget adjustments`,
        interactive: "household-bills",
      },
      {
        title: "Corporate Bills and Enterprise Budgets",
        content: `**CORPORATE BILLS (Form 3)**

Business-level financial calculations:

**Types of Corporate Bills:**
- Utility bills for businesses
- Commercial rates and tariffs
- Bulk purchasing invoices
- Service provider bills
- Industrial consumption calculations

**Key Differences from Household Bills:**
- Higher consumption volumes
- Different tariff structures
- Commercial rates vs domestic rates
- VAT implications for businesses

**SMALL SCALE ENTERPRISE BUDGETS**

**Components of Enterprise Budget:**
- Revenue projections
- Operating expenses
- Raw materials costs
- Labor costs
- Fixed costs (rent, equipment)
- Variable costs (utilities, transport)
- Profit projections

**Budget Preparation Steps:**
1. Estimate sales revenue
2. Calculate cost of goods sold
3. List operating expenses
4. Determine break-even point
5. Project profit/loss

**Example:**
Small bakery monthly budget:
- Revenue: $2000 (bread sales)
- Raw materials: $600
- Labor: $500
- Utilities: $200
- Rent: $300
- Net Profit: $2000 - $1600 = $400`,
        interactive: "enterprise-budgets",
      },
    ],
  },
  {
    title: "Business Finance and Investment",
    icon: "📈",
    content: `Business finance encompasses profit and loss calculations, interest computations, and investment analysis essential for commercial operations and financial planning.`,
    subsections: [
      {
        title: "Profit and Loss Calculations",
        content: `**PROFIT AND LOSS (Forms 1-3)**

Essential business calculations for buying and selling:

**Key Terms:**
- Cost Price (CP): Price paid to acquire goods
- Selling Price (SP): Price at which goods are sold
- Profit: When SP > CP
- Loss: When CP > SP
- Overhead expenses: Additional costs (transport, storage)

**Basic Formulas:**
- Profit = SP - CP
- Loss = CP - SP
- Profit% = $\\frac{\\text{Profit}}{\\text{CP}} \\times 100\\%$
- Loss% = $\\frac{\\text{Loss}}{\\text{CP}} \\times 100\\%$

**Advanced Calculations:**
- Finding SP when CP and profit% are given: SP = CP(1 + profit%/100)
- Finding CP when SP and profit% are given: CP = $\\frac{SP}{1 + profit\\%/100}$
- Including overhead expenses in calculations

**Business Applications:**
- Retail margin calculations
- Wholesale vs retail pricing
- Bulk purchase advantages
- Seasonal pricing strategies

**Example:**
Article bought for $80, sold for $100:
- Profit = $100 - $80 = $20
- Profit% = $\\frac{20}{80} \\times 100\\% = 25\\%$`,
        interactive: "profit-loss",
      },
      {
        title: "Simple and Compound Interest",
        content: `**SIMPLE INTEREST (Form 3)**

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

**COMPOUND INTEREST (Form 4)**

Interest calculated on principal plus accumulated interest:

**Annual Compounding:**
$A = P(1 + \\frac{r}{100})^t$

**Different Compounding Periods:**
- Semi-annually: $A = P(1 + \\frac{r}{200})^{2t}$
- Quarterly: $A = P(1 + \\frac{r}{400})^{4t}$
- Monthly: $A = P(1 + \\frac{r}{1200})^{12t}$

**Comparison:**
- Compound interest grows exponentially
- Simple interest grows linearly
- Difference becomes significant over time

**Applications:**
- Bank savings accounts, fixed deposits
- Investment planning, loan calculations

**Example:**
$1000 at 8% compounded annually for 2 years:
$A = 1000(1.08)^2 = $1166.40$`,
        interactive: "interest-calculations",
      },
      {
        title: "Hire Purchase and Commission",
        content: `**HIRE PURCHASE (Forms 3-4)**

System of buying goods through installments:

**Key Components:**
- Cash Price: Full price if paid immediately
- Down Payment: Initial payment made
- Monthly Installments: Regular payments
- Total HP Price: Down payment + all installments

**Calculations:**
- Total HP Price = Down Payment + (Monthly Payment × Number of months)
- Extra amount paid = Total HP Price - Cash Price
- HP Interest Rate = $\\frac{\\text{Extra Amount}}{\\text{Cash Price}} \\times 100\\%$

**COMMISSION (Form 4)**

Payment based on sales performance:

**Types of Commission:**
- Flat Rate: Fixed percentage of sales
- Graduated/Tiered: Different rates for different levels
- Salary + Commission: Base salary plus commission

**Calculations:**
- Basic Commission = Sales × Commission Rate
- Graduated Commission: Different rates for different sales levels

**Example:**
TV costs $800 cash or $200 down + $55/month for 12 months:
- Total HP = $200 + ($55 × 12) = $860
- Extra paid = $860 - $800 = $60
- Interest = $\\frac{60}{800} \\times 100\\% = 7.5\\%$`,
        interactive: "hire-purchase-commission",
      },
    ],
  },
  {
    title: "Banking and Taxation",
    icon: "🏦",
    content: `Banking and taxation covers financial institutions, currency exchange, tax systems, and government financial policies essential for understanding modern financial systems.`,
    subsections: [
      {
        title: "Bank Statements and Financial Records",
        content: `**BANK STATEMENTS (Form 4)**

Record and analysis of account transactions:

**Components of Bank Statement:**
- Date of transaction
- Transaction description
- Reference/check number
- Debit (money out) - withdrawals, payments
- Credit (money in) - deposits, transfers
- Running balance

**Types of Transactions:**
- Deposits (salary, cash deposits)
- Withdrawals (ATM, counter)
- Electronic transfers
- Standing orders, direct debits
- Bank charges and fees

**Balance Calculations:**
New Balance = Previous Balance + Credits - Debits

**Reconciliation and Analysis:**
- Comparing bank statement with personal records
- Identifying discrepancies
- Understanding bank charges
- Tracking spending patterns
- Extracting data for financial planning

**Example Analysis:**
Opening Balance: $1000
Salary Credit: +$800
Rent Debit: -$300
Utilities Debit: -$150
Closing Balance: $1000 + $800 - $300 - $150 = $1350`,
        interactive: "bank-statements",
      },
      {
        title: "Foreign Exchange and Currency",
        content: `**FOREIGN EXCHANGE (Form 4)**

Converting between different currencies:

**Key Concepts:**
- Exchange Rate: Price of one currency in terms of another
- Base Currency: Currency being converted from
- Quote Currency: Currency being converted to
- Buying Rate: Rate at which bank buys foreign currency
- Selling Rate: Rate at which bank sells foreign currency

**Conversion Formula:**
Amount in Quote Currency = Amount in Base Currency × Exchange Rate

**Practical Applications:**
- International travel and tourism
- Import/export business
- Online shopping from foreign countries
- Investment in foreign markets
- Remittances and money transfers

**Bank Charges:**
- Commission on currency exchange
- Service fees
- Spread between buying and selling rates

**Cross Rate Calculations:**
When direct exchange rate not available, calculate via intermediary currency

**Example:**
Convert $100 USD to ZWL at rate 1 USD = 350 ZWL:
Amount in ZWL = $100 × 350 = 35,000 ZWL`,
        interactive: "foreign-exchange",
      },
      {
        title: "Taxation Systems",
        content: `**TAXATION (Form 4)**

Understanding various tax systems and calculations:

**VALUE ADDED TAX (VAT):**
- Tax on goods and services
- VAT = Price × VAT Rate
- Total Cost = Price + VAT
- VAT-inclusive vs VAT-exclusive pricing

**INCOME TAX (PAY AS YOU EARN - PAYE):**
- Progressive tax system with different brackets
- Tax-free threshold and allowances
- Deducted at source from salary

**PAYE Calculation Example:**
Tax Brackets:
- First $300: 0%
- Next $200: 10%  
- Above $500: 25%

**CUSTOMS AND EXCISE DUTY:**
- Tax on imported goods
- Based on value or quantity
- Duty = Value × Duty Rate
- VAT calculated on duty-inclusive value

**Comprehensive Example:**
Imported car value $10,000, duty 30%, VAT 15%:
- Duty = $10,000 × 0.30 = $3,000
- Duty-inclusive value = $13,000
- VAT = $13,000 × 0.15 = $1,950
- Total cost = $14,950

**Applications:**
- Import cost calculations
- Business expense planning
- Personal tax planning`,
        interactive: "taxation",
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
