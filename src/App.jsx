// APP.jsx
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function App() {
    return (
      <>
       <Header />
       <main>
        <Outlet />
       </main>
       <Footer />
      </>
    );
  }