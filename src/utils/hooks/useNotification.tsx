import { showNotification } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons";

const useNotification = () => {
  const notification = {
    error: (title: string, message: string, autoClose?: number | boolean) =>
      showNotification({
        title,
        message,
        color: "red",
        icon: <IconX />,
        autoClose: autoClose || 3000,
      }),
    success: (title: string, message: string, autoClose?: number | boolean) =>
      showNotification({
        title,
        message,
        color: "green",
        icon: <IconCheck />,
        autoClose: autoClose || 3000,
      }),
    primary: (title: string, message: string, autoClose?: number | boolean) =>
      showNotification({
        title,
        message,
        autoClose: autoClose || 3000,
      }),
  };
  return {
    notification,
  };
};

export default useNotification;
