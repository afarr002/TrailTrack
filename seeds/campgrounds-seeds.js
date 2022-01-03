const { Campgrounds } = require("../models");
// const campgroundDbInfo = require("../api-fetch");

const dbCampgroundInfo = [
  {
    name: "Aspenglen Campground",
    latitude: "40.3993477054872",
    longitude: "-105.593054516689",
    description:
      "Near the Fall River Entrance. Douglas fir, lodgepole pine, ponderosa pine and the occasional Engelmann spruce forests the campground, offering equal amounts of sun and shade. Grasses, shrubs and seasonal wildflowers fill the open meadows. Aspenglen contains several drive-to family sites for tents and RVs. A few sites are more secluded, walk-to tent sites.",
    fees: "30.00",
    url: "https://www.nps.gov/romo/planyourvisit/agcg.htm",
    images:
      "https://www.nps.gov/common/uploads/structured_data/3FAA6E89-1DD8-B71B-0B170E56BD4ED00D.jpg",
  },
  {
    url: "https://www.nps.gov/grsa/planyourvisit/backpacking.htm",
    name: "Backpacking Campsites in the Dunes or Forest",
    description:
      "The most popular and unique backpacking option is camping in the 30-square-mile dunefield, beyond the major dune ridgeline (about 1.5 mile hike minimum over dunes). Enjoy wide open views of the starry sky or a bright moonlit night. Designated sites are also available in the trees of the foothills, or camping is available in higher forests of Great Sand Dunes National Preserve. Reserve national park backpacking permits for the dunes or foothills through recreation.gov",
    latitude: "37.77724",
    longitude: "-105.535601",
    fees: "6.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/C2DE0ACB-CE7E-2786-5C2A77662123BBC5.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_cimarron.htm",
    name: "Cimarron Campground",
    description:
      "Cimarron Campground is located 20 miles east of Montrose on U.S. Highway 50 at the site of a historic narrow gauge railroad town. All types of camping from tents to medium sized RVs can be accommodated at Cimarron. All sites are first-come first-served, and the campground rarely fills. Railroad exhibits are adjacent to the campground, and Crystal Reservoir near Morrow Point Dam is approximately 1.5 miles away. Elevation: 6895 feet",
    latitude: "38.4442894775407",
    longitude: "-107.555231428248",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/363856F7-BCF1-49A0-30D034B8BDA858C9.jpg",
  },
  {
    url: "https://www.nps.gov/dino/planyourvisit/deerlodgecampground.htm",
    name: "Deerlodge Park Campground",
    description:
      "Deerlodge Park Campground is located 53 miles (85 km) east of the Canyon Visitor Center. It is located on the Yampa River at the boat ramp at the head of Yampa Canyon. It has seven shady sites suitable for tents. The sites have tables and fire pits. There is drinking water and vault toilets available seasonally, but no showers. Deerlodge Park Campground is open year-round, but winter access can be very difficult due to snow. When the Yampa River exceeds an 18,000 cfs flow rate, the campground will flood.",
    latitude: "40.44648076279841",
    longitude: "-108.51330413436477",
    fees: "10.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/94F1598C-9D30-83AC-320C2F832718EFFE.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_dry_gulch.htm",
    name: "Dry Gulch Campground",
    description:
      "Dry Gulch Campground is located 17 miles west of Gunnison just north of U.S. Highway 50. The campground is shaded by large cottonwood trees and can accommodate tents or medium sized RVs. All sites are first-come first-served. A horse corral is available. Elevation: 7560 feet",
    latitude: "38.4841144836276",
    longitude: "-107.188437346818",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/DD70B5C0-D3E1-4319-8053ED1B4CBF32F2.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_east_elk.htm",
    name: "East Elk Creek Group Campground",
    description:
      "East Elk Creek is a group campsite that can accommodate a total of 50 people. The site is located 16.5 miles west of Gunnison just north of U.S. Highway 50. The campsites are located under large Cottonwood trees and space is available for tents or RVs. Elevation: 7535 feet",
    latitude: "38.484167",
    longitude: "-107.188333",
    fees: "53.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/18FDA1A4-9D3D-8FFF-6F6A3B208467701B.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_east_portal.htm",
    name: "East Portal Campground",
    description:
      "The East Portal Campground is located within Curecanti National Recreation Area, but is adjacent to and only accessible from Black Canyon of the Gunnison National Park, which has a $30 entrance fee. The campground is located at the bottom of the canyon, along the Gunnison River. It is a small campground shaded by box elder trees. East Portal is closed in winter, when the Bureau of Reclamation closes the East Portal Road. Elevation: 6526 feet",
    latitude: "38.527059599536",
    longitude: "-107.64948401793",
    fees: "",
    images:
      "https://www.nps.gov/common/uploads/structured_data/E48E7B0F-0591-B8DD-6FA7B4DAE28285B0.jpg",
  },
  {
    url: "https://www.nps.gov/blca/planyourvisit/camp_east_portal.htm",
    name: "East Portal Campground",
    description:
      "The East Portal Campground is located within Curecanti National Recreation Area, but is adjacent to and only accessible from Black Canyon of the Gunnison National Park, where the entrance fee is $30. The campground is located at the bottom of the canyon, along the Gunnison River. It is a small campground shaded by box elder trees. East Portal is closed in winter, when the Bureau of Reclamation closes the East Portal Road. Elevation: 6526 feet",
    latitude: "38.526896",
    longitude: "-107.649306",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/E4128BAE-FDE9-6EB7-63C4EC006B3212E4.jpg",
  },
  {
    url: "https://www.nps.gov/dino/planyourvisit/echoparkcampground.htm",
    name: "Echo Park Campground",
    description:
      "Situated along the Green River at the base of towering cliffs, the Echo Park Campground provides a unique camping experience in Dinosaur National Monument. Steamboat Rock dominates the view. Fremont petroglyphs are located on the canyon walls. Bighorn sheep and mule deer frequently roam through the campground. Unimproved hiking trails lead to the confluence of the Green and Yampa Rivers or to views of the Mitten Park Fault. The campground is located 38 miles (61 km) north of the Canyon Visitor Center.",
    latitude: "40.5208668445817",
    longitude: "-108.9932306928041",
    fees: "10.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/953AE447-D943-1459-15C72D1731CFA1B7.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_elk_creek.htm",
    name: "Elk Creek Campground",
    description:
      "Elk Creek Campground is located 16 miles west of Gunnison on U.S. Highway 50 on the shore of Blue Mesa Reservoir. We recommend making reservations prior to coming to Curecanti because cell service and first-come, first-served sites may be unavailable. Reservations may be made on recreation.gov from mid-May to mid-September. All types of camping from tents to large RVs can be accommodated. Very few sites have trees. This is the only campground with electricity (Loop D only) at Curecanti. Elevation: 7540 feet",
    latitude: "38.467420278118",
    longitude: "-107.172066844275",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/3479227B-09EA-C7AC-C7A55B78DE4CF447.jpg",
  },
  {
    url: "https://www.nps.gov/dino/planyourvisit/gatesoflodorecampground.htm",
    name: "Gates of Lodore Campground",
    description:
      "Gates of Lodore Campground is located on the Green River at the boat ramp at the head of Lodore Canyon. The campground is 106 miles (171 km) north of the Canyon Visitor Center. The campground is popular with river rafters who often stay here before launching on the Green River. There are 19 sites, some with shade. The sites have tables and fire pits. During the summer, there is running water and vault toilets, but no showers. The campsites can accommodate tents and RVs (but there are no hook-ups).",
    latitude: "40.7249234840477",
    longitude: "-108.88782437196119",
    fees: "10.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/CC4F5DBC-1DD8-B71B-0BD69126A13D2A8F.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_gateview.htm",
    name: "Gateview Campground",
    description:
      "Gateview Campground is located in a deep, narrow canyon at the extreme south end of the Lake Fork Arm of Blue Mesa Reservoir. Take CO Highway 149 7 miles west of Powderhorn, then 6 miles north on the gravel Blue Mesa Cutoff Road. All sites are first-come first-served. Gateview is best suited for tent camping. Due to the narrow gravel road, even small RVs or pop-up trailers are not recommended. Elevation: 7538 feet",
    latitude: "38.3844578817442",
    longitude: "-107.242874927003",
    fees: "FREE",
    images:
      "https://www.nps.gov/common/uploads/structured_data/E475AC99-B5B2-B720-D056C25F9E4585F8.jpg",
  },
  {
    url: "https://www.nps.gov/romo/planyourvisit/gbcg.htm",
    name: "Glacier Basin Campground",
    description:
      "A pleasant mix of Douglas fir, Lodgepole pine, Ponderosa pine, and the occasional Engelmann spruce forests the campground, offering equal amounts of sun and shade. Grasses, shrubs and seasonal wildflowers fill the open meadows.",
    latitude: "40.3298071537752",
    longitude: "-105.595629279499",
    fees: "30.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/B51D1028-1DD8-B71B-0BD70D7C96AD7D46.jpg",
  },
  {
    url: "https://www.nps.gov/dino/planyourvisit/greenrivercampground.htm",
    name: "Green River Campground",
    description:
      "The Green River Campground is located along the banks of the Green River in a grove of cottonwood trees at an elevation of 4795 (4162 feet). The highly eroded Split Mountain towers to the north of the campground. The famous dinosaur quarry, where you can see 150 million year old dinosaur bones still encased in rock is approximately 5 miles (8 km) from the campground. Nearby is the Split Mountain Boat Ramp where river rafters come off the Green River after trips through Dinosaur National Monument's canyons.",
    latitude: "40.42097747277382",
    longitude: "-109.2431756684324",
    fees: "18.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/249408C2-B8B2-FB1A-316561EC204FAF80.jpg",
  },
  {
    url: "https://www.nps.gov/hove/planyourvisit/camping.htm",
    name: "Hovenweep Campground",
    description:
      "A 31-site campground near the visitor center is open year-round, first-come, first-served. The campground is designed for tent camping, though a few sites will accommodate RVs up to 36 feet long. Groups are limited to eight people and two vehicles. Sites include tent pads, fire rings and picnic tables with shade structures; there are no hookups available. One campsite is wheelchair-accessible but is not designed for tent camping.",
    latitude: "37.3832032702754",
    longitude: "-109.070815001207",

    fees: "15.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/1EE5D6AB-1DD8-B71B-0BB2F729EF0648C3.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_lake_fork.htm",
    name: "Lake Fork Campground",
    description:
      "The campground is located 27 miles west of Gunnison on CO Highway 92 near the intersection with U.S. Highway 50 on the shore of Blue Mesa Reservoir. We recommend making reservations at recreation.gov prior to coming to Curecanti because cell service and first-come, first-served sites may be unavailable. Reservations may be made on recreation.gov from mid-May to mid-September. Tents and large RVs can be accommodated. The campground is paved except for the tent walk-in sites. Elevation: 7580 feet",
    latitude: "38.4548253084593",
    longitude: "-107.326981170259",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/37BB28AE-9C21-3E8D-CB3FBCF06D142F9B.jpg",
  },
  {
    url: "https://www.nps.gov/romo/planyourvisit/lpcg.htm",
    name: "Longs Peak Campground",
    description:
      "Longs Peak Campground is located about 20 minutes south of Estes Park on Hwy 7. This small, tents-only campground is forested and at a fairly high elevation of 9500 feet (3000 m).",
    latitude: "40.2747936427542",
    longitude: "-105.557704322312",

    fees: "30.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/B54D7D43-1DD8-B71B-0B10C6B6EAD958DB.jpg",
  },
  {
    url: "https://www.nps.gov/grsa/planyourvisit/medano-pass-road.htm",
    name: "Medano Pass Primitive Road Campsites",
    description:
      "Roadside camping is permitted at 21 campsites in Great Sand Dunes National Preserve beginning 5.2 miles from where the road begins near Piñon Flats Campground. These designated sites are free of charge and first-come, first-served. All 21 sites fill on summer weekends. Passable only in the warmer months and only with high-clearance 4-wheel drive vehicles. This road crosses areas of deep sand, traverses Medano Creek nine times, and passes through excellent habitat for bighorn sheep.",
    latitude: "37.803519",
    longitude: "-105.495654",
    fees: "FREE",
    images:
      "https://www.nps.gov/common/uploads/structured_data/C4048635-9ED3-5B41-8401EA1C428B923F.jpg",
  },
  {
    url: "https://www.nps.gov/romo/planyourvisit/mpcg.htm",
    name: "Moraine Park Campground",
    description:
      "OPEN for Summer Season through the night of October 10. OPENS for Winter Season night of October 11. Availability is on a First Come/First Served basis in Loop B only. Potable water is available. The Dump Station is Closed. Moraine Park Campground (8,160 feet) is located in Colorado's awe-inspiring Rocky Mountain National Park, near the Beaver Meadows Entrance on Highway 36. It is situated on the north side of Moraine Park, offering beautiful views of the vast park and the surrounding mountains.",
    latitude: "40.3606614965395",
    longitude: "-105.600066232312",
    fees: "30.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/B5A3E6C5-1DD8-B71B-0B6729586EA1B95F.jpg",
  },
  {
    url: "https://www.visitmesaverde.com/lodging-camping/morefield-campground/",
    name: "Morefield Campground",
    description:
      "Morefield Campground is located just four miles from the park entrance. The 267 campsites are located within a high grassy canyon filled with Gambel oak, native flowers, deer, and wild turkeys. A camp store offers registration, food, and camp supplies. Firewood, gasoline, showers, a coin-operated laundromat, and a kennel are located nearby. Each site has a picnic table, gravel tent pad, and fire pit/bbq grill. The campground is managed by park concessioner Aramark, and is open seasonally.",
    latitude: "37.3014992738134",
    longitude: "-108.417912473544",
    fees: "36.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/8A57A993-90B5-D682-E78A87661DD19666.jpg",
  },
  {
    url: "https://www.nps.gov/blca/planyourvisit/camp_northrim.htm",
    name: "North Rim Campground",
    description:
      "The North Rim campground is remote and has just 13 sites. It is first-come, first-served all season. The last 7 miles of the North Rim Road and the campground road are unpaved. Services are limited. The campground is small, but the sites are spacious and spread out among pinyon and juniper trees. This campground fills quickly during the summer, especially on weekends. Maximum combined length of RV, car and/or trailer is 22 feet.",
    latitude: "38.5851833287427",
    longitude: "-107.709427771135",
    fees: "16.00",
    images: "",
  },
  {
    url: "https://www.nps.gov/grsa/planyourvisit/pinonflatscampground.htm",
    name: "Piñon Flats Campground",
    description:
      "Piñon Flats is a National Park Service campground located one mile north of the Visitor Center, open April through October. All sites are by reservation on recreation.gov. Individual sites can be reserved up to 6 months in advance, and group sites can be reserved up to 1 year in advance.",
    latitude: "37.7449368560859",
    longitude: "-105.504703076291",
    fees: "20.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/3C7D0ECA-1DD8-B71B-0B6F80EC51149C2F.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_ponderosa.htm",
    name: "Ponderosa Campground",
    description:
      "Ponderosa Campground is located at the northwest end of the Soap Creek Arm of Blue Mesa Reservoir. From U.S. Highway 50, follow CO Highway 92 1/2 mile past Blue Mesa Dam to Soap Creek Road. Proceed 7 miles north on the gravel Soap Creek Road. Tents and medium sized RVs can be accommodated at Ponderosa. All sites are first-come first-served. Elevation: 7880 feet Note: During dry conditions, the first 7 miles of Soap Creek Road are passable to trailers and RVs. Rain can make the Soap Creek Road impassable.",
    latitude: "38.5257080480139",
    longitude: "-107.314899399111",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/390772C0-D68B-640D-0CCE8663DFF973D7.jpg",
  },
  {
    url: "https://www.nps.gov/dino/planyourvisit/rainbowparkcampground.htm",
    name: "Rainbow Park Campground",
    description:
      "Rainbow Park Campground is 28 miles (45 km) from the Quarry Visitor Center in the Utah portion of the monument. It is located on a dirt road that is impassable when wet. The campground sits beside the Green River near the Rainbow Park Boat Ramp at the head of Split Mountain Canyon. Rainbow Park Campground is open year-round, but there is no winter maintenance on the unpaved road.",
    latitude: "40.49569307278957",
    longitude: "-109.17443158661166",
    fees: "6.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/54B8CECA-DCFA-EBF4-4F09966ACD493402.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_red_creek.htm",
    name: "Red Creek Campground",
    description:
      "Red Creek Campground is located 19 miles west of Gunnison just north of U.S. Highway 50. There are 2 sites - 1 individual site and 1 group site. The individual site is first-come first-served, and the group site is reservation only. RVs longer than 22 feet are not recommended due to a lack of space to turn around. Elevation: 7542 feet",
    latitude: "38.4793732438395",
    longitude: "-107.231989784489",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/1C4299B9-0F85-DAA9-556B35A3A9380AD6.jpg",
  },
  {
    url: "https://www.nps.gov/colm/planyourvisit/saddlehorn-campground.htm",
    name: "Saddlehorn Campground",
    description:
      "Saddlehorn Campground is 4 miles from the west (Fruita) entrance. It is located in an area of pinyon pine and Utah juniper trees, and is within walking distance to the visitor center. Sites cost $22 a night. Loop A is open year round. Reservations can be made for A and B loops from mid-March through October on recreation.gov. There are flush toilets, but no hookups or dump station. Each site has a picnic table and charcoal grill, no wood fires allowed. RV length limit is 40 feet.",
    latitude: "39.10560328979322",
    longitude: "-108.73257527355514",
    fees: "22.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/3C824957-1DD8-B71B-0B481FF442AEDE95.jpg",
  },
  {
    url: "https://www.nps.gov/blca/planyourvisit/camp_southrim.htm",
    name: "South Rim Campground",
    description:
      "The South Rim Campground is located one mile from the South Rim Visitor Center. Reservations may be made on recreation.gov for mid May to mid September, and it is first-come, first served after that. Sites are fairly close together, and are partially shaded by Gambel Oak and Serviceberry bushes. Only Loop B offers 20 and 30 amp electric hookups. Water is shut off during the cold months. Special restrictions are in place in summer months to prevent deer/dog conflicts. Please see Regulations tab below.",
    latitude: "38.5438103234577",
    longitude: "-107.689424061628",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/32630260-D1B6-4FD5-8484290C7E86CA2F.jpg",
  },
  {
    url: "https://www.nps.gov/dino/planyourvisit/splitmountaincampground.htm",
    name: "Split Mountain Group Campground",
    description:
      "The Split Mountain Group Campground is located along the banks of the Green River at an elevation of 4800 feet (1463 m) near the foot of Split Mountain. The campground is 5 miles (8 km) from the dinosaur quarry, where you can see 150 million year old dinosaur bones encased in the rock. Beside the campground is the Split Mountain Boat Ramp where rafters and boaters come off the Green River. During the off season, when the Green River Campground is closed, the Split Mountain Campground is open to all campers.",
    latitude: "40.44052795574899",
    longitude: "-109.25231261010902",
    fees: "40.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/3C83E3C9-1DD8-B71B-0BD58AF5D8FE2910.jpg",
  },
  {
    url: "https://www.nps.gov/cure/planyourvisit/camp_stevens_creek.htm",
    name: "Stevens Creek Campground",
    description:
      "The campground is located 12 miles west of Gunnison on U.S. Highway 50 on the shore of Blue Mesa Reservoir. Tents to large RVs can be accommodated. The 53 sites are surrounded by sage and rabbitbrush. There is no natural shade. We recommend making reservations at recreation.gov (mid-May to mid-Sept) because cell service and first-come, first-served sites may be unavailable. Only Loop B is first-come, first-served. Elevation: 7540 feet",
    latitude: "38.4869233764467",
    longitude: "-107.09112479954",
    fees: "16.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/FBAFB453-C310-8560-0E53BC21DB6B8338.jpg",
  },
  {
    url: "https://www.nps.gov/romo/planyourvisit/tccg.htm",
    name: "Timber Creek Campground",
    description:
      "Timber Creek Campground is the only campground on the west side of the park. Located at 8900 feet (3000 m) along the Colorado River about eight miles north of the Grand Lake entrance to Rocky Mountain National Park. A mountain pine beetle infestation caused most of the trees to be removed, so there is no shade at campsites.",
    latitude: "40.3792251364525",
    longitude: "-105.852751357138",
    fees: "30.00",
    images:
      "https://www.nps.gov/common/uploads/structured_data/B60ED305-1DD8-B71B-0B6086EAB0EA124A.jpg",
  },
];

const seedCampgrounds = () => Campgrounds.bulkCreate(dbCampgroundInfo);

module.exports = seedCampgrounds;
