## Data Visualization Course Project
 > Supervised by Professor Isaac Pante (SLI, Lettres, University of Lausanne)
 
 

## Global Covid-19 data on the map

### Project Description 
This project presents a world wide map on which by clicking on each country we can see it's name, the flag and the data of Covid-19 according to the 
[United Nation's statistics.](https://covid-19-data.unstatshub.org/datasets/1cb306b5331945548745a5ccd290188e_2/api "United Nation's statistics")


### Practical desceription
In this work I have used the function of "CearteMap" for creating the map.  
In continue, I have used the library of "Datamap". For options, I defined scope: "world" in order to have a worldwide map.  
element : document.getElementBYID ('map')  
for the place of rendering the map responsive: is set "true" for being responsive.

fills: is defined for how the countries are colored and shown on the map. for this aim, I used the "incident rate" to define different colors.
> If the incident rate of a country is <300  it's defined as "low"  
 incident rate >=300 : "medium"  
 incident rate >=700 and <1500 : "hight"  
 and >=1500 : "veryhight" 
 
 Then,  I defined the fill keys:    
 > Low : "green"  
 > Medium: "yellow"  
 > Hight: "orange"  
 > VeryHight: "red"   
I used the popupTemplate option in DataMaps for customizing the pop up of the countries. 
the popupTemplate can returns a HTML and in the returned HTML we can see the flag of each country and it's summary of active, confirmed, dead, and recovered cases. 

The keys of the map (countries) are defined based on `ISO3` standard.
> i.e Iran : `IRN`, United states of America : `USA`.

By `"data.find"` we can get the data of each country ( defined as attributes) and then by `showData` the countries name, their flag and the whole data of each one is set.


for countries flags, I used [this project.](https://github.com/lipis/flag-icon-css "lipis/flag-icon-css") which is a collection of all country flags in SVG — plus the CSS for easier integration. As this project is by ISO2 (i.e Iran : IR, United states of America : US) I made a library by the name `"countries.js"` in which I defined the name and code of each country, its ISO2 and ISO3 so I could adapt it to the map standard which as mentioned before is `ISO3`. 


## Data sources
All the data in this visualization come from the website of the [United Nation.](https://covid-19-data.unstatshub.org/datasets/1cb306b5331945548745a5ccd290188e_2/api "United Nation's statistics")



## Tools
This project was generated using the library of "Datamap" and D3.
