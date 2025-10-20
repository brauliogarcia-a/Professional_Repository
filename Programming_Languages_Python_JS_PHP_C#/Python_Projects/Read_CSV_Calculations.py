import csv
import statistics
#open the file
with open("life-expectancy.csv","r") as life_expect:
    #prepare list to create indexes to remove headers
    life_file = csv.reader(life_expect)
    #jump the headers
    next(life_file) 
    
    #the general lists
    entity_list=[]
    code_list=[]
    year_list=[]
    expectancy_list=[]
    test = []
    
    #loop to create the general list above
    for line in life_file:
      entity_list.append(line[0])
      code_list.append(line[1])
      year_list.append(line[2])
      expectancy_list.append(line[3])
   
year = None
year = input("Enter the year of interest: ")

#you find the max or min number in the list you want to use for sort, then you ask for the index of that list, at the end you use the index to display the names
highest = expectancy_list.index(max(expectancy_list))
lowest = expectancy_list.index(min(expectancy_list))

#use the list names combine with the indext to display the correct number
print(f"\nThe overall max life expectancy is: {expectancy_list[highest]} from {entity_list[highest]} in {year_list[highest]}")
print(f"The overall max life expectancy is: {expectancy_list[lowest]} from {entity_list[lowest]} in {year_list[lowest]}")

print(f"\nFor the year {year}:\n")


#Try to create list based on the year
with open("life-expectancy.csv","r") as life_expect2:
    #prepare list to create indexes to remove headers
    life_file2 = csv.reader(life_expect2)
    #jump the headers
    next(life_file2)
    max_expectancy = 0 # to find the lowest number type the biggest number, contrary when you want the highest you type the lowest possible number on this variable.
    city = ""
    min_expectancy = 100
    city2 = ""
    list_average = []
    #average = statistics.mean(list_average)

    for item2 in life_file2:
     entity = item2[0]
     entity2 = item2[0]
     year2 = item2[2]
     expectancy = float(item2[3])
    
     
     if year2 == year:
      if expectancy > max_expectancy:
        # This number is larger than the largest we had seen so far

        # So it is now the largest we've seen
        max_expectancy = expectancy
        city = entity

      if expectancy < min_expectancy:
           # So it is now the largest we've seen
        min_expectancy = expectancy
        city2 = entity2
      list_average.append(expectancy)


# Now, after the loop we can display it:
print(f"The average life expectancy across all countries was {statistics.mean(list_average):.2f}")
print(f"The max life expectancy was in {city} with {max_expectancy} ")
print(f"The mmin life expectancy was in {city2} with {min_expectancy} ")
