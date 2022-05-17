/**
 * khối 1 input nhập vào n giai thừa
 * 
 * khối 2:
 * b1: tạo biến 
 * b2: tạo hàm tính toán 
 * b3: onclick 
 * 
 * khối 3: xuất ra kết quả
 */

function tinhgiaithua(){
    var soN = document.getElementById('number').value;
    var giai_thua = 1;
    if (soN == 0 || soN == 1) {
        return giai_thua;
    } else {
        for (var i = 2; i <= soN; i++) {
           giai_thua *= i;
            
        }
    }
    document.getElementById("txttinhgiaithua").innerHTML = "giai thừa của "+ soN + "là :" + giai_thua;
}




