import { AppShell, Header, Navbar, ScrollArea } from "@mantine/core";
import { MainLinks } from "components/Navbar/test";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs" hidden={true}>
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
      <Outlet />
    </AppShell>
  );
};

export default MainLayout;
