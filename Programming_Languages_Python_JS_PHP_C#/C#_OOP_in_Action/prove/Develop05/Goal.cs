using System;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

//Create the class
abstract class Goal
{
    //Declare protected variables
    protected string _Name;
    protected string _Description;
    protected int _Points;

    //Getter and Setter to be access outside without interacting with the variable directly
    public string Name
    {
        get { return _Name; }
        set { _Name = value; }
    }

    public string Description
    {
        get { return _Description; }
        set { _Description = value; }
    }

    public int Points
    {
        get { return _Points; }
        set { _Points = value; }
    }

    //Create constructor
    public Goal(string name, string description, int points)
    {
        Name = name;
        Description = description;
        Points = points;
    }

    //Create abstract methods that will be override later. this is polymorphism
    public abstract void RecordEvent();
    public abstract string GetStatus();
    public abstract string SaveFormat();

    // Returns the points assigned to the goal
    public int GetPoints() 
    {
        return Points; 
    }
}