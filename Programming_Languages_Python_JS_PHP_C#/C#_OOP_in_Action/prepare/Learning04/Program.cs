using System;

class Program
{
    static void Main(string[] args)
    {
        //Create object for MathAssignment, assing the values, and display them
        MathAssignment math = new MathAssignment("Braulio", "Math","Chapter 1", "Exercise 1\n" );
        Console.WriteLine(math.GetHomeworkList());

        //Create object for WritingAssignment, assing the values, and display them
        WritingAssignment writing = new WritingAssignment("Braulio", "Literature","SalemsLot");
        Console.WriteLine(writing.GetWritingInformation());        
    }
}