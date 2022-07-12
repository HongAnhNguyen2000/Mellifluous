import { combineReducers } from "redux";
import accountReducers from "./reducers/account";
import adminReducers from "./reducers/admin";
import extraReducers from "./reducers/extra";
import infoReducers from "./reducers/info";
import regisReducers from "./reducers/regis";
import subjectReducers from "./reducers/subject";
import teacherReducer from "./reducers/teachersubject";
import transcriptReducers from "./reducers/transcript";

const rootReducer = combineReducers({
   
//   data: usersReducers,
 account: accountReducers,
 extra: extraReducers,
 info: infoReducers,
 regis: regisReducers,
 subject: subjectReducers,
 transcript: transcriptReducers,
 teacherSubject: teacherReducer,
 admin : adminReducers
});

export default rootReducer;