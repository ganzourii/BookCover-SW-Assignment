$(document).ready(function(){
   $("#generate").click(function(){
   var booktitlex =document.getElementById("booktitle").value;
   var booksubtitlex= document.getElementById("booksubtitle").value;
   var authornamex= document.getElementById("authorname").value;
   var backgroundcolorx= document.getElementById("backgroundcolor").value;
   var publisherx=document.getElementById("publisher").value;
   var publishingyearx=document.getElementById("publishingyear").value;

   var output1='<div style="height:730px; width:595px; background-color:'+backgroundcolorx+' ;"> <h1 style=" font-size:60px; padding-top:100px; text-align:center; color:White; font-family:Century Gothic;">'+booktitlex+'</h1> <h3 style="text-align:center; color:grey; font-family:Harlow Solid;">'+ booksubtitlex + '</h3> <h3 style="  padding-top:120px; text-align:center; color:grey; font-family:Century Gothic;"><span style="font-size:18px;"> Author:</span> <br>' + authornamex + '</h3> <p style="padding-top:180px; text-align:center; font-size:15px font-family:Century Gothic;" >' + publisherx + '<br>'+publishingyearx+'</p>';


document.getElementById("output").innerHTML=output1;

   });

});
