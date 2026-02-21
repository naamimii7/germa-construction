document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("0138666647");
    alert("No. WhatsApp dah copy: 0138666647");
  } catch {
    alert("Tak dapat copy. Copy manual: 0138666647");
  }
});