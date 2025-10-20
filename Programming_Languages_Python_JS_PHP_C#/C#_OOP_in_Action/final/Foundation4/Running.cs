using System;

//Running class. It will inherit variables and methods from the activity class.
public class Running : Activity
{
    //Declare protected variables    
    protected double _distanceInKm;

    //Define getters and setters for protected variables
    public double DistanceInKM
    {
        get{return _distanceInKm;}
        set{_distanceInKm = value;}
    }

    //Create a constructor for the class
    public Running(DateTime date, int durationInMinutes, double distanceInKm) : base(date, durationInMinutes)
    {
        DistanceInKM = distanceInKm;
    }
    
    //Apply polymorphism

    //Override method to show distance
    public override double GetDistance()
    {
        return DistanceInKM;
    }
    
    //Override method to show the speed
    public override double GetSpeed()
    {
        return (DistanceInKM / DurationInMinutes) * 60;
    }
    
    //Overrride method to show the pace
    public override double GetPace()
    {
        return DurationInMinutes / DistanceInKM;
    }
}