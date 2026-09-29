export interface RelaxCaseStudyData {
  meta: {
    projectName: string;
    category: string;
    discipline: string;
    location: string;
    role: string;
    projectDisciplines: string[];
    mainStatement: string;
    supportingStatement: string;
    brandIdeaArabic: string;
    brandIdeaEnglish: string;
    heroImage: string;
    status: string;
  };
  positioning: {
    sectionLabel: string;
    headline: string;
    body: string[];
    strategicExpressionArabic: string;
    supportingEnglishExpression: string;
    metaphorExplanation: string;
  };
  identityArchitecture: {
    sectionLabel: string;
    headline: string;
    body: string[];
    conceptualRoles: {
      roleR7: string;
      rolePause: string;
    };
    logoConfigurations: {
      id: string;
      num: string;
      title: string;
      subtitle: string;
      description: string;
      aspect: string;
    }[];
  };
  visualLanguage: {
    sectionLabel: string;
    headline: string;
    body: string[];
    colorSystem: {
      name: string;
      hex: string;
      allocation: string;
      role: string;
      textColor: string;
      borderColor?: string;
    }[];
    sageRule: string;
    typography: {
      role: string;
      font: string;
      sample: string;
      usage: string;
    }[];
    materials: {
      name: string;
      treatment: string;
      context: string;
    }[];
  };
  applications: {
    sectionLabel: string;
    headline: string;
    body: string[];
    touchpoints: {
      num: string;
      title: string;
      caption: string;
      detail: string;
      material: string;
      image?: string;
    }[];
  };
  completeSystem: {
    sectionLabel: string;
    headline: string;
    fourTiers: {
      num: string;
      title: string;
      summary: string;
    }[];
  };
  contribution: {
    sectionLabel: string;
    headline: string;
    body: string[];
    keyProjectAreas: string[];
    closingArabic: string;
    closingEnglish: string;
  };
}

