import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './screens/HomePage';
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
        <main className='py-4'>
          <Container>
            <Route path='/' component={HomePage} exact />
            <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;