import {applyMiddleware, combineReducers, createStore} from "redux";
import aboutMePageReducer from "./aboutme-page-reducer";
import homePageReducer from "./home-page-reducer";
import navReducer from "./nav-reducer";

let reducers = combineReducers({
  navLinks: navReducer,
  aboutMePage: aboutMePageReducer,
  homePage: homePageReducer,
});

const store = createStore(reducers);

export default store;
