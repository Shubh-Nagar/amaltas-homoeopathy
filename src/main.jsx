import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App                    from './App';
import DepartmentsPage         from './pages/DepartmentsPage';
import DepartmentDetailPage    from './pages/DepartmentDetailPage';
import AboutInstitutionPage    from './pages/AboutInstitutionPage';
import VisionMissionPage       from './pages/VisionMissionPage';
import FounderMessagePage      from './pages/FounderMessagePage';
import ChairmanMessagePage     from './pages/ChairmanMessagePage';
import PrincipalMessagePage    from './pages/PrincipalMessagePage';
import AwardsPage                    from './pages/AwardsPage';
import RecognitionAffiliationPage   from './pages/RecognitionAffiliationPage';
import AdmissionProcedurePage       from './pages/AdmissionProcedurePage';
import FeesStructurePage            from './pages/FeesStructurePage';
import ContactPage                  from './pages/ContactPage';
import HospitalStaffPage            from './pages/HospitalStaffPage';
import HospitalDepartmentsPage      from './pages/HospitalDepartmentsPage';
import HospitalEquipmentPage        from './pages/HospitalEquipmentPage';
import CitizenCharterPage           from './pages/CitizenCharterPage';
import TeachingFacultyPage          from './pages/TeachingFacultyPage';
import LibraryPage                  from './pages/LibraryPage';
import ResearchPublicationsPage     from './pages/ResearchPublicationsPage';
import SanctionedIntakePage         from './pages/SanctionedIntakePage';
import AdmittedStudentsPage         from './pages/AdmittedStudentsPage';
import EventsPage                   from './pages/EventsPage';
import NewsPage                     from './pages/NewsPage';
import GalleryPage                  from './pages/GalleryPage';
import AntiRaggingPage              from './pages/AntiRaggingPage';
import AcademicCalendarPage         from './pages/AcademicCalendarPage';
import ScholarshipPage              from './pages/ScholarshipPage';
import AdmissionDetailsPage         from './pages/AdmissionDetailsPage';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"                                   element={<App />} />
        <Route path="/about/institution"                  element={<AboutInstitutionPage />} />
        <Route path="/about/vision-mission"               element={<VisionMissionPage />} />
        <Route path="/about/founder-message"              element={<FounderMessagePage />} />
        <Route path="/about/chairman-message"             element={<ChairmanMessagePage />} />
        <Route path="/about/principal-message"            element={<PrincipalMessagePage />} />
        <Route path="/about/awards"                       element={<AwardsPage />} />
        <Route path="/about/recognition-affiliation"      element={<RecognitionAffiliationPage />} />
        <Route path="/admissions/procedure"               element={<AdmissionProcedurePage />} />
        <Route path="/admissions/fees"                    element={<FeesStructurePage />} />
        <Route path="/contact"                            element={<ContactPage />} />
        <Route path="/academics/departments"              element={<DepartmentsPage />} />
        <Route path="/academics/departments/:slug"        element={<DepartmentDetailPage />} />
        <Route path="/hospital/staff"                     element={<HospitalStaffPage />} />
        <Route path="/hospital/departments"               element={<HospitalDepartmentsPage />} />
        <Route path="/hospital/instruments-equipment"     element={<HospitalEquipmentPage />} />
        <Route path="/hospital/citizen-charter"           element={<CitizenCharterPage />} />
        <Route path="/academics/teaching-faculty"          element={<TeachingFacultyPage />} />
        <Route path="/academics/library"                   element={<LibraryPage />} />
        <Route path="/academics/research-publications"     element={<ResearchPublicationsPage />} />
        <Route path="/academics/sanctioned-intake"          element={<SanctionedIntakePage />} />
        <Route path="/academics/admitted-students"           element={<AdmittedStudentsPage />} />
        <Route path="/campus/events"                         element={<EventsPage />} />
        <Route path="/news"                                  element={<NewsPage />} />
        <Route path="/campus/gallery"                        element={<GalleryPage />} />
        <Route path="/campus/anti-ragging"                   element={<AntiRaggingPage />} />
        <Route path="/academics/academic-calendar"            element={<AcademicCalendarPage />} />
        <Route path="/admissions/scholarships"               element={<ScholarshipPage />} />
        <Route path="/academics/admission-details"            element={<AdmissionDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
