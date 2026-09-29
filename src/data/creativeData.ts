export interface CreativeExecutionItem {
  id: string;
  title: string;
  titleArabic?: string;
  category: string;
  aspectRatio: '1/1' | '4/5' | '16/9' | '9/16' | '4/3';
  primaryImage: string;
  candidateImages: string[];
  caption: string;
  captionArabic?: string;
  dimensions?: string;
  visualHookNote?: string;
}

export interface CreativeChapterData {
  chapter00: {
    projectName: string;
    parentCollection?: string;
    tagline: string;
    taglineArabic?: string;
    industry: string;
    market: string;
    year?: string;
    projectStatus: string;
    role: string;
    disciplines: string[];
    introduction: string;
    heroImage: string;
    heroImageCandidates: string[];
  };
  chapter01: {
    headline: string;
    challengeBrief: string;
    communicationObjectives: string[];
    intendedAudience: string;
    brandConstraints: string[];
  };
  chapter02: {
    headline: string;
    conceptName: string;
    conceptNameArabic?: string;
    conceptNarrative: string;
    visualHook: string;
    verbalHook?: string;
    verbalHookArabic?: string;
    strategicRationale: string;
    featuredVisual: string;
    featuredVisualCandidates: string[];
  };
  chapter03: {
    headline: string;
    artDirectionOverview: string;
    techniques: {
      title: string;
      description: string;
    }[];
    palette: {
      name: string;
      hex: string;
      role: string;
    }[];
    typographyNotes: string;
  };
  chapter04: {
    headline: string;
    overview: string;
    executions: CreativeExecutionItem[];
  };
  chapter05: {
    headline: string;
    summary: string;
    responsibilities: string[];
    creativeApproachStatement: string;
    credits?: {
      role: string;
      name: string;
    }[];
  };
}

export interface CreativeProject {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleArabic?: string;
  brand: string;
  industry: string;
  market: string;
  year?: string;
  discipline: string;
  shortDescription: string;
  heroImage: string;
  heroImageCandidates: string[];
  accentColor: string;
  isCollection?: boolean;
  collectionSlug?: string;
  subProjects?: string[];
  chapters?: CreativeChapterData;
}

export const SAUDI_NATIONAL_DAY_DATA = {
  title: 'SAUDI NATIONAL DAY 96',
  titleArabic: 'اليوم الوطني السعودي 96',
  subtitle: 'Four Brands. Four Creative Directions.',
  subtitleArabic: 'أربع علامات تجارية. أربعة مسارات إبداعية.',
  year: '2026',
  introduction:
    'A collection of brand-specific creative concepts developed for Saudi National Day 96 in 2026. The collection explores how the same cultural occasion can be approached through different brand identities and distinct creative ideas.',
  territory: 'CULTURAL CONTINUITY & FUTURE VISION',
  featuredBrands: [
    {
      id: 'snd-the-room',
      slug: 'the-room-snd96',
      number: '04A',
      title: 'THE ROOM ESPRESSO BAR',
      titleArabic: 'ذا روم إسبريسو بار',
      discipline: 'Campaign Concept & Art Direction',
      concept: 'Poured for a Brighter Tomorrow · نكهة تحتفي بالوطن',
      description:
        'A minimalist, graphic celebration translating espresso rituals into national celebration. Coffee cup stains form the numeral "96", framed by the ancient mudbrick architecture of At-Turaif.',
      heroImage: '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
      heroCandidates: [
        '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
        '/src/assets/creative/saudi-national-day-96/the-room/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
        '/src/assets/images/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
        '/src/assets/creative/saudi-national-day-96/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
      ],
      accentColor: '#1B2C24',
      status: 'Campaign Concept 2026',
    },
    {
      id: 'snd-ae-creative',
      slug: 'ae-creative-snd96',
      number: '04B',
      title: 'AE CREATIVE MEDIA PRODUCTION',
      titleArabic: 'إيه إي كرييتف للإنتاج الإعلامي',
      discipline: 'Cinematography & Brand Campaign',
      concept: 'Where Vision Becomes Impact · من الفكرة إلى أثر يُرى',
      description:
        'A cinematic campaign celebrating the visual storytellers behind Saudi Arabia’s cultural transformation. High-end camera rigs and traditional Najdi arches overlook the illuminated Riyadh skyline.',
      heroImage: '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
      heroCandidates: [
        '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
        '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
        '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
      ],
      accentColor: '#6B46C1',
      status: 'Campaign Concept 2026',
    },
    {
      id: 'snd-ratio',
      slug: 'ratio-snd96',
      number: '04C',
      title: 'RATIO SPECIALTY COFFEE',
      titleArabic: 'ريشيو للقهوة المختصة',
      discipline: 'Packaging Design & Cultural Storytelling',
      concept: 'Our Story Continues · تتغير التفاصيل ويبقى لنا كل ما يميزنا',
      description:
        'An intergenerational campaign and regional collector tumbler box honoring the 6 distinct provinces of the Kingdom, connecting heritage Arabic coffee rituals with contemporary specialty cups.',
      heroImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
      heroCandidates: [
        '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
        '/src/assets/creative/saudi-national-day-96/ratio/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
        '/src/assets/images/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
        '/src/assets/creative/saudi-national-day-96/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
      ],
      accentColor: '#174A37',
      status: 'Campaign Concept 2026',
    },
    {
      id: 'snd-bearu',
      slug: 'bearu-snd96',
      number: '04D',
      title: 'BÉARU CAFÉ',
      titleArabic: 'بيارو كافيه',
      discipline: 'Brand Storytelling & Family Experience',
      concept: 'Good Food, Brighter Tomorrows · أماكن صغيرة تصنع ذكريات كبيرة',
      description:
        'A warm, child-centered national celebration framing Saudi National Day through the eyes of little explorers. Outdoor kite-flying at historic Diriyah, tactile coloring, and cheerful bakery moments.',
      heroImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
      heroCandidates: [
        '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
        '/src/assets/creative/saudi-national-day-96/bearu/679FC972-83E2-45FB-A895-96A91D19CB54.png',
        '/src/assets/images/679FC972-83E2-45FB-A895-96A91D19CB54.png',
        '/src/assets/creative/saudi-national-day-96/679FC972-83E2-45FB-A895-96A91D19CB54.png',
      ],
      accentColor: '#E85A2A',
      status: 'Campaign Concept 2026',
    },
  ],
};

