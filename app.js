var firebaseConfig = {
    apiKey: "AIzaSyCEKrl3go5XUq2D17qAd_QrEqdsDieMYbo",
    authDomain: "colegio-67947.firebaseapp.com",
    projectId: "colegio-67947",
    storageBucket: "colegio-67947.appspot.com",
    messagingSenderId: "532396826021",
    appId: "1:532396826021:web:d4d23d2d146b3a4d435c4c",
    measurementId: "G-7E01W013BQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize Cloud Store
const turma = "turmaA";
const db = firebase.firestore();

//variables for register user
const idReg = document.getElementById("idReg");
const usernameReg = document.getElementById("name");
const oldReg = document.getElementById("age");
const countryReg = document.getElementById("country");
const d = new Date();

function registerUser() {
    const nameVal = usernameReg.value;
    const oldVal = oldReg.value;
    const countryVal = countryReg.value;

    db.collection(turma).doc(idReg.value).set({
        nome: nameVal,
        age: parseInt(oldVal),
        hometown: countryVal,
        data: d.toString(),

    }).then(() => {
        alert('Usuário registrado com sucesso!');
    }).catch(error => {
        alert(error);
    })
};

//variable for register Window
const btnReg = document.getElementById("register-user");
const btnPrincipal = document.getElementById("box-principal");
const regWindow = document.getElementById("registerWindow");

//register Window
function registerWindow(){ 
    btnReg.addEventListener('click', () =>{
        btnPrincipal.style.display = "none";
        regWindow.style.display = "flex";
    }) 
}
registerWindow();

//send data to cloudstore firebase 
const submitReg = document.getElementById("sendReg");
submitReg.addEventListener('click', registerUser);

//variable to edit user
const idEdt = document.getElementById("idEdt");
const nameEdt = document.getElementById("nameEdt");
const ageEdt = document.getElementById("ageEdt");
const countryEdt = document.getElementById("countryEdt");

function editUser(){
    db.collection(turma).doc(idEdt.value).update({
        nome: nameEdt.value,
        age: ageEdt.value, 
        hometown: countryEdt.value, 
         data: d.toString(),
    }).then(() =>{
        alert("Informações do aluno foram alteradas");
    }).catch(err =>{
        alert(`Nenhum documento ID de encontrado \n\n ${err}`);      
    });  
}

//variable for edit window
const btnEdit = document.getElementById("edit-user");
const edtWindow = document.getElementById("editWindow");

function editWindow(){
    btnEdit.addEventListener('click', () =>{
        btnPrincipal.style.display = "none";
        edtWindow.style.display = "flex";
    })      
};
editWindow();

//send data to cloudstore firebase 
const submitEdt = document.getElementById("sendEdt");
submitEdt.addEventListener('click', editUser);


//variables for remove window
const idDel = document.getElementById("idDel");

function removeUser(){
    db.collection(turma).doc(idDel.value).delete().then(() =>{  
        alert("documento removido com sucesso!");
    }).catch(err =>{
        alert(`erro ao remover o documento\n\n ${err}`);
    })
}

//variable to delete document
const btnRemove = document.getElementById("delete-user");
const removeWindow = document.getElementById("deleteWindow");

function deleteWindow(){
    btnRemove.addEventListener('click', ()=>{
        btnPrincipal.style.display = "none";    
        removeWindow.style.display = "flex";
    })
}
deleteWindow();

const btnDel = document.getElementById("sendDel");
btnDel.addEventListener('click', removeUser);





