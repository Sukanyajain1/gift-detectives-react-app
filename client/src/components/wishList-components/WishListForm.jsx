// this form will be for the list items
/*
Each item in the wish list will be appended to the list and then the event gift list will be submitted in post request

Form needs validation before post route is complete and the gifts will be added to the db before the list is submitted (gift items will have the user_id foreign key as model attribute).

surface level validations for list items because they cannot be submitted before the giftlist object is created in post request. the validations will pass and append the item object to the item id list


SAME CONCEPT AS PIZZA ORDER: THE GIFT ITEMS WILL HAVE A LIST isSUBMITTED BOOLEAN FOR IF THEY ARE IN CART OR IF THEY ARE PART OF A PURCHASED ORDER. The lifespan of a parent-less gift is only until a list has been submitted

for a certain number loop(render a form component)--> create a clicker button with the plus sign on it that increases the counter everytime you click it to add a new form underneath the old one- "Add more experience/ Add more education/ Add more siblings/ Add more medication names with doses, etc."

SCRATCH EVERYTHING- there is literally a way to add things to the form and remove them (dynamically adding new of the same field to a form before submission with an axios request)
**** still need form level validations for the gift items before they are submitted after the list object is submitted.

separate model or nested attribute?
you can do this

*/ 