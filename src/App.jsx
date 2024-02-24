import ContentCard from "./components/content/ContentCard";
import HeaderCard from "./components/header/HeaderCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderCard />
        <ContentCard />
      </BrowserRouter>
    </>
  )
}

export default App
