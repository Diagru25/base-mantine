/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import styles from "components/NotFoundPage/style.module.css";
import { useNavigate } from "react-router-dom";
import { DEFAULT } from "routes/route.constant";
import { MediaQuery } from "@mantine/core";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(DEFAULT);
  };

  return (
    <div className={styles.bgImage}>
      <div className={styles.title}>Lost your way?</div>
      <div className={styles.description}>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </div>
      <div className={styles.wrapperBtn}>
        <div className={styles.button} onClick={handleRedirect}>
          Trang chủ
        </div>
      </div>
      <MediaQuery query="(max-width: 768px)" styles={{ display: "none" }}>
        <div className={styles.error}>
          Error code <span>404</span>
        </div>
      </MediaQuery>
    </div>
  );
};

export default NotFoundPage;
