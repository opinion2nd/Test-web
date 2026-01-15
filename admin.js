function login(){
  const pass=document.getElementById("pass").value;
  if(pass==="admin123"){
    location.href="admin.html";
  }else{
    alert("Wrong Password");
  }
}
