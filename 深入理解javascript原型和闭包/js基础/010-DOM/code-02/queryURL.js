function queryURLParameter(url) {
    var link = document.createElement('a');
    link.href = url;

    var search = link.search,
        obj = {};
    if (search.length === 0) return;
    search = search.substr(1).split(/&|=/g);
    for (var i = 0; i < search.length; i += 2) {
        var key = search[i],
            value = search[i + 1];
        obj[key] = value;
    }
    link = null;
    return obj;
}
