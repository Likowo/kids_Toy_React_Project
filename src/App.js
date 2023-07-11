import logo from './logo.svg';
import './App.css';
import item from './models/item';
import Item from './components/Item';

//Establish state ( state controls data from models folder)

const state = {
  item
}

function App() {
  return ( // insert state in to each component
    <div className="App">
      < Item itemInfor ={state.item[0]}/>
      < Item itemInfor ={state.item[1]}/>
      < Item itemInfor ={state.item[2]}/>
         
    </div>
  );
}

export default App;
