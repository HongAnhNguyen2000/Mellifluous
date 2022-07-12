//GET_INFO
export const getInfo = (infos) => ({
    type: 'GET_INFO',
    payload: infos,
  });
//GET_INFO_BY_ID
export const getInfoById = (info) => ({
  type: 'GET_INFO_BY_ID',
  payload: info
})
//UPDATE_INFO
export const updateInfo = () => ({
    type: 'UPDATE_INFO',
  });

//ADD_INFO
export const addInfo = () => ({
  type: "ADD_INFO"
})