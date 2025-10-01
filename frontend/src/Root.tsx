import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from '@/App';
import { HomePage, NotFoundPage, ProfilePage, SearchPage } from '@/pages';

export function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="profile">
            <Route index element={<ProfilePage />} />
            <Route path=":id" element={<ProfilePage />} />
          </Route>

          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
