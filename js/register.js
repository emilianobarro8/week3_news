function validaLetrayNumero(p_string) {
    var v_salida=null;
    var v_numbers = /[0-9]/g;
    var v_lowerCaseLetters = /[a-z]/g;
    var v_upperCaseLetters = /[A-Z]/g;

    if(!p_string.match(v_numbers)) {
        v_salida="Pass debe contener 1 número";
    } 
    else if (!p_string.match(v_lowerCaseLetters) && !p_string.match(v_upperCaseLetters)){
        v_salida = "Pass debe contener 1 letra";
    }
    
    return v_salida;
    
  }

function f_validaname(v_input) {
    var v_error = null;
    
    if (v_input.length<7){
        v_error = "Debe cargar un nombre de al menos 7 letras";
    }
    else if (v_input.search(" ")==-1){
        v_error = "Debe tener al menos un espacio";
    }    

    document.getElementById("name_error").innerHTML = v_error;
}  

function f_validamail(v_input) {
    var v_error = null;
        
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v_input))
        {
            v_error = "Formato Incorrecto";
        }    
        
    document.getElementById("mail_error").innerHTML = v_error; 
}

function f_validapassword(v_input) {
    var v_error = null;

    if (v_input.length<8){
        v_error = "Pass debe contener al menos 8 caracteres";
    }
    else if (validaLetrayNumero(v_input)!=null){
        v_error = validaLetrayNumero(v_input);
    }
    
    document.getElementById("password_error").innerHTML = v_error; 
}

function f_validarepassword(v_input) {
    var v_error = null;

    if (v_input.length<8){
            v_error = "Pass debe contener al menos 8 caracteres";
    }
    else if (validaLetrayNumero(v_input)!=null){
            v_error = validaLetrayNumero(v_input);
    }
        
    document.getElementById("repassword_error").innerHTML = v_error; 

}

function f_validaage(v_input){
    var v_error = null;
        
    if (!/^[0-9]+$/.test(v_input))
        {
            v_error = "Solo puede contener números enteros";
        }    
    else if(v_input<18){
        v_error = "Solo se permiten mayores de 18 años";
    }    
    
    document.getElementById("age_error").innerHTML = v_error; 
}

function f_validaphone(v_input, v_inputString) {
    var v_error = null;
        
    if (!/^[0-9]+$/.test(v_input))
        {
            v_error = "Solo puede contener números sin espacion ni caracteres especiales";
        }    
    else if(v_inputString.length<7){
            v_error = "Debe contener al menos 7 caracteres";
    }    
        
    document.getElementById("phone_error").innerHTML = v_error; 
}

function f_validaadress(v_input) {
    var v_error = null;     

    if (v_input.length<5){
        v_error = "Debe contener al menos 5 caracteres";
    }
    else if (validaLetrayNumero(v_input)!=null){
        v_error = validaLetrayNumero(v_input);
    }
    else if (v_input.search(" ")==-1){
        v_error = "Debe tener al menos un espacio";
    }   
        
    document.getElementById("adress_error").innerHTML = v_error; 
}

function f_validacity(v_input) {
    var v_error = null;
        
    if (v_input.length<3){
        v_error = "Debe contener al menos 3 caracteres";
    }
        
    document.getElementById("city_error").innerHTML = v_error; 
}

function f_validapostCode(v_input) {
    var v_error = null;
        
    if (v_input.length<3){
        v_error = "Debe contener al menos 3 caracteres";
    }
        
    document.getElementById("postCode_error").innerHTML = v_error; 
}

function f_validaidCard(v_input) {
    var v_error = null;
        
    if (!/^[0-9]+$/.test(v_input))
        {
            v_error = "Solo puede contener números sin espacion ni caracteres especiales";
        } 
    else if (v_input.length!=7 && v_input.length!=8){
        v_error = "Debe contener 7 u 8 caracteres";
    }
        
    document.getElementById("idCard_error").innerHTML = v_error; 
}

