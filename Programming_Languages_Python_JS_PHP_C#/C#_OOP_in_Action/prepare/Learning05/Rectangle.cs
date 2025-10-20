using System;

class Rectangle : Shape //Inheritance
{
    //Set private variables according to the shape
    protected double _length;
    protected double _width;

    //Create a constructor to define color, lenght, and width
    public Rectangle(string color, double length, double width) : base(color) //Inheritance
    {
        _length = length;
        _width = width;
    } 

    //Polymorphism method
    public override double GetArea()
    {
        return _length * _width;
    }
}    