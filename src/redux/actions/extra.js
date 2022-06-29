//GET_EXTRAS
export const getExtras = (extra) =>({
    type:'GET_EXTRAS',
    payload :extra
  });

//GET_EXTRA_BY_ID
export const getExtra = (extra)=>({
    type:'GET_EXTRA',
    payload: extra
  })