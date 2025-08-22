import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { PlaygroundList } from "../pages/PlaygroundList";
import { SuggestedPage } from "../pages/SuggestedPage";
import { PageNotFound } from "../pages/PageNotFound";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<PlaygroundList {...props} />} />

      <Route path="/playgrounds" element={<PlaygroundList {...props} />} />
      <Route path="/about" element={<AboutPage {...props} />} />
      <Route path="/suggested" element={<SuggestedPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
