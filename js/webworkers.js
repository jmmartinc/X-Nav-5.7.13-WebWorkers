function work() {
    document.getElementById('result').innerHTML = "";
    var worker = new Worker("js/worker.js");
    worker.postMessage(document.getElementById("formulario").input.value);
    worker.onmessage = function(event) {
        $('#result').append(event.data);
    }
}
