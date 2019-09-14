function myFunction() {
  setTimeout(function() {
    alert("Hola");
  }, 3000);
}

async function myfunction1() {
  await myFunction();
  setTimeout(function() {
    alert("que hubo pirobo");
  }, 1000);
}

myfunction1();
