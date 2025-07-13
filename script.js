function calculateTotal() {
    const beer = parseInt(document.getElementById("beer").value) || 0;
    const nyama = parseInt(document.getElementById("nyama").value) || 0;
    const soda = parseInt(document.getElementById("soda").value) || 0;
    const ugali = parseInt(document.getElementById("ugali").value) || 0;

    const total = (beer * 250) + (nyama * 1200) + (soda * 100) + (ugali * 100);

    document.getElementById("total").textContent = `KES ${total.toLocaleString()}`;
}