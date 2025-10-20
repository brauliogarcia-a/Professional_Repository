# Project: Pokemon API - Data Analysis
# Module 1: W02-W03
# Description: A python script that connects to the Pokemon API, process the information to answer some questions and generate a graph.
# Questions:
# 1.How many generations exist?
# 2.How many pokemons exist in each generation?
# 3.How many legendary pokemons exist per generation?
# Develirables: Show numbers in the console, and generate and image file with the graphs

# Libraries imported
import requests #Work with APIs
import pandas as pd #Analytics Library
import json #Create JSON
import matplotlib.pyplot as plt #Create visualizations
from matplotlib.backends.backend_pdf import PdfPages #PDF library 
import tqdm #Progress Bar

# Define the base URL for the API
API_URL = "https://pokeapi.co/api/v2/"

# Define a standard function to request data from the API. It will use "endpoint" parameter to request multiple URLs. it will also if the check connection worked.
def get_data(endpoint):
    url = API_URL + endpoint
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error getting {endpoint}: {response.status_code}")
        return None

## Question number 1. Obtaining the pokemon game generations
# Waiting message
print("Obtaining Pokemon Generations. Please wait...")
# Use the API URL concatenating the generation path
generations_data = get_data("generation/")
# Create a list
gen_list = []
# Loop part of the dictionary to obtain the number of generations
for gen in generations_data["results"]:
    gen_list.append({
        "name": gen["name"],
        "url": gen["url"]
    })
# Use dataframe function from Pandas and store it in a variable
df_generations = pd.DataFrame(gen_list)
# Print the results
print(f"\nQuestion 1: How many generations exist? \nThere are {len(df_generations)} generations of Pokemon games, from 1996 to 2022.")

## Question number 2. Count pokemons in each generation
# Waiting message
print("\nObtaining the Number of Pokemons per Generations. Please wait...")
# Create a list
pokemon_records = []
# Loop part of the dictionary to obtain the generations and their respective pokemons
for index, row in df_generations.iterrows():
    gen_name = row["name"]
    gen_info = requests.get(row["url"]).json()
    pokemons = gen_info["pokemon_species"]
    # Second loop
    for poke in pokemons:
        pokemon_records.append({
            "generation": gen_name,
            "pokemon_name": poke["name"]
        })
# Use dataframe function from Pandas and store it in a variable
df_pokemon = pd.DataFrame(pokemon_records)
# Count pokemon for each generation and give format to the table
pokemon_count = df_pokemon["generation"].value_counts().reset_index() # Convert the index into columns in the data frame
pokemon_count.columns = ["generation", "count"]
# Sort the list
pokemon_count = pokemon_count.sort_values("generation")
# Print the results
print("\nQuestion 2: How many pokemons exist in each generation?\n")
print(pokemon_count)

## Question number 3. Count legendary pokemons in each generation
# Library for visual progress bars
from tqdm import tqdm
# Waiting message
print("\nObtaining the Number of Legendary Pokemons per Generations. Please wait...")
# Request all pokemon species in one single call to improve response time
all_species = requests.get("https://pokeapi.co/api/v2/pokemon-species/?limit=10000").json()
# Create a list
legendary_records = []
# Loop part of the dictionary to obtain the generations with limit control
for i, species in enumerate(tqdm(all_species["results"],desc="Processing Pokemon Species")):
    if i > 1050: # Stop after 1K pokemons
        break
    # Get details for each pokemon species
    data = requests.get(species["url"]).json()
    # Add a record only if its legendary
    if data["is_legendary"]:
        gen_name = data["generation"]["name"] # Extract generation name
        legendary_records.append({
                "generation": gen_name,
                "pokemon_name": data["name"]
        })
# Use dataframe function from Pandas and store it in a variable
df_legendary = pd.DataFrame(legendary_records)
# Count pokemon for each generation and give format to the table
legendary_count = df_legendary["generation"].value_counts().reset_index() # Convert the index into columns in the data frame
legendary_count.columns = ["generation", "count"]
# Sort the list
legendary_count = legendary_count.sort_values("generation")
# Print the results
print("\nQuestion 3: How many legendary pokemons exist per generation?")
print(legendary_count)

## Generate a PDF with 3 graphs
# Waiting message
print("\nCreating PDF, Please wait...")

# Open a PDF file to store all plots
with PdfPages("Pokemon_API_Report.pdf") as pdf:
    # Graph 1
    plt.figure(figsize=(8,5))
    plt.bar(["Generations"], [len(df_generations)], color="skyblue", edgecolor="black")
    plt.title("Total Number of Pokemon Generations")
    plt.ylabel("Count")
    plt.text(0, len(df_generations)/2, str(len(df_generations)), ha="center", va="center", fontsize=14, fontweight="bold")
    plt.tight_layout()
    pdf.savefig()
    plt.close()

    # Graph 2
    plt.figure(figsize=(10,6))
    plt.bar(pokemon_count["generation"], pokemon_count["count"], color="#4CAF50", edgecolor="black")
    plt.title("Pokemon per Generations")
    plt.xlabel("Generation")
    plt.ylabel("Number of Pokemon")
    plt.xticks(rotation=45)
    plt.grid(axis="y", linestyle="--", alpha=0.7)
    plt.tight_layout()
    pdf.savefig()
    plt.close()

    # Graph 3
    plt.figure(figsize=(10,6))
    plt.bar(legendary_count["generation"], legendary_count["count"], color="gold", edgecolor="black")
    plt.title("Legendary Pokemon per Generations")
    plt.xlabel("Generation")
    plt.ylabel("Number of Legendary Pokemon")
    plt.xticks(rotation=45)
    plt.grid(axis="y", linestyle="--", alpha=0.7)
    plt.tight_layout()
    pdf.savefig()
    plt.close()

print("PDF report created succesfully!")