window.onload= function (){
    var getinputname = document.getElementById("name");
    var getinputmail = document.getElementById("mail");
    var getinputpassword = document.getElementById("password");
    var getinputrepassword = document.getElementById("repassword");
    var getinputage = document.getElementById("age");
    var getinputphone = document.getElementById("phone");
    var getinputadress = document.getElementById("adress");
    var getinputcity = document.getElementById("city");
    var getinputpostCode = document.getElementById("postCode");
    var getinputidCard = document.getElementById("idCard");
    var getbuttonsend= document.getElementById("send");

    getinputname.addEventListener('blur',function(){        
        var v_input = document.getElementById("name").value;
        f_validaname(v_input);                     
    })

    getinputmail.addEventListener('blur',function(){        
        var v_input = document.getElementById("mail").value;
        f_validamail(v_input);
    })

    getinputpassword.addEventListener('blur',function(){        
        var v_input = document.getElementById("password").value;
        f_validapassword(v_input);            
    })

    getinputrepassword.addEventListener('blur',function(){        
        var v_input = document.getElementById("repassword").value;
        f_validarepassword(v_input);            
    })

    getinputage.addEventListener('blur',function(){        
        var v_input = +document.getElementById("age").value;
        f_validaage(v_input);        
    })

    getinputphone.addEventListener('blur',function(){        
        var v_input = +document.getElementById("phone").value;
        var v_inputString = document.getElementById("phone").value;
        f_validaphone(v_input, v_inputString);        
    })


    getinputadress.addEventListener('blur',function(){        
        var v_input = document.getElementById("adress").value;
        f_validaadress(v_input);
    })

    getinputcity.addEventListener('blur',function(){        
        var v_input = document.getElementById("city").value;
        f_validacity(v_input);
    })

    getinputpostCode.addEventListener('blur',function(){        
        var v_input = document.getElementById("postCode").value;
        f_validapostCode(v_input);
    })

    getinputidCard.addEventListener('blur',function(){        
        var v_input = document.getElementById("idCard").value;
        f_validaidCard(v_input);        
    })

    getinputname.addEventListener('focus',function(){               
        document.getElementById("name_error").innerHTML = null;             
    })

    getinputmail.addEventListener('focus',function(){               
        document.getElementById("mail_error").innerHTML = null;             
    })

    getinputpassword.addEventListener('focus',function(){               
        document.getElementById("password_error").innerHTML = null;             
    })

    getinputrepassword.addEventListener('focus',function(){               
        document.getElementById("repassword_error").innerHTML = null;             
    })

    getinputage.addEventListener('focus',function(){               
        document.getElementById("age_error").innerHTML = null;             
    })

    getinputphone.addEventListener('focus',function(){               
        document.getElementById("phone_error").innerHTML = null;             
    })

    getinputadress.addEventListener('focus',function(){               
        document.getElementById("adress_error").innerHTML = null;             
    })

    getinputcity.addEventListener('focus',function(){               
        document.getElementById("city_error").innerHTML = null;             
    })

    getinputpostCode.addEventListener('focus',function(){               
        document.getElementById("postCode_error").innerHTML = null;             
    })

    getinputidCard.addEventListener('focus',function(){               
        document.getElementById("idCard_error").innerHTML = null;             
    })

    getbuttonsend.onclick = function() {
        var v_error=null;
        var v_msj=null;

        var v_input = document.getElementById("name").value;
        f_validaname(v_input); 
        var v_input = document.getElementById("mail").value;
        f_validamail(v_input);
        var v_input = document.getElementById("password").value;
        f_validapassword(v_input); 
        var v_input = document.getElementById("repassword").value;
        f_validarepassword(v_input); 
        var v_input = +document.getElementById("age").value;
        f_validaage(v_input); 
        var v_input = +document.getElementById("phone").value;
        var v_inputString = document.getElementById("phone").value;
        f_validaphone(v_input, v_inputString);   
        var v_input = document.getElementById("adress").value;
        f_validaadress(v_input);
        var v_input = document.getElementById("city").value;
        f_validacity(v_input);
        var v_input = document.getElementById("postCode").value;
        f_validapostCode(v_input);
        var v_input = document.getElementById("idCard").value;
        f_validaidCard(v_input); 

        if (document.getElementById("name_error").innerHTML!=""){
            v_error="CAMPO NAME: "+document.getElementById("name_error").innerHTML;
        }
        if (document.getElementById("mail_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO MAIL: "+document.getElementById("mail_error").innerHTML;
            }
            else {
                v_error= "CAMPO MAIL: " + document.getElementById("mail_error").innerHTML;
            }
        }
        if (document.getElementById("password_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO PASS: "+document.getElementById("password_error").innerHTML;
            }
            else {
                v_error= "CAMPO PASS: " + document.getElementById("password_error").innerHTML;
            }
        }
        if (document.getElementById("repassword_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO REPEAT PASS: "+document.getElementById("repassword_error").innerHTML;
            }
            else {
                v_error= "CAMPO REPEAT PASS: " + document.getElementById("repassword_error").innerHTML;
            }                        
        }
        if (document.getElementById("password_error").innerHTML=="" && 
            document.getElementById("repassword_error").innerHTML=="" &&
            document.getElementById("password").value!=document.getElementById("repassword").value){         
            if (v_error!=null) {
                v_error=v_error + "\n" + "PASS y REPEAT PASS: No Coinciden los valores";
            }
            else {
                v_error= "PASS y REPEAT PASS: No Coinciden los valores";
            }
        } 
        if (document.getElementById("age_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO AGE: "+document.getElementById("age_error").innerHTML;
            }
            else {
                v_error= "CAMPO AGE: " + document.getElementById("age_error").innerHTML;
            }                        
        }   
        if (document.getElementById("phone_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO PHONE: "+document.getElementById("phone_error").innerHTML;
            }
            else {
                v_error= "CAMPO PHONE: " + document.getElementById("phone_error").innerHTML;
            }                        
        }   
        if (document.getElementById("adress_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO ADRESS: "+document.getElementById("adress_error").innerHTML;
            }
            else {
                v_error= "CAMPO ADRESS: " + document.getElementById("adress_error").innerHTML;
            }                    
        }   
        if (document.getElementById("city_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO CITY: "+document.getElementById("city_error").innerHTML;
            }
            else {
                v_error= "CAMPO CITY: " + document.getElementById("city_error").innerHTML;
            }                    
        }   
        if (document.getElementById("postCode_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO POST CODE: "+document.getElementById("postCode_error").innerHTML;
            }
            else {
                v_error= "CAMPO POST CODE: " + document.getElementById("postCode_error").innerHTML;
            }                    
        }   
        if (document.getElementById("idCard_error").innerHTML!=""){
            if (v_error!=null) {
                v_error=v_error + "\n" + "CAMPO ID: "+document.getElementById("idCard_error").innerHTML;
            }
            else {
                v_error= "CAMPO ID: " + document.getElementById("idCard_error").innerHTML;
            }                    
        }  

        if (v_error!=null){
            v_msj = "ERRORES:" + "\n" + v_error;
        }
        else{
            v_msj = "SE HAN CARGADO LOS SIGUIENTES DATOS:" + "\n" + 
            "NAME: "+ document.getElementById("name").value + "\n" + 
            "MAIL: "+ document.getElementById("mail").value + "\n" +  
            "PASS: "+ document.getElementById("password").value + "\n" + 
            "REPEAT PASS: "+ document.getElementById("repassword").value + "\n" + 
            "AGE: "+ document.getElementById("age").value + "\n" + 
            "PHONE: "+ document.getElementById("phone").value + "\n" + 
            "ADRESS: "+ document.getElementById("adress").value + "\n" + 
            "CITY: "+ document.getElementById("city").value + "\n" + 
            "POST CODE: "+ document.getElementById("postCode").value + "\n" + 
            "ID: "+ document.getElementById("idCard").value ;
        }

        alert(v_msj);

    }
    
}