let recipe

let pesquisa = () => {

   $.getJSON("https://www.themealdb.com/api/json/v1/1/random.php",function(data){
      console.log(data["meals"][0]["idMeal"])
     recipe = data["meals"]
   })
}

let escreve = () =>{
   let recipeName = document.getElementById("recipeName")
   let img = document.getElementById("image")
   let instructions = document.getElementById("instructions")
   let category = document.getElementById("category")
   let area = document.getElementById("area")
   let ingredients = document.getElementById("ingredients")
   let video = document.getElementById("video")

   recipeName.innerHTML = ""
   img.src = ""
   instructions.innerHTML = ""
   category.innerHTML = "<strong>Category:</strong>"
   area.innerHTML = "<strong>Area:</strong>"
   ingredients.innerHTML = "<h2>Ingredients</h2>"
   video.innerHTML = "<h2>Video Recipe</h2>"
   video.src = "" 

   recipe = recipe[0]
   console.log(recipe)

   ingredientes()
   
   recipeName.appendChild(document.createTextNode(recipe["strMeal"]))
   img.src = recipe["strMealThumb"]
   instructions.appendChild(document.createTextNode(recipe["strInstructions"]))
   category.appendChild(document.createTextNode(recipe["strCategory"]))
   area.appendChild(document.createTextNode(recipe["strArea"]))
   video.src = recipe["strYoutube"].replace("watch?v=", "embed/")
}

let gera = () => {
   escreve()
   pesquisa()
}

let ingredientes = () =>{
   let ingredient = "strIngredient"
   let measure = "strMeasure"
   let item = ""
   let ul = document.getElementById("ingredients")
   for(let i = 1; i <=20;i++){
      ingredient+=i
      measure+=i
      if(recipe[ingredient]=="" || recipe[ingredient] == null){
         break
      }

      item += recipe[ingredient]+" - "+recipe[measure]
      let li = document.createElement("li")
      li.innerHTML = item 
      ul.appendChild(li)
   
      ingredient = "strIngredient"
      measure = "strMeasure"
      item = ""
   }

}


//let strIngredient = "strIngredient"
//   strIngredient+=1
//  console.log(recipe[strIngredient])