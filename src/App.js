import './App.css';
import { Header } from "./components/Header";

import { Footer } from "./components/Footer";
import { CardsList } from "./components/CardsList";

function App() {
  return (
    <div className="App-container">
      <Header />
      <CardsList />
      <Footer />
      
    </div>
  );
}

export default App;
