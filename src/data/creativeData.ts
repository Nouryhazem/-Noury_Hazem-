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
  subtitle: 'Five Brands. Five Creative Directions.',
  subtitleArabic: 'خمس علامات تجارية. خمسة مسارات إبداعية.',
  year: '2026',
  introduction:
    'A curated collection of brand-specific creative concepts developed for Saudi National Day 96. The collection explores how the same cultural milestone can be honored through five autonomous brand identities and distinct art directions: The Room, AE Creative, Ratio, Béaru, and Reef Asia Kitchens.',
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
      heroImage: '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
      heroCandidates: [
        '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
        '/assets/creative/saudi-national-day-96/the-room/room3.jpeg',
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
      heroImage: '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
      heroCandidates: [
        '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
        '/assets/creative/saudi-national-day-96/ae-creative/Ae2.jpeg',
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
      heroImage: '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
      heroCandidates: [
        '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
        '/assets/creative/saudi-national-day-96/ratio/ratio2.jpeg',
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
      heroImage: '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
      heroCandidates: [
        '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
        '/assets/creative/saudi-national-day-96/bearu/b3.jpeg',
      ],
      accentColor: '#E85A2A',
      status: 'Campaign Concept 2026',
    },
    {
      id: 'snd-reef-asia',
      slug: 'reef-asia-kitchens',
      number: '04E',
      title: 'REEF ASIA KITCHENS',
      titleArabic: 'مطابخ ريف آسيا',
      discipline: 'Commercial Hospitality & Delivery Packaging',
      concept: 'The Asian Gathering Feast · جلسة ريف في قلب مجلسك',
      description:
        'A distinctive campaign framework developed for commercial hospitality and cloud-kitchen ecosystems in the Saudi market, connecting communal feast packaging with late-night gathering culture.',
      heroImage: '/assets/creative/reef-asia-kitchens/r1.PNG',
      heroCandidates: [
        '/assets/creative/reef-asia-kitchens/r1.PNG',
        '/assets/creative/reef-asia-kitchens/r2.PNG',
      ],
      accentColor: '#D97706',
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
    heroImage: '/assets/creative/juraa/juraa_hero.png',
    heroImageCandidates: [
      '/assets/creative/juraa/juraa_hero.png',
      '/assets/images/juraa_hero.png',
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
          'JURAA was created to remove anxiety from medication routines. This creative showcase presents the authentic graphic design, mobile interface aesthetics, and visual assets developed for the companion app.',
        heroImage: '/assets/creative/juraa/juraa_hero.png',
        heroImageCandidates: [
          '/assets/creative/juraa/juraa_hero.png',
          '/assets/images/juraa_hero.png',
        ],
      },
      chapter01: {
        headline: 'Transforming clinical duty into quiet peace of mind.',
        challengeBrief:
          'Medication reminders in digital health are routinely designed like fire alarms: urgent, clinical, and stressful. For chronic patients and family caregivers, this induces alarm fatigue and anxiety rather than consistent adherence.',
        communicationObjectives: [
          'De-stigmatize daily prescription management with warm, dignified visuals',
          'Emphasize family check-in peace of mind over punitive tracking metrics',
          'Establish a distinctive calm visual language in Arabic digital spaces',
        ],
        intendedAudience:
          'Caregiver sons and daughters managing family medication routines, as well as independent adults managing chronic wellness in Egypt.',
        brandConstraints: [
          'Strict adherence to verified medical terminology without medical device claims',
          'Cairo typography system across all headline and social copy formats',
          'Palette dominated by deep teal, aqua, and soft mint rather than hospital blues',
        ],
      },
      chapter02: {
        headline: 'The Shape of Care — Geometric unity of heart and capsule.',
        conceptName: 'The Shape of Care',
        conceptNameArabic: 'شكل الرعاية — جرعتك في وقتها',
        conceptNarrative:
          'The core visual metaphor interlocks a heart with a medicinal capsule at a balanced 45-degree angle. Rather than feeling like an aggressive alert, the graphic design expresses a supportive gesture of family care.',
        visualHook:
          'The interlocking heart-capsule mark transitioning into daily routine timeline cards and calming reassurance badges.',
        verbalHook: 'Care, made part of everyday life.',
        verbalHookArabic: 'جرعتك في وقتها، بدون قلق',
        strategicRationale:
          'Healthcare adherence succeeds when framed as personal dignity and family love, not clinical failure.',
        featuredVisual: '/assets/creative/juraa/juraa_hero.png',
        featuredVisualCandidates: [
          '/assets/creative/juraa/juraa_hero.png',
          '/assets/images/juraa_hero.png',
        ],
      },
      chapter03: {
        headline: 'Deep teal foundations, aqua warmth, and Cairo typography.',
        artDirectionOverview:
          'A disciplined, calming visual system combining high-legibility Arabic typography with spacious UI layouts and tactile soft gradients.',
        techniques: [
          {
            title: '45-Degree Balanced Geometry',
            description: 'Aligning pill silhouette contours with the organic curve of a heart for immediate recognition.',
          },
          {
            title: 'Hierarchical Arabic Type Layout',
            description: 'Standardizing Cairo across Bold 700 headlines, SemiBold 600 UI labels, and Light 300 body copy.',
          },
          {
            title: 'Anti-Sterile Chromatics',
            description: 'Deep Teal (#0F6663) ground paired with Aqua Teal (#55B6AE) accents to replace cold hospital aesthetics.',
          },
        ],
        palette: [
          { name: 'Deep Teal', hex: '#0F6663', role: 'Primary Brand Ground' },
          { name: 'Aqua Teal', hex: '#55B6AE', role: 'Active Accents & Highlights' },
          { name: 'Soft Mint', hex: '#DCECEA', role: 'Support Surfaces & Badges' },
          { name: 'Dark Ink', hex: '#173635', role: 'High-Contrast Typography' },
          { name: 'Warm Cream', hex: '#F5F3EF', role: 'Background Canvas' },
        ],
        typographyNotes:
          'Cairo communication font: 700 Bold for titles, 600 SemiBold for UI elements, and 400 Regular for narrative.',
      },
      chapter04: {
        headline: 'Authentic JURAA Graphic & UI Design Showcase',
        overview:
          'The primary graphic design deliverables and authentic mobile interface cards demonstrating the visual system in practice.',
        executions: [
          {
            id: 'juraa-ex-01',
            title: 'Daily Medication Timeline UI Flow',
            titleArabic: 'جدول الجرعات اليومي والانسيابية البصرية',
            category: 'UI/UX Graphic System',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/juraa/j1.PNG',
            candidateImages: ['/assets/creative/juraa/j1.PNG'],
            caption: 'Structured dose reminder cards arranged by morning, afternoon, and evening routine blocks.',
            captionArabic: 'تصميم بطاقات الجرعات اليومية وفق فترات النهار مع تفاصيل الجرعة والوقت.',
          },
          {
            id: 'juraa-ex-02',
            title: 'Adherence Analytics & Health History',
            titleArabic: 'سجل الالتزام وإحصائيات الصحة الإيجابية',
            category: 'Data Visualization & UI',
            aspectRatio: '4/5',
            primaryImage: '/assets/creative/juraa/j2.PNG',
            candidateImages: ['/assets/creative/juraa/j2.PNG'],
            caption: 'Weekly adherence metrics and streak motivation designed with empathetic visuals and encouraging progress feedback.',
            captionArabic: 'عرض نسب الالتزام الأسبوعي وسجل الجرعات المكتملة بصرياً بأسلوب داعم ومحفز.',
          },
          {
            id: 'juraa-ex-03',
            title: 'Family Care & Caretaker Sync',
            titleArabic: 'مشاركة العائلة والتأكيدات اللحظية',
            category: 'Mobile Interaction Design',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/juraa/j4.PNG',
            candidateImages: ['/assets/creative/juraa/j4.PNG'],
            caption: 'Caretaker circle synchronization allowing family members to confirm dose completion and check in without intrusive calls.',
            captionArabic: 'مزامنة دائرة الرعاية الأسرية لتأكيد تناول الجرعات دون التسبب في قلق أو إزعاج.',
          },
        ],
      },
      chapter05: {
        headline: 'Creative Direction & Deliverables Summary',
        summary:
          'Directed the visual design system, mobile interface graphics, typography hierarchy, and brand asset execution for JURAA Digital Health.',
        responsibilities: [
          'Visual Identity System & Logo Guidelines',
          'Mobile UI Graphics & Design System',
          'Arabic Typography Calibration (Cairo)',
          'Iconography & Reassurance Color Palette',
        ],
        creativeApproachStatement:
          'This project demonstrates how thoughtful art direction can elevate medical utility into an emotionally resonant, reassuring daily companion.',
      },
    },
  },
  {
    id: 'dipdux-creative',
    slug: 'dipdux-analytica',
    number: '02',
    title: 'DIPDUX ANALYTICA',
    titleArabic: 'ديبدوكس أناليتيكا',
    brand: 'Dipdux Analytica',
    industry: 'Technology / Corporate',
    market: 'Regional / GCC & Egypt',
    discipline: 'Corporate Art Direction & Editorial Design',
    shortDescription:
      'Distilling enterprise technology and complex data intelligence into an authoritative, restrained editorial visual language with zero clichés.',
    heroImage: '/assets/images/cloudx.png',
    heroImageCandidates: [
      '/assets/images/cloudx.png',
      '/assets/creative/dipdux/IMG_7638.PNG',
      '/assets/creative/dipdux/cl1.PNG',
    ],
    accentColor: '#315BFF',
    chapters: {
      chapter00: {
        projectName: 'DIPDUX ANALYTICA',
        tagline: 'Intelligence, precisely rendered.',
        taglineArabic: 'ذكاء الأعمال بدقة واضحة',
        industry: 'Data Intelligence & Marketing Technology',
        market: 'Egypt & GCC',
        projectStatus: 'Active Agency Retainer',
        role: 'Creative Director & Editorial Designer',
        disciplines: [
          'Art Direction',
          'Brand Identity Design',
          'Editorial Systems',
          'Data Visualization',
          'Executive Decks',
        ],
        introduction:
          'At Dipdux Analytica, the creative objective is to elevate complex data and performance engineering into clean, high-precision visual artifacts that command executive respect.',
        heroImage: '/assets/images/cloudx.png',
        heroImageCandidates: [
          '/assets/images/cloudx.png',
          '/assets/creative/dipdux/IMG_7638.PNG',
          '/assets/creative/dipdux/cl1.PNG',
        ],
      },
      chapter01: {
        headline: 'Communicating computational rigor without visual noise.',
        challengeBrief:
          'Corporate analytics branding frequently lapses into either generic stock photos of servers or cluttered dashboard screenshots. Dipdux required an editorial aesthetic that feels as authoritative as a Bloomberg terminal yet elegant and modern.',
        communicationObjectives: [
          'Establish a disciplined editorial identity balancing dark ink and precision cobalt',
          'Create clear visual frameworks for presenting multi-client growth reports',
          'Express analytical rigor through rigid Swiss grid layouts and typographic hierarchy',
        ],
        intendedAudience: 'Chief Marketing Officers, Enterprise Founders, and Regional Growth Directors.',
        brandConstraints: [
          'Zero decorative fluff or cliché illustrations',
          'High legibility across executive slide decks and high-resolution print folios',
          'Consistent use of deep graphite, clean ivory, and electric cobalt accenting',
        ],
      },
      chapter02: {
        headline: 'Precision Grid Architecture — Numbers transformed into insight.',
        conceptName: 'Mathematical Elegance',
        conceptNameArabic: 'الأناقة الرياضية والدقة البصرية',
        conceptNarrative:
          'The graphic direction treats data points not as raw digits, but as structural coordinates that organize visual space, using asymmetric margins and precise hairline dividers.',
        visualHook:
          'Sharp geometric contrast: high-contrast dark graphite blocks punctuated by single-focus electric cobalt data coordinates.',
        verbalHook: 'Clarity in data. Courage in creativity.',
        verbalHookArabic: 'وضوح في الأرقام، وجرأة في الرؤية',
        strategicRationale:
          'Executive decision-makers value clarity and restraint. A disciplined layout signals operational competence.',
        featuredVisual: '/assets/creative/dipdux/IMG_7638.PNG',
        featuredVisualCandidates: [
          '/assets/creative/dipdux/IMG_7638.PNG',
          '/assets/creative/dipdux/cl1.PNG',
        ],
      },
      chapter03: {
        headline: 'Swiss editorial grid, monoline dividers, and tabular typography.',
        artDirectionOverview:
          'Rooted in Swiss international typographic style, balancing sans-serif clarity with micro-data precision and intentional negative space.',
        techniques: [
          {
            title: 'Strict Modular Column Grid',
            description: 'Building multi-tier editorial spreads where every text block, chart, and metric snaps to an 8px baseline.',
          },
          {
            title: 'Monoline Coordinate Framing',
            description: 'Fine 1px border lines and geometric bracket markers framing essential metrics.',
          },
          {
            title: 'High-Contrast Chromatic Hierarchy',
            description: 'Deep Ink (#171717) paired with Electric Cobalt (#315BFF) for laser-focused visual emphasis.',
          },
        ],
        palette: [
          { name: 'Deep Graphite', hex: '#171717', role: 'Primary Substrate & Text' },
          { name: 'Electric Cobalt', hex: '#315BFF', role: 'Key Data Points & Visual Hook' },
          { name: 'Clean Ivory', hex: '#F4F1E9', role: 'Editorial Paper Base' },
          { name: 'Cool Slate', hex: '#8C9BAE', role: 'Secondary Metadata & Coordinates' },
        ],
        typographyNotes:
          'Space Grotesk primary display paired with JetBrains Mono for data points and tabular metrics.',
      },
      chapter04: {
        headline: 'Dipdux Analytica Graphic Portfolio Suite',
        overview:
          'The primary graphic design executions and publications demonstrating the visual identity across editorial and corporate touchpoints.',
        executions: [
          {
            id: 'dipdux-ex-01',
            title: 'Data Intelligence Grid Architecture',
            titleArabic: 'هندسة الشبكات والبيانات التحليلية',
            category: 'Editorial Graphic',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/dipdux/IMG_7638.PNG',
            candidateImages: ['/assets/creative/dipdux/IMG_7638.PNG'],
            caption: 'High-contrast data grid composition showcasing the modular visual balance between headline, metrics, and negative space.',
            captionArabic: 'تكوين بصري دقيق يبرز التوازن بين الكتلة والفراغ لعرض المؤشرات التحليلية.',
          },
          {
            id: 'dipdux-ex-02',
            title: 'Kinetic Typography & Informational Flow',
            titleArabic: 'الحركة الطباعية وتدفق المعلومات',
            category: 'Brand Visual System',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/dipdux/IMG_7642.PNG',
            candidateImages: ['/assets/creative/dipdux/IMG_7642.PNG'],
            caption: 'Dynamic typographic scale framing enterprise data systems into cohesive narrative chapters.',
            captionArabic: 'توظيف الحجم والوزن الطباعي لتأطير مسارات النمو الرقمي بوضوح واحترافية.',
          },
          {
            id: 'dipdux-ex-03',
            title: 'Restrained Corporate Editorial Design',
            titleArabic: 'التصميم التحريري الرصين لمنظومة ديبدوكس',
            category: 'Identity Publication',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/dipdux/IMG_7663.PNG',
            candidateImages: ['/assets/creative/dipdux/IMG_7663.PNG'],
            caption: 'Minimalist corporate spread demonstrating typographic discipline and authoritative visual restraint.',
            captionArabic: 'تصميم تحريري رصين يعكس ثقة المؤسسة واحترافيتها العالية في إدارة المشهد.',
          },
          {
            id: 'dipdux-ex-04',
            title: 'Modular Strategic Intelligence Cards',
            titleArabic: 'بطاقات الذكاء الاستراتيجي المعيارية',
            category: 'Digital Card System',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/dipdux/IMG_7664.PNG',
            candidateImages: ['/assets/creative/dipdux/IMG_7664.PNG'],
            caption: 'Standardized card architecture developed for client executive reporting and KPI monitoring.',
            captionArabic: 'هيكل بطاقات موحد صُمم خصيصاً لتقارير الإدارة التنفيذية ومتابعة الأداء.',
          },
          {
            id: 'dipdux-ex-05',
            title: 'Executive Client Dossier & Report Layout',
            titleArabic: 'تخطيط ملفات وتقارير العملاء التنفيذية',
            category: 'Executive Report',
            aspectRatio: '1/1',
            primaryImage: '/assets/creative/dipdux/cl1.PNG',
            candidateImages: ['/assets/creative/dipdux/cl1.PNG'],
            caption: 'Finished client portfolio presentation showcasing comprehensive campaign findings and attribution models.',
            captionArabic: 'ملف العرض النهائي لتقييم الحملات ونتائج الأداء للعملاء الكبار.',
          },
        ],
      },
      chapter05: {
        headline: 'Creative Direction & Deliverables Summary',
        summary:
          'Led end-to-end graphic design, brand architecture, and publication systems for Dipdux Analytica and its portfolio accounts.',
        responsibilities: [
          'Editorial Graphic Design & Publication Systems',
          'Executive Pitch Decks & Client Reporting Templates',
          'Data Visualization Frameworks & Micro-Typography',
          'Cross-Platform Visual Brand Consistency',
        ],
        creativeApproachStatement:
          'By stripping away visual clichés and adhering to architectural grid discipline, enterprise data becomes an engaging, premium strategic artifact.',
      },
    },
  },
  {
    id: 'saudi-national-day-96-collection',
    slug: 'saudi-national-day-96',
    number: '03',
    title: 'SAUDI NATIONAL DAY 96',
    titleArabic: 'اليوم الوطني السعودي 96',
    brand: 'Multi-Brand Portfolio',
    industry: 'Cultural Celebrations',
    market: 'Kingdom of Saudi Arabia',
    year: '2026',
    discipline: 'Flagship Multi-Brand Creative Collection',
    shortDescription:
      'Five distinct brand-specific creative responses for Saudi National Day 96: The Room Espresso Bar, AE Creative Media, Ratio Specialty Coffee, Béaru Café, and Reef Asia Kitchens.',
    heroImage: '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
    heroImageCandidates: [
      '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
      '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
    ],
    accentColor: '#165B33',
    isCollection: true,
    collectionSlug: 'saudi-national-day-96',
    subProjects: [
      'the-room-snd96',
      'ae-creative-snd96',
      'ratio-snd96',
      'bearu-snd96',
      'reef-asia-kitchens',
    ],
  },
];

