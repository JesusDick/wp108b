function Prime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

x = 1, y = 15;

for (var p = x; p <= y; p++) {
    if (Prime(p))
        console.log("Prime(%d , %d) = ", x, y, p);
}
