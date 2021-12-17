const { Books } = require("../models/Books");

const bookSeedData = [
  {
    title: "Haunting of Molly Hartley, The",
    author: "Waverley Broschek",
    description:
      "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
    book_id: 1,
  },
  {
    title: "Busting",
    author: "Rhona Turone",
    description:
      "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
    book_id: 2,
  },
  {
    title: "Gold of Naples, The (L'oro di Napoli)",
    author: "Fiann Silversmid",
    description:
      "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
    book_id: 3,
  },
  {
    title: "Earth Trembles, The (Terra trema: Episodio del mare, La)",
    author: "Pembroke Lafoy",
    description:
      "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
    book_id: 4,
  },
  {
    title: "Dukes, The",
    author: "Trudie Dingwall",
    description:
      "varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
    book_id: 5,
  },
  {
    title: "This Girl's Life",
    author: "Gilles Barbrick",
    description:
      "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
    book_id: 6,
  },
  {
    title: "X: The Unknown",
    author: "Egon Bevington",
    description:
      "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero",
    book_id: 7,
  },
  {
    title: "The Christmas Wish",
    author: "Adela Wharton",
    description: "et tempus semper est quam pharetra magna ac consequat metus",
    book_id: 8,
  },
  {
    title: "Ringers: Lord of the Fans",
    author: "Joanie Cutchee",
    description:
      "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
    book_id: 9,
  },
  {
    title: "The Feminine Touch",
    author: "Axe Broscombe",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
    book_id: 10,
  },
  {
    title: "Tropic Thunder",
    author: "Maryl Gypson",
    description:
      "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",
    book_id: 11,
  },
  {
    title: "Cria! (Cría cuervos)",
    author: "Eachelle Stirman",
    description:
      "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
    book_id: 12,
  },
  {
    title: "Terumae romae (Thermae Romae)",
    author: "Sascha Bellsham",
    description:
      "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
    book_id: 13,
  },
  {
    title: "Double Happiness",
    author: "Carry Truin",
    description:
      "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis",
    book_id: 14,
  },
  {
    title: "Wyrmwood",
    author: "Suki Rowcliffe",
    description:
      "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis",
    book_id: 15,
  },
  {
    title: "Silmido",
    author: "Cicily Proppers",
    description:
      "magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel",
    book_id: 16,
  },
  {
    title: "Red Dust",
    author: "Waiter Huddles",
    description:
      "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
    book_id: 17,
  },
  {
    title: "Autumn Tale, An (Conte d'automne)",
    author: "Gabriell Abrahams",
    description:
      "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
    book_id: 18,
  },
  {
    title: "Twilight Saga: Breaking Dawn - Part 1, The",
    author: "Brianna Whitwam",
    description:
      "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem",
    book_id: 19,
  },
  {
    title: "Midnight in the Garden of Good and Evil",
    author: "Danny Gay",
    description:
      "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa",
    book_id: 20,
  },
  {
    title: "Minority Report",
    author: "Willamina Stoker",
    description:
      "vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
    book_id: 21,
  },
  {
    title: "Charly",
    author: "Freddie Blowick",
    description:
      "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
    book_id: 22,
  },
  {
    title: "Enchanted",
    author: "Jeffrey Metterick",
    description:
      "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
    book_id: 23,
  },
  {
    title: "The Finzi Detective Agency",
    author: "Sibylle Aubri",
    description:
      "in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt",
    book_id: 24,
  },
  {
    title: "Kill Switch",
    author: "Ula Aimson",
    description:
      "cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
    book_id: 25,
  },
  {
    title: "Very Social Secretary, A",
    author: "Saloma Fidge",
    description:
      "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
    book_id: 26,
  },
  {
    title: "Yes Men, The",
    author: "Karry Emblen",
    description:
      "amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
    book_id: 27,
  },
  {
    title: "The Coven",
    author: "Meryl Tupper",
    description:
      "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra",
    book_id: 28,
  },
  {
    title: "Love at Large",
    author: "Derby Petre",
    description:
      "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate",
    book_id: 29,
  },
  {
    title: "Citadel",
    author: "Lance Waight",
    description:
      "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
    book_id: 30,
  },
];

const seedBooks = () => Books.bulkCreate(bookSeedData);

module.exports = seedBooks;
