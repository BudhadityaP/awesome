import Header from './components/Header'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div style={container}>
      <Header title={"Play Area"} />
      <ClickCounter name='Budha'/>
      <HoverCounter name='Budha'/>
      <div>
        <Link to="/RPSContainer">RPS</Link>
      </div>
    </div>
  );
}

const container = {
  flex:1
}

export default App;
