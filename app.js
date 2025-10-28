function sendEmail() {
    var params = {
        enter : document.getElementById("enter").value,
    }
    const serviceID = "service_xjtnqq8" ;   
    const templateID = "template_iii18ia";

   emailjs.send(serviceID, templateID, params)
   .then (
    res => {
        document.getElementById("enter").value ="";
        console.log(res);
    })
    .catch((err) => console.log(err)); 
}
