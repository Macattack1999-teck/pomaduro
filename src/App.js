import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import EverythingProvider from './providers/EverythingProvider';

function App() {
  return (
    <div className="App">
      <EverythingProvider>
        <Container />
      </EverythingProvider>
    </div>
  );
}

export default App;
