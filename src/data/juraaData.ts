export interface JuraaCaseStudyData {
  meta: {
    projectName: string;
    arabicName: string;
    headline: string;
    category: string;
    industry: string;
    market: string;
    project: string;
    role: string;
    scope: string[];
    introduction: string;
    objective: string;
    heroImage: string;
    status: string;
  };
  challenge: {
    sectionLabel: string;
    headline: string;
    body: string[];
    strategicQuestion: string;
  };
  insight: {
    sectionLabel: string;
    mainStatement: string;
    body: string[];
    conceptLeft: string;
    conceptRight: string;
    conceptLeftSub: string;
    conceptRightSub: string;
    unifiedTakeaway: string;
  };
  strategy: {
    sectionLabel: string;
    campaignPlatform: string;
    positioning: string;
    strategicApproach: string;
    dimensions: {
      number: string;
      title: string;
      explanation: string;
    }[];
  };
  contentArchitecture: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    pillars: {
      number: string;
      title: string;
      description: string;
      focus: string;
    }[];
    channels: {
      primary: string[];
      supporting: string[];
    };
    contentFormats: string[];
  };
  rollout: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    phases: {
      week: string;
      title: string;
      objective: string;
      strategicRole: string;
      days: string;
      deliverableHighlight: string;
    }[];
    plannedDeliverables: string[];
  };
  measurement: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    disclaimerLabel: string;
    disclaimerText: string;
    stages: {
      number: string;
      name: string;
      metrics: string[];
      intent: string;
    }[];
  };
  contribution: {
    sectionLabel: string;
    headline: string;
    body: string[];
    strategicJourney: string[];
    keyDeliverables: string[];
  };
}

