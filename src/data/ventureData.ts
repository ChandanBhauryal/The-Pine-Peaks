export interface Competitor {
  id: string;
  name: string;
  pricePerDay: number;
  axisX: number; // Low Convenience to High Convenience (1-10)
  axisY: number; // Standardized to Highly Customized (1-10)
  type: string;
  strength: string;
  weakness: string;
  mainOffer: string;
  evidenceSource: string;
  evidenceStrength: string;
}

export interface Scenario {
  id: 'base' | 'ambitious' | 'conservative';
  name: string;
  sellingPrice: number;
  variableCost: number;
  monthlyFixedCost: number;
  customers: number;
  purchasesPerCustomer: number;
  notes: string;
}

export interface GTMSprint {
  week: number;
  title: string;
  channel: string;
  action: string;
  responsibility: string;
  metric: string;
  learningQuestion: string;
  target: string;
}

export interface MVPFeature {
  id: string;
  name: string;
  priority: 'Must Have' | 'Deliberately Excluded';
  whyNeeded: string;
  customerNeed: string;
  evidenceReason: string;
}

export interface TopAssumption {
  id: string;
  assumption: string;
  whyItMatters: string;
  howToTest: string;
  evidenceNeeded: string;
  defaultStatus: 'Needs Evidence' | 'In Testing' | 'Validated';
}

export const VENTURE_INFO = {
  title: 'DGU VENTURE QUEST',
  subtitle: 'Complete Venture Plan',
  institution: 'DBS Global University',
  department: 'Entrepreneurship & Innovation',
  studentName: 'DGU Student',
  studentEmail: 'chandan.0251mba536@dgu.ac.in',
  ventureName: 'The Pine and Peaks',
  generatedDate: '1/10/2026, 11:12:12 am',
  tagline: 'Living the Himalayas — Nature-based Homestay & Kafni Glacier Basecamp',
  geography: 'Bageshwar district, Kumaon Himalayas, Uttarakhand, India',
};

export const MISSION_0 = {
  initialCustomer:
    'Young travellers, trekking enthusiasts, couples, small groups, and nature-seeking tourists who want to explore the Kafni Glacier and the surrounding Kumaon Himalayas but may face challenges related to comfortable accommodation, local guidance, transportation, food, and authentic local experiences.',
  whyChosen:
    'To provide travellers with an authentic and comfortable Himalayan experience while creating sustainable tourism and income opportunities for the local community.',
  ventureIdea:
    'The Pine and Peaks will be a nature-based homestay venture in the Bageshwar district of Uttarakhand, designed for travellers who want to experience the peace, culture and natural beauty of the Kumaon Himalayas, while also using the property as a comfortable base for exploring the Kafni Glacier and surrounding trekking destinations. Rather than competing with conventional hotels, the venture focuses on "living the Himalayas"—local food, mountain hospitality, nature, trekking and authentic village experiences.',
  geography: 'Bageshwar & Kumaon, Uttarakhand, initially targeting domestic tourists from North India.',
  problemSolved:
    'Travellers visiting the remote Himalayan region around Kafni Glacier often face limited access to comfortable and authentic accommodation, local guidance, reliable travel support, and meaningful interaction with Kumaoni culture. At the same time, local communities have limited opportunities to earn directly from tourism. The Pine and Peaks aims to bridge this gap by providing a comfortable homestay combined with local food, trekking support, cultural experiences, and community-based tourism.',
};

export const MISSION_1 = {
  primaryFrictionId: 'f-1',
  frictionStatement:
    'Travellers to the Kafni Glacier region face limited access to comfortable accommodation, reliable local guidance, transportation, food and authentic Kumaoni experiences, making it difficult to plan and enjoy their trip conveniently.',
  whyWorkaroundUnsatisfactory:
    'Travellers have to coordinate multiple services separately, making trip planning less convenient and reducing access to reliable local support and authentic experiences.',
  whoExperiences:
    'Domestic tourists, trekking enthusiasts, nature lovers, couples and small groups visiting the Kafni Glacier and surrounding Kumaon region.',
  whenOccurs:
    'When travellers plan and undertake trips to the Kafni Glacier and surrounding Himalayan areas, especially during the trekking and tourist seasons (April–June & September–November).',
  currentWorkaround:
    'Travellers arrange accommodation, transport, guides and food separately through online platforms, local contacts, travel groups and recommendations from previous visitors.',
};

