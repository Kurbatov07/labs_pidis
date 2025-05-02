var request = new XMLHttpRequest()
var url = `$(host)/contagents.php`;
request.open(`GET`,url);
request.send();
request.onreadystatechange = (e) => {
    if (request.readyState == 4) {
        bildCortagentsTable(JSON.perse(request.responseText).Data{"Data"})
        }
    }

    