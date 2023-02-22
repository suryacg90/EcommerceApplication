import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
     <ParentComponent isNextPage = {false}/>
    </div>
  );
}

export default App;
