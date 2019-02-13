// Adrian Davidson
// R00138984


// ========================================
//          Price of the logo
//  ==========================================
var logo_cost = new Array();
 logo_cost["playstation1"]=10;
 logo_cost["Cartoon_Network"]=10;
 logo_cost["Mobile_logo"]=12;

 // ========================================
 //           Price of the size
 //  ==========================================
 var size_cost = new Array();
 size_cost["s"]=10;
 size_cost["m"]=10;
 size_cost["l"]=12;
 size_cost["xl"]=15;

 // ========================================
 //         Price of the tee's Colours
 //  ==========================================
 var TeeColours= new Array();
 TeeColours["null"]=10;
 TeeColours["black"]=10;
 TeeColours["grey"]=10;
 TeeColours["red"]=10;
 TeeColours["green"]=10;
 TeeColours["blue"]=10;


 // ========================================
 //  Gets the colour of the tee's Price
 //  ==========================================
 function getTeeColourPrice()
 {
     var teeColorPrice=0;
     var theForm = document.forms["teeForm"];
      var selectedColour = theForm.elements["colors"];
     teeColorPrice = TeeColours[selectedColour.value];
     return teeColorPrice;
 }

 // ========================================
 //       Gets the logos's Price
 //  ==========================================
 function getLogoPrice(){
    var LogoPrice=0;
    var theForm = document.forms["teeForm"];
    var Cartoon_logo = theForm.elements["Cartoon_logo"];
    for(var i = 0; i < Cartoon_logo.length; i++){
        if(Cartoon_logo[i].checked){
            LogoPrice = logo_cost[Cartoon_logo[i].value];
            break;
        }
    }
    return LogoPrice;
}

// ========================================
//      Gets the sizes of the tee's Price
//  ==========================================
 function getSizePrice(){
    var sizePrice=0;
    var theForm = document.forms["teeForm"];
    var sizes = theForm.elements["sizes"];
    for(var i = 0; i < sizes.length; i++){
        if(sizes[i].checked){
            sizePrice = size_cost[sizes[i].value];
            break;
        }
    }
    return sizePrice;
}

// ========================================
//        Gets the pre set tee's price
//  ==========================================

var presetCost= new Array();
presetCost["RocknRoll_tee"]=20;
presetCost["Bones_tee"]=25;
presetCost["cricle_hand_drawn_tee"]=15;
presetCost["Blackismycolor_tee"]=10;
presetCost["shave_tee"]=20;
presetCost["SLoth_tee"]=30;

function getPresetPrice(){
   var presetTee=0;
   var theForm = document.forms["teeForm"];
   var presetTeePrice = theForm.elements["pre_set_Tee"];
   for(var i = 0; i < presetTeePrice.length; i++){
       if(presetTeePrice[i].checked){
           presetTee = presetCost[presetTeePrice[i].value];
           break;
       }
   }
   return presetTee;
}

// ========================================
//            Gets the total cost
//  ==========================================
function calculateTotal() {

    var teePrice = getLogoPrice() + getSizePrice() +getTeeColourPrice();

	if(teePrice != 0){
	    var divobj = document.getElementById('cost');
	    divobj.style.display='block';
		divobj.innerHTML = "Total Price For the tee €" + teePrice;
	}
}

function calculateTotal2() {

    var presetteePrice = getPresetPrice();

	if(presetteePrice != 0){
	    var divobj2 = document.getElementById('cost2');
	    divobj2.style.display='block';
		divobj2.innerHTML = "Total Price For the tee €" + presetteePrice;
	}
}



// ========================================
//         Changes the tee's colour
//  ==========================================

function picktee(option)
{
  if(option == "black")
  {
    document.getElementById('tee').src = 'tee.jpg';
  }
  if(option == "grey")
  {
    document.getElementById('tee').src = 'teeGrey.png';
  }
  if(option == "red")
  {
    document.getElementById('tee').src = 'teemarl.png';
  }
  if(option == "green")
  {
    document.getElementById('tee').src = 'teegreen.png';
  }
  if(option == "blue")
  {
    document.getElementById('tee').src = 'teeblue.png';
  }
}

// ========================================
//         Changes the tee's logo
//  ==========================================
function check_value(fieldvalue)
{
    switch(fieldvalue)
    {
        case 1:

            document.getElementById("teelogo").src = "playstation1.png";
                break;

        case 2:

            document.getElementById("teelogo").src = "CN_Logo.png";
                break;

        case 3:

            document.getElementById("teelogo").src = "logos.png";
                break;
    }
}

// ========================================
//         Changes the tee's size
//  ==========================================
function size_value(fieldvalue)
{
    switch(fieldvalue)
    {
        case 1:

            document.getElementById("size").innerHTML = 'Size: Small';
                break;

        case 2:

            document.getElementById("size").innerHTML = 'Size: Medium';
                break;

        case 3:

            document.getElementById("size").innerHTML = 'Size: Large';
                break;
        case 4:

            document.getElementById("size").innerHTML = 'Size: X-Large';
                break;
    }
}
