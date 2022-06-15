const dataVoucher= [
    {voucher: "FAZZFOOD50", minPesanan: 50000,maxVoucher: 50000, discount:0.5},
    {voucher : "DITRAKTIR60", minPesanan: 25000, maxVoucher: 30000, discount:0.6},
];

const FazzFood = (harga,voucher,jarak,pajak) => {
    let MinPesanan= maxVoucher=discount=biayaAntar=potongan=totalPajak=subTotal =0;
    if (voucher != "") {
        let voucherFound = false
        for (i = 0; i < dataVoucher.length; i++) {
           if (voucher === dataVoucher[i].voucher) {
                MinPesanan = dataVoucher[i].minPesanan
                maxVoucher = dataVoucher[i].maxVoucher
                discount= dataVoucher[i].discount
                voucherFound = true
           }
          } 
    
          if (voucherFound && MinPesanan < harga) {
            potongan =  harga * discount
            if (potongan > maxVoucher) {
                potongan = maxVoucher
            }
          }else (potongan < harga) 
          
    }

    if (jarak >=2) {
        biayaAntar = 5000
        for (i = 1; i <= jarak; i++) {
            if (i >2) {
                biayaAntar += 3000
            }
        }
    }else {
        biayaAntar = 3000
    }

    if (pajak) {
        totalPajak = 0.05 * harga
    }
    
    subTotal = harga -potongan + biayaAntar + totalPajak
    console.log(`Harga = ${harga}`)
    console.log(`Potongan = ${potongan}`)
    console.log(`Biaya Antar = ${biayaAntar}`)
    console.log(`Pajak ${totalPajak}`)
    console.log(`Sub Total = ${subTotal}`)
}
FazzFood(20000,'FAZZFOOD50',5,true)