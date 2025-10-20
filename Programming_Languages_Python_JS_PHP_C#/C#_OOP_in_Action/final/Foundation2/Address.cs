using System;

// Address class
public class Address
{
    //Declare protected variables
    protected string _street;
    protected string _city;
    protected string _state;
    protected string _country;

    //Define getters and setters for protected variables
    public string Street
    {
        get{return _street;}
        set{_street = value;}
    }    

    public string City
    {
        get{return _city;}
        set{_city = value;}
    }    
    public string State
    {
        get{return _state;}
        set{_state = value;}
    }    
    public string Country
    {
        get{return _country;}
        set{_country = value;}
    }    

    //Create a constructor for the class
    public Address(string street, string city, string state, string country)
    {
        Street = street;
        City = city;
        State = state;
        Country = country;
    }

    // Method to check if the address is in the USA. This will be used in the GetTotalPrice method from Order class.
    public bool IsInLocal()
    {
        return Country.ToLower() == "mex";
    }

    // Method to return the full address as a string. will be used for the GetAddress method from the Customer class.
    public string GetFullAddress()
    {
        return $"{Street}\n{City}, {State}\n{Country}";
    }
}
