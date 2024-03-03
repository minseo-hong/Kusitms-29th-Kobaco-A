/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import ArchiveMain from "./pages/archive-main/ArchiveMain";
import ArchivePopularVideos from "./pages/archive-popular-videos/ArchivePopularVidoes";
import ArchiveTotalVideos from "./pages/archive-total-videos/ArchiveTotalVideos";
import ArchiveSavedVideos from "./pages/archive-saved-videos/ArchiveSavedVideos";
import ArchiveDetail from "./pages/archive-detail/ArchiveDetail";
import ArchiveTrendVideos from "./pages/archive-trend-videos/ArchiveTrendVidoes";
import ArchiveSavedVideosDetail from "./pages/archive-saved-videos-detail/ArchiveSavedVideosDetail";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/archive" element={<ArchiveMain />}></Route>
        <Route
          path="/archive/detail/:advertiseId"
          element={<ArchiveDetail />}
        ></Route>
        <Route
          path="/archive/trendVideos"
          element={<ArchiveTrendVideos />}
        ></Route>
        <Route
          path="/archive/popularVideos"
          element={<ArchivePopularVideos />}
        ></Route>
        <Route
          path="/archive/savedVideos"
          element={<ArchiveSavedVideos />}
        ></Route>
        <Route
          path="/archive/savedVideos/inFolder"
          element={<ArchiveSavedVideosDetail />}
        ></Route>
        <Route
          path="/archive/totalVideos"
          element={<ArchiveTotalVideos />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
