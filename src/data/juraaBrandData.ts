export interface JuraaBrandData {
  meta: {
    projectName: string;
    category: string;
    discipline: string;
    industry: string;
    market: string;
    role: string;
    projectDisciplines: string[];
    mainStatement: string;
    supportingStatement: string;
    brandIdeaArabic: string;
    brandIdeaEnglish: string;
    territory: string;
    heroImage: string;
    logoImage?: string;
    status: string;
  };
  foundation: {
    sectionLabel: string;
    headline: string;
    body: string[];
    brandValues: {
      num: string;
      title: string;
      englishConcept: string;
      desc: string;
    }[];
    brandLineArabic: string;
    brandLineEnglish: string;
    promiseSummary: string;
  };
  logoArchitecture: {
    sectionLabel: string;
    headline: string;
    body: string[];
    symbolConcept: {
      heart: string;
      capsule: string;
      synthesis: string;
    };
    configurations: {
      id: string;
      num: string;
      title: string;
      subtitle: string;
      usage: string;
      description: string;
      variant: 'primary' | 'secondary' | 'reversed' | 'horizontal' | 'symbol' | 'icon';
      bgColor: string;
      textColor: string;
    }[];
  };
  visualLanguage: {
    sectionLabel: string;
    headline: string;
    body: string[];
    colors: {
      name: string;
      hex: string;
      role: string;
      allocation: string;
      textColor: string;
      border?: string;
    }[];
    typography: {
      family: string;
      role: string;
      weight: string;
      sampleArabic: string;
      sampleEnglish: string;
      usage: string;
    }[];
    iconography: {
      title: string;
      description: string;
      items: { name: string; labelArabic: string; role: string }[];
    };
    brandVoice: {
      traits: string[];
      summary: string;
    };
  };
  digitalApplications: {
    sectionLabel: string;
    headline: string;
    body: string[];
    threePhonesImage: string;
    screens: {
      num: string;
      title: string;
      titleArabic: string;
      description: string;
      featureHighlights: string[];
    }[];
  };
  physicalApplications: {
    sectionLabel: string;
    headline: string;
    body: string[];
    mockupImage: string;
    collateral: {
      num: string;
      title: string;
      material: string;
      description: string;
    }[];
  };
  completeSystem: {
    sectionLabel: string;
    headline: string;
    tiers: {
      num: string;
      title: string;
      summary: string;
    }[];
  };
  contribution: {
    sectionLabel: string;
    headline: string;
    body: string[];
    disciplines: string[];
    closingArabic: string;
    closingEnglish: string;
  };
}

