const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';


const emails = [];
for(let i = 0; i <= 10; i++){
   fetch(endpoint)
   .then(response => response.json())
   .then(data => {
   emails.push(data.response)
   })
}

console.log(emails)






