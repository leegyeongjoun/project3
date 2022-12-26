
// defer 안 썼을 때
// window.onload=function(){

// }

//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.

const id1=document.getElementById('id1');


let pw1=document.getElementById('pw1');
let pw2=document.getElementById('pw2');
let address1=document.getElementById('address1');
let email1=document.getElementById('email1');
let tel1=document.getElementById('tel1');

// 경고창
let id1Msg=document.getElementById('id1Msg');
let pw1Msg=document.getElementById('pw1Msg');
let pw2Msg=document.getElementById('pw2Msg');
let address1Msg=document.getElementById('address1Msg');
let gender1Msg=document.getElementById('gender1Msg');
let email1Msg=document.getElementById('email1Msg');
let tel1Msg=document.getElementById('tel1Msg');


//아이디
let regId=/^[A-Z][a-zA-Z0-9]{4,}$/;
// 대문자 A-Z로 시작하고 a-zA-Z0-9가 4글자로 끝

//비밀번호
let regPw1=/^.*(?=^.{8,16})(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).*$/;
// 모든문자로 시작해도 되고 8~16자 사이로 사용하고 모든숫자로 사용하고 모든a-zA-Z 사용하고 특수문자를 사용하고 모든문자로 끝내라

//이름
let regName1=/[a-zA-Z가-힇ㄱ-ㅎㅏ-ㅣ]{3,}/;

//이메일
let regEmail1=/^[a-zA-Z0-9]([-_.]?\w+[0-9a-zA-Z])*@[a-zA-z0-9]([-_.]?[a-zA-Z0-9])*.[a-zA-Z]{2,3}$/g;

//전화번호
let regPhone1=/(^01[016789]{1})([0-9]{3,4})[0-9]{4}$/g;

// id1에서 떠나면
id1.addEventListener("blur",function(){
    //id1에있는 value 값이 정규식 표현이아니면
    if(!regId.test(id1.value)){
        id1Msg.style.color='red';
        id1Msg.style.fontSize='12px';
        id1Msg.innerHTML="아이디는 5글자 이상이고 첫글자가 대문자이고 영문자, 숫자만 가능특수문자 X";
        // 값을 비우는 역할
        id1.value="";
    }else{
        id1Msg.style.color='green';
        id1Msg.style.fontSize='12px';
        id1Msg.innerHTML="사용가능한 아이디입니다.";
    }
});



pw1.addEventListener("blur", function(){
    if(!regPw1.test(pw1.value)){
        pw1Msg.style.color='red';
        pw1Msg.style.fontSize='12px';
        pw1Msg.innerHTML="오류:특수문자, 문자, 숫자 포함하고 8이상 16자미만의 값만 가능";
        pw1.value="";
    }else{
        pw1Msg.style.color='green';
        pw1Msg.style.fontSize='12px';
        pw1Msg.innerHTML="올바른형식입니다.";
    }
});


// 비밀번호를 입력하지않고 확인창으로 가려할 때
pw2.addEventListener("focus", function(){
  if(document.getElementById('pw1').value==""){
    alert("비밀번호를 입력해주세요");
    document.getElementById('pw1').focus();
  }
});

//비밀번호가 같지 않을 때와 같을 때
pw2.addEventListener('blur', function(){
    if(pw1.value != pw2.value){
        pw2Msg.style.color='red';
        pw2Msg.style.fontSize='12px';
        pw2Msg.innerHTML="비밀번호가 일치하지 않습니다.";
        console.log("비밀번호가 일치하지 않습니다.");
        return false;
    // }else if(pw1.value == ""){
    //     console.log("비밀번호를 입력해주세요.")
    }else{
        if((pw1.value=='') && (pw2.value =='')){
            pw2Msg.style.color='red';
            pw2Msg.style.fontSize='12px';
            pw2Msg.innerHTML="비밀번호를 입력해주세요.";
        }else{
            pw2Msg.style.color="green";
            pw2Msg.style.fontSize='12px';
            pw2Msg.innerHTML="비밀번호가 일치합니다."
        }
        
    }
});



email1.addEventListener('blur', function(){
    if(!regEmail1.test(email1.value)){
        email1Msg.style.color='red';
        email1Msg.style.fontSize='12px';
        email1Msg.innerHTML="규칙에 어긋납니다"
        console.log("규칙에 어긋납니다");
        email1.value="";
    }else{
        email1Msg.style.color='green';
        email1Msg.style.fontSize='12px';
        email1Msg.innerHTML="올바른형식입니다.";
    }
});


tel1.addEventListener('blur',function(){
    if(!regPhone1.test(tel1.value)){
        tel1Msg.style.color='red';
        tel1Msg.style.fontSize='12px';
        tel1Msg.innerHTML="숫자만 입력가능합니다."
        console.log("숫자만 입력가능합니다.");
        tel1.value="";
    }else{
        tel1Msg.style.color='green';
        tel1Msg.style.fontSize='12px';
        tel1Msg.innerHTML="올바른형식입니다.";
    }
});


//document.getElementById('submit').onclick=function(){}
document.getElementById('submit').addEventListener('click', function(){
    if(id1.value==""){
        alert("아이디를 입력하세요");
        return false;
    }else{
        if(!regId.test(id1.value)){
            alert("오류:아이디는 5글자 이상이고 첫글자가 대문자이고 영문자, 숫자만 가능합니다. 특수문자 X");
            // 값을 비우는 역할
            id1.value="";
            return false;
        }else{
            if(pw1.value==""){
                alert("비밀번호를 입력해주세요");
                return false;
            }else{

            }
        }
    }
    // 만약 성별을 체크하지 않았다면
    if(document.querySelector('[name=gender]:checked')==null){
        gender1Msg.style.color="red";
        gender1Msg.innerHTML="성별을체크해주세요.";
        document.getElementById("").focus();
        // form.라디오버튼[순번].focus();
    }else{
        location.href= "result.html"
    }
});




 // 우편번호 찾기 찾기 화면을 넣을 element
 var element_wrap = document.getElementById('wrap');

 function foldDaumPostcode() {
     // iframe을 넣은 element를 안보이게 한다.
     element_wrap.style.display = 'none';
 }

 function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample4_postcode').value = data.zonecode;
            document.getElementById("sample4_roadAddress").value = roadAddr;
            document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("sample4_extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
}