export const CREATIVE_PROJECTS: CreativeProject[] = [
  {
    id: 'juraa-creative',
    slug: 'juraa-creative-campaign',
    number: '01',
    title: 'JURAA / جرعة',
    titleArabic: 'جُرعة',
    brand: 'JURAA Digital Health',
    industry: 'Digital Health',
    market: 'Egypt',
    discipline: 'Campaign Concepts & Art Direction',
    shortDescription:
      'Translating everyday medication adherence into reassuring, human visual storytelling across Arabic-first digital touchpoints and multi-channel campaigns.',
    heroImage: '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
    heroImageCandidates: [
      '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
      '/src/assets/creative/juraa/juraa_campaign_hero.jpeg',
    ],
    accentColor: '#0F6663',
    chapters: {
      chapter00: {
        projectName: 'JURAA / جرعة',
        tagline: 'Care, made part of everyday life.',
        taglineArabic: 'جرعتك في وقتها، بدون قلق',
        industry: 'Digital Health',
        market: 'Egypt',
        projectStatus: 'Completed Campaign Concept',
        role: 'Creative Director & Campaign Art Director',
        disciplines: [
          'Campaign Concepts',
          'Creative Direction',
          'Campaign Art Direction',
          'Social Media Creatives',
          'Visual Storytelling',
        ],
        introduction:
          'JURAA was created to remove anxiety from medication routines. This creative campaign translates emotional family care into structured, calm social and digital storytelling that resonates with Arabic households.',
        heroImage: '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
        heroImageCandidates: [
          '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
          '/src/assets/creative/juraa/juraa_campaign_hero.jpeg',
        ],
      },
      chapter01: {
        headline: 'Transforming clinical duty into quiet peace of mind.',
        challengeBrief:
          'Medication reminders in digital health are routinely designed like fire alarms: urgent, clinical, and stressful. For chronic patients and elderly family members, this induces alarm fatigue and anxiety rather than consistent adherence.',
        communicationObjectives: [
          'De-stigmatize daily prescription management with warm, dignified visuals',
          'Emphasize family check-in peace of mind over punitive tracking metrics',
          'Establish a distinctive calm visual language in Arabic social feeds',
        ],
        intendedAudience:
          'Caregiver sons and daughters managing family medication routines, as well as independent adults managing chronic wellness in Egypt.',
        brandConstraints: [
          'Strict adherence to verified medical terminology without medical device claims',
          'Cairo typography system across all headline and social copy formats',
          'Deep Teal (#0F6663) and Soft Mint (#DCECEA) color allocation discipline',
        ],
      },
      chapter02: {
        headline: 'The Shape of Care — Turning reminders into family reassurance.',
        conceptName: 'The Shape of Care',
        conceptNameArabic: 'جرعتك في وقتها',
        conceptNarrative:
          'The central creative idea bridges emotional empathy and pharmaceutical precision. Every visual composition pairs the warm human touch of family life with clean, legible dosage guidance.',
        visualHook:
          'The interlocking 45-degree heart and capsule geometry framing everyday moments: morning tea, bedside glasses, and handwritten reminders.',
        verbalHook: 'Care, made part of everyday life.',
        verbalHookArabic: 'جرعتك في وقتها، بدون قلق',
        strategicRationale:
          'Rather than showing sterile pill bottles, the campaign focuses on the life lived when medication is seamlessly remembered.',
        featuredVisual: '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
        featuredVisualCandidates: [
          '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
          '/src/assets/creative/juraa/juraa_campaign_hero.jpeg',
        ],
      },
      chapter03: {
        headline: 'Restrained geometry and reassuring light.',
        artDirectionOverview:
          'Compositions prioritize breathing room, soft natural window light, and uncluttered spatial arrangements. The human subject is always captured in an unhurried, peaceful moment.',
        techniques: [
          {
            title: 'Natural Morning Illumination',
            description: 'Diffused morning sunlight simulating the start of a healthy, organized day.',
          },
          {
            title: 'Uncluttered Spatial Negative Space',
            description: 'Generous margins allowing Arabic Cairo headlines to breathe without claustrophobic stacking.',
          },
          {
            title: 'Tactile Warmth & Ceramic Surfaces',
            description: 'Pairing digital interfaces with warm ceramic mugs, linen tablecloths, and wooden nightstands.',
          },
        ],
        palette: [
          { name: 'Deep Teal', hex: '#0F6663', role: 'Anchor Brand Tone' },
          { name: 'Aqua Teal', hex: '#55B6AE', role: 'Interactive Highlights' },
          { name: 'Soft Mint', hex: '#DCECEA', role: 'Calm Surfaces' },
          { name: 'Pure White', hex: '#FFFFFF', role: 'Clarity & High Contrast' },
        ],
        typographyNotes:
          'Cairo Bold (700) for authoritative, friendly Arabic headlines; Cairo Light (300) for informative body copy.',
      },
      chapter04: {
        headline: 'Multi-Channel Social & Awareness Suite',
        overview:
          'Visual deliverables designed for carousel engagement, Instagram key visuals, and responsive digital ads.',
        executions: [
          {
            id: 'juraa-ex-01',
            title: 'Hero Brand Identity Key Visual',
            titleArabic: 'الهوية البصرية الرئيسية للحملة',
            category: 'Key Visual',
            aspectRatio: '16/9',
            primaryImage: '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
            candidateImages: [
              '/src/assets/images/juraa_healthcare_brand_1790649694769.jpg',
              '/src/assets/creative/juraa/juraa_campaign_hero.jpeg',
            ],
            caption: 'Core campaign key visual introducing JURAA to Egyptian digital health consumers.',
            captionArabic: 'الملصق الرئيسي لتدشين هوية جُرعة في السوق المصري.',
          },
        ],
      },
      chapter05: {
        headline: 'Creative Direction & Campaign Authorship',
        summary:
          'Conceptualized and art-directed the launch campaign for JURAA, formulating the core narrative, creative copy, and visual grammar.',
        responsibilities: [
          'Campaign Concepts & Platform Development',
          'Creative Direction & Art Direction',
          'Arabic Headline & Copywriting Craft',
          'Social Media Design & Visual Guidelines',
        ],
        creativeApproachStatement:
          'This project demonstrates how rigorous creative direction can rescue healthcare communications from clinical sterility, turning necessary routines into an uplifting affirmation of family love.',
      },
    },
  },
  {
    id: 'dipdux',
    slug: 'dipdux-analytica',
    number: '02',
    title: 'DIPDUX ANALYTICA',
    brand: 'Dipdux Analytica',
    industry: 'Technology / Corporate',
    market: 'Regional',
    discipline: 'Corporate Art Direction & Brand Communications',
    shortDescription:
      'Distilling enterprise technology and data intelligence into an authoritative, restrained editorial visual language.',
    heroImage: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
    heroImageCandidates: [
      '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
      '/src/assets/creative/dipdux/dipdux_hero.jpeg',
    ],
    accentColor: '#171717',
    chapters: {
      chapter00: {
        projectName: 'DIPDUX ANALYTICA',
        tagline: 'Intelligence, precisely rendered.',
        industry: 'Technology / Corporate',
        market: 'Regional',
        projectStatus: 'Client Campaign Suite',
        role: 'Creative Director & Editorial Designer',
        disciplines: [
          'Creative Direction',
          'Corporate Art Direction',
          'Data Visualization Design',
          'Executive Brand Collateral',
        ],
        introduction:
          'Dipdux Analytica required a visual language that avoided generic futuristic tech clichés—avoiding neon circuits and floating holograms in favor of high-contrast Swiss-style precision.',
        heroImage: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
        heroImageCandidates: [
          '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
          '/src/assets/creative/dipdux/dipdux_hero.jpeg',
        ],
      },
      chapter01: {
        headline: 'Cutting through enterprise technology noise.',
        challengeBrief:
          'Enterprise decision-makers are inundated with generic stock visuals depicting artificial intelligence. The challenge was to articulate analytical rigor through typographic restraint and structural visual hierarchy.',
        communicationObjectives: [
          'Signal institutional maturity and analytical depth',
          'Establish a disciplined monochromatic baseline with high-contrast accents',
          'Create reusable editorial layouts for research publications and whitepapers',
        ],
        intendedAudience: 'C-suite technology executives, enterprise data architects, and institutional partners.',
        brandConstraints: [
          'Zero speculative futuristic renders or generic circuit board graphics',
          'Strict adherence to modular grid alignments',
          'High legibility across monochrome and multi-channel displays',
        ],
      },
      chapter02: {
        headline: 'Architectonic Precision — Visual clarity as competitive advantage.',
        conceptName: 'Architectonic Precision',
        conceptNarrative:
          'Treating information architecture as physical architecture: clean structural columns, sharp baseline grids, and deliberate negative space that commands intellectual authority.',
        visualHook: 'The contrast of deep ink backgrounds with surgical geometric rules and typographic scale shifts.',
        verbalHook: 'Intelligence, precisely rendered.',
        strategicRationale:
          'In corporate technology, restraint signals confidence. The quieter and more disciplined the design, the more authoritative the analysis appears.',
        featuredVisual: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
        featuredVisualCandidates: [
          '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
          '/src/assets/creative/dipdux/dipdux_hero.jpeg',
        ],
      },
      chapter03: {
        headline: 'Swiss grid rigor meets corporate gravitas.',
        artDirectionOverview:
          'A disciplined monochrome foundation punctuated by single-line data callouts, subtle hairline dividers, and precision typographic kerning.',
        techniques: [
          {
            title: 'Strict Baseline Alignment',
            description: 'All copy blocks, figures, and graphic dividers adhere to an 8pt modular vertical cadence.',
          },
          {
            title: 'Monochromatic Tonal Restraint',
            description: 'Deep carbon ink, pure ivory, and soft platinum gray with selective electric cobalt cues.',
          },
          {
            title: 'Asymmetric White Space Allocations',
            description: 'Allowing white space to act as an active structural frame for core findings.',
          },
        ],
        palette: [
          { name: 'Deep Carbon', hex: '#171717', role: 'Dominant Background / Ink' },
          { name: 'Pure Ivory', hex: '#F4F1E9', role: 'Surface / Contrast Text' },
          { name: 'Platinum Gray', hex: '#D8D4CB', role: 'Dividers & Structure' },
          { name: 'Electric Accent', hex: '#315BFF', role: 'Interactive Focus' },
        ],
        typographyNotes:
          'Inter & Space Mono pairings providing technical precision and rapid executive readability.',
      },
      chapter04: {
        headline: 'Executive Visual System & Editorial Publications',
        overview:
          'Executive summaries, key data visuals, and brand communications engineered for institutional credibility.',
        executions: [
          {
            id: 'dipdux-ex-01',
            title: 'Corporate Identity Key Visual',
            category: 'Brand Collateral',
            aspectRatio: '16/9',
            primaryImage: '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
            candidateImages: [
              '/src/assets/images/cloudx_b2b_campaign_1790649718333.jpg',
              '/src/assets/creative/dipdux/dipdux_hero.jpeg',
            ],
            caption: 'Institutional brand communication for Dipdux Analytica executive briefings.',
          },
        ],
      },
      chapter05: {
        headline: 'Editorial Architecture & Creative Craft',
        summary:
          'Directed the visual system and publication formats, ensuring complex analytical concepts translate with immediate executive clarity.',
        responsibilities: [
          'Corporate Art Direction',
          'Information Architecture & Editorial Design',
          'Visual Guidelines for Data Presentations',
        ],
        creativeApproachStatement:
          'This project proves that corporate technology branding achieves its highest power not through cosmetic novelty, but through unwavering visual discipline.',
      },
    },
  },
  {
    id: 'reef-asia-kitchens',
    slug: 'reef-asia-kitchens',
    number: '03',
    title: 'REEF ASIA KITCHENS',
    brand: 'Reef Asia Kitchens',
    industry: 'Hospitality & Commercial Kitchens',
    market: 'Saudi Arabia',
    discipline: 'Creative Direction & Campaign Concepts',
    shortDescription:
      'A distinctive campaign framework developed for commercial hospitality and cloud-kitchen ecosystems in the Saudi market.',
    heroImage: '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
    heroImageCandidates: [
      '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
      '/src/assets/creative/reef-asia-kitchens/reef_hero.jpeg',
    ],
    accentColor: '#D97706',
    chapters: {
      chapter00: {
        projectName: 'REEF ASIA KITCHENS',
        tagline: 'Culinary infrastructure, creatively framed.',
        industry: 'Hospitality & Cloud Kitchens',
        market: 'Saudi Arabia',
        projectStatus: 'Pending Asset Integration',
        role: 'Creative Director',
        disciplines: ['Creative Direction', 'Campaign Concepts', 'Art Direction'],
        introduction:
          'Reef Asia Kitchens represents modern hospitality infrastructure in the Kingdom. The creative direction honors Saudi Arabia’s booming culinary landscape, awaiting original project asset integration.',
        heroImage: '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
        heroImageCandidates: [
          '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
          '/src/assets/creative/reef-asia-kitchens/reef_hero.jpeg',
        ],
      },
      chapter01: {
        headline: 'Bridging commercial culinary scale with local flavor culture.',
        challengeBrief:
          'Hospitality and cloud kitchen operations are often portrayed as sterile industrial warehouses. The creative challenge is to elevate commercial food infrastructure into a celebrated engine of gastronomic culture.',
        communicationObjectives: [
          'Communicate operational scale while maintaining culinary intimacy',
          'Position Reef Asia Kitchens as an essential partner to leading culinary brands in KSA',
          'Ground the identity in Saudi Arabia’s vibrant dining evolution',
        ],
        intendedAudience: 'Restaurateurs, hospitality investors, culinary entrepreneurs, and food ecosystem partners.',
        brandConstraints: [
          'Preserve the full name: Reef Asia Kitchens across all official attributions',
          'Allow original project artwork to determine final art direction without predetermining food styling clichés',
        ],
      },
      chapter02: {
        headline: 'The Culinary Engine — Craft meets industrial excellence.',
        conceptName: 'The Culinary Engine',
        conceptNarrative:
          'Framing the commercial kitchen not as a back-of-house utility, but as the high-precision beating heart of every unforgettable dining experience.',
        visualHook: 'The contrast of industrial stainless steel precision with artisanal culinary warmth.',
        verbalHook: 'Behind every flavor, a relentless standard.',
        strategicRationale:
          'B2B culinary operators choose partners who respect both the chef’s craft and the logistics of scale.',
        featuredVisual: '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
        featuredVisualCandidates: [
          '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
          '/src/assets/creative/reef-asia-kitchens/reef_hero.jpeg',
        ],
      },
      chapter03: {
        headline: 'Grounded in authentic operational reality.',
        artDirectionOverview:
          'Editorial framing designed to showcase high-efficiency culinary spaces with natural warmth and documentary dignity.',
        techniques: [
          {
            title: 'High-Key Architectural Cleanliness',
            description: 'Crisp, bright lighting emphasizing spotless hygiene and surgical station layout.',
          },
          {
            title: 'Dynamic Foreground Framing',
            description: 'Using kitchen pass windows and preparation surfaces to create depth and motion.',
          },
        ],
        palette: [
          { name: 'Warm Terracotta', hex: '#D97706', role: 'Culinary Passion' },
          { name: 'Brushed Steel', hex: '#E5E7EB', role: 'Commercial Standard' },
          { name: 'Charcoal Dark', hex: '#1F2937', role: 'Contrast Ground' },
        ],
        typographyNotes:
          'Clean geometric sans-serif supporting bilingual English and Arabic operational terminology.',
      },
      chapter04: {
        headline: 'Campaign Framework & Deliverable Architecture',
        overview:
          'Structured deliverable slots prepared for high-resolution project asset integration.',
        executions: [
          {
            id: 'reef-ex-01',
            title: 'Reef Asia Kitchens Brand Key Visual',
            category: 'Campaign Showcase',
            aspectRatio: '16/9',
            primaryImage: '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
            candidateImages: [
              '/src/assets/images/reef_asia_kitchens_1790649728448.jpg',
              '/src/assets/creative/reef-asia-kitchens/reef_hero.jpeg',
            ],
            caption: 'Initial campaign direction for Reef Asia Kitchens commercial ecosystem.',
          },
        ],
      },
      chapter05: {
        headline: 'Creative Strategy & Concept Framework',
        summary:
          'Formulated the commercial narrative and campaign direction for Reef Asia Kitchens, awaiting original production photo delivery.',
        responsibilities: [
          'Creative Direction',
          'Campaign Concepts',
          'B2B Hospitality Strategy',
        ],
        creativeApproachStatement:
          'This project demonstrates an agile strategic foundation: establishing the conceptual framework while allowing authentic client assets to dictate the final photographic art direction.',
      },
    },
  },
  {
    id: 'saudi-national-day-96',
    slug: 'saudi-national-day-96',
    number: '04',
    title: 'SAUDI NATIONAL DAY 96',
    titleArabic: 'اليوم الوطني السعودي 96',
    brand: 'Multi-Brand Creative Collection',
    industry: 'Cultural & National Occasion',
    market: 'Saudi Arabia',
    year: '2026',
    discipline: 'Creative Direction & Campaign Concepts',
    shortDescription:
      'Four distinctive brands. Four deliberate creative concepts. Exploring how one historic national occasion inspires diverse art direction across specialty coffee, cinematography, and family spaces.',
    heroImage: '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
    heroImageCandidates: [
      '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
      '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
      '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
      '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
      '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
      '/src/assets/images/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
    ],
    accentColor: '#174A37',
    isCollection: true,
    subProjects: ['the-room-snd96', 'ae-creative-snd96', 'ratio-snd96', 'bearu-snd96'],
  },
];

