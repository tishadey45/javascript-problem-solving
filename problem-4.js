function topRatedRestaurant(restaurants) {
    // Write your code here
    // console.log(restaurants);
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let top = restaurants[0];

    for (let finder of restaurants) {
        // console.log(finder.name,finder.rating);
        if (finder.rating > top.rating) {
            top = finder;
        }
    }

    return top.name.toUpperCase();
}

const result = topRatedRestaurant([])
console.log(result);