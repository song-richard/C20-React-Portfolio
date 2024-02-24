import HeaderCard from "./components/header/HeaderCard";
import ContentCard from "./components/content/ContentCard";
import FooterCard from "./components/footer/FooterCard";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderCard />
        <ContentCard />
        <FooterCard />
      </BrowserRouter>
    </>
  )
}

export default App
