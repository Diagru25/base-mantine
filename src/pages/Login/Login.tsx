import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/Auth/slice";
import { RootState } from "configs/configureStore";
import { DEFAULT } from "routes/route.constant";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
import { LoginData } from "constants/types/auth";
import styles from "./style.module.css";

type FormLoginData = {
  accessValue: string;
  password: string;
};

const loginSchema = Yup.object().shape({
  accessValue: Yup.string().required(
    "Email/Số điện thoại/Tên đăng nhập không được để trống."
  ),
});

const Login: FC = () => {
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const { isLoggedIn } = useSelector((state: RootState) => state.authSlice);

  const initialValue: FormLoginData = {
    accessValue: "",
    password: "",
  };

  const formLogin = useFormik({
    initialValues: initialValue,
    validationSchema: loginSchema,
    onSubmit: async (data) => {
      const loginData: LoginData = {
        email: data.accessValue,
        password: data.password,
      };

      dispatch(login(loginData));
    },
  });

  if (isLoggedIn) return <Navigate to={DEFAULT} />;

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
        <Input.Wrapper
          id="accessValue"
          label="Username hoặc email"
          error={formLogin.errors.accessValue}
          withAsterisk
        >
          <Input
            id="accessValue"
            placeholder="Your email"
            value={formLogin.values.accessValue}
            //onChange={(e: any) => console.log(e.target.value)}
            onChange={formLogin.handleChange}
          />
        </Input.Wrapper>
        <PasswordInput
          id="password"
          placeholder="Password"
          label="Mật khẩu"
          error={formLogin.errors.password}
          value={formLogin.values.password}
          onChange={formLogin.handleChange}
        />
        <Button onClick={() => formLogin.handleSubmit()}>Đăng nhập</Button>
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
