#Import tkinter
from cgitb import text
import tkinter as tk
#Import datetime
import datetime
#pytz
from datetime import datetime
from pytz import timezone
import pytz


def main():
    # Create the Tk root object.
    root = tk.Tk()

    # Create the main window. In tkinter,
    # a window is also called a frame.
    frm_main = tk.Frame(root)
    frm_main.master.title("Time Zone")
    frm_main.pack(padx=5, pady=4, fill=tk.BOTH, expand=1)

    # Call the populate_main_window function, which will add
    # labels, text entry boxes, and buttons to the main window.
    populate_main_window(frm_main)

    # Start the tkinter loop that processes user events
    # such as key presses and mouse button clicks.
    root.mainloop()


def populate_main_window(frm_main):
    try:
        #call the austin time from timezones function
        timezones()
        clock_austin_f = timezones.time_austin
        #Label Austin hour
        lbl_austin = tk.Label(frm_main, text="Austin:")
        #Position Austin title
        lbl_austin.grid( row=0, column=0, padx=7, pady=5)
        #Postion and title of the clock number
        clock_austin=tk.Label(frm_main)  
        clock_austin.config(text=clock_austin_f)
        clock_austin.grid(row=1, column=0, padx=7, pady=5)

        #call the phoenix time from timezones function
        timezones()
        clock_phoenix_f = timezones.time_phoenix
        #Label Houston hour
        lbl_phoenix = tk.Label(frm_main, text="Phoenix:")
        #Position Houston hour
        lbl_phoenix.grid( row=0, column=1, padx=7, pady=5)
        #Postion and title of the clock number
        clock_phoenix=tk.Label(frm_main)  
        clock_phoenix.config(text=clock_phoenix_f)
        clock_phoenix.grid(row=1, column=1, padx=7, pady=5)


        #call the france time from timezones function
        timezones()
        clock_france_f = timezones.time_france
        #Label France hour
        lbl_france = tk.Label(frm_main, text="France:")
        #Position France hour
        lbl_france.grid( row=2, column=0, padx=7, pady=5)
        #Postion and title of the clock number
        clock_france=tk.Label(frm_main)  
        clock_france.config(text=clock_france_f)
        clock_france.grid(row=3, column=0, padx=7, pady=5)


        #call the germany time from timezones function
        timezones()
        clock_germany_f = timezones.time_germany
        #Position Germany hour
        lbl_germany = tk.Label(frm_main, text="Germany:")
        #Position Germany hour
        lbl_germany.grid( row=2, column=1, padx=7, pady=5)
        #Postion and title of the clock number
        clock_germany=tk.Label(frm_main)  
        clock_germany.config(text=clock_germany_f)
        clock_germany.grid(row=3, column=1, padx=7, pady=5)

        #call the neatherlands time from timezones function
        timezones()
        clock_neatherlands_f = timezones.time_neatherlands
        #Position Neatherlands hour
        lbl_neatherlands = tk.Label(frm_main, text="Neatherlands:")
        #Position Neatherlands hour
        lbl_neatherlands.grid( row=4, column=0, padx=7, pady=5)
        #Postion and title of the clock number
        clock_neatherlands=tk.Label(frm_main)  
        clock_neatherlands.config(text=clock_neatherlands_f)
        clock_neatherlands.grid(row=5, column=0, padx=7, pady=5)
    
        #call the japan time from timezones function
        timezones()
        clock_japan_f = timezones.time_japan
        #Position Japan hour
        lbl_japan = tk.Label(frm_main, text="Japan:")
        #Position Japan hour
        lbl_japan.grid( row=4, column=1, padx=7, pady=5)
        #Postion and title of the clock number
        clock_japan=tk.Label(frm_main)  
        clock_japan.config(text=clock_japan_f)
        clock_japan.grid(row=5, column=1, padx=7, pady=5)

        #call the china time from timezones function
        timezones()
        clock_china_f = timezones.time_china
        #Position China hour
        lbl_china = tk.Label(frm_main, text="China:")
        #Position China hour
        lbl_china.grid( row=6, column=0, padx=7, pady=5)
        #Postion and title of the clock number
        clock_china=tk.Label(frm_main)  
        clock_china.config(text=clock_china_f)
        clock_china.grid(row=7, column=0, padx=7, pady=5)

    except ValueError:
        # When the user deletes all the digits in the age
        # entry box, clear the slowest and fastest labels.
        clock_austin.config(text="")
        clock_phoenix.config(text="")
        clock_france.config(text="")
        clock_germany.config(text="")
        clock_neatherlands.config(text="")
        clock_japan.config(text="")
        clock_china.config(text="")

def timezones():
    #Get the time from Austin
    dt_austin = datetime.now(pytz.timezone('US/Central'))
    timezones.time_austin = dt_austin.strftime("%H:%M:%S")
    #Get the time from Phoenix
    dt_phoenix = datetime.now(pytz.timezone('America/Phoenix'))
    timezones.time_phoenix = dt_phoenix.strftime("%H:%M:%S")
    #Get the time from France
    dt_france = datetime.now(pytz.timezone('Europe/Paris'))
    timezones.time_france = dt_france.strftime("%H:%M:%S")
    #Get the time from Germany
    dt_germany = datetime.now(pytz.timezone('Europe/Berlin'))
    timezones.time_germany = dt_germany.strftime("%H:%M:%S")
    #Get the time from Neatherlands
    dt_neatherlands = datetime.now(pytz.timezone('Europe/Amsterdam'))
    timezones.time_neatherlands = dt_neatherlands.strftime("%H:%M:%S")
    #Get the time from Japan
    dt_japan = datetime.now(pytz.timezone('Japan'))
    timezones.time_japan = dt_japan.strftime("%H:%M:%S")
    #Get the time from China
    dt_china = datetime.now(pytz.timezone('Asia/Shanghai'))
    timezones.time_china = dt_china.strftime("%H:%M:%S")

if __name__ == "__main__":
    main()