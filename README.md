# Food Central Application

Our application allows logged-in users to order food from select restaurants. The user first arrives at the home page of our site, where they should first login to their account. After clicking on their account, the user will be redirected back the home page where thy can see a list of restaurants to order from. Additionally, the user can click on the "My Account" at the top to see their account details and past order history. The account details consist of the Username, phone number, and email, while the "Past Orders" section displays the the restaurant, date, time, and food items of each order.

On the home page, each restaurant name is displayed along with the restaurant's rating, delivery fee, approximate delivery time. After clicking into a restaurant, the user will find the restaurant's menu, address, phone number. By clicking on a specific menu item, that food item will be added to the user's cart on the right-side of the page. Items can be deleted from the cart by clicking on the "X". After the user is satisfied with their cart details, they can click the "Place Order!" button, and their order details will be saved. The user can also look at the Past Orders in "My Account" to see that this order was saved.

For updating a user's most recent order, they can click on the "My Account" button at the top. The most recent order, will be colored green with an "update" button. The update button takes the user back to their cart, so that they can remove and add new items. Once the user is pleased with their updated cart, they can click the "update order" button or if the user desires to delete the cart entirely, then they can click the "cancel order" button.

### Links to the application's backend and frontend:

Backend Heroku: https://zuber-eats-api.herokuapp.com/

Frontend Heroku: https://food-hubbs.herokuapp.com/

Frontend Github Repository: https://github.com/asd0999/food_order_app

Backend Github Repository: https://github.com/asd0999/food_order_db_api

### Technologies Used:

Backend: Node.js, Express.js, MongoDB, Mongoose

Frontend: React, React Router

### Challenges

The Github work flow was a challenging because this was our first group project.

Figure out the schemes for our database was challenging because it was difficult to visualize the different relationships and the flow of data at the beginning.

At the beginning of the project, we did not plan out the layout/structure of the project as well as we should have. For this reason, later in the project, we were creating a number of components that we did not expect to create. Additionally, the lack of planning created problems for us when we named different states in app.js.

### If more time permitted

At the moment, we have three users created in the database, and new users are unable to create an account. We would have liked to create user authentication. On the homepage, each user would be prompted to signup or login.

Additionally, we would have liked to incorporate a Google Maps API into this application. With this API, the application would request the user's location upon entering the application. By having the users location, we could have provided a list of restaurants based on the user's location.
