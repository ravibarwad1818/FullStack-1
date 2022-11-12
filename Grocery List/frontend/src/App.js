import './App.css';
import Navbar from './components/Navbar'
import {useEffect, useState} from 'react';
import moment from 'moment';

function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/items")
    .then((response)=>response.json())
    .then((items)=> {
      setItems(items);
    });
  }, []);
  
  const addItem = () => {
		const newItem = {
			groceryItem: input,
			isSelected: false,
		};

		const newItems = [...items, newItem];
		setItems(newItems);
		setInput('');
	};

  const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	};

  const deleteItem = (id) => {
    const newItems = [...items].filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <div><Navbar/>
    <div className='app-background'>
    <div><h1>Plan For the month of <b>{moment().format("MMM Do YY")}</b></h1>
    <div className='main-container'>
    <div className='add-item-box'>
			<input className='add-item-input' placeholder='Add an item...' value={input} onChange={(event) => setInput(event.target.value)}/>
			<span className='fas fa-plus' onClick={() => addItem()}></span>
		</div>
    <div className='item-list'>
    {items.map((item, index)=>
      <div className='item-container'>
      <div className='item-name' >
      {item.isSelected ? (
        <>
          <span className='completed'>{item.groceryItem}</span>
        </>
      ) : (
        <>
          <span>{item.groceryItem}</span>
        </>
      )}
      </div>
      <div>
			<button onClick={() => toggleComplete(index)}>Purchased</button>
			<button onClick={() => deleteItem(item.id)}><span className='fas fa-xmark'></span></button>
			</div>
      </div>
      )
    }
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;