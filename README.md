## Data Visualization Course Project
 > Supervised by Professor Isaac Pante (SLI, Lettres, University of Lausanne)
 
 

## Global Covid-19 data on the map

### Description 
This project presents a world wide map on which by clicking on each country we can see it's name, the flag and the data of Covid-19 according to the 
[United Nation's statistics.](https://unstats.un.org/home/ "United Nation's statistics")
In this work I have used the function of  "CearteMap" for creating the map. In continue, I have used the library of "Datamap". For options, I defined 
scope: "world" in order to have a worldwide map.
element : document.getElementBYID ('map') for the place of rendering the map 
responsive: is set "true" for being responsive.
fills: is defined for how the countries are colored and shown on the map. for this aim, I used the "incident rate" to define different colors. If the incident rate of a country 
is <300  it's defined as "low", incident rate >=300 : "medium" , incident rate >=700 and <1500 : "hight"  and >=1500 : "veryhight"
and then fill keys are defined as : 
Low : "green", 
Medium: "yellow",
Hight: "orange" ,
VeryHight: "red", 
I used the popupTemplate option in DataMaps for customizing the pop up of the countries. 
the popupTemplate can returns a HTML ,  in the returned HTML we can see the flag of each country and it's summary of active, confirmed, dead, and recovered cases. 
The keys of the map (countries) are defined based on ISO3 standard. 
i.e Iran : IRN, United states of America : USA
By "data.find" we can get the data of each country ( defined as attributes) and then by showData the countries name, their flag and the whole data of each one is set.
for countries flags, I used a project i found in github but the problem was that this project is by ISO2 (i.e Iran : IR, United states of America : US) 
so I made a library by the name "countries" in which I defined the name and code of each country and its ISO2 and ISO3 so I could solve the problem. 
