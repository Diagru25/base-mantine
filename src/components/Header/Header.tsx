import { Avatar, Burger, Group, Text } from "@mantine/core";
import { FC } from "react";

interface HeaderProps {
  isOpen: boolean;
  trigger: () => void;
}
const Header: FC<HeaderProps> = (props) => {
  const { isOpen, trigger } = props;
  return (
    <Group position="apart" style={{ height: "100%", padding: "0px 20px" }}>
      <Group spacing="sm">
        <Burger opened={!isOpen} onClick={trigger} size="sm" color="black" />
        <Text
          component="span"
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          size="xl"
          weight={700}
          style={{
            fontFamily: "Greycliff CF, sans-serif",
            paddingTop: "2px",
          }}
        >
          Indigo cyan gradient
        </Text>
      </Group>
      <Group>
        <Avatar
          size={34}
          radius="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          alt="it's me"
        />
      </Group>
    </Group>
  );
};

export default Header;
