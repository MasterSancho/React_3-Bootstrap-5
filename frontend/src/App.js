import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Showcase from './components/Showcase';

const App = () => {
 return (
  <Router>
   <Header />
   <main className='bg-primary'>
    <Showcase />
   </main>
  </Router>
 );
};

export default App;
