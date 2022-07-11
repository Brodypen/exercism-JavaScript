/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time = undefined){
    return time === 0 ? "Lasagna is done." : time !== undefined ? "Not done, please wait." : "You forgot to set the timer.";
}
export function preparationTime(layers, time = 2){
    return layers.length * time;
}
export function quantities(layers){
    const quanNeeded = {
        noodles: 0,
        sauce: 0,
    };
    layers.forEach(element => {
        if(element === 'noodles'){
            quanNeeded.noodles += 50;
        } else if(element === 'sauce'){
            quanNeeded.sauce += 0.2;
        }
    });
    return quanNeeded;
}
export function addSecretIngredient(friendList, myList){
    myList.push(friendList[friendList.length - 1]); 
    return;
}
export function scaleRecipe(recipe, portions){
    const newRecipe = {

    };
    for(const key in recipe){
        newRecipe[key] = ((recipe[key]/2)*portions);
    }
    return newRecipe;

}