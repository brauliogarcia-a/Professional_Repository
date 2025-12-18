import java.util.Scanner; // Library to read input from the user

public class RPGGame {

    static Scanner scanner = new Scanner(System.in); // Create Sacanner object to read the input from the keyboard

    // Main method. Code execution start here
    public static void main(String[] args) { 

        System.out.println("The Witcher - Untold Tale"); // Title
        
        Player player = createCharacter(); // Create player based on the Player class found the in the file Player.java

        boolean gameRunning = true; // Dictate if the game continues

        boolean playerAlive = true; // Dicatate if the player is alive


        // Main game loop
        while (gameRunning) {

            showIntro(player); // Show text for the intro

            int pathChoice = choosePath(); // Show the chose path options and text
            
            // Check which option used and execute one of the two battles
            if (pathChoice == 1) {
                bearEncounter(player);
            } else {
                leshenEncounter(player);
            }

            witchEncounter(player); // Show the next part of the story

            // Check if player is still alive
            if (player.life <= 0) {
                System.out.println("Game Over");
                playerAlive = false;
                break;
            }

            // Message displayed once you finish the game succesfully
            if(playerAlive){
            System.out.println("You leave the forest and head to the nearest town.");
            System.out.println("Your journey will continue another day.");
            }

            gameRunning = false; // Check if the game will continue

            System.out.println("End of game."); // Display game over message if you are killed
        }

        
    } // End of main method

    // Creates the character and selects witcher schools
    static Player createCharacter() {
        
        // Print the character selection text
        System.out.println("Select your Witcher name:");
        System.out.println("1. Vesemir");
        System.out.println("2. Geralt");

        int nameChoice = scanner.nextInt(); // Save input from the user
        scanner.nextLine(); // Clear the input buffer

        String name = (nameChoice == 1) ? "Vesemir" : "Geralt"; // Decide which character to use
        
        // Ask the user which school to select
        System.out.println("Select your Witcher school:");
        System.out.println("1. Wolf School (Life 45, Attack 15)");
        System.out.println("2. Viper School (Life 40, Attack 20)");

        int schoolChoice = scanner.nextInt(); // Record the selected option from the user
        
        // Assign attack and life based on the school type
        if (schoolChoice == 1) {
            return new Player(name, 45, 15);
        } else {
            return new Player(name, 40, 20);
        }
    } // end of create character method


    // Shows the introduction story
    static void showIntro(Player player) {

        // Show the first part of the story
        System.out.println();
        System.out.println("The night is dark and cold.");
        System.out.println("Clouds cover the moon, but this is not a problem for a Witcher.");
        System.out.println(player.name + " walks through the forest searching for a Leshen.");
    } // end of show intro method


    // Lets the player choose a path
    static int choosePath() {

        // Present the first path choice to the user
        System.out.println();
        System.out.println("Two paths appear in front of you.");
        System.out.println("1. A path with broken branches and dead animals.");
        System.out.println("2. A silent path with the scent of blood.");

        return scanner.nextInt();
    } // end of choosepath method


    // Bear encounter logic
    static void bearEncounter(Player player) {

        // The user selected the path of the bear
        System.out.println();
        System.out.println("A huge black bear suddenly attacks you.");

        // The user decide to fight or run
        System.out.println("What do you do?");
        System.out.println("1. Fight");
        System.out.println("2. Run");

        int choice = scanner.nextInt(); // Save input from the user
        
        // Results based on the previous choice from the user. The user loose points in any case
        if (choice == 1) {
            player.life -= 10;
            System.out.println("You kill the bear but lose 10 life points.");
        } else {
            player.life -= 15;
            System.out.println("You escape, but the bear wounds you.");
        }

        System.out.println("Current life: " + player.life); // Shows the current life points
    } // end of bear encounter method


    // Leshen encounter logic
    static void leshenEncounter(Player player) {

        // The user selected the path of the Leshen
        System.out.println();
        System.out.println("The forest becomes silent.");
        System.out.println("The Leshen appears under the moonlight.");

        // The user decide to fight or run
        System.out.println("What do you do?");
        System.out.println("1. Fight");
        System.out.println("2. Run");

        int choice = scanner.nextInt(); // Save input from the user

        // Results based on the previous choice from the user. The user loose points in any case
        if (choice == 1) {
            player.life -= 25;
            System.out.println("You defeat the Leshen using potions and fire.");
            System.out.println("You gain magical oil.");
        } else {
            player.life -= 35;
            System.out.println("You escape, but suffer severe wounds.");
        }

        System.out.println("Current life: " + player.life); // Shows the current life points

    } // end of leshen encounter method


    // Witch encounter logic
    static void witchEncounter(Player player) {
        
        // Present the final part of the story. The encounter with the witch
        System.out.println();
        System.out.println("You find abandoned houses deep in the forest.");
        System.out.println("A powerful witch appears.");
        
        // The user is presented with a choice
        System.out.println("What do you do?");
        System.out.println("1. Attack with silver sword");
        System.out.println("2. Speak with the witch");

        int choice = scanner.nextInt(); // Save input from the user

        // Results based on the previous choice from the user. The user lives or die
        if (choice == 1) {
            System.out.println("The witch summons her sisters.");
            System.out.println("You are killed instantly and fallen in the forest.");
            player.life = 0;
        } else {
            System.out.println("The witch gives you a magic lamp.");
            System.out.println("In exchange, you accept a dangerous future task.");
        }
    } // end of with encounter method

} // end of main class
