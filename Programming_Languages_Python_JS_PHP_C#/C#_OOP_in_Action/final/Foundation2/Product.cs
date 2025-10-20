using System;

//Product Class
public class Product
{
    //Declare protected variables
    protected string _name;
    protected int _productId;
    protected double _pricePerUnit;
    protected int _quantity;

    //Define getters and setters for protected variables
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }    
    public int ProductId
    {
        get { return _productId; }
        set { _productId = value; }
    } 
    public double PricePerUnit
    {
        get { return _pricePerUnit; }
        set { _pricePerUnit = value; }
    }        
    public int Quantity
    {
        get { return _quantity; }
        set { _quantity = value; }
    } 
    
    //Create a constructor for the class
    public Product(string name, int productId, double pricePerUnit, int quantity)
    {
        Name = name;
        ProductId = productId;
        PricePerUnit = pricePerUnit;
        Quantity = quantity;
    }

    // Method to calculate the total cost of the product. This will be used in the GetTotalPrice method from Order class.
    public double GetTotalCost()
    {
        return PricePerUnit * Quantity;
    }

    // Method to get the product name and id. This will be used in the GetPackingLabel method from Order class.
    public string GetProductLabel()
    {
        return $"{Name} (ID: {ProductId})";
    }
}