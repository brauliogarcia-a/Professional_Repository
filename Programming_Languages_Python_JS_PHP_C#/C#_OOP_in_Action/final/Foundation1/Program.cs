using System;
/*This program will show the Abstraction principle by creating different classes with methods that contian lots of information 
but the user call those without knowing the complexity inside of them. 
for example, using the Video class as object in a list, or using AddComment method from the Video class, or using Comment class as an object in a list. 
*/

//Main Class
class Program
{
    static void Main(string[] args)
    {
        //Create a list of videos
        List<Video> videos = new List<Video>
        {
            //Create 3 entries for the videos
            new Video("Modding Gameboy Advanced", "Retro Future", 900),
            new Video("How Metroid Sage Was Created", "CVJ", 1200),
            new Video("Jeffery R Holland MTC Address 'Feed My Sheep'", "LDS Mission", 3180)
        };

        //Capture the information for each comment in the videos and add to a list of videos
        //The methodology to store this information lacks automation but is done in this way just to show the principle. we link various comments
        videos[0].AddComment("MariaB", "Great job, looks like new");
        videos[0].AddComment("_MarianaBanana_", "Now I want to play GameBoy.");

        videos[1].AddComment("Joss_1", "I played the first game when it was launched, I'm feeling old");
        videos[1].AddComment("Dany150619", "I love this saga, one of my favorite games!");
        videos[1].AddComment("GordoGamer3718", "Never heard of this game, but I would love to play it");
        videos[1].AddComment("MRAZgames", "Best games ever :D");

        videos[2].AddComment("NathanLee", "This talked changed my life during my mission and afer");
        videos[2].AddComment("BraulioGG", "I heard this video for the first time in 2010");

        //This is a loop that will display each item in the list of videos and the related information
        foreach (var video in videos)
        {
            //The format to display the information is in the method that is called
            video.DisplayInfo();
        }
    }
}