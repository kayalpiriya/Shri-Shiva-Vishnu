export const NAV_LINKS = [
  {
    name: "About Us",
    dropdown: true,
    subLinks: [
      { name: "HSV Constitution", href: "/about/constitution" },
      { name: "Management Committee", href: "/about/management" },
      { name: "Previous Years MC List", href: "/about/previous-mc" },
    ],
  },
  {
    name: "Pooja & Events",
    dropdown: true,
    subLinks: [
      { name: "Pooja Calendar", href: "/pooja-events/calendar" },
      { name: "Pooja Bookings", href: "/pooja-events/bookings" },
      { name: "Donate for Projects", href: "/pooja-events/donate" },
      { name: "Upcoming Events", href: "/pooja-events/upcoming" },
      { name: "Other Services", href: "/pooja-events/services" },
    ],
  },
  {
    name: "Facilities",
    dropdown: true,
    subLinks: [
      { name: "Reception Center", href: "/facilities/reception" },
      { name: "Peacock Room", href: "/facilities/peacock-room" },
      { name: "Café Annapoorani", href: "/facilities/cafe" },
      { name: "HSV School for Children", href: "/facilities/school" },
      { name: "Bhajan Gatherings", href: "/facilities/bhajan" },
      { name: "Museum", href: "/facilities/museum" },
      { name: "Library", href: "/facilities/library" },
      { name: "Yoga Classes", href: "/facilities/yoga" },
    ],
  },
  {
    name: "Resources",
    dropdown: true,
    subLinks: [
      { name: "News", href: "/resources/news" },
      { name: "Financial Members Info", href: "/resources/members" },
      { name: "Volunteer Forms", href: "/resources/volunteer" },
         { name: "HSV Membership", href: "/resources/membership" }, // Added
      { name: "Panchavati", href: "/resources/panchavati" }, 
      { name: "Job Opportunities", href: "/resources/jobs" },
      { 
      name: "Gallery", 
      href: "/resources/gallery", // Main link
      nestedLinks: [ // These will show in side-menu
        { name: "Photo Gallery", href: "/resources/gallery/photos" },
        { name: "Brammothsavam", href: "/resources/gallery/brammothsavam" },
      ]
      },
    
    ],
  },
];