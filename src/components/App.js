import '../App.scss';
import NavBarContainer from './NavBarContainer';
import Header from './Header';
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="renderedContainer">
      <NavBarContainer />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
