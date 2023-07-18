import React from 'react'
import './App.css'
const Products = ({ data }) => {
  return (
    <div className="row" style={{
      backgroundImage: `url('https://img.freepik.com/free-vector/realistic-wood-texture-background_87521-3153.jpg')`
    }}>
      {
        data.map(data =>
          <div className='col-md-4'>
            <div class="card">
              <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
              <div class="card-body" style={{ fontFamily: 'cursive' }}>
                <h4 class="card-title" >{data.recipe.label}</h4>
                <p class="card-text" >Cuisine Type : {data.recipe.cuisineType}</p>
                <p class="card-text" >DishType : {data.recipe.dishType}</p>
                <input type="submit" className='btn btn-primary' value="Order" onClick={() => alert("Order placed successfully.")} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Products