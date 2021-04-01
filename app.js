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
        $(".popup").html("<p> Usuário cadastrado com sucesso!").fadeIn("slow").fadeOut(2000);
    }).catch(err => {
        alert(`Nada preenchido! \n\n ${err}`);
    })
};

//variable for register Window
const btnReg = document.getElementById("register-user");
const btnPrincipal = document.getElementById("box-principal");
const regWindow = document.getElementById("registerWindow");

$("#register-user").click(() => {
    $("#box-principal").hide();
    $("#registerWindow").fadeIn();
    regWindow.style.display = "flex";
});

//send data to cloudstore firebase 
const submitReg = document.getElementById("sendReg");
submitReg.addEventListener('click', registerUser);

$(".arrow").click(() => {
    $("#box-principal").show()
    $("#registerWindow").hide();
})

//variable to edit user
const idEdt = document.getElementById("idEdt");
const nameEdt = document.getElementById("nameEdt");
const ageEdt = document.getElementById("ageEdt");
const countryEdt = document.getElementById("countryEdt");

function editUser() {
    db.collection(turma).doc(idEdt.value).update({
        nome: nameEdt.value,
        age: ageEdt.value,
        hometown: countryEdt.value,
        data: d.toString(),
    }).then(() => {
        $(".popup").html("<p> Informações alteradas com sucesso!").fadeIn("slow").fadeOut(2000);
    }).catch(err => {
        alert(`Nenhum documento ID de encontrado \n\n ${err}`);
    });
};

//variable for edit window
const btnEdit = document.getElementById("edit-user");
const edtWindow = document.getElementById("editWindow");

$("#edit-user").click(() => {
    $("#box-principal").hide();
    $("#editWindow").fadeIn();
    edtWindow.style.display = "flex";
});

//send data to cloudstore firebase 
const submitEdt = document.getElementById("sendEdt");
submitEdt.addEventListener('click', editUser);

$(".arrow").click(() => {
    $("#box-principal").show();
    $("#editWindow").hide();
})

//variables for remove window
const idDel = document.getElementById("idDel");

function removeUser() {
    db.collection(turma).doc(idDel.value).delete().then(() => {
        $(".popup").html("<p> Documento removido com sucesso!").fadeIn("slow").fadeOut(2000);
    }).catch(err => {
        alert(err);
    });
};

//variable to delete document
const btnRemove = document.getElementById("delete-user");
const removeWindow = document.getElementById("deleteWindow");

$("#delete-user").click(() => {
    $("#box-principal").hide();
    $("#deleteWindow").fadeIn();
    removeWindow.style.display = "flex";
});

const btnDel = document.getElementById("sendDel");
btnDel.addEventListener('click', removeUser);

$(".arrow").click(() => {
    $("#box-principal").show();
    $("#deleteWindow").hide();
});






