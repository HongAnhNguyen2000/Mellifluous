//ADD_TEACHER_SUBJECT'
export const AddTeacherSub = () => ({
    type: 'ADD_TEACHER_SUBJECT',
  });

//UPDATE_TEACHER_SUBJECT
export const updateTeacherSub = () => ({
    type: 'UPDATE_TEACHER_SUBJECT',
  });

//GET_TEACHER_SUBJECT
export const GetTeacherSub = (TeacherSubject) => ({
    type: 'GET_TEACHER_SUBJECT',
    payload: TeacherSubject,
  });

// GET_TEACHER_SUBJECT_BY_ID
export const getTeacherSubByID = (subjectbyID) => ({
  type: 'GET_TEACHER_SUBJECT_BY_ID',
  payload: subjectbyID
})