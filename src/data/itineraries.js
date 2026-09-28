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
            title: "Start downtown, then hit the trailhead",
            description:
              "Check the Chamber directory for a current coffee or breakfast stop, then head southwest to Knob Noster State Park for the Discovery or North Loop Trail.",
          },
          {
            time: "Midday",
            title: "Lunch and local aviation context",
            description:
              "Grab lunch downtown, then look for aircraft only from lawful public areas. Flight operations are not published or guaranteed; never stop on shoulders or approach the base perimeter.",
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
            title: "Hike the McAdoo Trail System",
            description: "Take on the park's rugged five-mile hiking and equestrian route while the light is good—then save a shorter trail for tomorrow.",
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
            title: "Check Whiteman's official news",
            description: "Before heading home, read the base's official news or tour guidance and enjoy any aircraft activity only from safe, lawful public areas.",
          },
        ],
      },
    ],
  },
  {
    id: "panel-spotter",
    duration: "Half Day",
    name: "Aviation & Town Route",
    tabSub: "A respectful, public-access route for aviation-curious visitors.",
    tags: ["Half Day", "Aviation", "Weekday Best"],
    days: [
      {
        rows: [
          {
            time: "Before",
            title: "Start with official guidance",
            description: "Read Whiteman's current base-access and tour information. There is no published visitor flight schedule, and routine operations can change without notice.",
          },
          {
            time: "Midday",
            title: "Spend time downtown",
            description: "Choose an open coffee or lunch stop from the current Chamber directory, then browse one or two State Street shops.",
          },
          {
            time: "Afternoon",
            title: "Enjoy the aviation landscape safely",
            description: "Aircraft may be visible from public areas around the community. Stay off road shoulders and private property, obey signs, and never photograph or approach restricted areas.",
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
