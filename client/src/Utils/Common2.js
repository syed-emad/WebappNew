// return the user data from the session storage
export const getTeacher = () => {
    const userStr = sessionStorage.getItem("teacher");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };
  
  // return the token from the session storage
  export const getTeacherToken = () => {
    return sessionStorage.getItem("token") || null;
  };
  
  // remove the token and user from the session storage
  export const removeTeacherSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("teacher");
  };
  
  // set the token and user from the session storage
  export const setTeacherSession = (token, teacher) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("teacher", JSON.stringify(teacher));
  };
  