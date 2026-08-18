export const DOWNTOWN_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "food-drink", label: "Food & Drink" },
  { key: "shopping", label: "Antiques & Shopping" },
  { key: "services", label: "Services" },
];

// Verified against public sources (news coverage, Yelp, Facebook business pages):
// Lost Art Taproom, Ace Hardware and More, and Always Vintage are real Knob Noster
// businesses with real addresses. Meyer's Market, Prairie & Pine Mercantile, and
// Downtown Barber & Supply are placeholder/illustrative — swap for real businesses
// (e.g. from the Chamber's member directory) before this goes live publicly.
export const DOWNTOWN_BUSINESSES = [
  {
    num: "01",
    category: "food-drink",
    name: "Lost Art Taproom",
    description:
      "House-brewed beer inside a converted downtown bank and former post office — owners Jesse and Lisa Stauffer-Baum learned to malt grain in Tanzania before bringing it home to Knob Noster in 2021.",
    meta: ["$$", "101 N State St", "(660) 624-7659"],
  },
  {
    num: "02",
    category: "food-drink",
    name: "Meyer's Market",
    description:
      "Part market, part gathering spot, with a small book section and a first-Tuesday book club. Good coffee, better conversation. (Placeholder — verify or replace before launch.)",
    meta: ["$", "Mornings & afternoons", "Main St"],
  },
  {
    num: "03",
    category: "shopping",
    name: "Always Vintage",
    description:
      "A local antique and vintage shop in downtown Knob Noster — furniture, collectibles, and estate finds from around Johnson County.",
    meta: ["Free to browse", "Downtown Knob Noster"],
  },
  {
    num: "04",
    category: "shopping",
    name: "Prairie & Pine Mercantile",
    description:
      "Handmade goods, local crafts, and small-batch pantry items from around the county — a good stop for gifts to take home. (Placeholder — verify or replace before launch.)",
    meta: ["Free to browse", "Wed–Sat", "E. Washington St"],
  },
  {
    num: "05",
    category: "services",
    name: "Ace Hardware and More",
    description:
      "A working hardware store on State Street, stocked for both quick fixes and full projects — as much a community fixture as a place to buy nails.",
    meta: ["401 N State St", "(660) 563-6332"],
  },
  {
    num: "06",
    category: "services",
    name: "Downtown Barber & Supply",
    description:
      "A classic small-town barbershop. (Placeholder — verify or replace before launch.)",
    meta: ["Tue–Sat", "Main St"],
  },
];
