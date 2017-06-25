var $j = jQuery.noConflict();
$j( function() {
    
    $j( "#from" ).datepicker({maxDate: $j( "#to" ).attr( "value" ), changeMonth: true, changeYear: true });
  

    $j( "#to" ).datepicker({minDate: $j( "#from" ).attr( "value" ), changeMonth: true, changeYear: true });  
    
    


  } );


function validate(){
   
   var start_dt = document.forms["rangeDate"]["start_dt"].value;
   var end_dt = document.forms["rangeDate"]["end_dt"].value;
   start_dt = new Date(start_dt.slice(6,10), start_dt.slice(3,5), start_dt.slice(0,2)) ;
   end_dt = new Date(end_dt.slice(6,10), end_dt.slice(3,5), end_dt.slice(0,2)) ;
   //alert (start_dt);
   //alert (end_dt);
   if (start_dt > end_dt){
      alert('Будьте уважні! Ви ввели невірний діапазон дат!');
      return false;
   }
}