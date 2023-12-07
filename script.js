document.getElementById("btn").addEventListener("click", () => {
  let text = document.getElementById("text").value;
  const encoded = text.replace(
    /^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/,
    "$1$5$2$3$4"
  );
  JsBarcode("#barcode", encoded, { format: "ITF" });
});
