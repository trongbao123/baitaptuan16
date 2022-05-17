/**
 * khối 1: input  nhập vào 2 số x, n tính tổng: S(n) = x + x^2
+ x^3 + … + x^n

khối 2: khai báo biến
tạo hàm
xác định công thức
dùng vòng lặp
gắn onclick và xuất thẻ inner
 
khối 3: output
*/




function tinhtong(){
    var soX = document.getElementById('soX').value;
    var soN = document.getElementById('soN').value;
    var lt = 1;
    var s = 0;
    for(var i = 1; i <= soN; i++){
        lt = lt * soX;
        s += lt;
    }
    document.getElementById('txttinhtong').innerHTML = s;
}