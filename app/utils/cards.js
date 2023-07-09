import doug from "@/public/card1.jpg";
import pokemon from "/public/card2.jpg";
import scenery from "/public/card3.jpg";
import photo from "/public/card4.jpg";
import gameCenter from "/public/card5.jpg";

export const cards = [
  {
    id: 1,
    title: "Doug Maloney",
    description: "The man who invented the telephone",
    image: doug,
    link: "./card1",
  },
  {
    id: 2,
    title: "Pokemon Card",
    description: "pokemon card",
    image: pokemon,
    link: "/card2",
  },
  {
    id: 3,
    title: "Scenery",
    description: "scenery",
    image: scenery,
    link: "/card3",
  },
  {
    id: 4,
    title: "Anime Photo",
    description: "Anime photo",
    image: photo,
    link: "/card4",
  },
  {
    id: 5,
    title: "Game Center",
    description: "Game Center",
    image: gameCenter,
    link: "/card5",
  },
];
