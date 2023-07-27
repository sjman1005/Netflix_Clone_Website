import BannerImage from "./components/BannerImage/BannerImage";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import RowPost from "./components/RowPost/RowPost";
import {action,originals,comedy, Horror, Romance, Documentries} from './components/urls'

function App() {
  return (
    <div>
      <NavBar/>
      <BannerImage/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title = "Action" isSmall />
      <RowPost url={comedy} title = "Comedy" isSmall />
      <RowPost url={Horror} title = "Horror" isSmall />
      <RowPost url={Romance} title = "Romance" isSmall />
      <RowPost url={Documentries} title = "Documentry" isSmall />

    </div>
    
  );
}

export default App;
