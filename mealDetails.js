
const MealDetails = document.getElementById('MealDetails');

const loadmeals = async () => {

    try {

        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
        meals = await res.json();
        
        displayMeals(meals.meals);
    } catch (err) {
      console.error(err);
    }
  };

  const displayMeals = (meals) => {
    const htmlString = meals
        .map((meal) => {
            return `
        
                <h2>${meal.strMeal}</h2>
                <h2> Category: ${meal.strCategory}</h2>
                <img src="${meal.strMealThumb}"></img>
                <p>Cooking Instructions: ${meal.strInstructions}</p>
                <p>Ingredients: ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6} </p>
                <a href = ${meal.strYoutube}> Video</a>
            
        `;
        })
        .join('');
    MealDetails.innerHTML = htmlString;
  };
  
  loadmeals();