import { FC, useEffect, useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import {
  AppShell,
  Header,
  Navbar,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";
import { MainLinks } from "components/Navbar/test";
import useWindowDimensions from "hooks/useWindowDimension";

const MainLayout: FC = () => {
  const theme = useMantineTheme();
  const { width } = useWindowDimensions();
  const [opened, setOpened] = useState(false);

  useLayoutEffect(() => {
    const mobileBreakpoint = theme.breakpoints.sm;
    if (width <= mobileBreakpoint) {
      return setOpened(true);
    }
    return setOpened(false);
  }, [width]);

  return (
    <AppShell
      navbarOffsetBreakpoint={opened ? "xl" : "sm"}
      padding="md"
      navbar={
        <Navbar
          width={{ base: 300 }}
          p="xs"
          hiddenBreakpoint={opened ? "xl" : "sm"}
          hidden={opened}
        >
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <MainLinks />
            <MainLinks />
            <MainLinks />
            <MainLinks />
            <MainLinks />
            <MainLinks />
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          HEADER
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <button onClick={() => setOpened(!opened)}>click</button>
      <Outlet />
    </AppShell>
  );
};

export default MainLayout;
