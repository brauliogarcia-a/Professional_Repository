using System;

//Cycling class. It will inherit variables and methods from the activity class.
public class Cycling : Activity
{
    //Declare protected variables 
    private double _speedInKph;

    //Define getters and setters for protected variables
    public double SpeedInKph
    {
        get{return _speedInKph;}
        set{_speedInKph = value;}
    }
    
    //Create a constructor for the class
    public Cycling(DateTime date, int durationInMinutes, double speedInKph) : base(date, durationInMinutes)
    {
        _speedInKph = speedInKph;
    }

    //Apply polymorphism

    //Override method to show distance
    public override double GetDistance()
    {
        return (SpeedInKph * DurationInMinutes) / 60;
    }

    //Override method to show the speed
    public override double GetSpeed()
    {
        return SpeedInKph;
    }

    //Overrride method to show the pace
    public override double GetPace()
    {
        return 60 / SpeedInKph;
    }
}