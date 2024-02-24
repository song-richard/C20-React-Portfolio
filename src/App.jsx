import ContentCard from "./components/content/ContentCard";
import HeaderCard from "./components/header/HeaderCard";
import Navbar from "./components/header/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ContentCard />
      </BrowserRouter>
    </>
  )
}

export default App
