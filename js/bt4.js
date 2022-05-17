






function taodiv(){
   var noidung = "";
   for (var  i = 0; i <= 10 ; i++) {
      if ((i+1) % 2 ==0) {
          noidung += '<div style="background-color:blue" >thẻ div lẻ<div>'+i; 
          
      }else if(i%2 == 0){
         noidung += '<div style="background-color:red"> thẻ div chẵn <div>'+i ;
   
      }
       
   }

   document.getElementById("ketqua").innerHTML = noidung;
}


