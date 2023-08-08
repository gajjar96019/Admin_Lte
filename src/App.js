import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import Cards from './Cards';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Sidebar />
      {/* <Cards /> */}
    </div>
  );
}

export default App;