/* ========================================================================= */
/* THE 4 INDIVIDUAL SAUDI NATIONAL DAY 96 PROJECT CASE STUDIES               */
/* ========================================================================= */

export const THE_ROOM_CASE_STUDY: CreativeChapterData = {
  chapter00: {
    projectName: 'THE ROOM ESPRESSO BAR',
    parentCollection: 'SAUDI NATIONAL DAY 96',
    tagline: 'Poured for a Brighter Tomorrow.',
    taglineArabic: 'من هنا، نحتفل · نكهة تحتفي بالوطن',
    industry: 'Specialty Coffee / Hospitality',
    market: 'Saudi Arabia',
    year: '2026',
    projectStatus: 'Campaign Concept 2026',
    role: 'Creative Director & Art Director',
    disciplines: ['Campaign Concept', 'Art Direction', 'Visual Storytelling', 'Graphic Design'],
    introduction:
      'The Room Espresso Bar approaches Saudi National Day 96 with surgical graphic restraint. Rather than wrapping the brand in generic slogans, the campaign uses coffee itself—creating the numeral "96" out of espresso rings on stone—framed by the ancient mudbrick architecture of At-Turaif in Diriyah.',
    heroImage: '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
    heroImageCandidates: [
      '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
      '/src/assets/creative/saudi-national-day-96/the-room/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
      '/src/assets/images/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
      '/src/assets/creative/saudi-national-day-96/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
    ],
  },
  chapter01: {
    headline: 'Breaking free from the green-tinted clutter of holiday campaigns.',
    challengeBrief:
      'On Saudi National Day, consumer feeds are saturated with identical green washes, stock fireworks, and bombastic copy. The Room Espresso Bar, known for its European-calibrated espresso craft and refined architectural spaces, needed a campaign that felt authentically celebratory without abandoning its brand minimalism.',
    communicationObjectives: [
      'Honor Saudi National Day 96 with an unforgettable, high-concept visual hook',
      'Celebrate the brand’s signature porcelain espresso cups and crema quality',
      'Bridge historic Saudi heritage (Diriyah At-Turaif) with contemporary espresso culture',
    ],
    intendedAudience: 'Specialty coffee purists, urban tastemakers, and culturally sophisticated Saudis in Riyadh.',
    brandConstraints: [
      'Preserve The Room’s red-rimmed porcelain identity and typography',
      'Avoid overused neon greens or artificial celebratory decorations',
      'Use natural light, real stone, and heritage architectural textures',
    ],
  },
  chapter02: {
    headline: 'Numeral 96 formed by espresso rings — "من هنا، نحتفل".',
    conceptName: 'Poured for a Brighter Tomorrow',
    conceptNameArabic: 'من هنا، نحتفل — نكهة تحتفي بالوطن',
    conceptNarrative:
      'The central creative idea transforms the natural residue of the espresso experience into celebratory geometry. Two porcelain cups and their stained saucers form the iconic curves of "9" and "6" on a warm concrete surface, subtly balanced by folded Saudi green textile.',
    visualHook:
      'The circular coffee stain marks forming the digits "9" and "6" with surgical photographic symmetry, accented by palm shadows and morning sun.',
    verbalHook: 'Poured for a brighter tomorrow.',
    verbalHookArabic: 'من هنا، نحتفل',
    strategicRationale:
      'It creates an instant "double take" in social feeds: coffee lovers recognize their daily ritual elevated into a national salute.',
    featuredVisual: '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
    featuredVisualCandidates: [
      '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
      '/src/assets/creative/saudi-national-day-96/the-room/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
      '/src/assets/images/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
    ],
  },
  chapter03: {
    headline: 'Top-down geometry, architectural arches, and golden hour warmth.',
    artDirectionOverview:
      'The visual language balances stark architectural geometry with warm, tactile materials: textured limestone, mudbrick arches, polished ceramic, and soft palm frond shadows.',
    techniques: [
      {
        title: 'Top-Down Graphic Symmetrical Alignment',
        description: 'Arranging the cups, saucers, and coffee drips with millimeter precision to render the numeral 96.',
      },
      {
        title: 'Architectural Heritage Framing',
        description: 'Framing At-Turaif fortress in Diriyah through traditional Najdi mudbrick window arches.',
      },
      {
        title: 'Contrast of Textures',
        description: 'Smooth white porcelain against rough sandy plaster, unpolished stone, and deep green woven textile.',
      },
    ],
    palette: [
      { name: 'Crema Caramel', hex: '#A86838', role: 'Coffee Stains & Crema' },
      { name: 'Desert Limestone', hex: '#D2C7B6', role: 'Architectural Stone' },
      { name: 'Deep National Green', hex: '#1B3B2B', role: 'Saudi Shawl Textile' },
      { name: 'Porcelain White', hex: '#F9F8F5', role: 'Cup Ceramic Surface' },
      { name: 'Bordeaux Red', hex: '#7A1A22', role: 'The Room Brand Rim' },
    ],
    typographyNotes:
      'The Room Espresso Bar wordmark in bold black sans-serif paired with clean geometric Arabic headline font.',
  },
  chapter04: {
    headline: 'The Room National Day 96 Execution Suite',
    overview:
      'Three cohesive executions tracing the espresso ritual from graphic overhead flatlay to panoramic heritage window.',
    executions: [
      {
        id: 'the-room-ex-01',
        title: 'Overhead Numeral 96 Espresso Rings',
        titleArabic: 'تشكيل الرقم 96 بحلقات الإسبريسو',
        category: 'Flagship Key Visual',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/the-room/the_room_snd96_hero.png',
          '/src/assets/creative/saudi-national-day-96/the-room/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
          '/src/assets/images/04475F2C-1F8E-4FAA-B51A-2FC55F0E1F74.png',
        ],
        caption: 'Flat lay on grey limestone with espresso residue forming the numeral 96: "من هنا، نحتفل / Poured for a Brighter Tomorrow".',
        captionArabic: 'تصوير عمودي على الحجر الطبيعي يشكّل الرقم 96 بآثار فناجين الإسبريسو والقهوة.',
      },
      {
        id: 'the-room-ex-02',
        title: 'Trio on Diriyah Mudbrick Archway',
        titleArabic: 'ثلاثي الإسبريسو عبر قوس الدرعية التراثي',
        category: 'Architectural Key Visual',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/the-room/the_room_archway_trio.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/the-room/the_room_archway_trio.jpeg',
          '/src/assets/creative/saudi-national-day-96/the-room/IMG_0224.jpeg',
          '/src/assets/images/IMG_0224.jpeg',
        ],
        caption: 'Three cups on a stone ledge framed by a traditional arch looking out over historic At-Turaif fortress: "نكهة تحتفي بالوطن".',
        captionArabic: 'فناجين الإسبريسو المصطفة على حافة نافذة قوسية تطل على قلاع الطريف التاريخية بالدرعية.',
      },
      {
        id: 'the-room-ex-03',
        title: 'Window at Sunset with Saudi Flag',
        titleArabic: 'إطلالة المغيب مع العلم السعودي وقلاع الطين',
        category: 'Atmospheric Visual',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/the-room/the_room_window_solitude.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/the-room/the_room_window_solitude.jpeg',
          '/src/assets/creative/saudi-national-day-96/the-room/IMG_0217.jpeg',
          '/src/assets/images/IMG_0217.jpeg',
        ],
        caption: 'Single espresso on a stone table with an "ARABIA" book looking through heavy wooden doors toward a flag at golden sunset.',
        captionArabic: 'فنجان إسبريسو مع كتاب ARABIA في نافذة تطل على العلم السعودي الشامخ بين النخيل وقت الغروب.',
      },
    ],
  },
  chapter05: {
    headline: 'Creative Direction & Visual Execution',
    summary:
      'Originated the central coffee-stain numeral metaphor, defined the photographic art direction, and directed the typography and framing.',
    responsibilities: [
      'Campaign Concept & Visual Metaphor',
      'Art Direction & Framing Direction',
      'Bilingual Typographic Composition',
      'Color Grading & Material Contrast Supervision',
    ],
    creativeApproachStatement:
      'This campaign proves that high-concept minimalism can evoke deeper national pride than loud slogans by transforming the brand’s authentic medium—pure espresso—into a work of art.',
  },
};

