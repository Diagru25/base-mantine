import React, { FC, ReactElement, useCallback, useState } from "react";
import { NavLink, useMantineTheme } from "@mantine/core";
import { TablerIconProps } from "@tabler/icons";
import { Link, useLocation } from "react-router-dom";

interface ChildrenProps {
  label: string;
  link: string;
}

interface NavItemProps {
  icon: ReactElement<TablerIconProps>;
  color: string;
  label: string;
  link: string;
  children: Array<ChildrenProps>;
}

const NavItem: FC<NavItemProps> = (props) => {
  const theme = useMantineTheme();
  const location = useLocation();
  const [isNavOpened, setIsNavOpened] = useState(false);

  const isActive = useCallback((link: string) => {
    return location.pathname === link ? true : false;
  }, []);

  return props.children.length === 0 ? (
    <NavLink
      label={props.label}
      icon={React.cloneElement(props.icon, {
        ...props.icon.props,
        size: 20,
        stroke: isActive(props.link) ? 2 : 1.5,
      })}
      component={Link}
      to={props.link}
      styles={{
        root: {
          borderLeft: isActive(props.link)
            ? `${theme.colors.blue[7]} solid 2px`
            : "none 1px",
          color: isActive(props.link) ? theme.colors.blue[8] : "black",
          backgroundColor: isActive(props.link) ? theme.colors.blue[0] : "none",
          fontWeight: isActive(props.link) ? "bold" : "normal",
        },
      }}
    />
  ) : (
    <NavLink
      label={props.label}
      icon={React.cloneElement(props.icon, {
        ...props.icon.props,
        size: 20,
        stroke: isNavOpened ? 2 : 1.5,
      })}
      opened={isNavOpened}
      onChange={(opened: boolean) => setIsNavOpened(opened)}
      styles={{ root: { fontWeight: isNavOpened ? "bold" : "normal" } }}
    >
      {props.children.map((item, index) => {
        return (
          <NavLink
            key={index}
            label={item.label}
            component={Link}
            to={item.link}
            styles={{
              root: {
                paddingLeft: "20px",
                borderLeft: isActive(item.link)
                  ? `${theme.colors.blue[7]} solid 2px`
                  : `${theme.colors.gray[3]} solid 1px`,
                color: isActive(item.link) ? theme.colors.blue[8] : "black",
                backgroundColor: isActive(item.link)
                  ? theme.colors.blue[0]
                  : "none",
                fontWeight: isActive(item.link) ? "bold" : "normal",
              },
            }}
          />
        );
      })}
    </NavLink>
  );
};

export default NavItem;
