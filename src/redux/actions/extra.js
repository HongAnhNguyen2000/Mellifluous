//GET_EXTRAS
export const getExtras = (extras) =>({
    type:'GET_EXTRAS',
    payload :extras
  });

//GET_EXTRA_BY_ID
export const getExtra = (extra)=>({
    type:'GET_EXTRA',
    payload: extra
  })