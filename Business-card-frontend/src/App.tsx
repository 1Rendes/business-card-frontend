import { useState, JSX } from "react";
import { Navigation, type NavigationPage } from "./components/Navigation";
import VisitenkartePage from "./pages/VisitenkartePage";
import LebenslaufPage from "./pages/LebenslaufPage";
import AiChatPage from "./pages/AiChatPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState<NavigationPage>("visitenkarte");

  const handlePageChange = (page: NavigationPage): void => {
    setActivePage(page);
  };

  const renderPageContent = (): JSX.Element => {
    switch (activePage) {
      case "visitenkarte":
        return <VisitenkartePage />;
      case "lebenslauf":
        return <LebenslaufPage />;
      case "ai-chat":
        return <AiChatPage />;
      case "impressum":
        return <ImpressumPage />;
      case "datenschutz":
        return <DatenschutzPage />;
      default:
        return <VisitenkartePage />;
    }
  };

  return (
    <>
      <Navigation activePage={activePage} onPageChange={handlePageChange} />
      {renderPageContent()}
      <Footer onPageChange={handlePageChange} activePage={activePage} />
    </>
  );
}

export default App;
