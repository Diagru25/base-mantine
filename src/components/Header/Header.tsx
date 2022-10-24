import { Burger, Group, Text } from "@mantine/core";
import MenuProfile from "components/MenuProfile";
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
        <MenuProfile />
      </Group>
    </Group>
  );
};

export default Header;
