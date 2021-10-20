$('#searchdd').chosen();
$(".chosen-container").each(function() { $(this).attr("style", "width: 95%"); });


function getDataByID(id) {
    if (!isNaN(id)) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText.includes("alert")) {
                    eval(this.responseText);
                } else {
                    var jerseyData = JSON.parse(this.responseText);
                    console.log(jerseyData);
                    fillInput(jerseyData);
                }
            }
        };
        xmlhttp.open("POST", "product_action.php", true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send("enteredID=" + id);
    }
}

function getDataByName(name) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (this.responseText.includes("alert")) {
                eval(this.responseText);
            } else {
                var jerseyData = JSON.parse(this.responseText);
                console.log(jerseyData);
                fillInput(jerseyData);
            }
        }
    };
    xmlhttp.open("POST", "product_action.php", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("selectedName=" + name);

}

function fillInput(jerseyData) {
    if (jerseyData['id'] != "") {
        document.getElementById("jerseyid").value = jerseyData['id'];
    } else {
        document.getElementById("jerseyid").value = "";
    }
    if (jerseyData['name'] != null) {
        document.getElementById("jerseyName").value = jerseyData['name'];
    } else {
        document.getElementById("jerseyName").value = "";
    }
    if (jerseyData['price'] != null) {
        document.getElementById("jerseyPrice").value = jerseyData['price'];
    } else {
        document.getElementById("jerseyPrice").value = "";
    }
    if (jerseyData['description'] != null) {
        document.getElementById("jerseyDesc").value = jerseyData['description'];
    } else {
        document.getElementById("jerseyDesc").value = "";
    }
    if (jerseyData['categoryID'] != null) {
        document.getElementById("jerseyCategory").value = jerseyData['categoryID'];
    } else {
        document.getElementById("jerseyCategory").value = "xx";
    }

}