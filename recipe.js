// Object to store recipes and their details
const recipeDetails = {
    // Indian Cuisine
    "Butter Chicken": {
        ingredients: ["Chicken (500g)", "Butter (3 tbsp)", "Tomato (2)", "Cream (100ml)", "Garlic (2 cloves)", "Ginger (1 inch)", "Garam Masala (1 tsp)", "Salt (to taste)"],
        instructions: "1. Heat butter in a pan. 2. Add garlic and ginger, cook for a minute. 3. Add chicken and cook until golden brown. 4. Add tomatoes, spices, and cook for 5 minutes. 5. Add cream and simmer for 10 minutes. Serve hot with rice or naan."
    },
    "Paneer Butter Masala": {
        ingredients: ["Paneer (200g)", "Butter (3 tbsp)", "Tomato (2)", "Cream (100ml)", "Onion (1)", "Garlic (2 cloves)", "Garam Masala (1 tsp)", "Coriander Powder (1 tsp)", "Salt (to taste)"],
        instructions: "1. Heat butter in a pan. 2. Add chopped onions and garlic, cook till golden. 3. Add tomatoes and cook for 5 minutes. 4. Add spices and cook for 2 minutes. 5. Add paneer cubes and cream, cook for 10 minutes. Serve hot with rice or naan."
    },
    "Biryani": {
        ingredients: ["Rice (1 cup)", "Chicken (500g)", "Yogurt (100g)", "Onion (2)", "Tomato (1)", "Garam Masala (1 tsp)", "Saffron (a pinch)", "Mint Leaves (a handful)", "Ginger Garlic Paste (1 tbsp)"],
        instructions: "1. Cook rice with saffron and set aside. 2. Cook chicken with yogurt and spices until tender. 3. Fry onions till crispy. 4. Layer cooked rice and chicken, and top with fried onions and mint leaves. 5. Cover and cook for 20 minutes on low heat. Serve hot."
    },
    "Chole Bhature": {
        ingredients: ["Chickpeas (1 cup)", "Flour (2 cups)", "Baking Powder (1 tsp)", "Salt (to taste)", "Onion (1)", "Tomato (1)", "Garlic (2 cloves)", "Ginger (1 inch)", "Chili Powder (1 tsp)", "Cumin (1 tsp)"],
        instructions: "1. Soak chickpeas overnight, cook until soft. 2. In a pan, sauté onions, garlic, and ginger. 3. Add tomatoes, spices, and cook. 4. Mix cooked chickpeas, cook for 5 minutes. 5. For the bhature, knead dough and fry until golden. Serve hot."
    },
    "Samosa": {
        ingredients: ["Potatoes (2)", "Peas (50g)", "Onion (1)", "Garlic (2 cloves)", "Cumin Seeds (1 tsp)", "Coriander Powder (1 tsp)", "Turmeric (1/2 tsp)", "Chili Powder (1 tsp)", "Flour (1 cup)", "Salt (to taste)"],
        instructions: "1. Boil and mash potatoes. 2. Sauté onions, garlic, and spices. 3. Add peas and mashed potatoes, cook for 5 minutes. 4. Make dough, fill with stuffing, shape into triangles, and fry until golden brown."
    },
    "Aloo Paratha": {
        ingredients: ["Potatoes (2)", "Flour (2 cups)", "Cumin (1 tsp)", "Coriander (1 tsp)", "Chili Powder (1 tsp)", "Salt (to taste)", "Ghee (for cooking)"],
        instructions: "1. Boil and mash potatoes. 2. Mix flour, spices, and water to make dough. 3. Stuff dough with mashed potatoes and roll into flatbreads. 4. Cook on a griddle with ghee until golden brown."
    },
    "Dosa": {
        ingredients: ["Rice (1 cup)", "Urad Dal (1/4 cup)", "Salt (to taste)", "Water (for batter)"],
        instructions: "1. Soak rice and dal overnight. 2. Grind into a smooth batter with water. 3. Let the batter ferment for 8-10 hours. 4. Spread the batter on a hot griddle and cook until crispy. Serve with chutney."
    },

    // Western Cuisine
    "Spaghetti Bolognese": {
        ingredients: ["Spaghetti (200g)", "Ground Beef (250g)", "Tomato Sauce (200ml)", "Onion (1)", "Garlic (2 cloves)", "Olive Oil (2 tbsp)", "Basil (1 tsp)", "Salt (to taste)", "Parmesan Cheese (optional)"],
        instructions: "1. Cook spaghetti as per the package instructions. 2. In a pan, sauté garlic and onions in olive oil. 3. Add ground beef and cook until browned. 4. Add tomato sauce, salt, and basil. Let it simmer for 10 minutes. 5. Serve the sauce over spaghetti, topped with parmesan cheese."
    },
    "Pizza": {
        ingredients: ["Pizza Dough (1)", "Tomato Sauce (100ml)", "Mozzarella Cheese (150g)", "Pepperoni (100g)", "Bell Pepper (1)", "Olives (50g)", "Olive Oil (1 tbsp)", "Basil (1 tsp)"],
        instructions: "1. Preheat the oven to 220°C. 2. Roll out the pizza dough. 3. Spread tomato sauce on the dough, add cheese and toppings. 4. Bake for 10-12 minutes or until the crust is golden brown."
    },
    "Burger": {
        ingredients: ["Ground Beef (200g)", "Burger Buns (2)", "Lettuce (1 leaf)", "Tomato (1 slice)", "Cheese Slice (1)", "Onion (1)", "Ketchup (to taste)", "Mustard (to taste)", "Salt (to taste)", "Pepper (to taste)"],
        instructions: "1. Shape ground beef into patties and season with salt and pepper. 2. Cook patties in a pan or grill. 3. Toast the buns. 4. Assemble the burger with lettuce, tomato, cheese, patty, and condiments."
    },
    "Mac and Cheese": {
        ingredients: ["Macaroni (200g)", "Cheddar Cheese (200g)", "Milk (1 cup)", "Butter (2 tbsp)", "Flour (1 tbsp)", "Salt (to taste)", "Pepper (to taste)", "Breadcrumbs (optional)"],
        instructions: "1. Cook macaroni as per package instructions. 2. Make a roux with butter and flour, then add milk to make a sauce. 3. Stir in cheese, salt, and pepper. 4. Mix with cooked macaroni and top with breadcrumbs before baking."
    },
    "Caesar Salad": {
        ingredients: ["Lettuce (1 head)", "Caesar Dressing (50ml)", "Croutons (50g)", "Parmesan Cheese (50g)", "Chicken (grilled, 200g)", "Lemon (for garnish)"],
        instructions: "1. Tear lettuce into pieces and toss with Caesar dressing. 2. Add croutons and grilled chicken slices. 3. Sprinkle parmesan cheese on top and serve with a lemon wedge."
    },
    "Steak": {
        ingredients: ["Steak (200g)", "Salt (to taste)", "Pepper (to taste)", "Olive Oil (1 tbsp)", "Butter (2 tbsp)", "Garlic (2 cloves)", "Rosemary (1 sprig)"],
        instructions: "1. Season steak with salt and pepper. 2. Heat olive oil in a pan and cook steak to desired doneness. 3. Add butter, garlic, and rosemary to the pan, baste the steak. Serve hot."
    },
    "Apple Pie": {
        ingredients: ["Apples (4)", "Sugar (1/2 cup)", "Cinnamon (1 tsp)", "Butter (2 tbsp)", "Pie Crust (2, premade or homemade)", "Egg (1, for egg wash)"],
        instructions: "1. Preheat oven to 180°C. 2. Slice apples and mix with sugar and cinnamon. 3. Roll out pie crust and fill with apple mixture. 4. Top with second crust, seal edges, and brush with egg wash. 5. Bake for 45 minutes until golden."
    },

    // Asian Cuisine
    "Sushi": {
        ingredients: ["Sushi Rice (1 cup)", "Nori Sheets (5)", "Salmon (100g)", "Cucumber (1)", "Soy Sauce (to taste)", "Wasabi (optional)"],
        instructions: "1. Cook sushi rice and let it cool. 2. Place a nori sheet on a bamboo mat, spread rice evenly, and add salmon and cucumber. 3. Roll it tightly, slice, and serve with soy sauce and wasabi."
    },
    "Pad Thai": {
        ingredients: ["Rice Noodles (200g)", "Shrimp (150g)", "Egg (1)", "Bean Sprouts (50g)", "Peanut (20g)", "Lime (1)", "Fish Sauce (2 tbsp)", "Chili (1)"],
        instructions: "1. Cook rice noodles as per the package instructions. 2. In a wok, sauté shrimp and egg. 3. Add cooked noodles, bean sprouts, fish sauce, and chili. 4. Toss everything together, sprinkle peanuts, and serve with a lime wedge."
    },
    "Ramen": {
        ingredients: ["Ramen Noodles (1 packet)", "Broth (500ml, chicken or vegetable)", "Soy Sauce (2 tbsp)", "Egg (1, boiled)", "Green Onions (2, chopped)", "Bok Choy (1 bunch)", "Mushrooms (100g)"],
        instructions: "1. Cook ramen noodles according to the package instructions. 2. In a pot, heat broth with soy sauce. 3. Add mushrooms and bok choy to the broth and cook until tender. 4. Serve ramen topped with boiled egg and green onions."
    },
    "Dim Sum": {
        ingredients: ["Dumpling Wrappers (10)", "Ground Pork (200g)", "Shrimp (100g, chopped)", "Ginger (1 tsp)", "Soy Sauce (1 tbsp)", "Garlic (2 cloves)", "Green Onion (1, chopped)"],
        instructions: "1. Mix ground pork, shrimp, garlic, ginger, soy sauce, and green onions. 2. Place a spoonful of mixture in each wrapper and fold into dumplings. 3. Steam dumplings for 10-12 minutes. Serve with soy sauce."
    },
    "Tom Yum Soup": {
        ingredients: ["Shrimp (200g)", "Lemongrass (2 stalks)", "Lime Leaves (4)", "Chili (2, crushed)", "Mushrooms (100g)", "Fish Sauce (2 tbsp)", "Lime (1)", "Coriander (for garnish)"],
        instructions: "1. Boil water with lemongrass, lime leaves, and chili. 2. Add shrimp and mushrooms, cook for 5 minutes. 3. Add fish sauce and lime juice, simmer for 5 more minutes. 4. Garnish with coriander and serve."
    },
  "Fried Rice": {
    ingredients: ["Rice (2 cups, cooked and cooled)", "Egg (1, beaten)", "Carrot (1, diced)", "Green Peas (50g)", "Green Onions (2, chopped)", "Soy Sauce (2 tbsp)", "Garlic (2 cloves, minced)", "Oil (2 tbsp)", "Salt (to taste)", "Pepper (to taste)"],
    instructions: "1. Heat oil in a wok or large pan. 2. Add garlic and sauté for a minute. 3. Add carrots, peas, and cook for 2-3 minutes. 4. Push the vegetables to the side and scramble the egg in the pan. 5. Add cooked rice, soy sauce, salt, and pepper. Stir well and cook for 5 minutes. 6. Garnish with green onions and serve hot."
},
  "Spring Rolls": {
    ingredients: ["Rice Paper (10 sheets)", "Shrimp (200g, peeled and cooked)", "Lettuce (1 leaf, shredded)", "Carrot (1, julienned)", "Cucumber (1, julienned)", "Mint Leaves (a handful)", "Coriander Leaves (a handful)", "Soy Sauce (for dipping)", "Rice Vermicelli (50g, optional)"],
    instructions: "1. Soak rice paper in warm water until soft. 2. Lay the paper flat and add a few shrimp, lettuce, carrot, cucumber, mint, and coriander leaves. 3. Optionally, add some cooked rice vermicelli. 4. Fold the sides of the rice paper and roll tightly. 5. Serve with soy sauce or peanut dipping sauce."
},


};

