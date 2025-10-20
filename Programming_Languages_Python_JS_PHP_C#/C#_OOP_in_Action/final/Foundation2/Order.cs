using System;
using System.Dynamic;

//Order Class
public class Order
{
    //Declare protected variables and list
    protected List<Product> products;
    protected Customer _customer; //declare a variable customer of type Costumer. its value is null until is assigned
    protected double ShippingCostLocal = 5.0;
    protected double ShippingCostInternational = 35.0;

    //Getters and Setters
    public Customer Customer
    {
        get{return _customer;}
        set{_customer = value;}
    }

    //Create a constructor for the class
    public Order(Customer customer)
    {
        products = new List<Product>();
        Customer = customer;
    }

    // Method to add products to the Products List
    public void AddProduct(Product product)
    {
        products.Add(product);
    }

    // Method to calculate the total cost of the order
    public double GetTotalPrice()
    {
        //start the product cost as 0
        double totalProductCost = 0;
        //Loop the list of products to get the cost for each of them
        foreach (var product in products)
        {
            
            totalProductCost += product.GetTotalCost();
        }
        //Logic to define if the customer will be charged with the local or foreign shipping cost
        double shippingCost = Customer.LivesInLocal() ? ShippingCostLocal : ShippingCostInternational;

        //To show the total cost including shipping cost
        return totalProductCost + shippingCost;
    }

    // Method to generate the packing label
    public string GetPackingLabel()
    {
        string label = "Packing Label:\n";
        foreach (var product in products)
        {
            label += product.GetProductLabel() + "\n";
        }
        return label;
    }

    // Method to generate the shipping label
    public string GetShippingLabel()
    {
        return $"Shipping Label:\n{Customer.GetName()}\n{Customer.GetAddress()}";
    }
}