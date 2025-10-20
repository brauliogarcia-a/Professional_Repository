using System;

//Reception class. Inherit Event class.
public class Reception : Event
{
    //Declare protected variables
    protected string _rsvpEmail;

    //Define getters and setters for protected variables
    public string RsvpEmail
    {
        get{return _rsvpEmail;}
        set{_rsvpEmail = value;}
    }

    //Create a constructor for the class. This constructor is inheriting all the values and methods from events and can display standard and short details.
    public Reception(string title, string description, DateTime date, TimeSpan time, Address eventAddress, string rsvpEmail) : base(title, description, date, time, eventAddress)
    {
        RsvpEmail = rsvpEmail;
    }

    //This will override a method applying polymorphism adding the piece of information that is exclusive of this event.
    public override string GetFullDetails()
    {
        return $"{base.GetFullDetails()}\nRSVP Email: {RsvpEmail}";
    }
}