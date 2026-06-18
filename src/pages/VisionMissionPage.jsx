import React from 'react';
import { T, fontBody } from '../styles/tokens';
import FontLoader           from '../components/ui/FontLoader';
import CustomCursor         from '../components/ui/CustomCursor';
import ScrollProgressPlant  from '../components/ui/ScrollProgressPlant';
import TopUtilityBar        from '../components/layout/TopUtilityBar';
import Navbar               from '../components/layout/Navbar';
import Footer               from '../components/layout/Footer';
import VisionMissionSection from '../components/about/VisionMissionSection';

const VisionMissionPage = () => (
  <div style={{ ...fontBody, background: T.cream50, color: T.ink900 }}>
    <FontLoader />
    <CustomCursor />
    <ScrollProgressPlant />
    <TopUtilityBar />
    <Navbar />
    <main>
      <VisionMissionSection />
    </main>
    <Footer />
  </div>
);

export default VisionMissionPage;
