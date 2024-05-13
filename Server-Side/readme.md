Assignment Description :
The task is to create a simple Ecommerce Website. You have to create a
backend (Nodejs or Nestjs) app, Frontend (React js) app and for dataBase use
MongoDB.
The functional requirements are as below :-
Backend:-
● Schema and API for User Management:-

1. Create an API for user Registration using Email/Phone no, user’s
   Name, Address, and Password.

2. Types of users are “Customer” and “manager”
3. Create an Api for user Login with credentials (Email/Phone No and
   password) and Generate jwt token for authorization.
   ● Api’s for User “Customer” required”:-
4. Get available Inventory. 
5. Add to cart.
6. Get user cart.
7. Update cart item quantities.
8. Place orders for items in the cart.
9. Track order statusSchema and Api for Add Items In Inventory(for “Manager” users):-
10. Create an Api for adding any product item in inventory.
11. Product Name,
12. Product Image,
13. Product Description,
14. Weight ,
15. Quantity,
16. Price,
17. Create an Api for Updating the quantity of the Product item present in
    the inventory for “Manager” users.
18. Create an Api for Deleting the product item which is no more present
    in the inventory for “Manager” users.
    ● Schema and Api for Order Management(for “Manager” users):-
19. Create an Api for placing orders for the products which are present In
    the Inventory for “Customer” users.
20. Create an Api which updates the status of the order after each phase
    of the order processing for “Manager” users.
21. These order status updates should then reflect on the particular order
    placed by the particular customer.
    Eg: customer order no: 005.
    On status update by manager role user for order no 005. It should
    reflect on the customer's “My orders” page.


    
    Frontend:-
    ● Create a Frontend user signup.
22. Name(Input field),
23. Email/Phone No (Input field), (Email or Phone should be Unique)
24. Address (Input field)
25. Password(Should be encrypted while storing in DB).
    ● Create a Frontend user login.
26. Email/Phone No (Input field),
27. Password.(Generate Authorization token and store it in cookies)
    ● Create a User “Customer” Dashboard.
28. Show all the items present in the Inventory.
29. Image of the product item.
30. Description of the product item.
31. Quantity of the product item.
32. weight of the product item.
33. Price of the product item.
34. Give the option to add product items to cart.
35. Give the option for product item update quantity as per User’s
    requirement.
36. Place order For the User.
37. Create an option to view all orders with their current status.
38. Create an option to View current order and status of the current order.
39. Add the user data and order status update Notification
    System(optional).
    Create a User “Manager” Dashboard.
40. Show all the items present in the Inventory list.
    a. Image of the product item.
    b. Description of the product item.
    c. Quantity of the product item.
    d. weight of the product item.
    e. Price of the product item.
    f. Edit button
    g. Delete button
41. Button to add new items to inventory.
42. View all orders placed by “Customer” users.
43. Update each order status if required.
