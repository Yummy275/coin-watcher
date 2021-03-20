import './App.css';
import getApiData from './data/api-getter';

function App() {
    getApiData();
    return <div className="text-red-300">Hello</div>;
}

export default App;
