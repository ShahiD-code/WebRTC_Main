
//Check Session
function CheckSession(){
    if(getMobileNumber()===null){
        window.location.href="/join"
    }

}



// Function Error Toast Message
function ErrorToast(msg) {
    toastr.options.positionClass = 'toast-bottom-center';
    toastr.error(msg);
}
// Function Success Toast Messsage
function SuccessToast(msg) {
    toastr.options.positionClass = 'toast-bottom-center';
    toastr.success(msg);
}



//Peer
let MySTUNServer="stun:bn-turn1.xirsys.com";
let MyTurnServer="turn:bn-turn1.xirsys.com:80?transport=udp";
let MyTurnUserName="WxVG5tkzBa_yQADAD_jqq-tEhSMS5vbF5-jA_hKthc-0L2rVJWS-0cQhBMxjdFSzAAAAAGDu3OVTaGFoaWQ=";
let MyTurnPass="BV9mEY56KzC!XbH";
let StunTurnConfig={
    config:{
        iceServers: [{ urls:MySTUNServer}, { username: MyTurnUserName,credential: MyTurnPass,urls:MyTurnServer}]
    }
}




//Global Variable
var EmailRegx = /\S+@\S+\.\S+/;
var MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
var OnlyNumberRegx = /^\d+$/;
var OnlyLaterRegx = /^[A-Za-z\'\s\.\,\-\']+$/;
var BtnSpinner = "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> Processing";
var Spinner = "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>";


// Window Session
function setMobileNumber(Mobile){
    sessionStorage.setItem("MobileNumber",Mobile);
}
function getMobileNumber(){
    return  sessionStorage.getItem("MobileNumber");
}


function setName(Name){
    sessionStorage.setItem("Name",Name);
}
function getName(){
    return sessionStorage.getItem("Name");
}


function setPeerID(PeerID){
    sessionStorage.setItem("PeerID",PeerID);
}
function getPeerID(){
    return sessionStorage.getItem("PeerID");
}



