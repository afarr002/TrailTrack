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
      images: "https://www.nps.gov/common/uploads/structured_data/3FAA6E89-1DD8-B71B-0B170E56BD4ED00D.jpg",
      },
      {
        url: "https://www.nps.gov/grsa/planyourvisit/backpacking.htm",
        name: "Backpacking Campsites in the Dunes or Forest",
        description:
          "The most popular and unique backpacking option is camping in the 30-square-mile dunefield, beyond the major dune ridgeline (about 1.5 mile hike minimum over dunes). Enjoy wide open views of the starry sky or a bright moonlit night. Designated sites are also available in the trees of the foothills, or camping is available in higher forests of Great Sand Dunes National Preserve. Reserve national park backpacking permits for the dunes or foothills through recreation.gov",
        latitude: "37.77724",
        longitude: "-105.535601",
        fees: "6.00",
        images: "https://www.nps.gov/common/uploads/structured_data/C2DE0ACB-CE7E-2786-5C2A77662123BBC5.jpg",
      },
      {
        url: "https://www.nps.gov/cure/planyourvisit/camp_cimarron.htm",
        name: "Cimarron Campground",
        description:
          "Cimarron Campground is located 20 miles east of Montrose on U.S. Highway 50 at the site of a historic narrow gauge railroad town. All types of camping from tents to medium sized RVs can be accommodated at Cimarron. All sites are first-come first-served, and the campground rarely fills. Railroad exhibits are adjacent to the campground, and Crystal Reservoir near Morrow Point Dam is approximately 1.5 miles away. Elevation: 6895 feet",
        latitude: "38.4442894775407",
        longitude: "-107.555231428248",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/363856F7-BCF1-49A0-30D034B8BDA858C9.jpg",
      },
      {
       url: "https://www.nps.gov/dino/planyourvisit/deerlodgecampground.htm",
        name: "Deerlodge Park Campground",
        description:
          "Deerlodge Park Campground is located 53 miles (85 km) east of the Canyon Visitor Center. It is located on the Yampa River at the boat ramp at the head of Yampa Canyon. It has seven shady sites suitable for tents. The sites have tables and fire pits. There is drinking water and vault toilets available seasonally, but no showers. Deerlodge Park Campground is open year-round, but winter access can be very difficult due to snow. When the Yampa River exceeds an 18,000 cfs flow rate, the campground will flood.",
        latitude: "40.44648076279841",
        longitude: "-108.51330413436477",
        fees: "10.00",
        images: "https://www.nps.gov/common/uploads/structured_data/94F1598C-9D30-83AC-320C2F832718EFFE.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_dry_gulch.htm",
        name: "Dry Gulch Campground",
        description:
          "Dry Gulch Campground is located 17 miles west of Gunnison just north of U.S. Highway 50. The campground is shaded by large cottonwood trees and can accommodate tents or medium sized RVs. All sites are first-come first-served. A horse corral is available. Elevation: 7560 feet",
        latitude: "38.4841144836276",
        longitude: "-107.188437346818",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/DD70B5C0-D3E1-4319-8053ED1B4CBF32F2.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_east_elk.htm",
        name: "East Elk Creek Group Campground",
        description:
          "East Elk Creek is a group campsite that can accommodate a total of 50 people. The site is located 16.5 miles west of Gunnison just north of U.S. Highway 50. The campsites are located under large Cottonwood trees and space is available for tents or RVs. Elevation: 7535 feet",
        latitude: "38.484167",
        longitude: "-107.188333",
        fees: "53.00",
        images: "https://www.nps.gov/common/uploads/structured_data/18FDA1A4-9D3D-8FFF-6F6A3B208467701B.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_east_portal.htm",
        name: "East Portal Campground",
        description:
          "The East Portal Campground is located within Curecanti National Recreation Area, but is adjacent to and only accessible from Black Canyon of the Gunnison National Park, which has a $30 entrance fee. The campground is located at the bottom of the canyon, along the Gunnison River. It is a small campground shaded by box elder trees. East Portal is closed in winter, when the Bureau of Reclamation closes the East Portal Road. Elevation: 6526 feet",
        latitude: "38.527059599536",
        longitude: "-107.64948401793",     
        fees: "",
        images: "https://www.nps.gov/common/uploads/structured_data/E48E7B0F-0591-B8DD-6FA7B4DAE28285B0.jpg",
      },
      {
       url: "https://www.nps.gov/blca/planyourvisit/camp_east_portal.htm",
        name: "East Portal Campground",
        description:
          "The East Portal Campground is located within Curecanti National Recreation Area, but is adjacent to and only accessible from Black Canyon of the Gunnison National Park, where the entrance fee is $30. The campground is located at the bottom of the canyon, along the Gunnison River. It is a small campground shaded by box elder trees. East Portal is closed in winter, when the Bureau of Reclamation closes the East Portal Road. Elevation: 6526 feet",
        latitude: "38.526896",
        longitude: "-107.649306",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/E4128BAE-FDE9-6EB7-63C4EC006B3212E4.jpg",
      },
      {
       url: "https://www.nps.gov/dino/planyourvisit/echoparkcampground.htm",
        name: "Echo Park Campground",
        description:
          "Situated along the Green River at the base of towering cliffs, the Echo Park Campground provides a unique camping experience in Dinosaur National Monument. Steamboat Rock dominates the view. Fremont petroglyphs are located on the canyon walls. Bighorn sheep and mule deer frequently roam through the campground. Unimproved hiking trails lead to the confluence of the Green and Yampa Rivers or to views of the Mitten Park Fault. The campground is located 38 miles (61 km) north of the Canyon Visitor Center.",
        latitude: "40.5208668445817",
        longitude: "-108.9932306928041",
        fees: "10.00",
        images: "https://www.nps.gov/common/uploads/structured_data/953AE447-D943-1459-15C72D1731CFA1B7.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_elk_creek.htm",
        name: "Elk Creek Campground",
        description:
          "Elk Creek Campground is located 16 miles west of Gunnison on U.S. Highway 50 on the shore of Blue Mesa Reservoir. We recommend making reservations prior to coming to Curecanti because cell service and first-come, first-served sites may be unavailable. Reservations may be made on recreation.gov from mid-May to mid-September. All types of camping from tents to large RVs can be accommodated. Very few sites have trees. This is the only campground with electricity (Loop D only) at Curecanti. Elevation: 7540 feet",
        latitude: "38.467420278118",
        longitude: "-107.172066844275",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/3479227B-09EA-C7AC-C7A55B78DE4CF447.jpg",
      },
      {
       url: "https://www.nps.gov/dino/planyourvisit/gatesoflodorecampground.htm",
        name: "Gates of Lodore Campground",
        description:
          "Gates of Lodore Campground is located on the Green River at the boat ramp at the head of Lodore Canyon. The campground is 106 miles (171 km) north of the Canyon Visitor Center. The campground is popular with river rafters who often stay here before launching on the Green River. There are 19 sites, some with shade. The sites have tables and fire pits. During the summer, there is running water and vault toilets, but no showers. The campsites can accommodate tents and RVs (but there are no hook-ups).",
        latitude: "40.7249234840477",
        longitude: "-108.88782437196119",
        fees: "10.00",
        images: "https://www.nps.gov/common/uploads/structured_data/CC4F5DBC-1DD8-B71B-0BD69126A13D2A8F.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_gateview.htm",
        name: "Gateview Campground",
        description:
          "Gateview Campground is located in a deep, narrow canyon at the extreme south end of the Lake Fork Arm of Blue Mesa Reservoir. Take CO Highway 149 7 miles west of Powderhorn, then 6 miles north on the gravel Blue Mesa Cutoff Road. All sites are first-come first-served. Gateview is best suited for tent camping. Due to the narrow gravel road, even small RVs or pop-up trailers are not recommended. Elevation: 7538 feet",
        latitude: "38.3844578817442",
        longitude: "-107.242874927003",
        fees: "FREE",
        images: "https://www.nps.gov/common/uploads/structured_data/E475AC99-B5B2-B720-D056C25F9E4585F8.jpg",
      },
      {
       url: "https://www.nps.gov/romo/planyourvisit/gbcg.htm",
        name: "Glacier Basin Campground",
        description:
          "A pleasant mix of Douglas fir, Lodgepole pine, Ponderosa pine, and the occasional Engelmann spruce forests the campground, offering equal amounts of sun and shade. Grasses, shrubs and seasonal wildflowers fill the open meadows.",
        latitude: "40.3298071537752",
        longitude: "-105.595629279499",
        fees: "30.00",
        images: "https://www.nps.gov/common/uploads/structured_data/B51D1028-1DD8-B71B-0BD70D7C96AD7D46.jpg",
      },
      {
       url: "https://www.nps.gov/dino/planyourvisit/greenrivercampground.htm",
        name: "Green River Campground",
        description:
          "The Green River Campground is located along the banks of the Green River in a grove of cottonwood trees at an elevation of 4795 (4162 feet). The highly eroded Split Mountain towers to the north of the campground. The famous dinosaur quarry, where you can see 150 million year old dinosaur bones still encased in rock is approximately 5 miles (8 km) from the campground. Nearby is the Split Mountain Boat Ramp where river rafters come off the Green River after trips through Dinosaur National Monument's canyons.",
        latitude: "40.42097747277382",
        longitude: "-109.2431756684324",
        fees: "18.00",
        images: "https://www.nps.gov/common/uploads/structured_data/249408C2-B8B2-FB1A-316561EC204FAF80.jpg",
      },
      {
       url: "https://www.nps.gov/hove/planyourvisit/camping.htm",
        name: "Hovenweep Campground",
        description:
          "A 31-site campground near the visitor center is open year-round, first-come, first-served. The campground is designed for tent camping, though a few sites will accommodate RVs up to 36 feet long. Groups are limited to eight people and two vehicles. Sites include tent pads, fire rings and picnic tables with shade structures; there are no hookups available. One campsite is wheelchair-accessible but is not designed for tent camping.",
        latitude: "37.3832032702754",
        longitude: "-109.070815001207",
        
        fees: "15.00",
        images: "https://www.nps.gov/common/uploads/structured_data/1EE5D6AB-1DD8-B71B-0BB2F729EF0648C3.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_lake_fork.htm",
        name: "Lake Fork Campground",
        description:
          "The campground is located 27 miles west of Gunnison on CO Highway 92 near the intersection with U.S. Highway 50 on the shore of Blue Mesa Reservoir. We recommend making reservations at recreation.gov prior to coming to Curecanti because cell service and first-come, first-served sites may be unavailable. Reservations may be made on recreation.gov from mid-May to mid-September. Tents and large RVs can be accommodated. The campground is paved except for the tent walk-in sites. Elevation: 7580 feet",
        latitude: "38.4548253084593",
        longitude: "-107.326981170259",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/37BB28AE-9C21-3E8D-CB3FBCF06D142F9B.jpg",
      },
      {
       url: "https://www.nps.gov/romo/planyourvisit/lpcg.htm",
        name: "Longs Peak Campground",
        description:
          "Longs Peak Campground is located about 20 minutes south of Estes Park on Hwy 7. This small, tents-only campground is forested and at a fairly high elevation of 9500 feet (3000 m).",
        latitude: "40.2747936427542",
        longitude: "-105.557704322312",
        
        fees: "30.00",
        images: "https://www.nps.gov/common/uploads/structured_data/B54D7D43-1DD8-B71B-0B10C6B6EAD958DB.jpg",
      },
      {
       url: "https://www.nps.gov/grsa/planyourvisit/medano-pass-road.htm",
        name: "Medano Pass Primitive Road Campsites",
        description:
          "Roadside camping is permitted at 21 campsites in Great Sand Dunes National Preserve beginning 5.2 miles from where the road begins near Piñon Flats Campground. These designated sites are free of charge and first-come, first-served. All 21 sites fill on summer weekends. Passable only in the warmer months and only with high-clearance 4-wheel drive vehicles. This road crosses areas of deep sand, traverses Medano Creek nine times, and passes through excellent habitat for bighorn sheep.",
        latitude: "37.803519",
        longitude: "-105.495654",
        fees: "FREE",
        images: "https://www.nps.gov/common/uploads/structured_data/C4048635-9ED3-5B41-8401EA1C428B923F.jpg"
      },
      {
       url: "https://www.nps.gov/romo/planyourvisit/mpcg.htm",
        name: "Moraine Park Campground",
        description:
          "OPEN for Summer Season through the night of October 10. OPENS for Winter Season night of October 11. Availability is on a First Come/First Served basis in Loop B only. Potable water is available. The Dump Station is Closed. Moraine Park Campground (8,160 feet) is located in Colorado's awe-inspiring Rocky Mountain National Park, near the Beaver Meadows Entrance on Highway 36. It is situated on the north side of Moraine Park, offering beautiful views of the vast park and the surrounding mountains.",
        latitude: "40.3606614965395",
        longitude: "-105.600066232312",
        fees: "30.00",
        images: "https://www.nps.gov/common/uploads/structured_data/B5A3E6C5-1DD8-B71B-0B6729586EA1B95F.jpg"
      },
      {
       url: "https://www.visitmesaverde.com/lodging-camping/morefield-campground/",
        name: "Morefield Campground",
        description:
          "Morefield Campground is located just four miles from the park entrance. The 267 campsites are located within a high grassy canyon filled with Gambel oak, native flowers, deer, and wild turkeys. A camp store offers registration, food, and camp supplies. Firewood, gasoline, showers, a coin-operated laundromat, and a kennel are located nearby. Each site has a picnic table, gravel tent pad, and fire pit/bbq grill. The campground is managed by park concessioner Aramark, and is open seasonally.",
        latitude: "37.3014992738134",
        longitude: "-108.417912473544",
        fees: "36.00",
        images: "https://www.nps.gov/common/uploads/structured_data/8A57A993-90B5-D682-E78A87661DD19666.jpg",
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
        images: "https://www.nps.gov/common/uploads/structured_data/3C7D0ECA-1DD8-B71B-0B6F80EC51149C2F.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_ponderosa.htm",
        name: "Ponderosa Campground",
        description:
          "Ponderosa Campground is located at the northwest end of the Soap Creek Arm of Blue Mesa Reservoir. From U.S. Highway 50, follow CO Highway 92 1/2 mile past Blue Mesa Dam to Soap Creek Road. Proceed 7 miles north on the gravel Soap Creek Road. Tents and medium sized RVs can be accommodated at Ponderosa. All sites are first-come first-served. Elevation: 7880 feet Note: During dry conditions, the first 7 miles of Soap Creek Road are passable to trailers and RVs. Rain can make the Soap Creek Road impassable.",
        latitude: "38.5257080480139",
        longitude: "-107.314899399111",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/390772C0-D68B-640D-0CCE8663DFF973D7.jpg",
      },
      {
       url: "https://www.nps.gov/dino/planyourvisit/rainbowparkcampground.htm",
        name: "Rainbow Park Campground",
        description:
          "Rainbow Park Campground is 28 miles (45 km) from the Quarry Visitor Center in the Utah portion of the monument. It is located on a dirt road that is impassable when wet. The campground sits beside the Green River near the Rainbow Park Boat Ramp at the head of Split Mountain Canyon. Rainbow Park Campground is open year-round, but there is no winter maintenance on the unpaved road.",
        latitude: "40.49569307278957",
        longitude: "-109.17443158661166",
        fees: "6.00",
        images: "https://www.nps.gov/common/uploads/structured_data/54B8CECA-DCFA-EBF4-4F09966ACD493402.jpg",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_red_creek.htm",
        name: "Red Creek Campground",
        description:
          "Red Creek Campground is located 19 miles west of Gunnison just north of U.S. Highway 50. There are 2 sites - 1 individual site and 1 group site. The individual site is first-come first-served, and the group site is reservation only. RVs longer than 22 feet are not recommended due to a lack of space to turn around. Elevation: 7542 feet",
        latitude: "38.4793732438395",
        longitude: "-107.231989784489",
        fees: "16.00",
        images: "https://www.nps.gov/common/uploads/structured_data/1C4299B9-0F85-DAA9-556B35A3A9380AD6.jpg",
      },
      {
       url: "https://www.nps.gov/colm/planyourvisit/saddlehorn-campground.htm",
        name: "Saddlehorn Campground",
        description:
          "Saddlehorn Campground is 4 miles from the west (Fruita) entrance. It is located in an area of pinyon pine and Utah juniper trees, and is within walking distance to the visitor center. Sites cost $22 a night. Loop A is open year round. Reservations can be made for A and B loops from mid-March through October on recreation.gov. There are flush toilets, but no hookups or dump station. Each site has a picnic table and charcoal grill, no wood fires allowed. RV length limit is 40 feet.",
        latitude: "39.10560328979322",
        longitude: "-108.73257527355514",
        fees: "22.00",
        images: "https://www.nps.gov/common/uploads/structured_data/3C824957-1DD8-B71B-0B481FF442AEDE95.jpg",
      },
      {
       url: "https://www.nps.gov/blca/planyourvisit/camp_southrim.htm",
        name: "South Rim Campground",
        description:
          "The South Rim Campground is located one mile from the South Rim Visitor Center. Reservations may be made on recreation.gov for mid May to mid September, and it is first-come, first served after that. Sites are fairly close together, and are partially shaded by Gambel Oak and Serviceberry bushes. Only Loop B offers 20 and 30 amp electric hookups. Water is shut off during the cold months. Special restrictions are in place in summer months to prevent deer/dog conflicts. Please see Regulations tab below.",
        latitude: "38.5438103234577",
        longitude: "-107.689424061628",
        reservationInfo:
          "In the summer, loops A and B may be reserved through recreation.gov. In the Spring, Fall, and Winter, all sites are first-come, first-served. Loop C is always first-come, first-served.",
        reservationUrl: "https://www.recreation.gov/camping/campgrounds/234052",
        regulationsurl: "",
        regulationsOverview:
          "-Camp only in designated sites. -Maximum occupancy: 8 people, 2 vehicles per campsite. -Check In/ Out Time: 1 pm -Pets must be leashed at all times. -Properly extinguish fires. Do not leave fires unattended. -Use bear boxes for any scented items, food, etc. -Stay is limited to 14 consecutive nights for a total of 30 days within a calendar year. Dog Restrictions From approximately June 1 to August 10, dogs are allowed in campsites, but may not be taken on walks (even on leash), and may not be carried around the South Rim Campground or on the Rim Rock Trail due to potentially aggressive deer protecting their fawns.",{
          phoneNumbers: [
            {
              phoneNumber: "(970) 641-2337",
              description: "",
              extension: "205",
              type: "Voice",
            },
          ],
          emailAddresses: [
            {
              description: "",
              emailAddress: "cure_info@nps.gov",
            },
          ],
        },
        fees: "16.00",
            description:
              "The nightly camping fee for Loop A at the South Rim is $16.00. There is an $3 fee for reservations. Group size limit is eight people and two vehicles. When water is turned off in the campground (spring and fall), camping fees are not charged.",
            title: "Loop A Standard Camping Fee",
          },
          {
            cost: "8.00",
            description:
              "Discounted camping rate for valid Senior or Access passes. The nightly camping fee with valid passes is $8.00. There is an $3 fee for reservations. Group size limit is eight people and two vehicles. When water is turned off in the campground (spring and fall), camping fees are not charged.",
            title: "Loop A Senior / Access Camping Fee",
          },
          {
            cost: "22.00",
            description:
              "The nightly camping fee for Loop B (RV sites with electricity) at the South Rim is $22.00. There is an $3 fee for reservations.  Group size limit is eight people and two vehicles. When water is turned off in the campground (spring and fall), camping fees are not charged.",
            title: "Loop B Standard Camping Fee",
          },
          {
            cost: "14.00",
            description:
              "Discounted camping rate for valid Senior or Access passes. The nightly camping fee with valid passes is $14.00. There is an $3 fee for reservations.  Group size limit is eight people and two vehicles. When water and electricity are turned off in the campground (spring and fall), camping fees are not charged.",
            title: "Loop B Senior / Access Camping Fee",
          },
          {
            cost: "16.00",
            description:
              "The nightly camping fee for Loop C at the South Rim is $16.00. Group size limit is eight people and two vehicles. When water is turned off in the campground (spring and fall), camping fees are not charged.",
            title: "Loop C Standard Camping Fee",
          },
          {
            cost: "8.00",
            description:
              "Discounted camping rate for valid Senior or Access passes. The nightly camping fee with valid passes is $8.00. Group size limit is eight people and two vehicles. When water is turned off in the campground (spring and fall), camping fees are not charged.",
            title: "Loop C Senior / Access Camping Fee",
          },
        ],
        directionsOverview:
          "From Montrose, take Hwy 50 east for 6 miles, then turn left onto Hwy 347 and follow it for 6 miles. Hwy 347 turns into the South Rim Drive of Black Canyon of the Gunnison National Park. About 1 mile past the park’s entrance station, turn right onto the South Rim Campground road.",
        directionsUrl: "",
        operatingHours: [
          {
            exceptions: [],
            description:
              "Campground is open 24 hours a day, all year. Check out time is 1 pm.. Water and electricity (B Loop only) is typically available mid-May to mid-September (after the last frost of spring and the first frost of fall).  In the winter, only Loop A is open.",
            standardHours: {
              wednesday: "All Day",
              monday: "All Day",
              thursday: "All Day",
              sunday: "All Day",
              tuesday: "All Day",
              friday: "All Day",
              saturday: "All Day",
            },
            name: "South Rim Campground - Reservable",
          },
        ],
        addresses: [
          {
            postalCode: "81401",
            city: "Montrose",
            stateCode: "CO",
            line1: "South Rim, Black Canyon of the Gunnison National Park",
            type: "Physical",
            line3: "",
            line2: "",
          },
          {
            postalCode: "81230",
            city: "Gunnison",
            stateCode: "CO",
            line1: "102 Elk Creek",
            type: "Mailing",
            line3: "",
            line2: "",
          },
        ],
        images: [
          {
            credit: "NPS photo",
            crops: [],
            title: "Typical Tent Site",
            altText:
              "picnic table and fire pit in a grassy clearing among the brush",
            caption:
              "Loop A and C are mainly intended for tents. This is what a typical tent site looks like.",
            url: "https://www.nps.gov/common/uploads/structured_data/32630260-D1B6-4FD5-8484290C7E86CA2F.jpg",
          },
        ],
        weatherOverview:
          "This Campground is on the rim of Black Canyon, at 8,000 feet in elevation. Weather can rapidly change from warm and sunny to cold and rainy or snowy. Be prepared for 3-season camping, even in summer. The campground is often windy.",
        numberOfSitesReservable: "56",
        numberOfSitesFirstComeFirstServe: "32",
        campsites: {
          totalSites: "88",
          group: "0",
          horse: "0",
          tentOnly: "0",
          electricalHookups: "23",
          rvOnly: "0",
          walkBoatTo: "0",
          other: "0",
        },
        accessibility: {
          wheelchairAccess:
            "There is sidewalk access from paved roads to the pit toilets.",
          internetInfo: "",
          cellPhoneInfo:
            "Cell service is unreliable at best, and often non-existent. Do not expect cell service within the park.",
          fireStovePolicy:
            "Fires are permitted only in the designated fire rings, and only as long as there are no burn bans or dangerous fire weather.",
          rvAllowed: "1",
          rvInfo:
            "RVs and trailers are allowed. Loop B has sites large enough for RVs and trailers (combined length) up to 55 feet. Most sites in Loop B average about 30 feet. Sites in Loops A and C can typically fit a 23-foot RV or car/ trailer combined length.",
          rvMaxLength: "55",
          additionalInfo: "",
          trailerMaxLength: "55",
          adaInfo:
            "There are two designated ADA accessible campsites on the South Rim: A21 and B21. Both are reservable, in season. The sites are level concrete with easy access to pit toilets. The campground road / loop roads are paved. The campground amphitheater is not currently ADA accessible.",
          trailerAllowed: "1",
          accessRoads: ["Paved Roads - All vehicles OK"],
          classifications: ["Limited Development Campground"],
        },
        lastIndexedDate: "",
      },
      {
       url: "https://www.nps.gov/dino/planyourvisit/splitmountaincampground.htm",
        name: "Split Mountain Group Campground",
        description:
          "The Split Mountain Group Campground is located along the banks of the Green River at an elevation of 4800 feet (1463 m) near the foot of Split Mountain. The campground is 5 miles (8 km) from the dinosaur quarry, where you can see 150 million year old dinosaur bones encased in the rock. Beside the campground is the Split Mountain Boat Ramp where rafters and boaters come off the Green River. During the off season, when the Green River Campground is closed, the Split Mountain Campground is open to all campers.",
        latitude: "40.44052795574899",
        longitude: "-109.25231261010902",",
        reservationInfo:
          "Reservations for this campground are available during peak season, approximately mid-April through early October. Reservations can be made below, or by calling Recreation.gov at 1-877-444-6777. Group sites can be reserved no more than 12 months in advance. The latest you can make a reservation is 24-hours in advance. When Green River Campground is closed in the slow season, Split Mountain campsites are open to individuals and groups on a first-come, first-served basis.",
        reservationUrl: "https://www.recreation.gov/camping/campgrounds/234751",
        regulationsurl:
          "https://www.nps.gov/dino/planyourvisit/regulations.htm",
        regulationsOverview:
          "All vehicles and trailers must stay on the pavement. RVs using stabilizers are required to use stabilizer pads to avoid damaging pavement. Campfires must be built inside the fire grate provided. Never leave a campfire unattended. Collecting wood from the ground or breaking it off trees or shrubs is prohibited. Firewood is available for purchase near the pay station. Digging, leveling and other site modifications are prohibited. Pets are allowed in campsites and within 100 feet of roads and parking lots. They must be kept on a maxium 6 foot leash or physically restrained at all times. Pets may not be left unattended and/or tied to an object. The use of any type of fireworks is not allowed. Properly store all food in a hard-side vehicle when not being used. Dispose of all garbage in the dumpsters provided. Quiet hours from 10:00 pm to 6:00 am. Generators can be operated between 7:00 am and 9:00 pm. Stays are limited to 14 consecutive days. Sites may not be left unattended for more than 24 hours.",
        contacts: {
          phoneNumbers: [
            {
              phoneNumber: "435-781-7700",
              description: "",
              extension: "",
              type: "Voice",
            },
          ],
          emailAddresses: [
            {
              description: "Main Monument Email",
              emailAddress: "dino_information@nps.gov",
            },
          ],
        },
        fees: "40.00",
            description:
              "Fee per site, per night for Split Mountain Group Campground. No discount for Senior or Access Passes.",
            title: "Group Site Fee - Main Season",
          },
          {
            cost: "6.00",
            description:
              "Camping fee during the winter when water is not available and the Green River Campground is closed",
            title: "Split Mountain Camping Fee - Off-season",
          },
        ],
        directionsOverview:
          "The Split Mountain Campground is located about 5 miles (8 km) east of the Quarry Visitor Center in Jensen, Utah, along the Cub Creek Road.",
        directionsUrl: "",
        operatingHours: [
          {
            exceptions: [],
            description:
              "The Split Mountain Campground is open all year, all day. Water is only available seasonally.",
            standardHours: {
              wednesday: "All Day",
              monday: "All Day",
              thursday: "All Day",
              sunday: "All Day",
              tuesday: "All Day",
              friday: "All Day",
              saturday: "All Day",
            },
            name: "Split Mountain Group Campground",
          },
        ],
        addresses: [
          {
            postalCode: "84035",
            city: "Jensen",
            stateCode: "UT",
            line1: "PO Box 128",
            type: "Mailing",
            line3: "",
            line2: "",
          },
        ],
        images: [
          {
            credit: "NPS Photo",
            crops: [],
            title: "View of the Split Mountain Group Campground",
            altText: "view of a campground along a river",
            caption:
              "Located along the Green River at the foot of Split Mountain, the Split Mountain Group Campground provides a stunning setting for camping.",
            url: "https://www.nps.gov/common/uploads/structured_data/3C83E3C9-1DD8-B71B-0BD58AF5D8FE2910.jpg",
          },
          {
            credit: "NPS",
            crops: [],
            title: "Split Mountain Campground Map",
            altText:
              "Map showing the layout of the Split Mountain Campground and area features.",
            caption: "Map for the Split Mountain Campground",
            url: "https://www.nps.gov/common/uploads/structured_data/682A9C6C-F4A9-1CAD-385A9EC3461BFBFA.jpg",
          },
        ],
        weatherOverview:
          "Dinosaur's climate is semiarid with temperatures averaging between 0°F to 30°F (-18°C to -1°C) in January and 50°F to 100°F (10°C to 38°C) in July. Elevations within the park vary between 4,700 and 9,000 feet (1,433 and 2,743 m). Winter snow makes roads at higher elevations impassable while only light to moderate snow is found at lower elevations. Summer thunderstorms often cause heavy downpours and localized flooding, but may fail to dampen parched soils less than a mile away.",
        numberOfSitesReservable: "4",
        numberOfSitesFirstComeFirstServe: "0",
        campsites: {
          totalSites: "4",
          group: "4",
          horse: "0",
          tentOnly: "0",
          electricalHookups: "0",
          rvOnly: "0",
          walkBoatTo: "0",
          other: "0",
        },
        accessibility: {
          wheelchairAccess:
            "Wheelchair users may require some assistance moving around the campsites.",
          internetInfo: "",
          cellPhoneInfo: "",
          fireStovePolicy:
            "Fires are permitted within the provided fire rings. Seasonal fire restrictions may be in effect. Check the information kiosk at the campground.",
          rvAllowed: "1",
          rvInfo:
            "Each site can hold up to one RV or trailer. There are no hookups, dump stations, or facilities for filling an RV water tank anywhere in Dinosaur National Monument.",
          rvMaxLength: "0",
          additionalInfo: "",
          trailerMaxLength: "0",
          adaInfo:
            "The campground is mostly flat. Wheelchair users may require some assistance moving around the sites.",
          trailerAllowed: "1",
          accessRoads: ["Paved Roads - All vehicles OK"],
          classifications: ["Developed Campground"],
        },
        lastIndexedDate: "",
      },
      {
       url: "https://www.nps.gov/cure/planyourvisit/camp_stevens_creek.htm",
        name: "Stevens Creek Campground",
        description:
          "The campground is located 12 miles west of Gunnison on U.S. Highway 50 on the shore of Blue Mesa Reservoir. Tents to large RVs can be accommodated. The 53 sites are surrounded by sage and rabbitbrush. There is no natural shade. We recommend making reservations at recreation.gov (mid-May to mid-Sept) because cell service and first-come, first-served sites may be unavailable. Only Loop B is first-come, first-served. Elevation: 7540 feet",
        latitude: "38.4869233764467",
        longitude: "-107.09112479954",     
        reservationInfo:
          "We recommend making reservations at recreation.gov prior to coming to Curecanti because cell service and first-come, first-served sites may be unavailable. Loops A & C are reservable for dates between May 26, 2021 and September 8, 2021. Individual sites are released on a 6-month rolling basis. Reservations must be made at least 1 day in advance on recreation.gov. $16.00 per night, plus $3.00 for reservation ($8.00 per night with Interagency Senior/Access Pass, plus $3.00 per night for reservation) Loop B is first-come, first served. $16.00 per night ($8.00 per night with Interagency Senior/Access Pass)",
        reservationUrl:
          "www.https://www.recreation.gov/camping/campgrounds/234055",
        regulationsurl:
          "https://www.nps.gov/cure/planyourvisit/campgroundregulations.htm",{
          phoneNumbers: [],
          emailAddresses: [
            {
              description: "",
              emailAddress: "cure_info@nps.gov",
            },
          ],
        },
        fees: "16.00",
            description:
              "Maximum of 8 people per site. No more than two primary recreational camping units per site, (car, pickup, motorhome, van, pop-up trailer, in which people are sleeping). In addition, if space allows, the following may also be at the site: tent, boat trailer, vehicles not used for sleeping. \n\nLoop C is limited to 30 consecutive days per visit.",
            title: "Loop C",
          },
          {
            cost: "16.00",
            description:
              "Maximum of 8 people per site. No more than two primary recreational camping units per site, (car, pickup, motorhome, van, pop-up trailer, in which people are sleeping). In addition, if space allows, the following may also be at the site: tent, boat trailer, vehicles not used for sleeping.\n\nLoop A is limited to a visit of 14 consecutive nights during a 30\nday period. Loop B is limited to 30 consecutive days per visit.",
            title: "Loops A & B",
          },
        ],
        directionsOverview:
          "From Gunnison, travel 12 miles west along U.S. Highway 50. The campground is on the south side of the highway.",
        directionsUrl: "",
        operatingHours: [
          {
            exceptions: [],
            description:
              "Open 24 hours a day, 7 days a week from approximately mid-May to late-September.",
            standardHours: {
              wednesday: "Closed",
              monday: "Closed",
              thursday: "Closed",
              sunday: "Closed",
              tuesday: "Closed",
              friday: "Closed",
              saturday: "Closed",
            },
            name: "Stevens Creek Campground",
          },
        ],
        addresses: [],
        images: [
          {
            credit: "NPS Photo",
            crops: [],
            title: "Loop A",
            altText: "Loop A",
            caption:
              "This campground is next to Blue Mesa Reservoir and has very little shade.",
            url: "https://www.nps.gov/common/uploads/structured_data/FBAFB453-C310-8560-0E53BC21DB6B8338.jpg",
          },
        ],
        weatherOverview:
          "Weather can vary greatly throughout the day. Summer daytime temperatures range between 50 to 90F (10 to 32C), nights 40 to 60F (4 to 15C). Precipitation is minimal, but afternoon thunderstorms and strong winds are common during the summer.",
        numberOfSitesReservable: "38",
        numberOfSitesFirstComeFirstServe: "16",
        campsites: {
          totalSites: "53",
          group: "0",
          horse: "0",
          tentOnly: "0",
          electricalHookups: "0",
          rvOnly: "0",
          walkBoatTo: "0",
          other: "0",
        },
        accessibility: {
          wheelchairAccess: "Wheelchair accessible sites are available.",
          internetInfo: "",
          cellPhoneInfo: "Cell phone service is not reliable.",
          fireStovePolicy: "Fire grates are available. Stoves are permitted.",
          rvAllowed: "1",
          rvInfo: "This campground can accommodate small to large RVs.",
          rvMaxLength: "55",
          additionalInfo: "Fish cleaning station available in summer.",
          trailerMaxLength: "0",
          adaInfo: "This campground is paved.",
          trailerAllowed: "1",
          accessRoads: ["Paved Roads - All vehicles OK"],
          classifications: ["Developed Campground"],
        },
        lastIndexedDate: "",
      },
      {
       url: "https://www.nps.gov/romo/planyourvisit/tccg.htm",
        name: "Timber Creek Campground",
        description:
          "Timber Creek Campground is the only campground on the west side of the park. Located at 8900 feet (3000 m) along the Colorado River about eight miles north of the Grand Lake entrance to Rocky Mountain National Park. A mountain pine beetle infestation caused most of the trees to be removed, so there is no shade at campsites.",
        latitude: "40.3792251364525",
        longitude: "-105.852751357138",
        reservationInfo: "First come, first-served only.",
        reservationUrl: "",
        regulationsurl: "",{
          phoneNumbers: [
            {
              phoneNumber: "9705861206",
              description: "",
              extension: "",
              type: "Voice",
            },
          ],
          emailAddresses: [
            {
              description: "",
              emailAddress: "romo_information@nps.gov",
            },
          ],
        },
        fees: "30.00",
            description: "Per site per night",
            title: "Camping Fee",
          },
        ],
        directionsOverview:
          "From Grand Lake, head north on US Hwy 34 / Trail Ridge Road. After 8 miles, follow signs on your left to Timber Creek Campground.",
        directionsUrl: "",
        operatingHours: [
          {
            exceptions: [
              {
                exceptionHours: {
                  wednesday: "Closed",
                  monday: "Closed",
                  thursday: "Closed",
                  sunday: "Closed",
                  tuesday: "Closed",
                  friday: "Closed",
                  saturday: "Closed",
                },
                startDate: "2022-01-01",
                name: "Winter (pre-summer)",
                endDate: "2022-05-20",
              },
              {
                exceptionHours: {
                  wednesday: "Closed",
                  monday: "Closed",
                  thursday: "Closed",
                  sunday: "Closed",
                  tuesday: "Closed",
                  friday: "Closed",
                  saturday: "Closed",
                },
                startDate: "2022-05-20",
                name: "Closed for the season",
                endDate: "2022-09-29",
              },
              {
                exceptionHours: {
                  wednesday: "Closed",
                  monday: "Closed",
                  thursday: "Closed",
                  sunday: "Closed",
                  tuesday: "Closed",
                  friday: "Closed",
                  saturday: "Closed",
                },
                startDate: "2022-09-29",
                name: "Winter (post-summer)",
                endDate: "2022-12-31",
              },
            ],
            description:
              "Open only in summer and early fall. See Exceptions for opening and closing dates.",
            standardHours: {
              wednesday: "All Day",
              monday: "All Day",
              thursday: "All Day",
              sunday: "All Day",
              tuesday: "All Day",
              friday: "All Day",
              saturday: "All Day",
            },
            name: "Timber Creek Campground",
          },
        ],
        addresses: [
          {
            postalCode: "80447",
            city: "Grand Lake",
            stateCode: "CO",
            line1: "US Hwy 34",
            type: "Physical",
            line3: "",
            line2: "",
          },
          {
            postalCode: "80447",
            city: "Grand Lake",
            stateCode: "CO",
            line1: "16018 US Hwy 34",
            type: "Mailing",
            line3: "",
            line2: "",
          },
        ],
        images: [
          {
            credit: "NPS Photo",
            crops: [],
            title: "Timber Creek Campground Overview",
            altText: "A large campground with mountains behind",
            caption: "Timber Creek Campground.",
            url: "https://www.nps.gov/common/uploads/structured_data/B60ED305-1DD8-B71B-0B6086EAB0EA124A.jpg",
          },
          {
            credit: "NPS Photo",
            crops: [],
            title: "Timber Creek Campground Sites",
            altText: "Bare campsites with mountain behind",
            caption: "Example sites at Timber Creek.",
            url: "https://www.nps.gov/common/uploads/structured_data/B61B8B7B-1DD8-B71B-0B1AA0236468D921.jpg",
          },
          {
            credit: "NPS Photo",
            crops: [],
            title: "Timber Creek Campground Water",
            altText: "A stream flows with a meadow with mountains behind",
            caption: "Timber Creek has great access to the Colorado River.",
            url: "https://www.nps.gov/common/uploads/structured_data/B623B6AB-1DD8-B71B-0BF2E6ACFF4B633A.jpg",
          },
        ],
        weatherOverview:
          "Average High and Low Temperatures (Fahrenheit) May: 59 / 27 June: 70 / 33 July: 75 / 37 August: 74 / 36 September: 67 / 29 October: 57 / 22",
        numberOfSitesReservable: "0",
        numberOfSitesFirstComeFirstServe: "98",
        campsites: {
          totalSites: "98",
          group: "0",
          horse: "0",
          tentOnly: "30",
          electricalHookups: "0",
          rvOnly: "0",
          walkBoatTo: "0",
          other: "0",
        },
        accessibility: {
          wheelchairAccess:
            "Four ADA sites are available for those customers with a disability or otherwise limited mobility who would benefit from the accessibility design features.",
          internetInfo: "",
          cellPhoneInfo: "",
          fireStovePolicy:
            "Fires are only allowed in metal fire grates. Never leave fires or coals unattended. Fires must be completely extinguished before leaving campsite or going to bed. Gathering firewood or fire-starting materials is prohibited.",
          rvAllowed: "1",
          rvInfo:
            "Generators may only be run between 7:30 - 10 am and 4 - 8:30 pm. A dump station is available seasonally.",
          rvMaxLength: "30",
          additionalInfo: "",
          trailerMaxLength: "30",
          adaInfo:
            "Four ADA sites are available for those customers with a disability or otherwise limited mobility who would benefit from the accessibility design features.",
          trailerAllowed: "1",
          accessRoads: ["Paved Roads - All vehicles OK"],
          classifications: ["Developed Campground"],
        },
        lastIndexedDate: "",
      },
    ],
  },
];

const seedCampgrounds = () => Campgrounds.bulkCreate(campgroundDbInfo);

module.exports = seedCampgrounds;
