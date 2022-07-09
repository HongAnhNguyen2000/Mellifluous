//ADD_REGIS
export const AddRegis = () => ({
    type: 'ADD_REGIS',
  });

//DELETE_REGIS
export const deleRegis = () => ({
    type: 'DELETE_REGIS',
  });

//GET_REGIS
export const GetRegis = (regis) => ({
    type: 'GET_REGIS',
    payload: regis,
  });

