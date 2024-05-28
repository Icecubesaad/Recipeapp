import React, { useState } from 'react';
import { StyleSheet, View,Text,TouchableOpacity, FlatList } from 'react-native';
import { COLORS,SIZES,FONT } from '../constants';
import RecommendedCards from './cards/RecommendedCards';
const Recommendations = () => {
    const recommendedMeal = [
                {"idMeal":"52827","strMeal":"Massaman Beef curry","strDrinkAlternate":null,"strCategory":"Beef","strArea":"Thai","strInstructions":"Heat oven to 200C\/180C fan\/gas 6, then roast the peanuts on a baking tray for 5 mins until golden brown. When cool enough to handle, roughly chop. Reduce oven to 180C\/160C fan\/gas 4.\r\nHeat 2 tbsp coconut cream in a large casserole dish with a lid. Add the curry paste and fry for 1 min, then stir in the beef and fry until well coated and sealed. Stir in the rest of the coconut swith half a can of water, the potatoes, onion, lime leaves, cinnamon, tamarind, sugar, fish sauce and most of the peanuts. Bring to a simmer, then cover and cook for 2 hrs in the oven until the beef is tender.\r\nSprinkle with sliced chilli and the remaining peanuts, then serve straight from the dish with jasmine rice.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/tvttqv1504640475.jpg","strTags":"Curry","strYoutube":"https:\/\/www.youtube.com\/watch?v=mVxgZSCU9_g","strIngredient1":"Peanuts","strIngredient2":"Coconut cream","strIngredient3":"Massaman curry paste","strIngredient4":"Beef","strIngredient5":"Potatoes","strIngredient6":"Onion","strIngredient7":"Lime","strIngredient8":"Cinnamon stick","strIngredient9":"Tamarind paste","strIngredient10":"Brown sugar","strIngredient11":"Fish Sauce","strIngredient12":"chilli","strIngredient13":"Jasmine Rice","strIngredient14":null,"strIngredient15":null,"strIngredient16":null,"strIngredient17":null,"strIngredient18":null,"strIngredient19":null,"strIngredient20":null,"strMeasure1":"85g","strMeasure2":"400ml can","strMeasure3":"4 tbsp","strMeasure4":"600g stewing cut into strips","strMeasure5":"450g waxy","strMeasure6":"1 cut thin wedges","strMeasure7":"4 leaves","strMeasure8":"1","strMeasure9":"1 tbsp","strMeasure10":"1 tbsp palm or soft light","strMeasure11":"1 tbsp","strMeasure12":"1 red deseeded and finely sliced, to serve","strMeasure13":"to serve","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/420631\/beef-massaman-curry","strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null},
                {"idMeal":"52966","strMeal":"Chocolate Caramel Crispy","strDrinkAlternate":null,"strCategory":"Dessert","strArea":"British","strInstructions":"Grease and line a 20 x 20cm\/8\" x 8\" baking tin with parchment paper.\r\nPut the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water. Mixing with a whisk, melt until the mixture is smooth.\r\nPour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined. Press evenly into the prepare baking tin and set aside.\r\nMelt the milk chocolate in the microwave or over a pan of barely simmering water.\r\nSpread the melted chocolate over the rice krispie mixture and leave to set in a cool place. Once set slice into squares and serve!","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1550442508.jpg","strTags":"Sweet,Snack,Treat,Tart,Alcoholic,BBQ","strYoutube":"https:\/\/www.youtube.com\/watch?v=qsk_At_gjv0","strIngredient1":"Mars Bar","strIngredient2":"Butter","strIngredient3":"Rice Krispies","strIngredient4":"Milk Chocolate","strIngredient5":"","strIngredient6":"","strIngredient7":"","strIngredient8":"","strIngredient9":"","strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"6 chopped","strMeasure2":"150g","strMeasure3":"120g","strMeasure4":"150g","strMeasure5":" ","strMeasure6":" ","strMeasure7":" ","strMeasure8":" ","strMeasure9":" ","strMeasure10":" ","strMeasure11":" ","strMeasure12":" ","strMeasure13":" ","strMeasure14":" ","strMeasure15":" ","strMeasure16":" ","strMeasure17":" ","strMeasure18":" ","strMeasure19":" ","strMeasure20":" ","strSource":"http:\/\/www.donalskehan.com\/recipes\/chocolate-caramel-rice-crispy-treats\/","strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null},
                {"idMeal":"53074","strMeal":"Grilled eggplant with coconut milk","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"Filipino","strInstructions":".  Prepare the eggplants for grilling by pricking them all over with a fork.  This is so it won\u2019t burst during the grilling process as the natural water in it heats up.\r\n2.  Grill the eggplants, turning them over frequently to ensure even cooking.  Grill until the skins are dark brown, even black and the eggplant is soft when you touch it.\r\n3.  Soak the grilled eggplant in a bowl of water to cool it down.  Peel the skin off the eggplant.  Place the whole eggplants in a shallow dish (my mom actually cuts the eggplant into small, bite-sized pieces).\r\n 4.  In a small mixing bowl, mix together the coconut milk or cream, lemon powder, salt and hot pepper.  Mix until the lemon powder and salt dissolve.  Taste, then adjust the amount of lemon powder, salt and hot pepper to your liking.  Pour the mixture over the eggplant.  Sprinkle the green onions over the eggplant and coconut milk.  Stir gently to combine. \r\n","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/bopa2i1683209167.jpg","strTags":null,"strYoutube":"https:\/\/www.youtube.com\/watch?v=ourC5IhljB4","strIngredient1":"Egg Plants","strIngredient2":"Coconut Milk","strIngredient3":"Lemon Juice","strIngredient4":"Salt","strIngredient5":"Red Pepper Flakes","strIngredient6":"Onions","strIngredient7":"","strIngredient8":"","strIngredient9":"","strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"6","strMeasure2":"1 can ","strMeasure3":"1 tbs","strMeasure4":"1 tsp ","strMeasure5":"To taste","strMeasure6":"4 Sticks","strMeasure7":" ","strMeasure8":" ","strMeasure9":" ","strMeasure10":" ","strMeasure11":" ","strMeasure12":" ","strMeasure13":" ","strMeasure14":" ","strMeasure15":" ","strMeasure16":" ","strMeasure17":" ","strMeasure18":" ","strMeasure19":" ","strMeasure20":" ","strSource":"https:\/\/simplybakings.com\/grilled-eggplant-with-coconut-milk\/","strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null},
                {"idMeal":"53009","strMeal":"Lamb and Lemon Souvlaki","strDrinkAlternate":null,"strCategory":"Lamb","strArea":"Greek","strInstructions":"Pound the garlic with sea salt in a pestle and mortar (or use a small food processor), until the garlic forms a paste. Whisk together the oil, lemon juice, zest, dill and garlic. Mix in the lamb and combine well. Cover and marinate for at least 2 hrs or overnight in the fridge. If you\u2019re going to use bamboo skewers, soak them in cold water.\r\n\r\nIf you\u2019ve prepared the lamb the previous day, take it out of the fridge 30 mins before cooking. Thread the meat onto the soaked or metal skewers. Heat the grill to high or have a hot griddle pan or barbecue ready. Cook the skewers for 2-3 mins on each side, basting with the remaining marinade. Heat the pitta or flatbreads briefly, then stuff with the souvlaki. Add Greek salad (see 'Goes well with', right) and Tzatziki (below), if you like.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/rjhf741585564676.jpg","strTags":null,"strYoutube":"https:\/\/www.youtube.com\/watch?v=krR4rhjR75Y","strIngredient1":"Garlic","strIngredient2":"Sea Salt","strIngredient3":"Olive Oil","strIngredient4":"Lemon","strIngredient5":"Dill","strIngredient6":"Lamb Leg","strIngredient7":"Pita Bread","strIngredient8":"","strIngredient9":"","strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2 cloves","strMeasure2":"2 tsp","strMeasure3":"4 tbs","strMeasure4":"Zest and juice of 1","strMeasure5":"1 tbs","strMeasure6":"750g","strMeasure7":"To serve","strMeasure8":" ","strMeasure9":" ","strMeasure10":" ","strMeasure11":" ","strMeasure12":" ","strMeasure13":" ","strMeasure14":" ","strMeasure15":" ","strMeasure16":" ","strMeasure17":" ","strMeasure18":" ","strMeasure19":" ","strMeasure20":" ","strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/lamb-lemon-dill-souvlaki","strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null},
                {"idMeal":"52940","strMeal":"Brown Stew Chicken","strDrinkAlternate":null,"strCategory":"Chicken","strArea":"Jamaican","strInstructions":"Squeeze lime over chicken and rub well. Drain off excess lime juice.\r\nCombine tomato, scallion, onion, garlic, pepper, thyme, pimento and soy sauce in a large bowl with the chicken pieces. Cover and marinate at least one hour.\r\nHeat oil in a dutch pot or large saucepan. Shake off the seasonings as you remove each piece of chicken from the marinade. Reserve the marinade for sauce.\r\nLightly brown the chicken a few pieces at a time in very hot oil. Place browned chicken pieces on a plate to rest while you brown the remaining pieces.\r\nDrain off excess oil and return the chicken to the pan. Pour the marinade over the chicken and add the carrots. Stir and cook over medium heat for 10 minutes.\r\nMix flour and coconut milk and add to stew, stirring constantly. Turn heat down to minimum and cook another 20 minutes or until tender.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/sypxpx1515365095.jpg","strTags":"Stew","strYoutube":"https:\/\/www.youtube.com\/watch?v=_gFB1fkNhXs","strIngredient1":"Chicken","strIngredient2":"Tomato","strIngredient3":"Onions","strIngredient4":"Garlic Clove","strIngredient5":"Red Pepper","strIngredient6":"Carrots","strIngredient7":"Lime","strIngredient8":"Thyme","strIngredient9":"Allspice","strIngredient10":"Soy Sauce","strIngredient11":"Cornstarch","strIngredient12":"Coconut Milk","strIngredient13":"Vegetable Oil","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"1 whole","strMeasure2":"1 chopped","strMeasure3":"2 chopped","strMeasure4":"2 chopped","strMeasure5":"1 chopped","strMeasure6":"1 chopped","strMeasure7":"1","strMeasure8":"2 tsp","strMeasure9":"1 tsp ","strMeasure10":"2 tbs","strMeasure11":"2 tsp","strMeasure12":"2 cups ","strMeasure13":"1 tbs","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"http:\/\/www.geniuskitchen.com\/recipe\/authentic-jamaican-brown-stew-chicken-347996","strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null},
                {"idMeal":"52841","strMeal":"Creamy Tomato Soup","strDrinkAlternate":null,"strCategory":"Starter","strArea":"British","strInstructions":"Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened \u2013 about 10-15 mins. Fill the kettle and boil it.\r\nStir in the tomato pur\u00e9e, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes. Add 1 litre boiling water and bring to a simmer. Cover and simmer for 15 mins until the potato is tender, then remove the bay leaves. Pur\u00e9e with a stick blender (or ladle into a blender in batches) until very smooth. Season to taste and add a pinch more sugar if it needs it. The soup can now be cooled and chilled for up to 2 days, or frozen for up to 3 months.\r\nTo serve, reheat the soup, stirring in the milk \u2013 try not to let it boil. Serve in small bowls with cheesy sausage rolls.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/stpuws1511191310.jpg","strTags":"Baking","strYoutube":"https:\/\/www.youtube.com\/watch?v=lBhwjjUiFk4","strIngredient1":"Olive Oil","strIngredient2":"Onions","strIngredient3":"Celery","strIngredient4":"Carrots","strIngredient5":"Potatoes","strIngredient6":"Bay Leaf","strIngredient7":"Tomato Puree","strIngredient8":"Sugar","strIngredient9":"White Vinegar","strIngredient10":"Chopped Tomatoes","strIngredient11":"Passata","strIngredient12":"Vegetable Stock Cube","strIngredient13":"Whole Milk","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"3 tbsp","strMeasure2":"2 chopped","strMeasure3":"2 sticks","strMeasure4":"300g","strMeasure5":"500g","strMeasure6":"4","strMeasure7":"5 tblsp ","strMeasure8":"2 tblsp ","strMeasure9":"2 tblsp ","strMeasure10":"1\u00bd kg","strMeasure11":"500g","strMeasure12":"3","strMeasure13":"400ml","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/2604646\/creamy-tomato-soup","strImageSource":null,"strCreativeCommonsConfirmed":null,"dateModified":null}
    ]
    const renderItem = ({item})=>(
        
        <RecommendedCards Name={item.strMeal} image={item.strMealThumb} index={item.idMeal} />
    )
    return (
        <View>
      <View style={styles.container}>
        <Text style={styles.Text}>Recommendation</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.TextBtn}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <FlatList data={recommendedMeal} renderItem={renderItem} horizontal  />
      </View>
      </View>
    );
}
const styles = StyleSheet.create({
    cards:{
        marginLeft:10,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      height:"auto",
      width:"100%"
    },
    Text: {
      fontSize: SIZES.xLarge,
      fontFamily: FONT.bold,
    },
    TextBtn: {
      fontSize: SIZES.medium,
      color: COLORS.Green,
    },
    btnContainer: {
      justifyContent: 'center',
      marginRight:20,
    },
    category: {
      height: 100,
      width: '100%',
      marginTop: 30,
    },
    categoryCard: {
      height: 500,
      width: '100%',
      marginLeft:20
    },
  });
export default Recommendations;