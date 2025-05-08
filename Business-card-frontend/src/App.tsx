import { useState } from "react";
import BasicCard from "./components/BasicCard";
import Profile from "./components/Profile";
import Container from "./components/Container";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenCards = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <Container>
      <BasicCard handleOpenCards={handleOpenCards} />
      <Profile isOpen={isOpen} />
    </Container>
  );
}

export default App;
