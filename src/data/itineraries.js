export const ITINERARIES = [
  {
    id: "panel-day",
    duration: "One Day",
    name: "The Perfect Day",
    tabSub: "Trails, a flyover, and a pint downtown — the classic first visit.",
    tags: ["Full Day", "First-Timer", "Free–$$"],
    days: [
      {
        rows: [
          {
            time: "Morning",
            title: "Coffee downtown, then hit the trailhead",
            description:
              "Start at a downtown storefront café, then head southwest to Knob Noster State Park for a morning hike along the Clearfork on the Discovery or North Loop Trail.",
          },
          {
            time: "Midday",
            title: "Lunch and a flyover",
            description:
              "Grab lunch downtown, then check local flight-ops timing and post up at a viewing spot for a chance at a B-2 on approach.",
          },
          {
            time: "Afternoon",
            title: "Antiques and a walk through town",
            description:
              "Work through the antique shops, then wander the town park if there's a market or festival running that weekend.",
          },
          {
            time: "Evening",
            title: "Dinner and a pint at Lost Art Taproom",
            description: "Wind down where the locals do — a house-brewed beer in a converted downtown bank building.",
          },
        ],
      },
    ],
  },
  {
    id: "panel-weekend",
    duration: "Two Days",
    name: "Weekend Getaway",
    tabSub: "Camp in the park and take it slow over a full weekend.",
    tags: ["2 Days", "Camping", "Outdoors-Heavy"],
    days: [
      {
        label: "Day One",
        rows: [
          {
            time: "Early PM",
            title: "Arrive & set up camp",
            description: "Check in at the state park campground, pick a level, shaded site, and get settled before the trails fill up.",
          },
          {
            time: "Late PM",
            title: "Hike the McAdoo Trail",
            description: "Take on the park's longest loop through Christopher Woods while the light is good — save the shorter trails for tomorrow.",
          },
          {
            time: "Evening",
            title: "Dinner downtown, then back to camp",
            description: "Head into town for dinner and a pint at Lost Art Taproom before returning to the campground for the night.",
          },
        ],
      },
      {
        label: "Day Two",
        rows: [
          {
            time: "Morning",
            title: "Fish Lake Buteo or Clearfork Lake",
            description: "Bank fish or paddle a kayak out at sunrise, when the lakes are calmest — bring your Missouri fishing license.",
          },
          {
            time: "Midday",
            title: "Break camp, then browse downtown",
            description: "Pack up and head into Knob Noster for lunch and a slow walk through the antique shops.",
          },
          {
            time: "Afternoon",
            title: "One last shot at a flyover",
            description: "Swing by a viewing spot on your way out of town for a final chance to catch a B-2 before heading home.",
          },
        ],
      },
    ],
  },
  {
    id: "panel-spotter",
    duration: "Half Day",
    name: "Plane Spotter's Route",
    tabSub: "Built around flight ops timing, for aviation-first visitors.",
    tags: ["Half Day", "Aviation", "Weekday Best"],
    days: [
      {
        rows: [
          {
            time: "Before",
            title: "Check flight-ops timing",
            description: "Whiteman doesn't publish a public schedule, so ask locally or check spotting groups the morning of your visit for the best window.",
          },
          {
            time: "Midday",
            title: "Fuel up downtown",
            description: "Grab coffee and an early lunch in Knob Noster before heading to a viewing spot — flight ops can run long.",
          },
          {
            time: "Afternoon",
            title: "Post up at the cemetery bluff or Route 50 pull-off",
            description: "Both are known local spots for watching approaches and departures — bring a camera with some reach if you've got one.",
          },
          {
            time: "Late PM",
            title: "Debrief at Lost Art Taproom",
            description: "Compare notes with fellow spotters over a beer — a converted downtown bank is as good a place as any to end an aviation-focused day.",
          },
        ],
      },
    ],
  },
];
