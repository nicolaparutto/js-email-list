const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

//dati necessari:
const mailList = document.getElementById('mail-list')

//Creo un ciclo for che mi chiama per 10 volte l'Api:
for (let i = 0; i <= 10; i++){
   axios.get(endpoint).then(res =>{
      //ad ogni chiamata salvo la risposta (in questo caso un'oggetto) in una variabile:
      const data = res.data;

      //destrutturo l'oggetto e prendo soltanto la proprietà che mi interessa:
      const{response} = data;

      //ad ogni ciclo stampo in pagina l'elemento html:
      mailList.innerHTML += `<li>${response}</li>`
      
   });
}



