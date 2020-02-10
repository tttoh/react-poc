export const validateUrl = (url) => {
    if(!url) {
        return false;
    }

    return url.protocol.indexOf("http") !== -1 || url.protocol.indexOf("https") !== -1;
}

export const validateEmail = (email) => {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return email.match(emailRegex);
}