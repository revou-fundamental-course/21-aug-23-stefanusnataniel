document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("message-form");
    const rightSide = document.querySelector(".right-side");

    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = messageForm.elements.nama.value;
        const tanggal = messageForm.elements.tanggal.value;
        const jenisKelamin = messageForm.elements["jenis-kelamin"].value;
        const pesan = messageForm.elements.pesan.value;

        
        if (nama && tanggal && jenisKelamin && pesan) {
            rightSide.innerHTML = `
                <p>Current time (${new Date().toLocaleDateString("en-US")})</p>
                <p>Nama: ${nama}</p>
                <p>Tanggal lahir: ${tanggal}</p>
                <p>Jenis kelamin: ${jenisKelamin}</p>
                <p>Pesan: ${pesan}</p>
                <div class="box"></div>
            `;
        } else {
            alert("Please fill out all fields.");
        }
    });
})