export const AE_CREATIVE_CASE_STUDY: CreativeChapterData = {
  chapter00: {
    projectName: 'AE CREATIVE MEDIA PRODUCTION',
    parentCollection: 'SAUDI NATIONAL DAY 96',
    tagline: 'Where vision becomes impact.',
    taglineArabic: 'من الفكرة إلى أثر يُرى · نصنع المشاهد التي تبقى',
    industry: 'Media Production & Cinematography',
    market: 'Saudi Arabia',
    year: '2026',
    projectStatus: 'Campaign Concept 2026',
    role: 'Creative Director & Campaign Art Director',
    disciplines: ['Campaign Concept', 'Cinematography Direction', 'Visual Storytelling', 'Brand Campaign'],
    introduction:
      'AE Creative celebrates Saudi National Day 96 by turning the lens onto the filmmakers and storytellers documenting the Kingdom’s cultural renaissance. Combining traditional Najdi architecture with cinematic optics and the glowing Riyadh skyline.',
    heroImage: '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
    heroImageCandidates: [
      '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
      '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
      '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
    ],
  },
  chapter01: {
    headline: 'Honoring the architects of the Kingdom’s visual narrative.',
    challengeBrief:
      'As a high-end media production house in Saudi Arabia, AE Creative needed a campaign that spoke both to commercial brand clients and the broader national sentiment: demonstrating production excellence while celebrating Saudi identity.',
    communicationObjectives: [
      'Position AE Creative as the premier partner for ambitious Saudi media storytelling',
      'Visually articulate the journey: "من الفكرة إلى أثر يُرى" (From idea to visible impact)',
      'Fuse raw heritage roots (mudbrick studio) with ultra-modern cityscapes (Riyadh skyline)',
    ],
    intendedAudience: 'Marketing directors, brand CMOs, government entities, and creative producers across KSA.',
    brandConstraints: [
      'Showcase professional broadcast cinema equipment (ARRI/RED style rigs, monitors, lighting)',
      'Incorporate AE Creative’s signature purple and electric cyan brand glow',
      'Balance heritage cultural pride with bleeding-edge technical capabilities',
    ],
  },
  chapter02: {
    headline: 'From Idea to Visible Impact — The lens that captures a nation.',
    conceptName: 'Where Vision Becomes Impact',
    conceptNameArabic: 'من الفكرة إلى أثر يُرى',
    conceptNarrative:
      'The campaign highlights the transformative power of visual storytelling. Through open mudbrick portals, cinema cameras capture the glowing horizon of Riyadh, framing the national day through the viewfinder of future-focused creators.',
    visualHook:
      'The technical cinema monitor screen reflecting neon-lit Riyadh skyscrapers, wrapped in an embroidered green Saudi sash.',
    verbalHook: 'Creating impact that lasts.',
    verbalHookArabic: 'نصنع المشاهد التي تبقى',
    strategicRationale:
      'It aligns the creative company directly with Vision 2030’s cultural ambition: not merely watching the future, but actively producing its visual legacy.',
    featuredVisual: '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
    featuredVisualCandidates: [
      '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
      '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
      '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
    ],
  },
  chapter03: {
    headline: 'Cinematic twilight, glowing optics, and tactile Najdi architecture.',
    artDirectionOverview:
      'Dramatic twilight compositions featuring rich indigo skies, golden hour backlight, and illuminated cyan-purple accents against natural clay surfaces.',
    techniques: [
      {
        title: 'Deep Focus Architectural Portal Framing',
        description: 'Using triangular stepped Najdi archways to create a natural picture-in-picture window onto modern Riyadh.',
      },
      {
        title: 'Cinematic Technical Overlay & On-Screen UI',
        description: 'Subtle frame markers, timecodes (01:23:17:08), and technical metadata reinforcing authentic production credibility.',
      },
      {
        title: 'Color Grading Contrast (Warm Clay vs. Cyber Blue)',
        description: 'Juxtaposing earthy sand tones with the sharp neon blue illumination of Kingdom Centre at night.',
      },
    ],
    palette: [
      { name: 'Kingdom Blue Glow', hex: '#2563EB', role: 'City Skyline Lighting' },
      { name: 'AE Electric Purple', hex: '#7C3AED', role: 'Brand Identity Glow' },
      { name: 'Najdi Clay Sand', hex: '#C2A385', role: 'Heritage Mudbrick Arch' },
      { name: 'Twilight Indigo', hex: '#1E1B4B', role: 'Evening Sky Gradient' },
      { name: 'Saudi Green Velvet', hex: '#14532D', role: 'Embroidered National Scarf' },
    ],
    typographyNotes:
      'Contemporary bilingual typography: clean geometric Arabic typeface paired with tracked uppercase Latin subtitles.',
  },
  chapter04: {
    headline: 'AE Creative National Day 96 Production Suite',
    overview:
      'Three master key visuals capturing the director’s perspective, the cinematographer’s stance, and the camera monitor detail.',
    executions: [
      {
        id: 'ae-creative-ex-01',
        title: 'The Director’s Terrace Overlooking Riyadh',
        titleArabic: 'شرفة الإخراج المطلة على أفق الرياض الساحر',
        category: 'Hero Key Visual',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_snd96_hero.jpg',
          '/src/assets/creative/saudi-national-day-96/saudi_national_day_hero.jpg',
          '/src/assets/images/saudi_national_day_art_1790649741216.jpg',
        ],
        caption: 'Director’s chair, studio lights, and cinema camera framed by traditional mudbrick arch looking out over the Kingdom Centre skyline at dusk.',
        captionArabic: 'كرسي المخرج ومعدات التصوير في مشهد يؤطر أفق مدينة الرياض المتوهجة عبر عمارة نجدية أصيلة.',
      },
      {
        id: 'ae-creative-ex-02',
        title: 'The Cinematographer in Heritage Diriyah',
        titleArabic: 'المصور السعودي في الدرعية مع شال الوطن',
        category: 'Character Portrait',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_photographer_heritage.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_photographer_heritage.jpeg',
          '/src/assets/creative/saudi-national-day-96/ae-creative/IMG_0232.jpeg',
          '/src/assets/images/IMG_0232.jpeg',
        ],
        caption: 'Saudi cameraman in white thobe and AE tactical vest holding a telephoto lens outdoors, flanked by heritage fortresses and flags.',
        captionArabic: 'مصور سعودي بسترة الإنتاج وشال اليوم الوطني يوثق عراقة قلاع الدرعية بعدسته الاحترافية.',
      },
      {
        id: 'ae-creative-ex-03',
        title: 'Through the Viewfinder — City of Tomorrow',
        titleArabic: 'عبر شاشة الكاميرا — أفق العاصمة يتلألأ بالوطني',
        category: 'Macro Detail Visual',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_monitor_riyadh.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ae-creative/ae_creative_monitor_riyadh.jpeg',
          '/src/assets/creative/saudi-national-day-96/ae-creative/IMG_0231.jpeg',
          '/src/assets/images/IMG_0231.jpeg',
        ],
        caption: 'Close-up of broadcast monitor displaying illuminated blue towers reflecting in water, draped with embroidered national green sash.',
        captionArabic: 'لقطة مقربة لشاشة تصوير سينمائي تعرض أبراج الرياض المضاءة بنور الاحتفال وموشحة بوشاح الوطن الأخضر.',
      },
    ],
  },
  chapter05: {
    headline: 'Creative Direction & Campaign Conception',
    summary:
      'Authored the campaign thesis "From Idea to Visible Impact", engineered the set juxtaposition of ancient mudbrick with cinema rigs, and supervised lighting direction.',
    responsibilities: [
      'Campaign Theme & Narrative Architecture',
      'Art Direction, Lighting & Set Composition',
      'Technical Equipment & Wardrobe Styling',
      'Bilingual Copywriting & Brand Integration',
    ],
    creativeApproachStatement:
      'This campaign establishes AE Creative not merely as technical operators, but as visionary co-creators of Saudi Arabia’s emerging cultural identity.',
  },
};

