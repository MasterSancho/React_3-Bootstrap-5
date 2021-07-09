import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Newsletter from './components/Newsletter';
import Boxes from './components/Boxes';

const App = () => {
 return (
  <Router>
   <Header className='text-secondary' />
   <main className='bg-dark text-light'>
    <Showcase />
    <Newsletter />
    <Boxes />
   </main>
  </Router>
 );
};

export default App;
