var _MOVIES = [
  {
    "title": "Star Wars Ep. VII: The Force Awakens",
    "released": "12/18/15",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 742208942,
    "tickets": 88043765
  },
  {
    "title": "Jurassic World",
    "released": "6/12/15",
    "distributor": "Universal",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 652198010,
    "tickets": 77366311
  },
  {
    "title": "The Avengers: Age of Ultron",
    "released": "5/1/15",
    "distributor": "Walt Disney",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 459005868,
    "tickets": 54449094
  },
  {
    "title": "Inside Out",
    "released": "6/19/15",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 356461711,
    "tickets": 42284900
  },
  {
    "title": "Furious 7",
    "released": "4/3/15",
    "distributor": "Universal",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 351032910,
    "tickets": 41640914
  },
  {
    "title": "American Sniper",
    "released": "12/25/14",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 347897084,
    "tickets": 41268930
  },
  {
    "title": "Minions",
    "released": "7/10/15",
    "distributor": "Universal",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 336045770,
    "tickets": 39863080
  },
  {
    "title": "The Hunger Games: Mockingjay - Part 2",
    "released": "11/20/15",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 274185395,
    "tickets": 32524957
  },
  {
    "title": "The Martian",
    "released": "10/2/15",
    "distributor": "20th Century Fox",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 225910757,
    "tickets": 26798429
  },
  {
    "title": "Cinderella",
    "released": "3/13/15",
    "distributor": "Walt Disney",
    "genre": "Drama",
    "rating": "PG",
    "gross": 201151353,
    "tickets": 23861370
  },
  {
    "title": "Spectre",
    "released": "11/6/15",
    "distributor": "Sony Pictures",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 197833291,
    "tickets": 23467768
  },
  {
    "title": "Mission: Impossible - Rogue Nation",
    "released": "7/31/15",
    "distributor": "Paramount Pictures",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 195042377,
    "tickets": 23136699
  },
  {
    "title": "Pitch Perfect 2",
    "released": "5/15/15",
    "distributor": "Universal",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 183785415,
    "tickets": 21801354
  },
  {
    "title": "Ant-Man",
    "released": "7/17/15",
    "distributor": "Walt Disney",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 180202163,
    "tickets": 21376294
  },
  {
    "title": "Home",
    "released": "3/27/15",
    "distributor": "20th Century Fox",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 177397510,
    "tickets": 21043595
  },
  {
    "title": "Hotel Transylvania 2",
    "released": "9/25/15",
    "distributor": "Sony Pictures",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 168774344,
    "tickets": 20020681
  },
  {
    "title": "Fifty Shades of Grey",
    "released": "2/13/15",
    "distributor": "Universal",
    "genre": "Drama",
    "rating": "R",
    "gross": 166167230,
    "tickets": 19711415
  },
  {
    "title": "The SpongeBob Movie: Sponge Out of Water",
    "released": "2/6/15",
    "distributor": "Paramount Pictures",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 162994032,
    "tickets": 19334997
  },
  {
    "title": "Straight Outta Compton",
    "released": "8/14/15",
    "distributor": "Universal",
    "genre": "Drama",
    "rating": "R",
    "gross": 161058685,
    "tickets": 19105419
  },
  {
    "title": "San Andreas",
    "released": "5/29/15",
    "distributor": "Warner Bros.",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 155190832,
    "tickets": 18409351
  },
  {
    "title": "Mad Max: Fury Road",
    "released": "5/15/15",
    "distributor": "Warner Bros.",
    "genre": "Action",
    "rating": "R",
    "gross": 153636354,
    "tickets": 18224953
  },
  {
    "title": "The Rocky Horror Picture Show",
    "released": "9/26/75",
    "distributor": "20th Century Fox",
    "genre": "Musical",
    "rating": "R",
    "gross": 140219772,
    "tickets": 16633424
  },
  {
    "title": "The Divergent Serires: Insurgent",
    "released": "3/20/15",
    "distributor": "Lionsgate",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 130179072,
    "tickets": 15442357
  },
  {
    "title": "The Peanuts Movie",
    "released": "11/6/15",
    "distributor": "20th Century Fox",
    "genre": "Comedy",
    "rating": "G",
    "gross": 128763058,
    "tickets": 15274384
  },
  {
    "title": "Kingsman: The Secret Service",
    "released": "2/13/15",
    "distributor": "20th Century Fox",
    "genre": "Action",
    "rating": "R",
    "gross": 128261724,
    "tickets": 15214913
  },
  {
    "title": "The Good Dinosaur",
    "released": "11/25/15",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 114766932,
    "tickets": 13614108
  },
  {
    "title": "Spy!",
    "released": "6/5/15",
    "distributor": "20th Century Fox",
    "genre": "Comedy",
    "rating": "R",
    "gross": 110825712,
    "tickets": 13146585
  },
  {
    "title": "Trainwreck",
    "released": "7/17/15",
    "distributor": "Universal",
    "genre": "Comedy",
    "rating": "R",
    "gross": 110038130,
    "tickets": 13053158
  },
  {
    "title": "Creed",
    "released": "11/25/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 103122271,
    "tickets": 12232772
  },
  {
    "title": "Daddy's Home",
    "released": "12/25/15",
    "distributor": "Paramount Pictures",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 93889861,
    "tickets": 11137587
  },
  {
    "title": "Tomorrowland",
    "released": "5/22/15",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 93436322,
    "tickets": 11083786
  },
  {
    "title": "Get Hard",
    "released": "3/27/15",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "R",
    "gross": 90411453,
    "tickets": 10724964
  },
  {
    "title": "Terminator: Genisys",
    "released": "7/1/15",
    "distributor": "Paramount Pictures",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 89760956,
    "tickets": 10647800
  },
  {
    "title": "Taken 3",
    "released": "1/9/15",
    "distributor": "20th Century Fox",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 89256424,
    "tickets": 10587950
  },
  {
    "title": "Maze Runner: The Scorch Trials",
    "released": "9/18/15",
    "distributor": "20th Century Fox",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 81660593,
    "tickets": 9686903
  },
  {
    "title": "Ted 2",
    "released": "6/26/15",
    "distributor": "Universal",
    "genre": "Comedy",
    "rating": "R",
    "gross": 81284830,
    "tickets": 9642328
  },
  {
    "title": "Goosebumps",
    "released": "10/16/15",
    "distributor": "Sony Pictures",
    "genre": "Horror",
    "rating": "PG",
    "gross": 79370088,
    "tickets": 9415194
  },
  {
    "title": "Pixels",
    "released": "7/24/15",
    "distributor": "Sony Pictures",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 78747585,
    "tickets": 9341350
  },
  {
    "title": "Paddington",
    "released": "1/16/15",
    "distributor": "Weinstein Co.",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 76223578,
    "tickets": 9041942
  },
  {
    "title": "The Intern",
    "released": "9/25/15",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 75711361,
    "tickets": 8981181
  },
  {
    "title": "Paul Blart: Mall Cop 2",
    "released": "4/17/15",
    "distributor": "Sony Pictures",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 71038190,
    "tickets": 8426831
  },
  {
    "title": "Bridge of Spies",
    "released": "10/16/15",
    "distributor": "Walt Disney",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 70610153,
    "tickets": 8376056
  },
  {
    "title": "War Room",
    "released": "8/28/15",
    "distributor": "Sony Pictures",
    "genre": "Drama",
    "rating": "PG",
    "gross": 67790117,
    "tickets": 8041532
  },
  {
    "title": "Alvin and the Chipmunks: The Road Chip",
    "released": "12/18/15",
    "distributor": "20th Century Fox",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 67646950,
    "tickets": 8024549
  },
  {
    "title": "Magic Mike XXL",
    "released": "7/1/15",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "R",
    "gross": 66013057,
    "tickets": 7830730
  },
  {
    "title": "The Visit",
    "released": "9/11/15",
    "distributor": "Universal",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 65112020,
    "tickets": 7723845
  },
  {
    "title": "The Wedding Ringer",
    "released": "1/16/15",
    "distributor": "Sony Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 64460211,
    "tickets": 7646525
  },
  {
    "title": "Black Mass",
    "released": "9/18/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 62575678,
    "tickets": 7422974
  },
  {
    "title": "Sisters",
    "released": "12/18/15",
    "distributor": "Universal",
    "genre": "Comedy",
    "rating": "R",
    "gross": 61884110,
    "tickets": 7340938
  },
  {
    "title": "The Imitation Game",
    "released": "11/28/14",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 60653053,
    "tickets": 7194905
  },
  {
    "title": "Vacation",
    "released": "7/29/15",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "R",
    "gross": 58884188,
    "tickets": 6985075
  },
  {
    "title": "The Perfect Guy",
    "released": "9/11/15",
    "distributor": "Sony Pictures",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 57017904,
    "tickets": 6763689
  },
  {
    "title": "Fantastic Four",
    "released": "8/7/15",
    "distributor": "20th Century Fox",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 56117548,
    "tickets": 6656885
  },
  {
    "title": "Focus",
    "released": "2/27/15",
    "distributor": "Warner Bros.",
    "genre": "Romantic Comedy",
    "rating": "PG-13",
    "gross": 53862963,
    "tickets": 6389438
  },
  {
    "title": "Southpaw",
    "released": "7/24/15",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "R",
    "gross": 52421953,
    "tickets": 6218499
  },
  {
    "title": "Insidious Chapter 3",
    "released": "6/5/15",
    "distributor": "Focus Features",
    "genre": "Horror",
    "rating": "PG-13",
    "gross": 52218558,
    "tickets": 6194372
  },
  {
    "title": "Selma",
    "released": "12/25/14",
    "distributor": "Paramount Pictures",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 50008455,
    "tickets": 5932201
  },
  {
    "title": "Jupiter Ascending",
    "released": "2/6/15",
    "distributor": "Warner Bros.",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 47482519,
    "tickets": 5632564
  },
  {
    "title": "Poltergeist",
    "released": "5/22/15",
    "distributor": "20th Century Fox",
    "genre": "Horror",
    "rating": "PG-13",
    "gross": 47425125,
    "tickets": 5625756
  },
  {
    "title": "Sicario",
    "released": "9/18/15",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 46823967,
    "tickets": 5554444
  },
  {
    "title": "The Man From U.N.C.L.E.",
    "released": "8/14/15",
    "distributor": "Warner Bros.",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 45445109,
    "tickets": 5390878
  },
  {
    "title": "McFarland, USA",
    "released": "2/20/15",
    "distributor": "Walt Disney",
    "genre": "Drama",
    "rating": "PG",
    "gross": 44480275,
    "tickets": 5276426
  },
  {
    "title": "The Gift",
    "released": "8/7/15",
    "distributor": "STX Entertainment",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 43787265,
    "tickets": 5194218
  },
  {
    "title": "Everest",
    "released": "9/18/15",
    "distributor": "Universal",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 43309450,
    "tickets": 5137538
  },
  {
    "title": "The Night Before",
    "released": "11/20/15",
    "distributor": "Sony Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 42977255,
    "tickets": 5098132
  },
  {
    "title": "Max",
    "released": "6/26/15",
    "distributor": "Warner Bros.",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 42656255,
    "tickets": 5060053
  },
  {
    "title": "The Age of Adaline",
    "released": "4/24/15",
    "distributor": "Lionsgate",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 42629776,
    "tickets": 5056912
  },
  {
    "title": "Krampus",
    "released": "12/4/15",
    "distributor": "Universal",
    "genre": "Black Comedy",
    "rating": "PG-13",
    "gross": 42277730,
    "tickets": 5015151
  },
  {
    "title": "Joy",
    "released": "12/25/15",
    "distributor": "20th Century Fox",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 38521065,
    "tickets": 4569521
  },
  {
    "title": "The Longest Ride",
    "released": "4/10/15",
    "distributor": "20th Century Fox",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 37446117,
    "tickets": 4442006
  },
  {
    "title": "Into the Woods",
    "released": "12/25/14",
    "distributor": "Walt Disney",
    "genre": "Musical",
    "rating": "PG",
    "gross": 37130717,
    "tickets": 4404592
  },
  {
    "title": "The Boy Next Door",
    "released": "1/23/15",
    "distributor": "Universal",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 35423380,
    "tickets": 4202061
  },
  {
    "title": "Pan",
    "released": "10/9/15",
    "distributor": "Warner Bros.",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 35081641,
    "tickets": 4161523
  },
  {
    "title": "Hot Pursuit",
    "released": "5/8/15",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 34580201,
    "tickets": 4102040
  },
  {
    "title": "The Hobbit: The Battle of the Five Armies",
    "released": "12/17/14",
    "distributor": "Warner Bros.",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 34517771,
    "tickets": 4094634
  },
  {
    "title": "The DUFF",
    "released": "2/20/15",
    "distributor": "CBS Films",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 34030343,
    "tickets": 4036814
  },
  {
    "title": "Woman in Gold",
    "released": "4/1/15",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 33307793,
    "tickets": 3951102
  },
  {
    "title": "The Second Best Exotic Marigold Hotel",
    "released": "3/6/15",
    "distributor": "Fox Searchlight",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 33078266,
    "tickets": 3923874
  },
  {
    "title": "The Big Short",
    "released": "12/11/15",
    "distributor": "Paramount Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 33055481,
    "tickets": 3921172
  },
  {
    "title": "Unfriended",
    "released": "4/17/15",
    "distributor": "Universal",
    "genre": "Horror",
    "rating": "R",
    "gross": 32482090,
    "tickets": 3853154
  },
  {
    "title": "Entourage",
    "released": "6/3/15",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "R",
    "gross": 32363404,
    "tickets": 3839075
  },
  {
    "title": "Paper Towns",
    "released": "7/24/15",
    "distributor": "20th Century Fox",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 32000304,
    "tickets": 3796002
  },
  {
    "title": "Chappie",
    "released": "3/6/15",
    "distributor": "Sony Pictures",
    "genre": "Action",
    "rating": "R",
    "gross": 31569268,
    "tickets": 3744871
  },
  {
    "title": "Crimson Peak",
    "released": "10/16/15",
    "distributor": "Universal",
    "genre": "Horror",
    "rating": "R",
    "gross": 31090320,
    "tickets": 3688056
  },
  {
    "title": "A Walk in the Woods",
    "released": "9/2/15",
    "distributor": "Broad Green Pictures",
    "genre": "Adventure",
    "rating": "R",
    "gross": 29499394,
    "tickets": 3499334
  },
  {
    "title": "The Hateful Eight",
    "released": "12/25/15",
    "distributor": "Weinstein Co.",
    "genre": "Western",
    "rating": "R",
    "gross": 29045855,
    "tickets": 3445534
  },
  {
    "title": "Unbroken",
    "released": "12/25/14",
    "distributor": "Universal",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 27986400,
    "tickets": 3319857
  },
  {
    "title": "Sinister 2",
    "released": "8/21/15",
    "distributor": "Focus Features",
    "genre": "Horror",
    "rating": "R",
    "gross": 27740955,
    "tickets": 3290741
  },
  {
    "title": "The Last Witch Hunter",
    "released": "10/23/15",
    "distributor": "Lionsgate",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 27367660,
    "tickets": 3246460
  },
  {
    "title": "No Escape",
    "released": "8/26/15",
    "distributor": "Weinstein Co.",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 27288872,
    "tickets": 3237114
  },
  {
    "title": "Spotlight",
    "released": "11/6/15",
    "distributor": "Open Road",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 27108972,
    "tickets": 3215773
  },
  {
    "title": "Ricki and the Flash",
    "released": "8/7/15",
    "distributor": "Sony Pictures",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 26822144,
    "tickets": 3181748
  },
  {
    "title": "The Woman in Black 2: Angel of Death",
    "released": "1/2/15",
    "distributor": "Relativity",
    "genre": "Horror",
    "rating": "PG-13",
    "gross": 26501323,
    "tickets": 3143691
  },
  {
    "title": "Run All Night",
    "released": "3/13/15",
    "distributor": "Warner Bros.",
    "genre": "Action",
    "rating": "R",
    "gross": 26461644,
    "tickets": 3138985
  },
  {
    "title": "Love the Coopers",
    "released": "11/13/15",
    "distributor": "CBS Films",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 26193757,
    "tickets": 3107207
  },
  {
    "title": "The Lazarus Effect",
    "released": "2/27/15",
    "distributor": "Lionsgate",
    "genre": "Horror",
    "rating": "PG-13",
    "gross": 25801570,
    "tickets": 3060684
  },
  {
    "title": "Ex Machina",
    "released": "4/24/15",
    "distributor": "A24",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 25440971,
    "tickets": 3017908
  },
  {
    "title": "Concussion",
    "released": "12/25/15",
    "distributor": "Sony Pictures",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 25266650,
    "tickets": 2997230
  },
  {
    "title": "Night at the Museum: Secret of the Tomb",
    "released": "12/19/14",
    "distributor": "20th Century Fox",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 23899442,
    "tickets": 2835046
  },
  {
    "title": "In the Heart of the Sea",
    "released": "12/11/15",
    "distributor": "Warner Bros.",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 23750170,
    "tickets": 2817339
  },
  {
    "title": "The Gallows",
    "released": "7/10/15",
    "distributor": "Warner Bros.",
    "genre": "Horror",
    "rating": "R",
    "gross": 22764410,
    "tickets": 2700404
  },
  {
    "title": "Hitman: Agent 47",
    "released": "8/21/15",
    "distributor": "20th Century Fox",
    "genre": "Action",
    "rating": "R",
    "gross": 22467450,
    "tickets": 2665177
  },
  {
    "title": "Point Break",
    "released": "12/25/15",
    "distributor": "Warner Bros.",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 22402176,
    "tickets": 2657434
  },
  {
    "title": "Project Almanac",
    "released": "1/30/15",
    "distributor": "Paramount Pictures",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 22348241,
    "tickets": 2651036
  },
  {
    "title": "Black or White",
    "released": "1/30/15",
    "distributor": "Relativity",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 21571189,
    "tickets": 2558859
  },
  {
    "title": "Aloha",
    "released": "5/29/15",
    "distributor": "Sony Pictures",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 21052030,
    "tickets": 2497275
  },
  {
    "title": "Brooklyn",
    "released": "11/4/15",
    "distributor": "Fox Searchlight",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 20812853,
    "tickets": 2468903
  },
  {
    "title": "Secret in Their Eyes",
    "released": "11/20/15",
    "distributor": "STX Entertainment",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 20119034,
    "tickets": 2386599
  },
  {
    "title": "Shaun the Sheep",
    "released": "8/5/15",
    "distributor": "Lionsgate",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 19375982,
    "tickets": 2298455
  },
  {
    "title": "Still Alice",
    "released": "1/16/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 18656400,
    "tickets": 2213096
  },
  {
    "title": "Paranormal Activity: The Ghost Dimension",
    "released": "10/23/15",
    "distributor": "Paramount Pictures",
    "genre": "Horror",
    "rating": "R",
    "gross": 18297124,
    "tickets": 2170477
  },
  {
    "title": "Steve Jobs",
    "released": "10/9/15",
    "distributor": "Universal",
    "genre": "Drama",
    "rating": "R",
    "gross": 17766658,
    "tickets": 2107551
  },
  {
    "title": "Mr. Holmes",
    "released": "7/17/15",
    "distributor": "Miramax/Roadside Attractions",
    "genre": "Drama",
    "rating": "PG",
    "gross": 17737646,
    "tickets": 2104109
  },
  {
    "title": "Dope",
    "released": "6/19/15",
    "distributor": "Open Road",
    "genre": "Comedy",
    "rating": "R",
    "gross": 17506470,
    "tickets": 2076686
  },
  {
    "title": "Seventh Son",
    "released": "2/6/15",
    "distributor": "Universal",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 17223265,
    "tickets": 2043091
  },
  {
    "title": "Birdman or (The Unexpected Virtue of Ignorance)",
    "released": "10/17/14",
    "distributor": "Fox Searchlight",
    "genre": "Black Comedy",
    "rating": "R",
    "gross": 16916030,
    "tickets": 2006646
  },
  {
    "title": "Monkey Kingdom",
    "released": "4/17/15",
    "distributor": "Walt Disney",
    "genre": "Documentary",
    "rating": "G",
    "gross": 16432322,
    "tickets": 1949267
  },
  {
    "title": "The Transporter Refueled",
    "released": "9/4/15",
    "distributor": "EuropaCorp",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 16029670,
    "tickets": 1901502
  },
  {
    "title": "It Follows",
    "released": "3/13/15",
    "distributor": "RADiUS-TWC",
    "genre": "Horror",
    "rating": "R",
    "gross": 14674077,
    "tickets": 1740697
  },
  {
    "title": "American Ultra",
    "released": "8/21/15",
    "distributor": "Lionsgate",
    "genre": "Black Comedy",
    "rating": "R",
    "gross": 14439985,
    "tickets": 1712928
  },
  {
    "title": "Woodlawn",
    "released": "10/16/15",
    "distributor": "Pure Flix Entertainment",
    "genre": "Drama",
    "rating": "PG",
    "gross": 14380599,
    "tickets": 1705883
  },
  {
    "title": "Burnt",
    "released": "10/30/15",
    "distributor": "Weinstein Co.",
    "genre": "Comedy",
    "rating": "R",
    "gross": 13596955,
    "tickets": 1612924
  },
  {
    "title": "Annie",
    "released": "12/19/14",
    "distributor": "Sony Pictures",
    "genre": "Musical",
    "rating": "PG",
    "gross": 13450892,
    "tickets": 1595598
  },
  {
    "title": "The Hunger Games: Mockingjay - Part 1",
    "released": "11/21/14",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 13401383,
    "tickets": 1589725
  },
  {
    "title": "Do You Believe?",
    "released": "3/20/15",
    "distributor": "Pure Flix Entertainment",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 12985600,
    "tickets": 1540403
  },
  {
    "title": "Love & Mercy",
    "released": "6/5/15",
    "distributor": "Roadside Attractions",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 12551031,
    "tickets": 1488853
  },
  {
    "title": "Strange Magic",
    "released": "1/23/15",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 12429583,
    "tickets": 1474446
  },
  {
    "title": "Hot Tub Time Machine 2",
    "released": "2/20/15",
    "distributor": "Paramount Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 12314651,
    "tickets": 1460812
  },
  {
    "title": "Self/Less",
    "released": "7/10/15",
    "distributor": "Focus Features",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 12279691,
    "tickets": 1456665
  },
  {
    "title": "Far from the Madding Crowd",
    "released": "5/1/15",
    "distributor": "Fox Searchlight",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 12236500,
    "tickets": 1451542
  },
  {
    "title": "Back to the Future",
    "released": "7/3/85",
    "distributor": "Universal",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 12127168,
    "tickets": 1438572
  },
  {
    "title": "The 33",
    "released": "11/13/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 12122453,
    "tickets": 1438013
  },
  {
    "title": "Wild",
    "released": "12/3/14",
    "distributor": "Fox Searchlight",
    "genre": "Drama",
    "rating": "R",
    "gross": 11999452,
    "tickets": 1423422
  },
  {
    "title": "Big Hero 6",
    "released": "11/7/14",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 11320792,
    "tickets": 1342917
  },
  {
    "title": "The Theory of Everything",
    "released": "11/7/14",
    "distributor": "Focus Features",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 11121187,
    "tickets": 1319239
  },
  {
    "title": "The Gunman",
    "released": "3/20/15",
    "distributor": "Open Road",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 10664749,
    "tickets": 1265094
  },
  {
    "title": "Unfinished Business",
    "released": "3/6/15",
    "distributor": "20th Century Fox",
    "genre": "Comedy",
    "rating": "R",
    "gross": 10219501,
    "tickets": 1212277
  },
  {
    "title": "The Walk",
    "released": "10/9/15",
    "distributor": "Sony Pictures",
    "genre": "Drama",
    "rating": "PG",
    "gross": 10137502,
    "tickets": 1202550
  },
  {
    "title": "Un gallo con muchos huevos",
    "released": "9/4/15",
    "distributor": "Lionsgate",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 9080818,
    "tickets": 1077202
  },
  {
    "title": "Amy",
    "released": "7/3/15",
    "distributor": "A24",
    "genre": "Documentary",
    "rating": "R",
    "gross": 8409616,
    "tickets": 997581
  },
  {
    "title": "Bajrangi Bhaijaan",
    "released": "7/17/15",
    "distributor": "Eros Entertainment",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 8178001,
    "tickets": 970106
  },
  {
    "title": "Dragon Ball Z: Resurrection \"F",
    "released": "8/4/15",
    "distributor": "FUNimation",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 8008363,
    "tickets": 949983
  },
  {
    "title": "Blackhat",
    "released": "1/16/15",
    "distributor": "Universal",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 7889395,
    "tickets": 935871
  },
  {
    "title": "Mortdecai",
    "released": "1/23/15",
    "distributor": "Lionsgate",
    "genre": "Comedy",
    "rating": "R",
    "gross": 7696134,
    "tickets": 912945
  },
  {
    "title": "While We're Young",
    "released": "3/27/15",
    "distributor": "A24",
    "genre": "Comedy",
    "rating": "R",
    "gross": 7582065,
    "tickets": 899414
  },
  {
    "title": "I'll See You in My Dreams",
    "released": "5/15/15",
    "distributor": "Bleecker Street",
    "genre": "Romantic Comedy",
    "rating": "PG-13",
    "gross": 7449681,
    "tickets": 883710
  },
  {
    "title": "The Green Inferno",
    "released": "9/25/15",
    "distributor": "High Top Releasing",
    "genre": "Horror",
    "rating": "R",
    "gross": 7192291,
    "tickets": 853178
  },
  {
    "title": "Whiplash",
    "released": "10/10/14",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 7190389,
    "tickets": 852952
  },
  {
    "title": "Trumbo",
    "released": "11/6/15",
    "distributor": "Bleecker Street",
    "genre": "Drama",
    "rating": "R",
    "gross": 7015228,
    "tickets": 832174
  },
  {
    "title": "Our Brand is Crisis",
    "released": "10/30/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 7002261,
    "tickets": 830635
  },
  {
    "title": "Grandma",
    "released": "8/21/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Comedy",
    "rating": "R",
    "gross": 6928220,
    "tickets": 821852
  },
  {
    "title": "Me and Earl and the Dying Girl",
    "released": "6/12/15",
    "distributor": "Fox Searchlight",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 6758416,
    "tickets": 801710
  },
  {
    "title": "Baahubali: The Beginning",
    "released": "7/10/15",
    "distributor": "Bluesky Cinemas",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 6738000,
    "tickets": 799288
  },
  {
    "title": "Inherent Vice",
    "released": "12/12/14",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 6647997,
    "tickets": 788611
  },
  {
    "title": "Little Boy",
    "released": "4/24/15",
    "distributor": "Open Road",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 6485961,
    "tickets": 769390
  },
  {
    "title": "The Gambler",
    "released": "12/10/14",
    "distributor": "Paramount Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 6074726,
    "tickets": 720608
  },
  {
    "title": "The Danish Girl",
    "released": "11/27/15",
    "distributor": "Focus Features",
    "genre": "Drama",
    "rating": "R",
    "gross": 6050349,
    "tickets": 717716
  },
  {
    "title": "The Loft",
    "released": "1/30/15",
    "distributor": "Open Road",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 6002684,
    "tickets": 712062
  },
  {
    "title": "Bajirao Mastani",
    "released": "12/18/15",
    "distributor": "Eros Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5848971,
    "tickets": 693828
  },
  {
    "title": "Victor Frankenstein",
    "released": "11/25/15",
    "distributor": "20th Century Fox",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 5775076,
    "tickets": 685062
  },
  {
    "title": "Danny Collins",
    "released": "3/20/15",
    "distributor": "Bleecker Street",
    "genre": "Comedy",
    "rating": "R",
    "gross": 5637066,
    "tickets": 668691
  },
  {
    "title": "A Most Violent Year",
    "released": "12/31/14",
    "distributor": "A24",
    "genre": "Drama",
    "rating": "R",
    "gross": 5463088,
    "tickets": 648053
  },
  {
    "title": "Penguins of Madagascar",
    "released": "11/26/14",
    "distributor": "20th Century Fox",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 5234131,
    "tickets": 620893
  },
  {
    "title": "Interstellar",
    "released": "11/7/14",
    "distributor": "Paramount Pictures",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 5215800,
    "tickets": 618718
  },
  {
    "title": "Carol",
    "released": "11/20/15",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "R",
    "gross": 4982475,
    "tickets": 591040
  },
  {
    "title": "Room",
    "released": "10/16/15",
    "distributor": "A24",
    "genre": "Drama",
    "rating": "R",
    "gross": 4976972,
    "tickets": 590388
  },
  {
    "title": "90 Minutes in Heaven",
    "released": "9/11/15",
    "distributor": "Samuel Goldwyn Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 4816142,
    "tickets": 571309
  },
  {
    "title": "True Story",
    "released": "4/17/15",
    "distributor": "Fox Searchlight",
    "genre": "Drama",
    "rating": "R",
    "gross": 4719695,
    "tickets": 559868
  },
  {
    "title": "Dilwale",
    "released": "12/18/15",
    "distributor": "UTV Communications",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 4704632,
    "tickets": 558082
  },
  {
    "title": "Suffragette",
    "released": "10/23/15",
    "distributor": "Focus Features",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 4668603,
    "tickets": 553808
  },
  {
    "title": "Big Eyes",
    "released": "12/25/14",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 4558006,
    "tickets": 540688
  },
  {
    "title": "Prem Ratan Dhan Payo",
    "released": "11/12/15",
    "distributor": "Fox International",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 4364639,
    "tickets": 517750
  },
  {
    "title": "The Water Diviner",
    "released": "4/24/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 4200117,
    "tickets": 498234
  },
  {
    "title": "Foxcatcher",
    "released": "11/14/14",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 4153511,
    "tickets": 492705
  },
  {
    "title": "Hubble 3D",
    "released": "3/19/10",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "G",
    "gross": 4088852,
    "tickets": 485035
  },
  {
    "title": "Irrational Man",
    "released": "7/17/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Comedy",
    "rating": "R",
    "gross": 4030360,
    "tickets": 478097
  },
  {
    "title": "Scout's Guide to the Zombie Apocalypse",
    "released": "10/30/15",
    "distributor": "Paramount Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 3703046,
    "tickets": 439269
  },
  {
    "title": "Exodus: Gods and Kings",
    "released": "12/12/14",
    "distributor": "20th Century Fox",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 3671578,
    "tickets": 435537
  },
  {
    "title": "A La Mala",
    "released": "2/27/15",
    "distributor": "Lionsgate",
    "genre": "Romantic Comedy",
    "rating": "PG-13",
    "gross": 3629842,
    "tickets": 430586
  },
  {
    "title": "Spare Parts",
    "released": "1/16/15",
    "distributor": "Lionsgate",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 3618912,
    "tickets": 429289
  },
  {
    "title": "We Are Your Friends",
    "released": "8/28/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 3591417,
    "tickets": 426028
  },
  {
    "title": "Mommy",
    "released": "1/23/15",
    "distributor": "Roadside Attractions",
    "genre": "Drama",
    "rating": "R",
    "gross": 3498695,
    "tickets": 415029
  },
  {
    "title": "What We Do in the Shadows",
    "released": "2/13/15",
    "distributor": "Unison/Paladin",
    "genre": "Comedy",
    "rating": "R",
    "gross": 3469224,
    "tickets": 411533
  },
  {
    "title": "Learning to Drive",
    "released": "8/21/15",
    "distributor": "Broad Green Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 3447633,
    "tickets": 408971
  },
  {
    "title": "Space Station",
    "released": "4/19/02",
    "distributor": "IMAX Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 3201391,
    "tickets": 379761
  },
  {
    "title": "Phoenix",
    "released": "7/24/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 3166858,
    "tickets": 375665
  },
  {
    "title": "Wild Tales",
    "released": "2/20/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Comedy",
    "rating": "R",
    "gross": 3107072,
    "tickets": 368573
  },
  {
    "title": "Dil Dhadakne Do",
    "released": "6/5/15",
    "distributor": "Eros Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3066100,
    "tickets": 363712
  },
  {
    "title": "Ladrones",
    "released": "10/9/15",
    "distributor": "Lionsgate",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 3063505,
    "tickets": 363405
  },
  {
    "title": "Tanu Weds Manu Returns",
    "released": "5/22/15",
    "distributor": "Eros Entertainment",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 3043479,
    "tickets": 361029
  },
  {
    "title": "Rock the Kasbah",
    "released": "10/23/15",
    "distributor": "Open Road",
    "genre": "Comedy",
    "rating": "R",
    "gross": 3020665,
    "tickets": 358323
  },
  {
    "title": "The End of the Tour",
    "released": "7/31/15",
    "distributor": "A24",
    "genre": "Drama",
    "rating": "R",
    "gross": 3002883,
    "tickets": 356213
  },
  {
    "title": "Mr. Turner",
    "released": "12/19/14",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 2995728,
    "tickets": 355365
  },
  {
    "title": "Badlapur",
    "released": "2/20/15",
    "distributor": "Eros Entertainment",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 2825542,
    "tickets": 335176
  },
  {
    "title": "He Named Me Malala",
    "released": "10/2/15",
    "distributor": "Fox Searchlight",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 2668936,
    "tickets": 316599
  },
  {
    "title": "Chi-raq",
    "released": "12/4/15",
    "distributor": "Amazon Studios/Roadside Attractions",
    "genre": "Drama",
    "rating": "R",
    "gross": 2601330,
    "tickets": 308580
  },
  {
    "title": "Captive",
    "released": "9/18/15",
    "distributor": "Paramount Pictures",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 2583301,
    "tickets": 306441
  },
  {
    "title": "Truth",
    "released": "10/16/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 2517245,
    "tickets": 298605
  },
  {
    "title": "Mistress America",
    "released": "8/14/15",
    "distributor": "Fox Searchlight",
    "genre": "Comedy",
    "rating": "R",
    "gross": 2500431,
    "tickets": 296611
  },
  {
    "title": "Pawn Sacrifice",
    "released": "9/16/15",
    "distributor": "Beeker Street",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 2436308,
    "tickets": 289004
  },
  {
    "title": "2015 Oscar Shorts",
    "released": "1/30/15",
    "distributor": "ShortsHD",
    "genre": "Multiple Genres",
    "rating": "Not Rated",
    "gross": 2412493,
    "tickets": 286179
  },
  {
    "title": "Meru",
    "released": "8/14/15",
    "distributor": 0,
    "genre": "Documentary",
    "rating": "R",
    "gross": 2334228,
    "tickets": 276895
  },
  {
    "title": "My All-American",
    "released": "11/13/15",
    "distributor": "Clarius Entertainment",
    "genre": "Drama",
    "rating": "PG",
    "gross": 2246000,
    "tickets": 266429
  },
  {
    "title": "Ode to My Father",
    "released": "12/25/14",
    "distributor": "CJ Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 2209071,
    "tickets": 262048
  },
  {
    "title": "Jem and the Holograms",
    "released": "10/23/15",
    "distributor": "Universal",
    "genre": "Musical",
    "rating": "PG",
    "gross": 2184640,
    "tickets": 259150
  },
  {
    "title": "Roar",
    "released": "1/1/81",
    "distributor": 0,
    "genre": "Adventure",
    "rating": "PG",
    "gross": 2110050,
    "tickets": 250302
  },
  {
    "title": "Tamasha",
    "released": "11/25/15",
    "distributor": "UTV Communications",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 2065487,
    "tickets": 245016
  },
  {
    "title": "Island of Lemurs: Madagascar",
    "released": "4/4/14",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "G",
    "gross": 1989670,
    "tickets": 236022
  },
  {
    "title": "Cake",
    "released": "1/23/15",
    "distributor": "Cinelou Releasing",
    "genre": "Drama",
    "rating": "R",
    "gross": 1951776,
    "tickets": 231527
  },
  {
    "title": "Old Fashioned",
    "released": "2/6/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1914090,
    "tickets": 227056
  },
  {
    "title": "Assassination",
    "released": "8/7/15",
    "distributor": "Well Go USA",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 1904682,
    "tickets": 225940
  },
  {
    "title": "Game of Thrones: The IMAX Experience",
    "released": "1/29/15",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 1896092,
    "tickets": 224921
  },
  {
    "title": "Legend",
    "released": "11/20/15",
    "distributor": "Universal",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1865774,
    "tickets": 221325
  },
  {
    "title": "Journey to the South Pacific",
    "released": "11/27/13",
    "distributor": "MacGillivray Freeman Films",
    "genre": "Documentary",
    "rating": "G",
    "gross": 1852230,
    "tickets": 219718
  },
  {
    "title": "Clouds of Sils Maria",
    "released": "4/10/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 1841555,
    "tickets": 218452
  },
  {
    "title": "Testament of Youth",
    "released": "6/5/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1822250,
    "tickets": 216162
  },
  {
    "title": "Piku",
    "released": "5/8/15",
    "distributor": "Yash Raj Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 1801806,
    "tickets": 213737
  },
  {
    "title": "The Vatican Tapes",
    "released": "7/24/15",
    "distributor": "Lionsgate",
    "genre": "Horror",
    "rating": "PG-13",
    "gross": 1784763,
    "tickets": 211715
  },
  {
    "title": "Jerusalem",
    "released": "9/13/13",
    "distributor": "National Geographic Entertainment",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1715647,
    "tickets": 203516
  },
  {
    "title": "Meet the Patels",
    "released": "9/11/15",
    "distributor": "Alchemy",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 1700680,
    "tickets": 201741
  },
  {
    "title": "Youth",
    "released": "12/4/15",
    "distributor": "Fox Searchlight",
    "genre": "Drama",
    "rating": "R",
    "gross": 1650314,
    "tickets": 195766
  },
  {
    "title": "The Letters",
    "released": "12/4/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "PG",
    "gross": 1632464,
    "tickets": 193649
  },
  {
    "title": "Top Five",
    "released": "12/12/14",
    "distributor": "Paramount Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 1577054,
    "tickets": 187076
  },
  {
    "title": "The Diary of a Teenage Girl",
    "released": "8/7/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 1477002,
    "tickets": 175207
  },
  {
    "title": "Infinitely Polar Bear",
    "released": "6/19/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Comedy",
    "rating": "R",
    "gross": 1430655,
    "tickets": 169709
  },
  {
    "title": "99 Homes",
    "released": "9/25/15",
    "distributor": "Broad Green Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 1411927,
    "tickets": 167488
  },
  {
    "title": "Welcome Back",
    "released": "9/4/15",
    "distributor": "Eros Entertainment",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 1388365,
    "tickets": 164693
  },
  {
    "title": "Horrible Bosses 2",
    "released": "11/26/14",
    "distributor": "Warner Bros.",
    "genre": "Comedy",
    "rating": "R",
    "gross": 1381888,
    "tickets": 163925
  },
  {
    "title": "The Cokeville Miracle",
    "released": "6/5/15",
    "distributor": "Excel Entertainment",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1348630,
    "tickets": 159979
  },
  {
    "title": "The Salt of the Earth",
    "released": "3/27/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 1343349,
    "tickets": 159353
  },
  {
    "title": "The Revenant",
    "released": "12/25/15",
    "distributor": "20th Century Fox",
    "genre": "Adventure",
    "rating": "R",
    "gross": 1320348,
    "tickets": 156624
  },
  {
    "title": "Two Days, One Night",
    "released": "12/24/14",
    "distributor": "Sundance Selects",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1312980,
    "tickets": 155750
  },
  {
    "title": "Iris",
    "released": "4/29/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 1310678,
    "tickets": 155477
  },
  {
    "title": "Lost in Hong Kong",
    "released": "9/25/15",
    "distributor": "Well Go USA",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 1302281,
    "tickets": 154481
  },
  {
    "title": "The Wolfpack",
    "released": "6/12/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "R",
    "gross": 1301696,
    "tickets": 154412
  },
  {
    "title": "Goodbye Mr. Loser",
    "released": "10/9/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 1289195,
    "tickets": 152929
  },
  {
    "title": "'71",
    "released": "2/27/15",
    "distributor": "Roadside Attractions",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1270847,
    "tickets": 150752
  },
  {
    "title": "Beyond the Mask",
    "released": "4/6/15",
    "distributor": "Gathr Films",
    "genre": "Action",
    "rating": "PG",
    "gross": 1236094,
    "tickets": 146630
  },
  {
    "title": "Child 44",
    "released": "4/17/15",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1224330,
    "tickets": 145234
  },
  {
    "title": "Goodnight Mommy",
    "released": "9/11/15",
    "distributor": "RADiUS-TWC",
    "genre": "Horror",
    "rating": "R",
    "gross": 1178196,
    "tickets": 139762
  },
  {
    "title": "Black Sea",
    "released": "1/23/15",
    "distributor": "Focus Features",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1171559,
    "tickets": 138974
  },
  {
    "title": "Miss You Already",
    "released": "11/6/15",
    "distributor": "Roadside Attractions",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 1162653,
    "tickets": 137918
  },
  {
    "title": "Where Hope Grows",
    "released": "5/15/15",
    "distributor": "Roadside Attractions",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1156000,
    "tickets": 137129
  },
  {
    "title": "Veteran",
    "released": "8/14/15",
    "distributor": "CJ Entertainment",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 1155652,
    "tickets": 137088
  },
  {
    "title": "The Interview",
    "released": "12/25/14",
    "distributor": "Sony Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 1144449,
    "tickets": 135759
  },
  {
    "title": "Mojin: The Lost Legend",
    "released": "12/18/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Adventure",
    "rating": "Not Rated",
    "gross": 1121896,
    "tickets": 133083
  },
  {
    "title": "The Overnight",
    "released": "6/19/15",
    "distributor": "The Orchard",
    "genre": "Comedy",
    "rating": "R",
    "gross": 1109808,
    "tickets": 131649
  },
  {
    "title": "Boyhood",
    "released": "7/11/14",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 1080207,
    "tickets": 128138
  },
  {
    "title": "Timbuktu",
    "released": "1/28/15",
    "distributor": "Cohen Media Group",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1076075,
    "tickets": 127648
  },
  {
    "title": "Mr. Six",
    "released": "12/24/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 1070706,
    "tickets": 127011
  },
  {
    "title": "Gone Girl",
    "released": "10/3/14",
    "distributor": "20th Century Fox",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1040380,
    "tickets": 123413
  },
  {
    "title": "Dior and I",
    "released": "4/10/15",
    "distributor": "The Orchard",
    "genre": "Documentary",
    "rating": "R",
    "gross": 1028953,
    "tickets": 122058
  },
  {
    "title": "5 Flights Up",
    "released": "5/8/15",
    "distributor": "Focus Features",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1020921,
    "tickets": 121105
  },
  {
    "title": "Big Stone Gap",
    "released": "10/9/15",
    "distributor": "Picturehouse",
    "genre": "Romantic Comedy",
    "rating": "PG-13",
    "gross": 1009984,
    "tickets": 119808
  },
  {
    "title": "Faith of Our Fathers",
    "released": "7/1/15",
    "distributor": "Pure Flix / Samuel Goldwyn Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1004105,
    "tickets": 119110
  },
  {
    "title": "Gett: The Trial of Viviane Amsalem",
    "released": "2/13/15",
    "distributor": "Music Box Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 988150,
    "tickets": 117218
  },
  {
    "title": "Leviathan",
    "released": "12/25/14",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 952439,
    "tickets": 112982
  },
  {
    "title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    "released": "10/10/14",
    "distributor": "Walt Disney",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 921486,
    "tickets": 109310
  },
  {
    "title": "Singh IsBliing",
    "released": "10/2/15",
    "distributor": "Eros Entertainment",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 919095,
    "tickets": 109026
  },
  {
    "title": "Macbeth",
    "released": "12/4/15",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "R",
    "gross": 906513,
    "tickets": 107534
  },
  {
    "title": "Best of Enemies",
    "released": "7/31/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "R",
    "gross": 892802,
    "tickets": 105907
  },
  {
    "title": "ABCD 2",
    "released": "6/19/15",
    "distributor": "UTV Communications",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 892133,
    "tickets": 105828
  },
  {
    "title": "The 100-Year-Old Man Who Climbed Out Of The Window and Disappeared",
    "released": "5/8/15",
    "distributor": "Music Box Films",
    "genre": "Comedy",
    "rating": "R",
    "gross": 844463,
    "tickets": 100173
  },
  {
    "title": "Dumb and Dumber To",
    "released": "11/14/14",
    "distributor": "Universal",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 815430,
    "tickets": 96729
  },
  {
    "title": "Sleeping with Other People",
    "released": "9/11/15",
    "distributor": "IFC Films",
    "genre": "Romantic Comedy",
    "rating": "R",
    "gross": 814775,
    "tickets": 96651
  },
  {
    "title": "The Wrecking Crew",
    "released": "3/13/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 801606,
    "tickets": 95089
  },
  {
    "title": "Song of the Sea",
    "released": "12/19/14",
    "distributor": "GKIDS",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 791679,
    "tickets": 93912
  },
  {
    "title": "When Marnie Was There",
    "released": "5/22/15",
    "distributor": "GKIDS",
    "genre": "Drama",
    "rating": "PG",
    "gross": 765127,
    "tickets": 90762
  },
  {
    "title": "Labyrinth of Lies",
    "released": "9/30/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 763736,
    "tickets": 90597
  },
  {
    "title": "Once I Was a Beehive",
    "released": "8/14/15",
    "distributor": "Purdie Distribution",
    "genre": "Drama",
    "rating": "PG",
    "gross": 731549,
    "tickets": 86779
  },
  {
    "title": "Seymour: An Introduction",
    "released": "3/13/15",
    "distributor": "IFC Films",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 729744,
    "tickets": 86565
  },
  {
    "title": "P.K.",
    "released": "12/19/14",
    "distributor": "UTV Communications",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 719981,
    "tickets": 85406
  },
  {
    "title": "Cartel Land",
    "released": "7/3/15",
    "distributor": "The Orchard",
    "genre": "Documentary",
    "rating": "R",
    "gross": 704352,
    "tickets": 83553
  },
  {
    "title": "Tangerine",
    "released": "7/10/15",
    "distributor": "Magnolia Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 702354,
    "tickets": 83316
  },
  {
    "title": "Red Army",
    "released": "1/23/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 694647,
    "tickets": 82401
  },
  {
    "title": "The D Train",
    "released": "5/8/15",
    "distributor": "IFC Films",
    "genre": "Comedy",
    "rating": "R",
    "gross": 669688,
    "tickets": 79441
  },
  {
    "title": "St. Vincent",
    "released": "10/10/14",
    "distributor": "Weinstein Co.",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 659466,
    "tickets": 78228
  },
  {
    "title": "Brothers: Blood Against Blood",
    "released": "8/14/15",
    "distributor": "Fox International",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 656688,
    "tickets": 77898
  },
  {
    "title": "The Stanford Prison Experiment",
    "released": "7/17/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 649690,
    "tickets": 77068
  },
  {
    "title": "The Assassin",
    "released": "10/16/15",
    "distributor": "Well Go USA",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 632542,
    "tickets": 75034
  },
  {
    "title": "Welcome to Me",
    "released": "5/1/15",
    "distributor": "Alchemy",
    "genre": "Comedy",
    "rating": "R",
    "gross": 625727,
    "tickets": 74226
  },
  {
    "title": "Kumiko, The Treasure Hunter",
    "released": "3/18/15",
    "distributor": "Amplify",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 623383,
    "tickets": 73948
  },
  {
    "title": "The Book of Life",
    "released": "10/17/14",
    "distributor": "20th Century Fox",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 587412,
    "tickets": 69681
  },
  {
    "title": "Born to be Wild 3D",
    "released": "4/8/11",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "G",
    "gross": 587060,
    "tickets": 69639
  },
  {
    "title": "Jimmy's Hall",
    "released": "7/3/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 560341,
    "tickets": 66469
  },
  {
    "title": "A Little Chaos",
    "released": "6/26/15",
    "distributor": "Focus Features",
    "genre": "Drama",
    "rating": "R",
    "gross": 558173,
    "tickets": 66212
  },
  {
    "title": "Freeheld",
    "released": "10/2/15",
    "distributor": "Lionsgate",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 546201,
    "tickets": 64792
  },
  {
    "title": "By the Sea",
    "released": "11/13/15",
    "distributor": "Universal",
    "genre": "Drama",
    "rating": "R",
    "gross": 538460,
    "tickets": 63874
  },
  {
    "title": "CitizenFour",
    "released": "10/24/14",
    "distributor": "RADiUS-TWC",
    "genre": "Documentary",
    "rating": "R",
    "gross": 537661,
    "tickets": 63779
  },
  {
    "title": "Shaandaar",
    "released": "10/22/15",
    "distributor": "Fox International",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 521794,
    "tickets": 61897
  },
  {
    "title": "The Black Panthers: Vanguard of the Revolution",
    "released": "9/2/15",
    "distributor": "PBS Distribution",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 516893,
    "tickets": 61315
  },
  {
    "title": "Awake: The Life of Yogananda",
    "released": "10/10/14",
    "distributor": "Counterpoint Films & Self-Realization Fellowship",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 509752,
    "tickets": 60468
  },
  {
    "title": "Deli Man: The Movie",
    "released": "2/27/15",
    "distributor": "Cohen Media Group",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 502294,
    "tickets": 59584
  },
  {
    "title": "Steve Jobs: The Man in the Machine",
    "released": "9/4/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "R",
    "gross": 494506,
    "tickets": 58660
  },
  {
    "title": "Phantom",
    "released": "8/28/15",
    "distributor": "UTV Communications",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 489984,
    "tickets": 58123
  },
  {
    "title": "The Last: Naruto the Movie",
    "released": "2/20/15",
    "distributor": "Eleven Arts",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 483795,
    "tickets": 57389
  },
  {
    "title": "Somewhere Only We Know",
    "released": "2/13/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 482013,
    "tickets": 57178
  },
  {
    "title": "Brotherly Love",
    "released": "4/24/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "R",
    "gross": 478595,
    "tickets": 56772
  },
  {
    "title": "About Elly",
    "released": "4/8/15",
    "distributor": "Cinema Guild",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 470346,
    "tickets": 55794
  },
  {
    "title": "Let's Get Married",
    "released": "4/3/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 461996,
    "tickets": 54803
  },
  {
    "title": "Bombay Velvet",
    "released": "5/15/15",
    "distributor": "Fox International",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 450692,
    "tickets": 53462
  },
  {
    "title": "Felix et Meira",
    "released": "4/17/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 447353,
    "tickets": 53066
  },
  {
    "title": "The Third Man",
    "released": "5/7/99",
    "distributor": "Rialto Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 437795,
    "tickets": 51932
  },
  {
    "title": "Saint Laurent",
    "released": "5/8/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 429477,
    "tickets": 50946
  },
  {
    "title": "Under the Sea 3D",
    "released": "2/13/09",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "G",
    "gross": 427208,
    "tickets": 50677
  },
  {
    "title": "Rosenwald",
    "released": "8/14/15",
    "distributor": "The Ciesla Foundation",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 426891,
    "tickets": 50639
  },
  {
    "title": "Listen to Me Marlon",
    "released": "7/29/15",
    "distributor": "Abramorama Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 426130,
    "tickets": 50549
  },
  {
    "title": "Gemma Bovery",
    "released": "5/29/15",
    "distributor": "Music Box Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 425080,
    "tickets": 50424
  },
  {
    "title": "A Matter of Faith",
    "released": "10/17/14",
    "distributor": "Five & Two Pictures",
    "genre": "Drama",
    "rating": "PG",
    "gross": 422588,
    "tickets": 50129
  },
  {
    "title": "Unbranded",
    "released": "9/25/15",
    "distributor": "Gravitas Ventures",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 410185,
    "tickets": 48657
  },
  {
    "title": "The Witness",
    "released": "10/30/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 409644,
    "tickets": 48593
  },
  {
    "title": "The Hunting Ground",
    "released": "2/27/15",
    "distributor": "RADiUS-TWC",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 405917,
    "tickets": 48151
  },
  {
    "title": "The Apu Trilogy",
    "released": "5/8/15",
    "distributor": "Janus Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 402723,
    "tickets": 47772
  },
  {
    "title": "Nightcrawler",
    "released": "10/31/14",
    "distributor": "Open Road",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 398032,
    "tickets": 47216
  },
  {
    "title": "Freetown",
    "released": "4/8/15",
    "distributor": "Purdie Distribution",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 397122,
    "tickets": 47108
  },
  {
    "title": "Peggy Guggenheim - Art Addict",
    "released": "11/6/15",
    "distributor": "Submarine Deluxe",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 393584,
    "tickets": 46688
  },
  {
    "title": "A Girl Walks Home Alone at Night",
    "released": "11/21/14",
    "distributor": "Kino Lorber",
    "genre": "Horror",
    "rating": "Not Rated",
    "gross": 385325,
    "tickets": 45708
  },
  {
    "title": "Coming Home",
    "released": "9/9/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 377607,
    "tickets": 44793
  },
  {
    "title": "The Second Mother",
    "released": "8/28/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 376976,
    "tickets": 44718
  },
  {
    "title": "She's Beautiful When She's Angry",
    "released": "12/5/14",
    "distributor": "International Film Circuit",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 374467,
    "tickets": 44420
  },
  {
    "title": "Boychoir",
    "released": "4/3/15",
    "distributor": "Informant Media",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 366474,
    "tickets": 43472
  },
  {
    "title": "Katti Batti",
    "released": "9/18/15",
    "distributor": "UTV Communications",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 364932,
    "tickets": 43289
  },
  {
    "title": "Maps to the Stars",
    "released": "2/27/15",
    "distributor": "Focus Features",
    "genre": "Black Comedy",
    "rating": "R",
    "gross": 350741,
    "tickets": 41606
  },
  {
    "title": "Noble",
    "released": "5/8/15",
    "distributor": "Aspiration Media",
    "genre": "Drama",
    "rating": "PG",
    "gross": 347321,
    "tickets": 41200
  },
  {
    "title": "Talvar",
    "released": "10/2/15",
    "distributor": "Reliance Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 342428,
    "tickets": 40620
  },
  {
    "title": "Kahlil Gibran's The Prophet",
    "released": "8/7/15",
    "distributor": "GKIDS",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 340536,
    "tickets": 40395
  },
  {
    "title": "Detective Byomkesh Bakshy",
    "released": "4/3/15",
    "distributor": "Yash Raj Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 338637,
    "tickets": 40170
  },
  {
    "title": "Ballet 422",
    "released": "2/6/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 333554,
    "tickets": 39567
  },
  {
    "title": "Northern Limit Line",
    "released": "7/17/15",
    "distributor": "Well Go USA",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 324719,
    "tickets": 38519
  },
  {
    "title": "Shamitabh",
    "released": "2/6/15",
    "distributor": "Eros Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 324597,
    "tickets": 38504
  },
  {
    "title": "Heart of a Dog",
    "released": "10/21/15",
    "distributor": "Abramorama Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 322743,
    "tickets": 38285
  },
  {
    "title": "A Borrowed Identity",
    "released": "5/15/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 319391,
    "tickets": 37887
  },
  {
    "title": "Good Kill",
    "released": "5/15/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 317072,
    "tickets": 37612
  },
  {
    "title": "David and Goliath",
    "released": "4/3/15",
    "distributor": "RiverRain / Ripple Effect",
    "genre": "Drama",
    "rating": "PG",
    "gross": 316117,
    "tickets": 37499
  },
  {
    "title": "Running Man",
    "released": "1/30/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Reality",
    "rating": "Not Rated",
    "gross": 309297,
    "tickets": 36690
  },
  {
    "title": "The Man in 3B",
    "released": "11/6/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "R",
    "gross": 291513,
    "tickets": 34580
  },
  {
    "title": "Taxi Tehran",
    "released": "10/2/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 291088,
    "tickets": 34530
  },
  {
    "title": "Above and Beyond",
    "released": "1/30/15",
    "distributor": "International Film Circuit",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 288751,
    "tickets": 34252
  },
  {
    "title": "Go Away Mr. Tumor",
    "released": "8/14/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 286639,
    "tickets": 34002
  },
  {
    "title": "White God",
    "released": "3/27/15",
    "distributor": "Magnolia Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 282358,
    "tickets": 33494
  },
  {
    "title": "In the Name of My Daughter",
    "released": "5/15/15",
    "distributor": "Cohen Media Group",
    "genre": "Drama",
    "rating": "R",
    "gross": 277528,
    "tickets": 32921
  },
  {
    "title": "Gabbar is Back",
    "released": "5/1/15",
    "distributor": "Eros Entertainment",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 276429,
    "tickets": 32791
  },
  {
    "title": "Janis: Little Girl Blue",
    "released": "11/27/15",
    "distributor": "FilmRise",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 268786,
    "tickets": 31884
  },
  {
    "title": "Nh10",
    "released": "3/13/15",
    "distributor": "Eros Entertainment",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 262586,
    "tickets": 31148
  },
  {
    "title": "Boruto: Naruto the Movie",
    "released": "10/10/15",
    "distributor": "Eleven Arts",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 259028,
    "tickets": 30726
  },
  {
    "title": "Attack on Titan: Part 1",
    "released": "9/30/15",
    "distributor": "FUNimation",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 258794,
    "tickets": 30699
  },
  {
    "title": "The Himalayas",
    "released": "12/18/15",
    "distributor": "CJ Entertainment",
    "genre": "Adventure",
    "rating": "Not Rated",
    "gross": 256901,
    "tickets": 30474
  },
  {
    "title": "Love",
    "released": "10/30/15",
    "distributor": "Alchemy",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 249665,
    "tickets": 29616
  },
  {
    "title": "Fury",
    "released": "10/17/14",
    "distributor": "Sony Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 246495,
    "tickets": 29240
  },
  {
    "title": "Attack on Titan: Part 2",
    "released": "10/20/15",
    "distributor": "FUNimation",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 243356,
    "tickets": 28867
  },
  {
    "title": "Goodbye to Language",
    "released": "10/29/14",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 240312,
    "tickets": 28506
  },
  {
    "title": "Carter High",
    "released": "10/30/15",
    "distributor": "PlayNow Enterprise",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 240214,
    "tickets": 28495
  },
  {
    "title": "Tevar",
    "released": "1/9/15",
    "distributor": "Eros Entertainment",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 236002,
    "tickets": 27995
  },
  {
    "title": "Hamari Adhuri Kahani",
    "released": "6/12/15",
    "distributor": "Fox International",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 235361,
    "tickets": 27919
  },
  {
    "title": "45 Years",
    "released": "12/23/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 229173,
    "tickets": 27185
  },
  {
    "title": "Slow West",
    "released": "5/15/15",
    "distributor": "A24",
    "genre": "Western",
    "rating": "R",
    "gross": 229094,
    "tickets": 27176
  },
  {
    "title": "A Royal Night Out",
    "released": "12/4/15",
    "distributor": "Atlas Distribution",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 228136,
    "tickets": 27062
  },
  {
    "title": "Jeremy Scott: The People's Designer",
    "released": "9/18/15",
    "distributor": "The Vladar Company",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 225000,
    "tickets": 26690
  },
  {
    "title": "A Pigeon Sat on a Branch Reflecting on Existence",
    "released": "6/3/15",
    "distributor": "Magnolia Pictures",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 222989,
    "tickets": 26451
  },
  {
    "title": "The Taking of Tiger Mountain",
    "released": "1/2/15",
    "distributor": "Well Go USA",
    "genre": "Adventure",
    "rating": "Not Rated",
    "gross": 222964,
    "tickets": 26448
  },
  {
    "title": "Pyaar Ka Punchnama 2",
    "released": "10/16/15",
    "distributor": "Reliance Entertainment",
    "genre": "Reality",
    "rating": "Not Rated",
    "gross": 222856,
    "tickets": 26436
  },
  {
    "title": "The Boxtrolls",
    "released": "9/26/14",
    "distributor": "Focus Features",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 218634,
    "tickets": 25935
  },
  {
    "title": "Chocolate City",
    "released": "5/22/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "R",
    "gross": 212662,
    "tickets": 25226
  },
  {
    "title": "Fall in Love Like a Star",
    "released": "12/4/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 212508,
    "tickets": 25208
  },
  {
    "title": "Anomalisa",
    "released": "12/30/15",
    "distributor": "Paramount Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 210632,
    "tickets": 24986
  },
  {
    "title": "Wolf Totem",
    "released": "9/11/15",
    "distributor": "Sony Pictures",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 210591,
    "tickets": 24981
  },
  {
    "title": "The Babadook",
    "released": "11/28/14",
    "distributor": "IFC Midnight",
    "genre": "Horror",
    "rating": "Not Rated",
    "gross": 208700,
    "tickets": 24756
  },
  {
    "title": "Dark Places",
    "released": "8/7/15",
    "distributor": "A24",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 208588,
    "tickets": 24743
  },
  {
    "title": "Hitchcock/Truffaut",
    "released": "12/2/15",
    "distributor": "Cohen Media Group",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 206791,
    "tickets": 24530
  },
  {
    "title": "Heneral Luna",
    "released": "10/30/15",
    "distributor": "Abramorama Films",
    "genre": "Action",
    "rating": "R",
    "gross": 206040,
    "tickets": 24441
  },
  {
    "title": "Force Majeure",
    "released": "10/24/14",
    "distributor": "Magnolia Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 201327,
    "tickets": 23882
  },
  {
    "title": "The New Girlfriend",
    "released": "9/18/15",
    "distributor": "Cohen Media Group",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 196284,
    "tickets": 23283
  },
  {
    "title": "Escobar: Paradise Lost",
    "released": "6/26/15",
    "distributor": "RADiUS-TWC",
    "genre": "Drama",
    "rating": "R",
    "gross": 195792,
    "tickets": 23225
  },
  {
    "title": "Merchants of Doubt",
    "released": "3/6/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 192362,
    "tickets": 22818
  },
  {
    "title": "The Connection",
    "released": "5/15/15",
    "distributor": "Drafthouse Films",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 190980,
    "tickets": 22654
  },
  {
    "title": "Lost and Love",
    "released": "3/20/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 188306,
    "tickets": 22337
  },
  {
    "title": "Stonewall",
    "released": "9/25/15",
    "distributor": "Roadside Attractions",
    "genre": "Drama",
    "rating": "R",
    "gross": 187674,
    "tickets": 22262
  },
  {
    "title": "Maggie",
    "released": "5/8/15",
    "distributor": "Roadside Attractions",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 187112,
    "tickets": 22195
  },
  {
    "title": "Mustang",
    "released": "11/20/15",
    "distributor": "Cohen Media Group",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 186136,
    "tickets": 22080
  },
  {
    "title": "The Maze Runner",
    "released": "9/19/14",
    "distributor": "20th Century Fox",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 185848,
    "tickets": 22046
  },
  {
    "title": "Lambert & Stamp",
    "released": "4/3/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Documentary",
    "rating": "R",
    "gross": 183320,
    "tickets": 21746
  },
  {
    "title": "3 Hearts",
    "released": "3/13/15",
    "distributor": "Cohen Media Group",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 182522,
    "tickets": 21651
  },
  {
    "title": "An Honest Liar",
    "released": "3/6/15",
    "distributor": "Abramorama Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 180590,
    "tickets": 21422
  },
  {
    "title": "The Young and Prodigious T.S. Spivet",
    "released": "7/31/15",
    "distributor": "Weinstein Co.",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 176847,
    "tickets": 20978
  },
  {
    "title": "Serena",
    "released": "3/27/15",
    "distributor": "Magnolia Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 176391,
    "tickets": 20924
  },
  {
    "title": "The Farewell Party",
    "released": "5/22/15",
    "distributor": "IDP/Samuel Goldwyn Films",
    "genre": "Black Comedy",
    "rating": "Not Rated",
    "gross": 172860,
    "tickets": 20505
  },
  {
    "title": "All Things Must Pass",
    "released": "10/16/15",
    "distributor": "Gravitas Ventures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 166872,
    "tickets": 19795
  },
  {
    "title": "Winter's Sleep",
    "released": "12/19/14",
    "distributor": "Adopt Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 165520,
    "tickets": 19634
  },
  {
    "title": "Snow Girl and the Dark Crystal 3D",
    "released": "2/27/15",
    "distributor": "Well Go USA",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 165428,
    "tickets": 19623
  },
  {
    "title": "Time Out of Mind",
    "released": "9/9/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 164849,
    "tickets": 19555
  },
  {
    "title": "Theeb",
    "released": "11/6/15",
    "distributor": "Film Movement",
    "genre": "Adventure",
    "rating": "Not Rated",
    "gross": 164704,
    "tickets": 19537
  },
  {
    "title": "C'est Si Bon",
    "released": "2/13/15",
    "distributor": "CJ Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 164167,
    "tickets": 19474
  },
  {
    "title": "Last Woman Standing",
    "released": "11/11/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 163406,
    "tickets": 19383
  },
  {
    "title": "After the Ball",
    "released": "4/24/15",
    "distributor": "Freestyle Releasing",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 161820,
    "tickets": 19195
  },
  {
    "title": "Human Capital",
    "released": "1/14/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 158549,
    "tickets": 18807
  },
  {
    "title": "Son of Saul",
    "released": "12/18/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 158534,
    "tickets": 18805
  },
  {
    "title": "Hell & Back",
    "released": "10/2/15",
    "distributor": "Freestyle Releasing",
    "genre": "Comedy",
    "rating": "R",
    "gross": 157768,
    "tickets": 18715
  },
  {
    "title": "The Homesman",
    "released": "11/14/14",
    "distributor": "Roadside Attractions",
    "genre": "Western",
    "rating": "R",
    "gross": 157192,
    "tickets": 18646
  },
  {
    "title": "Experimenter",
    "released": "10/16/15",
    "distributor": "Magnolia Pictures",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 155575,
    "tickets": 18454
  },
  {
    "title": "Desert Dancer",
    "released": "4/10/15",
    "distributor": "Relativity",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 155271,
    "tickets": 18418
  },
  {
    "title": "Buen dia Ramon",
    "released": "1/30/15",
    "distributor": "20th Century Fox",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 154356,
    "tickets": 18310
  },
  {
    "title": "Samba",
    "released": "7/24/15",
    "distributor": "Entertainment One",
    "genre": "Comedy",
    "rating": "R",
    "gross": 151530,
    "tickets": 17975
  },
  {
    "title": "The Tribe",
    "released": "6/17/15",
    "distributor": "Drafthouse Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 150565,
    "tickets": 17860
  },
  {
    "title": "Forever Young",
    "released": "7/10/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 149761,
    "tickets": 17765
  },
  {
    "title": "The Last Five Years",
    "released": "2/13/15",
    "distributor": "RADiUS-TWC",
    "genre": "Musical",
    "rating": "PG-13",
    "gross": 147299,
    "tickets": 17473
  },
  {
    "title": "Kurt Cobain: Montage Of Heck",
    "released": "4/24/15",
    "distributor": "HBO Documentary Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 140208,
    "tickets": 16632
  },
  {
    "title": "A Brilliant Young Mind",
    "released": "9/11/15",
    "distributor": "Samuel Goldwyn Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 139511,
    "tickets": 16549
  },
  {
    "title": "5 to 7",
    "released": "4/3/15",
    "distributor": "IFC Films",
    "genre": "Romantic Comedy",
    "rating": "R",
    "gross": 137112,
    "tickets": 16264
  },
  {
    "title": "To the Arctic 3D",
    "released": "4/20/12",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "G",
    "gross": 135768,
    "tickets": 16105
  },
  {
    "title": "La Sapienza",
    "released": "3/20/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 135392,
    "tickets": 16060
  },
  {
    "title": "Cop Car",
    "released": "8/7/15",
    "distributor": "Focus Features",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 134552,
    "tickets": 15961
  },
  {
    "title": "Don't Think I've Forgotten: Cambodia's Lost Rock and Roll",
    "released": "4/22/15",
    "distributor": "Argot Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 133443,
    "tickets": 15829
  },
  {
    "title": "Manglehorn",
    "released": "6/19/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 132270,
    "tickets": 15690
  },
  {
    "title": "Mississippi Grind",
    "released": "9/25/15",
    "distributor": "A24",
    "genre": "Drama",
    "rating": "R",
    "gross": 130541,
    "tickets": 15485
  },
  {
    "title": "Kung Fu Killer",
    "released": "4/24/15",
    "distributor": "Well Go USA",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 129115,
    "tickets": 15316
  },
  {
    "title": "Boulevard",
    "released": "7/10/15",
    "distributor": "Starz Digital Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 126150,
    "tickets": 14964
  },
  {
    "title": "Ida",
    "released": "5/2/14",
    "distributor": "Music Box Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 122448,
    "tickets": 14525
  },
  {
    "title": "Z for Zachariah",
    "released": "8/28/15",
    "distributor": "Roadside Attractions",
    "genre": "Thriller/Suspense",
    "rating": "PG-13",
    "gross": 121461,
    "tickets": 14408
  },
  {
    "title": "A Journey Through Time With Anthony",
    "released": "11/18/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 119376,
    "tickets": 14160
  },
  {
    "title": "Digging for Fire",
    "released": "8/21/15",
    "distributor": "The Orchard",
    "genre": "Drama",
    "rating": "R",
    "gross": 119364,
    "tickets": 14159
  },
  {
    "title": "Guardians of the Galaxy",
    "released": "8/1/14",
    "distributor": "Walt Disney",
    "genre": "Adventure",
    "rating": "PG-13",
    "gross": 116854,
    "tickets": 13861
  },
  {
    "title": "Tangerines",
    "released": "4/17/15",
    "distributor": "Samuel Goldwyn Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 114501,
    "tickets": 13582
  },
  {
    "title": "Road Hard",
    "released": "3/6/15",
    "distributor": "FilmBuff",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 113169,
    "tickets": 13424
  },
  {
    "title": "John Wick",
    "released": "10/24/14",
    "distributor": "Lionsgate",
    "genre": "Action",
    "rating": "R",
    "gross": 112512,
    "tickets": 13346
  },
  {
    "title": "She's Funny That Way",
    "released": "8/21/15",
    "distributor": "Lionsgate",
    "genre": "Comedy",
    "rating": "R",
    "gross": 111993,
    "tickets": 13285
  },
  {
    "title": "Memories of the Sword",
    "released": "8/28/15",
    "distributor": "Well Go USA",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 111071,
    "tickets": 13175
  },
  {
    "title": "The Look of Silence",
    "released": "7/17/15",
    "distributor": "Drafthouse Films",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 109089,
    "tickets": 12940
  },
  {
    "title": "Do I Sound Gay?",
    "released": "7/10/15",
    "distributor": "IFC Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 108620,
    "tickets": 12884
  },
  {
    "title": "The Beauty Inside",
    "released": "9/11/15",
    "distributor": "Well Go USA",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 108238,
    "tickets": 12839
  },
  {
    "title": "Adult Beginners",
    "released": "4/24/15",
    "distributor": "RADiUS-TWC",
    "genre": "Comedy",
    "rating": "R",
    "gross": 104808,
    "tickets": 12432
  },
  {
    "title": "Results",
    "released": "5/29/15",
    "distributor": "Magnolia Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 104507,
    "tickets": 12397
  },
  {
    "title": "Every Secret Thing",
    "released": "5/15/15",
    "distributor": "Starz Digital Media",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 103536,
    "tickets": 12281
  },
  {
    "title": "In Jackson Heights",
    "released": "11/4/15",
    "distributor": "Zipporah",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 102475,
    "tickets": 12155
  },
  {
    "title": "Beyond the Brick: A LEGO Brickumentary",
    "released": "7/31/15",
    "distributor": "RADiUS-TWC",
    "genre": "Documentary",
    "rating": "G",
    "gross": 101531,
    "tickets": 12044
  },
  {
    "title": "James White",
    "released": "11/13/15",
    "distributor": "Film Arcade",
    "genre": "Drama",
    "rating": "R",
    "gross": 101368,
    "tickets": 12024
  },
  {
    "title": "Ghost in the Shell: The New Movie",
    "released": "11/10/15",
    "distributor": "FUNimation",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 101203,
    "tickets": 12005
  },
  {
    "title": "Black Souls",
    "released": "4/10/15",
    "distributor": "Vitagraph Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 100725,
    "tickets": 11948
  },
  {
    "title": "I Am Eleven",
    "released": "9/12/14",
    "distributor": "Proud Mother Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 98057,
    "tickets": 11631
  },
  {
    "title": "A Ballerina's Tale",
    "released": "10/14/15",
    "distributor": "IFC Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 96900,
    "tickets": 11494
  },
  {
    "title": 1915,
    "released": "4/17/15",
    "distributor": 0,
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 96682,
    "tickets": 11468
  },
  {
    "title": "A Poem Is a Naked Person",
    "released": "7/1/15",
    "distributor": "Janus Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 96592,
    "tickets": 11458
  },
  {
    "title": "The Equalizer",
    "released": "9/26/14",
    "distributor": "Sony Pictures",
    "genre": "Action",
    "rating": "R",
    "gross": 94562,
    "tickets": 11217
  },
  {
    "title": "Man from Reno",
    "released": "3/27/15",
    "distributor": "Gravitas Ventures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 92918,
    "tickets": 11022
  },
  {
    "title": "Saving Mr. Wu",
    "released": "10/2/15",
    "distributor": "Dada Films",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 92696,
    "tickets": 10995
  },
  {
    "title": "Tales of Hoffmann",
    "released": "3/13/15",
    "distributor": "Rialto Pictures",
    "genre": "Musical",
    "rating": "Not Rated",
    "gross": 91930,
    "tickets": 10905
  },
  {
    "title": "Christmas Eve",
    "released": "12/4/15",
    "distributor": "Unstuck LLC",
    "genre": "Comedy",
    "rating": "PG",
    "gross": 91302,
    "tickets": 10830
  },
  {
    "title": "Beasts of No Nation",
    "released": "10/16/15",
    "distributor": "Bleecker Street",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 90777,
    "tickets": 10768
  },
  {
    "title": "Sunshine Superman",
    "released": "5/22/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 88097,
    "tickets": 10450
  },
  {
    "title": "Queen of Earth",
    "released": "8/26/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 86616,
    "tickets": 10274
  },
  {
    "title": "Hero",
    "released": "9/11/15",
    "distributor": "Eros Entertainment",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 84961,
    "tickets": 10078
  },
  {
    "title": "Trace Amounts",
    "released": "1/2/15",
    "distributor": "Gathr Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 80735,
    "tickets": 9577
  },
  {
    "title": "Heaven Knows What",
    "released": "5/29/15",
    "distributor": "RADiUS-TWC",
    "genre": "Drama",
    "rating": "R",
    "gross": 80312,
    "tickets": 9526
  },
  {
    "title": "Nasty Baby",
    "released": "10/23/15",
    "distributor": "The Orchard",
    "genre": "Drama",
    "rating": "R",
    "gross": 79800,
    "tickets": 9466
  },
  {
    "title": "Deep Sea 3-D",
    "released": "3/3/06",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "G",
    "gross": 78669,
    "tickets": 9332
  },
  {
    "title": "Blackbird",
    "released": "4/24/15",
    "distributor": "Image Entertainment",
    "genre": "Drama",
    "rating": "R",
    "gross": 78400,
    "tickets": 9300
  },
  {
    "title": "Tab Hunter Confidential",
    "released": "10/15/15",
    "distributor": 0,
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 78323,
    "tickets": 9290
  },
  {
    "title": "Batkid Begins: The Wish Heard Around the World",
    "released": "6/26/15",
    "distributor": "Warner Bros.",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 74709,
    "tickets": 8862
  },
  {
    "title": "Dragon Blade",
    "released": "9/4/15",
    "distributor": "Lionsgate",
    "genre": "Action",
    "rating": "R",
    "gross": 74070,
    "tickets": 8786
  },
  {
    "title": "Six Dance Lessons in Six Weeks",
    "released": "12/12/14",
    "distributor": "Dada Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 73899,
    "tickets": 8766
  },
  {
    "title": "The Principle",
    "released": "10/24/14",
    "distributor": "Rocky Mountain Pictures",
    "genre": "Reality",
    "rating": "PG",
    "gross": 72717,
    "tickets": 8625
  },
  {
    "title": "Backcountry",
    "released": "3/20/15",
    "distributor": "IFC Midnight",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 71191,
    "tickets": 8444
  },
  {
    "title": "The Wonders",
    "released": "10/30/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 70805,
    "tickets": 8399
  },
  {
    "title": "I Am Big Bird: The Caroll Spinney Story",
    "released": "5/6/15",
    "distributor": "TriBeca Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 67845,
    "tickets": 8048
  },
  {
    "title": "Eden",
    "released": "6/19/15",
    "distributor": "Broad Green Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 65460,
    "tickets": 7765
  },
  {
    "title": "National Gallery",
    "released": "11/5/14",
    "distributor": "Zipporah",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 64597,
    "tickets": 7662
  },
  {
    "title": "Devil and Angel",
    "released": "12/31/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 64470,
    "tickets": 7647
  },
  {
    "title": "Drunk Stoned Brilliant Dead The Story of the National Lampoon",
    "released": "9/25/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 62684,
    "tickets": 7435
  },
  {
    "title": "Only You",
    "released": "7/24/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 61565,
    "tickets": 7303
  },
  {
    "title": "Dark Star: H.R. Giger's World",
    "released": "5/13/15",
    "distributor": "Icarus Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 61303,
    "tickets": 7272
  },
  {
    "title": "Girlhood",
    "released": "1/30/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 60765,
    "tickets": 7208
  },
  {
    "title": "Güeros",
    "released": "5/20/15",
    "distributor": "Kino Lorber",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 60171,
    "tickets": 7137
  },
  {
    "title": "Cooties",
    "released": "9/18/15",
    "distributor": "Lionsgate",
    "genre": "Black Comedy",
    "rating": "R",
    "gross": 60058,
    "tickets": 7124
  },
  {
    "title": "I Smile Back",
    "released": "10/23/15",
    "distributor": "Broad Green Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 58738,
    "tickets": 6967
  },
  {
    "title": "Jauja",
    "released": "3/20/15",
    "distributor": "Cinema Guild",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 58403,
    "tickets": 6927
  },
  {
    "title": "Rififi",
    "released": "9/2/15",
    "distributor": "Rialto Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 57749,
    "tickets": 6850
  },
  {
    "title": "Brian Wilson: I Just Wasn't Made for These Times",
    "released": "8/27/15",
    "distributor": "Northern Arts Entertainment",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 56744,
    "tickets": 6731
  },
  {
    "title": "The Duke of Burgundy",
    "released": "1/23/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 56657,
    "tickets": 6720
  },
  {
    "title": "The Judge",
    "released": "10/10/14",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "R",
    "gross": 56282,
    "tickets": 6676
  },
  {
    "title": "Beloved Sisters",
    "released": "1/9/15",
    "distributor": "Music Box Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 54064,
    "tickets": 6413
  },
  {
    "title": "Beyond the Lights",
    "released": "11/14/14",
    "distributor": "Relativity",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 54018,
    "tickets": 6407
  },
  {
    "title": "The Ark of Mr. Chow",
    "released": "6/19/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 53252,
    "tickets": 6316
  },
  {
    "title": "Aloft",
    "released": "5/22/15",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 53086,
    "tickets": 6297
  },
  {
    "title": "The Quay Brothers in 35MM",
    "released": "8/19/15",
    "distributor": "Zeitgeist",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 51858,
    "tickets": 6151
  },
  {
    "title": "Flowers",
    "released": "10/30/15",
    "distributor": "Music Box Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 51238,
    "tickets": 6078
  },
  {
    "title": "We Come as Friends",
    "released": "8/14/15",
    "distributor": "BBC Worldwide North America",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 50921,
    "tickets": 6040
  },
  {
    "title": "The Yes Men Are Revolting",
    "released": "11/20/14",
    "distributor": "The Orchard",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 50190,
    "tickets": 5953
  },
  {
    "title": "Heist",
    "released": "11/13/15",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 50136,
    "tickets": 5947
  },
  {
    "title": "Spring",
    "released": "3/20/15",
    "distributor": "Drafthouse Films",
    "genre": "Horror",
    "rating": "Not Rated",
    "gross": 49970,
    "tickets": 5927
  },
  {
    "title": "The Pyramid",
    "released": "12/5/14",
    "distributor": "20th Century Fox",
    "genre": "Horror",
    "rating": "R",
    "gross": 49928,
    "tickets": 5922
  },
  {
    "title": "Difret",
    "released": "10/16/15",
    "distributor": "Truth Aid/Amplify",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 49667,
    "tickets": 5891
  },
  {
    "title": "Red Herring",
    "released": "10/30/15",
    "distributor": "Indican Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 49480,
    "tickets": 5869
  },
  {
    "title": "Breathe",
    "released": "9/11/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 48764,
    "tickets": 5784
  },
  {
    "title": "Bangistan",
    "released": "7/31/15",
    "distributor": "Eros Entertainment",
    "genre": "Black Comedy",
    "rating": "Not Rated",
    "gross": 48694,
    "tickets": 5776
  },
  {
    "title": "Appropriate Behavior",
    "released": "1/16/15",
    "distributor": "Gravitas Ventures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 46912,
    "tickets": 5564
  },
  {
    "title": "Shanghai",
    "released": "10/2/15",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "R",
    "gross": 46425,
    "tickets": 5507
  },
  {
    "title": "Beyond The Reach",
    "released": "4/17/15",
    "distributor": "Roadside Attractions",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 45895,
    "tickets": 5444
  },
  {
    "title": "Lost River",
    "released": "4/10/15",
    "distributor": "Warner Bros.",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 45431,
    "tickets": 5389
  },
  {
    "title": "Mr. X",
    "released": "4/17/15",
    "distributor": "Fox International",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 44995,
    "tickets": 5337
  },
  {
    "title": "Madame Bovary",
    "released": "6/12/15",
    "distributor": "Alchemy",
    "genre": "Drama",
    "rating": "R",
    "gross": 44234,
    "tickets": 5247
  },
  {
    "title": "The Salvation",
    "released": "2/27/15",
    "distributor": "IFC Films",
    "genre": "Western",
    "rating": "R",
    "gross": 43318,
    "tickets": 5138
  },
  {
    "title": "Ingrid Bergman - In Her Own Words",
    "released": "11/13/15",
    "distributor": "Rialto Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 42381,
    "tickets": 5027
  },
  {
    "title": "The Search of General Tso",
    "released": "1/2/15",
    "distributor": "Sundance Selects",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 41455,
    "tickets": 4917
  },
  {
    "title": "Nowitzki: The Perfect Shot",
    "released": "7/10/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 41340,
    "tickets": 4903
  },
  {
    "title": "Queen and Country",
    "released": "2/18/15",
    "distributor": 0,
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 41297,
    "tickets": 4898
  },
  {
    "title": "Zero Motivation",
    "released": "12/3/14",
    "distributor": "Zeitgeist",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 41152,
    "tickets": 4881
  },
  {
    "title": "The Seven Five",
    "released": "5/8/15",
    "distributor": "IFC Films",
    "genre": "Documentary",
    "rating": "R",
    "gross": 40674,
    "tickets": 4824
  },
  {
    "title": "The New Rijksmuseum",
    "released": "6/19/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 40578,
    "tickets": 4813
  },
  {
    "title": "What Our Fathers Did: A Nazi Legacy",
    "released": "11/6/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 40119,
    "tickets": 4759
  },
  {
    "title": "Entertainment",
    "released": "11/13/15",
    "distributor": "Magnolia Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 39864,
    "tickets": 4728
  },
  {
    "title": "WARx2",
    "released": "9/18/15",
    "distributor": "Strasson Group",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 39704,
    "tickets": 4709
  },
  {
    "title": "Charlie's Country",
    "released": "6/5/15",
    "distributor": "Monument Releasing",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 39436,
    "tickets": 4678
  },
  {
    "title": "Prophet's Prey",
    "released": "9/18/15",
    "distributor": "Showtime Original",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 39347,
    "tickets": 4667
  },
  {
    "title": "Stations of the Cross",
    "released": "7/10/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 38818,
    "tickets": 4604
  },
  {
    "title": "Lila & Eve",
    "released": "7/17/15",
    "distributor": "Samuel Goldwyn Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 38263,
    "tickets": 4538
  },
  {
    "title": "Before We Go",
    "released": "9/4/15",
    "distributor": "Radius",
    "genre": "Romantic Comedy",
    "rating": "PG-13",
    "gross": 37151,
    "tickets": 4406
  },
  {
    "title": "The Mafia Only Kills in Summer",
    "released": "3/6/15",
    "distributor": "Distrib Films",
    "genre": "Black Comedy",
    "rating": "Not Rated",
    "gross": 37134,
    "tickets": 4404
  },
  {
    "title": "Grey Gardens",
    "released": "3/6/15",
    "distributor": "Janus Films",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 36923,
    "tickets": 4379
  },
  {
    "title": "Knock Knock",
    "released": "10/9/15",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 36336,
    "tickets": 4310
  },
  {
    "title": "The Kindergarten Teacher",
    "released": "7/31/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 36190,
    "tickets": 4293
  },
  {
    "title": "Welcome to Leith",
    "released": "9/9/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 36010,
    "tickets": 4271
  },
  {
    "title": "Finders Keepers",
    "released": "9/25/15",
    "distributor": "The Orchard",
    "genre": "Documentary",
    "rating": "R",
    "gross": 35555,
    "tickets": 4217
  },
  {
    "title": "The Pearl Button",
    "released": "10/23/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 34929,
    "tickets": 4143
  },
  {
    "title": "Office",
    "released": "9/18/15",
    "distributor": "China Lion Film Distribution",
    "genre": "Multiple Genres",
    "rating": "Not Rated",
    "gross": 34144,
    "tickets": 4050
  },
  {
    "title": "Song One",
    "released": "1/23/15",
    "distributor": "Cinedigm/Film Arcade",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 32251,
    "tickets": 3825
  },
  {
    "title": "Wild City",
    "released": "7/31/15",
    "distributor": "Well Go USA",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 32053,
    "tickets": 3802
  },
  {
    "title": "Amira & Sam",
    "released": "1/30/15",
    "distributor": "Drafthouse Films",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 31848,
    "tickets": 3777
  },
  {
    "title": "The Forbidden Room",
    "released": "10/7/15",
    "distributor": "Kino Lorber",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 31734,
    "tickets": 3764
  },
  {
    "title": "Hard to Be a God",
    "released": "1/30/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 31443,
    "tickets": 3729
  },
  {
    "title": "Don Verdean",
    "released": "12/11/15",
    "distributor": "Lionsgate",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 31309,
    "tickets": 3713
  },
  {
    "title": "People, Places, Things",
    "released": "8/14/15",
    "distributor": "Film Arcade",
    "genre": "Comedy",
    "rating": "R",
    "gross": 30768,
    "tickets": 3649
  },
  {
    "title": "Love on the Cloud",
    "released": "12/24/14",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 30708,
    "tickets": 3642
  },
  {
    "title": "Match",
    "released": "1/14/15",
    "distributor": "IFC Films",
    "genre": "Comedy",
    "rating": "R",
    "gross": 30566,
    "tickets": 3625
  },
  {
    "title": "Runoff",
    "released": "6/26/15",
    "distributor": "Monterey Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 30186,
    "tickets": 3580
  },
  {
    "title": "Paul Taylor Creative Domain",
    "released": "9/11/15",
    "distributor": "Resident Artist",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 30168,
    "tickets": 3578
  },
  {
    "title": "3 and 1/2 Minutes",
    "released": "6/19/15",
    "distributor": "Participant Media",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 29725,
    "tickets": 3526
  },
  {
    "title": "Paulette",
    "released": "8/14/15",
    "distributor": "Cohen Media Group",
    "genre": "Comedy",
    "rating": "R",
    "gross": 29086,
    "tickets": 3450
  },
  {
    "title": "Rebels Of the Neon God",
    "released": "4/10/15",
    "distributor": "Big World Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 28791,
    "tickets": 3415
  },
  {
    "title": "Le jour se leve",
    "released": "11/14/14",
    "distributor": "Rialto Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 28339,
    "tickets": 3361
  },
  {
    "title": "The Nightmare",
    "released": "6/5/15",
    "distributor": "Gravitas Ventures",
    "genre": "Horror",
    "rating": "Not Rated",
    "gross": 28281,
    "tickets": 3354
  },
  {
    "title": "Censored Voices",
    "released": "11/20/15",
    "distributor": "Music Box Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 28231,
    "tickets": 3348
  },
  {
    "title": "Like Sunday, Like Rain",
    "released": "3/6/15",
    "distributor": "Monterey Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 28208,
    "tickets": 3346
  },
  {
    "title": "7 Chinese Brothers",
    "released": "8/28/15",
    "distributor": "Screen Media Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 28180,
    "tickets": 3342
  },
  {
    "title": "The Cut",
    "released": "9/18/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 28066,
    "tickets": 3329
  },
  {
    "title": "Dear White People",
    "released": "10/17/14",
    "distributor": "Lionsgate/Roadside Attractions",
    "genre": "Comedy",
    "rating": "R",
    "gross": 27532,
    "tickets": 3265
  },
  {
    "title": "The Keeping Room",
    "released": "9/25/15",
    "distributor": "Drafthouse Films",
    "genre": "Western",
    "rating": "R",
    "gross": 27166,
    "tickets": 3222
  },
  {
    "title": "Elsa & Fred",
    "released": "11/7/14",
    "distributor": "Alchemy",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 26754,
    "tickets": 3173
  },
  {
    "title": "Tap World",
    "released": "7/10/15",
    "distributor": "Vitagraph Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 26747,
    "tickets": 3172
  },
  {
    "title": "Peace Officer",
    "released": "9/16/15",
    "distributor": "Submarine Deluxe",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 26632,
    "tickets": 3159
  },
  {
    "title": "The Best of Me",
    "released": "10/17/14",
    "distributor": "Relativity",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 26454,
    "tickets": 3138
  },
  {
    "title": "Sagrada: The Mystery of Creation",
    "released": "9/12/14",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 26155,
    "tickets": 3102
  },
  {
    "title": "Last Days in Vietnam",
    "released": "9/5/14",
    "distributor": "American Experience/PBS Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 26083,
    "tickets": 3094
  },
  {
    "title": "The Things of Life",
    "released": "6/12/15",
    "distributor": "Rialto Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 25314,
    "tickets": 3002
  },
  {
    "title": "Love at First Fight",
    "released": "5/22/15",
    "distributor": "Strand",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 25229,
    "tickets": 2992
  },
  {
    "title": "R100",
    "released": "1/23/15",
    "distributor": "Drafthouse Films",
    "genre": "Black Comedy",
    "rating": "Not Rated",
    "gross": 24956,
    "tickets": 2960
  },
  {
    "title": "Big Game",
    "released": "6/26/15",
    "distributor": "Relativity",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 24752,
    "tickets": 2936
  },
  {
    "title": "Forgotten",
    "released": "9/18/15",
    "distributor": "Cinema Libre",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 24638,
    "tickets": 2922
  },
  {
    "title": "Kill Me Three Times",
    "released": "4/10/15",
    "distributor": "Magnolia Pictures",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 24296,
    "tickets": 2882
  },
  {
    "title": "Hippocrates: Diary of a French Doctor",
    "released": "6/15/15",
    "distributor": "Distrib Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 23050,
    "tickets": 2734
  },
  {
    "title": "Slow Learners",
    "released": "8/19/15",
    "distributor": "IFC Films",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 22930,
    "tickets": 2720
  },
  {
    "title": "Court",
    "released": "7/15/15",
    "distributor": "Zeitgeist",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 22898,
    "tickets": 2716
  },
  {
    "title": "Epic of Everest",
    "released": "5/8/15",
    "distributor": "Kino International",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 22382,
    "tickets": 2655
  },
  {
    "title": "Can't Stand Losing You: Surviving the Police",
    "released": "3/20/15",
    "distributor": "Cinema Libre",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 22326,
    "tickets": 2648
  },
  {
    "title": "Metropolitan",
    "released": "8/3/90",
    "distributor": 0,
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 22284,
    "tickets": 2643
  },
  {
    "title": "Animals",
    "released": "5/15/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 22001,
    "tickets": 2609
  },
  {
    "title": "Futuro Beach",
    "released": "2/27/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 20620,
    "tickets": 2446
  },
  {
    "title": "Love, Rosie",
    "released": "2/6/15",
    "distributor": "Film Arcade",
    "genre": "Romantic Comedy",
    "rating": "R",
    "gross": 20431,
    "tickets": 2423
  },
  {
    "title": "Friends and Romans",
    "released": "10/23/15",
    "distributor": "Paladin",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 20136,
    "tickets": 2388
  },
  {
    "title": "Forbidden Games",
    "released": "4/24/15",
    "distributor": "Rialto Pictures",
    "genre": "Drama",
    "rating": "PG",
    "gross": 19889,
    "tickets": 2359
  },
  {
    "title": "Misery Loves Comedy",
    "released": "4/24/15",
    "distributor": "TriBeca Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 19634,
    "tickets": 2329
  },
  {
    "title": "Actress",
    "released": "11/7/14",
    "distributor": "Cinema Guild",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 19365,
    "tickets": 2297
  },
  {
    "title": "The Challenger",
    "released": "9/11/15",
    "distributor": "Freestyle Releasing",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 19003,
    "tickets": 2254
  },
  {
    "title": "Chimes at Midnight",
    "released": "1/1/16",
    "distributor": "Janus Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 18958,
    "tickets": 2248
  },
  {
    "title": "Meet the Mormons",
    "released": "10/10/14",
    "distributor": "Purdie Distribution",
    "genre": "Documentary",
    "rating": "PG",
    "gross": 18805,
    "tickets": 2230
  },
  {
    "title": "El Ardor",
    "released": "7/17/15",
    "distributor": "Strand",
    "genre": "Western",
    "rating": "R",
    "gross": 18572,
    "tickets": 2203
  },
  {
    "title": "Monk With a Camera",
    "released": "11/21/14",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 18275,
    "tickets": 2167
  },
  {
    "title": "The Little Death",
    "released": "6/26/15",
    "distributor": "Magnolia Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 18238,
    "tickets": 2163
  },
  {
    "title": "The Other One",
    "released": "8/14/15",
    "distributor": "Indican Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 17727,
    "tickets": 2102
  },
  {
    "title": "The Boy and the World",
    "released": "12/11/15",
    "distributor": "GKIDS",
    "genre": "Adventure",
    "rating": "PG",
    "gross": 17580,
    "tickets": 2085
  },
  {
    "title": "Trash",
    "released": "10/9/15",
    "distributor": "Focus Features",
    "genre": "Adventure",
    "rating": "R",
    "gross": 17484,
    "tickets": 2074
  },
  {
    "title": "Strangerland",
    "released": "7/10/15",
    "distributor": "Alchemy",
    "genre": "Drama",
    "rating": "R",
    "gross": 17472,
    "tickets": 2072
  },
  {
    "title": "Eastern Boys",
    "released": "2/27/15",
    "distributor": "First Run Features",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 16831,
    "tickets": 1996
  },
  {
    "title": "Extraction",
    "released": "12/18/15",
    "distributor": "Lionsgate",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 16775,
    "tickets": 1989
  },
  {
    "title": "Eva",
    "released": "3/13/15",
    "distributor": "Weinstein Co.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 16738,
    "tickets": 1985
  },
  {
    "title": "Noma My Perfect Storm",
    "released": "12/18/15",
    "distributor": "Magnolia Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 16700,
    "tickets": 1981
  },
  {
    "title": "This Changes Everything",
    "released": "10/2/15",
    "distributor": "Abramorama Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 16692,
    "tickets": 1980
  },
  {
    "title": "A Hard Day",
    "released": "7/17/15",
    "distributor": "Kino Lorber",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 16563,
    "tickets": 1964
  },
  {
    "title": "Girlhood",
    "released": "10/31/03",
    "distributor": 0,
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 16562,
    "tickets": 1964
  },
  {
    "title": "The King and the Mockingbird",
    "released": "11/21/14",
    "distributor": "Rialto Pictures",
    "genre": "Adventure",
    "rating": "Not Rated",
    "gross": 16396,
    "tickets": 1944
  },
  {
    "title": "Full Moon in Paris",
    "released": "4/17/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 16275,
    "tickets": 1930
  },
  {
    "title": "Hits",
    "released": "2/13/15",
    "distributor": "Honora Productions",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 15156,
    "tickets": 1797
  },
  {
    "title": "Cheatin'",
    "released": "4/3/15",
    "distributor": "Plymptoons",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 15077,
    "tickets": 1788
  },
  {
    "title": "Far Too Far",
    "released": "4/3/15",
    "distributor": "Time and Tide Productions, Inc.",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 15000,
    "tickets": 1779
  },
  {
    "title": "Only Yesterday",
    "released": "1/1/16",
    "distributor": "GKIDS",
    "genre": "Drama",
    "rating": "PG",
    "gross": 14970,
    "tickets": 1775
  },
  {
    "title": "Zombeavers",
    "released": "3/20/15",
    "distributor": "Freestyle Releasing",
    "genre": "Black Comedy",
    "rating": "R",
    "gross": 14947,
    "tickets": 1773
  },
  {
    "title": "10 Days in a Madhouse",
    "released": "11/11/15",
    "distributor": "Cafe Pictures",
    "genre": "Drama",
    "rating": "R",
    "gross": 14616,
    "tickets": 1733
  },
  {
    "title": "Buzzard",
    "released": "3/6/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Black Comedy",
    "rating": "Not Rated",
    "gross": 14591,
    "tickets": 1730
  },
  {
    "title": "The Human Centipede 3 (Final Sequence)",
    "released": "5/22/15",
    "distributor": "IFC Midnight",
    "genre": "Horror",
    "rating": "Not Rated",
    "gross": 14562,
    "tickets": 1727
  },
  {
    "title": "Americons",
    "released": "1/23/15",
    "distributor": "Archstone Entertainment",
    "genre": "Action",
    "rating": "R",
    "gross": 14404,
    "tickets": 1708
  },
  {
    "title": "Amour fou",
    "released": "3/18/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 14296,
    "tickets": 1695
  },
  {
    "title": "The World of Kanako",
    "released": "12/4/15",
    "distributor": "Drafthouse Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 14129,
    "tickets": 1676
  },
  {
    "title": "River of Fundament",
    "released": "12/4/15",
    "distributor": "International Film Circuit",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 13981,
    "tickets": 1658
  },
  {
    "title": "The Passionate Thief",
    "released": "12/5/14",
    "distributor": "Rialto Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 13135,
    "tickets": 1558
  },
  {
    "title": "Going Away",
    "released": "10/2/15",
    "distributor": "Cohen Media Group",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 12494,
    "tickets": 1482
  },
  {
    "title": "The Armor Of Light",
    "released": "10/30/15",
    "distributor": "Fork Films",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 12267,
    "tickets": 1455
  },
  {
    "title": "Of Horses and Men",
    "released": "3/13/15",
    "distributor": "Music Box Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 11894,
    "tickets": 1410
  },
  {
    "title": "Emptying The Skies",
    "released": "4/22/15",
    "distributor": "Music Box Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 11811,
    "tickets": 1401
  },
  {
    "title": "Marie's Story",
    "released": "5/1/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 11720,
    "tickets": 1390
  },
  {
    "title": "Listen Up Philip",
    "released": "10/17/14",
    "distributor": "TriBeca Films",
    "genre": "Black Comedy",
    "rating": "Not Rated",
    "gross": 11640,
    "tickets": 1380
  },
  {
    "title": "The Kidnapping of Michel Houellebecq",
    "released": "3/25/15",
    "distributor": "Kino Lorber",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 11546,
    "tickets": 1369
  },
  {
    "title": "The Devil's Violinist",
    "released": "1/30/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "R",
    "gross": 11294,
    "tickets": 1339
  },
  {
    "title": "1001 Grams",
    "released": "5/8/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 10983,
    "tickets": 1302
  },
  {
    "title": "Just Before I Go",
    "released": "4/24/15",
    "distributor": "Anchor Bay/Freestyle",
    "genre": "Comedy",
    "rating": "R",
    "gross": 10970,
    "tickets": 1301
  },
  {
    "title": "Sembene!",
    "released": "11/13/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 10945,
    "tickets": 1298
  },
  {
    "title": "Diplomacy",
    "released": "10/15/14",
    "distributor": "Zeitgeist",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 10880,
    "tickets": 1290
  },
  {
    "title": "Walking the Camino: Six Ways to Santiago",
    "released": "9/6/13",
    "distributor": "Future Educational Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 10783,
    "tickets": 1279
  },
  {
    "title": "Mala Mala",
    "released": "7/1/15",
    "distributor": "Strand",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 10761,
    "tickets": 1276
  },
  {
    "title": "The Overnighters",
    "released": "10/10/14",
    "distributor": "Drafthouse Films",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 10741,
    "tickets": 1274
  },
  {
    "title": "Stray Dogs",
    "released": "9/11/14",
    "distributor": "Cinema Guild",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 10433,
    "tickets": 1237
  },
  {
    "title": "The Forecaster",
    "released": "3/17/15",
    "distributor": "Autlook Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 10172,
    "tickets": 1206
  },
  {
    "title": "The Life and Mind of Mark DeFriest",
    "released": "3/6/15",
    "distributor": "City Drive Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 10021,
    "tickets": 1188
  },
  {
    "title": "My Old Lady",
    "released": "9/10/14",
    "distributor": "Cohen Media Group",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 9922,
    "tickets": 1176
  },
  {
    "title": "Wild Canaries",
    "released": "2/25/15",
    "distributor": "IFC Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 9795,
    "tickets": 1161
  },
  {
    "title": "Station to Station",
    "released": "8/21/15",
    "distributor": "Submarine Deluxe",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 9494,
    "tickets": 1126
  },
  {
    "title": "Still Life",
    "released": "1/16/15",
    "distributor": "TriBeca Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 9481,
    "tickets": 1124
  },
  {
    "title": "One Cut, One Life",
    "released": "5/13/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 9406,
    "tickets": 1115
  },
  {
    "title": "Medeas",
    "released": "3/13/15",
    "distributor": "The Vladar Company",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 9313,
    "tickets": 1104
  },
  {
    "title": "Cupcakes",
    "released": "3/27/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 9129,
    "tickets": 1082
  },
  {
    "title": "Arabian Nights: Vol. 1, The Restless One",
    "released": "12/4/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 9057,
    "tickets": 1074
  },
  {
    "title": "The Lesson",
    "released": "2/27/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 9045,
    "tickets": 1072
  },
  {
    "title": "The Hallow",
    "released": "11/13/15",
    "distributor": "IFC Midnight",
    "genre": "Horror",
    "rating": "Not Rated",
    "gross": 8967,
    "tickets": 1063
  },
  {
    "title": "Butterfly Girl",
    "released": "2/27/15",
    "distributor": "Indican Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 8956,
    "tickets": 1062
  },
  {
    "title": "Why Don't You Play in Hell?",
    "released": "11/7/14",
    "distributor": "Drafthouse Films",
    "genre": "Action",
    "rating": "Not Rated",
    "gross": 8913,
    "tickets": 1057
  },
  {
    "title": "Northern Soul",
    "released": "10/2/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "R",
    "gross": 8886,
    "tickets": 1054
  },
  {
    "title": "B-Side",
    "released": "7/10/15",
    "distributor": "Indican Pictures",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 8870,
    "tickets": 1052
  },
  {
    "title": "Paulo Caelho's Best Story",
    "released": "7/31/15",
    "distributor": "Music Box Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8808,
    "tickets": 1044
  },
  {
    "title": "Dawn of the Crescent Moon",
    "released": "7/17/15",
    "distributor": "Indican Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 8799,
    "tickets": 1043
  },
  {
    "title": "Little Accidents",
    "released": "1/16/15",
    "distributor": "Amplify",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8649,
    "tickets": 1025
  },
  {
    "title": "Meet Me in Montenegro",
    "released": "7/10/15",
    "distributor": "The Orchard",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 8612,
    "tickets": 1021
  },
  {
    "title": "Farewell to Hollywood",
    "released": "2/25/15",
    "distributor": "International Film Circuit",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 8601,
    "tickets": 1020
  },
  {
    "title": "Wa-shoku: Beyond Sushi",
    "released": "4/10/15",
    "distributor": 0,
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 8570,
    "tickets": 1016
  },
  {
    "title": "Conte d'hiver",
    "released": "12/19/14",
    "distributor": "Big World Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8406,
    "tickets": 997
  },
  {
    "title": "Counting",
    "released": "7/31/15",
    "distributor": "Cinema Guild",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 8374,
    "tickets": 993
  },
  {
    "title": "The Girl in the Book",
    "released": "12/11/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8245,
    "tickets": 978
  },
  {
    "title": "A Fool",
    "released": "11/29/15",
    "distributor": "Clarius Entertainment",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 8212,
    "tickets": 974
  },
  {
    "title": "Jellyfish Eyes",
    "released": "5/1/14",
    "distributor": 0,
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 8176,
    "tickets": 969
  },
  {
    "title": "Hiroshima Mon Amour",
    "released": "10/17/14",
    "distributor": "Rialto Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8139,
    "tickets": 965
  },
  {
    "title": "Army of Shadows",
    "released": "4/28/06",
    "distributor": "Rialto Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8100,
    "tickets": 960
  },
  {
    "title": "The Dinner",
    "released": "8/7/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8054,
    "tickets": 955
  },
  {
    "title": "Steak (R)evolution",
    "released": "7/17/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 8025,
    "tickets": 951
  },
  {
    "title": "Straight Outta Tompkins",
    "released": "3/6/15",
    "distributor": "Indican Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 8022,
    "tickets": 951
  },
  {
    "title": "If You Don't, I Will",
    "released": "12/17/14",
    "distributor": "Film Movement",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 8012,
    "tickets": 950
  },
  {
    "title": "Gone Doggy Gone",
    "released": "6/26/15",
    "distributor": "Indican Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 8001,
    "tickets": 949
  },
  {
    "title": "One Small Hitch",
    "released": "2/6/15",
    "distributor": "Freestyle Releasing",
    "genre": "Romantic Comedy",
    "rating": "PG-13",
    "gross": 7965,
    "tickets": 944
  },
  {
    "title": "Kilo Two Bravo",
    "released": "11/13/15",
    "distributor": "Honora Productions",
    "genre": "Drama",
    "rating": "R",
    "gross": 7891,
    "tickets": 936
  },
  {
    "title": "The Great Man",
    "released": "8/14/15",
    "distributor": "Distrib Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 7814,
    "tickets": 926
  },
  {
    "title": "On the Way to School",
    "released": "2/6/15",
    "distributor": "Distrib Films",
    "genre": "Documentary",
    "rating": "G",
    "gross": 7424,
    "tickets": 880
  },
  {
    "title": "Rubble Kings",
    "released": "6/19/15",
    "distributor": "Saboteur Media",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 7416,
    "tickets": 879
  },
  {
    "title": "The Film Critic",
    "released": "5/15/15",
    "distributor": "Music Box Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 7358,
    "tickets": 872
  },
  {
    "title": "Set Fire to the Stars",
    "released": "6/12/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 7280,
    "tickets": 863
  },
  {
    "title": "Life of Riley",
    "released": "10/24/14",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 7210,
    "tickets": 855
  },
  {
    "title": "Antarctic Edge: 70º South",
    "released": "4/17/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 7193,
    "tickets": 853
  },
  {
    "title": "Li'l Quinquin",
    "released": "1/2/15",
    "distributor": "Kino Lorber",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 7192,
    "tickets": 853
  },
  {
    "title": "A Murder in the Park",
    "released": "6/26/15",
    "distributor": "Sundance Selects",
    "genre": "Documentary",
    "rating": "PG-13",
    "gross": 7125,
    "tickets": 845
  },
  {
    "title": "Victoria",
    "released": "10/9/15",
    "distributor": "Adopt Films",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 6971,
    "tickets": 826
  },
  {
    "title": "Gabriel",
    "released": "6/19/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 6959,
    "tickets": 825
  },
  {
    "title": "Hungry Hearts",
    "released": "6/5/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 6921,
    "tickets": 820
  },
  {
    "title": "Advanced Style",
    "released": "9/26/14",
    "distributor": "Bond/360",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 6905,
    "tickets": 819
  },
  {
    "title": "The Sisterhood of Night",
    "released": "4/10/15",
    "distributor": "Freestyle Releasing",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 6870,
    "tickets": 814
  },
  {
    "title": "Steve McQueen: The Man & Le Mans",
    "released": "11/13/15",
    "distributor": "FilmRise",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 6843,
    "tickets": 811
  },
  {
    "title": "Horse Money",
    "released": "7/24/15",
    "distributor": "Cinema Guild",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 6508,
    "tickets": 772
  },
  {
    "title": "The Suicide Theory",
    "released": "7/10/15",
    "distributor": "Freestyle Releasing",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 6434,
    "tickets": 763
  },
  {
    "title": "Alléluia",
    "released": "7/17/15",
    "distributor": "Doppelganger Releasing",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 6334,
    "tickets": 751
  },
  {
    "title": "Guidance",
    "released": "8/21/15",
    "distributor": "Strand",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 6194,
    "tickets": 734
  },
  {
    "title": "Marquise of O",
    "released": "5/1/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "PG",
    "gross": 6049,
    "tickets": 717
  },
  {
    "title": "Famous Nathan",
    "released": "7/17/15",
    "distributor": "Film Movement",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 6048,
    "tickets": 717
  },
  {
    "title": "The Riot Club",
    "released": "3/27/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "R",
    "gross": 6041,
    "tickets": 716
  },
  {
    "title": "Sex, Death and Bowling",
    "released": "10/30/15",
    "distributor": "Monterey Media",
    "genre": "Comedy",
    "rating": "R",
    "gross": 5972,
    "tickets": 708
  },
  {
    "title": "Viva La Liberta",
    "released": "11/7/14",
    "distributor": "Distrib Films",
    "genre": 0,
    "rating": "Not Rated",
    "gross": 5955,
    "tickets": 706
  },
  {
    "title": "Top Spin",
    "released": "8/21/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5858,
    "tickets": 694
  },
  {
    "title": "Mediterranea",
    "released": "11/20/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5846,
    "tickets": 693
  },
  {
    "title": "Shout Gladi Gladi",
    "released": "10/2/15",
    "distributor": "International Film Circuit",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5839,
    "tickets": 692
  },
  {
    "title": "The Wanted 18",
    "released": "6/19/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5680,
    "tickets": 673
  },
  {
    "title": "Tu dors Nicole",
    "released": "5/29/15",
    "distributor": "Kino Lorber",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 5662,
    "tickets": 671
  },
  {
    "title": "This Isn't Funny",
    "released": "11/6/15",
    "distributor": "Candy Factory Films",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 5654,
    "tickets": 670
  },
  {
    "title": "The Winding Steam",
    "released": "12/16/15",
    "distributor": "Argot Pictures",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5588,
    "tickets": 662
  },
  {
    "title": "Our Man in Tehran",
    "released": "5/15/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5573,
    "tickets": 661
  },
  {
    "title": "The Living",
    "released": "4/3/15",
    "distributor": "Monterey Media",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 5514,
    "tickets": 654
  },
  {
    "title": "Concerning Violence",
    "released": "12/5/14",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5439,
    "tickets": 645
  },
  {
    "title": "Revenge of the Mekons",
    "released": "10/29/14",
    "distributor": "Music Box Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 5374,
    "tickets": 637
  },
  {
    "title": "Far From Men",
    "released": "5/1/15",
    "distributor": "TriBeca Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5336,
    "tickets": 632
  },
  {
    "title": "From Mayerling to Sarajevo",
    "released": "3/27/15",
    "distributor": "The Film Desk",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5247,
    "tickets": 622
  },
  {
    "title": "The Dead Lands",
    "released": "4/17/15",
    "distributor": "Magnolia Pictures",
    "genre": "Action",
    "rating": "R",
    "gross": 5240,
    "tickets": 621
  },
  {
    "title": "The Good Lie",
    "released": "10/3/14",
    "distributor": "Warner Bros.",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 5220,
    "tickets": 619
  },
  {
    "title": "The Princess of France",
    "released": "6/26/15",
    "distributor": "Cinema Guild",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5212,
    "tickets": 618
  },
  {
    "title": "Death Valley",
    "released": "10/16/15",
    "distributor": "Indican Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5211,
    "tickets": 618
  },
  {
    "title": "A Reason",
    "released": "8/28/15",
    "distributor": "Indican Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 5010,
    "tickets": 594
  },
  {
    "title": "The Voices",
    "released": "2/6/15",
    "distributor": "Lionsgate",
    "genre": "Comedy",
    "rating": "R",
    "gross": 5000,
    "tickets": 593
  },
  {
    "title": "SBK The-Movie",
    "released": "4/3/15",
    "distributor": "Hanover Multimedia",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 4950,
    "tickets": 587
  },
  {
    "title": "Gerontophilia",
    "released": "5/1/15",
    "distributor": "Strand",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 4916,
    "tickets": 583
  },
  {
    "title": "Barely Lethal",
    "released": "5/29/15",
    "distributor": "A24",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 4912,
    "tickets": 582
  },
  {
    "title": "Arabian Nights: Volume 2, The Desolate One",
    "released": "12/11/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 4839,
    "tickets": 574
  },
  {
    "title": "Goodbye to All That",
    "released": "12/17/14",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 4790,
    "tickets": 568
  },
  {
    "title": "Miss Hill: Making Dance Matter",
    "released": "1/23/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 4706,
    "tickets": 558
  },
  {
    "title": "Ashby",
    "released": "9/25/15",
    "distributor": "Film Arcade",
    "genre": "Comedy",
    "rating": "R",
    "gross": 4631,
    "tickets": 549
  },
  {
    "title": "Seeds of Time",
    "released": "5/22/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 4630,
    "tickets": 549
  },
  {
    "title": "Tango Negro: The African Roots of Tango",
    "released": "8/14/15",
    "distributor": "ArtMattan Productions",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 4593,
    "tickets": 544
  },
  {
    "title": "52 Tuesdays",
    "released": "3/27/15",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 4484,
    "tickets": 531
  },
  {
    "title": "Farwell, Herr Schwartz",
    "released": "1/9/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 4455,
    "tickets": 528
  },
  {
    "title": "The Sacrifice",
    "released": "11/7/14",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 4442,
    "tickets": 526
  },
  {
    "title": "Back in Time",
    "released": "12/12/14",
    "distributor": "China Lion Film Distribution",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 4330,
    "tickets": 513
  },
  {
    "title": "Days of Grace",
    "released": "5/1/15",
    "distributor": "Cinema Libre",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 4308,
    "tickets": 511
  },
  {
    "title": "The Blade of Don Juan",
    "released": "9/18/15",
    "distributor": "Indican Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 4254,
    "tickets": 504
  },
  {
    "title": "What We Did on Our Holiday",
    "released": "7/10/15",
    "distributor": "Lionsgate",
    "genre": "Comedy",
    "rating": "PG-13",
    "gross": 4200,
    "tickets": 498
  },
  {
    "title": "The Worst Movie EVER!",
    "released": "8/19/11",
    "distributor": "Hiltz Squared",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 4196,
    "tickets": 497
  },
  {
    "title": "Three Night Stand",
    "released": "1/16/15",
    "distributor": "Myriad Entertainment Group",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 4076,
    "tickets": 483
  },
  {
    "title": "Salvation Army",
    "released": "1/23/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3929,
    "tickets": 466
  },
  {
    "title": "La rançon de la gloire",
    "released": "5/8/15",
    "distributor": "Mongrel Media",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 3926,
    "tickets": 465
  },
  {
    "title": "Unfreedom",
    "released": "5/29/15",
    "distributor": "Dark Frames",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3778,
    "tickets": 448
  },
  {
    "title": "She's Lost Control",
    "released": "3/20/15",
    "distributor": "Monument Releasing",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3740,
    "tickets": 443
  },
  {
    "title": "In the Basement",
    "released": "11/6/15",
    "distributor": "Strand",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 3643,
    "tickets": 432
  },
  {
    "title": "Fidelio Alice's Journey",
    "released": "7/17/15",
    "distributor": "First Run Features",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3580,
    "tickets": 424
  },
  {
    "title": "Jenny's Wedding",
    "released": "7/31/15",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 3540,
    "tickets": 419
  },
  {
    "title": "That Sugar Film",
    "released": "7/31/15",
    "distributor": "IDP/Samuel Goldwyn Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 3500,
    "tickets": 415
  },
  {
    "title": "Blackhats",
    "released": "10/23/15",
    "distributor": "Reel One Entertainment / Supremacy Films",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 3442,
    "tickets": 408
  },
  {
    "title": "Hyena",
    "released": "5/1/15",
    "distributor": "TriBeca Films",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 3401,
    "tickets": 403
  },
  {
    "title": "Know How",
    "released": "5/15/15",
    "distributor": "First Run Features",
    "genre": "Musical",
    "rating": "Not Rated",
    "gross": 3323,
    "tickets": 394
  },
  {
    "title": "Tip Top",
    "released": "12/12/14",
    "distributor": "Kino Lorber",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 3318,
    "tickets": 393
  },
  {
    "title": "Windsor Drive",
    "released": "8/28/15",
    "distributor": "Indican Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 3256,
    "tickets": 386
  },
  {
    "title": "Dreams Rewired",
    "released": "12/16/15",
    "distributor": "Icarus Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 3240,
    "tickets": 384
  },
  {
    "title": "Wild Card",
    "released": "1/30/15",
    "distributor": "Lionsgate",
    "genre": "Action",
    "rating": "R",
    "gross": 3200,
    "tickets": 379
  },
  {
    "title": "Xenia",
    "released": "10/9/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3181,
    "tickets": 377
  },
  {
    "title": "Allure",
    "released": "3/6/15",
    "distributor": 0,
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3130,
    "tickets": 371
  },
  {
    "title": "Anita Ho",
    "released": "2/27/14",
    "distributor": "Indican Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 3050,
    "tickets": 361
  },
  {
    "title": "The Way He Looks",
    "released": "11/7/14",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 3043,
    "tickets": 360
  },
  {
    "title": "Julia",
    "released": "10/23/15",
    "distributor": "Archstone Entertainment",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 2710,
    "tickets": 321
  },
  {
    "title": "Chocolat",
    "released": "9/18/15",
    "distributor": "The Film Desk",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 2710,
    "tickets": 321
  },
  {
    "title": "The Blue Room",
    "released": "10/3/14",
    "distributor": "IFC Films",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 2684,
    "tickets": 318
  },
  {
    "title": "On War",
    "released": "11/20/15",
    "distributor": "Indican Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 2672,
    "tickets": 316
  },
  {
    "title": "Body",
    "released": "12/11/15",
    "distributor": "Oscilloscope Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 2634,
    "tickets": 312
  },
  {
    "title": "Hayride 2",
    "released": "3/6/15",
    "distributor": "Freestyle Releasing",
    "genre": "Horror",
    "rating": "R",
    "gross": 2571,
    "tickets": 304
  },
  {
    "title": "L.A. Slasher",
    "released": "6/26/15",
    "distributor": "Archstone Entertainment",
    "genre": "Comedy",
    "rating": "R",
    "gross": 2421,
    "tickets": 287
  },
  {
    "title": "Me, You and Five Bucks",
    "released": "9/28/15",
    "distributor": "Indican Pictures",
    "genre": "Romantic Comedy",
    "rating": "Not Rated",
    "gross": 2105,
    "tickets": 249
  },
  {
    "title": "Manuscripts Don't Burn",
    "released": "6/13/14",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 2016,
    "tickets": 239
  },
  {
    "title": "Tracers",
    "released": "3/20/15",
    "distributor": "Lionsgate",
    "genre": "Action",
    "rating": "PG-13",
    "gross": 2000,
    "tickets": 237
  },
  {
    "title": "Women Who Flirt",
    "released": "11/26/14",
    "distributor": "China Lion Film Distribution",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 1973,
    "tickets": 234
  },
  {
    "title": "Sneakerheadz",
    "released": "8/7/15",
    "distributor": "Submarine Deluxe",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1903,
    "tickets": 225
  },
  {
    "title": "The Lady in the Car With Glasses and A Gun",
    "released": "12/18/15",
    "distributor": "Magnolia Pictures",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 1901,
    "tickets": 225
  },
  {
    "title": "Life Partners",
    "released": "12/5/14",
    "distributor": "Magnolia Pictures",
    "genre": "Comedy",
    "rating": "R",
    "gross": 1870,
    "tickets": 221
  },
  {
    "title": "Everly",
    "released": "2/27/15",
    "distributor": "RADiUS-TWC",
    "genre": "Action",
    "rating": "R",
    "gross": 1800,
    "tickets": 213
  },
  {
    "title": "20,000 Days on Earth",
    "released": "9/17/14",
    "distributor": "Drafthouse Films",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1788,
    "tickets": 212
  },
  {
    "title": "The Other Man: F.W. de Klerk and the End of Apartheid",
    "released": "2/6/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1747,
    "tickets": 207
  },
  {
    "title": "The Looking Glass",
    "released": "10/23/15",
    "distributor": "First Run Features",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 1711,
    "tickets": 202
  },
  {
    "title": "The Summer of Sangaile",
    "released": "11/20/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 1700,
    "tickets": 201
  },
  {
    "title": "Drown",
    "released": "8/28/15",
    "distributor": "Strand",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 1631,
    "tickets": 193
  },
  {
    "title": "Cut Snake",
    "released": "10/16/15",
    "distributor": "Monterey Media",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1625,
    "tickets": 192
  },
  {
    "title": "Forever",
    "released": "9/25/15",
    "distributor": "Monterey Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 1597,
    "tickets": 189
  },
  {
    "title": "Making Rounds",
    "released": "10/30/15",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1484,
    "tickets": 176
  },
  {
    "title": "The Captive",
    "released": "12/12/14",
    "distributor": "A24",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 1457,
    "tickets": 172
  },
  {
    "title": "The Pardon",
    "released": "3/22/13",
    "distributor": "Self Distributed",
    "genre": "Drama",
    "rating": "PG-13",
    "gross": 1418,
    "tickets": 168
  },
  {
    "title": "Son of a Gun",
    "released": "1/23/15",
    "distributor": "A24",
    "genre": "Action",
    "rating": "R",
    "gross": 1411,
    "tickets": 167
  },
  {
    "title": "Eternity: The Movie",
    "released": "10/17/14",
    "distributor": "Vagrant Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 1390,
    "tickets": 164
  },
  {
    "title": "Faith Connections",
    "released": "9/12/14",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1339,
    "tickets": 158
  },
  {
    "title": "3 Nights in the Desert",
    "released": "2/6/15",
    "distributor": "Monterey Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 1297,
    "tickets": 153
  },
  {
    "title": "It's Hard Being Loved by Jerks",
    "released": "3/13/15",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1279,
    "tickets": 151
  },
  {
    "title": "Skin Trade",
    "released": "5/8/15",
    "distributor": "Magnolia Pictures",
    "genre": "Action",
    "rating": "R",
    "gross": 1242,
    "tickets": 147
  },
  {
    "title": "The Decent One",
    "released": "10/1/14",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 1087,
    "tickets": 128
  },
  {
    "title": "United Passions",
    "released": "6/5/15",
    "distributor": "Screen Media Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 918,
    "tickets": 108
  },
  {
    "title": "Half of a Yellow Sun",
    "released": "5/16/14",
    "distributor": "Monterey Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 884,
    "tickets": 104
  },
  {
    "title": "Big Muddy",
    "released": "1/23/15",
    "distributor": "Monterey Media",
    "genre": "Drama",
    "rating": "R",
    "gross": 881,
    "tickets": 104
  },
  {
    "title": "[REC] 4: Apocalypse",
    "released": "1/2/15",
    "distributor": "Magnolia Pictures",
    "genre": "Horror",
    "rating": "R",
    "gross": 837,
    "tickets": 99
  },
  {
    "title": "Through a Lens Darkly",
    "released": "8/27/14",
    "distributor": "First Run Features",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 728,
    "tickets": 86
  },
  {
    "title": "It's All So Quiet",
    "released": "1/9/15",
    "distributor": "Big World Pictures",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 724,
    "tickets": 85
  },
  {
    "title": "A Summer's Tale",
    "released": "6/20/14",
    "distributor": "Big World Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 664,
    "tickets": 78
  },
  {
    "title": "Fonzy",
    "released": "6/20/15",
    "distributor": "Distrib Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 644,
    "tickets": 76
  },
  {
    "title": "Chic!",
    "released": "5/1/15",
    "distributor": "Distrib Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 587,
    "tickets": 69
  },
  {
    "title": "Patch Town",
    "released": "6/5/15",
    "distributor": "Kino Lorber",
    "genre": "Adventure",
    "rating": "Not Rated",
    "gross": 584,
    "tickets": 69
  },
  {
    "title": "Finding Fela!",
    "released": "8/1/14",
    "distributor": "Kino Lorber",
    "genre": "Documentary",
    "rating": "Not Rated",
    "gross": 554,
    "tickets": 65
  },
  {
    "title": "Two-Bit Waltz",
    "released": "10/24/14",
    "distributor": "Monterey Media",
    "genre": "Comedy",
    "rating": "R",
    "gross": 554,
    "tickets": 65
  },
  {
    "title": "The Olivia Experiment",
    "released": "8/22/14",
    "distributor": "Indican Pictures",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 500,
    "tickets": 59
  },
  {
    "title": "Jimmy P.",
    "released": "2/14/14",
    "distributor": "IFC Films",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 483,
    "tickets": 57
  },
  {
    "title": "Love is Strange",
    "released": "8/22/14",
    "distributor": "Sony Pictures Classics",
    "genre": "Drama",
    "rating": "R",
    "gross": 352,
    "tickets": 41
  },
  {
    "title": "The Chambermaid",
    "released": "5/29/15",
    "distributor": "Film Movement",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 315,
    "tickets": 37
  },
  {
    "title": "El Nino",
    "released": "4/17/15",
    "distributor": "Distrib Films",
    "genre": "Thriller/Suspense",
    "rating": "Not Rated",
    "gross": 245,
    "tickets": 29
  },
  {
    "title": "Exhibition",
    "released": "6/20/14",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 187,
    "tickets": 22
  },
  {
    "title": "Lou!",
    "released": "4/24/15",
    "distributor": "Distrib Films",
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 88,
    "tickets": 10
  },
  {
    "title": "Memphis",
    "released": "9/5/14",
    "distributor": "Kino Lorber",
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 54,
    "tickets": 6
  },
  {
    "title": "Paranoid Girls",
    "released": "11/19/15",
    "distributor": 0,
    "genre": "Comedy",
    "rating": "Not Rated",
    "gross": 54,
    "tickets": 6
  },
  {
    "title": "The Historian",
    "released": "11/7/14",
    "distributor": 0,
    "genre": "Drama",
    "rating": "Not Rated",
    "gross": 36,
    "tickets": 4
  },
  {
    "title": "Pioneer",
    "released": "12/5/14",
    "distributor": "Magnolia Pictures",
    "genre": "Thriller/Suspense",
    "rating": "R",
    "gross": 24,
    "tickets": 2
  }
]