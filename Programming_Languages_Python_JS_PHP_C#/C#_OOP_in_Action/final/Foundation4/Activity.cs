using System;

//Activity class. it will be the base class that will be inherited in other classes.
public abstract class Activity
{
    //Declare protected variables
    protected DateTime _date;
    protected int _durationInMinutes;

    //Define getters and setters for protected variables
    public DateTime Date
    {
        get{return _date;}
        set{_date = value;}
    }    
    public int DurationInMinutes
    {
        get{return _durationInMinutes;}
        set{_durationInMinutes = value;}
    }

    //Create a constructor for the class       
    public Activity(DateTime date, int durationInMinutes)
    {
        Date = date;
        DurationInMinutes = durationInMinutes;
    }
    
    //Create methods that will be overrried in other classes. This is polymorphism.
    public abstract double GetDistance();
    public abstract double GetSpeed();
    public abstract double GetPace();
    
    //Gather the variables to display the information.
    public virtual string GetSummary()
    {
        return $"{Date:dd MMM yyyy} {this.GetType().Name} ({DurationInMinutes} min): " +
               $"Distance {GetDistance():0.0} km, Speed {GetSpeed():0.0} kph, Pace: {GetPace():0.0} min per km";
    }
}
