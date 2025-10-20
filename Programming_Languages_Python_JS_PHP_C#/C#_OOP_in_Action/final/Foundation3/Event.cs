using System;

//Event Class.This is going to be a base class that will be inherited
public class Event
{
    //Declare protected variables
    protected string _title;
    protected string _description;
    protected DateTime _date;
    protected TimeSpan _time;
    protected Address _eventAddress;

    //Define getters and setters for protected variables
    public string Title
    {
        get{return _title;}
        set{_title = value;}
    }    

    public string Description
    {
        get{return _description;}
        set{_description = value;}
    }   

    public DateTime Date
    {
        get{return _date;}
        set{_date = value;}
    }    

    public TimeSpan Time
    {
        get{return _time;}
        set{_time = value;}
    }    

    public Address EventAddress
    {
        get{return _eventAddress;}
        set{_eventAddress = value;}
    } 

    //Create a constructor for the class
    public Event(string title, string description, DateTime date, TimeSpan time, Address eventAddress)
    {
        Title = title;
        Description = description;
        Date = date;
        Time = time;
        EventAddress = eventAddress;
    }

    //Gather the variables to display standard details. it will be used for each event type.
    public virtual string GetStandardDetails() //using virtual instead of abstract because there is a body in the method
    {
        return $"Event: {Title}\nDescription: {Description}\nDate: {Date.ToShortDateString()}\nTime: {Time}\nAddress: {EventAddress}";
    }

    //Gather the variables to display full details. it will be used for each event type.
    public virtual string GetFullDetails() //using virtual instead of abstract because there is a body in the method
    {
        return GetStandardDetails();
    }

    //Gather the variables to display description. it will be used for each event type.
    public virtual string GetShortDescription() //using virtual instead of abstract because there is a body in the method
    {
        return $"Event Type: {this.GetType().Name}, Title: {Title}, Date: {Date.ToShortDateString()}";
    }
}
