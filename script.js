
let nilaiCount = 1;


// Fungsi Hitung Nilai
const hitungNilai = function (count) {
    let total = 0;
    for (let i = 1; i <= count; i++) {
        let temp =$("#nilai"+i).val().toUpperCase();
        switch (temp) {
            case 'A':
                total += 4
                break;
            case 'AB':
                total += 3.5
                break;
            case 'B':
                total += 3
                break;
            case 'BC':
                total += 2.5
                break;
            case 'C':
                total += 2
                break;
            case 'D':
                total += 1
                break;
                total += 0
            case 'E':
                
                break;
        
            default:
                break;
        }
    }
    return (total/count);
    
}


// Template dari Kolom Nilai
const nilaiTemplate = function(){return`
                <div class="row g-3 my-3 nilaiTemp${nilaiCount} align-items-center">
                    <div class="col-auto ">
                      <label for="nilai${nilaiCount}" class="col-form-label">Nilai ke-${nilaiCount} </label>
                    </div>
                    <div class="col-auto">
                      <input type="text" id="nilai${nilaiCount}" name="nilai${nilaiCount}" class="form-control nilai nilaiTemp${nilaiCount}">
                    </div>
                </div>
`;}

// Tambah Kolom Nilai
$("#buttonTambah").on("click",function (event) {
    nilaiCount++;
    $("#nilai").append(nilaiTemplate());
})

// Hapus Kolom Nilai
$("#buttonHapus").on("click",function (event) {
    if (nilaiCount == 1) {
        alert("Tidak bisa menghapus!");
    }else{
        $(".nilaiTemp"+nilaiCount).remove();
        nilaiCount--;
    }
})

$("#submit").on("click",function (event) {
    let hasil = hitungNilai(nilaiCount).toFixed(2);
    $("#hasil").html(hasil);
})