// Function to show recipe details
// Function to show recipe details
function showRecipe(recipeName) {
    const recipe = recipeDetails[recipeName];

    if (recipe) {
        // Set the background image for the recipe details page
        let backgroundImageUrl = '';
        if (recipeName === 'Butter Chicken') {
            // Updated image link for Butter Chicken
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/photo-indian-butter-chicken-black-bowl-black-background-generated-by-ai_911060-5023.jpg';
        } else if (recipeName === 'Paneer Butter Masala') {
            // Updated image link for Paneer Butter Masala
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/indian-delight-vertical-shot-paneer-butter-masala-black-surface-tempting-flavorful_896558-6004.jpg';
        } else if (recipeName === 'Butter Masala') {
            backgroundImageUrl = 'https://platetopalateblog.com/wp-content/uploads/2020/07/20200506_131905-scaled.jpg';
        } else if (recipeName === 'Biryani') {
            // Updated image link for Biryani
            backgroundImageUrl = 'https://www.shutterstock.com/image-photo/chicken-biryani-shot-on-black-600nw-1836976393.jpg';
        } else if (recipeName === 'Chole Bhature') {
            // Updated image link for Chole Bhature
            backgroundImageUrl = 'https://www.shutterstock.com/image-photo/indian-breakfast-_poori-chickpea-chana-600nw-1949066713.jpg';
        } else if (recipeName === 'Samosa') {
            // Updated image link for Samosa
            backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fw800/background/20231025/pngtree-scrumptious-homemade-fried-samosa-on-a-textured-dark-background-image_13706545.png';
        } else if (recipeName === 'Aloo Paratha') {
            // Updated image link for Aloo Paratha
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/food-photo-paratha-bread-dish-white-plate-with-sauce-leaves-dark-background-detailed_271410-178.jpg';
        } else if (recipeName === 'Dosa') {
            // Updated image link for Dosa
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/tasty-masala-dosa-with-sauces-isolated-white-background_787273-4720.jpg';
        } else if (recipeName === 'Spaghetti Bolognese') {
            // Updated image link for Spaghetti Bolognese
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/spaghetti-bolognese-studio-food-photo-dark-black-background-generative-ai_74760-2102.jpg';
        } else if (recipeName === 'Pizza') {
            // Updated image link for Pizza
            backgroundImageUrl = 'https://as1.ftcdn.net/v2/jpg/05/03/80/42/1000_F_503804286_chQDF1748yi6gdWIzyLK1HO1LVxkMY1u.jpg';
        } else if (recipeName === 'Burger') {
            // Updated image link for Burger
            backgroundImageUrl = 'https://static.vecteezy.com/system/resources/previews/027/671/338/large_2x/tasty-burger-on-the-wooden-board-with-dark-lighting-and-black-background-food-and-delivery-concept-generative-ai-free-photo.jpg';
        } else if (recipeName === 'Mac and Cheese') {
            // Updated image link for Mac and Cheese
            backgroundImageUrl = 'https://png.pngtree.com/background/20230606/original/pngtree-mac-picture-image_2879461.jpg';
        } else if (recipeName === 'Caesar Salad') {
            // Updated image link for Caesar Salad
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/caesar-salad-top-view-black-table-black-table-background_158114-89.jpg';
        } else if (recipeName === 'Steak') {
            // Updated image link for Steak
            backgroundImageUrl = 'https://media.istockphoto.com/id/1252839263/photo/grilled-beef-steak-in-frying-pan-on-black-background.jpg?s=612x612&w=0&k=20&c=lJZ3IusyP0POkIjtfdL-9JehlVztJF9DMV9rsh50SFY=';
        } else if (recipeName === 'Apple Pie') {
            // Updated image link for Apple Pie
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/photo-apple-pie-black-background-food-photography_131346-1448.jpg';
        } else if (recipeName === 'Sushi') {
            // Updated image link for Sushi
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/japanese-sushi-dark-background_255498-1277.jpg';
        } else if (recipeName === 'Pad Thai') {
            // Updated image link for Pad Thai
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/pad-thai-with-shrimp-dark-stone-background-top-view-copy-space_233226-739.jpg';
        } else if (recipeName === 'Ramen') {
            // Updated image link for Ramen
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/asian-ramen-noodles-dark-background-with-tea-serving-broth_872147-3022.jpg';
        } else if (recipeName === 'Dim Sum') {
            // Updated image link for Dim Sum
            backgroundImageUrl = 'https://www.shutterstock.com/image-photo/delicious-steamed-filled-baozi-bao-600nw-2326876337.jpg';
        } else if (recipeName === 'Tom Yum Soup') {
            // Updated image link for Tom Yum Soup
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/tom-yum-black-background_766625-10078.jpg';
        } else if (recipeName === 'Fried Rice') {
            // Updated image link for Fried Rice
            backgroundImageUrl = 'https://img.freepik.com/premium-photo/top-view-chinese-fried-rice-black-background-concept-chinese-cuisine-fried-rice-food-photography-black-background-top-view_864588-44056.jpg';
        } else if (recipeName === 'Spring Roll') {
            // Updated image link for Spring Roll
            backgroundImageUrl = 'https://thumbs.dreamstime.com/b/vegetable-filled-spring-rolls-soy-sauce-black-wooden-table-vegetable-filled-spring-rolls-soy-sauce-black-wooden-292659875.jpg';
        }

        // Apply the background image
        document.getElementById('recipe-details').style.backgroundImage = `url(${backgroundImageUrl})`;
        document.getElementById('recipe-details').style.backgroundSize = 'cover';
        document.getElementById('recipe-details').style.backgroundPosition = 'center';

        // Hide all sections and show the recipe details
        document.getElementById('indian-cuisine').style.display = 'none';
        document.getElementById('western-cuisine').style.display = 'none';
        document.getElementById('asian-cuisine').style.display = 'none';
        document.getElementById('recipe-details').style.display = 'block';

        // Fill in the recipe details
        document.getElementById('recipe-name').textContent = recipeName;
        document.getElementById('ingredients-list').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById('instructions').textContent = recipe.instructions;
    }
}


// Function to go back to the recipe list
function backToList() {
    document.getElementById('indian-cuisine').style.display = 'block';
    document.getElementById('western-cuisine').style.display = 'block';
    document.getElementById('asian-cuisine').style.display = 'block';
    document.getElementById('recipe-details').style.display = 'none';}    