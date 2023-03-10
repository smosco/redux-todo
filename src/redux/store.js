import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: reducer,
});

export default store;

//이제 이 스토어와 리액트 앱을 연결하자
