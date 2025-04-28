import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import CertificationsPage from '../pages/CertificationsPage/CertificationsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Layout from '../components/Layout/Layout';

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/certifications" element={<CertificationsPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
