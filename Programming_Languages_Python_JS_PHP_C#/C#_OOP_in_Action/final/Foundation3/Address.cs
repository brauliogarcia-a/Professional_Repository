using System;

//Address Class
public class Address
{
    //Declare protected variables
    protected string _street;
    protected string _city;
    protected string _state;
    protected string _zipCode;

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
    public string ZipCode
    {
        get{return _zipCode;}
        set{_zipCode = value;}
    }
    
    //Create a constructor for the class
    public Address(string street, string city, string state, string zipCode)
    {
        Street = street;
        City = city;
        State = state;
        ZipCode = zipCode;
    }
    
    //This will override a method applying polymorphism. This will be used as argument to display info for the event
    public override string ToString()
    {
        return $"{Street}, {City}, {State} {ZipCode}";
    }
}
