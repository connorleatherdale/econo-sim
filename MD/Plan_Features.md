## Plans and Features

 - might set up something similiar to victoria 3 with how you need to build factories and farms, and whatnot
 - map dividied by states, similiar to vic 3
 - full blown economy simulator (money wise, loans, etc)
 - could do something like democracy 4 when it comes to the deficit, and taxes and whatnot
 - Rise of Nations on roblox is also an inspiration (love the idea of cities and states, with resources and tax income tied to cities)

actual window (how the node.js application looks)
- see about customizing the application
- .iso icon, all that
- make it more bare-bones (hate how electron has the top menu part thing)

- audio
    - might have to use howler.js 
        - can play several sounds at once
    - features
        - button clicks
        - sounds when you open menus
        - (if i add pop-ups) sounds when a notification pops up
        - when research is done/unlocked
        - background music?????? (maybe if someone wants to share)
        - when the user pauses/unpauses


 - user interface (HUD)
     - place for the date along with speed time thing
     - something like vic3's hud to display stats on population, gdp, money etc
     - maybe the HUD changes design to signify different periods
     - map related parts
         - when the user clicks a part of the map (like a city or territory) it should open up a menu
         - probably something similiar to vicky's menu
        
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
                
        - tech
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


    - keybinds
        - time-related keybinds
            - space - pause time
            - 1,2,3 - time multiplier
        - ` - debug menu
        - esc
            - might make a pause menu
            - put the settings in there
            - automatically pause the game whenever the pause menu pops up

- map related things
    - something similiar to vicky's map
    - probably will have cities like Rise of Nations on roblox
        - will have text over a circle to represent cities
            - text will include the city name, the population
            - clickable?
    - clickable states maybe?