export const JURAA_BRAND_DATA: JuraaBrandData = {
  meta: {
    projectName: 'JURAA / جرعة',
    category: 'Brand Architecture',
    discipline: 'Brand Strategy & Visual Identity',
    industry: 'Digital Health',
    market: 'Egypt',
    role: 'Brand Strategy, Visual Identity & Creative Direction',
    projectDisciplines: [
      'Brand Foundation',
      'Logo Architecture',
      'Typography & Visual Language',
      'Digital & Physical Applications',
    ],
    mainStatement: 'Care, made part of everyday life.',
    supportingStatement:
      'JURAA is an Arabic-first medication companion designed around a simple human need: making everyday medication routines easier to organize. I developed a visual identity that brings together care, trust and simplicity, translating these values into a flexible logo system, a calm visual language and consistent digital and physical applications.',
    brandIdeaArabic: 'جرعتك في وقتها',
    brandIdeaEnglish: 'The Shape of Care',
    territory: 'THE SHAPE OF CARE',
    heroImage: '/src/assets/images/juraa_mockup.png',
    logoImage: '/src/assets/images/juraa_logo.png',
    status: 'Completed Brand Architecture System',
  },
  foundation: {
    sectionLabel: '01 / BRAND FOUNDATION',
    headline: 'A more human way to express everyday care.',
    body: [
      'JURAA was defined as a calm, human medication companion. Rather than an intimidating medical device or an impersonal reminder timer, the brand is grounded in empathy.',
      'The identity brings together three foundational values—Care, Trust, and Simplicity—in a promise grounded in everyday life: helping people remember their medication with greater ease and peace of mind.',
    ],
    brandValues: [
      {
        num: '01',
        title: 'CARE',
        englishConcept: 'Empathy & Humanity',
        desc: 'A reassuring identity that recognizes the human side of everyday medication routines—supporting family check-ins and personal wellness with warmth.',
      },
      {
        num: '02',
        title: 'TRUST',
        englishConcept: 'Reliability & Precision',
        desc: 'A consistent and clear visual language that communicates reliability without appearing clinical, intimidating, or overly technical.',
      },
      {
        num: '03',
        title: 'SIMPLICITY',
        englishConcept: 'Clarity & Ease',
        desc: 'A straightforward, uncluttered identity that helps make the digital companion feel intuitive and effortless to understand across generations.',
      },
    ],
    brandLineArabic: 'جرعتك في وقتها',
    brandLineEnglish: 'Your dose, right on time.',
    promiseSummary:
      'The strategic idea: Turn medical compliance into a natural, stress-free habit anchored in quiet reassurance.',
  },
  logoArchitecture: {
    sectionLabel: '02 / LOGO ARCHITECTURE',
    headline: 'One symbol. A flexible identity.',
    body: [
      'The identity is built around JURAA’s interlocking heart-and-capsule symbol. The geometry combines the emotional warmth of a heart with the functional recognition of a medicinal capsule.',
      'The system includes primary vertical, secondary compact, reversed dark, and horizontal configurations, alongside a standalone mark and squircle app icon, allowing the identity to remain unmistakable across any screen or substrate.',
    ],
    symbolConcept: {
      heart: 'The Heart represents emotional empathy, family care, and the personal relationships surrounding health.',
      capsule: 'The Capsule denotes medicinal precision, structured routine, and functional health management.',
      synthesis: 'Interlocked at a precise 45-degree angle, the two forms become one unified, indelible emblem: The Shape of Care.',
    },
    configurations: [
      {
        id: 'primary',
        num: '01',
        title: 'Primary Vertical Lockup',
        subtitle: 'Symbol + Arabic Wordmark + English Track + Tagline',
        usage: 'Flagship brand collateral, posters, presentation title cards, and packaging folios.',
        description: 'The complete brand mark with all elements in disciplined vertical harmony.',
        variant: 'primary',
        bgColor: '#FFFFFF',
        textColor: '#173635',
      },
      {
        id: 'secondary',
        num: '02',
        title: 'Secondary Compact Lockup',
        subtitle: 'Symbol + Bilingual Wordmark',
        usage: 'App splash headers, stationery letterheads, and partner communication.',
        description: 'Optimized vertical footprint omitting the tagline for tighter spatial allocations.',
        variant: 'secondary',
        bgColor: '#F5F3EF',
        textColor: '#173635',
      },
      {
        id: 'reversed',
        num: '03',
        title: 'Reversed Monochromatic',
        subtitle: 'White & Aqua on Dark Ink Teal Ground',
        usage: 'Dark mode app experiences, evening events, and debossed merchandise.',
        description: 'Engineered for high legibility against dark teal (#0F6663) or ink (#173635) backgrounds.',
        variant: 'reversed',
        bgColor: '#0F6663',
        textColor: '#FFFFFF',
      },
      {
        id: 'horizontal',
        num: '04',
        title: 'Horizontal Application',
        subtitle: 'Symbol Left + Bilingual Stack Right',
        usage: 'Mobile navigation bars, desktop web headers, and narrow horizontal signage.',
        description: 'Side-by-side alignment delivering immediate bilingual brand attribution.',
        variant: 'horizontal',
        bgColor: '#FFFFFF',
        textColor: '#173635',
      },
      {
        id: 'symbol',
        num: '05',
        title: 'Standalone Brand Mark',
        subtitle: 'Interlocking Heart-and-Capsule',
        usage: 'Avatars, social badges, watermarks, and micro-touchpoints.',
        description: 'The pure geometric icon functioning autonomously as an indelible brand signature.',
        variant: 'symbol',
        bgColor: '#DCECEA',
        textColor: '#0F6663',
      },
      {
        id: 'icon',
        num: '06',
        title: 'Operating System App Icon',
        subtitle: 'Deep Teal Squircle + White/Aqua Symbol',
        usage: 'iOS & Android homescreens, app stores, and system notifications.',
        description: 'Softened squircle container with dimensional gradient for homescreen prominence.',
        variant: 'icon',
        bgColor: '#173635',
        textColor: '#FFFFFF',
      },
    ],
  },
  visualLanguage: {
    sectionLabel: '03 / TYPOGRAPHY & VISUAL LANGUAGE',
    headline: 'Clarity with a human character.',
    body: [
      'Cairo establishes a consistent typographic language across JURAA’s Arabic and English communications, with a clear hierarchy for display titles, medication listings, and schedule markers.',
      'Deep Teal and Aqua Teal anchor the palette, supported by Soft Mint, warm gray and white. Soft Coral is strictly reserved for selective alerts and time-sensitive reminders.',
    ],
    colors: [
      {
        name: 'Deep Teal',
        hex: '#0F6663',
        role: 'Primary brand recognition and strong identity compositions',
        allocation: '40% Dominant',
        textColor: '#FFFFFF',
      },
      {
        name: 'Aqua Teal',
        hex: '#55B6AE',
        role: 'Secondary brand elements, highlights, and interactive emphasis',
        allocation: '25% Secondary',
        textColor: '#173635',
      },
      {
        name: 'Soft Mint',
        hex: '#DCECEA',
        role: 'Reassuring backgrounds, badge fills, and supporting surfaces',
        allocation: '15% Surface',
        textColor: '#0F6663',
      },
      {
        name: 'Light Warm Gray',
        hex: '#F5F3EF',
        role: 'Warm neutral environments providing calm breathing room',
        allocation: '10% Neutral',
        textColor: '#173635',
        border: '#173635/10',
      },
      {
        name: 'Pure White',
        hex: '#FFFFFF',
        role: 'Clarity, high contrast cards, and legible reading space',
        allocation: '5% Base',
        textColor: '#173635',
        border: '#173635/15',
      },
      {
        name: 'Dark Ink Teal',
        hex: '#173635',
        role: 'High-contrast typography, structure lines, and dark applications',
        allocation: '3% Contrast',
        textColor: '#FFFFFF',
      },
      {
        name: 'Soft Coral',
        hex: '#E88B6B',
        role: 'Controlled attention accents, missed-dose tags, and refilling highlights',
        allocation: '2% Accent Only',
        textColor: '#FFFFFF',
      },
    ],
    typography: [
      {
        family: 'Cairo Bold / Black',
        role: 'Display & Hero Headlines',
        weight: 'Bold 700 / 800',
        sampleArabic: 'جرعتك في وقتها، بدون قلق',
        sampleEnglish: 'Care, made part of everyday life.',
        usage: 'Primary marketing headlines, hero statements, and splash titles.',
      },
      {
        family: 'Cairo SemiBold',
        role: 'Medication Titles & Navigation',
        weight: 'SemiBold 600',
        sampleArabic: 'بنادول إكسترا — قرصان بعد الإفطار',
        sampleEnglish: 'Panadol Extra — 2 tablets after breakfast',
        usage: 'Card titles, button labels, and section dividers.',
      },
      {
        family: 'Cairo Regular / Light',
        role: 'Body Copy & Instructions',
        weight: 'Regular 400 / Light 300',
        sampleArabic: 'تذكير ذكي يتكيف مع روتينك اليومي وتفضيلات عائلتك.',
        sampleEnglish: 'A quiet, dependable companion designed around your routine.',
        usage: 'Instructional text, descriptive paragraphs, and medical guidance notes.',
      },
    ],
    iconography: {
      title: 'Monoline Geometric Icon Family',
      description: 'Built with unified 1.75pt stroke weights, rounded terminal caps, and harmonious geometric proportions.',
      items: [
        { name: 'Pill / Dose', labelArabic: 'الجرعة', role: 'Medication tracking' },
        { name: 'Calendar / Clock', labelArabic: 'المواعيد', role: 'Routine schedules' },
        { name: 'Camera Scanner', labelArabic: 'مسح العبوة', role: 'Package photo recognition' },
        { name: 'Microphone Dictation', labelArabic: 'تسجيل صوتي', role: 'Voice input capture' },
        { name: 'Heart / Care', labelArabic: 'مشاركة العائلة', role: 'Family check-in alerts' },
        { name: 'Analytics Chart', labelArabic: 'الالتزام', role: 'Adherence tracking' },
        { name: 'Bell Notification', labelArabic: 'التنبيهات', role: 'Gentle reminder pings' },
        { name: 'Shield Security', labelArabic: 'الخصوصية', role: 'Encrypted patient records' },
      ],
    },
    brandVoice: {
      traits: ['Human', 'Calm', 'Clear', 'Organized', 'Warm', 'Trustworthy', 'Simple'],
      summary:
        'JURAA speaks like a thoughtful, reliable family member: never alarming, clinical, or overly technical, but always clear, supportive, and punctual.',
    },
  },
  digitalApplications: {
    sectionLabel: '04 / DIGITAL APPLICATIONS',
    headline: 'An identity that extends into the everyday experience.',
    body: [
      'The JURAA visual system extends directly into its Arabic-first app interface, bringing the same calm color language, typography, and recognizable iconography into everyday medication organization.',
      'The interface prioritizes cognitive ease: large touch targets, natural right-to-left flow, and reassuring visual confirmations replace stressful alarm clatter.',
    ],
    threePhonesImage: '/src/assets/images/juraa_mockup.png',
    screens: [
      {
        num: '01',
        title: 'Add Medication & Intake Methods',
        titleArabic: 'إضافة دواء جديد',
        description: 'Multi-modal entry offering photo barcode scanning, voice dictation, written notes, or manual selection.',
        featureHighlights: [
          'Camera capture of Arabic pharmaceutical packaging',
          'Voice transcription for elderly users',
          'Automated dosage frequency recommendations',
        ],
      },
      {
        num: '02',
        title: 'Daily Medication Routine & Timeline',
        titleArabic: 'الجدول اليومي والمواعيد',
        description: 'Clear chronological day timeline broken into Morning, Afternoon, and Evening slots with one-tap confirmation.',
        featureHighlights: [
          'Contextual meal associations (e.g. "After Dinner")',
          'Color-coded pill differentiation',
          'Zero-stress status indicators',
        ],
      },
      {
        num: '03',
        title: 'Adherence Tracking & Compliance History',
        titleArabic: 'معدل الالتزام الأسبوعي',
        description: 'Visual compliance metrics celebrating weekly consistency without punitive guilt or clinical shame.',
        featureHighlights: [
          '7-day compliance overview (e.g. 6/7 days on track)',
          'Soft mint progress indicators',
          'Exportable PDF summaries for physician reviews',
        ],
      },
      {
        num: '04',
        title: 'Medication Profile & Supply Inventory',
        titleArabic: 'تفاصيل الجرعة والمخزون',
        description: 'Deep view of individual prescription parameters, remaining pill count, and proactive refill triggers.',
        featureHighlights: [
          'Automatic refill notification when 4 doses remain',
          'Emergency pharmacy reorder shortcut',
          'Physician contact linkage',
        ],
      },
      {
        num: '05',
        title: 'Contextual Gentle Notifications',
        titleArabic: 'إشعارات هادئة ومحترمة',
        description: 'Respectful reminder dialogs that inform rather than disrupt, designed to blend smoothly into busy workdays.',
        featureHighlights: [
          'Snooze with intelligent contextual intervals',
          'Discreet lockscreen preview for privacy',
          'Companion ping to care partner if unacknowledged',
        ],
      },
    ],
  },
  physicalApplications: {
    sectionLabel: '05 / PHYSICAL APPLICATIONS',
    headline: 'A recognizable identity beyond the screen.',
    body: [
      'The identity extends beyond digital touchpoints into selected physical brand applications, including clinician folios, patient appointment stationery, and executive collateral.',
      'Each application preserves the exact same symbol, color language, and Cairo typography while celebrating high-grade tactile materials: blind-embossed leather, heavy cotton cardstock, and enamel brass pins.',
    ],
    mockupImage: '/src/assets/images/juraa_mockup.png',
    collateral: [
      {
        num: '01',
        title: 'Debossed Leather Folio & Clinical Journal',
        material: 'Treated Forest Teal Leatherette · Blind Deboss',
        description: 'Bound journal with deep debossing of the JURAA heart-capsule mark and Cairo wordmark for medical advisors and founders.',
      },
      {
        num: '02',
        title: 'A4 Prescription Letterhead & App Companion',
        material: '120gsm Uncoated Cotton Paper · Offset 2-Color Print',
        description: 'Clean medical letterhead pairing the primary mark with a QR companion link guiding patients directly to their prescribed routine.',
      },
      {
        num: '03',
        title: 'Dual-Tone Heavyweight Business Cards',
        material: '350gsm Duplexed Cotton Board · Teal & Ivory',
        description: 'Tactile cards featuring the deep teal face with reversed white mark and a warm ivory reverse with Cairo typography.',
      },
      {
        num: '04',
        title: 'Folded Patient Care Reminder Slips',
        material: '280gsm Textured Cardstock · Soft Coral Accent',
        description: 'Folded pharmacy slips bearing the core promise "جرعتك في وقتها — دعم بسيط ليوم أكثر صحة" distributed in specialty clinics.',
      },
      {
        num: '05',
        title: 'Solid Enamel Brand Lapel Pin',
        material: 'Die-Struck Brass · Hard Enamel Teal & Mint Infill',
        description: 'Square lapel pin worn by care ambassadors and healthcare partners, subtly communicating patient empathy.',
      },
    ],
  },
  completeSystem: {
    sectionLabel: '06 / THE BRAND SYSTEM',
    headline: 'One recognizable language, across every touchpoint.',
    tiers: [
      {
        num: '01',
        title: 'BRAND FOUNDATION & POSITIONING',
        summary: 'A human medication companion built around care, trust, and simplicity: "جرعتك في وقتها".',
      },
      {
        num: '02',
        title: 'LOGO ARCHITECTURE',
        summary: 'A 6-configuration system anchored by the interlocking heart-and-capsule symbol.',
      },
      {
        num: '03',
        title: 'TYPOGRAPHY & VISUAL LANGUAGE',
        summary: 'A disciplined Cairo typographic system, a calm 7-color teal palette, and 8 monoline UI icons.',
      },
      {
        num: '04',
        title: 'DIGITAL & PHYSICAL APPLICATIONS',
        summary: 'Cohesive extension across 5 app screens, three-phone presentation, and tactile stationery collateral.',
      },
    ],
  },
  contribution: {
    sectionLabel: '07 / STRATEGIC CONTRIBUTION',
    headline: 'A complete visual language for everyday care.',
    body: [
      'My work established a connected brand system for JURAA: from core emotional positioning and symbol geometry to Cairo typographic guidelines, digital UI components, and tactile physical applications.',
      'The result is a coherent, reassuring identity designed to make medication management feel natural, dignified, and human across every touchpoint.',
    ],
    disciplines: [
      'Brand Foundation',
      'Brand Positioning',
      'Logo Architecture',
      'Visual Identity',
      'Typography Hierarchy',
      'Color System',
      'Iconography',
      'Digital Applications',
      'Physical Collateral',
      'Creative Direction',
    ],
    closingArabic: 'جرعتك في وقتها',
    closingEnglish: 'The Shape of Care · Care, made part of everyday life.',
  },
};
