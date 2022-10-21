import { FC } from "react";
import { IconHome, IconDashboard } from "@tabler/icons";
import NavItem from "./NavItem";
import { DEFAULT } from "routes/route.constant";

const NavbarCustom: FC = () => {
  const data = [
    {
      icon: <IconHome />,
      label: "Trang chủ",
      link: DEFAULT,
      color: "red",
      children: [],
    },
    {
      icon: <IconDashboard />,
      label: "Group",
      link: "",
      color: "red",
      children: [
        {
          label: "Profile",
          link: "/profile",
        },
        {
          label: "Group children 2",
          link: "/login",
        },
        {
          label: "Group children 3",
          link: "",
        },
        {
          label: "Group children 4",
          link: "",
        },
      ],
    },
    {
      icon: <IconDashboard />,
      label: "Group",
      link: "",
      color: "red",
      children: [
        {
          label: "Group children 1",
          link: "",
        },
        {
          label: "Group children 2",
          link: "",
        },
        {
          label: "Group children 3",
          link: "",
        },
        {
          label: "Group children 4",
          link: "",
        },
      ],
    },
  ];
  return (
    <div>
      {data.map((navItem, index) => (
        <NavItem key={index} {...navItem} />
      ))}
    </div>
  );
};

export default NavbarCustom;
