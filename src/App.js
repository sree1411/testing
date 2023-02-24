import React from 'react';
import Topbar1 from './components/layouts/Topbar1';
import Showbars from './components/layouts/Showbars';
import CreatingGrid from './components/layouts/CreatingGrid';
import ServicesPage from './components/layouts/ServicesPage';
import OurProjects from './components/layouts/OurProjects';
import ClinentsPage from './components/layouts/Clientspage';
import TeamofthePage from './components/TeamofthePage';
 

export default function App() {
  return (
    <div>
      
      
      
    <Topbar1/>
      
    <Showbars/>

    <ServicesPage/>
    <OurProjects/>
    <CreatingGrid/>
    <TeamofthePage/>
    <ClinentsPage/>
     
    
    
    </div>
  )
}
