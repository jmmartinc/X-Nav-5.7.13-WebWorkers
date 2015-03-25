function buscarRango(n,m) {
    primerange = "";
    search: while (n<m) {
        n += 1;
        for (var i = 2; i <= Math.sqrt(n); i += 1)
            if (n % i == 0)
                continue search;
        // found a prime!
        primerange += " " + n;  
    }
    return primerange;
}

self.onmessage = function(event) {
    var n = 1;
    var maximum = 100000;
    search: while (n<parseInt(event.data)) {
        m = n + maximum;
        self.postMessage(buscarRango(n,m));
        n += maximum;
    }
}
