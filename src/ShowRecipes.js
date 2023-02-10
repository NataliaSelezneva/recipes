function ShowRecipes({label, kitchen, image, calories, ingredients}){
    return(
            <div className="style-recipes">
                <p className="text name-recipe">{label}</p>
                <p className="text kitchen">{kitchen} food dish</p>
                <img className="style-image" src={image} alt="food" width='280px'/>
                <p className="text">{calories.toFixed()} calories</p>
            

            <ul>
            {ingredients.map((everyIngredient, i) =>(
            <li key={i}>{everyIngredient}</li>
            ))}
            </ul>
            </div>
    )
}
export default ShowRecipes;