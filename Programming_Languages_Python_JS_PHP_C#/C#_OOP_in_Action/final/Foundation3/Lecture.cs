using System;

//Lecture class. Inherit Event class.
public class Lecture : Event
{
    //Declare protected variables
    protected string _speaker;
    protected int _capacity;

    //Define getters and setters for protected variables
    public string Speaker
    {
        get{return _speaker;}
        set{_speaker = value;}
    }

    public int Capacity
    {
        get{return _capacity;}
        set{_capacity = value;}
    }

    //Create a constructor for the class. This constructor is inheriting all the values and methods from events and can display standard and short details.
    public Lecture(string title, string description, DateTime date, TimeSpan time, Address eventAddress, string speaker, int capacity) : base(title, description, date, time, eventAddress)
    {
        Speaker = speaker;
        Capacity = capacity;
    }

    //This will override a method applying polymorphism adding the piece of information that is exclusive of this event.
    public override string GetFullDetails()
    {
        return $"{base.GetFullDetails()}\nSpeaker: {Speaker}\nCapacity: {Capacity}";
    }
}