export const MISSION_2 = {
  emotionalJob:
    'Feel relaxed, safe and connected with nature while reducing the stress and uncertainty of travelling in a remote Himalayan destination.',
  functionalJob:
    'Find comfortable accommodation and conveniently arrange essential travel needs such as local transportation, food, trekking guidance and support while exploring the Kafni Glacier and surrounding Himalayan region.',
  primaryJTBD: {
    situation: 'When I plan a trip to the Kafni Glacier and surrounding Himalayan region,',
    motivationAction:
      'I want to find comfortable accommodation with reliable local support, food, transportation and trekking guidance in one place,',
    desiredOutcome:
      'so that I can enjoy a safe, convenient and authentic Himalayan experience without the stress of managing everything separately.',
  },
  socialJob:
    'Be seen by friends and family as someone who chooses authentic, meaningful and adventurous travel experiences rather than conventional tourist destinations.',
};

export const MISSION_3 = {
  buyingBehaviour:
    'They compare stays and travel options online, rely on Google/Instagram/YouTube, travel platforms and recommendations from friends or travel communities, and prefer experiences that offer convenience, good reviews, scenic surroundings and local authenticity.',
  specificSegment:
    'Young adults, couples and small groups interested in trekking, nature, photography and authentic Himalayan experiences around Bageshwar and the Kafni Glacier region.',
  reachStrategy:
    'Instagram, Google Maps/Google Business Profile, travel platforms, trekking and travel communities, YouTube travel content, local tourism networks, and partnerships with trekking guides and travel operators.',
  situationContext:
    'Travellers are planning or undertaking short trips, trekking expeditions or nature getaways to Kafni Glacier and nearby Himalayan destinations and need accommodation and local support during their journey.',
  broadCustomerGroup: 'Domestic leisure, nature and adventure travellers visiting the Kumaon Himalayas.',
  geography:
    'Initial focus on Bageshwar and the Kumaon region, with customers primarily from Delhi-NCR, Uttar Pradesh, Uttarakhand, Chandigarh, Punjab and other North Indian cities.',
  demographicsRole:
    'Age 20–45; college students, young working professionals, entrepreneurs, couples and adventure travellers.',
  willingnessToPay:
    'Willing to pay a reasonable mid-range price for a clean and comfortable stay, local meals and optional trekking, transportation and experience packages.',
  beachheadSegment:
    'Young trekking enthusiasts aged 20–35 from Delhi-NCR, Uttar Pradesh and Uttarakhand planning their first Kafni Glacier or nearby Himalayan trek.',
};

export const MISSION_4 = {
  desiredGain:
    'A convenient and comfortable Himalayan stay with local support, authentic food and experiences, allowing travellers to explore the region with less planning stress and greater connection with the local culture and nature.',
  mainBenefit:
    'A convenient one-stop base for experiencing the Kafni Glacier region comfortably and authentically, combining accommodation with local hospitality and travel support.',
  whyChooseOverDoingNothing:
    'Convenience, local support and an authentic Himalayan experience in one place—reducing the planning effort and uncertainty that may otherwise cause travellers to postpone or avoid the trip.',
  reasonToBelieve:
    'The venture will be locally based in the Bageshwar/Kumaon region and will build partnerships with local trekking guides, drivers, farmers and artisans. The service can initially be validated through a pilot with early guests, collecting reviews and feedback on accommodation, food, trekking support and overall experience.',
  cvpStatement:
    'For Young trekking enthusiasts aged 20–35 from Delhi-NCR, Uttar Pradesh and Uttarakhand planning their first Kafni Glacier or nearby Himalayan trek, who struggle with arranging accommodation, transportation, food and trekking support separately, our venture provides The Pine and Peaks Himalayan homestay that delivers a convenient one-stop base with authentic Kumaoni hospitality, so that travellers can enjoy a safe, authentic, and seamless mountain expedition.',
  customerPain:
    'Travellers visiting the Kafni Glacier region have to arrange accommodation, transportation, food and trekking support separately and may find it difficult to access reliable local guidance and authentic Kumaoni experiences.',
  productService:
    'The Pine and Peaks — a Himalayan homestay offering comfortable accommodation, Kumaoni food, trekking support, local experiences and assistance with transportation.',
};

