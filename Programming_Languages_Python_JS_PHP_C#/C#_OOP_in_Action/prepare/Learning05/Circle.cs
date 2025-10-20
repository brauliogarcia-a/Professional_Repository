using System;

class Circle : Shape //Inheritance
{
    //Set private variables according to the shape
    protected double _radius;

    //Create a constructor to define color and radius
    public Circle(string color, double radius) : base(color) //Inheritance
    {
        _radius = radius;
    }

    //Polymorphism method
    public override double GetArea()
    {
        return Math.PI * _radius * _radius;
    }
}    
