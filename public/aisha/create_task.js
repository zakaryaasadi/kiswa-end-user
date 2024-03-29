const a2e = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

$(document).ready(function(){
    $("#send").click(function(){
  
      let name = $("#name").val();
      let phone = $("#phone").val();
      let address = $("#address").val();
      let em = $("#emirate").find(":selected").val();
  
      if(name === ""){
        $("#name_empty").css("display","block");
        return;
      }else{
        $("#name_empty").css("display","none");
      }
  
      if(phone === ""){
        $("#phone_empty").css("display","block");
        return;
      }else{
        $("#phone_empty").css("display","none");
      }
  
      if(address === ""){
        $("#address_empty").css("display","block");
        return;
      }else{
        $("#address_empty").css("display","none");
      }
  
  
      let phoneNo = Number(a2e(phone));
      if(phoneNo < 500000000 || phoneNo > 599999999 || isNaN(phoneNo)){
        $("#phone_incorrect").css("display","block");
        return;
      }else{
        $("#phone_incorrect").css("display","none");
      }
  
  
  
      $("#create-order .loading").css("display","block");
  
      $("#create-order .sent-message").css("display","none");
      $("#create-order .dup-message").css("display","none");
      $("#create-order .error-message").css("display","none");
  
      var country = "المملكة العربية السعودية";
      if( $("#send").hasClass("en")){
        country = "United Arab Emirates";
      }
  
  
      $.post("https://services.kiswaksa.com/api/task/create",
      {
        name: name,
        phone: "+966" + phoneNo,
        address: country + ", " +address,
        created_by: "Website:Aisha",
        country: "KSA"
      },
    function(data, status){
      $("#create-order .loading").css("display","none");
  
      try{
        if(status == "success"){
          let d = JSON.parse(data);
    
          if(d.status == 200){
            $("#create-order .sent-message").css("display","block");
          }else if(d.status == 2010){
            $("#create-order .dup-message").css("display","block");
            $("#date").html(d.results.datetime);
          }else{
            $("#create-order .error-message").css("display","block");
          }
    
        }else{
          $("#create-order .error-message").css("display","block");
        }
      }catch(e){
        $("#create-order .error-message").css("display","block");
      }
    });
  
    return;
  
    });
  
  
    $("#send-message").click(function(){
      $(".send-message .sent-message").css("display","block");
    });
  
  });
  
  