export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCrLpPjnOFEW8RQhEqFVDqHflBOUjVhEqW9Q9oPIIk2I8Mebahj2vGyckay7YrZJhTLlVgpxFhrW1rgLZmSdmjgH4UMrOP6zFb9nR-2kRbx3FUA6O4KeJuqSc6C3gHfwOKljk2xNFXV2NP5ZxJaCm7O4QlPB5yR7nswb_DHtQbw3gX6GMqEqPCtlkzZ0uyY3V-LWkauNx6uCk_KRwRm",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekely,
      };
    default:
      return state;
  }
};

export default reducer;
