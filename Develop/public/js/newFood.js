async function newFormHandler(event) {
    event.preventDefault();
    // // // // //
    // These query selectors can be changed to match the front end naming conventions
    // // // // //
    const food_name = document.querySelector('#dish_name').value;
    const food_descr = document.querySelector('#description').value;
    const price = document.querySelector('#price').value;
    const photo_url = document.querySelector('#url').value;
    const tag_name = document.querySelector('tag_name').value.split(' ');

    // Send fetch request to add a new dish
    // I AM NOT SURE IF THIS IS THE RIGHT ROUTE FOR POSTING NEW FOOD
    const response = await fetch(`/api/foodRoutes`, {
        method: 'POST',
        body: JSON.stringify({
            food_name,
            food_descr,
            price,
            photo_url,
            tag_name
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add food');
    }
}
// // // // //
// This query selectors can be changed to match the front end naming conventions
// // // // //
document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
