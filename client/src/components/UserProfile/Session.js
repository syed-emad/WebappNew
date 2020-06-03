var Session = (function () {
  var name = "";
  var session="false";
  var id="";
  var getSession = function () {
    return session; // Or pull this from cookie/localStorage
  };
  var getId=function(){
    return id
  };
  var setSession = function (session2) {
    session=session2;
     
    // Also set this in cookie/localStorage
  };
  
  return {
    getSession: getSession,
    setSession: setSession,
    getId:getId,
  };
})();

export default Session;