export const COMPETITORS: Competitor[] = [
  {
    id: 'sunderdhunga',
    name: 'Sunderdhunga Alpine Home',
    pricePerDay: 1500,
    axisX: 7, // Convenience
    axisY: 8, // Customization
    type: 'Direct Competitor',
    strength: 'Combines accommodation with local trekking knowledge and glacier-route support.',
    weakness:
      'Relatively small/local operation with limited publicly visible online pricing and booking information, which may make comparison and advance planning less convenient.',
    mainOffer:
      'Himalayan homestay accommodation with local meals, mountain surroundings, trekking support and local experiences, including support for Kafni, Pindari and Sunderdhunga Glacier routes.',
    evidenceSource: 'https://sunderdhungaalpinehome.com/?utm_source=chatgpt.com',
    evidenceStrength: 'Strong',
  },
  {
    id: 'maiktoli-1',
    name: 'Mount Maiktoli Home Stay',
    pricePerDay: 1800,
    axisX: 8,
    axisY: 7,
    type: 'Direct Competitor',
    strength:
      'Location in Khati on the Pindari Glacier Road gives trekkers direct access to the established Himalayan trekking ecosystem.',
    weakness:
      'Limited publicly available information about integrated services such as transportation, structured trekking packages, curated cultural experiences and personalized travel assistance.',
    mainOffer:
      'Homestay accommodation in Khati on the Pindari Glacier Road, providing travellers with a local base for exploring the Pindari Glacier and surrounding Himalayan trekking areas.',
    evidenceSource: 'Current local-business listing for Mount Maiktoli Home Stay, Dau, Khati, Uttarakhand',
    evidenceStrength: 'Moderate',
  },
  {
    id: 'maiktoli-2',
    name: 'Mount Maiktoli Home Stay (Alt/Standard)',
    pricePerDay: 1600,
    axisX: 8,
    axisY: 7,
    type: 'Direct Competitor',
    strength: 'Strategic location close to trekking route and established local presence.',
    weakness: 'Limited bundled packages for transportation, cultural activities, and advance digital booking.',
    mainOffer: 'Homestay accommodation in Khati for Pindari Glacier trekking region.',
    evidenceSource: 'Local business listing Dau, Pindari Glacier Road, Khati, Uttarakhand',
    evidenceStrength: 'Strong',
  },
];

export const VENTURE_POSITIONING = {
  name: 'The Pine and Peaks',
  axisX: 8, // High Convenience
  axisY: 8, // Highly Customized
  axisXLabel: 'Low Convenience → High Convenience',
  axisYLabel: 'Standardized → Highly Customized',
  desiredPosition:
    'A comfortable and authentic Himalayan homestay that makes exploring the Kafni Glacier region convenient, personalized and connected to local Kumaoni culture and nature.',
  targetCustomer:
    'Young trekking enthusiasts and adventure travellers aged 20–35 from North India visiting the Kafni Glacier and surrounding Kumaon region.',
  mainAlternative: 'Local homestays/guesthouses and independently arranged trekking and travel services.',
  mainDifferentiation:
    'Combines comfortable homestay accommodation with Kumaoni food, personalized local experiences, trekking support and transportation assistance in one offering.',
  category: 'Himalayan homestay and local travel experience venture.',
  positioningStatement:
    'For young trekking and adventure travellers visiting the Kafni Glacier region, The Pine and Peaks is a Himalayan homestay and experience venture that provides a convenient and authentic way to explore the Kumaon Himalayas through comfortable accommodation, Kumaoni hospitality, local experiences and trekking support, unlike conventional stays that primarily provide accommodation alone.',
  primaryBenefit:
    'Convenient and authentic exploration of the Kafni Glacier region with comfortable accommodation and local support.',
};

