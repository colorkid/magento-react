const initialState = {
  links: [
    {link: "", text: "home"},
    {link: "aboutme", text: "about me"},
    {link: "portfolio", text: "portfolio"},
    {link: "contact", text: "contact"},
  ]
};

const navReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default navReducer;