// Change kit body color
document.getElementById('body-color').addEventListener('input', function () {
  document.getElementById('shirt-body').setAttribute('fill', this.value);
});

// Change sleeve color
document.getElementById('sleeve-color').addEventListener('input', function () {
  document.getElementById('shirt-sleeves').setAttribute('fill', this.value);
});

// Upload badge
document.getElementById('badge-upload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = document.createElement('img');
    img.src = event.target.result;
    img.alt = "Team Badge";
    const preview = document.getElementById('badge-preview');
    preview.innerHTML = '';
    preview.appendChild(img);
  };
  reader.readAsDataURL(file);
});
