using System;

//Swimming class. It will inherit variables and methods from the activity class.
public class Swimming : Activity
{
    //Declare protected variables 
    protected int _laps;

    //Define getters and setters for protected variables
    public int Laps
    {
        get{return _laps;}
        set{_laps = value;}
    }

    //Create a constructor for the class
    public Swimming(DateTime date, int durationInMinutes, int laps) : base(date, durationInMinutes)
    {
        Laps = laps;
    }

    //Apply polymorphism

    //Override method to show distance
    public override double GetDistance()
    {
        return (Laps * 50) / 1000.0;  // Convert meters to kilometers
    }
    
    //Override method to show the speed
    public override double GetSpeed()
    {
        return (GetDistance() / DurationInMinutes) * 60;
    }

    //Overrride method to show the pace
    public override double GetPace()
    {
        return DurationInMinutes / GetDistance();
    }

}