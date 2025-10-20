using System;
using System.Drawing;

class Shape
{
    //Set private variables according to the shape
    protected string _color;

    //Create a constructor to define color
    public Shape(string color)
    {
        _color = color;
    }
    
    //Create a getter for color
    public string GetColor()
    {
        return _color;
    }
    
    //Polymorphism method
    public virtual double GetArea()
    {
        return 0;
    }
}