export const RATIO_CASE_STUDY: CreativeChapterData = {
  chapter00: {
    projectName: 'RATIO SPECIALTY COFFEE',
    parentCollection: 'SAUDI NATIONAL DAY 96',
    tagline: 'Details change. And everything that distinguishes us remains.',
    taglineArabic: 'تتغير التفاصيل. ويبقى لنا كل ما يميزنا · حكايتنا مكملة',
    industry: 'Specialty Coffee / Retail',
    market: 'Saudi Arabia',
    year: '2026',
    projectStatus: 'Campaign Concept 2026',
    role: 'Creative Director & Package Design Director',
    disciplines: ['Campaign Concept', 'Packaging Design', 'Art Direction', 'Cultural Storytelling'],
    introduction:
      'Ratio celebrates Saudi National Day 96 with an expansive 9-part campaign and collector package honoring the 6 distinct provinces of the Kingdom. Exploring intergenerational connection between grandmothers’ authentic coffee rituals and contemporary specialty brewing.',
    heroImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
    heroImageCandidates: [
      '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
      '/src/assets/creative/saudi-national-day-96/ratio/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
      '/src/assets/images/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
      '/src/assets/creative/saudi-national-day-96/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
    ],
  },
  chapter01: {
    headline: 'Connecting 6 geographic territories into one communal coffee gathering.',
    challengeBrief:
      'Saudi Arabia spans vast regional cultures: from Asir’s green terraced mountains to AlUla’s red sandstone, Jeddah’s historic coastal coral architecture, and the Najd desert. Ratio sought to unite these diverse regional heritage identities under one commemorative National Day 96 coffee experience.',
    communicationObjectives: [
      'Celebrate all regions of the Kingdom (Central, Northern, Southern, Western, Eastern, North Eastern)',
      'Design a coveted 6-tumbler collector box ("من أرضنا حكايات كثيرة")',
      'Portray heartfelt intergenerational affection: elders passing the heritage cup to the new generation',
    ],
    intendedAudience: 'Saudi families, specialty coffee connoisseurs, and cultural collectors across the Kingdom.',
    brandConstraints: [
      'Respect authentic regional architectural and costume accuracy in all cup illustrations',
      'Preserve Ratio’s iconic leaf-coffee-mug monogram and olive typography',
      'Create high-touch luxury packaging worthy of an heirloom gift',
    ],
  },
  chapter02: {
    headline: 'Generational Continuity — "تتغير التفاصيل ويبقى لنا كل ما يميزنا".',
    conceptName: 'Our Story Continues',
    conceptNameArabic: 'حكايتنا مكملة — تتغير التفاصيل ويبقى لنا كل ما يميزنا',
    conceptNarrative:
      'While coffee cups, brewing techniques, and urban environments evolve, the underlying spirit of Saudi hospitality—generosity, family togetherness, and warmth—remains completely timeless.',
    visualHook:
      'The meeting of hands: a grandmother’s gold-bangled, hennaed hand clinking with a young woman’s modern coffee cup, and hands reaching together for cups on a brass tray.',
    verbalHook: 'Same roots, a brighter tomorrow.',
    verbalHookArabic: 'تتغير التفاصيل. ويبقى لنا كل ما يميزنا · من يد ليد',
    strategicRationale:
      'Coffee in Saudi Arabia is not just a caffeinated beverage; it is a sacred cultural covenant of hospitality. The campaign treats every cup as a vessel of living heritage.',
    featuredVisual: '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
    featuredVisualCandidates: [
      '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
      '/src/assets/creative/saudi-national-day-96/ratio/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
      '/src/assets/images/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
    ],
  },
  chapter03: {
    headline: 'Natural sunlight, antique brass, Sadu textiles, and regional color codes.',
    artDirectionOverview:
      'Rich, layered tabletop compositions combining warm natural desert sunlight, polished antique brass dallahs, golden date platters, and color-coded regional tumbler lids.',
    techniques: [
      {
        title: 'Bespoke Regional Color System',
        description: 'Sage green for Central, Terracotta red for Northern, Forest green for Southern, Ocean blue for Western, Sand for Eastern, and Deep brown for North Eastern.',
      },
      {
        title: 'Intimate Hand-to-Hand Emotional Focus',
        description: 'Close crop photography focusing on authentic details: gold bracelets, henna tracings, emerald rings, and steaming fresh coffee.',
      },
      {
        title: 'Architectural Number 96 Framing',
        description: 'Large sculptural cutout of "96" framing the commemorative cups in outdoor sunlight.',
      },
    ],
    palette: [
      { name: 'Central Sage', hex: '#7D8C7C', role: 'Central Province' },
      { name: 'Western Ocean Blue', hex: '#2A5D7A', role: 'Western Province / Red Sea' },
      { name: 'Northern Terracotta', hex: '#A85A48', role: 'Northern Mountains' },
      { name: 'Southern Forest', hex: '#2E5D4B', role: 'Asir Green Highlands' },
      { name: 'Eastern Sand', hex: '#CDB282', role: 'Eastern Oasis & Dunes' },
      { name: 'Dallah Brass Gold', hex: '#C59A45', role: 'Traditional Coffee Pot' },
    ],
    typographyNotes:
      'Ratio wordmark with Arabic title font rendered in warm olive green and desert beige tones.',
  },
  chapter04: {
    headline: 'The Complete Ratio 9-Asset Campaign Suite',
    overview:
      'The comprehensive campaign spans packaging design, landscape panoramas, architectural framing, and intergenerational family moments.',
    executions: [
      {
        id: 'ratio-ex-01',
        title: 'Regional Collector Gift Box & 6 Illustrated Tumblers',
        titleArabic: 'صندوق الهدايا الفاخر بستة أكواب حرارية لمناطق المملكة',
        category: 'Packaging Design',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_snd96_collector_cup.png',
          '/src/assets/creative/saudi-national-day-96/ratio/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
          '/src/assets/images/29F9D5EA-533D-40ED-A646-4C2CDE5165BD.png',
        ],
        caption: 'Luxury collector box with map of Saudi Arabia containing 6 color-coded tumblers representing the Kingdom’s diverse regions: "من أرضنا حكايات كثيرة".',
        captionArabic: 'صندوق تذكاري يضم 6 أكواب حرارية صممت خصيصاً لتحكي قصص مناطق المملكة الست في اليوم الوطني 96.',
      },
      {
        id: 'ratio-ex-02',
        title: 'Five Regional Tumblers Against Panoramic Saudi Landscapes',
        titleArabic: 'الأكواب الخمسة في بانوراما تضاريس وطبيعة المملكة',
        category: 'Landscape Panorama',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_five_regions_panorama.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_five_regions_panorama.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0081.jpeg',
          '/src/assets/images/IMG_0081.jpeg',
        ],
        caption: 'Five tumblers lined up on stone parapet with composite vistas of Diriyah, AlUla, Red Sea, and southern mountains: "مجاناً مع طلبك لأول 96 طلب".',
        captionArabic: 'الأكواب التذكارية مصطفة أمام لوحة تجمع قلاع نجد وجبال العلا وبحر الغربية ومدرجات الجنوب الخضراء.',
      },
      {
        id: 'ratio-ex-03',
        title: 'The Intergenerational Toast Diptych',
        titleArabic: 'حوار الأجيال — الجدة والفتاة بكوبين من القهوة',
        category: 'Campaign Master Visual',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_generation_toast_diptych.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_generation_toast_diptych.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0075.jpeg',
          '/src/assets/images/IMG_0075.jpeg',
        ],
        caption: 'Grandmother holding traditional finjan clinking with young woman holding modern Ratio cup: "تتغير التفاصيل. ويبقى لنا كل ما يميزنا".',
        captionArabic: 'لقطة شطرية ملهمة تبرز يد الجدة بحليها التراثي وكوبها القديم تصافح كوب الفتاة العصرية في تلاحم بهيج.',
      },
      {
        id: 'ratio-ex-04',
        title: 'Through the Sculpted 96 Frame',
        titleArabic: 'تأطير الأكواب عبر مجسم الرقم 96 الحجري',
        category: 'Sculptural Visual',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_sculpted_96_frame.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_sculpted_96_frame.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0077.jpeg',
          '/src/assets/images/IMG_0077.jpeg',
        ],
        caption: 'Large green architectural numeral 96 framing the single-wall cup and thermal tumbler: "96 لها هديتها — كوب حراري مجاناً لأول 96 طلب".',
        captionArabic: 'مجسم ضخم للرقم 96 بنقوش معمارية يؤطر كوب ريشيو الورقي والكوب الحراري تحت أشعة الشمس.',
      },
      {
        id: 'ratio-ex-05',
        title: 'Grandmother’s Finjan on Illustrated Heritage Surface',
        titleArabic: 'فنجان الجدة على مفرش المائدة المصور',
        category: 'Tabletop Art',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_grandmother_finjan.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_grandmother_finjan.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0074.jpeg',
          '/src/assets/images/IMG_0074.jpeg',
        ],
        caption: 'Henna-patterned hand holding finjan on round illustrated placemat with brass dallah and dates: "نكملها بطريقتنا".',
        captionArabic: 'يد الجدة بنقوش الحناء ترفع فنجان القهوة السعودية فوق مفرش يروي تاريخ المرأة والفروسية والتراث.',
      },
      {
        id: 'ratio-ex-06',
        title: 'From Hand to Hand — The Generational Passing',
        titleArabic: 'من يد ليد — توريث كرم الضيافة للأحفاد',
        category: 'Emotional Close-Up',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_hand_to_hand.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_hand_to_hand.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0073.jpeg',
          '/src/assets/images/IMG_0073.jpeg',
        ],
        caption: 'Grandmother passing the hot Ratio cup directly to a young child’s hand in festive dress: "من يد ليد".',
        captionArabic: 'يد الجدة الحانية تقدم فنجان القهوة ليد الطفل المرتدي للثوب التراثي في تعبير بليغ عن استمرار الهوية.',
      },
      {
        id: 'ratio-ex-07',
        title: 'Two Heritage Illustrated Cups Clinking',
        titleArabic: 'نخب الاحتفال بفنجانين منقوشين بالتراث',
        category: 'Close-Up Toast',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_two_hands_toast.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_two_hands_toast.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0072.jpeg',
          '/src/assets/images/IMG_0072.jpeg',
        ],
        caption: 'Detailed view of two illustrated cups meeting between grandmother and young woman: "تتغير التفاصيل ويبقى لنا كل ما يميزنا".',
        captionArabic: 'لقطة مقربة تؤكد على تمازج تفاصيل الفناجين المزخرفة برسوم القلاع والنخيل مع حلي الجيلين.',
      },
      {
        id: 'ratio-ex-08',
        title: 'Single Cup on Stone Ledge — "حكايتنا مكملة"',
        titleArabic: 'كوب القهوة المنفرد على حافة الحجر — حكايتنا مكملة',
        category: 'Still Life',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_cup_same_roots.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_cup_same_roots.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0071.jpeg',
          '/src/assets/images/IMG_0071.jpeg',
        ],
        caption: 'Steaming black coffee cup on carved stone parapet with palm tree shadows: "Same Roots, A Brighter Tomorrow".',
        captionArabic: 'كوب القهوة العطرية تحت ظلال سعف النخيل وأشعة الشمس الذهبية مع عبارة: حكايتنا مكملة.',
      },
      {
        id: 'ratio-ex-09',
        title: 'Family Gathering Around the Brass Coffee Tray',
        titleArabic: 'اجتماع العائلة حول صينية الدلة والفناجين',
        category: 'Overhead Group Gathering',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/ratio/ratio_overhead_family_gathering.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/ratio/ratio_overhead_family_gathering.jpeg',
          '/src/assets/creative/saudi-national-day-96/ratio/IMG_0069.jpeg',
          '/src/assets/images/IMG_0069.jpeg',
        ],
        caption: 'Four hands from three generations reaching for six cups arranged on a circular brass tray with dates and dallah: "مكانك يكملها".',
        captionArabic: 'صورة علوية بديعة تجسد اجتماع أفراد الأسرة حول صينية القهوة والتمر في ليلة اليوم الوطني.',
      },
    ],
  },
  chapter05: {
    headline: 'Packaging Architecture & Cultural Campaign Leadership',
    summary:
      'Conceptualized the 6-province packaging strategy, authored the intergenerational narrative, and supervised the complete 9-execution visual system.',
    responsibilities: [
      'Packaging Architecture & Regional Identity System',
      'Intergenerational Creative Concept & Copywriting',
      'Art Direction, Lighting & Tabletop Production',
      'Historical & Cultural Costume Accuracy Direction',
    ],
    creativeApproachStatement:
      'This campaign exemplifies how a specialty coffee brand can honor complex regional geography and generational sentiment with warmth, dignity, and commercial resonance.',
  },
};

