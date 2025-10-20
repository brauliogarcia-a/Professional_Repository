                                      using System;
using System.ComponentModel;

// Customer class
public class Customer
{
    //Declare protected variables
    private string _name;
    private Address _address; //declare a variable address of Address type. its value is null until is assigned

    //Getters and Setters
    public string Name
    {
        get{return _name;}
        set{_name = value;}
    }    

    public Address Address
    {
        get{return _address;}
        set{_address = value;}
    }

    //Create a constructor for the class
    public Customer(string name, Address address)
    {
        Name = name;
        Address = address;
    }

    // Method to check if the customer lives in the USA. This will be used in the GetTotalPrice method from Order class.
    public bool LivesInLocal()
    {
        return Address.IsInLocal();
    }

    // Method to get the customer's name. this will be used in the method GetShippingLabel from Order class.
    public string GetName()
    {
        return Name;
    }

    // Method to get the customer's address. this will be used in the method GetShippingLabel from Order class.
    public string GetAddress()
    {
        return Address.GetFullAddress();
    }
}
