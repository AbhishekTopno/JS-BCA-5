document.getElementById("sub").addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log("submit button pressed");

    let name = document.getElementById('name').value;   
    let email = document.getElementById('email').value;   
    let dob = document.getElementById('dob').value;    
    let phone = document.getElementById('phone').value;  

console.log(`Name  is : ${name}`)
console.log(`Email is : ${email}`);   
console.log(`Date of birth is : ${dob}`);

    let gender = document.getElementsByName('gender')
    for(let gen of gender)
    {
        if(gen.checked){
            console.log("gender is :",gen.value);
        }
    }
console.log(`phone number is : ${phone}`)    
//checkbox
let subjectList = [];
let subject = document.getElementsByName('subject');

for (let subj of subject) {
    if (subj.checked) { 
        subjectList.push(subj.value);
    }
}
console.log("Selected Subjects:", subjectList);
});

document.getElementById("res").addEventListener('click',function(){
   document.getElementById("StudentForm").reset();
   console.clear();
   console.log("Form has been reset.");
});