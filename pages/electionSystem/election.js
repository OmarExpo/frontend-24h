
async function loadData(){

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');


// Arguments
const url = "http://localhost:9090/api/allElections";

const table = document.querySelector('table');
 
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
      
  //renderData(data);
     


// Rendering Data
  data.map((userEl) => {
    tableHead.innerHTML= 
    `<tr>
      <th>Id</th>
      <th>electionName</th>
      <th>parties</th>
    </tr>`

    tableBody.innerHTML += 
    `<tr>
      <td>${userEl.id}</td>
      <td>${userEl.electionName}</td>
      <td>${userEl.parties}</td>
      
    </tr>
     `
  });

}

loadData();