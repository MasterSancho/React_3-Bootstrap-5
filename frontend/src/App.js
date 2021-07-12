import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Newsletter from './components/Newsletter';
import Boxes from './components/Boxes';
import LearnSections from './components/LearnSections';
import QuestionAccordion from './components/QuestionAccordion';
import Instructors from './components/Instructors';
import ContactMap from './components/ContactMap';

const App = () => {
 return (
  <Router>
   <Header className='text-secondary' />
   <main className='bg-dark text-light'>
    <Showcase />
    <Newsletter />
    <Boxes />
    <LearnSections />
    <QuestionAccordion />
    <Instructors />
    <ContactMap />
   </main>
  </Router>
 );
};

export default App;
