//GET_SUBJECTS
export const subGet = (subjects) => ({
    type: 'GET_SUBJECTS',
    payload: subjects,
  });

//GET_SUBJECT_BY_ID
export const getEachSub = (subject) => ({
    type: 'GET_SUB',
    payload: subject,
  });

//DELETE_SUBJECT

export const subDelete = (id) => ({
  type: "DELETE_SUB",
  id: id
})

export const subAdd = () => ({
  type: "ADD_SUB"
})

export const subUpdate = () => ({
  type: "UPDATE_SUB",

})

