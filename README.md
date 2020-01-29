# Food order cart project

link to site [here](https://liamlog.netlify.com/)

this project is a simple demonstration for react components rendering and list rendering focusing on using function programming with map, reduce and filter. list hard coded in **App.js**, 3 main component are used
- **NavBar**: that is used for list selection and filtering based on selected category, also toggles out the other 2 components listed below (**menu**, **checkOut**).

- **menu**: this is used for the rendering of lists based on the selected category field then the list is paginated if exceeding the max page size with the **pagination** component to return from the starting index (*ie, page 1 or 2*) to the max page size amount.

-**checkOut**: this renders a list of items where the amount of the item added to cart is above one then renders them into a list where the total amount of the item can be incremented or reduced. also the entire list can be scraped, resetting all amount values to 0.
