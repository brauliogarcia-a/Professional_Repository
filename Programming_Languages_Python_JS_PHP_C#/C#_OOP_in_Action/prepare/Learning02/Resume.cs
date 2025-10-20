using System;

class Resume
{
 string _name = "Braulio Garcia Gonzalez";
 string _jobs = "\nMiselaneous Jobs since 2006\nIT Support (Lazmex) 2013-2015\nWeb Developer (Freelancer) 2014-2022\nWeb Analyst (Hewlett Packard) 2015-2016\nWeb Analyst (Hewlett Packard Enterprise) 2016-2018\nSenior Web Analyst (NXP Semiconductors) 2018-Present";
 public void display()
 {
  Console.WriteLine($"Name: {_name}\nJobs: {_jobs}");
 }
}