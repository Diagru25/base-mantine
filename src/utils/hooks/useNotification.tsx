import { showNotification } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons";

const useNotification = () => {
  const notification = {
    error: (title: string, message: string) =>
      showNotification({
        title,
        message,
        color: "red",
        icon: <IconX />,
      }),
    success: (title: string, message: string) =>
      showNotification({
        title,
        message,
        color: "green",
        icon: <IconCheck />,
      }),
    primary: (title: string, message: string) =>
      showNotification({
        title,
        message,
      }),
  };
  return {
    notification,
  };
};

export default useNotification;
