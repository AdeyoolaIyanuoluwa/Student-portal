var studentInfo = []
if(localStorage.studentDetails){
    studentInfo = JSON.parse(localStorage.getItem('studentDetails'))
}


function signUp(){
    let regexForEmail = /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
    let regexForName = /^[\w]{1,}$/
    let regexForPassword = /^[\d]{4,}$/
    var portal = {
            lastName : lastname.value,
            firstName : firstname.value,
            Email : email.value,
            Password : password.value
     }
        

    if((lastName = lastname.value) && (firstName = firstname.value) && (Email = email.value)){
        studentInfo.push(portal) 
        added.innerText = ("STUDENT ADDED")
        added.style.backgroundColor = "white" 
        lastname.value = ""
        firstname.value = ""
        email.value = ""
        password.value = ""
        window.location.href = "login.html"
    }
    if(regexForEmail.test(email.value )== false){
            valEmail.innerHTML="Incorrect Email address"
    }
    if(regexForPassword.test(password.value )== false){
            valPassword.innerHTML="Password should contain more than 4 characters"
    }
    else {
        alert("PLEASE FILL THE EMPTY SPACES")
    }
    localStorage.setItem("studentDetails",JSON.stringify(studentInfo))
 }


 function search(){
    // var infoSearch = Search.value
    var randomNumber = "SQI" + Math.round (Math.random()*100)
    var date = new Date()
    date.getDay;

    var studentInfo = JSON.parse(localStorage.getItem('studentDetails'))
    var infoSearch = Search.value
        if(infoSearch = studentInfo[Search.value]){
            show.innerText = ("THE DETAILS ARE: " + "NAME: " + studentInfo[Search.value].lastName + " " + studentInfo[Search.value].firstName + " " + "EMAIL: " + studentInfo[Search.value].Email + " " + "PASSWORD: " + studentInfo[Search.value].Password + " " + "MATRIC NO " + " " + randomNumber + "DATE " + " " + date);
        }
        else{
            show.innerText = "INVALID"
            show.style.color = "red"
        }
    
}
 
   function login(){
        var myUseremail = userEmail.value 
        var userPassword = passWord.value
        var studentInfo = JSON.parse(localStorage.getItem('studentDetails'))
        var found = false
        for (let index = 0; index < studentInfo.length; index++) {
                if(studentInfo[index].Email==myUseremail && studentInfo[index].Password==userPassword){
                    found = true 
                }

        }
        if(found){
            window.location.href = "search.html"
        }
        else{
            alert("INVALID")
        }
   }

   function allDetails(){
    window.location.href = "table.html"
   }


    // function checkTable(){
    //     myTable.innerHTML = ""
    //     var studentInfo = JSON.parse(localStorage.getItem('studentDetails'))
    // for (var index = 0; index < studentInfo.length; index++) {
    //    myTable.innerHTML += `
    //    <tr>
    //         <td> ${index+1}</td>
    //         <td>${studentInfo[index].firstName}</td>
    //         <td>${studentInfo[index].lastName}</td>
    //         <td>${studentInfo[index].Email}</td>
    //         <td>
    //             <button class="btn btn-danger fw-bold"> Delete </button>
    //             <button class="btn btn-info fw-bold"> Edit </button>
    //         </td> 
    //     </tr>`
    // }
    // }

    const checkTable = ()=>{
        myTable.innerHTML = ""
        myTable.innerHTML +=`
        <tr class="fs-4">
             <td>S/N</td>
             <td>First Name</td>
             <td>Last Name</td>
             <td>Email</td>
             <td>Actions</td>
            </tr>
        `
        // let studentInfo = JSON.parse(localStorage.getItem('studentDetails'))
        studentInfo.map((student,index)=>{
            myTable.innerHTML += `
            <tr>
                 <td> ${index+1}</td>
                 <td>${student.firstName}</td>
                 <td>${student.lastName}</td>
                 <td>${student.Email}</td>
                 <td>
                     <button class="btn btn-danger fw-bold" onclick="deleteStudent(${index})"> Delete </button>
                     <button class="btn btn-info fw-bold" onclick="editStudent(${index})"> Edit </button>
                 </td> 
             </tr>`
        })
    }
    
    const deleteStudent = (index)=>{
        let filteredStudent = studentInfo.filter((_,ind)=>(index!=ind))
            studentInfo = filteredStudent
            checkTable()
    }
  const editStudent=(index)=>{
    studentInfo[index]={
            firstName:"adeola",
            lastName: "adesola",
            Email: "alonge@gmail.com",
        }
        checkTable()
  }
    







