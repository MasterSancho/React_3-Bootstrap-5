import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

const App = () => {
 return (
  <Router>
   <Header />
  </Router>
 );
};

export default App;
