import './App.css';
import { useEffect, useState } from 'react';
import video from './video.mp4';
import ShowRecipes from './ShowRecipes';

function App() {

  const MY_ID = '7cc22c23';
  const MY_KEY = 'c82c9e2c3bc96335f38f35200b0a2a73';

  const [recipesSearch, setRecipesSearch] = useState('');
  const [recipesWebsite, setRecipesWebsite] = useState([]);
  const [food, setFood] = useState('fish');

  const listProducts = (e) =>{
    setRecipesSearch(e.target.value);
  }

  const finalSearch = (e) =>{
    e.preventDefault();
    setFood(recipesSearch);
  }

  useEffect(() => {
    const getRecipe = async () => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      setRecipesWebsite(data.hits);
      console.log(data);
    }
    getRecipe()
  }, [food]);


  return (
    <div>
        <div>
          <video autoPlay muted loop>
            <source src={video} type='video/mp4'/>
          </video>
          <div className='header'>
          <h1>Let`s cook?</h1>
          <p>What do you have in the fridge?</p>
          </div>
        </div>

          <form className='block-search' onSubmit={finalSearch}>
          <input className='block-input' placeholder='list products' onChange={listProducts} value={recipesSearch}></input>
          

        <div className='block-button'>
          <button className='style-button'>Search</button>
        </div>
        </form>

        <div className="container-recipes">
        {recipesWebsite.map((element) =>(
            <ShowRecipes label={element.recipe.label} kitchen={element.recipe.cuisineType} image={element.recipe.image} calories={element.recipe.calories} 
            ingredients={element.recipe.ingredientLines}/>
        ))}
        </div>
    </div>
  );
}

export default App;
