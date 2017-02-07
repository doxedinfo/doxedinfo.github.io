$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#add").html("Location: " + response.city + ", " + response.country);
    $("#zip").html("ZIP Code: " + response.postal);
    $("#isp").html("ISP: " + response.org);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");
