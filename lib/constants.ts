export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "React Summit 2024",
    image: "/images/event1.png",
    slug: "react-summit-2024",
    location: "San Francisco, CA",
    date: "March 15-17, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Next.js Conf",
    image: "/images/event2.png",
    slug: "nextjs-conf-2024",
    location: "New York, NY",
    date: "April 20-22, 2024",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "Hack the Future",
    image: "/images/event3.png",
    slug: "hack-the-future-2024",
    location: "Austin, TX",
    date: "May 10-12, 2024",
    time: "48 Hour Hackathon",
  },
  {
    title: "DevOps World Conference",
    image: "/images/event4.png",
    slug: "devops-world-2024",
    location: "Seattle, WA",
    date: "June 5-7, 2024",
    time: "8:00 AM - 7:00 PM",
  },
  {
    title: "AI & Machine Learning Summit",
    image: "/images/event5.png",
    slug: "ai-ml-summit-2024",
    location: "Boston, MA",
    date: "July 18-20, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Web3 Developers Meetup",
    image: "/images/event6.png",
    slug: "web3-developers-meetup-2024",
    location: "Miami, FL",
    date: "August 8, 2024",
    time: "6:00 PM - 10:00 PM",
  },
];
