using System;
using System.Formats.Asn1;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.IO;

public class Program
{
    //the access type of the main method to start running a program shold be static
    static void Main(string[] args)
    {
       //create an object to call the method menu
       Menu menuDisplay = new Menu();
       menuDisplay.menu();
       
    } //end of main method
} // end of class program