async function loadData() {

  // Selectors
  const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');


// Arguments
const url = "http://localhost:9090/api/allParty";

const table = document.querySelector('table');

  const response = await fetch(url);
  const data = await response.json();
  //console.log(data);
      
  //renderData(data);
  // rendering data into the DOM

  data.map((userEl) => {
    tableHead.innerHTML= 
    `<tr>
      <th>Id</th>
      <th>Party Name</th>
      
      
    </tr>`
    tableBody.innerHTML += 
    `<tr>
      <td>${userEl.id}</td>
      <td>${userEl.partyName}</td>
    </tr>
     `
    });
  

};

loadData();
