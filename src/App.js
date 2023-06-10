import './App.css';
import Assessments, { Assessment2 } from './components/Assessments/Assessments'
import {AccountProvider} from './context/account.context'

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <Assessments />
        <Assessment2 />
      </AccountProvider>
    </div>
  );
}

export default App;
