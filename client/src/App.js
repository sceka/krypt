import './App.css';
import {Navbar, Welcome, Footer, Services, Loader, Transactions} from "./components"

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
        
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