export const JURAA_CASE_STUDY: JuraaCaseStudyData = {
  meta: {
    projectName: 'JURAA',
    arabicName: 'جرعة',
    headline: 'Turning everyday care into a 30-day go-to-market strategy.',
    category: 'Strategic Marketing',
    industry: 'Digital Health',
    market: 'Egypt',
    project: '30-Day Product Launch Plan',
    role: 'Digital Marketing Strategist',
    scope: [
      'Market Positioning',
      'Audience Strategy',
      'Campaign Narrative',
      'Content Architecture',
      'Channel Planning',
      'Creative Briefs',
      'KPI Framework',
    ],
    introduction:
      'JURAA is an Arabic-first medication and daily-organization app. I developed a 30-day go-to-market strategy built around the habits and relationships that give medication management meaning: caring for yourself, checking on someone you love, and maintaining consistency through a busy day.',
    objective:
      "The objective was to establish JURAA's relevance in everyday life before asking people to download it.",
    heroImage: '/assets/creative/juraa/juraa_hero.png',
    status: 'Proposed Go-to-Market Strategy',
  },
  challenge: {
    sectionLabel: '01 / THE CHALLENGE',
    headline: 'Make the product matter before explaining its features.',
    body: [
      'A feature-led launch could explain what JURAA does. The strategic challenge was to communicate why someone would make room for it in their daily routine.',
      'The plan needed to connect a familiar human need with a clear product benefit, guiding the audience from recognizing the problem to understanding the app, trying it and building a lasting habit.',
    ],
    strategicQuestion: 'Why should this product become part of everyday life?',
  },
  insight: {
    sectionLabel: '02 / THE CORE INSIGHT',
    mainStatement: 'Medication management is both a habit and an act of care.',
    body: [
      'Medication routines can reflect personal responsibility, family support and the effort required to maintain consistency in a busy life.',
      'The strategic insight was to approach forgetting as a challenge of everyday routines rather than a lack of care.',
      'This gave JURAA a human role: support the habit without replacing the care already present in people’s relationships.',
    ],
    conceptLeft: 'HABIT',
    conceptLeftSub: 'Personal responsibility, memory & routine consistency',
    conceptRight: 'CARE',
    conceptRightSub: 'Family empathy, mutual support & emotional reassurance',
    unifiedTakeaway:
      'Support the habit without replacing the care already present in human relationships.',
  },
  strategy: {
    sectionLabel: '03 / THE STRATEGY',
    campaignPlatform: 'Small Habits. Better Days.',
    positioning:
      'Position JURAA as an Arabic-first daily habit companion that helps people organize medication routines and everyday life.',
    strategicApproach:
      'Rather than introducing every feature at once, the strategy connects the product to four dimensions of the audience experience.',
    dimensions: [
      {
        number: '01',
        title: 'SELF-CARE',
        explanation: 'Help people build routines that depend less on memory alone.',
      },
      {
        number: '02',
        title: 'FAMILY CARE',
        explanation: 'Recognize the everyday reminders through which people look after one another.',
      },
      {
        number: '03',
        title: 'PRODUCT VALUE',
        explanation:
          'Introduce JURAA’s features through recognizable situations, showing how the app fits into real routines.',
      },
      {
        number: '04',
        title: 'COMMUNITY',
        explanation:
          'Build familiarity and trust through founder storytelling, audience conversations and shared experiences.',
      },
    ],
  },
  contentArchitecture: {
    sectionLabel: '04 / CONTENT ARCHITECTURE',
    headline: 'One strategy. Five content pillars. Multiple human moments.',
    introduction:
      'The campaign platform was translated into five content pillars, each serving a distinct role in the audience journey.',
    pillars: [
      {
        number: '01',
        title: 'HUMAN HABITS',
        description: 'Explore memory, consistency and everyday routines.',
        focus: 'Routine Recognition',
      },
      {
        number: '02',
        title: 'EVERYDAY LIVING',
        description: 'Connect organization with productivity and peace of mind.',
        focus: 'Emotional Relief',
      },
      {
        number: '03',
        title: 'PRODUCT EXPERIENCE',
        description: 'Demonstrate JURAA through relatable use cases.',
        focus: 'Feature Relevance',
      },
      {
        number: '04',
        title: 'HUMAN CARE',
        description: 'Reflect family relationships and everyday support.',
        focus: 'Interpersonal Empathy',
      },
      {
        number: '05',
        title: 'BRAND & COMMUNITY',
        description:
          "Build familiarity through the founder story, audience voices and JURAA's Free Forever promise.",
        focus: 'Long-term Trust',
      },
    ],
    channels: {
      primary: ['Instagram', 'TikTok', 'Facebook'],
      supporting: ['LinkedIn', 'WhatsApp'],
    },
    contentFormats: [
      'Educational and lifestyle content',
      'Founder storytelling',
      'Product demonstrations',
      'Interactive stories',
      'Community-led content',
      'Calls to action',
    ],
  },
  rollout: {
    sectionLabel: '05 / EXECUTION & ROLLOUT PLAN',
    headline: '30 days. Four connected phases.',
    introduction:
      'The launch journey was designed to introduce the need, establish the product’s value, encourage consistent use and develop community trust.',
    phases: [
      {
        week: 'WEEK 01',
        title: 'PRE-LAUNCH',
        objective: 'Recognition and curiosity.',
        strategicRole:
          'Build awareness around medication habits and create curiosity before introducing the product.',
        days: 'Days 01–07',
        deliverableHighlight: 'Teaser narrative & everyday routine observations',
      },
      {
        week: 'WEEK 02',
        title: 'LAUNCH',
        objective: 'Understanding and trial.',
        strategicRole:
          'Introduce JURAA, communicate its value, demonstrate the experience and encourage first-time action.',
        days: 'Days 08–14',
        deliverableHighlight: 'Product reveal, walkthrough videos & store links',
      },
      {
        week: 'WEEK 03',
        title: 'HABIT FORMATION',
        objective: 'Consistency.',
        strategicRole:
          'Connect the app to realistic daily routines, emphasizing consistency over perfection.',
        days: 'Days 15–21',
        deliverableHighlight: 'Mid-funnel retention tips & routine checkpoints',
      },
      {
        week: 'WEEK 04',
        title: 'COMMUNITY & RETENTION',
        objective: 'Trust and continued use.',
        strategicRole:
          'Strengthen relationships through shared experiences, audience conversations and family-care storytelling.',
        days: 'Days 22–30',
        deliverableHighlight: 'Founder narrative, audience stories & month-two roadmap',
      },
    ],
    plannedDeliverables: [
      'Daily content calendar',
      'Campaign narrative',
      'Creative briefs',
      'Calls to action',
      'Channel roles',
      'Proposed second-month direction',
    ],
  },
  measurement: {
    sectionLabel: '06 / MEASUREMENT FRAMEWORK',
    headline: 'Connect marketing activity to product adoption.',
    introduction:
      'The KPI framework was designed to evaluate the campaign across the audience journey, from initial awareness to continued product use.',
    disclaimerLabel: 'PLANNED KPI FRAMEWORK — NOT REPORTED RESULTS',
    disclaimerText:
      'These measures were proposed for evaluating the campaign. The project materials establish the measurement framework but do not report verified campaign performance.',
    stages: [
      {
        number: '01',
        name: 'AWARENESS',
        metrics: ['Reach', 'Impressions', 'Video views'],
        intent: 'Validate initial audience resonance and topic curiosity',
      },
      {
        number: '02',
        name: 'ENGAGEMENT & COMMUNITY',
        metrics: [
          'Saves',
          'Shares',
          'Comments',
          'Story interactions',
          'User-generated content',
        ],
        intent: 'Measure how deeply audiences connect with care narratives',
      },
      {
        number: '03',
        name: 'ACQUISITION',
        metrics: ['App-store visits', 'Downloads'],
        intent: 'Track intent conversion from social channels to app store',
      },
      {
        number: '04',
        name: 'ACTIVATION',
        metrics: ['First reminder created'],
        intent: 'Measure transition from installation to real daily utility',
      },
      {
        number: '05',
        name: 'RETENTION',
        metrics: ['Daily active users', 'Seven-day retention', 'Reviews'],
        intent: 'Evaluate sustained habit formation and app satisfaction',
      },
    ],
  },
  contribution: {
    sectionLabel: '07 / STRATEGIC CONTRIBUTION',
    headline: 'One connected system, from recognition to routine.',
    body: [
      "My contribution was to connect JURAA's positioning, audience needs, campaign narrative, content strategy, creative planning and performance measurement into one coherent go-to-market system.",
      'Rather than treating marketing as a sequence of disconnected posts, the plan gave every phase and content pillar a defined role in introducing the product and supporting its adoption.',
    ],
    strategicJourney: ['Recognition', 'Trust', 'Trial', 'Routine', 'Community'],
    keyDeliverables: [
      'Brand positioning direction',
      'Audience journey',
      'Campaign platform',
      'Five content pillars',
      'Channel plan',
      '30-day calendar',
      'Creative briefs',
      'Calls to action',
      'Second-month direction',
      'KPI framework',
    ],
  },
};
