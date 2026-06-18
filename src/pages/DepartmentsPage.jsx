import React from 'react';
import { T, fontBody } from '../styles/tokens';
import FontLoader    from '../components/ui/FontLoader';
import CustomCursor  from '../components/ui/CustomCursor';
import TopUtilityBar from '../components/layout/TopUtilityBar';
import Navbar        from '../components/layout/Navbar';
import Footer        from '../components/layout/Footer';
import Departments   from '../components/home/Departments';

const DepartmentsPage = () => (
  <div style={{ ...fontBody, background: T.cream50, color: T.ink900 }}>
    <FontLoader />
    <CustomCursor />
    <TopUtilityBar />
    <Navbar />
    <main>
      <Departments />
    </main>
    <Footer />
  </div>
);

export default DepartmentsPage;
