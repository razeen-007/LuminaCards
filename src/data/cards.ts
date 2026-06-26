export const indianCreditCards = [
  // ===================== HDFC BANK =====================
  {
    id: 'hdfc-infinia', bank: 'HDFC Bank', name: 'Infinia Credit Card Metal Edition',
    joiningFee: 12500, annualFee: 12500, minCibil: 780, minIncome: 300000,
    categories: ['travel', 'dining', 'shopping'], rating: 4.9,
    features: ['Unlimited Lounge Access', '33% Reward Rate on flights/hotels via SmartBuy', '24x7 Global Concierge']
  },
  {
    id: 'hdfc-diners-black', bank: 'HDFC Bank', name: 'Diners Club Black',
    joiningFee: 10000, annualFee: 10000, minCibil: 750, minIncome: 175000,
    categories: ['travel', 'dining', 'lifestyle'], rating: 4.8,
    features: ['Unlimited Airport Lounge', '6 complimentary Golf games/quarter', 'Marriott Bonvoy elite tier']
  },
  {
    id: 'hdfc-regalia-gold', bank: 'HDFC Bank', name: 'Regalia Gold Credit Card',
    joiningFee: 2500, annualFee: 2500, minCibil: 750, minIncome: 100000,
    categories: ['travel', 'shopping'], rating: 4.7,
    features: ['12 Domestic & 6 International Lounge visits', 'Rewards on Marks & Spencer, Myntra, Reliance Digital', 'Flight vouchers on milestone spend']
  },
  {
    id: 'hdfc-millennia', bank: 'HDFC Bank', name: 'Millennia Credit Card',
    joiningFee: 1000, annualFee: 1000, minCibil: 700, minIncome: 35000,
    categories: ['shopping', 'dining', 'entertainment'], rating: 4.6,
    features: ['5% Cashback on Amazon, Flipkart, Myntra, Swiggy', '1% Cashback on all other spends', '8 Complimentary Domestic Lounge access']
  },
  {
    id: 'hdfc-moneyback-plus', bank: 'HDFC Bank', name: 'MoneyBack+ Credit Card',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 25000,
    categories: ['shopping', 'groceries'], rating: 4.3,
    features: ['10X CashPoints on Amazon, BigBasket, Flipkart', '500 CashPoints on payment of joining fee', 'Quarterly milestone benefits']
  },
  {
    id: 'hdfc-swiggy', bank: 'HDFC Bank', name: 'Swiggy HDFC Bank Credit Card',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 25000,
    categories: ['dining', 'groceries'], rating: 4.5,
    features: ['10% Cashback on Swiggy (Food, Instamart, Dineout)', '5% Cashback on online spends', 'Complimentary Swiggy One membership']
  },
  {
    id: 'hdfc-tata-neu-infinity', bank: 'HDFC Bank', name: 'Tata Neu Infinity HDFC',
    joiningFee: 1499, annualFee: 1499, minCibil: 750, minIncome: 100000,
    categories: ['shopping', 'groceries', 'travel'], rating: 4.6,
    features: ['10% NeuCoins on Tata Neu App', '1.5% NeuCoins on UPI', '8 Domestic & 4 International Lounge visits']
  },
  {
    id: 'hdfc-tata-neu-plus', bank: 'HDFC Bank', name: 'Tata Neu Plus HDFC',
    joiningFee: 499, annualFee: 499, minCibil: 700, minIncome: 25000,
    categories: ['shopping', 'groceries'], rating: 4.4,
    features: ['7% NeuCoins on Tata Neu App', '1% NeuCoins on UPI', '4 Domestic Lounge visits']
  },
  {
    id: 'hdfc-shaurya', bank: 'HDFC Bank', name: 'Shaurya Defense Credit Card',
    joiningFee: 0, annualFee: 0, minCibil: 700, minIncome: 20000,
    categories: ['fuel', 'shopping'], rating: 4.5,
    features: ['Designed for Armed Forces', 'Lifetime free', 'Canteen Stores Department (CSD) benefits']
  },

  // ===================== SBI CARD =====================
  {
    id: 'sbi-aurum', bank: 'SBI Card', name: 'AURUM Credit Card',
    joiningFee: 10000, annualFee: 10000, minCibil: 780, minIncome: 200000,
    categories: ['travel', 'lifestyle'], rating: 4.7,
    features: ['Unlimited International Lounge', '4 Movie tickets/month', 'Dedicated Concierge']
  },
  {
    id: 'sbi-elite', bank: 'SBI Card', name: 'SBI Card ELITE',
    joiningFee: 4999, annualFee: 4999, minCibil: 750, minIncome: 100000,
    categories: ['travel', 'entertainment'], rating: 4.5,
    features: ['Free Movie Tickets worth Rs. 6,000/year', 'Vistara Silver Membership', '6 International Lounge visits']
  },
  {
    id: 'sbi-prime', bank: 'SBI Card', name: 'SBI Card PRIME',
    joiningFee: 2999, annualFee: 2999, minCibil: 750, minIncome: 75000,
    categories: ['shopping', 'dining', 'utilities'], rating: 4.5,
    features: ['10 Reward Points per Rs.100 on Dining, Groceries, Movies', 'Pizza Hut gift vouchers', 'Club Vistara Silver tier']
  },
  {
    id: 'sbi-cashback', bank: 'SBI Card', name: 'Cashback SBI Card',
    joiningFee: 999, annualFee: 999, minCibil: 700, minIncome: 35000,
    categories: ['shopping'], rating: 4.8,
    features: ['5% Cashback on ALL online spends without merchant restriction', '1% Cashback on offline spends', '4 Domestic Lounge visits']
  },
  {
    id: 'sbi-simplyclick', bank: 'SBI Card', name: 'SimplyCLICK SBI Card',
    joiningFee: 499, annualFee: 499, minCibil: 650, minIncome: 20000,
    categories: ['shopping', 'entertainment'], rating: 4.4,
    features: ['10X Rewards on Amazon, Apollo24X7, BookMyShow', 'Amazon gift card on joining', 'Cleartrip vouchers on milestone']
  },
  {
    id: 'sbi-simplysave', bank: 'SBI Card', name: 'SimplySAVE SBI Card',
    joiningFee: 499, annualFee: 499, minCibil: 650, minIncome: 20000,
    categories: ['dining', 'groceries', 'movies'], rating: 4.3,
    features: ['10X Rewards on Dining, Movies, Department Stores', 'Annual fee reversal on 1 Lakh spend']
  },
  {
    id: 'sbi-bpcl-octane', bank: 'SBI Card', name: 'BPCL SBI Card OCTANE',
    joiningFee: 1499, annualFee: 1499, minCibil: 700, minIncome: 40000,
    categories: ['fuel', 'dining'], rating: 4.6,
    features: ['7.25% Value back on BPCL fuel stations', '4 Domestic Lounge visits', '25 Reward points on Movies & Dining']
  },
  {
    id: 'sbi-irctc', bank: 'SBI Card', name: 'IRCTC SBI Card Premier',
    joiningFee: 1499, annualFee: 1499, minCibil: 700, minIncome: 35000,
    categories: ['travel'], rating: 4.2,
    features: ['10% value back on IRCTC AC ticket bookings', 'Railway Lounge access', 'Zero payment gateway charge on IRCTC']
  },
  {
    id: 'sbi-vistara', bank: 'SBI Card', name: 'Club Vistara SBI Card PRIME',
    joiningFee: 2999, annualFee: 2999, minCibil: 750, minIncome: 80000,
    categories: ['travel'], rating: 4.5,
    features: ['1 Premium Economy ticket as welcome gift', 'Up to 4 free Premium Economy tickets on milestones', 'CV Silver Tier']
  },

  // ===================== ICICI BANK =====================
  {
    id: 'icici-emeralde', bank: 'ICICI Bank', name: 'Emeralde Private Metal',
    joiningFee: 12500, annualFee: 12500, minCibil: 780, minIncome: 250000,
    categories: ['travel', 'lifestyle'], rating: 4.7,
    features: ['Unlimited International & Domestic Lounge', 'Unlimited Spa access at airports', 'Taj Epicure Membership']
  },
  {
    id: 'icici-sapphiro', bank: 'ICICI Bank', name: 'Sapphiro Credit Card',
    joiningFee: 6500, annualFee: 3500, minCibil: 750, minIncome: 150000,
    categories: ['travel', 'entertainment'], rating: 4.4,
    features: ['4 Domestic Lounge visits/quarter', 'Buy 1 Get 1 free on BookMyShow (up to Rs. 500)', 'Golf privileges']
  },
  {
    id: 'icici-rubyx', bank: 'ICICI Bank', name: 'Rubyx Credit Card',
    joiningFee: 3000, annualFee: 2000, minCibil: 750, minIncome: 100000,
    categories: ['shopping', 'travel'], rating: 4.3,
    features: ['Dual cards (Amex/Visa)', '2 Domestic Lounge visits/quarter', 'Buy 1 Get 1 free on BookMyShow']
  },
  {
    id: 'icici-amazon-pay', bank: 'ICICI Bank', name: 'Amazon Pay ICICI Card',
    joiningFee: 0, annualFee: 0, minCibil: 700, minIncome: 25000,
    categories: ['shopping', 'groceries'], rating: 4.9,
    features: ['Lifetime Free', '5% Unlimited Cashback on Amazon (Prime members)', '2% Cashback on flight/bill payments on Amazon', '1% Cashback everywhere else']
  },
  {
    id: 'icici-coral', bank: 'ICICI Bank', name: 'Coral Credit Card',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 30000,
    categories: ['dining', 'entertainment'], rating: 4.1,
    features: ['1 Domestic Lounge/quarter', 'Discount on BookMyShow', 'Culinary Treats program']
  },
  {
    id: 'icici-mmt', bank: 'ICICI Bank', name: 'MakeMyTrip ICICI Signature',
    joiningFee: 2500, annualFee: 0, minCibil: 750, minIncome: 80000,
    categories: ['travel'], rating: 4.4,
    features: ['Zero Annual Fee', 'MMT Holiday voucher worth Rs. 2,500', 'MMT Black Membership', 'International Lounge access']
  },
  {
    id: 'icici-hpcl', bank: 'ICICI Bank', name: 'HPCL Super Saver',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 30000,
    categories: ['fuel', 'groceries'], rating: 4.3,
    features: ['5% Cashback on HPCL fuel', '5% back on groceries and department stores', '2 Domestic Lounge visits']
  },

  // ===================== AXIS BANK =====================
  {
    id: 'axis-magnus', bank: 'Axis Bank', name: 'Magnus Credit Card',
    joiningFee: 12500, annualFee: 12500, minCibil: 780, minIncome: 200000,
    categories: ['travel', 'lifestyle'], rating: 4.8,
    features: ['Unlimited Domestic Lounge', '8 Guest Airport Lounge visits', 'Tata CLiQ / Yatra vouchers worth Rs. 10,000']
  },
  {
    id: 'axis-atlas', bank: 'Axis Bank', name: 'ATLAS Credit Card',
    joiningFee: 5000, annualFee: 5000, minCibil: 750, minIncome: 100000,
    categories: ['travel'], rating: 4.7,
    features: ['High reward rate for flight/hotel bookings (EDGE Miles)', 'Tier-based lounge benefits', '5000 EDGE Miles on joining']
  },
  {
    id: 'axis-select', bank: 'Axis Bank', name: 'Select Credit Card',
    joiningFee: 3000, annualFee: 3000, minCibil: 750, minIncome: 75000,
    categories: ['dining', 'groceries'], rating: 4.4,
    features: ['Priority Pass Membership', '20% off on BigBasket', '40% off on Swiggy']
  },
  {
    id: 'axis-ace', bank: 'Axis Bank', name: 'Ace Credit Card',
    joiningFee: 499, annualFee: 499, minCibil: 700, minIncome: 30000,
    categories: ['utilities', 'shopping'], rating: 4.8,
    features: ['5% Cashback on Utilities (GPay)', '4% Cashback on Swiggy, Zomato, Ola', 'Unlimited 2% Cashback on all other spends']
  },
  {
    id: 'axis-flipkart', bank: 'Axis Bank', name: 'Flipkart Axis Bank',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 25000,
    categories: ['shopping', 'travel'], rating: 4.7,
    features: ['5% Unlimited Cashback on Flipkart & Cleartrip', '4% on Swiggy, PVR, Uber', '4 Domestic Lounge visits']
  },
  {
    id: 'axis-airtel', bank: 'Axis Bank', name: 'Airtel Axis Bank',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 25000,
    categories: ['utilities', 'dining'], rating: 4.6,
    features: ['25% Cashback on Airtel recharges/bills', '10% Cashback on BigBasket, Swiggy, Zomato', '4 Domestic Lounge visits']
  },
  {
    id: 'axis-my-zone', bank: 'Axis Bank', name: 'My Zone Credit Card',
    joiningFee: 500, annualFee: 500, minCibil: 650, minIncome: 20000,
    categories: ['movies', 'shopping'], rating: 4.3,
    features: ['Often lifetime free', 'Buy 1 Get 1 on Paytm Movies', 'Free SonyLiv Premium Subscription']
  },
  {
    id: 'axis-neo', bank: 'Axis Bank', name: 'Neo Credit Card',
    joiningFee: 250, annualFee: 250, minCibil: 650, minIncome: 15000,
    categories: ['shopping', 'dining'], rating: 4.1,
    features: ['10% off on Myntra & BookMyShow', '40% off on Zomato', 'Often issued as lifetime free']
  },

  // ===================== AMERICAN EXPRESS =====================
  {
    id: 'amex-platinum', bank: 'American Express', name: 'Platinum Charge Card',
    joiningFee: 60000, annualFee: 60000, minCibil: 780, minIncome: 2000000,
    categories: ['travel', 'lifestyle', 'dining'], rating: 4.9,
    features: ['Global Lounge Collection', 'Taj Taj Epicure Plus', 'Elite status with Marriott, Hilton, Radisson', 'Do-Anything Concierge']
  },
  {
    id: 'amex-plat-travel', bank: 'American Express', name: 'Platinum Travel',
    joiningFee: 3500, annualFee: 5000, minCibil: 750, minIncome: 60000,
    categories: ['travel'], rating: 4.6,
    features: ['Up to Rs. 40,000 Taj Vouchers on milestones', '8 Domestic Lounge visits', '0% convenience fee on HPCL']
  },
  {
    id: 'amex-plat-reserve', bank: 'American Express', name: 'Platinum Reserve',
    joiningFee: 5000, annualFee: 10000, minCibil: 750, minIncome: 100000,
    categories: ['lifestyle', 'dining'], rating: 4.4,
    features: ['Movies or online shopping vouchers worth Rs. 1,000 every month', 'Complimentary Priority Pass', 'Taj Epicure Membership']
  },
  {
    id: 'amex-mrcc', bank: 'American Express', name: 'Membership Rewards (MRCC)',
    joiningFee: 1000, annualFee: 4500, minCibil: 700, minIncome: 50000,
    categories: ['shopping', 'rewards'], rating: 4.5,
    features: ['1,000 Bonus Points on 4 transactions of Rs. 1500/month', 'Annual fee waiver on 1.5 Lakh spend', 'Amex Offers']
  },
  {
    id: 'amex-smartearn', bank: 'American Express', name: 'SmartEarn Credit Card',
    joiningFee: 495, annualFee: 495, minCibil: 700, minIncome: 40000,
    categories: ['shopping', 'dining'], rating: 4.3,
    features: ['10X points on Flipkart, Uber', '5X points on Amazon, Swiggy, BookMyShow', 'Rs. 500 cashback on Rs. 10k spend in 90 days']
  },

  // ===================== KOTAK MAHINDRA BANK =====================
  {
    id: 'kotak-white', bank: 'Kotak Bank', name: 'White Credit Card',
    joiningFee: 3000, annualFee: 3000, minCibil: 750, minIncome: 150000,
    categories: ['lifestyle', 'travel'], rating: 4.5,
    features: ['White Pass value system', 'Premium brand vouchers (Apple, Armani, etc)', 'International Lounge access']
  },
  {
    id: 'kotak-zen', bank: 'Kotak Bank', name: 'Zen Signature Credit Card',
    joiningFee: 1500, annualFee: 1500, minCibil: 750, minIncome: 60000,
    categories: ['shopping', 'travel'], rating: 4.4,
    features: ['15 Zen points per Rs. 150 on apparel/jewelry', 'Priority Pass with 3 International visits', '8 Domestic Lounge visits']
  },
  {
    id: 'kotak-mojo', bank: 'Kotak Bank', name: 'Mojo Platinum',
    joiningFee: 1000, annualFee: 1000, minCibil: 700, minIncome: 40000,
    categories: ['shopping'], rating: 4.2,
    features: ['2.5 Mojo points per Rs. 100 online', '8 Domestic Lounge visits/year', 'Quarterly milestones']
  },
  {
    id: 'kotak-league', bank: 'Kotak Bank', name: 'League Platinum',
    joiningFee: 500, annualFee: 500, minCibil: 700, minIncome: 30000,
    categories: ['shopping', 'entertainment'], rating: 4.1,
    features: ['Often lifetime free', '8 Reward points on every Rs. 150 spent', '4 PVR tickets on milestone']
  },
  {
    id: 'kotak-pvrc', bank: 'Kotak Bank', name: 'PVR Kotak Platinum',
    joiningFee: 0, annualFee: 0, minCibil: 700, minIncome: 25000,
    categories: ['movies', 'entertainment'], rating: 4.3,
    features: ['2 free PVR tickets every month on 10k spend', '15% cashback on F&B at PVR', 'Zero joining fee']
  },

  // ===================== INDUSIND BANK =====================
  {
    id: 'indusind-pinnacle', bank: 'IndusInd Bank', name: 'Pinnacle Credit Card',
    joiningFee: 15000, annualFee: 0, minCibil: 780, minIncome: 150000,
    categories: ['travel', 'lifestyle'], rating: 4.6,
    features: ['2.5 Reward Points on e-commerce', 'Free Golf Games', 'Priority Pass']
  },
  {
    id: 'indusind-legend', bank: 'IndusInd Bank', name: 'Legend Credit Card',
    joiningFee: 0, annualFee: 0, minCibil: 750, minIncome: 75000,
    categories: ['shopping', 'dining'], rating: 4.4,
    features: ['Lifetime Free', '2X Rewards on weekend spends', 'Buy 1 Get 1 on BookMyShow', 'Lounge access']
  },
  {
    id: 'indusind-aura', bank: 'IndusInd Bank', name: 'Aura Edge Credit Card',
    joiningFee: 500, annualFee: 0, minCibil: 700, minIncome: 30000,
    categories: ['shopping', 'dining'], rating: 4.2,
    features: ['Choose your own reward plan', 'Discount on Zomato, Swiggy', 'Waiver on fuel surcharge']
  },

  // ===================== IDFC FIRST BANK =====================
  {
    id: 'idfc-wealth', bank: 'IDFC FIRST', name: 'FIRST Wealth Credit Card',
    joiningFee: 0, annualFee: 0, minCibil: 780, minIncome: 150000,
    categories: ['travel', 'lifestyle'], rating: 4.8,
    features: ['Lifetime Free', 'Buy 1 Get 1 on Paytm Movies (up to Rs. 500)', 'International Lounge access', 'Low Forex markup (1.5%)']
  },
  {
    id: 'idfc-select', bank: 'IDFC FIRST', name: 'FIRST Select Credit Card',
    joiningFee: 0, annualFee: 0, minCibil: 750, minIncome: 80000,
    categories: ['shopping', 'movies'], rating: 4.6,
    features: ['Lifetime Free', '10X points on incremental spends > 20k', 'Buy 1 Get 1 on Paytm Movies', '4 Domestic Lounge visits']
  },
  {
    id: 'idfc-millennia', bank: 'IDFC FIRST', name: 'FIRST Millennia',
    joiningFee: 0, annualFee: 0, minCibil: 700, minIncome: 30000,
    categories: ['shopping'], rating: 4.5,
    features: ['Lifetime Free', '10X Rewards on birthday', 'Railway Lounge access']
  },
  {
    id: 'idfc-club-vistara', bank: 'IDFC FIRST', name: 'Club Vistara IDFC FIRST',
    joiningFee: 4999, annualFee: 4999, minCibil: 750, minIncome: 100000,
    categories: ['travel'], rating: 4.6,
    features: ['1 Free Premium Economy ticket', 'Up to 5 free tickets on milestones', 'CV Silver Tier']
  },

  // ===================== STANDARD CHARTERED =====================
  {
    id: 'sc-ultimate', bank: 'Standard Chartered', name: 'Ultimate Credit Card',
    joiningFee: 5000, annualFee: 5000, minCibil: 780, minIncome: 200000,
    categories: ['travel', 'rewards'], rating: 4.7,
    features: ['Flat 3.3% Reward Rate on all spends', '5% Cashback on Duty Free', 'Low Forex (2%)']
  },
  {
    id: 'sc-smart', bank: 'Standard Chartered', name: 'Smart Credit Card',
    joiningFee: 499, annualFee: 499, minCibil: 700, minIncome: 35000,
    categories: ['shopping', 'utilities'], rating: 4.4,
    features: ['2% Cashback on all online spends', '1% Cashback on offline spends', 'Extended interest-free period']
  },
  {
    id: 'sc-ease-my-trip', bank: 'Standard Chartered', name: 'EaseMyTrip Credit Card',
    joiningFee: 350, annualFee: 350, minCibil: 700, minIncome: 30000,
    categories: ['travel'], rating: 4.3,
    features: ['20% off on domestic flights via EMT', '10% off on international flights', '1 Domestic Lounge visit/quarter']
  },

  // ===================== AU SMALL FINANCE BANK =====================
  {
    id: 'au-zenith', bank: 'AU Small Finance', name: 'Zenith Credit Card',
    joiningFee: 7999, annualFee: 7999, minCibil: 780, minIncome: 200000,
    categories: ['travel', 'lifestyle'], rating: 4.6,
    features: ['16 International & 16 Domestic Lounge visits', 'Epicure Membership', 'Zomato Pro membership']
  },
  {
    id: 'au-lit', bank: 'AU Small Finance', name: 'LIT Credit Card',
    joiningFee: 0, annualFee: 0, minCibil: 700, minIncome: 30000,
    categories: ['shopping', 'entertainment'], rating: 4.5,
    features: ['Lifetime Free', 'India’s 1st customizable credit card', 'Pay only for features you turn on via app']
  },

  // ===================== YES BANK =====================
  {
    id: 'yes-marquee', bank: 'Yes Bank', name: 'Marquee Credit Card',
    joiningFee: 9999, annualFee: 4999, minCibil: 750, minIncome: 150000,
    categories: ['travel', 'rewards'], rating: 4.7,
    features: ['Unlimited Domestic & International Lounge', 'Buy 1 Get 1 on BookMyShow (Rs. 800)', 'Bespoke Concierge']
  },
  {
    id: 'yes-premio', bank: 'Yes Bank', name: 'Premio Credit Card',
    joiningFee: 999, annualFee: 999, minCibil: 700, minIncome: 50000,
    categories: ['shopping', 'travel'], rating: 4.2,
    features: ['2 Domestic Lounge visits', 'Discounts on Swiggy', 'Golf privileges']
  },

  // ===================== RBL BANK =====================
  {
    id: 'rbl-icon', bank: 'RBL Bank', name: 'Icon Credit Card',
    joiningFee: 5000, annualFee: 5000, minCibil: 750, minIncome: 150000,
    categories: ['movies', 'dining'], rating: 4.4,
    features: ['2 free movie tickets every month', 'Complimentary lounge access', 'Wine & Dine program']
  },
  {
    id: 'rbl-shoprite', bank: 'RBL Bank', name: 'Shoprite Credit Card',
    joiningFee: 500, annualFee: 500, minCibil: 650, minIncome: 25000,
    categories: ['groceries', 'movies'], rating: 4.1,
    features: ['5% value back on grocery', '10% discount on BookMyShow', 'Fuel surcharge waiver']
  }
];
