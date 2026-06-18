import React, { useState } from 'react';
import { T, fontBody } from './styles/tokens';

import FontLoader          from './components/ui/FontLoader';
import CustomCursor        from './components/ui/CustomCursor';
import LoadingScreen       from './components/ui/LoadingScreen';
import ScrollProgressPlant from './components/ui/ScrollProgressPlant';
import PopupBanner         from './components/ui/PopupBanner';

import TopUtilityBar       from './components/layout/TopUtilityBar';
import Navbar              from './components/layout/Navbar';
import Footer              from './components/layout/Footer';

import Hero                from './components/home/Hero';
import VitalNumbers        from './components/home/VitalNumbers';
import AboutInstitution    from './components/home/AboutInstitution';
import FacilitiesShowcase  from './components/home/FacilitiesShowcase';
import Leadership          from './components/home/Leadership';
import PrincipalMessage    from './components/home/PrincipalMessage';
import QuickStats          from './components/home/QuickStats';

/*
 * App — home page composition.
 *
 * Journey arc:
 *   Hero (dark) → wonder & aspiration
 *   VitalNumbers (forest strip) → authority
 *   About (cream) → institutional claim
 *   Facilities (cream) → visual proof
 *   Leadership (cream) → human trust
 *   Principal (forest) → emotional peak
 *   QuickStats (void) → evidence
 *   Footer (ink) → action + contact
 */
const App = () => {
  const [ready, setReady] = useState(false);

  return (
    <div style={{ ...fontBody, background: T.cream50, color: T.ink900 }}>
      <FontLoader />

      {/* Global UI */}
      <CustomCursor />
      <LoadingScreen onComplete={() => setReady(true)} />
      {ready && <PopupBanner delay={800} />}

      {/* Main site — fades in once loading screen exits */}
      <div
        style={{
          opacity:       ready ? 1 : 0,
          transition:    'opacity 0.4s ease',
          pointerEvents: ready ? 'auto' : 'none',
        }}
      >
        <ScrollProgressPlant />

        <TopUtilityBar />
        <Navbar />

        <main>
          <Hero />
          <VitalNumbers />
          <AboutInstitution />
          <FacilitiesShowcase />
          <Leadership />
          <PrincipalMessage />
          <QuickStats />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
