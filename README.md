[Plans](./MD/Plan_Features.md)

# econo-sim

Econo-sim is a basic 2d map game loosely based off Victoria 3 and other similiar games. It is written in mostly Javascript and can be played on both Browsers and as a standalone .exe file. Mainly started as a passion project, and something i can work on in my free time.

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



# Changelog


# creating a .exe file in this
i have set this repo up so i can just run the one command to make a .exe file :D

1. having a main.js (this file has, its a basic one and should work for every single one)
2. run "npm run make"