export const REEF_ASIA_CASE_STUDY: CreativeChapterData = {
  chapter00: {
    projectName: 'REEF ASIA KITCHENS',
    parentCollection: 'SAUDI NATIONAL DAY 96',
    tagline: 'Bridging pan-Asian street gastronomy with modern Saudi palates.',
    taglineArabic: 'رحلة النكهات التي تشاركها مع من تحب · جلسة ريف في قلب مجلسك',
    industry: 'Commercial Kitchens & Food Delivery',
    market: 'Saudi Arabia',
    year: '2026',
    projectStatus: 'Campaign Concept 2026',
    role: 'Creative Director & Campaign Art Director',
    disciplines: [
      'Packaging Design',
      'Digital Merchandising',
      'Campaign Concepts',
      'Social Media Creatives',
      'Menu Merchandising',
    ],
    introduction:
      'Reef Asia Kitchens is an independent commercial cloud-kitchen brand operating across Riyadh and Jeddah. This showcase presents the graphic design, packaging artwork, and social campaign assets created for the Saudi market.',
    heroImage: '/assets/creative/reef-asia-kitchens/r1.PNG',
    heroImageCandidates: [
      '/assets/creative/reef-asia-kitchens/r1.PNG',
      '/assets/creative/reef-asia-kitchens/r2.PNG',
    ],
  },
  chapter01: {
    headline: 'Framing Asian street food for the shared Saudi dining table.',
    challengeBrief:
      'Virtual kitchen brands lack physical storefronts, meaning 100% of brand perception and trust must be earned through digital screens and delivery packaging. In a market crowded with shawarma and burgers, Asian food required approachable cultural framing.',
    communicationObjectives: [
      'Demystify authentic Asian flavor profiles (kimchi, tom yum, szechuan) for Saudi family dinners',
      'Design fold-out communal feast packaging suited for Majlis gatherings',
      'Create high-contrast social media ads tailored to late-night delivery peak hours',
    ],
    intendedAudience: 'Saudi families, university friend groups, and late-night delivery foodies in Riyadh.',
    brandConstraints: [
      'Clear heat-level indicators calibrated to Saudi taste preferences',
      'Thermal packaging graphics that maintain appetizing appeal during transit',
      'Bold bilingual Arabic-first typography paired with English menu accents',
    ],
  },
  chapter02: {
    headline: 'The Asian Gathering Feast — "جلسة ريف".',
    conceptName: 'Jalset Reef / The Asian Gathering Feast',
    conceptNameArabic: 'جلسة ريف — نكهات آسيا في مجلسك',
    conceptNarrative:
      'Orders placed on Thursday and Friday nights in Saudi Arabia are social gathering events. The campaign pivots from individual lunch bowls to communal sharing feasts engineered for the Majlis.',
    visualHook:
      'Dynamic sizzling wok action meeting golden copper textures, vibrant spice bowls, and bold bilingual Arabic typography.',
    verbalHook: 'Bring the bustling Asian night market straight to your Majlis.',
    verbalHookArabic: 'أجواء أسواق آسيا الحية في قلب مجلسك',
    strategicRationale:
      'Elevating food delivery from a transactional meal into a festive cultural experience boosts average order value and repeat loyalty.',
    featuredVisual: '/assets/creative/reef-asia-kitchens/r1.PNG',
    featuredVisualCandidates: [
      '/assets/creative/reef-asia-kitchens/r1.PNG',
      '/assets/creative/reef-asia-kitchens/r2.PNG',
    ],
  },
  chapter03: {
    headline: 'Sizzling textures, copper tones, and high-contrast typography.',
    artDirectionOverview:
      'Warm golden hues, rich copper cookware, close-up sizzle photography, bold bilingual Arabic-first typography, and vibrant spice textures.',
    techniques: [
      {
        title: 'Culinary Sizzle & Steam Capture',
        description: 'Macro photography highlighting the texture of wok-tossed noodles, glaze drips, and fresh herbs.',
      },
      {
        title: 'Communal Unboxing Geometry',
        description: 'Designing packaging panels that unfold into an organized tabletop banquet presentation.',
      },
      {
        title: 'Late-Night Digital Contrast',
        description: 'High-saturation visuals optimized for dark phone screens during late-night Riyadh hours (11 PM - 2 AM).',
      },
    ],
    palette: [
      { name: 'Wok Ember Gold', hex: '#D97706', role: 'Primary Accent & Heat' },
      { name: 'Cast Iron Black', hex: '#1C1917', role: 'Contrast Ground' },
      { name: 'Szechuan Crimson', hex: '#DC2626', role: 'Spice Indicators & Badges' },
      { name: 'Steamed Rice Cream', hex: '#FEF3C7', role: 'Warm Text Substrate' },
    ],
    typographyNotes:
      'Heavy geometric Arabic display typography for meal titles paired with clean technical Latin descriptions.',
  },
  chapter04: {
    headline: 'Reef Asia Kitchens Graphic & Campaign Suite',
    overview:
      'The core graphic deliverables spanning delivery packaging, social media promotional visuals, and menu merchandising.',
    executions: [
      {
        id: 'reef-ex-01',
        title: 'Communal Sharing Box & Delivery Merchandise',
        titleArabic: 'صندوق المشاركة الجماعي وتغليف التوصيل',
        category: 'Packaging Design',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/reef-asia-kitchens/r1.PNG',
        candidateImages: ['/assets/creative/reef-asia-kitchens/r1.PNG'],
        caption: 'Thermal delivery packaging artwork designed with tear-away compartments and custom food illustrations.',
        captionArabic: 'تصميم علب التوصيل الحرارية بنقوش وتفاصيل بصرية مخصصة للولائم والمشاركات العائلية.',
      },
      {
        id: 'reef-ex-02',
        title: 'Bilingual Menu Architecture & Social Key Visual',
        titleArabic: 'هندسة القائمة والتصميم الترويجي ثنائي اللغة',
        category: 'Digital Merchandising',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/reef-asia-kitchens/r2.PNG',
        candidateImages: ['/assets/creative/reef-asia-kitchens/r2.PNG'],
        caption: 'Standardized delivery aggregator menu card optimized for high conversion on Jahez and Hungerstation.',
        captionArabic: 'بطاقة تسويقية لمنصات التوصيل مصممة لرفع معدلات الطلب والوضوح للمستهلك السعودي.',
      },
      {
        id: 'reef-ex-03',
        title: 'Midnight Cravings Campaign Graphic',
        titleArabic: 'حملة طلبات منتصف الليل والنكهات الحية',
        category: 'Social Media Campaign',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/reef-asia-kitchens/r3.PNG',
        candidateImages: ['/assets/creative/reef-asia-kitchens/r3.PNG'],
        caption: 'Late-night social graphic triggering geotargeted orders during peak Riyadh gathering hours.',
        captionArabic: 'ملصق إعلاني رقمي موجه لساعات المساء المتأخرة حيث يزداد الإقبال على الوجبات التشاركية.',
      },
    ],
  },
  chapter05: {
    headline: 'Creative Direction & Deliverables Summary',
    summary:
      'Delivered end-to-end creative direction, delivery packaging design, social campaign assets, and menu merchandising for Reef Asia Kitchens.',
    responsibilities: [
      'Packaging Graphic Design & Structure Art Direction',
      'Social Media Campaign Concepts (Snapchat & TikTok)',
      'Menu Merchandising for Delivery Platforms',
      'Bilingual Food Storytelling & Copy Direction',
    ],
    creativeApproachStatement:
      'In virtual cloud kitchens, graphic design and packaging are the dining room. Crafting a dignified, appetite-inducing visual language drives real commercial growth.',
  },
};

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
    heroImage: '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
    heroImageCandidates: [
      '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
      '/assets/creative/saudi-national-day-96/the-room/room3.jpeg',
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
      'It creates an instant double-take in social feeds: coffee lovers recognize their daily ritual elevated into a national salute.',
    featuredVisual: '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
    featuredVisualCandidates: [
      '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
      '/assets/creative/saudi-national-day-96/the-room/room3.jpeg',
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
      'Four cohesive executions tracing the espresso ritual from graphic overhead flatlay to panoramic heritage window.',
    executions: [
      {
        id: 'the-room-ex-01',
        title: 'Overhead Numeral 96 Espresso Rings',
        titleArabic: 'تشكيل الرقم 96 بحلقات الإسبريسو',
        category: 'Flagship Key Visual',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/the-room/room1.jpeg'],
        caption: 'Flat lay on grey limestone with espresso residue forming the numeral 96: "من هنا، نحتفل / Poured for a Brighter Tomorrow".',
        captionArabic: 'تصوير عمودي على الحجر الطبيعي يشكّل الرقم 96 بآثار فناجين الإسبريسو والقهوة.',
      },
      {
        id: 'the-room-ex-02',
        title: 'Espresso Bar Graphic Poster & Identity',
        titleArabic: 'الملصق الترويجي وهوية ذا روم المينيمالية',
        category: 'Graphic Poster Design',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/the-room/room3.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/the-room/room3.jpeg'],
        caption: 'Refined brand poster contrasting stark black and white typography with the signature bordeaux espresso rim.',
        captionArabic: 'ملصق إعلاني يبرز البساطة التحريرية والتفاصيل الراقية لفناجين القهوة ذات الإطار الخمري.',
      },
      {
        id: 'the-room-ex-03',
        title: 'Commemorative Takeaway Cup & Packaging',
        titleArabic: 'كوب القهوة التذكاري وتغليف اليوم الوطني',
        category: 'Packaging & Retail',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/the-room/room4.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/the-room/room4.jpeg'],
        caption: 'Minimalist takeaway cup artwork pairing the national green tone with modern typography and mudbrick geometry.',
        captionArabic: 'تصميم الكوب التذكاري الورقي لليوم الوطني 96 بنقوش معمارية ولمسات خضراء أنيقة.',
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
    heroImage: '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
    heroImageCandidates: [
      '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
      '/assets/creative/saudi-national-day-96/ae-creative/Ae2.jpeg',
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
    featuredVisual: '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
    featuredVisualCandidates: [
      '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
      '/assets/creative/saudi-national-day-96/ae-creative/Ae2.jpeg',
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
      'Two master key visuals capturing the director’s perspective, the cinematographer’s stance, and the camera monitor detail.',
    executions: [
      {
        id: 'ae-creative-ex-01',
        title: 'The Director’s Terrace Overlooking Riyadh',
        titleArabic: 'شرفة الإخراج المطلة على أفق الرياض الساحر',
        category: 'Hero Key Visual',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg'],
        caption: 'Director’s terrace, studio lights, and cinema camera framed by traditional mudbrick arch looking out over the illuminated Riyadh skyline at dusk.',
        captionArabic: 'كرسي المخرج ومعدات التصوير في مشهد يؤطر أفق مدينة الرياض المتوهجة عبر عمارة نجدية أصيلة.',
      },
      {
        id: 'ae-creative-ex-02',
        title: 'Where Vision Becomes Impact — Cinematic Frame',
        titleArabic: 'من الفكرة إلى أثر يُرى — المشهد السينمائي',
        category: 'Production Key Visual',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/ae-creative/Ae2.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ae-creative/Ae2.jpeg'],
        caption: 'High-end cinema optical rig capturing the spirit of Saudi cultural storytelling and creative vision.',
        captionArabic: 'عدسة سينمائية احترافية تجسد روح السرد الثقافي السعودي والرؤية الإبداعية الوطنية.',
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
      'Ratio celebrates Saudi National Day 96 with an expansive campaign and collector package honoring the 6 distinct provinces of the Kingdom. Exploring intergenerational connection between grandmothers’ authentic coffee rituals and contemporary specialty brewing.',
    heroImage: '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
    heroImageCandidates: [
      '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
      '/assets/creative/saudi-national-day-96/ratio/ratio2.jpeg',
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
    featuredVisual: '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
    featuredVisualCandidates: [
      '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
      '/assets/creative/saudi-national-day-96/ratio/ratio2.jpeg',
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
    headline: 'The Complete Ratio Campaign Gallery Suite',
    overview:
      'The comprehensive campaign spans packaging design, landscape panoramas, architectural framing, and intergenerational family moments.',
    executions: [
      {
        id: 'ratio-ex-02',
        title: 'Commemorative Ceramic Cup & Heritage Foliage',
        titleArabic: 'كوب القهوة التذكاري مع تفاصيل التراث الأصيل',
        category: 'Product & Packaging',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg'],
        caption: 'Commemorative Ratio cup with green botanical accents and commemorative National Day 96 lettering.',
        captionArabic: 'كوب ريشيو التذكاري المصمم بلمسات خضراء أنيقة وهوية اليوم الوطني السعودي.',
      },
      {
        id: 'ratio-ex-03',
        title: 'The Intergenerational Toast Diptych',
        titleArabic: 'حوار الأجيال — الجدة والفتاة بكوبين من القهوة',
        category: 'Campaign Master Visual',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio2.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio2.jpeg'],
        caption: 'Grandmother holding traditional finjan clinking with young woman holding modern Ratio cup: "تتغير التفاصيل. ويبقى لنا كل ما يميزنا".',
        captionArabic: 'لقطة شطرية ملهمة تبرز يد الجدة بحليها التراثي وكوبها القديم تصافح كوب الفتاة العصرية في تلاحم بهيج.',
      },
      {
        id: 'ratio-ex-04',
        title: 'Regional Province Cup Illustrations',
        titleArabic: 'رسومات ورسائل الأقاليم الستة للمملكة',
        category: 'Regional Typography',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio5.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio5.jpeg'],
        caption: 'Detailed cultural illustration featuring iconic landmarks from across Saudi Arabia: Diriyah, AlUla, and Asir.',
        captionArabic: 'رسومات معمارية بديعة توثق معالم مناطق المملكة على غلاف الكوب التذكاري.',
      },
      {
        id: 'ratio-ex-05',
        title: 'Specialty Coffee Retail Packaging Box',
        titleArabic: 'صندوق حبوب القهوة المختصة مع الختم الأخضر',
        category: 'Retail Box Packaging',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio6.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio6.jpeg'],
        caption: 'Specialty whole bean coffee gift box adorned with celebratory green foil stamp and bilingual tasting notes.',
        captionArabic: 'صندوق البن الفاخر المزين بالختم الأخضر لليوم الوطني وتفاصيل الإيحاءات.',
      },
      {
        id: 'ratio-ex-06',
        title: 'Commemorative Broadside & Regional Narrative',
        titleArabic: 'الملصق الترويجي العريض للقصة الوطنية',
        category: 'Broadside Poster',
        aspectRatio: '4/3',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio7.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio7.jpeg'],
        caption: 'Wide-format campaign poster highlighting the geographic breadth of the Kingdom under one shared celebration.',
        captionArabic: 'لوحة إعلانية واسعة تسرد حكاية المناطق الست واجتماعها حول فنجان القهوة السعودية.',
      },
      {
        id: 'ratio-ex-07',
        title: 'Retail Store Counter Display & Merchandising',
        titleArabic: 'عرض التجزئة في فروع ريشيو',
        category: 'Retail Architecture',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio8.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio8.jpeg'],
        caption: 'In-store point of sale merchandising for the limited edition 96 collection tumblers.',
        captionArabic: 'منصة العرض الترويجي داخل مقاهي ريشيو للمنتجات التذكارية لليوم الوطني.',
      },
      {
        id: 'ratio-ex-08',
        title: 'Social Feed Visual Hook & Kinetic Layout',
        titleArabic: 'التصميم الرقمي لمنصات التواصل الاجتماعي',
        category: 'Social Media Graphic',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio9.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio9.jpeg'],
        caption: 'Mobile-first social asset highlighting the limited-edition tumbler offer for the first 96 customers.',
        captionArabic: 'تصميم رقمي للهواتف الذكية يبرز العرض الخاص بأول 96 طلباً لليوم الوطني.',
      },
      {
        id: 'ratio-ex-09',
        title: 'Collector Box Unboxing Experience',
        titleArabic: 'تجربة فتح صندوق المجموعة التذكارية',
        category: 'Unboxing Collateral',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/ratio/ratio10.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/ratio/ratio10.jpeg'],
        caption: 'Unboxing view showing the 6 color-coded tumblers nestled in protective foam with commemorative certificate.',
        captionArabic: 'صورة توضح تجربة فتح الصندوق الفاخر والأكواب الستة بألوانها الإقليمية المتقنة.',
      },
    ],
  },
  chapter05: {
    headline: 'Packaging Architecture & Cultural Campaign Leadership',
    summary:
      'Conceptualized the 6-province packaging strategy, authored the intergenerational narrative, and supervised the complete visual system.',
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
    heroImage: '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
    heroImageCandidates: [
      '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
      '/assets/images/679FC972-83E2-45FB-A895-96A91D19CB54.png',
      '/assets/creative/saudi-national-day-96/bearu/b3.jpeg',
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
    featuredVisual: '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
    featuredVisualCandidates: [
      '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
      '/assets/creative/saudi-national-day-96/bearu/b3.jpeg',
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
      { name: 'Forest Green Accent', hex: '#1B4D3E', role: 'Child’s Wardrobe Accent' },
    ],
    typographyNotes:
      'Clean modern serif for Béaru wordmark paired with joyful handwritten script for conversational window greetings.',
  },
  chapter04: {
    headline: 'The Béaru National Day 96 Family Suite',
    overview:
      'A 5-part storytelling journey from outdoor kite flying at Diriyah to tabletop crafts, window typography, and bakery moments.',
    executions: [
      {
        id: 'bearu-ex-01',
        title: 'Flying the Bear Kite at Ancient Diriyah',
        titleArabic: 'إطلاق طائرة الدب الورقية في سماء الدرعية التاريخية',
        category: 'Flagship Outdoor Key Visual',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/bearu/b.jpeg'],
        caption: 'Two children in white garments running up stone stairs toward At-Turaif castle flying an orange bear kite with Saudi green cape: "Good Food, Brighter Tomorrows".',
        captionArabic: 'الأطفال يركضون نحو قلاع الدرعية رافعين طائرة بيارو الورقية مع وشاح اليوم الوطني في سماء ساطعة.',
      },
      {
        id: 'bearu-ex-02',
        title: 'Tabletop Stationery Suite & Bear Cup',
        titleArabic: 'طقم القرطاسية البرتقالي وكوب القهوة التذكاري',
        category: 'Merchandise & Packaging',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/bearu/b3.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/bearu/b3.jpeg'],
        caption: 'Orange notebooks, ceramic cup, and illustrated Diriyah postcard: "Same Spirit, Brighter Days".',
        captionArabic: 'دفاتر بيارو بلونها البرتقالي الجذاب مع كوب القهوة وبطاقة بريدية تجسد النخلة والعمارة التراثية.',
      },
      {
        id: 'bearu-ex-03',
        title: 'Window Lettering — Little Explorers Welcome',
        titleArabic: 'عبارة الترحيب على الواجهة الزجاجية لكافيه بيارو',
        category: 'Environmental Graphic',
        aspectRatio: '1/1',
        primaryImage: '/assets/creative/saudi-national-day-96/bearu/b4.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/bearu/b4.jpeg'],
        caption: 'Brush script lettering on café glass door with bear face mark welcoming little explorers.',
        captionArabic: 'حروف بيضاء انسيابية على زجاج الكافيه ترحب بالمستكشفين الصغار مع أيقونة وجه الدب اللطيف.',
      },
      {
        id: 'bearu-ex-04',
        title: 'Child Hands Coloring the Kingdom’s Heritage',
        titleArabic: 'أيدي الأطفال تلوّن معالم الوطن مع مجسم بيارو الخشبي',
        category: 'Activity & Craft',
        aspectRatio: '4/5',
        primaryImage: '/assets/creative/saudi-national-day-96/bearu/b5.jpeg',
        candidateImages: ['/assets/creative/saudi-national-day-96/bearu/b5.jpeg'],
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
  'reef-asia-kitchens': REEF_ASIA_CASE_STUDY,
  'reef-asia-snd96': REEF_ASIA_CASE_STUDY,
  'juraa-creative-campaign': CREATIVE_PROJECTS[0].chapters!,
  'dipdux-analytica': CREATIVE_PROJECTS[1].chapters!,
};

export interface CreativeSlide {
  id: string;
  image: string;
  title: string;
  titleArabic?: string;
  category?: string;
  caption?: string;
  captionArabic?: string;
  aspectRatio?: '1/1' | '4/5' | '16/9' | '9/16' | '4/3';
}

export function getProjectSlides(slug: string, data?: CreativeChapterData): CreativeSlide[] {
  if (slug === 'juraa-creative-campaign' || slug === 'juraa-creative' || slug === 'juraa') {
    return [
      {
        id: 'juraa-slide-01',
        image: '/assets/creative/juraa/j1.PNG',
        title: 'Daily Medication Timeline UI Flow',
        titleArabic: 'جدول الجرعات اليومي والانسيابية البصرية',
        category: 'UI/UX Graphic System',
        caption: 'Structured dose reminder cards arranged by morning, afternoon, and evening routine blocks.',
        captionArabic: 'تصميم بطاقات الجرعات اليومية وفق فترات النهار مع تفاصيل الجرعة والوقت.',
        aspectRatio: '1/1',
      },
      {
        id: 'juraa-slide-02',
        image: '/assets/creative/juraa/j2.PNG',
        title: 'Adherence Analytics & Health History',
        titleArabic: 'سجل الالتزام وإحصائيات الصحة الإيجابية',
        category: 'Data Visualization & UI',
        caption: 'Weekly adherence metrics and streak motivation designed with empathetic visuals and encouraging progress feedback.',
        captionArabic: 'عرض نسب الالتزام الأسبوعي وسجل الجرعات المكتملة بصرياً بأسلوب داعم ومحفز.',
        aspectRatio: '4/5',
      },
      {
        id: 'juraa-slide-03',
        image: '/assets/creative/juraa/j4.PNG',
        title: 'Family Care & Caretaker Sync',
        titleArabic: 'مشاركة العائلة والتأكيدات اللحظية',
        category: 'Mobile Interaction Design',
        caption: 'Caretaker circle synchronization allowing family members to confirm dose completion and check in without intrusive calls.',
        captionArabic: 'مزامنة دائرة الرعاية الأسرية لتأكيد تناول الجرعات دون التسبب في قلق أو إزعاج.',
        aspectRatio: '1/1',
      },
    ];
  }

  if (slug === 'dipdux-analytica' || slug === 'dipdux-creative') {
    return [
      {
        id: 'dipdux-slide-01',
        image: '/assets/creative/dipdux/IMG_7638.PNG',
        title: 'Data Intelligence Grid Architecture',
        titleArabic: 'هندسة الشبكات والبيانات التحليلية',
        category: 'Editorial Graphic',
        caption: 'High-contrast data grid composition showcasing the modular visual balance between headline, metrics, and negative space.',
        captionArabic: 'تكوين بصري دقيق يبرز التوازن بين الكتلة والفراغ لعرض المؤشرات التحليلية.',
        aspectRatio: '1/1',
      },
      {
        id: 'dipdux-slide-02',
        image: '/assets/creative/dipdux/IMG_7642.PNG',
        title: 'Kinetic Typography & Informational Flow',
        titleArabic: 'الحركة الطباعية وتدفق المعلومات',
        category: 'Brand Visual System',
        caption: 'Dynamic typographic scale framing enterprise data systems into cohesive narrative chapters.',
        captionArabic: 'توظيف الحجم والوزن الطباعي لتأطير مسارات النمو الرقمي بوضوح واحترافية.',
        aspectRatio: '1/1',
      },
      {
        id: 'dipdux-slide-03',
        image: '/assets/creative/dipdux/IMG_7663.PNG',
        title: 'Restrained Corporate Editorial Design',
        titleArabic: 'التصميم التحريري الرصين لمنظومة ديبدوكس',
        category: 'Identity Publication',
        caption: 'Minimalist corporate spread demonstrating typographic discipline and authoritative visual restraint.',
        captionArabic: 'تصميم تحريري رصين يعكس ثقة المؤسسة واحترافيتها العالية في إدارة المشهد.',
        aspectRatio: '1/1',
      },
      {
        id: 'dipdux-slide-04',
        image: '/assets/creative/dipdux/IMG_7664.PNG',
        title: 'Modular Strategic Intelligence Cards',
        titleArabic: 'بطاقات الذكاء الاستراتيجي المعيارية',
        category: 'Digital Card System',
        caption: 'Standardized card architecture developed for client executive reporting and KPI monitoring.',
        captionArabic: 'هيكل بطاقات موحد صُمم خصيصاً لتقارير الإدارة التنفيذية ومتابعة الأداء.',
        aspectRatio: '1/1',
      },
      {
        id: 'dipdux-slide-05',
        image: '/assets/creative/dipdux/cl1.PNG',
        title: 'Executive Client Dossier & Report Layout',
        titleArabic: 'تخطيط ملفات وتقارير العملاء التنفيذية',
        category: 'Executive Report',
        caption: 'Finished client portfolio presentation showcasing comprehensive campaign findings and attribution models.',
        captionArabic: 'ملف العرض النهائي لتقييم الحملات ونتائج الأداء للعملاء الكبار.',
        aspectRatio: '1/1',
      },
    ];
  }

  if (slug === 'the-room-snd96' || slug === 'snd-the-room') {
    return [
      {
        id: 'the-room-slide-01',
        image: '/assets/creative/saudi-national-day-96/the-room/room1.jpeg',
        title: 'Overhead Numeral 96 Espresso Rings',
        titleArabic: 'تشكيل الرقم 96 بحلقات الإسبريسو',
        category: 'Flagship Key Visual',
        caption: 'Flat lay on grey limestone with espresso residue forming the numeral 96: "من هنا، نحتفل / Poured for a Brighter Tomorrow".',
        captionArabic: 'تصوير عمودي على الحجر الطبيعي يشكّل الرقم 96 بآثار فناجين الإسبريسو والقهوة.',
        aspectRatio: '4/5',
      },
      {
        id: 'the-room-slide-02',
        image: '/assets/creative/saudi-national-day-96/the-room/room3.jpeg',
        title: 'Espresso Bar Graphic Poster & Identity',
        titleArabic: 'الملصق الترويجي وهوية ذا روم المينيمالية',
        category: 'Graphic Poster Design',
        caption: 'Refined brand poster contrasting stark black and white typography with the signature bordeaux espresso rim.',
        captionArabic: 'ملصق إعلاني يبرز البساطة التحريرية والتفاصيل الراقية لفناجين القهوة ذات الإطار الخمري.',
        aspectRatio: '1/1',
      },
      {
        id: 'the-room-slide-03',
        image: '/assets/creative/saudi-national-day-96/the-room/room4.jpeg',
        title: 'Commemorative Takeaway Cup & Packaging',
        titleArabic: 'كوب القهوة التذكاري وتغليف اليوم الوطني',
        category: 'Packaging & Retail',
        caption: 'Minimalist takeaway cup artwork pairing the national green tone with modern typography and mudbrick geometry.',
        captionArabic: 'تصميم الكوب التذكاري الورقي لليوم الوطني 96 بنقوش معمارية ولمسات خضراء أنيقة.',
        aspectRatio: '1/1',
      },
    ];
  }

  if (slug === 'ae-creative-snd96' || slug === 'snd-ae-creative') {
    return [
      {
        id: 'ae-creative-slide-01',
        image: '/assets/creative/saudi-national-day-96/ae-creative/AE1.jpeg',
        title: 'The Director’s Terrace Overlooking Riyadh',
        titleArabic: 'شرفة الإخراج المطلة على أفق الرياض الساحر',
        category: 'Hero Key Visual',
        caption: 'Director’s terrace, studio lights, and cinema camera framed by traditional mudbrick arch looking out over the illuminated Riyadh skyline at dusk.',
        captionArabic: 'كرسي المخرج ومعدات التصوير في مشهد يؤطر أفق مدينة الرياض المتوهجة عبر عمارة نجدية أصيلة.',
        aspectRatio: '1/1',
      },
      {
        id: 'ae-creative-slide-02',
        image: '/assets/creative/saudi-national-day-96/ae-creative/Ae2.jpeg',
        title: 'Where Vision Becomes Impact — Cinematic Frame',
        titleArabic: 'من الفكرة إلى أثر يُرى — المشهد السينمائي',
        category: 'Production Key Visual',
        caption: 'High-end cinema optical rig capturing the spirit of Saudi cultural storytelling and creative vision.',
        captionArabic: 'عدسة سينمائية احترافية تجسد روح السرد الثقافي السعودي والرؤية الإبداعية الوطنية.',
        aspectRatio: '1/1',
      },
    ];
  }

  if (slug === 'ratio-snd96' || slug === 'snd-ratio') {
    return [
      {
        id: 'ratio-slide-01',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio1.jpeg',
        title: 'Commemorative Ceramic Cup & Heritage Details',
        titleArabic: 'كوب القهوة التذكاري مع تفاصيل التراث الأصيل',
        category: 'Product & Packaging',
        caption: 'Commemorative Ratio cup with green botanical accents and commemorative National Day 96 lettering.',
        captionArabic: 'كوب ريشيو التذكاري المصمم بلمسات خضراء أنيقة وهوية اليوم الوطني السعودي.',
        aspectRatio: '4/5',
      },
      {
        id: 'ratio-slide-02',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio2.jpeg',
        title: 'The Intergenerational Toast Diptych',
        titleArabic: 'حوار الأجيال — الجدة والفتاة بكوبين من القهوة',
        category: 'Campaign Master Visual',
        caption: 'Grandmother holding traditional finjan clinking with young woman holding modern Ratio cup: "تتغير التفاصيل. ويبقى لنا كل ما يميزنا".',
        captionArabic: 'لقطة شطرية ملهمة تبرز يد الجدة بحليها التراثي وكوبها القديم تصافح كوب الفتاة العصرية في تلاحم بهيج.',
        aspectRatio: '4/5',
      },
      {
        id: 'ratio-slide-03',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio5.jpeg',
        title: 'Regional Province Cup Illustrations',
        titleArabic: 'رسومات ورسائل الأقاليم الستة للمملكة',
        category: 'Regional Typography',
        caption: 'Detailed cultural illustration featuring iconic landmarks from across Saudi Arabia: Diriyah, AlUla, and Asir.',
        captionArabic: 'رسومات معمارية بديعة توثق معالم مناطق المملكة على غلاف الكوب التذكاري.',
        aspectRatio: '4/5',
      },
      {
        id: 'ratio-slide-04',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio6.jpeg',
        title: 'Specialty Coffee Retail Packaging Box',
        titleArabic: 'صندوق حبوب القهوة المختصة مع الختم الأخضر',
        category: 'Retail Box Packaging',
        caption: 'Specialty whole bean coffee gift box adorned with celebratory green foil stamp and bilingual tasting notes.',
        captionArabic: 'صندوق البن الفاخر المزين بالختم الأخضر لليوم الوطني وتفاصيل الإيحاءات.',
        aspectRatio: '4/5',
      },
      {
        id: 'ratio-slide-05',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio7.jpeg',
        title: 'Commemorative Broadside & Regional Narrative',
        titleArabic: 'الملصق الترويجي العريض للقصة الوطنية',
        category: 'Broadside Poster',
        caption: 'Wide-format campaign poster highlighting the geographic breadth of the Kingdom under one shared celebration.',
        captionArabic: 'لوحة إعلانية واسعة تسرد حكاية المناطق الست واجتماعها حول فنجان القهوة السعودية.',
        aspectRatio: '4/3',
      },
      {
        id: 'ratio-slide-06',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio8.jpeg',
        title: 'Retail Store Counter Display & Merchandising',
        titleArabic: 'عرض التجزئة في فروع ريشيو',
        category: 'Retail Architecture',
        caption: 'In-store point of sale merchandising for the limited edition 96 collection tumblers.',
        captionArabic: 'منصة العرض الترويجي داخل مقاهي ريشيو للمنتجات التذكارية لليوم الوطني.',
        aspectRatio: '4/5',
      },
      {
        id: 'ratio-slide-07',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio9.jpeg',
        title: 'Social Feed Visual Hook & Kinetic Layout',
        titleArabic: 'التصميم الرقمي لمنصات التواصل الاجتماعي',
        category: 'Social Media Graphic',
        caption: 'Mobile-first social asset highlighting the limited-edition tumbler offer for the first 96 customers.',
        captionArabic: 'تصميم رقمي للهواتف الذكية يبرز العرض الخاص بأول 96 طلباً لليوم الوطني.',
        aspectRatio: '4/5',
      },
      {
        id: 'ratio-slide-08',
        image: '/assets/creative/saudi-national-day-96/ratio/ratio10.jpeg',
        title: 'Collector Box Unboxing Experience',
        titleArabic: 'تجربة فتح صندوق المجموعة التذكارية',
        category: 'Unboxing Collateral',
        caption: 'Unboxing view showing the 6 color-coded tumblers nestled in protective foam with commemorative certificate.',
        captionArabic: 'صورة توضح تجربة فتح الصندوق الفاخر والأكواب الستة بألوانها الإقليمية المتقنة.',
        aspectRatio: '4/5',
      },
    ];
  }

  if (slug === 'bearu-snd96' || slug === 'snd-bearu') {
    return [
      {
        id: 'bearu-slide-01',
        image: '/assets/creative/saudi-national-day-96/bearu/b.jpeg',
        title: 'Flying the Bear Kite at Ancient Diriyah',
        titleArabic: 'إطلاق طائرة الدب الورقية في سماء الدرعية التاريخية',
        category: 'Flagship Outdoor Key Visual',
        caption: 'Two children in white garments running up stone stairs toward At-Turaif castle flying an orange bear kite with Saudi green cape: "Good Food, Brighter Tomorrows".',
        captionArabic: 'الأطفال يركضون نحو قلاع الدرعية رافعين طائرة بيارو الورقية مع وشاح اليوم الوطني في سماء ساطعة.',
        aspectRatio: '1/1',
      },
      {
        id: 'bearu-slide-02',
        image: '/assets/creative/saudi-national-day-96/bearu/b3.jpeg',
        title: 'Tabletop Stationery Suite & Bear Cup',
        titleArabic: 'طقم القرطاسية البرتقالي وكوب القهوة التذكاري',
        category: 'Merchandise & Packaging',
        caption: 'Orange notebooks, ceramic cup, and illustrated Diriyah postcard: "Same Spirit, Brighter Days".',
        captionArabic: 'دفاتر بيارو بلونها البرتقالي الجذاب مع كوب القهوة وبطاقة بريدية تجسد النخلة والعمارة التراثية.',
        aspectRatio: '1/1',
      },
      {
        id: 'bearu-slide-03',
        image: '/assets/creative/saudi-national-day-96/bearu/b4.jpeg',
        title: 'Window Lettering — Little Explorers Welcome',
        titleArabic: 'عبارة الترحيب على الواجهة الزجاجية لكافيه بيارو',
        category: 'Environmental Graphic',
        caption: 'Brush script lettering on café glass door with bear face mark welcoming little explorers.',
        captionArabic: 'حروف بيضاء انسيابية على زجاج الكافيه ترحب بالمستكشفين الصغار مع أيقونة وجه الدب اللطيف.',
        aspectRatio: '1/1',
      },
      {
        id: 'bearu-slide-04',
        image: '/assets/creative/saudi-national-day-96/bearu/b5.jpeg',
        title: 'Child Hands Coloring the Kingdom’s Heritage',
        titleArabic: 'أيدي الأطفال تلوّن معالم الوطن مع مجسم بيارو الخشبي',
        category: 'Activity & Craft',
        caption: 'Child coloring a green palm tree and mudbrick fort next to wooden Béaru toy and flag: "دام عزك يا وطن / Tiny Hands, Brighter Tomorrows".',
        captionArabic: 'أنامل طفلة تبدع في تلوين نخلة ومعالم نجدية بجانب مجسم الدب الخشبي وعلم التوحيد الأخضر.',
        aspectRatio: '4/5',
      },
    ];
  }

  if (
    slug === 'reef-asia-kitchens' ||
    slug === 'reef-asia-creative' ||
    slug === 'snd-reef-asia' ||
    slug === 'reef-asia-snd96'
  ) {
    return [
      {
        id: 'reef-slide-01',
        image: '/assets/creative/reef-asia-kitchens/r1.PNG',
        title: 'Communal Sharing Box & Delivery Merchandise',
        titleArabic: 'صندوق المشاركة الجماعي وتغليف التوصيل',
        category: 'Packaging Design',
        caption: 'Thermal delivery packaging artwork designed with tear-away compartments and custom food illustrations.',
        captionArabic: 'تصميم علب التوصيل الحرارية بنقوش وتفاصيل بصرية مخصصة للولائم والمشاركات العائلية.',
        aspectRatio: '1/1',
      },
      {
        id: 'reef-slide-02',
        image: '/assets/creative/reef-asia-kitchens/r2.PNG',
        title: 'Bilingual Menu Architecture & Social Key Visual',
        titleArabic: 'هندسة القائمة والتصميم الترويجي ثنائي اللغة',
        category: 'Digital Merchandising',
        caption: 'Standardized delivery aggregator menu card optimized for high conversion on Jahez and Hungerstation.',
        captionArabic: 'بطاقة تسويقية لمنصات التوصيل مصممة لرفع معدلات الطلب والوضوح للمستهلك السعودي.',
        aspectRatio: '1/1',
      },
      {
        id: 'reef-slide-03',
        image: '/assets/creative/reef-asia-kitchens/r3.PNG',
        title: 'Midnight Cravings Campaign Graphic',
        titleArabic: 'حملة طلبات منتصف الليل والنكهات الحية',
        category: 'Social Media Campaign',
        caption: 'Late-night social graphic triggering geotargeted orders during peak Riyadh gathering hours.',
        captionArabic: 'ملصق إعلاني رقمي موجه لساعات المساء المتأخرة حيث يزداد الإقبال على الوجبات التشاركية.',
        aspectRatio: '1/1',
      },
    ];
  }

  if (data?.chapter04?.executions && data.chapter04.executions.length > 0) {
    return data.chapter04.executions.map((ex, idx) => ({
      id: ex.id || `slide-${idx}`,
      image: ex.primaryImage,
      title: ex.title,
      titleArabic: ex.titleArabic,
      category: ex.category,
      caption: ex.caption,
      captionArabic: ex.captionArabic,
      aspectRatio: ex.aspectRatio,
    }));
  }

  return [];
}
