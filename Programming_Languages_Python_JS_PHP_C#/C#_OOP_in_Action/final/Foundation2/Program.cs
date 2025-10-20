using System;
/*The second principle is called encapsulation, and that is the action of making parts of the program private, in that way
programmers don't mess with parts of the code, is easier to debug, and add security.
We achieve this by making variables or methods private or protected, creating objets, and also adding getters and setters.
*/

// Main Class
class Program
{
    static void Main(string[] args)
    {
        //Create a list of objects for products and adding arguments
        Product product1 = new Product("DesktopPC", 101, 899.99, 1);
        Product product2 = new Product("Desktop", 102, 499.99, 2);
        Product product3 = new Product("Chair", 103, 150.00, 1);

        //Create object addresses for customers
        Address addressLocal = new Address("Sierra Leona 689", "Guadalajara", "Jal", "Mexico");
        Address addressInternational = new Address("50 N W Temple ST", "Salt Lake", "UT", "USA");

        //Create customers objects and adding arguments
        Customer customerLocal = new Customer("Braulio Garcia", addressLocal);
        Customer customerForeign = new Customer("Mariana Garcia", addressInternational);

        //Create order objects and add product information
        Order order1 = new Order(customerLocal);
        order1.AddProduct(product1);
        order1.AddProduct(product2);

        Order order2 = new Order(customerForeign);
        order2.AddProduct(product2);
        order2.AddProduct(product3);

        //Display details for the first order
        Console.WriteLine(order1.GetPackingLabel());
        Console.WriteLine(order1.GetShippingLabel());
        Console.WriteLine($"Total Price(Include Shipping): ${order1.GetTotalPrice():F2}\n");

        //Display details for the second order
        Console.WriteLine(order2.GetPackingLabel());
        Console.WriteLine(order2.GetShippingLabel());
        Console.WriteLine($"Total Price(Include Shipping): ${order2.GetTotalPrice():F2}");
    }
}