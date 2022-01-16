import './App.css';
import GetData from './components/GetData';
import SendData from './components/SendData';
import { getList } from './components/GetData';

function App() {
  return (
    <div className="App">
      <h2>SMART PROTECTION</h2>
      <SendData />
      <h2>---------------------</h2>
      <GetData />
    </div>
  );
}

export default App;