import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "apis/authApi";
import { LoginData } from "constants/types/auth";
import { ACCESS_TOKEN } from "constants/types/localStorage";
import { put, takeLatest } from "redux-saga/effects";
import { login, checkSession, updateState } from "redux/Auth/slice";
import { useNotification } from "utils/hooks";

const { notification } = useNotification();

function* loginSaga(action: PayloadAction<LoginData>): unknown {
  try {
    const response = yield authApi.login(action.payload);

    if (response.result.token) {
      localStorage.setItem(ACCESS_TOKEN, response.result.token);
      yield put({
        type: updateState.type,
        payload: { isLoggedIn: true },
      });
      notification.success("Đăng nhập thành công", "");
    }
  } catch (error: any) {
    notification.error("Đăng nhập không thành công", error?.data?.message);
  }
}

function* checkSessionSaga(): unknown {
  try {
    const response = yield authApi.checkSession();
    if (response.result)
      yield put({
        type: updateState.type,
        payload: { isLoggedIn: true },
      });
    else {
      yield put({
        type: updateState.type,
        payload: { isLoggedIn: false },
      });
      localStorage.removeItem(ACCESS_TOKEN);
    }
    // eslint-disable-next-line no-empty
  } catch (error) {
    yield put({
      type: updateState.type,
      payload: { isLoggedIn: false },
    });
    localStorage.removeItem(ACCESS_TOKEN);
  }
}

function* authSaga() {
  yield takeLatest(login.type, loginSaga);
  yield takeLatest(checkSession.type, checkSessionSaga);
}

export default authSaga;
