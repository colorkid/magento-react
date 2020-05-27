const initialState = {
  contentSection: {
    title: "Home",
    textFirst: "Home Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
      "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    textSecond: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ps: "Home pageJason Wood",
    scrollDownText: "keep scrolling, there is still more to come."
  },
  topSection: {
    scrollDownText: "Scroll down to see more"
  }
};

const homePageReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default homePageReducer;