export const SCENARIOS: Record<'base' | 'ambitious' | 'conservative', Scenario> = {
  base: {
    id: 'base',
    name: 'Base Case (Standard Season)',
    sellingPrice: 2500,
    variableCost: 900,
    monthlyFixedCost: 50000,
    customers: 30,
    purchasesPerCustomer: 1.5,
    notes: 'Moderate occupancy with a mix of accommodation bookings, meals and selected local/trekking experiences.',
  },
  ambitious: {
    id: 'ambitious',
    name: 'Ambitious (Peak Trekking Season)',
    sellingPrice: 3000,
    variableCost: 1050,
    monthlyFixedCost: 60000,
    customers: 50,
    purchasesPerCustomer: 1.7,
    notes:
      'Strong-season scenario with higher occupancy, longer stays and greater uptake of paid experiences and trekking-related services.',
  },
  conservative: {
    id: 'conservative',
    name: 'Conservative (Low / Monsoons)',
    sellingPrice: 2200,
    variableCost: 900,
    monthlyFixedCost: 49984,
    customers: 15,
    purchasesPerCustomer: 1.2,
    notes: 'Low-season scenario with lower occupancy, shorter stays and limited additional experience purchases.',
  },
};

export const FINANCIAL_METRICS_BASE = {
  contributionPerSale: 1600, // 2500 - 900
  totalSalesUnits: 45, // 30 customers * 1.5
  monthlyRevenue: 112500, // 45 * 2500
  totalVariableCost: 40500, // 45 * 900
  monthlyFixedCost: 50000,
  operatingSurplus: 22000, // 112500 - 40500 - 50000
  breakevenUnits: 31.25, // 50000 / 1600
  breakevenCustomers: 20.83, // 31.25 / 1.5
};

export const MARKET_SIZE = {
  totalPotentialCustomers: 100000,
  serviceableCustomers: 20000,
  obtainableCustomers: 300,
  annualSpendPerCustomer: 7500,
  tam: 750000000, // ₹75,00,00,000
  sam: 150000000, // ₹15,00,00,000
  som: 2250000, // ₹22,50,000
  tamEvidence:
    'Planning estimate based on the broader annual domestic tourist market visiting Uttarakhand’s Kumaon/Himalayan destinations and trekking circuits. Exact Kafni Glacier visitor data is limited; this figure will be validated through tourism statistics and secondary research.',
  samEvidence:
    'Estimated share of the broader market that fits the venture’s initial target: young domestic trekking/adventure travellers from North India interested in Kumaon and Himalayan destinations.',
  annualSpendEvidence:
    'Planning estimate based on an average customer spending on accommodation, meals and local travel/experience services during a short Himalayan trip. To be validated through competitor prices and pilot customer research.',
  somEvidence:
    'Initial 3-year planning target based on the venture’s small homestay capacity, expected occupancy and ability to acquire customers through digital marketing, trekking communities and local partnerships.',
  mostUrgentAssumption:
    'Whether young North Indian trekking travellers are willing to choose and pay for a Kumaoni homestay near the Kafni Glacier region instead of arranging accommodation, transport and trekking support separately.',
};

export const GTM_CHANNELS = [
  {
    id: 'ch-1',
    name: 'Instagram & Reels',
    budget: 5000,
    expectedLeads: 100,
    expectedCustomers: 10,
    cac: 500,
    whyFits: 'Young adventure travellers actively discover destinations, homestays and trekking experiences through visual social media content.',
    evidenceReason:
      'Low-cost visual content can showcase the Himalayan location, homestay, Kumaoni food, trekking routes and guest experiences. Initial results will be tested through organic posts and targeted promotions.',
  },
  {
    id: 'ch-2',
    name: 'Trekking Communities & WhatsApp Groups',
    budget: 2000,
    expectedLeads: 60,
    expectedCustomers: 8,
    cac: 250,
    whyFits:
      'The target customers already participate in trekking, travel and adventure communities where recommendations and trip planning are frequently discussed.',
    evidenceReason:
      'Direct access to relevant trekking audiences can generate enquiries through recommendations, group posts and referral offers with minimal marketing expenditure.',
  },
  {
    id: 'ch-3',
    name: 'Local Trekking & Travel Partnerships',
    budget: 3000,
    expectedLeads: 40,
    expectedCustomers: 7,
    cac: 428,
    whyFits:
      'Trekking guides, travel operators and local taxi providers already interact with travellers planning Himalayan trips and can refer customers to the homestay.',
    evidenceReason:
      'Partnerships can provide qualified leads because referrals come from people already involved in the customer\'s travel planning process.',
  },
];

