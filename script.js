const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const nomorWA = "6288222025227";

  let text = "";

  // LOOPING tetap ada
  const data = [
    ["Nama", nama],
    ["Email", email],
    ["Pesan", pesan]
  ];

  for (let i = 0; i < data.length; i++) {
    text += data[i][0] + " : " + data[i][1] + "\n";
  }

  const url = "https://api.whatsapp.com/send?phone=" 
              + nomorWA 
              + "&text=" 
              + encodeURIComponent("Halo PT Rasa Nusantara\n\n" + text + "\nTerima kasih 🙏");

  window.location.href = url;

  form.reset();
});