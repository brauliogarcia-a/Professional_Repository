using System;
using System.Runtime.InteropServices;

class Program
{
    static void Main(string[] args)
    {
        //Without arguments
        //Create an object
        Fraction woa = new Fraction();
        //show a fraction with 1 values for numerator and denominator
        Console.WriteLine(woa.GetFractionString());
        Console.WriteLine(woa.GetDecimalValue());

        //With one argument
        //Create an object. the argument value
        Fraction w1a = new Fraction(5);
        //show a fraction with 1 values for numerator and denominator
        Console.WriteLine(w1a.GetFractionString());
        Console.WriteLine(w1a.GetDecimalValue());

        //With two arguments
        //Create an object. the argument value
        Fraction w2a = new Fraction(3,4);
        //show a fraction with 1 values for numerator and denominator
        Console.WriteLine(w2a.GetFractionString());
        Console.WriteLine(w2a.GetDecimalValue());        
    }
}