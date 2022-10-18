import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Stack,
  Text,
  Input,
  Button,
  useMantineTheme,
  Center,
  PasswordInput,
  Group,
} from "@mantine/core";
import { IconStar } from "@tabler/icons";
import styles from "./style.module.css";

const Login: FC = () => {
  const theme = useMantineTheme();
  return (
    <Stack align="center" className={styles.wrapper}>
      <Avatar color="blue" radius="xl" size={48} mb="md">
        <IconStar size={24} />
      </Avatar>
      <Text size={24}>Đăng nhập</Text>
      <Stack
        className={styles.form}
        style={{
          padding: "1rem",
          backgroundColor: theme.colors.gray[0],
          borderRadius: "6px",
          border: "solid 1px",
          borderColor: theme.colors.gray[3],
        }}
      >
        <Input.Wrapper id="email" label="Username hoặc email" error="">
          <Input id="email" placeholder="Your email" />
        </Input.Wrapper>
        <PasswordInput placeholder="Password" label="Mật khẩu" withAsterisk />
        <Button>Đăng nhập</Button>
      </Stack>
      <Center
        className={styles.form}
        style={{
          padding: "1rem",
          borderRadius: "6px",
          border: "solid 1px",
          borderColor: theme.colors.gray[3],
        }}
      >
        <Group position="center">
          <Text size="sm">Chưa có tài khoản?</Text>
          <Text
            className={styles.link}
            component={Link}
            to={"/"}
            color="blue.5"
            size={"sm"}
          >
            Đăng ký ngay
          </Text>
        </Group>
      </Center>
      <Center
        style={{ fontSize: 12, color: theme.colors.blue[5], marginTop: "2rem" }}
      >
        <Text className={styles.link} mr="sm" component={Link} to="/">
          Terms
        </Text>
        <Text className={styles.link} mr="sm" component={Link} to="/">
          Privacy
        </Text>
        <Text className={styles.link} mr="sm" component={Link} to="/">
          Security
        </Text>
      </Center>
    </Stack>
  );
};

export default Login;
