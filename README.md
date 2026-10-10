# econo-sim

background
ive always loved economy based games, and this honestly started because i fell in love with victoria 3's economy simulation. and after thinking to myself, i figured i would love to create my own economy-based game.

# Goals
below are some goals i would like to achieve with this project
1. low hardware requirements
    - i want to make sure a damn potato can run this
    - if possible <1gb ram usage
        - realistically gonna go for ~2-4gb
    - also dont wanna blow up peoples cpu's either
    - total size (hopefully) below 5gb (including photos and other things)
2. both a pc and website version
    - pretty self explanatory
    - would like to be able to put this on my own site so people can play it and see it

# thoughts and plans

        - been wanting to do this one for a long time, since i love economy based games (loved the economy part of both cities:skylines games, and the economy part of vic3, mentioned later on) and the thougth that eact good has a value, and theres different tiers of goods needed to create the next tier.

        - might set up something similiar to victoria 3 with how you need to build factories and farms, and whatnot
        - map dividied by states, similiar to vic 3
        - full blown economy simulator (money wise, loans, etc)
        - could do something like democracy 4 when it comes to the deficit, and taxes and whatnot
        - Rise of Nations on roblox is also an inspiration (love the idea of cities and states, with resources and tax income tied to cities)

        - user interface (HUD)
            - place for the date along with speed time thing
            - something like vic3's hud to display stats on population, gdp, money etc
            - maybe the HUD changes design to signify different periods
        
        - game mechanics/other related things
            - time period 
                - might do modern times 
                - dont think ill do the vic3 route of 1800's
                - 1950's - past 2030 or something like that

            - main mechanics
                - money system
                    - self explanatory

                - population mechanics
                    - population grows/declines
                        - grows when QoL is higher than what pop expects (think like vic3's SoL system)
                        - shrinks when famine or lack of food
                        - doubt ill make migration a thing
                    - population has basic and desire wants/needs
                        - basic needs for pops would include things like clothing and food (not sure about water)
                        - urban centers would need construction goods
                
                tech
                    - probably something similiar to vic3's where every week you gain "research"
                    - maybe something that can be unlocked?
                
                - power generation?
                    - need to build power plants to power industries



                - QoL
                    - like previously stated, QoL/Sol (Quality of Life/Standard of Life) to "summarize" the happiness/living conditions of the people

                - resources
                    - key part of the economy
                    - some goods needed by the population
                        - if goods arent supplied, QoL goes down, people get angrier etc

                - Buildings
                    - cap of buildings? maybe dependant on other buildings like what vicky has
                    - different types of buildings would have different types of upgrades
                        - store the different types of things in an array of objects


- map stuff 
    - might use leaflet to create a custom interactable map (probably what ill do instead of trying to figure out something goofy)
        - could use it pretty damn well actually

# the language debate
below are several languages i have thought about using, and the pros and cons
- javascript 
    - what is currently being used to create the game
    - pros
        - already know it
        - lots of information about it
        - easier to use, and i like the syntax (for the most part)
        - can easily port the .exe file into my site
    - cons
        - can easily tell the language was made it 10 days
        - memory usage might be a problem
            - with the .exe wrapper, like 400mb of ram is just for the chromium instance
        - can be relatively slow to other languages (since its interpreted, not compiled)

- python 
    - unsure about this one
    - pros
        - another easy language
        - syntax is quite easy
        - also has lots of documentation
        - generally an easier language
        - also should be easy to port over to the website (since python can and is used in some sites, mostly for backend stuff tho, unsure how its gonna work for me)
        - easy to convert into a .exe
    - cons
        - like javascript, its interpreted
        - unsure how much memory it'll take

- Lua
    - very similiar to the 2 before, literally the exact same cases
    - cons
        - i dont know how to reasonably convert it into a .exe

- C-based languages
    - ive learned the basics about a few of these languages
    - thought about C, C++, and C# (although C# and C++ im leaning more towards)
    - pros
        - compiled languages, meaning theyre a bit faster
        - well documented languages
    - cons
        - C is older than most programmers
        - very easy to shoot yourself in the foot when it comes to memory management
        - im a drooling toddler trying to eat a brick when it comes to these languages


# creating a .exe file in this
i have set this repo up so i can just run the one command to make a .exe file :D

1. having a main.js (this file has, its a basic one and should work for every single one)
2. run "npm run make"