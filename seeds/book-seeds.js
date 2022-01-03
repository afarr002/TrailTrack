const { Books } = require("../models");

const bookSeedData = [
  {
    title: "Where Should We Camp Next?",
    author: "Stephanie & Jeremy Puglisi",
    description:
      "Your essential planning guidebook for family-friendly camping trips featuring 300+ of the best camping and glamping spots in the USA!",
  },
  {
    title: "Bushcraft 101: A Field Guide to the Art of Wilderness Survival",
    author: "Dave Canterbury",
    description: "The ultimate resource for experiencing the backcountry!",
  },
  {
    title:
      "100 Parks, 5,000 Ideas: Where to Go, When to Go, What to See, What to Do",
    author: "Joe Yogerst",
    description:
      "Filled with helpful travel tips and beautiful National Geographic photography, this expert guide showcases the best experiences in the top national, state, and city parks throughout North America.",
  },
  {
    title:
      "Moon USA National Parks: The Complete Guide to All 62 Parks (Travel Guide)",
    author: "Becky Lomax",
    description:
      "They've been dubbed America's best idea for a reason: get inspired, get outdoors, and discover the wild beauty of the United States with Moon USA National Parks.",
  },
  {
    title: "The Lost Art of Reading Nature's Signs",
    author: "Tristan Gooley",
    description:
      "Use Outdoor Clues to Find Your Way, Predict the Weather, Locate Water, Track Animals―and Other Forgotten Skills. Turn every walk into a game of detection—from master outdoorsman Tristan Gooley, New York Times-bestselling author of The Secret World of Weather and The Natural Navigator",
  },
  {
    title: "The MeatEater Guide to Wilderness Skills and Survival",
    author: "Steven Rinella",
    description:
      "An indispensable guide to surviving everything from an extended wilderness exploration to a day-long boat trip, with hard-earned advice from the host of the show MeatEater as seen on Netflix",
  },
  {
    title: "SAS Survival Handbook",
    author: "John 'Lofty' Wiseman",
    description:
      "The Ultimate Guide to Surviving Anywhere, now updated with more than 100 pages of additional material, including a new chapter on urban survival",
  },
  {
    title: "A Walk in the Woods",
    author: "Bill Bryson",
    description:
      "In this best-selling hiking-memoir-turned-feature-film, classic Bryson recounts his somewhat farcical attempt to hike the Appalachian Trail.",
  },
  {
    title: "America's Best Day Hikes",
    author: "Derek Dellinger",
    description:
      "Spectacular Single-Day Hikes Across the States. 50 of the greatest hikes in the country, for all abilities and in all landscapes.",
  },
  {
    title: "National Park Passport & Bucket List",
    author: "Black Swan",
    description:
      "U.S. Outdoor Adventure Guide Planner List, Camping, RV, Hiking Gear Equipment & Accessories Checklist. This BESTSELLER was produced in collaboration with a retired National Parks employee and is recommended by the National Parks Service Department!",
  },
  {
    title: "Wild: A Journey from Lost to Found",
    author: "Cheryl Strayed",
    description:
      "This best-selling memoir (now a feature film) charts the story a 22-year-old who took the bold and impulsive decision to hike more than 1,000 miles of the Pacific Crest Trail.",
  },
  {
    title: "A Walk Across America",
    author: "Peter Jenkins",
    description:
      "Twenty-five years ago, a disillusioned young man set out on a walk across America. This is the book he wrote about that journey – a classic account of the reawakening of his faith in himself and his country.",
  },
  {
    title: "The Pilgrimage: A Contemporary Quest for Ancient Wisdom",
    author: "Paulo Coelho",
    description:
      "Paulo Coelho details his journey across Spain along the legendary road of San Tiago, which pilgrims have travelled since the Middle Ages.",
  },
  {
    title: "Into the Wild",
    author: "Jon Krakauer",
    description:
      "In 1992, Chris McCandless hitchhiked to Alaska and walked alone into the wilderness. Four months later, his decomposed body was discovered. How McCandless came to die is the unforgettable story of Into the Wild.",
  },
  {
    title:
      "Grandma Gatewood’s Walk: The Inspiring Story of the Woman Who Saved the Appalachian Trail",
    author: "Ben Montgomery",
    description:
      "Emma Gatewood, a 67-year-old great grandmother, told her family she was going on a walk. The next anybody heard from her, she had walked 800 miles of the Appalachian Trail.",
  },
  {
    title: "Walking the Himalayas: An Adventure of Survival and Endurance",
    author: "Levison Wood",
    description:
      "Following his trek along the length of the Nile River, explorer Levison Wood takes on his greatest challenge yet: navigating the treacherous foothills of the world’s highest mountain range.",
  },
  {
    title:
      "The Backpacker’s Field Manual, Revised and Updated: A Comprehensive Guide to Mastering Backcountry Skills",
    author: "Rick Curtis",
    description:
      "When first published in 1998, this set the standard for comprehensive backpacking books. Updated for modern backpacking, it covers the latest developments in gear, first aid, Leave No Trace camping and outdoor leadership.",
  },
  {
    title: "Almost Somewhere: Twenty-Eight Days on the John Muir Trail",
    author: "Suzanne Roberts",
    description:
      "It was 1993 and Suzanne Roberts had just finished college when her friend suggested they hike California’s John Muir Trail. Part memoir, part nature writing, part travelogue, Almost Somewhere is Roberts’ account of that hike.",
  },
  {
    title:
      "Fifty Places to Hike Before You Die: Outdoor Experts Share the World’s Greatest Destinations",
    author: "Chris Santella",
    description:
      "Chris Santella, with the help of top expedition leaders, explores the world’s greatest hiking destinations.",
  },
  {
    title: "The Ultimate Hiker’s Gear Guide",
    author: "Andrew Skurka",
    description:
      "This recently updated second edition is a show-and-tell guide to clothing, footwear, backpacks, shelter and more, and includes tips on foot care, campsite selection and hiking efficiency.",
  },
  {
    title:
      "America's Great Hiking Trails: Appalachian, Pacific Crest, Continental Divide, North Country, Ice Age, Potomac Heritage, Florida, Natchez Trace, Arizona, Pacific Northwest, New England",
    author: "Karen Berger",
    description:
      " A hiker’s dream bucket list is embodied in this lavishly illustrated celebration of more than 50,000 miles of America’s most iconic trails. Celebrating the forty most important trails in America, this volume takes the reader through forty-nine states and eight national parks.",
  },
  {
    title: "Walking Distance: Extraordinary Hikes for Ordinary People",
    author: "Robert E. Manning",
    description:
      "Walking is simple, but it can also be profound. In an increasingly complex and frantic world, walking can simplify our lives. It encourages intimate contact with places and people, promotes health, and is one of the most sustainable forms of recreation. Robert and Martha Manning invite readers to explore the pleasures of long-distance walking in their inspiring new book, Walking Distance.",
  },
  {
    title: "Classic Hikes of the World: 23 Breathtaking Treks",
    author: "Peter Potterfield",
    description:
      "This book will help you realize your dreams of hiking among the world's highest peaks and most scenic canyons, discovering wilderness far from the clamor of civilization, encountering rare birds and animals, glorying in sunsets over glacier-clad ranges, and feeling the joy and achievement of hiking some of the world's most spectacular trails.",
  },
  {
    title: "Classic Treks: The 30 Most Spectacular Hikes in the World",
    author: "Bill Birkett",
    description:
      "Judy Armstrong, Steve Callen, John Cleare, and other notable mountaineers, adventurers, and nature writers describe detailed descriptions of thirty outstanding hikes, describing the local customs, weather, flora and fauna, equipment, permits, and other important details, in a worldwide directory that is complemented by hundreds of full-color photographs and illustrations. 20,000 first printing.",
  },
  {
    title: "The World's Great Adventure Treks",
    author: "Jack Jackson",
    description:
      "A strikingly illustrated guide to twenty of the worlds most exciting long- distance hikes. The twenty hikes featured in this lavishly illustrated guide cover every inhabited continent and range from a daring passage along the glaciers of the Karakorum to an age-old pilgrimage route through northern Spain, but they do have one thing in common: adventure. All the treks are of at least five days duration and present formidable challenges, like the hazards of extreme terrain or the need for self-sufficiency in landscapes traversed only by hardy locals. Hikers who successfully meet these challenges are rewarded with the sights and experiences of a lifetime: a breathtaking vista of the ruins of Machu Picchu, a delicious meal in a remote Greek mountain village, or even an encounter with New Zealands kea, the worlds only species of alpine parrot.",
  },
  {
    title:
      "Classic Hikes of North America: 25 Breathtaking Treks in the United States and Canada",
    author: "Peter Potterfield",
    description:
      "Everything you need to know about the United States' and Canada's most enjoyable hiking routes and backcountry excursions. Classic Hikes of North America is a beautifully photographed and eminently practical account of the best backcountry journeys in the United States and Canada. Peter Potterfield, an experienced hiker and photographer, has analyzed and graded these spectacular wilderness experiences with both beginners and avid hikers in mind.",
  },
  {
    title:
      "Hiking: Hiking and Backpacking Guide for Your Ultimate Trail Experience (Backpacking, Backpacking for Beginners, Hiking, Hiking for Beginners, Off Grid Living, Camping) (Volume 1)",
    author: "Daniel Born",
    description:
      "Discover the ultimate trail experience with this hiking and backpacking guide! Perfect for hiking and backpacking beginners and newbies! Also great for experienced hikers and backpackers!",
  },
  {
    title:
      "Get Out And Hike!: A Beginners Guide To HIking (Hiking, Backpacking,Trail Adventures,Hiking Guide For Beginners)",
    author: "Michele Gilbert",
    description:
      "Would you like a way that might awaken you to discovering your innate talents? Would you like to widen your comfort zones?, Would you like to develop skills you didn't even know you had? Hiking and Backpacking are ways to help you do just that...and more! Hiking and Backpacking can lead to mental satisfaction, a true sense of achievement, build confidence,and even overcome depression. Check this out and see what you will learn.",
  },
  {
    title:
      "Backpacking: For Beginners - The Essential Traveler's Guide to Backpacking and Hiking Around The World",
    author: "Andrew Stephenson",
    description:
      "Planning your first backpacking trip can be daunting, especially with so much contradictory information out there. This is why Backpacking for Beginners: The Essential Traveler’s Guide to Backpacking and Hiking Around The World cuts to the chase and gives you the information you really need, in a compact, easy-to-read format. It contains tried-and-tested strategies and tips from real backpackers, as well as plenty of useful hacks. It takes you through the process, from choosing your destination to advice on what to take, how to choose your accommodation and how to stay safe. At the end of each chapter you’ll also find useful links to websites where you can find out more about specific aspects of backpacking.",
  },
  {
    title: "The Backpacker's Handbook, 4th Edition",
    author: "Chris Townsend",
    description:
      "What you need to know before you hit the trails. Whether you are backpacking for the first time or a veteran follower of the trails, this enormously practical guide includes everything you need to know, from essential techniques such as map and compass work to the skills needed for more remote wilderness journeys. The Backpacker's Handbook also gives you the latest information on gear.",
  },
];

const seedBooks = () => Books.bulkCreate(bookSeedData);

module.exports = seedBooks;
