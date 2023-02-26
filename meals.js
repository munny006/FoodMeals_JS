const loadMeals = (searchText)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>displayMeals(data.meals));
}
const displayMeals = meals =>{
    const mealsConainer = document.getElementById('meals-conainer');
    mealsConainer.innerHTML = '';
   meals.forEach(meal => {
    console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML= `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text lh-sm">${meal.strInstructions}</p>
      <button onclick = "loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetails">
      Read More
    </button>
    </div>
  </div>
    `
    mealsConainer.appendChild(mealDiv)

   });
    
}
const searchMeals = () =>{
const searchText = document.getElementById('search-field').value;
//search meals
console.log(searchText);
loadMeals(searchText)
}
const loadMealDetail = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  
  fetch(url)
  .then(res => res.json())
  .then(data=>displayMealsDetails(data.meals[0]))
  // .catch(error => {
  //   console.log(error)
  // });
}

// const loadMealDetail2 = async(idMeal) =>{
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   displayMealsDetails(data.meals[0])


// }
const displayMealsDetails = meal =>{
  document.getElementById('mealsDetailsLabel').innerText = meal.strMeal;
  const mealDetails = document.getElementById('mealsDetailsBody');
  mealDetails.innerHTML = `<img src="${meal.strMealThumb}"class="img-fluid">`
}
loadMeals('fish');