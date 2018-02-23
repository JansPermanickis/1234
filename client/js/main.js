 setHeader = function (header) {
    Session.set("headerData",header);
}
 getHeader = function () {
    return Session.get("headerData")? Session.get("headerData"):{title:"Home", isBackVisible:false};
}

setHeader = function (header) {
   Session.set("headerData",header);
}
getHeader = function () {
   return Session.get("headerData")? Session.get("headerData"):{title:"Hello", logoutVisible:false};
}
