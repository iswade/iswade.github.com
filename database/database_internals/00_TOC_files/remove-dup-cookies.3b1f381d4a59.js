(function () {
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var sessionCookies = cookies.filter(function(cookieItem) { 
        return cookieItem.indexOf('sessionid=') == 0; 
    });
    var csrfCookies = cookies.filter(function(cookieItem) { 
        return cookieItem.indexOf('csrfsafari=') >= 0; 
    });
    var corpSessionCookies = cookies.filter(function(cookieItem) {
        return cookieItem.indexOf('corp_sessionid=') >= 0;
    });
    if (sessionCookies.length > 1) {
        document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.CURRENT_SITE;
    }
    if (csrfCookies.length > 1) {
        document.cookie = "csrfsafari=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.CURRENT_SITE;
    }
    if (corpSessionCookies.length > 1) {
        document.cookie = "corp_sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.CURRENT_SITE;
    }
})();
