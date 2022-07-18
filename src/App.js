
import './App.css';
import ChangeItUp from './components/ChangeItUp';
import Color from './components/Color';
import CounterState from './components/CounterState';
import Eventss from './components/Eventss';
import Login from './components/Login';
import MultiButton from './components/MultiButton';

function App() {
  return (
    <div className="App">
      <Color />
      <Login/>
      <Eventss />
      <MultiButton />
      <ChangeItUp />
      <CounterState/>
    </div>
  );
}

export default App;
