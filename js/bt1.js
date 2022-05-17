/**
 * khối 1: input 1+2+ ...+ n > 10000
 * 
 * khối 2: khỏi tạo hàm
 *  áp dụng vòng lặp 
 *   khoois : output in ra kết quả
 */




function inso(){
    // var s = 0;
    var num = 0;
    // while( s< 10000){
    //     num++;
    //     s += num;
    // }


    for (var i = 0; i < 10000; i++) {
       if (i<10000) {
           i += num;
       }
       num++;
        
    }
  
    document.getElementById('out1').innerHTML ="số nguyên dương nhỏ nhất là:" + num;
}