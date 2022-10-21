import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "apis/authApi";
import { LoginData } from "constants/types/auth";
import { ACCESS_TOKEN } from "constants/types/localStorage";
import { put, takeLatest } from "redux-saga/effects";
import { login, checkSession, updateState } from "redux/Auth/slice";

function* loginSaga(action: PayloadAction<LoginData>): unknown {
  try {
    const response = yield authApi.login(action.payload);

    if (response.result.token) {
      localStorage.setItem(ACCESS_TOKEN, response.result.token);
      yield put({
        type: updateState.type,
        payload: { isLoggedIn: true },
      });
    }
    // eslint-disable-next-line no-empty
  } catch (error) {
    console.log(error);
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
