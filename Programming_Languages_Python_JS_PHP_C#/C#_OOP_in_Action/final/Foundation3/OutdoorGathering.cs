using System;

//OutdoorGathering class. Inherit Event class.
public class OutdoorGathering : Event
{
    //Declare protected variables
    protected string _weatherForecast;

    //Define getters and setters for protected variables
    public string WeatherForecast
    {
        get{return _weatherForecast;}
        set{_weatherForecast= value;}
    }

    //Create a constructor for the class. This constructor is inheriting all the values and methods from events and can display standard and short details.
    public OutdoorGathering(string title, string description, DateTime date, TimeSpan time, Address eventAddress, string weatherForecast) : base(title, description, date, time, eventAddress)
    {
        WeatherForecast = weatherForecast;
    }

    //This will override a method applying polymorphism adding the piece of information that is exclusive of this event.
    public override string GetFullDetails()
    {
        return $"{base.GetFullDetails()}\nWeather Forecast: {WeatherForecast}";
    }
}