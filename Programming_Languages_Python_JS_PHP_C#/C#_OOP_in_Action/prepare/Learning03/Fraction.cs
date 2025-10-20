using System;

class Fraction
{
    //Its important that a new value is assined to these variables, that is the way it will work when values are passed as arguments
    private int _top;
    private int _bottom;

    //If a method has the same as the class is treated as a constructor!!
    //The use of constructors in this way, at least in this excercise is to have different values for the private variables(encapsulation)
    public Fraction()
    {
        _top = 1;
        _bottom = 1;
    }
    //If different constructors are called the same, they should have a distinction from each other
    public Fraction(int numerator)
    {
        _top = numerator;
        _bottom = 1;
    }
    //If different constructors are called the same, they should have a distinction from each other
    public Fraction(int numerator, int denominator)
    {
        _top = numerator;
        _bottom = denominator;
    }    
    //Show the 
    public string GetFractionString()
    {
        string text = $"{_top}/{_bottom}";
        return text;
    }

    public double GetDecimalValue()
    {
        double operation = (double)_top / (double)_bottom;
        return operation;
    }
}