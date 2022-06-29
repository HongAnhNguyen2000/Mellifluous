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