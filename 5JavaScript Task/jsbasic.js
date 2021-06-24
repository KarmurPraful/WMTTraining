const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  document.write(person.fullName(),'<br>')

function displayDate(){
    var x=3
    document.write(Date());
}