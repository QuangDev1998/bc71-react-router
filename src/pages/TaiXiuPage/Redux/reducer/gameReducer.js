const initialState = {
  mangXucXac: [
    {
      img: `./imgXucXac/1.png`,
      giaTri: 1,
    },
    {
      img: `./imgXucXac/1.png`,
      giaTri: 1,
    },
    {
      img: `./imgXucXac/1.png`,
      giaTri: 1,
    },
  ],
  luaChon: null,
  tongSoBanThang: 0,
  tongSoLuotChoi: 0,
};

let gameSlice = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default gameSlice.reducer;
