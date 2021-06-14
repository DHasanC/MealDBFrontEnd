const listMeals = document.getElementById('listMeals');
const searchBar = document.getElementById('searchBar');
let meals = []
let temp = '';

searchBar.addEventListener('keyup', (e) => {
  temp = e.target.value.toLowerCase();
  loadmeals();
  displayMeals(meals.meals);
});
const loadmeals = async () => {

  try {
    
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + temp);
    meals = await res.json();
    
    //if(meals.meals != null) displayMeals(meals.meals);
  } catch (err) {
    console.error(err);
  }
};

const displayMeals = (meals) => {
  const htmlString = meals
      .map((meal) => {
          return `
          <li class="meal">
              <h2>${meal.strMeal}</h2>
              <a href = "mealDetails.html"> See More</a>
              <img src="${meal.strMealThumb}"></img>
          </li>
      `;
      })
      .join('');
  listMeals.innerHTML = htmlString;
};

//loadmeals();