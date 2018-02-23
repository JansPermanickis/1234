 setHeader = function (header) {
    Session.set("headerData",header);
}
 getHeader = function () {
    return Session.get("headerData")? Session.get("headerData"):{title:"Home", isBackVisible:false};
}
