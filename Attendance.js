let list = [];
const attendanceBox = () =>{
let nameHolder = document.querySelector('#name').value;
let dateHolder = document.querySelector('#date').value;
let branchHolder = document.querySelector('#branch').value;
let result = document.querySelector("#Attendance-list");
 

if(nameHolder === ""){
    alert("please enter your name");
    return;
}
if(dateHolder === ""){
    alert("please enter date");
    return;
}
if(branchHolder === ""){
    alert("Please enter branch");
    return;
}
alert("Do you want to add the attendance?");
       
    

     const record = {nameHolder,dateHolder,branchHolder};
     list.push(record);
    

    const newRow = result.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = nameHolder;
    cell2.textContent = dateHolder;
    cell3.textContent = branchHolder;

    
    const actionCell = newRow.insertCell(3);
    actionCell.style.display = "flex";
    actionCell.style.justifyContent = "center";
    actionCell.style.alignItems = "center";
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ="Delete";
    deleteBtn.style.backgroundColor = "red"; 
    deleteBtn.style.color = "white";
    deleteBtn.style.witdh = "70px";
    deleteBtn.style.height= "25px";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "4px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener('click', () => {
        alert("Do you want to delete");
        result.removeChild(newRow);
    });
    actionCell.appendChild(deleteBtn);

     

    document.querySelector('#name').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#branch').value = "";

   
}




