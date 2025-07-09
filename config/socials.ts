import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@samson-16",
    icon: Icons.gitHub,
    link: "https://github.com/samson-16",
  },
  {
    name: "LinkedIn",
    username: "Samson Demessie",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/samson-demessie-99a282191/",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "samsondemessie",
    icon: Icons.gmail,
    link: "mailto:samsondemessie@gmail.com",
  },
];
