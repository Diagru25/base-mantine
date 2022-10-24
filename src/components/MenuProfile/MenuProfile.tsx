import { Menu, Text, Avatar, UnstyledButton } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconLogout,
  IconArrowsLeftRight,
} from "@tabler/icons";
import { useDispatch } from "react-redux";
import { logout } from "redux/Auth/slice";

const MenuProfile = () => {
  const dispatch = useDispatch();
  return (
    <Menu shadow="md" width={200} offset={10} position={"bottom-end"}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar
            size={34}
            radius="xl"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
            alt="it's me"
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>

        <Menu.Item color="red" icon={<IconLogout size={14} />}>
          <span onClick={() => dispatch(logout())}>Logout</span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuProfile;
