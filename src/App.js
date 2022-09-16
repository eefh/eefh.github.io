import './App.css';
import Header from './Header';
import PageContent from './PageContent';
import Welcome from './Welcome';
function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <PageContent/>
    </div>
  );
}

export default App;
