const data = {
  isData: [123],
};

// const ubahdata = () => {
//   this.setState({isData: '1'});
// };

const DataAlbum = (state = data, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        isData: ['12'],
        // ubahdata,
      };
    default:
      return state;
  }
};

export default DataAlbum;
