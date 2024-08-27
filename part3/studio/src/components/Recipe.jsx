import { useState } from 'react';

[
   {
     "name": "Stovetop Mac and Cheese",
     "author": "Stephanie Melchione",
     "description": "This Creamy Stovetop Mac and Cheese is the BEST 30-minute meal for a busy week. Your family will love it every time!",
     "website": "https://thecozycook.com/stovetop-mac-and-cheese/",
     "recipeImage": "https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg",
     "authorImage": "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg",
     "ingredients": [
       "uncooked macaroni",
       "butter",
       "flour",
       "heavy cream",
       "milk"
     ]
   }
 ]
 


const RecipeAuthor = () => {
   let authorLink = "https://thecozycook.com/stovetop-mac-and-cheese/";
   let authorPhoto = "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg";
   let authorName = "Stephanie Melchione";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", width: 300}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["uncooked macaroni",
       "butter",
       "flour",
       "heavy cream",
       "milk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg" alt="food" className="imageUpdates" style={{objectFit: "contain", borderRadius: "50%", width: 300}}/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
