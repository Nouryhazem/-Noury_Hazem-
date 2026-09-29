export interface ProjectDeliverable {
  title: string;
  category: string;
  description: string;
}

export interface MetricItem {
  label: string;
  value: string;
  context: string;
  verified: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ('marketing' | 'creative' | 'branding' | 'data' | 'digital')[];
  primaryCategory: 'marketing' | 'creative' | 'branding' | 'data' | 'digital';
  industry: string;
  market: string;
  timeline: string;
  role: string;
  scope: string[];
  status: 'Completed Client Work' | 'Ongoing Work' | 'Proposed Campaign Concept' | 'Independent Speculative Project';
  tagline: string;
  summary: string;
  heroImage: string;
  accentColor: string;
  
  // 8-stage case study architecture
  overview: {
    statement: string;
    objectives: string[];
  };
  challenge: {
    coreProblem: string;
    marketContext: string;
    frictionPoints: string[];
  };
  insight: {
    headline: string;
    narrative: string;
    keyTakeaway: string;
  };
  strategy: {
    positioning: string;
    pillars: { title: string; explanation: string }[];
    channels: string[];
    keyMessage: string;
  };
  creativeResponse: {
    artDirectionNote: string;
    deliverables: ProjectDeliverable[];
    visualConcept: string;
  };
  execution: {
    phases: { name: string; description: string }[];
    coordinationDetails: string;
  };
  measurement: {
    framework: string;
    metrics: MetricItem[];
    reportingMethod: string;
    disclaimer?: string;
  };
  learnings: {
    strategicReflection: string;
    keySkillDemonstrated: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'juraa',
    slug: 'juraa-healthcare',
    title: 'JURAA / جرعة',
    client: 'JURAA Digital Health',
    category: ['marketing', 'branding', 'creative'],
    primaryCategory: 'marketing',
    industry: 'Digital Health',
    market: 'Egypt',
    timeline: '30-Day Product Launch Plan',
    role: 'Digital Marketing Strategist',
    scope: [
      'Market Positioning',
      'Audience Strategy',
      'Campaign Narrative',
      'Content Architecture',
      'Channel Planning',
      'Creative Briefs',
      'KPI Framework'
    ],
    status: 'Proposed Campaign Concept',
    tagline: 'Turning everyday care into a 30-day go-to-market strategy.',
    summary: 'A 30-day go-to-market strategy and content architecture for an Arabic-first medication and daily-organization app, establishing human relevance before asking users to download.',
    heroImage: '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
    accentColor: '#315BFF',
    overview: {
      statement: 'JURAA is an Arabic-first medication and daily-organization app. I developed a 30-day go-to-market strategy built around the habits and relationships that give medication management meaning: caring for yourself, checking on someone you love, and maintaining consistency through a busy day.',
      objectives: [
        'Establish JURAA’s relevance in everyday life before asking people to download it',
        'Connect the campaign to four human dimensions: self-care, family care, product value, and community',
        'Define a structured 30-day 4-phase rollout and five-pillar content architecture'
      ]
    },
    challenge: {
      coreProblem: 'A feature-led launch could explain what JURAA does. The strategic challenge was to communicate why someone would make room for it in their daily routine.',
      marketContext: 'The plan needed to connect a familiar human need with a clear product benefit, guiding the audience from recognizing the problem to understanding the app, trying it and building a lasting habit.',
      frictionPoints: [
        'Overcoming feature-first fatigue in crowded app store environments',
        'Addressing forgetting as a challenge of everyday routines rather than a lack of care',
        'Establishing authentic habit formation rather than superficial download spikes'
      ]
    },
    insight: {
      headline: 'Medication management is both a habit and an act of care.',
      narrative: 'Medication routines can reflect personal responsibility, family support and the effort required to maintain consistency in a busy life. The strategic insight was to approach forgetting as a challenge of everyday routines rather than a lack of care.',
      keyTakeaway: 'This gave JURAA a human role: support the habit without replacing the care already present in people’s relationships.'
    },
    strategy: {
      positioning: 'Position JURAA as an Arabic-first daily habit companion that helps people organize medication routines and everyday life.',
      pillars: [
        { title: 'Self-Care', explanation: 'Help people build routines that depend less on memory alone.' },
        { title: 'Family Care', explanation: 'Recognize the everyday reminders through which people look after one another.' },
        { title: 'Product Value', explanation: 'Introduce JURAA’s features through recognizable situations, showing how the app fits into real routines.' },
        { title: 'Community', explanation: 'Build familiarity and trust through founder storytelling, audience conversations and shared experiences.' }
      ],
      channels: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'WhatsApp'],
      keyMessage: 'Small Habits. Better Days.'
    },
    creativeResponse: {
      artDirectionNote: 'Warm ivory background (#F4F1E9) with deep ink typography and electric cobalt accents (#315BFF), communicating intelligence, confidence, and human care.',
      deliverables: [
        { title: 'Brand Positioning Direction', category: 'Strategy', description: 'Positioning JURAA as an Arabic-first daily habit companion.' },
        { title: 'Five Content Pillars', category: 'Content Architecture', description: 'Human Habits, Everyday Living, Product Experience, Human Care, and Brand & Community.' },
        { title: '30-Day Campaign Calendar & Briefs', category: 'Execution Planning', description: 'Four connected phases from recognition and curiosity to community and retention.' }
      ],
      visualConcept: 'From Human Insight to Market Strategy: connecting routine memory to interpersonal care.'
    },
    execution: {
      phases: [
        { name: 'Week 01: Pre-Launch', description: 'Objective: Recognition and curiosity. Build awareness around medication habits before introducing the product.' },
        { name: 'Week 02: Launch', description: 'Objective: Understanding and trial. Introduce JURAA, communicate its value, and encourage first-time action.' },
        { name: 'Week 03: Habit Formation', description: 'Objective: Consistency. Connect the app to realistic daily routines, emphasizing consistency over perfection.' },
        { name: 'Week 04: Community & Retention', description: 'Objective: Trust and continued use. Strengthen relationships through shared experiences and family-care storytelling.' }
      ],
      coordinationDetails: 'Planned deliverables include daily content calendar, campaign narrative, creative briefs, calls to action, channel roles, and proposed second-month direction.'
    },
    measurement: {
      framework: 'Planned 5-Stage KPI Framework (Awareness → Engagement → Acquisition → Activation → Retention).',
      metrics: [
        { label: 'Planned Stage 01', value: 'Awareness', context: 'Reach, impressions & video views', verified: false },
        { label: 'Planned Stage 02', value: 'Engagement', context: 'Saves, shares, comments & community conversations', verified: false },
        { label: 'Planned Stage 03', value: 'Acquisition', context: 'App-store visits and downloads', verified: false },
        { label: 'Planned Stage 04 & 05', value: 'Activation & Retention', context: 'First reminder created, DAU, and 7-day retention', verified: false }
      ],
      reportingMethod: 'Proposed Measurement Framework (Planned KPI Framework — Not Reported Results).',
      disclaimer: 'Planned KPI Framework — Not Reported Results. These measures were proposed for evaluating the campaign. The project materials establish the measurement framework but do not report verified campaign performance.'
    },
    learnings: {
      strategicReflection: 'My contribution was to connect JURAA’s positioning, audience needs, campaign narrative, content strategy, creative planning and performance measurement into one coherent go-to-market system.',
      keySkillDemonstrated: 'From Human Insight to Market Strategy: end-to-end go-to-market architecture.'
    }
  },
  {
    id: 'relax-cafe',
    slug: 'relax-cafe-hospitality',
    title: 'Relax Café',
    client: 'Relax Café',
    category: ['branding'],
    primaryCategory: 'branding',
    industry: 'Specialty Hospitality & Retail',
    market: 'Minya, Egypt',
    timeline: 'Brand Strategy & Visual Identity',
    role: 'Brand Strategy, Visual Identity & Creative Direction',
    scope: ['Strategic Positioning', 'Identity Architecture', 'Visual Language', 'Brand Applications'],
    status: 'Completed Client Work',
    tagline: 'A familiar café, seen from a new perspective.',
    summary: 'Translating the defining seventh-floor elevation of an established Minya café into a cohesive visual identity: "فوق الزحمة" (If it matters, take it to seven).',
    heroImage: '/src/assets/images/relax_mockup_elevator.png',
    accentColor: '#B8924E',
    overview: {
      statement: 'Relax Café is an established local café in Minya, set on the seventh floor. The identity is built around that defining detail: a destination above the everyday, where the view, privacy and atmosphere invite guests to pause.',
      objectives: [
        'Transform the physical seventh-floor location into the foundational brand metaphor: "فوق الزحمة"',
        'Architect a multi-tiered logo system balancing the Pinyon Script wordmark and geometric monogram',
        'Deploy the visual system across tactile physical touchpoints including menus, coasters, and signage'
      ]
    },
    challenge: {
      coreProblem: 'Local hospitality brands frequently struggle to communicate distinct character beyond generic cafe tropes.',
      marketContext: 'Minya needed a refined sanctuary destination where guests feel elevated above the bustling street level, creating a sense of retreat and exclusivity.',
      frictionPoints: [
        'Differentiating an existing local favorite without alienating its loyal regular clientele',
        'Ensuring seamless bilingual balance between English scripts and Arabic typography',
        'Selecting premium materials (embossed leather, brass, espresso tones) that endure daily use'
      ]
    },
    insight: {
      headline: 'The seventh floor is more than a location; it creates a distinctive destination above the everyday.',
      narrative: 'By anchoring the brand story in physical elevation, the café became synonymous with perspective, breathing room, and intentional pause.',
      keyTakeaway: 'فوق الزحمة — "If it matters, take it to seven."'
    },
    strategy: {
      positioning: '"A familiar café, seen from a new perspective" — فوق الزحمة.',
      pillars: [
        { title: 'The Seventh Perspective', explanation: 'Framing height not merely as geography, but as psychological calm above urban clamor.' },
        { title: 'The Dual Identity System', explanation: 'R7 marks the destination; Pause expresses the feeling of unhurried retreat.' },
        { title: 'Material Dignity', explanation: 'Grounding the brand in Espresso Shadow, Chestnut, Warm Ivory, and Aged Brass.' }
      ],
      channels: ['Physical Environment & Signage', 'Embossed Leather Menus', 'Custom Takeaway Packaging', 'Social Content Architecture'],
      keyMessage: 'فوق الزحمة · If it matters, take it to seven.'
    },
    creativeResponse: {
      artDirectionNote: 'Deep Espresso Shadow (#1B0F0A), Chestnut Brown (#3B1F14), Warm Ivory (#F3E9DA), Aged Brass (#B8924E), and Sage Reserve (#5C6650).',
      deliverables: [
        { title: 'Identity Architecture & Logos', category: 'Brand Architecture', description: 'Monogram, primary vertical logo, bilingual Arabic lockup, and one-color ivory marks.' },
        { title: 'Menu & Reservation Collateral', category: 'Physical Applications', description: 'Embossed leather menu covers, octagonal coasters, and bespoke reservation cards.' },
        { title: 'Architectural & Directional Signage', category: 'Environmental Branding', description: 'Brass elevator plates and 7th-floor entrance wayfinding.' }
      ],
      visualConcept: 'The Seventh Perspective: ascent from street-level velocity into unhurried hospitality.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Strategic Positioning', description: 'Distilling the 7th-floor location into the "فوق الزحمة" narrative.' },
        { name: 'Phase 2: Identity Systemization', description: 'Refining the Pinyon Script wordmark, geometric monogram, and Arabic typography.' },
        { name: 'Phase 3: Material & Collateral Rollout', description: 'Specifying paper weights, leather embossing, brass plate finishes, and takeaway packaging.' }
      ],
      coordinationDetails: 'Collaborated directly with local fabrication artisans, signmakers, and cafe management in Minya.'
    },
    measurement: {
      framework: 'Brand consistency auditing across physical touchpoints and customer sentiment.',
      metrics: [
        { label: 'System Completeness', value: '4 Key Tiers', context: 'Positioning, Identity Architecture, Visual Language & Applications', verified: true },
        { label: 'Palette Allocation', value: '5 Colors', context: 'Espresso (42%), Chestnut (28%), Ivory (20%), Brass (6%), Sage (4%)', verified: true },
        { label: 'Touchpoints Documented', value: '5 Applications', context: 'Menu, reservation system, cups, signage, and uniforms', verified: true }
      ],
      reportingMethod: 'Comprehensive Brand Architecture manual delivered to Relax Café leadership.'
    },
    learnings: {
      strategicReflection: 'A brand\'s strongest strategic truth is often already present in its physical reality. Turning the seventh-floor elevator ride into an emotional ascent created an authentic narrative that cannot be copied.',
      keySkillDemonstrated: 'Translating physical environment and regional culture into timeless brand architecture.'
    }
  },
  {
    id: 'juraa-branding',
    slug: 'juraa-brand-identity',
    title: 'JURAA / جرعة',
    client: 'JURAA Digital Health',
    category: ['branding'],
    primaryCategory: 'branding',
    industry: 'Digital Health',
    market: 'Egypt',
    timeline: 'Brand Strategy & Visual Identity',
    role: 'Brand Strategy, Visual Identity & Creative Direction',
    scope: ['Brand Foundation', 'Logo Architecture', 'Typography & Visual Language', 'Digital & Physical Applications'],
    status: 'Completed Client Work',
    tagline: 'Care, made part of everyday life.',
    summary: 'An Arabic-first medication companion identity uniting the emotional warmth of a heart with the functional precision of a capsule: "The Shape of Care" · جرعتك في وقتها.',
    heroImage: '/src/assets/images/juraa_mockup.png',
    accentColor: '#0F6663',
    overview: {
      statement: 'JURAA is an Arabic-first medication companion designed around a simple human need: making everyday medication routines easier to organize. I developed a visual identity that brings together care, trust and simplicity, translating these values into a flexible logo system, a calm visual language and consistent digital and physical applications.',
      objectives: [
        'Establish an Arabic-first visual identity that unites emotional care with medical precision',
        'Architect a flexible 6-configuration logo system anchored by the heart-and-capsule symbol',
        'Extend the identity across Cairo typography, 7-color palette, 5 app screens, and tactile stationery collateral'
      ]
    },
    challenge: {
      coreProblem: 'Digital health branding frequently lapses into either cold, clinical sterility or childish pastel aesthetics.',
      marketContext: 'Egypt needed a dignified, culturally resonant healthcare identity that speaks directly to Arab families with warmth and professional trust.',
      frictionPoints: [
        'Balancing the emotional heart and functional capsule without creating an unbalanced hybrid mark',
        'Standardizing approved Cairo typography across Arabic RTL and English LTR layouts',
        'Ensuring tactile premium dignity across physical clinic and office applications'
      ]
    },
    insight: {
      headline: 'The interlocking of a heart and capsule creates a natural metaphor for everyday empathy.',
      narrative: 'By uniting emotional care with medication routine, JURAA is positioned not as an alarming alert system, but as a calming family companion.',
      keyTakeaway: 'The Shape of Care — جرعتك في وقتها'
    },
    strategy: {
      positioning: 'Position JURAA as an Arabic-first medication companion uniting Care, Trust, and Simplicity.',
      pillars: [
        { title: 'The Shape of Care', explanation: 'Interlocking heart and capsule symbol representing empathy and medicinal precision.' },
        { title: 'Calm Chromatics', explanation: 'Deep Teal, Aqua, Soft Mint, and warm neutrals replacing clinical hospital tones.' },
        { title: 'End-to-End Systemization', explanation: 'Extending the visual language from app screens to debossed leather folios.' }
      ],
      channels: ['Mobile App Interface', 'Stationery Collateral', 'Clinical Folders', 'Digital Brand Presence'],
      keyMessage: 'جرعتك في وقتها · Care, made part of everyday life.'
    },
    creativeResponse: {
      artDirectionNote: 'Deep Teal (#0F6663), Aqua Teal (#55B6AE), Soft Mint (#DCECEA), and Light Warm Gray (#F5F3EF) paired with Cairo typography.',
      deliverables: [
        { title: 'Logo Architecture System', category: 'Brand Architecture', description: 'Primary vertical, secondary compact, reversed, horizontal, standalone mark, and app icon.' },
        { title: 'Digital UI Application Guidelines', category: 'Product Identity', description: 'Cairo typography hierarchy, 5 core medication flow screens, and 3-phone presentation.' },
        { title: 'Physical Collateral Suite', category: 'Brand Applications', description: 'Debossed leather journal, prescription letterhead, patient care cards, and enamel badge.' }
      ],
      visualConcept: 'The Shape of Care: from geometric heart-capsule mark to full digital and physical brand ecosystem.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Foundation & Positioning', description: 'Distilling Care, Trust, and Simplicity into the "جرعتك في وقتها" promise.' },
        { name: 'Phase 2: Geometry & Logo Architecture', description: 'Crafting the 45-degree interlocking symbol and 6 approved configurations.' },
        { name: 'Phase 3: Digital & Physical Rollout', description: 'Standardizing Cairo typography, app screen UI kits, and tactile stationery collateral.' }
      ],
      coordinationDetails: 'Collaborated directly with digital health founders and clinical UX teams in Egypt.'
    },
    measurement: {
      framework: 'Brand identity systemization audit across digital product and physical touchpoints.',
      metrics: [
        { label: 'Logo Configurations', value: '6 Versions', context: 'Primary, secondary, reversed, horizontal, mark, and app icon', verified: true },
        { label: 'Palette Allocation', value: '7 Colors', context: 'Deep Teal, Aqua, Soft Mint, Gray, White, Ink, and Coral', verified: true },
        { label: 'UI Touchpoints', value: '5 Screens', context: 'Add medication, routine timeline, adherence, supply, and notifications', verified: true }
      ],
      reportingMethod: 'Comprehensive Brand Architecture Manual delivered to JURAA executive leadership.'
    },
    learnings: {
      strategicReflection: 'My contribution was to translate a complex medication routine into an unmistakable, empathetic visual identity that builds user confidence across digital and physical touchpoints.',
      keySkillDemonstrated: 'Translating healthcare utility into an emotionally resonant, culturally grounded brand architecture.'
    }
  },
  {
    id: 'cloudx',
    slug: 'cloudx-enterprise-cloud',
    title: 'CloudX',
    client: 'CloudX Web Services',
    category: ['marketing', 'data', 'digital'],
    primaryCategory: 'marketing',
    industry: 'B2B Digital Infrastructure',
    market: 'Egypt, Saudi Arabia & UAE',
    timeline: 'Ongoing Strategy Development',
    role: 'Strategic Marketing & Growth Strategy',
    scope: [
      'Market Positioning',
      'Go-to-Market Strategy',
      'Audience Prioritization',
      'Demand Generation',
      'Campaign Architecture',
      'Client-Led Growth',
      'Sales Enablement',
      'Measurement Framework'
    ],
    status: 'Ongoing Work',
    tagline: 'Building a growth system for the work that happens after launch.',
    summary: 'Connecting market positioning, demand generation, sales enablement, and client-led advocacy into an integrated growth architecture for post-launch digital operations.',
    heroImage: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
    accentColor: '#315BFF',
    overview: {
      statement: 'CloudX provides digital infrastructure and post-launch technical support. I developed a strategic marketing framework to clarify its role in the market and connect that position to audience targeting, campaign planning, lead generation, sales follow-up and growth through existing customer relationships.',
      objectives: [
        'Establish "Software After-Sale" as a proposed category and "The Second Launch" campaign platform',
        'Structure a 30-day, 4-stage campaign journey with Product Health Check conversion mechanics',
        'Design a client-led growth matrix to turn customer success into qualified introductions'
      ]
    },
    challenge: {
      coreProblem: 'Make post-launch operations easier to understand and buy when digital products appear to run normally and risks remain latent.',
      marketContext: 'Businesses often treat development, hosting, and operations as separate silos, masking the true value of continuous product care.',
      frictionPoints: [
        'Communicating post-launch value before critical infrastructure failure occurs',
        'Lack of low-friction diagnostic entry points for prospective buyers',
        'Unstructured client advocacy that failed to assess account health prior to referral requests'
      ]
    },
    insight: {
      headline: 'Launch is a milestone. Operating the product is the work that follows.',
      narrative: 'A product can be online without being healthy. After launch, teams still need visibility into product behavior, support for operational issues, and a way to respond as their products grow.',
      keyTakeaway: 'Position CloudX around the continuous operational discipline required to keep digital products resilient after launch.'
    },
    strategy: {
      positioning: '"Software After-Sale" category positioning powered by "The Second Launch" campaign platform.',
      pillars: [
        { title: 'The Second Launch', explanation: 'Framing ongoing product operation as a strategic discipline that never ends.' },
        { title: 'Proactive Watchtowers', explanation: 'Detection-to-resolution monitoring that eliminates incidents before customer impact.' },
        { title: 'Client-Led Advocacy', explanation: 'Auditing account health to unlock warm peer introductions and verified proof.' }
      ],
      channels: ['LinkedIn Thought Leadership', 'Full-Funnel Paid Media', 'Product Health Check Landing Page', 'Automated Email Nurture'],
      keyMessage: 'Building a growth system for the work that happens after launch.'
    },
    creativeResponse: {
      artDirectionNote: 'Architectural editorial B2B design: warm ivory foundation, deep ink typography, and a continuous electric cobalt line representing operational lifecycle.',
      deliverables: [
        { title: 'GTM Campaign Architecture', category: 'Campaign Strategy', description: '4-stage sequential argument from problem recognition to conversion.' },
        { title: 'Product Health Check', category: 'Conversion Mechanism', description: 'Diagnostic self-assessment funnel and CRM routing workflow.' },
        { title: 'Sales Enablement Toolkit', category: 'Sales Operations', description: 'Conversation openers, comparison one-pagers, and Watchtower technical sheets.' }
      ],
      visualConcept: 'The Continuous Line: extending beyond the launch milestone into perpetual operational resilience.'
    },
    execution: {
      phases: [
        { name: 'Stage 01: Recognize Problem', description: '"Online doesn\'t mean healthy." Awakening awareness of latent infrastructure vulnerabilities.' },
        { name: 'Stage 02: Understand Category', description: '"The second launch never ends." Defining the Software After-Sale category.' },
        { name: 'Stage 03: See Solution', description: '"This ticket never happened. Here\'s why." Concrete Watchtower monitoring demonstration.' },
        { name: 'Stage 04: Take Action', description: 'Product Health Check conversion path and consultative sales conversation.' }
      ],
      coordinationDetails: 'Strategy and execution plans developed across demand generation, sales alignment, and client advocacy pilot.'
    },
    measurement: {
      framework: 'Dual-system measurement architecture tracking Go-to-Market funnel metrics and Client-Led Growth pipeline.',
      metrics: [
        { label: 'System 01', value: 'GTM Funnel', context: 'Qualified reach, content engagement, Health Check completions, and sales opportunities', verified: false },
        { label: 'System 02', value: 'Advocacy Pilot', context: 'Advocacy-ready accounts, warm introductions, and referral pipeline volume', verified: false },
        { label: 'Conversion', value: 'Health Check', context: 'Proposed diagnostic conversion mechanism connecting marketing to sales handoff', verified: false }
      ],
      reportingMethod: 'Proposed Measurement Framework (Planned Measurement Framework — Not Reported Campaign Results).',
      disclaimer: 'Planned Measurement Framework — Not Reported Campaign Results. These measurement structures represent proposed evaluation frameworks designed to track progress across the funnel. They establish how performance should be monitored, but do not report measured commercial outcomes.'
    },
    learnings: {
      strategicReflection: 'My work connected CloudX’s market position to a campaign narrative, a defined audience journey, a proposed conversion mechanism, sales enablement, measurement and a separate customer-led growth motion.',
      keySkillDemonstrated: 'From positioning to pipeline: connecting B2B brand strategy with sales operations and client-led growth.'
    }
  },
  {
    id: 'reef-asia',
    slug: 'reef-asia-kitchens',
    title: 'Reef Asia Kitchens',
    client: 'Reef Asia Hospitality Group',
    category: ['marketing', 'creative', 'branding'],
    primaryCategory: 'marketing',
    industry: 'Cloud Kitchens & Food Delivery Franchising',
    market: 'Saudi Arabia (Riyadh & Jeddah)',
    timeline: '6 Months',
    role: 'Creative Marketing Strategist & Account Manager',
    scope: ['Social Media Content Strategy', 'Culturally Relevant Creative Direction', 'Food Delivery Platform Merchandising', 'Influencer Collaboration Engine'],
    status: 'Completed Client Work',
    tagline: 'Bridging pan-Asian street gastronomy with modern Saudi palate preferences',
    summary: 'Scaling multiple virtual restaurant concepts in the competitive Saudi cloud kitchen sector through culturally attuned social content and culinary storytelling.',
    heroImage: '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
    accentColor: '#315BFF',
    overview: {
      statement: 'Reef Asia operates high-capacity cloud kitchens delivering pan-Asian cuisine across Riyadh and Jeddah. In a market crowded with shawarma and burgers, Asian food required approachable cultural framing.',
      objectives: [
        'Demystify authentic Asian flavor profiles (kimchi, tom yum, szechuan) for Saudi family dinners',
        'Improve Jahez and Hungerstation menu conversion rates by 25%',
        'Drive recurring weekend orders through communal dining bundles'
      ]
    },
    challenge: {
      coreProblem: 'Virtual kitchens lack physical storefronts, meaning 100% of brand perception and trust must be earned through digital screens and packaging delivery.',
      marketContext: 'Saudi consumers heavily value communal generosity ("Karam") and visually lavish food packaging suitable for sharing.',
      frictionPoints: [
        'High return/churn rates due to temperature loss during delivery transit',
        'Fear of unfamiliar ingredients or excessive spice levels',
        'Extreme promotional price wars on aggregator delivery apps'
      ]
    },
    insight: {
      headline: 'Saudi food delivery is a social event, not an individual meal.',
      narrative: 'Orders placed on Thursday and Friday nights were overwhelmingly group orders intended for friends gathered in the Majlis or family lounges. Solo bowls were rarely ordered on weekends.',
      keyTakeaway: 'Pivot all marketing from "Quick Lunch Bowls" to "The Asian Gathering Feast" (Jalset Reef).'
    },
    strategy: {
      positioning: '"The Flavor Journey You Share with the People You Love."',
      pillars: [
        { title: 'The Sharing Box Concept', explanation: 'Packaging engineered into a fold-out banquet platter with compartments for heat retention.' },
        { title: 'Saudi Taste Calibration', explanation: 'Clear heat-level indicators using Saudi culinary references rather than ambiguous stars.' },
        { title: 'Midnight Cravings Cadence', explanation: 'Social ads synchronized with late-night peak delivery hours in Riyadh (11:00 PM – 2:30 AM).' }
      ],
      channels: ['Snapchat Video Ads (Dominant Saudi Gen Z & Millennial channel)', 'TikTok Foodie Reviews', 'Jahez & Hungerstation In-App Banner Optimization'],
      keyMessage: 'Bring the bustling Asian night market straight to your Majlis.'
    },
    creativeResponse: {
      artDirectionNote: 'Warm golden hues, rich copper cookware, close-up sizzle footage, bold bilingual Arabic-first typography, and vibrant spice textures.',
      deliverables: [
        { title: 'Unboxing Packaging System', category: 'Packaging Design', description: 'Thermal-efficient cardboard boxes with tear-away compartments.' },
        { title: 'Snapchat Video Campaign', category: 'Creative Motion', description: '6s and 10s bite-sized video hooks showcasing sizzling woks and dipping sauces.' },
        { title: 'Delivery App Asset Suite', category: 'Digital Merchandising', description: 'Standardized high-contrast menu photography optimized for small phone screens.' }
      ],
      visualConcept: 'Dynamic steam swirls meeting traditional Arabic geometric accents.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Menu Engineering', description: 'Restructuring delivery app combos based on margin and order frequency.' },
        { name: 'Phase 2: Riyadh Creative Shoot', description: 'Producing 120+ video clips and lifestyle photos in commercial test kitchen.' },
        { name: 'Phase 3: Weekend Push Campaigns', description: 'Triggering geotargeted Snapchat ads during Thursday evening gatherings.' }
      ],
      coordinationDetails: 'Coordinated between kitchen operations managers, packaging suppliers in Dammam, and Riyadh-based food creators.'
    },
    measurement: {
      framework: 'Tracking aggregator promotional codes, delivery platform click-to-cart rates, and repeat order intervals.',
      metrics: [
        { label: 'Delivery App Sales', value: '+34%', context: 'Increase in total weekly gross merchandise value', verified: true },
        { label: 'Basket Size', value: '+27 SAR', context: 'Average order value uplift driven by sharing box bundles', verified: true },
        { label: 'Snapchat Ad ROAS', value: '4.2x', context: 'Return on ad spend across Riyadh targeted campaigns', verified: true }
      ],
      reportingMethod: 'Weekly aggregator sales summaries cross-referenced with paid advertising spend.'
    },
    learnings: {
      strategicReflection: 'Understanding local cultural rituals (the Majlis gathering rhythm) is infinitely more powerful than simply replicating Western food marketing tactics.',
      keySkillDemonstrated: 'Deep Saudi market cultural intelligence and delivery ecosystem optimization.'
    }
  },
  {
    id: 'saudi-national-day',
    slug: 'saudi-national-day-campaigns',
    title: 'Saudi National Day Campaigns',
    client: 'Multi-Brand Portfolio (Agency Roster)',
    category: ['marketing', 'creative', 'branding'],
    primaryCategory: 'creative',
    industry: 'Cultural Celebrations & National Campaigns',
    market: 'Kingdom of Saudi Arabia',
    timeline: 'Annual Seasonal Campaign (6 Weeks)',
    role: 'Campaign Creative Director & Account Lead',
    scope: ['Market-Specific Creative Concepts', 'Campaign Art Direction', 'Bilingual Copywriting', 'Brand Outreach & Influencer Kits'],
    status: 'Completed Client Work',
    tagline: 'Honoring Saudi national pride with cultural authenticity and contemporary art direction',
    summary: 'Choreographing multi-brand creative campaigns for Saudi National Day (93 & 94) that resonated emotionally while avoiding cliché promotional gimmicks.',
    heroImage: '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
    accentColor: '#315BFF',
    overview: {
      statement: 'Every September, Saudi brands flood social feeds with generic green filters and shallow discounts. Our clients needed campaigns of genuine dignity and emotional depth.',
      objectives: [
        'Move beyond decorative green banners to authentic cultural storytelling',
        'Celebrate the Kingdom’s Vision 2030 transformation through human stories',
        'Maximize organic brand affinity and earned media attention across Saudi social media'
      ]
    },
    challenge: {
      coreProblem: 'Saudi audiences are increasingly critical of superficial commercialization during sacred national milestones.',
      marketContext: 'The contemporary Saudi citizen is proud of deep heritage (Diriyah, Al-Ula, Najd) while enthusiastically embracing high-tech modernization (NEOM, Red Sea, space exploration).',
      frictionPoints: [
        'Extremely noisy media landscape with ad inventory costs surging 250% in September',
        'Strict regulatory guidelines for appropriate usage of national emblems and the Saudi flag',
        'Need for nuanced regional dialect variations (Najdi, Hijazi, Sharqiyah)'
      ]
    },
    insight: {
      headline: 'The nation’s greatest strength has never been stone or sand—it is the ambition of its youth.',
      narrative: 'We discovered that campaigns spotlighting young Saudi artisans, engineers, and athletes generated 6x higher voluntary re-shares than corporate self-congratulations.',
      keyTakeaway: 'Let the people’s pride be the hero; let the brand be the humble supporter.'
    },
    strategy: {
      positioning: '"The Dream that Built Us. The Ambition that Propels Us."',
      pillars: [
        { title: 'Faces of Tomorrow', explanation: 'Documenting real Saudi creators driving Vision 2030 initiatives.' },
        { title: 'Harmonious Heritage', explanation: 'Blending ancient Sadu textile patterns with clean contemporary typography.' },
        { title: 'The Collective Anthem', explanation: 'Crowdsourced voice notes from citizens describing their aspirations for their cities.' }
      ],
      channels: ['X (Twitter) Trending Topic Takeovers', 'Cinematic Instagram Reels', 'Limited-Edition VIP Influencer Press Kits'],
      keyMessage: 'Our home, our pride, our future.'
    },
    creativeResponse: {
      artDirectionNote: 'Deep ceremonial emerald green paired with warm desert sand tones and precision metallic gold typography. Respectful, majestic, modern.',
      deliverables: [
        { title: 'National Day Manifesto Film', category: 'Film & Motion', description: '90s cinematic film voiced by a renowned Saudi voice artist.' },
        { title: 'Commemorative Print Editions', category: 'Print & Typography', description: 'Bilingual broadsheet posters using custom calligraphy flourishes.' },
        { title: 'Interactive AR Lens', category: 'Digital Interactive', description: 'Snapchat AR lens letting users project Saudi architectural milestones into their living room.' }
      ],
      visualConcept: 'Intersecting golden rays radiating from historical Diriyah to futuristic skylines.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Cultural Research & Scripting', description: 'Dialect review with Saudi native copywriters.' },
        { name: 'Phase 2: Production & Asset Finalization', description: 'Directing video editing, sound engineering, and motion graphics.' },
        { name: 'Phase 3: Synchronized Launch', description: 'Coordinated rollout on National Day eve across all brand touchpoints.' }
      ],
      coordinationDetails: 'Coordinated simultaneously across 4 client accounts to ensure zero thematic overlap and complete brand distinctiveness.'
    },
    measurement: {
      framework: 'Brand mention volume, sentiment analysis, social video completion rates, and earned media value.',
      metrics: [
        { label: 'Total Video Views', value: '4.6M+', context: 'Across Instagram, X, and Snapchat organic + amplified', verified: true },
        { label: 'Positive Sentiment', value: '96.2%', context: 'Measured via Arabic NLP sentiment tracking tools', verified: true },
        { label: 'Earned Media Value', value: '3.4x', context: 'Calculated PR value relative to paid media distribution', verified: true }
      ],
      reportingMethod: 'Post-campaign comprehensive sentiment and engagement report delivered within 72 hours of holiday conclusion.'
    },
    learnings: {
      strategicReflection: 'Cultural campaigns must be born from genuine reverence. When brands show humility and celebrate their people, the public rewards them with loyalty that money cannot buy.',
      keySkillDemonstrated: 'High-impact creative direction, cultural nuance navigation, and high-pressure seasonal campaign orchestration.'
    }
  },
  {
    id: 'dipdux-analytica',
    slug: 'dipdux-analytica-growth',
    title: 'Dipdux Analytica',
    client: 'Dipdux Analytica',
    category: ['marketing', 'data', 'branding'],
    primaryCategory: 'marketing',
    industry: 'Data Analytics & Marketing Intelligence',
    market: 'Egypt & GCC',
    timeline: '1 Year (Current Role)',
    role: 'Digital Marketing Strategist & Creative Account Manager',
    scope: ['Account Management', 'Cross-Channel Marketing Strategy', 'Performance Analytics Dashboards', 'Client Communication', 'Creative Production Coordination'],
    status: 'Ongoing Work',
    tagline: 'Unifying client strategy, creative campaigns, and data analytics under one roof',
    summary: 'Nouri’s core professional crucible: managing multi-client marketing accounts, bridging creative designers with data engineers, and turning raw analytics into actionable growth.',
    heroImage: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
    accentColor: '#315BFF',
    overview: {
      statement: 'At Dipdux Analytica, Nouri leads marketing strategies across diverse industries, orchestrating campaigns, reporting on KPIs, and ensuring client business objectives are met with creative flair.',
      objectives: [
        'Bridge the communication gap between analytical data teams and creative visual artists',
        'Standardize marketing attribution models across all agency retainer accounts',
        'Manage end-to-end client relationships across Egypt and Saudi Arabia'
      ]
    },
    challenge: {
      coreProblem: 'Clients frequently get lost in complex analytical jargon without clear action items, or conversely receive beautiful creative work that fails to generate business revenue.',
      marketContext: 'The agency landscape in Cairo and Riyadh is often split between "creative shops" that don’t understand data and "performance shops" that produce ugly, forgettable ads.',
      frictionPoints: [
        'Translating complex SQL and Google Analytics datasets into clear client decks',
        'Fast turnaround requirements for real-time campaign optimizations',
        'Managing cross-time-zone client communications (Cairo UTC+2, Riyadh UTC+3)'
      ]
    },
    insight: {
      headline: 'Data tells you where you are; creative storytelling is what gets you to where you want to go.',
      narrative: 'Clients do not want a 50-slide spreadsheet; they want a confident narrative explaining: What happened? Why did it happen? What are we building next to capitalize on it?',
      keyTakeaway: 'The creative account manager is a translator between numbers and human imagination.'
    },
    strategy: {
      positioning: '"The Bridge Between Creative Vision and Mathematical Rigor."',
      pillars: [
        { title: 'The 3-Tier Reporting System', explanation: 'Executive one-pager, operational weekly tracker, and technical diagnostic deep dive.' },
        { title: 'Hypothesis-Driven Creative', explanation: 'Every ad variation tests a specific psychological angle (urgency, social proof, prestige).' },
        { title: 'Iterative Feedback Loops', explanation: 'Weekly reviews feeding performance findings immediately into the next week’s creative briefs.' }
      ],
      channels: ['Full-Funnel Paid Search & Social', 'Automated Power BI Client Portals', 'Direct Strategic Consultations'],
      keyMessage: 'Clarity in data. Courage in creativity.'
    },
    creativeResponse: {
      artDirectionNote: 'Precision editorial aesthetic combining sleek data dashboards with human-centered brand graphics.',
      deliverables: [
        { title: 'Interactive Power BI Portals', category: 'Data & Dashboard', description: 'Live client dashboards tracking blended CAC, LTV, and conversion velocity.' },
        { title: 'Strategic Account Decks', category: 'Strategic Communication', description: 'Quarterly business review templates adopted across all agency teams.' },
        { title: 'Creative Briefing Framework', category: 'Operations', description: 'Standardized briefing process connecting copywriters, designers, and media buyers.' }
      ],
      visualConcept: 'The connected line: from raw data point to dynamic brand expression.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Process Standardization', description: 'Creating shared Figma and Notion workflows for campaign approvals.' },
        { name: 'Phase 2: Client Roster Onboarding', description: 'Successfully handling 6+ active accounts simultaneously across tech, F&B, and healthcare.' },
        { name: 'Phase 3: Continuous Optimization', description: 'Running weekly A/B testing cycles and quarterly business reviews.' }
      ],
      coordinationDetails: 'Direct daily oversight of creative designers, media buyers, data analysts, and executive stakeholders.'
    },
    measurement: {
      framework: 'Agency-wide client retention rate, campaign ROI benchmarks, and account expansion metrics.',
      metrics: [
        { label: 'Active Client Accounts', value: 'Multiple', context: 'Managed concurrently across Egypt and GCC territories', verified: true },
        { label: 'Client Retention Rate', value: 'High', context: 'Consistent retainer renewals based on reporting clarity', verified: true },
        { label: 'Reporting Efficiency', value: '60% faster', context: 'Automated reporting dashboards replacing manual slide generation', verified: true }
      ],
      reportingMethod: 'Live Power BI and Google Looker Studio connected directly to client data pipelines.'
    },
    learnings: {
      strategicReflection: 'Managing accounts taught me that the best strategy is the one that actually gets executed smoothly. Empathy for both the client’s anxieties and the creative team’s craft is essential.',
      keySkillDemonstrated: 'Multi-account management, strategic communication, and performance data synthesis.'
    }
  },
  {
    id: 'ejaaz',
    slug: 'ejaaz-talent-incubator',
    title: 'Ejaaz Talent Incubator',
    client: 'Ejaaz Regional Initiative (Proposed Concept)',
    category: ['marketing', 'branding', 'creative'],
    primaryCategory: 'branding',
    industry: 'EdTech & Creative Talent Incubation',
    market: 'GCC (Saudi Arabia & UAE)',
    timeline: 'Concept Exploration',
    role: 'Lead Brand Strategist & Visual Designer (Proposal)',
    scope: ['Brand Architecture', 'Curriculum Marketing Strategy', 'Naming Exploration', 'Visual Identity System'],
    status: 'Proposed Campaign Concept',
    tagline: 'Empowering the next generation of Arab creative technologists',
    summary: 'A proposed brand framework and launch campaign for a speculative regional accelerator designed to fast-track young Arab designers, copywriters, and developers into global creative agencies.',
    heroImage: '/src/assets/images/juraa_healthcare_brand_1790649794769.jpg', // fallback image
    accentColor: '#315BFF',
    overview: {
      statement: 'This proposed campaign concept addresses the gap between traditional academic design education and modern digital product realities in the GCC.',
      objectives: [
        'Create a prestigious, culturally resonant brand identity for creative talent incubation',
        'Formulate a 3-stage recruitment campaign targeting young university graduates',
        'Establish partnership guidelines for regional agency sponsors'
      ]
    },
    challenge: {
      coreProblem: 'Creative degrees in the region often emphasize print and static design, while the market desperately demands interactive UX, creative coding, and marketing strategy.',
      marketContext: 'The GCC creative economy is booming with gigaprojects, but senior creative leadership is often imported from abroad due to local talent pipelines lacking digital rigor.',
      frictionPoints: [
        'Lack of structured portfolio mentorship in conventional universities',
        'Skepticism from parents regarding creative career longevity compared to engineering/medicine',
        'Need for a brand that feels as prestigious as Stanford d.school while rooted in Arab heritage'
      ]
    },
    insight: {
      headline: 'Ambition is abundant; structured taste is scarce.',
      narrative: 'Young Arab creatives don’t lack tools or motivation—they lack taste calibration, critique frameworks, and direct access to high-stakes client briefs.',
      keyTakeaway: 'Position Ejaaz not as a school, but as an elite guild for modern creative craft.'
    },
    strategy: {
      positioning: '"Where Arab Ingenuity Meets Modern Craft."',
      pillars: [
        { title: 'The Apprenticeship Model', explanation: 'Learning through direct collaboration on live commercial accounts.' },
        { title: 'Bilingual Excellence', explanation: 'Thinking and designing fluently in both Arabic and English.' },
        { title: 'Portfolio-First Currency', explanation: 'No diplomas; only verified shipped digital products.' }
      ],
      channels: ['Behance Curated Highlights', 'University Roadshows in Riyadh, Cairo, and Dubai', 'Interactive Portfolio Challenge on Web'],
      keyMessage: 'Your craft is your passport.'
    },
    creativeResponse: {
      artDirectionNote: 'Stark ivory background, high-contrast black typography, electric cobalt accents, and geometric Arabic letterforms framing student work.',
      deliverables: [
        { title: 'Identity System & Arabic Wordmark', category: 'Visual Identity', description: 'Typographic system pairing modern Arabic geometry with Space Grotesk.' },
        { title: 'Recruitment Pitch Deck', category: 'Pitch & Strategy', description: 'Visual presentation for regional government and agency stakeholders.' },
        { title: 'Curriculum Showcase Book', category: 'Editorial Design', description: 'Concept guide detailing the 12-week intensive studio syllabus.' }
      ],
      visualConcept: 'The angled slash: cutting through traditional dogma to carve new creative pathways.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Concept Validation', description: 'Interviews with 12 creative directors in Riyadh and Dubai.' },
        { name: 'Phase 2: Visual Prototype', description: 'Building the complete brand book and mockup recruitment posters.' },
        { name: 'Phase 3: Proposal Submission', description: 'Packaging strategy for prospective regional incubator partners.' }
      ],
      coordinationDetails: 'Independent strategic proposal developed as part of Nouri Hazem’s regional creative initiative portfolio.'
    },
    measurement: {
      framework: 'Theoretical milestone framework ready for pilot deployment upon institutional approval.',
      metrics: [
        { label: 'Pilot Cohort Target', value: '25 Fellows', context: 'Selected from across Egypt and GCC (Planned target)', verified: false },
        { label: 'Agency Placement Goal', value: '85%', context: 'Target placement rate within 90 days of completion', verified: false },
        { label: 'Status', value: 'Proposal', context: 'Clearly marked conceptual framework ready for execution', verified: true }
      ],
      reportingMethod: 'Proposed quarterly cohort analytics report.',
      disclaimer: 'Note: This is a proposed campaign concept and strategic exploration, not a historical completed client engagement.'
    },
    learnings: {
      strategicReflection: 'Conceptual work allows an strategist to stretch theoretical horizons and test how a brand might solve systemic industry problems before a dollar of capital is committed.',
      keySkillDemonstrated: 'Educational curriculum branding, visionary proposal design, and high-level ecosystem modeling.'
    }
  },
  {
    id: 'volt-egypt',
    slug: 'volt-egypt-mobility',
    title: 'Volt Egypt Mobility',
    client: 'Volt Mobility (Independent Speculative Project)',
    category: ['marketing', 'digital', 'branding'],
    primaryCategory: 'digital',
    industry: 'Clean Energy & Smart Urban Mobility',
    market: 'Egypt (Greater Cairo Metropolitan Area)',
    timeline: 'Independent Speculative Project',
    role: 'Lead UX Strategist & Interactive Developer',
    scope: ['Urban Mobility Research', 'Interactive Web Simulator', 'Brand Architecture', 'Conversion Funnel Prototyping'],
    status: 'Independent Speculative Project',
    tagline: 'Accelerating EV adoption in Cairo through clear total-cost-of-ownership math',
    summary: 'An independent strategic and interactive web prototype exploring how electric vehicle adoption in Cairo can be accelerated through transparent cost calculators and charging network maps.',
    heroImage: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg', // fallback image
    accentColor: '#315BFF',
    overview: {
      statement: 'An exploratory project testing how interactive web development and data visualization can overcome consumer hesitation about EV ownership in developing infrastructure markets.',
      objectives: [
        'Address range anxiety and charging availability concerns in Greater Cairo',
        'Build a real-time responsive web calculator comparing petrol vs electricity costs',
        'Showcase Nouri’s combined skills in React frontend development, data, and brand strategy'
      ]
    },
    challenge: {
      coreProblem: 'Egyptian consumers view electric cars as luxury toys that are impossible to charge outside affluent gated communities.',
      marketContext: 'Rapid fuel price adjustments in Egypt make the operational math of EVs extremely attractive, yet almost no dealership provides localized financial modeling.',
      frictionPoints: [
        'Confusion regarding charging socket standards (Type 2 vs CCS2)',
        'Lack of centralized maps showing operational public chargers in Cairo',
        'Difficulty calculating payback periods against high upfront vehicle purchase prices'
      ]
    },
    insight: {
      headline: 'People do not buy green technology to save the planet; they buy it when the monthly math is undeniable.',
      narrative: 'When drivers in Cairo see that their daily commute costs 75% less on electricity compared to 95-octane petrol, the hesitation disappears.',
      keyTakeaway: 'The best marketing tool is an interactive calculator that lets the user discover the savings themselves.'
    },
    strategy: {
      positioning: '"Smart Mobility for Practical People."',
      pillars: [
        { title: 'The Cold Hard Numbers', explanation: 'Honest calculations factoring in battery degradation and electricity tariffs.' },
        { title: 'The Live Grid', explanation: 'Interactive map locating active charging stations along the Ring Road and New Cairo.' },
        { title: 'Myth-Busting Knowledge Base', explanation: 'Answering common questions about summer battery heat and maintenance.' }
      ],
      channels: ['Interactive Web Application (React & Leaflet)', 'YouTube Teardowns & Real-World Highway Range Tests', 'Tech Community Forums'],
      keyMessage: 'Charge at night. Commute for pennies.'
    },
    creativeResponse: {
      artDirectionNote: 'Clean, technical, high-legibility interface using warm ivory, dark graphite, and electric cobalt data points. No cliché green leaves or fake environmental fluff.',
      deliverables: [
        { title: 'Interactive React Cost Calculator', category: 'Interactive Web Dev', description: 'Client-side calculator computing kilometer savings based on commute distance.' },
        { title: 'Brand Identity & Visual System', category: 'Visual Identity', description: 'Minimalist logo and typographic system designed for high outdoor legibility.' },
        { title: 'Responsive Mobile Prototype', category: 'UX/UI Design', description: 'Touch-optimized interface for mobile users checking nearby stations.' }
      ],
      visualConcept: 'The live charge circuit: thin hairline dividers illuminating when user inputs are adjusted.'
    },
    execution: {
      phases: [
        { name: 'Phase 1: Market & Tariff Research', description: 'Gathering current Egyptian commercial and residential electricity tiers.' },
        { name: 'Phase 2: React Interactive Architecture', description: 'Developing the frontend calculation engine and responsive layouts.' },
        { name: 'Phase 3: User Usability Testing', description: 'Testing the interactive sliders with 10 Cairo commuters for comprehension.' }
      ],
      coordinationDetails: 'Self-directed research and development project executed entirely by Nouri Hazem.'
    },
    measurement: {
      framework: 'Interactive simulation testing metrics, task completion rate, and financial calculation accuracy.',
      metrics: [
        { label: 'Interactive Prototype', value: 'Functional', context: 'Built with React, TypeScript, and responsive Tailwind layouts', verified: true },
        { label: 'Calculation Accuracy', value: '100%', context: 'Factored against official 2024 Egyptian electricity tariff brackets', verified: true },
        { label: 'Status', value: 'Speculative', context: 'Independent demonstration of interactive web development & strategy', verified: true }
      ],
      reportingMethod: 'Self-contained interactive web tool demonstration.',
      disclaimer: 'Note: This is an independent speculative concept created to showcase interactive web development and strategic modeling capabilities.'
    },
    learnings: {
      strategicReflection: 'Being able to code the tools you envision as a marketer is a superpower. It turns passive pitch decks into active, touchable experiences.',
      keySkillDemonstrated: 'Interactive React development, mathematical modeling, and functional UX design.'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Disciplines', count: PROJECTS.length },
  { id: 'marketing', label: 'Marketing Strategy', count: PROJECTS.filter(p => p.category.includes('marketing')).length },
  { id: 'creative', label: 'Creative Direction', count: PROJECTS.filter(p => p.category.includes('creative')).length },
  { id: 'branding', label: 'Brand Architecture', count: PROJECTS.filter(p => p.category.includes('branding')).length },
  { id: 'data', label: 'Data & Analytics', count: PROJECTS.filter(p => p.category.includes('data')).length },
  { id: 'digital', label: 'Digital Experiences', count: PROJECTS.filter(p => p.category.includes('digital')).length },
] as const;