export const GTM_SPRINTS: GTMSprint[] = [
  {
    week: 1,
    title: 'Visual Proof & Booking Funnel Setup',
    channel: 'Instagram & Reels',
    action: 'Create Instagram page, post 8–10 pieces of content and create a simple booking/enquiry form.',
    responsibility: 'Founder / Marketing Team',
    metric: 'Reach, profile visits, enquiries and cost per lead.',
    learningQuestion: 'Which type of content generates the most enquiries—Himalayan scenery, homestay, food or trekking content?',
    target: 'Reach 3,000 relevant users and generate 20 enquiries.',
  },
  {
    week: 2,
    title: 'Community Outreach & Direct Engagement',
    channel: 'Trekking Communities & WhatsApp Groups',
    action: 'Share the homestay offer in relevant trekking/travel WhatsApp and online communities.',
    responsibility: 'Founder / Marketing Team',
    metric: 'Enquiries, responses and booking intent.',
    learningQuestion: 'Do trekking communities show interest in staying at a local homestay near the Kafni Glacier region?',
    target: 'Reach 10 relevant communities and generate 20 qualified enquiries.',
  },
  {
    week: 3,
    title: 'Local Ecosystem & Guide Partnerships',
    channel: 'Local Trekking & Travel Partnerships',
    action: 'Approach local trekking guides, taxi operators and travel agencies for referral partnerships.',
    responsibility: 'Founder / Business Development',
    metric: 'Partners contacted, responses and referrals generated.',
    learningQuestion: 'Which local partners are most willing and able to generate customer referrals?',
    target: 'Contact 15 potential partners and secure at least 5 partnership discussions.',
  },
  {
    week: 4,
    title: 'Conversion Campaign & Lead Closing',
    channel: 'Instagram + WhatsApp + Partnerships',
    action: 'Run a limited-time launch offer and follow up with all leads generated during the first three weeks.',
    responsibility: 'Founder / Marketing Team',
    metric: 'Qualified leads, bookings, conversion rate and customer acquisition cost.',
    learningQuestion: 'What combination of message, offer and channel converts enquiries into actual bookings?',
    target: 'Generate 10–15 bookings/enquiries with strong booking intent.',
  },
];

