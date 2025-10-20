#This is the list of options to print
options = ["\nPlease select one of the following: ", "1. Add item", "2. View cart", "3. Remove item", "4. Compute total", "5. Quit"]

#print the welcome message
print("Welcome to the Shopping Cart Program!\n")

#variables for the list of products and option
products = [0]
prices = [0] 
option = None
running_total = None

# while the statement is not true it will continue to loop through
while option != 5:
    
    for counter in options:
      print(counter)
    #The code that is aligned to this comment is inside the while loop
    option = int(input("\nPlease enter an action: "))
    
    #if the option is not quit, then do the following
    if option == 1:
        item = input("What item would you like to add? ")
        products.append(item)
        price = float(input(f"What is the price of {item} ? "))
        prices.append(price)
        print(f"{item} has been added to the cart\n")

    elif option == 2:
       print("\nThe contents of the shopping cart are:")
       #Print the list of products, prices and the index
       for i in range(len(products))[1:]:  
         print(f"{i}. {products[i]} - ${prices[i]:.2f}")

    elif option == 3:
       index = int(input("\nWhich item would you like to remove?\n"))
       #Remove the items with the same index
       products.pop(index)
       prices.pop(index)
       print("Item removed.\n")

    elif option == 4:
       #Compute Total
       print(f"\nThe total price of the items in the shopping cart is $ {sum(prices):.2f}\n")
    
    elif option != 5:
        #print the list of options
        for counter in options:
          print(counter)

#The code align with the while loop will run once the while lopp breaks
#After the program is done do this
print("You ended the program")