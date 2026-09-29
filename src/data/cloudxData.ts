export interface CloudXCaseStudyData {
  meta: {
    projectName: string;
    headline: string;
    category: string;
    industry: string;
    markets: string;
    engagement: string;
    client: string;
    role: string;
    scope: string[];
    projectStatus: string;
    introduction: string;
    heroImage: string;
  };
  challenge: {
    sectionLabel: string;
    headline: string;
    body: string[];
    leftPerspective: {
      title: string;
      description: string;
    };
    rightPerspective: {
      title: string;
      description: string;
    };
  };
  insight: {
    sectionLabel: string;
    mainStatementLine1: string;
    mainStatementLine2: string;
    body: string[];
  };
  positioning: {
    sectionLabel: string;
    headline: string;
    proposedCategory: string;
    campaignPlatform: string;
    strategicApproach: string;
    priorityAudiences: {
      num: string;
      title: string;
      friction: string;
    }[];
    acquisitionRoutes: {
      name: string;
      focus: string;
      motion: string;
    }[];
  };
  campaignArchitecture: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    stages: {
      stageNum: string;
      title: string;
      strategicPurpose: string;
      campaignDirection: string;
      explanation: string;
      week: string;
    }[];
    additionalPlanning: string[];
  };
  demandGeneration: {
    sectionLabel: string;
    headline: string;
    body: string;
    contentSystems: {
      num: string;
      title: string;
      description: string;
      format: string;
    }[];
  };
  healthCheck: {
    sectionLabel: string;
    headline: string;
    concept: string;
    body: string;
    proposedJourney: {
      step: string;
      name: string;
      detail: string;
    }[];
  };
  salesEnablement: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    tools: {
      num: string;
      name: string;
      purpose: string;
    }[];
    operatingModelSummary: string;
    testingAreas: string[];
  };
  clientGrowth: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    dimensions: {
      name: string;
      factors: string[];
    }[];
    matrixQuadrants: {
      id: string;
      title: string;
      readiness: string;
      growthValue: string;
      action: string;
      strategicRationale: string;
    }[];
    possibleActions: string[];
    strategicComponents: string[];
  };
  measurement: {
    sectionLabel: string;
    headline: string;
    introduction: string;
    disclaimerLabel: string;
    disclaimerText: string;
    system1: {
      name: string;
      stages: {
        stage: string;
        metrics: string[];
      }[];
    };
    system2: {
      name: string;
      headlineMeasures: string[];
      supportingDetail: string;
    };
  };
  contribution: {
    sectionLabel: string;
    headline: string;
    body: string[];
    system1Flow: string[];
    system2Flow: string[];
    keyDeliverables: string[];
    finalStatement: string;
    projectStatusNote: string;
  };
}

