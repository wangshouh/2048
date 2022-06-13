function usernameSubmit() {
    var username = document.getElementById("username").value;
    var score = parseInt(localStorage.getItem("bestScore")) || 0;
    localStorage.setItem("username", username);
    alert("Welcome " + username + "!");
    if (localStorage.getItem("username") != null) {
        console.log("Updating username");
        document.getElementById("userNameInput").style.display = "none";
    };
    //Post data use fetch
    fetch('https://gwgp-vhvlu4qpjsa.n.bdcloudapi.com/2048/rank', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            score: score,
            method: "POST"
        })
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        localStorage.setItem("objectId", data.objectId);
    })
}

function bestScoreSumbit() {
    var objectId = localStorage.getItem("objectId");
    var score = parseInt(localStorage.getItem("bestScore")) || 0;
    //Post data use fetch
    fetch('https://gwgp-vhvlu4qpjsa.n.bdcloudapi.com/2048/rank', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            objectId: objectId,
            score: score,
            method: "PUT"
        })
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    })
}