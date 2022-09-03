function dataAwal() {
    document.getElementById('name').innerHTML = 'Bismaka Aurent Faradyan';
    document.getElementById('role').innerHTML = 'Front End Designer';
    document.getElementById('availability').innerHTML = 'Full Time';
    document.getElementById('age').innerHTML = '20';
    document.getElementById('place').innerHTML = 'Jember, Jawa Timur';
    document.getElementById('experience').innerHTML = '7';
    document.getElementById('email').innerHTML = 'bfaradyan@gmail.com';
}

function submit() {
    const response = [
        document.getElementById('inputName').value,
        document.getElementById('inputRole').value,
        document.getElementById('inputAvailability').value,
        document.getElementById('inputAge').value,
        document.getElementById('inputPlace').value,
        document.getElementById('inputExperience').value,
        document.getElementById('inputEmail').value
    ];
    if (response.includes('')) {
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Masih Ada Data Kosong!',
          });
    } else {
        document.getElementById('name').innerHTML = document.getElementById('inputName').value;
        document.getElementById('role').innerHTML = document.getElementById('inputRole').value;
        document.getElementById('availability').innerHTML = document.getElementById('inputAvailability').value;
        document.getElementById('age').innerHTML = document.getElementById('inputAge').value;
        document.getElementById('place').innerHTML = document.getElementById('inputPlace').value;
        document.getElementById('experience').innerHTML = document.getElementById('inputExperience').value;
        document.getElementById('email').innerHTML = document.getElementById('inputEmail').value;
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Data Berhasil Diperbarui',
          });
    }
}

function konfirmasiSubmit() {
    Swal.fire({
        title: 'Yakin Submit Data?',
        text: "Anda tidak akan dapat mengembalikan ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Submit'
      }).then((result) => {
        if (result.isConfirmed) {
          submit();
        }
      });
}

function konfirmasiReset() {
    Swal.fire({
        title: 'Yakin Reset Data?',
        text: "Anda tidak akan dapat mengembalikan ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Reset'
      }).then((result) => {
        if (result.isConfirmed) {
          document.location.reload(true);
        }
      });
}