using System;
using System.Collections.Generic;

class ReferenceApp
{
    //Create private variables
    private string _bookName;
    private int _chapterNumber;
    private int _beginVerse;
    //Prepare the variable in case is null and don't trow an error
    private int? _finishVerse;
    
    //Create an object uisng the same name as the class
    public ReferenceApp(string bookName, int chapterNumber, int beginVerse, int? finishVerse = null)
    {
        //Use the private variables and asing them to the parameters of the object. this is part of encapsulation
        //Other classes interacting only with certain variables of this class without knowing what else is inside
        _bookName = bookName;
        _chapterNumber = chapterNumber;
        _beginVerse = beginVerse;
        _finishVerse = finishVerse;
        
    }//end of object
    
    //Make an object into string. This method will determine what values should be present in the reference.
    public override string ToString()
    {
        //logic to see if it has just one or two verse values
        if (_finishVerse != null)
        {
            //if finish verse has value, then show the following format
            return $"{_bookName} {_chapterNumber}:{_beginVerse}-{_finishVerse}";
        }
        else{
            //if the finish verse is null, then show the folling format
            return $"{_bookName} {_chapterNumber}:{_beginVerse}";
        }
    } // end of object


} // end of class ReferenceApp