export const CLOUDX_CASE_STUDY: CloudXCaseStudyData = {
  meta: {
    projectName: 'CloudX',
    headline: 'Building a growth system for the work that happens after launch.',
    category: 'Strategic Marketing',
    industry: 'B2B Digital Infrastructure',
    markets: 'Egypt, Saudi Arabia and UAE',
    engagement: 'Ongoing Strategy Development',
    client: 'CloudX Web Services',
    role: 'Strategic Marketing & Growth Strategy',
    scope: [
      'Market Positioning',
      'Go-to-Market Strategy',
      'Audience Prioritization',
      'Demand Generation',
      'Campaign Architecture',
      'Client-Led Growth',
      'Sales Enablement',
      'Measurement Framework',
    ],
    projectStatus: 'Strategy and execution plans developed.',
    introduction:
      'CloudX provides digital infrastructure and post-launch technical support. I developed a strategic marketing framework to clarify its role in the market and connect that position to audience targeting, campaign planning, lead generation, sales follow-up and growth through existing customer relationships. The work resulted in two connected strategic systems: a go-to-market campaign plan built around "The Second Launch" and a client-led growth strategy for turning customer success into proof, warm introductions and qualified pipeline.',
    heroImage: '/src/assets/images/cloudx.png',
  },
  challenge: {
    sectionLabel: '01 / THE CHALLENGE',
    headline: 'Make post-launch operations easier to understand and buy.',
    body: [
      'Businesses often treat software development, hosting and ongoing operations as separate needs. That can make the value of continuous product care difficult to recognize, especially when a product is still online and problems have not yet become visible to customers.',
      'CloudX needed a clearer way to explain what happens after launch, who needs ongoing support and how a prospective customer could take a useful first step.',
      'A second opportunity existed within its customer base. Existing relationships could support advocacy and introductions, but only if CloudX first understood account health and matched each client with an appropriate next step.',
    ],
    leftPerspective: {
      title: 'Prospective Audience Friction',
      description:
        'Communicating ongoing product care when digital products appear to be running normally and risks remain latent.',
    },
    rightPerspective: {
      title: 'Customer-Led Pipeline Potential',
      description:
        'Developing organic growth and warm referrals by assessing account health rather than making blanket referral asks.',
    },
  },
  insight: {
    sectionLabel: '02 / THE STRATEGIC INSIGHT',
    mainStatementLine1: 'Launch is a milestone.',
    mainStatementLine2: 'Operating the product is the work that follows.',
    body: [
      'A product can be online without being healthy. After launch, teams still need visibility into product behavior, support for operational issues and a way to respond as their products grow.',
      'That insight shaped the central strategic direction: position CloudX around the ongoing work of operating and supporting digital products after launch.',
    ],
  },
  positioning: {
    sectionLabel: '03 / POSITIONING & GO-TO-MARKET',
    headline: 'Give CloudX a clearer role in the customer journey.',
    proposedCategory: 'Software After-Sale',
    campaignPlatform: 'The Second Launch',
    strategicApproach:
      'I developed "Software After-Sale" as a proposed market category and "The Second Launch" as the campaign platform. The strategy connected CloudX\'s services to the operational needs of digital product teams, then mapped those needs to audiences and a staged route to action.',
    priorityAudiences: [
      { num: '01', title: 'Founders and CEOs', friction: 'Protecting capital and reputation post-launch' },
      { num: '02', title: 'Product Managers', friction: 'Unplanned downtime draining roadmap velocity' },
      { num: '03', title: 'CTOs and Technical Leads', friction: 'Infrastructure debt and monitoring blind spots' },
      { num: '04', title: 'Digital Agencies', friction: 'Handling client maintenance without burning dev hours' },
      { num: '05', title: 'E-commerce Teams', friction: 'Traffic spikes causing unexpected checkout failures' },
      { num: '06', title: 'Companies Without Ops Support', friction: 'No internal dedicated DevOps or sysadmin staff' },
      { num: '07', title: 'Advanced & AI-Product Teams', friction: 'Complex microservices requiring 24/7 uptime' },
    ],
    acquisitionRoutes: [
      {
        name: 'Broad Acquisition Route',
        focus: 'Accessible entry packages & automated diagnostic entry points',
        motion: 'Self-serve Product Health Check & structured introductory tiers',
      },
      {
        name: 'Targeted Enterprise Route',
        focus: 'High-value complex infrastructure & custom service agreements',
        motion: 'Consultative C-level technical audit & dedicated sales dialogue',
      },
    ],
  },
  campaignArchitecture: {
    sectionLabel: '04 / CAMPAIGN ARCHITECTURE',
    headline: 'One campaign narrative. Four strategic stages.',
    introduction:
      'I structured the 30-day campaign as a connected journey, with each week advancing the strategic argument.',
    stages: [
      {
        stageNum: '01',
        title: 'RECOGNIZE THE PROBLEM',
        strategicPurpose: 'Help audiences notice the gap between being online and being healthy.',
        campaignDirection: '"Online doesn\'t mean healthy."',
        explanation:
          'Shift prospective mindsets from passive complacency to recognizing hidden latency, security vulnerabilities and unmonitored dependencies.',
        week: 'Week 01',
      },
      {
        stageNum: '02',
        title: 'UNDERSTAND THE CATEGORY',
        strategicPurpose: 'Explain why building a product and operating it are different jobs.',
        campaignDirection: '"The second launch never ends."',
        explanation:
          'Clarify Software After-Sale: building software is a sprint with a finish line, but operating software is a continuous operational discipline.',
        week: 'Week 02',
      },
      {
        stageNum: '03',
        title: 'SEE THE SOLUTION',
        strategicPurpose: 'Make CloudX\'s Watchtowers and its proposed detection-to-resolution role more concrete.',
        campaignDirection: '"This ticket never happened. Here\'s why."',
        explanation:
          'Demonstrate proactive infrastructure monitoring and rapid resolution before incidents escalate into customer-facing downtime.',
        week: 'Week 03',
      },
      {
        stageNum: '04',
        title: 'TAKE ACTION',
        strategicPurpose: 'Address objections, present available proof and create a clear conversion path.',
        campaignDirection: 'Product Health Check and sales conversation.',
        explanation:
          'Convert primed interest into structured diagnostic assessments and consultative technical discovery discussions.',
        week: 'Week 04',
      },
    ],
    additionalPlanning: [
      'Audience-specific messaging matrices',
      'Campaign content arcs & cadence',
      'Multi-touch retargeting stages',
      'Weekly qualitative learning questions',
    ],
  },
  demandGeneration: {
    sectionLabel: '05 / DEMAND GENERATION & CONTENT',
    headline: 'Turn the campaign strategy into an operating plan.',
    body: 'The campaign plan mapped recommended activity across LinkedIn, Instagram, email, paid media, landing pages and sales follow-up.',
    contentSystems: [
      {
        num: '01',
        title: 'Hero Film Concept',
        description:
          'A "The Second Launch" brand anthem film designed to anchor the campaign narrative and yield modular short-form adaptations.',
        format: 'Video / Cinema Cut & Vertical Hooks',
      },
      {
        num: '02',
        title: 'Social Content Engine',
        description:
          '18 structured creative assets: six carousel concepts, six short-form video concepts, and six static or motion graphics.',
        format: 'Carousels, Video Hooks & Diagrams',
      },
      {
        num: '03',
        title: 'Email Nurture Sequence',
        description:
          'A 4-part educational workflow addressing risk recognition, category education, objection handling and assessment booking.',
        format: 'Automated 4-Stage Email Workflow',
      },
      {
        num: '04',
        title: 'Community & Interactive Stories',
        description:
          'Weekly interactive Story prompts and community discussion systems focused on real-world uptime lessons.',
        format: 'Stories & Discussion Prompts',
      },
      {
        num: '05',
        title: 'LinkedIn Thought Leadership',
        description:
          'A rotating publishing model featuring founder, technical, product, security and corporate organizational perspectives.',
        format: 'Executive B2B Editorial Framework',
      },
      {
        num: '06',
        title: 'Paid Media Architecture',
        description:
          'A full-funnel media plan separating broad problem awareness from targeted retargeting aligned with conversion milestones.',
        format: 'Full-Funnel Paid Media Blueprint',
      },
    ],
  },
  healthCheck: {
    sectionLabel: '06 / THE CONVERSION MECHANISM',
    headline: 'Give the audience a useful first step.',
    concept: 'Product Health Check',
    body: 'I designed the Product Health Check as the campaign\'s primary proposed conversion mechanism: a low-friction starting point that could help a prospect identify relevant product-health concerns and guide them toward an assessment or CloudX conversation. The plan mapped its proposed landing-page journey, question structure, follow-up, retargeting, CRM routing and sales handoff.',
    proposedJourney: [
      { step: '01', name: 'Campaign Interaction', detail: 'Content exposure on LinkedIn, search or social channels triggering awareness.' },
      { step: '02', name: 'Diagnostic Landing Page', detail: 'Dedicated low-friction entry page introducing the self-assessment framework.' },
      { step: '03', name: 'Diagnostic Questions', detail: 'Targeted assessment evaluating uptime monitoring, backup routines and security.' },
      { step: '04', name: 'Relevant Follow-Up', detail: 'Actionable summary highlighting latent operational risks and opportunities.' },
      { step: '05', name: 'CRM Routing', detail: 'Automated qualification scoring and routing based on infrastructure scale.' },
      { step: '06', name: 'Sales Conversation', detail: 'Informed consultative discovery led by CloudX systems specialists.' },
    ],
  },
  salesEnablement: {
    sectionLabel: '07 / SALES ENABLEMENT',
    headline: 'Keep marketing connected to the sales conversation.',
    introduction:
      'The strategy included practical tools to help sales teams respond to different customer needs and objections throughout the campaign.',
    tools: [
      { num: '01', name: 'Diagnostic Conversation Opener', purpose: 'Framework for sales reps to guide early-stage prospect discussions.' },
      { num: '02', name: 'Comparison One-Pager', purpose: 'Directly addresses objections comparing CloudX with traditional hosting support.' },
      { num: '03', name: 'Watchtower Explainer', purpose: 'Technical briefing sheet explaining proactive detection and monitoring architecture.' },
      { num: '04', name: 'Health Check Results Template', purpose: 'Standardized deliverable to structure post-assessment follow-up and proposals.' },
    ],
    operatingModelSummary:
      'The strategy outlined content batching, a bi-weekly production and review rhythm, weekly performance reviews and an iterative testing program.',
    testingAreas: ['Campaign hooks', 'Terminology acceptance', 'Calls to action', 'Proof formats', 'Audience response variations'],
  },
  clientGrowth: {
    sectionLabel: '08 / CLIENT-LED GROWTH STRATEGY',
    headline: 'Turn customer success into an appropriate growth motion.',
    introduction:
      'I developed a separate strategy for using customer relationships as a source of advocacy and qualified introductions. The strategy begins with an account-health audit, not a mass referral request.',
    dimensions: [
      {
        name: 'Advocacy Readiness (Vertical Axis)',
        factors: ['Relationship health', 'Customer satisfaction scores', 'Recent milestone or operational success'],
      },
      {
        name: 'Growth Value (Horizontal Axis)',
        factors: ['Network relevance', 'Fit with CloudX target audience', 'Potential for peer proof or enterprise partnership'],
      },
    ],
    matrixQuadrants: [
      {
        id: 'high-high',
        title: 'High Readiness · High Value',
        readiness: 'High',
        growthValue: 'High',
        action: 'Request a Warm Introduction',
        strategicRationale:
          'Ideal scenario for peer-to-peer introductions. The client is delighted and well-connected within target ICP ecosystems.',
      },
      {
        id: 'high-moderate',
        title: 'High Readiness · Targeted Value',
        readiness: 'High',
        growthValue: 'Moderate',
        action: 'Capture Testimonial or Case Story',
        strategicRationale:
          'Client has experienced verified success; suitable for authoritative case studies and social proof without direct network referral.',
      },
      {
        id: 'moderate-high',
        title: 'Developing Readiness · High Value',
        readiness: 'Moderate',
        growthValue: 'High',
        action: 'Strengthen the Relationship First',
        strategicRationale:
          'High enterprise potential, but advocacy readiness requires further technical wins and executive relationship nurturing.',
      },
      {
        id: 'moderate-low',
        title: 'Baseline Relationship · Moderate Value',
        readiness: 'Moderate',
        growthValue: 'Low/Moderate',
        action: 'Explore Account Expansion',
        strategicRationale:
          'Focus on deepening internal service adoption and monitoring coverage rather than asking for external introductions.',
      },
    ],
    possibleActions: [
      'Request a warm introduction',
      'Capture a testimonial or case story',
      'Strengthen the relationship first',
      'Explore service expansion',
      'Maintain the relationship without making an advocacy request',
    ],
    strategicComponents: [
      'Success-based referral triggers tied to resolved incidents',
      'Specific, low-pressure introduction request templates',
      'CRM tracking fields for advocacy stages and referral origin',
      'Client privacy safeguards & stakeholder consent checkpoints',
      'Dedicated warm-introduction sales process',
      'Proposed pilot involving 5–8 advocacy-ready client accounts',
    ],
  },
  measurement: {
    sectionLabel: '09 / MEASUREMENT FRAMEWORK',
    headline: 'Measure the signals that show whether the system is working.',
    introduction:
      'I designed separate measurement approaches for the go-to-market campaign and the proposed client-led growth pilot.',
    disclaimerLabel: 'PLANNED MEASUREMENT FRAMEWORK — NOT REPORTED CAMPAIGN RESULTS',
    disclaimerText:
      'These measurement structures represent proposed evaluation frameworks designed to track progress across the funnel. They establish how performance should be monitored, but do not report measured commercial outcomes.',
    system1: {
      name: 'System 01: Go-to-Market Measurement',
      stages: [
        { stage: 'Awareness', metrics: ['Qualified reach within target ICP', 'Relevant content exposure & impression share'] },
        { stage: 'Education', metrics: ['Content engagement rate', 'Audience response & qualitative feedback'] },
        { stage: 'Consideration', metrics: ['Diagnostic landing-page visits', 'Product Health Check starts and completions'] },
        { stage: 'Conversion', metrics: ['Consultation requests generated', 'Qualified sales opportunities created'] },
      ],
    },
    system2: {
      name: 'System 02: Client-Led Growth Measurement',
      headlineMeasures: ['Advocacy-ready clients identified', 'Warm introductions generated', 'Qualified referral pipeline volume'],
      supportingDetail:
        'Tracking referrals through the CRM from initial introduction request to sales qualification and onboarding outcome.',
    },
  },
  contribution: {
    sectionLabel: '10 / STRATEGIC CONTRIBUTION',
    headline: 'A connected system from positioning to pipeline.',
    body: [
      'My work connected CloudX\'s market position to a campaign narrative, a defined audience journey, a proposed conversion mechanism, sales enablement, measurement and a separate customer-led growth motion.',
      'The project demonstrates how I approach strategic marketing: clarify the market role, translate it into a structured go-to-market plan, connect marketing with sales operations and define how progress should be evaluated.',
    ],
    system1Flow: ['Positioning', 'Demand Generation', 'Conversion (Health Check)', 'Sales Pipeline'],
    system2Flow: ['Account Health Audit', 'Advocacy Readiness', 'Warm Introductions', 'Referral Pipeline'],
    keyDeliverables: [
      'Market positioning framework',
      'Proposed "Software After-Sale" category',
      '"The Second Launch" campaign platform',
      '7-tier audience prioritization matrix',
      '30-day campaign architecture (4 stages)',
      'Full demand-generation operating plan',
      '18-part social and thought leadership content system',
      'Product Health Check conversion mechanism',
      'Sales-enablement tools & testing program',
      'Client-led growth decision matrix',
      'Proposed advocacy pilot (5–8 accounts)',
      'Dual-system measurement frameworks',
    ],
    finalStatement: 'From positioning to pipeline.',
    projectStatusNote:
      'Strategy and execution plans developed. Campaign activity and commercial outcomes are not presented as completed or measured results.',
  },
};
