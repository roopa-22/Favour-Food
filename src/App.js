import React, { useState } from 'react'
import Products from './Products'
import "./App.css";
const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "fa18867c";
  const YOUR_APP_KEY = "7fba86ef54e035aa847e60ee70bb609e";
  const submitHandler = e => {
    e.preventDefault();
    var x = document.forms["myForm"]["fooditem"].value;
    if (x == "") {
      alert("Food item must be filled out");
      return false;
    }
    else {
      fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=42&calories=591-722&health=alcohol-free`).then(
        response => response.json()
      ).then(
        data => setData(data.hits)
      )
    }
  }
  return (
    <div style={{
      backgroundImage: `url('https://wallpaperaccess.com/full/6221139.jpg')`,
      height: '100vh'
    }}>
      <div className="App">
        <h1 className="title">Favour Food App</h1>
        <form name="myForm" onSubmit={submitHandler}>
          <input type="text" className="input-box" name="fooditem" autoFocus placeholder='search your food item'
            value={search} onChange={(e) => setSearch(e.target.value)} />
          <br /><br />
          <input type="Submit" className='btn btn-primary' value="Search" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </div>
    </div>
  );
}

export default App;