export const BEARU_CASE_STUDY: CreativeChapterData = {
  chapter00: {
    projectName: 'BÉARU CAFÉ',
    parentCollection: 'SAUDI NATIONAL DAY 96',
    tagline: 'Café for little big moments.',
    taglineArabic: 'أماكن صغيرة تصنع ذكريات كبيرة · دام عزك يا وطن',
    industry: 'Family Hospitality & Café',
    market: 'Saudi Arabia',
    year: '2026',
    projectStatus: 'Campaign Concept 2026',
    role: 'Creative Director & Campaign Art Director',
    disciplines: ['Brand Storytelling', 'Campaign Art Direction', 'Experiential Design', 'Graphic Design'],
    introduction:
      'Béaru approaches Saudi National Day 96 through the purest source of optimism: the laughter and imagination of children. Combining cheerful bear iconography with Diriyah heritage stone, playful kite flying, and hands-on coloring activities.',
    heroImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
    heroImageCandidates: [
      '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
      '/src/assets/creative/saudi-national-day-96/bearu/679FC972-83E2-45FB-A895-96A91D19CB54.png',
      '/src/assets/images/679FC972-83E2-45FB-A895-96A91D19CB54.png',
      '/src/assets/creative/saudi-national-day-96/679FC972-83E2-45FB-A895-96A91D19CB54.png',
    ],
  },
  chapter01: {
    headline: 'Making national celebration welcoming, playful, and child-centered.',
    challengeBrief:
      'National day celebrations often cater exclusively to adults with formal speeches or late-night crowds. Béaru, as a family-centered cafe and community play sanctuary, needed an art direction that welcomes families with young children and celebrates the holiday through active play and creative self-expression.',
    communicationObjectives: [
      'Frame Saudi National Day 96 as a joyful family outdoor milestone',
      'Showcase Béaru’s custom retail merchandise (notebooks, bear-face cups, wooden toys)',
      'Celebrate cultural pride in an accessible, lighthearted, child-friendly visual language',
    ],
    intendedAudience: 'Young Saudi parents, toddlers and children, and family brunch communities in Riyadh.',
    brandConstraints: [
      'Maintain Béaru’s warm terracotta orange identity (#E85A2A) and charming bear silhouette',
      'Ensure children are portrayed naturally engaged in active play, not stiff poses',
      'Seamlessly integrate Saudi National Day green ribbons, flags, and heritage landmarks',
    ],
  },
  chapter02: {
    headline: 'Good Food, Brighter Tomorrows — "People × Play × Good Food".',
    conceptName: 'Good Food, Brighter Tomorrows',
    conceptNameArabic: 'أماكن صغيرة تصنع ذكريات كبيرة — دام عزك يا وطن',
    conceptNarrative:
      'The campaign reminds us that the Kingdom’s true future lies in the hands and dreams of its children. Flying a kite at historic Diriyah connects the ancient roots of our homeland with the boundless heights our children will reach.',
    visualHook:
      'Children running up stone steps toward ancient At-Turaif towers, flying a bespoke orange bear kite trailing green, white, and orange streamers into the open blue sky.',
    verbalHook: 'Small places, big memories.',
    verbalHookArabic: 'أماكن صغيرة تصنع ذكريات كبيرة',
    strategicRationale:
      'It creates an emotionally touching, unforgettable campaign that parents want to capture, visit, and celebrate with their loved ones.',
    featuredVisual: '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
    featuredVisualCandidates: [
      '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
      '/src/assets/creative/saudi-national-day-96/bearu/679FC972-83E2-45FB-A895-96A91D19CB54.png',
      '/src/assets/images/679FC972-83E2-45FB-A895-96A91D19CB54.png',
    ],
  },
  chapter03: {
    headline: 'Warm terracotta orange, joyful open skies, and tactile wood & paper.',
    artDirectionOverview:
      'Vibrant daylight, tactile natural textures, warm wood, and child-scale perspectives that invite exploration and discovery.',
    techniques: [
      {
        title: 'Low-Angle Child-Scale Camera Dynamics',
        description: 'Positioning the camera at knee-level to capture the momentum and excitement of children running.',
      },
      {
        title: 'Warm Terracotta & National Green Color Harmony',
        description: 'Pairing Béaru’s signature terracotta (#E85A2A) with deep Saudi flag green and natural sandy limestone.',
      },
      {
        title: 'Playful Hand-Lettered Script Messaging',
        description: 'Soft organic brush lettering ("Little Explorers Always Welcome") creating an approachable sanctuary feel.',
      },
    ],
    palette: [
      { name: 'Béaru Terracotta', hex: '#E85A2A', role: 'Primary Brand Color' },
      { name: 'Saudi Flag Green', hex: '#165B33', role: 'National Day Capes & Ribbons' },
      { name: 'Heritage Sandstone', hex: '#D7C4A5', role: 'Diriyah Fortresses' },
      { name: 'Bakery Cream', hex: '#FFF8F0', role: 'Warm Interior Walls' },
      { name: 'Forest Green Pants', hex: '#1B4D3E', role: 'Child’s Wardrobe Accent' },
    ],
    typographyNotes:
      'Clean modern serif for Béaru wordmark paired with joyful handwritten script for conversational window greetings.',
  },
  chapter04: {
    headline: 'The Béaru National Day 96 Family Suite',
    overview:
      'A 5-part storytelling journey from outdoor kite flying at Diriyah to tabletop crafts, window typography, and cafe corridor discovery.',
    executions: [
      {
        id: 'bearu-ex-01',
        title: 'Flying the Bear Kite at Ancient Diriyah',
        titleArabic: 'إطلاق طائرة الدب الورقية في سماء الدرعية التاريخية',
        category: 'Flagship Outdoor Key Visual',
        aspectRatio: '4/5',
        primaryImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/bearu/bearu_snd96_celebration.png',
          '/src/assets/creative/saudi-national-day-96/bearu/679FC972-83E2-45FB-A895-96A91D19CB54.png',
          '/src/assets/images/679FC972-83E2-45FB-A895-96A91D19CB54.png',
        ],
        caption: 'Two children in white garments running up stone stairs toward At-Turaif castle flying an orange bear kite with Saudi green cape: "Good Food, Brighter Tomorrows".',
        captionArabic: 'الأطفال يركضون نحو قلاع الدرعية رافعين طائرة بيارو الورقية مع وشاح اليوم الوطني في سماء ساطعة.',
      },
      {
        id: 'bearu-ex-02',
        title: 'Tabletop Stationery Suite & Bear Cup',
        titleArabic: 'طقم القرطاسية البرتقالي وكوب القهوة التذكاري',
        category: 'Merchandise & Packaging',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_tabletop_stationery.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/bearu/bearu_tabletop_stationery.jpeg',
          '/src/assets/creative/saudi-national-day-96/bearu/IMG_0089.jpeg',
          '/src/assets/images/IMG_0089.jpeg',
        ],
        caption: 'Orange notebooks, ceramic cup, and illustrated Diriyah postcard: "Same Spirit, Brighter Days".',
        captionArabic: 'دفاتر بيارو بلونها البرتقالي الجذاب مع كوب القهوة وبطاقة بريدية تجسد النخلة والعمارة التراثية.',
      },
      {
        id: 'bearu-ex-03',
        title: 'Window Lettering — Little Explorers Always Welcome',
        titleArabic: 'عبارة الترحيب على الواجهة الزجاجية لكافيه بيارو',
        category: 'Environmental Graphic',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_window_welcome.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/bearu/bearu_window_welcome.jpeg',
          '/src/assets/creative/saudi-national-day-96/bearu/IMG_0090.jpeg',
          '/src/assets/images/IMG_0090.jpeg',
        ],
        caption: 'Brush script lettering on café glass door with bear face mark welcoming little explorers.',
        captionArabic: 'حروف بيضاء انسيابية على زجاج الكافيه ترحب بالمستكشفين الصغار مع أيقونة وجه الدب اللطيف.',
      },
      {
        id: 'bearu-ex-04',
        title: 'Running Through the Bear Archway Corridor',
        titleArabic: 'مغامرة الأطفال في ممرات الكافيه وأقواس الدب الخشبية',
        category: 'Experiential Space',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_kids_arch_hallway.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/bearu/bearu_kids_arch_hallway.jpeg',
          '/src/assets/creative/saudi-national-day-96/bearu/IMG_0091.jpeg',
          '/src/assets/images/IMG_0091.jpeg',
        ],
        caption: 'Brother and sister running through custom curved hallway with bear wall cutouts: "أماكن صغيرة تصنع ذكريات كبيرة / Small Places, Big Memories".',
        captionArabic: 'الأطفال يركضون داخل الممر المعماري المقوس للكافيه مع العبارة الملهمة: أماكن صغيرة تصنع ذكريات كبيرة.',
      },
      {
        id: 'bearu-ex-05',
        title: 'Child Hands Coloring the Kingdom’s Heritage',
        titleArabic: 'أيدي الأطفال تلوّن معالم الوطن مع مجسم بيارو الخشبي',
        category: 'Activity & Craft',
        aspectRatio: '1/1',
        primaryImage: '/src/assets/creative/saudi-national-day-96/bearu/bearu_coloring_activity.jpeg',
        candidateImages: [
          '/src/assets/creative/saudi-national-day-96/bearu/bearu_coloring_activity.jpeg',
          '/src/assets/creative/saudi-national-day-96/bearu/IMG_0092.jpeg',
          '/src/assets/images/IMG_0092.jpeg',
        ],
        caption: 'Child coloring a green palm tree and mudbrick fort next to wooden Béaru toy and flag: "دام عزك يا وطن / Tiny Hands, Brighter Tomorrows".',
        captionArabic: 'أنامل طفلة تبدع في تلوين نخلة ومعالم نجدية بجانب مجسم الدب الخشبي وعلم التوحيد الأخضر.',
      },
    ],
  },
  chapter05: {
    headline: 'Creative Direction & Experiential Authorship',
    summary:
      'Conceptualized the child-centric celebration thesis, art-directed the outdoor Diriyah photoshoot, designed the retail collateral and environmental script typography.',
    responsibilities: [
      'Campaign Theme & Storytelling Concept',
      'Outdoor Photography Direction & Child Engagement',
      'Environmental Script Lettering & Packaging Art Direction',
      'Merchandise Styling & Activity Design',
    ],
    creativeApproachStatement:
      'This project proves that national celebrations gain profound emotional resonance when designed around genuine human joy, playfulness, and family memory-making.',
  },
};

export const ALL_INDIVIDUAL_CREATIVE_PROJECTS: Record<string, CreativeChapterData> = {
  'the-room-snd96': THE_ROOM_CASE_STUDY,
  'ae-creative-snd96': AE_CREATIVE_CASE_STUDY,
  'ratio-snd96': RATIO_CASE_STUDY,
  'bearu-snd96': BEARU_CASE_STUDY,
  'juraa-creative-campaign': CREATIVE_PROJECTS[0].chapters!,
  'dipdux-analytica': CREATIVE_PROJECTS[1].chapters!,
  'reef-asia-kitchens': CREATIVE_PROJECTS[2].chapters!,
};
