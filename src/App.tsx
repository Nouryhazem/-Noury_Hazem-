
import React, { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SoundToggle } from './components/SoundToggle';

import { HomeView } from './views/HomeView';
import { MarketingView } from './views/MarketingView';
import { CreativeView } from './views/CreativeView';
import { BrandingView } from './views/BrandingView';
import { DataView } from './views/DataView';
import { DigitalView } from './views/DigitalView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

import { CaseStudyView } from './views/CaseStudyView';

// Existing dedicated Creative Direction components
import { CreativeCaseStudyView } from './views/creative/CreativeCaseStudyView';
import { SaudiNationalDayCollection } from './views/creative/SaudiNationalDayCollection';

// Existing project data
import { PROJECTS } from './data/projectsData';
import { ALL_INDIVIDUAL_CREATIVE_PROJECTS } from './data/creativeData';

// The order of projects inside the Creative Direction archive
const CREATIVE_PROJECTS = [
  {
    slug: 'juraa-creative-campaign',
    title: 'JURAA',
  },
  {
    slug: 'dipdux-analytica',
    title: 'Dipdux Analytica',
  },
  {
    slug: 'saudi-national-day-96',
    title: 'Saudi National Day 96',
  },
];

// The five projects inside Saudi National Day 96
const SAUDI_PROJECTS = [
  {
    slug: 'the-room-snd96',
    title: 'The Room',
  },
  {
    slug: 'ae-creative-snd96',
    title: 'AE Creative',
  },
  {
    slug: 'ratio-snd96',
    title: 'Ratio',
  },
  {
    slug: 'bearu-snd96',
    title: 'Béaru',
  },
  {
    slug: 'reef-asia-kitchens',
    title: 'Reef Asia Kitchens',
  },
];

const SAUDI_COLLECTION_SLUG = 'saudi-national-day-96';

// Determines whether a project belongs to Creative Direction
function isCreativeProject(slug: string | null): boolean {
  if (!slug) return false;

  return (
    slug === SAUDI_COLLECTION_SLUG ||
    Object.prototype.hasOwnProperty.call(
      ALL_INDIVIDUAL_CREATIVE_PROJECTS,
      slug
    )
  );
}

// Determines whether a project is part of Saudi National Day
function isSaudiProject(slug: string | null): boolean {
  if (!slug) return false;

  return (
    slug === 'reef-asia-snd96' ||
    SAUDI_PROJECTS.some((project) => project.slug === slug)
  );
}

