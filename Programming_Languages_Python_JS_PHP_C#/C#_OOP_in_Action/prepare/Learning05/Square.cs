using System;

class Square : Shape //Inheritance
{
    //Set private variables according to the shape
    protected double _side;

    //Create a constructor to define color and side
    public Square(string color, double side) : base(color) //Inheritance
    {
        _side = side;
    }

    //Polymorphism method
    public override double GetArea()
    {
        return _side * _side;
    }
}