export const MVP_FEATURES: MVPFeature[] = [
  {
    id: 'feat-1',
    name: 'Comfortable Homestay Accommodation',
    priority: 'Must Have',
    whyNeeded: 'Accommodation is the core service and the main reason customers will interact with The Pine and Peaks.',
    customerNeed: 'A safe, comfortable and authentic place to stay while exploring the Himalayan region.',
    evidenceReason:
      'Customer interviews and competitor research indicate that accommodation is the basic requirement for travellers visiting remote Himalayan trekking destinations.',
  },
  {
    id: 'feat-2',
    name: 'Kumaoni Home-Cooked Meals',
    priority: 'Must Have',
    whyNeeded: 'Local food can differentiate the homestay from standard accommodation and add value to the overall experience.',
    customerNeed: 'Access to fresh local food and an authentic Kumaoni experience.',
    evidenceReason: 'The venture\'s positioning focuses on authentic Kumaoni hospitality and local experiences.',
  },
  {
    id: 'feat-3',
    name: 'Trekking & Local Travel Support',
    priority: 'Must Have',
    whyNeeded: 'Travellers to remote Himalayan destinations may need reliable local assistance for route planning, guides and transportation.',
    customerNeed: 'Help with trekking guidance, local information and transportation arrangements.',
    evidenceReason:
      'The venture\'s core value proposition is to reduce the effort of arranging stay, trekking support and local travel separately.',
  },
  {
    id: 'feat-4',
    name: 'WhatsApp Booking & Customer Support',
    priority: 'Must Have',
    whyNeeded: 'A WhatsApp-based system is inexpensive and easy to implement during the MVP stage without developing an app.',
    customerNeed: 'Easy enquiry, booking and communication before and during the trip.',
    evidenceReason: 'It allows the venture to test real customer demand and bookings before investing in technology.',
  },
  {
    id: 'feat-ex-1',
    name: 'Luxury Amenities & Jacuzzis',
    priority: 'Deliberately Excluded',
    whyNeeded: 'Disproportionately high capital expenditure conflicting with authentic eco-tourism.',
    customerNeed: 'Trekkers seek warmth, hygiene, hot water, and authentic hospitality, not 5-star luxury.',
    evidenceReason: 'High upfront CAPEX dilutes unit economics in early testing phase.',
  },
  {
    id: 'feat-ex-2',
    name: 'Proprietary Mobile App',
    priority: 'Deliberately Excluded',
    whyNeeded: 'High software development and maintenance overhead with low re-engagement frequency.',
    customerNeed: 'Travellers already communicate via WhatsApp and standard responsive web browsers.',
    evidenceReason: 'WhatsApp conversion is faster and matches traveler habits in mountain regions.',
  },
  {
    id: 'feat-ex-3',
    name: 'Large-scale Multi-property Tour Operations',
    priority: 'Deliberately Excluded',
    whyNeeded: 'Premature scaling before proving operational excellence at the primary Bageshwar base.',
    customerNeed: 'Focus on perfect experience at Kafni Glacier route before geographical expansion.',
    evidenceReason: 'Prevents operational fragmentation during initial validation pilot.',
  },
];

export const TOP_ASSUMPTIONS: TopAssumption[] = [
  {
    id: 'assump-1',
    assumption: 'Young trekking and adventure travellers are willing to stay at a homestay near the Kafni Glacier region.',
    whyItMatters: 'If the target customers do not prefer this type of accommodation, the core business model will not have enough demand.',
    howToTest: 'Conduct a survey/interviews with 50–100 potential travellers and run a small Instagram campaign to measure enquiries and booking interest.',
    evidenceNeeded: 'Survey responses, customer interviews, Instagram enquiries, booking requests and competitor occupancy/booking information where available.',
    defaultStatus: 'In Testing',
  },
  {
    id: 'assump-2',
    assumption: 'Customers are willing to pay around ₹2,000–₹3,000 per person for accommodation with meals and selected local experiences/support.',
    whyItMatters: 'The venture needs sufficient revenue per customer to cover operating costs and generate a sustainable margin.',
    howToTest: 'Show potential customers different package prices and ask for their preferred option, then test actual bookings through a limited-time pilot offer.',
    evidenceNeeded: 'Competitor prices, customer survey responses, price-preference data, enquiries and actual paid/confirmed bookings.',
    defaultStatus: 'Needs Evidence',
  },
  {
    id: 'assump-3',
    assumption: 'Customers value having accommodation, local food, transportation assistance and trekking support available through one local provider.',
    whyItMatters: 'This integrated service is the main differentiation of The Pine and Peaks compared with a basic homestay.',
    howToTest: 'Interview potential customers about their current trip-planning process and test a bundled stay + food + local support package with initial customers.',
    evidenceNeeded: 'Customer interviews, survey results, package enquiries, booking conversion rate and feedback from pilot guests.',
    defaultStatus: 'Validated',
  },
];

export const REFLECTION_NOTES = {
  summary:
    'The Pine and Peaks has a clear target customer, customer problem, value proposition, MVP and go-to-market plan. The next step is to validate the most important assumptions through customer surveys and interviews, competitor price research, and a small pilot with potential guests. We will test willingness to pay, preferred services and booking interest, then use the feedback to refine pricing, packages and the overall customer experience before investing in full-scale operations.',
  nextMilestones: [
    'Execute 30-Day Instagram & Community outreach sprint with ₹10,000 pilot budget',
    'Pilot test 5-10 bookings with early North Indian trekkers',
    'Sign informal revenue-share MoUs with 3 local Khati/Bageshwar guides and 2 taxi operators',
    'Document verified reviews & customer satisfaction before permanent CAPEX outlay',
  ],
};
