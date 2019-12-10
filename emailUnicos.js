var emails = [
    "test.mail+alex@kavak.com",
    "test.e.mail+bob.chaty@kavak.com",
    "testemail+david@ka.vak.com"

]
var emailsUnicos = function(emails) {
 var separador = "@"
  emails.forEach(e => {
    e.split(separador).forEach(element => {
      if (element.includes('.com')) {
        if (element.split('.').length > 2) {
          console.log('El dominio del email no es valido: ' + e);
        }
      } else {
        console.log(element.split('+'));
        console.log(element.replace('.', ''));
      }
    });
  });
};

emailsUnicos(emails);