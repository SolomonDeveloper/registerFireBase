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


/* métodos úteis para lembrar:
1- objeto.firestore() = retorna a referência para o banco de dados.
2- objeto.collection(colecao) = retorna qual a coleção será utilizada no Cloud FireStore.
3- objeto.collection(colecao).doc() = o método doc retorna o id do documento dentro da coleção.
*/


//primeiro documento(aluno)
/*
db.collection("turmaA").get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            let aluno = doc.data();
            console.log(aluno.nome)
            console.log(doc.data());
        });
    });

//outro documento utilizado para pegar o documento específico(aluno)
const dbRef = db.collection("turmaA").doc("DcnYt0JrP9hyjtbcQrj3");
dbRef.get()
        .then(doc => {
            let nome = doc.data();
            console.log(nome.nome);
        })


db.collection("turmaA").where("notas.nota1", ">", 6).get()
.then(snapshot =>{
    snapshot.forEach(doc =>{
        let aluno = doc.data();
        console.log(aluno.nome)
    })
});*/


//const turma = "turmaA";
//const db = firebase.firestore();
/*
db.collection(turma).add({
    nome: "Marcos",
    sobrenome: "Scheffer",
    notas: {nota1: 9.6, nota2: 7.5}
}).then(doc =>{
    console.log(`Documento inserido com sucesso ${doc}`);
}).catch(err =>{
    console.log(err);
})
*/


//método add() - adiciona um novo documento
//método set() - Altera as propriedades do documento(cuidado ao usar para nao excluir tudo)
//método update() - Faz um update apenas no que foi alterado
/*
db.collection(turma).doc("novoAluno").update({
    nome: "Luan",
    sobrenome: "Gastón",
    notas: {nota1: 9.2, nota2: 7.9}
}).then(() =>{
    console.log(`Documento inserido com sucesso`);
}).catch(err =>{
    console.log(err);
});

*/

const turma = "turmaA";
const db = firebase.firestore();

function register() {
    const username = document.getElementById("name").value;
    const old = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const d = new Date();

    db.collection(turma).add({
        nome: username,
        age: parseInt(old),
        hometown: country,
        data: d.toDateString(),

    }).then(() => {
        alert('Usuário registrado com sucesso!');
    }).catch(error => {
        alert(error);
    })
}
const submit = document.getElementById("send");

submit.addEventListener('click', register);

