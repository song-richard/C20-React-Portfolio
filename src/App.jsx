import HeaderCard from "./components/header/HeaderCard";
import ContentCard from "./components/content/ContentCard";
import FooterCard from "./components/footer/FooterCard";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-4 px-6">
          <HeaderCard />
        </header>
        
        {/* Content */}
        <main className="flex-grow container mx-auto px-4">
          <ContentCard className="mt-8" />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-4 px-6">
          <FooterCard />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;