export const RELAX_CASE_STUDY: RelaxCaseStudyData = {
  meta: {
    projectName: 'RELAX CAFÉ',
    category: 'Brand Architecture',
    discipline: 'Brand Strategy & Visual Identity',
    location: 'Minya, Egypt',
    role: 'Brand Strategy, Visual Identity & Creative Direction',
    projectDisciplines: [
      'Strategic Positioning',
      'Identity Architecture',
      'Visual Language',
      'Brand Applications',
    ],
    mainStatement: 'A familiar café, seen from a new perspective.',
    supportingStatement:
      'Relax Café is an established local café in Minya, set on the seventh floor. The identity is built around that defining detail: a destination above the everyday, where the view, privacy and atmosphere invite guests to pause.',
    brandIdeaArabic: 'فوق الزحمة',
    brandIdeaEnglish: 'If it matters, take it to seven.',
    heroImage: '/src/assets/images/relax_mockup_elevator.png',
    status: 'Completed Brand Architecture System',
  },
  positioning: {
    sectionLabel: '01 / STRATEGIC POSITIONING',
    headline: "The seventh floor became the brand's defining idea.",
    body: [
      'The seventh floor became more than a location detail; it became the foundation of the brand story.',
      'The positioning presents Relax as a place worth going up for—rooted in its setting, privacy and welcoming atmosphere.',
    ],
    strategicExpressionArabic: 'فوق الزحمة',
    supportingEnglishExpression: 'If it matters, take it to seven.',
    metaphorExplanation:
      'Physical elevation transforms into psychological calm. Rather than competing as an ordinary street-level coffee shop, Relax is positioned as an intentional sanctuary above everyday urban velocity.',
  },
  identityArchitecture: {
    sectionLabel: '02 / IDENTITY ARCHITECTURE',
    headline: 'One destination. One recognizable identity.',
    body: [
      'The identity brings together two conceptual roles: R7 marks the destination; Pause expresses the feeling.',
      'A flexible logo system helps the brand stay recognizable across Arabic and English, large formats and everyday touchpoints.',
    ],
    conceptualRoles: {
      roleR7: 'R7 marks the physical and metaphorical destination on the seventh floor.',
      rolePause: 'Pause expresses the emotional respite and unhurried hospitality guests experience.',
    },
    logoConfigurations: [
      {
        id: 'symbol',
        num: '01',
        title: 'Symbol Only',
        subtitle: 'Geometric Monogram',
        description:
          'The beveled octagonal capsule with twin vertical architectural pillars (the "Pause" Roman numeral mark). Used as an embossed seal, cup sleeve stamp, and architectural detail.',
        aspect: '1:1',
      },
      {
        id: 'vertical',
        num: '02',
        title: 'Primary Vertical Lockup',
        subtitle: 'Monogram + Pinyon Script + CAFÉ',
        description:
          'The authoritative brand configuration: monogram crest atop the flowing Pinyon Script wordmark, grounded by tracked serif typography.',
        aspect: '4:5',
      },
      {
        id: 'bilingual',
        num: '03',
        title: 'Wordmark + Arabic Lockup',
        subtitle: 'Bilingual Brand Expression',
        description:
          'Pairing the English script mark with the hand-crafted El Messiri Arabic brand descriptor (ريلاكس كافيه · فوق الزحمة) ensuring regional authenticity.',
        aspect: '16:9',
      },
      {
        id: 'ivory',
        num: '04',
        title: 'One-Color Ivory Version',
        subtitle: 'Contrast Mark for Dark Grounds',
        description:
          'The monochrome Warm Ivory (#F3E9DA) silhouette engineered specifically for deep Espresso Shadow surfaces, blind debossing, and photographic overlays.',
        aspect: '1:1',
      },
    ],
  },
  visualLanguage: {
    sectionLabel: '03 / VISUAL LANGUAGE',
    headline: 'A visual identity built on warmth, depth and restraint.',
    body: [
      'Espresso and chestnut tones bring depth and warmth. Ivory creates breathing room, while aged brass adds a restrained accent.',
      'Arabic and English typography, the monogram pattern and material details work together to create a composed, distinctive identity.',
    ],
    colorSystem: [
      {
        name: 'Espresso Shadow',
        hex: '#1B0F0A',
        allocation: '42%',
        role: 'Primary Ground & Brand Depth',
        textColor: '#F3E9DA',
        borderColor: '#3B1F14',
      },
      {
        name: 'Chestnut Brown',
        hex: '#3B1F14',
        allocation: '28%',
        role: 'Surfaces, Leathers & Pattern Ground',
        textColor: '#F3E9DA',
      },
      {
        name: 'Warm Ivory',
        hex: '#F3E9DA',
        allocation: '20%',
        role: 'Typography, Ceramic Glazes & Paper Stock',
        textColor: '#1B0F0A',
      },
      {
        name: 'Aged Brass',
        hex: '#B8924E',
        allocation: '6%',
        role: 'Logo Crest, Architectural Plates & Fine Details',
        textColor: '#1B0F0A',
      },
      {
        name: 'Sage Reserve',
        hex: '#5C6650',
        allocation: '4%',
        role: 'Controlled Accent for Reservations & Botanic Cues',
        textColor: '#F3E9DA',
      },
    ],
    sageRule:
      'Sage Reserve supports reservations, environmental details and occasional service accents. It never replaces Espresso or Chestnut as the main brand ground and must not recolor the primary logo.',
    typography: [
      {
        role: 'Brand Logotype',
        font: 'Pinyon Script',
        sample: 'Relax',
        usage: 'Reserved exclusively for the Relax brand wordmark. Never used for body text or headlines.',
      },
      {
        role: 'English Headlines',
        font: 'Cormorant Garamond Semibold',
        sample: 'A familiar café, seen from a new perspective.',
        usage: 'Editorial section headings, menu section titles, and architectural signage.',
      },
      {
        role: 'English Body Copy',
        font: 'Cormorant Garamond Light',
        sample: 'If it matters, take it to seven. A destination above the everyday in Minya.',
        usage: 'Menu item descriptions, guest reservation guidelines, and collateral text.',
      },
      {
        role: 'Arabic Typography',
        font: 'El Messiri (Semibold / Regular)',
        sample: 'فوق الزحمة — ريلاكس كافيه',
        usage: 'Primary Arabic brand expression, bilingual menu listings, and wayfinding.',
      },
    ],
    materials: [
      {
        name: 'Chestnut-on-Chestnut',
        treatment: 'Tone-on-tone repeat pattern of the octagonal monogram on treated leatherette',
        context: 'Menu folios, bill presenter wallets, and lounge surface details',
      },
      {
        name: 'Blind-Embossed Ivory',
        treatment: 'High-pressure tactile deboss without foil onto 350gsm cotton rag stock',
        context: 'Reservation cards, coaster borders, and VIP stationery envelopes',
      },
      {
        name: 'Aged Brass Detail',
        treatment: 'Brushed metal with protective satin clearcoat and counter-sunk flush screws',
        context: '7th-floor elevator directional signage, door handles, and lapel pin emblems',
      },
    ],
  },
  applications: {
    sectionLabel: '04 / BRAND APPLICATIONS',
    headline: 'A consistent identity across every touchpoint.',
    body: [
      'The system was extended across selected touchpoints, including menus, reservation cards, cups, packaging and social content.',
      'Each application carries the same visual cues while adapting to its purpose and format.',
    ],
    touchpoints: [
      {
        num: '01',
        title: 'Embossed Leather Menu Folio',
        caption: 'Menu System & Table Presentation',
        detail:
          'Deep chestnut leather cover hot-stamped with the Pinyon Script wordmark and brass monogram crest, paired with ivory interior leaves and Cormorant typography.',
        material: 'Treated Chestnut Leather · Gold Foil Deboss',
        image: '/src/assets/images/relax_mockup_table_setting.png',
      },
      {
        num: '02',
        title: 'Octagonal Coaster & Reservation Cards',
        caption: 'Reservation & Table Setting Collateral',
        detail:
          'Octagonal coasters echoing the beveled monogram shape with fine perimeter stitching, inscribed: "Relax Café · Level Seven · Minya, Egypt".',
        material: 'Stitched Leather Coaster · Heavyweight Cotton Cardstock',
        image: '/src/assets/images/relax_mockup_table_setting.png',
      },
      {
        num: '03',
        title: 'Ceramic Tableware & Takeaway Packaging',
        caption: 'Packaging & Drinkware Ecosystem',
        detail:
          'Warm ivory ceramic cups with subtle aged brass monogram print, alongside double-walled takeaway paper cups fitted with textured espresso-sleeve bands.',
        material: 'Glazed Ceramic · Unbleached Fiber Cup · Espresso Sleeve',
        image: '/src/assets/images/relax_mockup_takeaway_cup.png',
      },
      {
        num: '04',
        title: 'Elevator Directional Wayfinding Plate',
        caption: 'Architectural & Environmental Signage',
        detail:
          'Brushed aged brass plate mounted directly outside the seventh-floor elevator doors, featuring the engraved monogram, directional arrow, and "RELAX CAFÉ".',
        material: 'Solid Brushed Brass · Chemically Etched Infill',
        image: '/src/assets/images/relax_mockup_elevator.png',
      },
      {
        num: '05',
        title: 'Staff Uniforms & Apron Embroidery',
        caption: 'Human Hospitality & Touchpoint Cohesion',
        detail:
          'Espresso shadow cotton aprons with antique brass buckle adjusters and metallic gold thread monogram embroidery on the chest.',
        material: 'Heavyweight Espresso Twill · Brass Hardware',
        image: '/src/assets/images/relax_mockup_table_setting.png',
      },
    ],
  },
  completeSystem: {
    sectionLabel: '05 / THE BRAND SYSTEM',
    headline: 'One identity, expressed across different experiences.',
    fourTiers: [
      {
        num: '01',
        title: 'STRATEGIC POSITIONING',
        summary: 'The seventh floor as the foundation of the brand story: "فوق الزحمة".',
      },
      {
        num: '02',
        title: 'IDENTITY ARCHITECTURE',
        summary: 'A flexible 4-tier logo system built around the R7 destination and Pause feeling.',
      },
      {
        num: '03',
        title: 'VISUAL LANGUAGE',
        summary: 'Espresso, Chestnut, Ivory, and Aged Brass palette paired with Pinyon Script and El Messiri.',
      },
      {
        num: '04',
        title: 'BRAND APPLICATIONS',
        summary: 'A consistent tactile ecosystem across leather menus, brass signage, coasters, and tableware.',
      },
    ],
  },
  contribution: {
    sectionLabel: '06 / STRATEGIC CONTRIBUTION',
    headline: 'A familiar café, seen from a new perspective.',
    body: [
      'The result is a unified brand direction shaped by Relax\'s place, character and promise: فوق الزحمة.',
      'My work connected the café\'s defining location and atmosphere to its strategic positioning, logo architecture, visual language and selected brand applications.',
      'The project demonstrates how I translate a business\'s distinctive characteristics into a coherent identity that can remain recognizable across different touchpoints.',
    ],
    keyProjectAreas: [
      'Strategic Positioning',
      'Identity Architecture',
      'Logo System',
      'Bilingual Typography',
      'Color System',
      'Monogram Pattern',
      'Material Direction',
      'Brand Applications',
    ],
    closingArabic: 'فوق الزحمة',
    closingEnglish: 'If it matters, take it to seven.',
  },
};