// Returns the next project for the case-study navigation
function getNextCreativeProject(slug: string) {
  const projects = isSaudiProject(slug)
    ? SAUDI_PROJECTS
    : CREATIVE_PROJECTS;

  const currentIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  if (currentIndex === -1) {
    return undefined;
  }

  return projects[
    (currentIndex + 1) % projects.length
  ];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const [currentProjectSlug, setCurrentProjectSlug] =
    useState<string | null>(null);

  // Read the current URL, including direct links and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = decodeURIComponent(
        window.location.hash.slice(1)
      ).trim();

      if (!hash) {
        setCurrentPage('home');
        setCurrentProjectSlug(null);
        return;
      }

      if (hash.startsWith('case/')) {
        const slug = hash.slice('case/'.length);

        if (slug) {
          setCurrentPage('case');
          setCurrentProjectSlug(slug);
        } else {
          setCurrentPage('creative');
          setCurrentProjectSlug(null);
        }

        return;
      }

      setCurrentPage(hash);
      setCurrentProjectSlug(null);
    };

    handleHashChange();

    window.addEventListener(
      'hashchange',
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      );
    };
  }, []);

  // Navigate using the existing hash-based routing system
  const handleNavigate = (
    page: string,
    projectSlug?: string
  ) => {
    let nextHash = '';

    if (page === 'case' || projectSlug) {
      const slug =
        projectSlug ||
        (page.startsWith('case-')
          ? page.slice('case-'.length)
          : '');

      if (!slug) return;

      nextHash = `case/${slug}`;

      setCurrentPage('case');
      setCurrentProjectSlug(slug);
    } else {
      nextHash = page === 'home' ? '' : page;

      setCurrentPage(page);
      setCurrentProjectSlug(null);
    }

    // Hash changes create browser-history entries
    if (window.location.hash.slice(1) !== nextHash) {
      window.location.hash = nextHash;
    }

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  const goToCreative = () => {
    handleNavigate('creative');
  };

  const goToSaudiCollection = () => {
    handleNavigate('case', SAUDI_COLLECTION_SLUG);
  };

  const goToContact = () => {
    handleNavigate('contact');
  };

  // Resolve Creative Direction independently
  const creativeData = currentProjectSlug
    ? ALL_INDIVIDUAL_CREATIVE_PROJECTS[currentProjectSlug]
    : undefined;

  const showingSaudiCollection =
    currentPage === 'case' &&
    currentProjectSlug === SAUDI_COLLECTION_SLUG;

  const showingCreativeProject =
    currentPage === 'case' &&
    Boolean(creativeData);

  // The original PROJECTS data is used only for non-creative pages
  const generalProject =
    currentPage === 'case' &&
    currentProjectSlug &&
    !isCreativeProject(currentProjectSlug)
      ? PROJECTS.find(
          (project) =>
            project.slug === currentProjectSlug ||
            project.id === currentProjectSlug
        )
      : undefined;

  // Keep the correct discipline highlighted in the navbar
  const navbarPage =
    currentPage === 'case'
      ? isCreativeProject(currentProjectSlug)
        ? 'creative'
        : generalProject?.primaryCategory || 'marketing'
      : currentPage;

  const nextCreativeProject =
    currentProjectSlug && creativeData
      ? getNextCreativeProject(currentProjectSlug)
      : undefined;

  // Saudi projects return to the collection.
  // Other Creative Direction projects return to the archive.
  const handleCreativeBack = () => {
    if (isSaudiProject(currentProjectSlug)) {
      goToSaudiCollection();
    } else {
      goToCreative();
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        bg-[#F4F1E9]
        text-[#171717]
        font-sans-primary
        selection:bg-[#315BFF]
        selection:text-white
      "
    >
      {/* Existing global navigation */}
      <Navbar
        currentPage={navbarPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">

        {/* HOME */}
        {currentPage === 'home' && (
          <HomeView onNavigate={handleNavigate} />
        )}

        {/* STRATEGIC MARKETING */}
        {currentPage === 'marketing' && (
          <MarketingView
            onSelectProject={(slug) =>
              handleNavigate('case', slug)
            }
            onNavigateContact={goToContact}
            onNavigate={handleNavigate}
          />
        )}

        {/* CREATIVE DIRECTION INDEX */}
        {currentPage === 'creative' && (
          <CreativeView
            onSelectProject={(slug) =>
              handleNavigate('case', slug)
            }
            onNavigateContact={goToContact}
            onNavigate={handleNavigate}
          />
        )}

        {/* BRAND ARCHITECTURE */}
        {currentPage === 'branding' && (
          <BrandingView
            onSelectProject={(slug) =>
              handleNavigate('case', slug)
            }
            onNavigateContact={goToContact}
            onNavigate={handleNavigate}
          />
        )}

        {/* DATA ANALYTICS */}
        {currentPage === 'data' && (
          <DataView
            onNavigateContact={goToContact}
            onNavigate={handleNavigate}
          />
        )}

        {/* DIGITAL EXPERIENCES */}
        {currentPage === 'digital' && (
          <DigitalView
            onNavigateContact={goToContact}
            onNavigate={handleNavigate}
          />
        )}

        {/* ABOUT */}
        {currentPage === 'about' && (
          <AboutView onNavigateContact={goToContact} />
        )}

        {/* CONTACT */}
        {currentPage === 'contact' && <ContactView />}

        {/* SAUDI NATIONAL DAY COLLECTION */}
        {showingSaudiCollection && (
          <SaudiNationalDayCollection
            onBack={goToCreative}
            onSelectProject={(slug) =>
              handleNavigate('case', slug)
            }
            onNavigateContact={goToContact}
          />
        )}

        {/* INDIVIDUAL CREATIVE DIRECTION CASE STUDIES */}
        {showingCreativeProject && creativeData && (
          <CreativeCaseStudyView
            key={currentProjectSlug}
            data={creativeData}
            slug={currentProjectSlug || undefined}
            onBack={handleCreativeBack}
            onNavigateToProject={(slug) =>
              handleNavigate('case', slug)
            }
            onNavigateContact={goToContact}
            nextProjectSlug={nextCreativeProject?.slug}
            nextProjectTitle={nextCreativeProject?.title}
          />
        )}

        {/* ALL OTHER EXISTING CASE STUDIES */}
        {currentPage === 'case' && generalProject && (
          <CaseStudyView
            key={generalProject.slug}
            project={generalProject}
            onBack={() =>
              handleNavigate(
                generalProject.primaryCategory || 'marketing'
              )
            }
            onNavigateToProject={(slug) =>
              handleNavigate('case', slug)
            }
            onNavigateContact={goToContact}
          />
        )}

        {/* INVALID PROJECT LINK */}
        {currentPage === 'case' &&
          !showingSaudiCollection &&
          !showingCreativeProject &&
          !generalProject && (
            <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-[#315BFF] mb-5">
                Project not found
              </p>

              <h1 className="text-4xl font-semibold mb-5">
                This project is unavailable.
              </h1>

              <p className="max-w-lg text-[#171717]/60 mb-8">
                The project link may be incorrect, or its
                content has not been added yet.
              </p>

              <button
                type="button"
                onClick={goToCreative}
                className="bg-[#171717] text-white px-8 py-4 hover:bg-[#315BFF] transition-colors"
              >
                Back to Creative Direction
              </button>
            </section>
          )}

      </main>

      {/* Existing footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Existing sound controller */}
      <SoundToggle variant="floating" />
    </div>
  );
}
