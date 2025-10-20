public class Menu
{
    public void menu()
    {
        int answer = -1;
        //Create an object that all elements inside the main method can use. Maybe is the key to make this work. I was creting 2 different objects and there wasn't correlation between them
        Operations operations = new Operations();

        while (answer != 5)
        {
            Console.WriteLine("What would you like to do?\n");
            Console.WriteLine("1.Write\n2.Display\n3.Load\n4.Save\n5.Quit\n");
            answer = int.Parse(Console.ReadLine());

            switch (answer)
            {
                case 1:
                    //Message
                    Console.Write("You selected option 1-Write\n");
                    //The code below does not execute anything per se, it calls the method that actually execute something.
                    operations.Questions();
                    break;

                case 2:
                    //Message
                    Console.Write("You selected option 2-Display\n");        
                    operations.Display();
                    break;

                case 3:
                    //Message
                    Console.Write("You selected option 3-Load\n");        
                    operations.Load();
                    break;

                case 4:
                    //Message
                    Console.Write("You selected option 4-Save\n");        
                    //The code below does not execute anything per se, it calls the method that actually execute something.
                    operations.Save();
                    break;
            } //end of switch
        } //end of the loop while        
    }
}