import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Birth of Divinity",
    paragraph:
      "Infusing the idol with divine life force",
    image: "/images/mandir/KAG061_1050x700.webp",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Consecrating the Abode",
    paragraph:
      "Preparing the temple for Ram's presence.",
    image: "/images/mandir/2320953_CON_FEATUREIMG_20221222_142339.avif",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Invoking Blessings.",
    paragraph:
      "Chanting mantras for a prosperous future.",
    image: "/images/mandir/2015-10-14T034505Z_707_GF10000243461_RTRMADP_0_INDIA-RELIGION.jpeg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
