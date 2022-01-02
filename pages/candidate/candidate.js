
async function loadData() {

   // Arguments
   const url = "http://localhost:9090/api/allCandidates";
   
   const table = document.querySelector('table');

  const tableHead = document.querySelector('thead');
  const tableBody = document.querySelector('tbody');

   
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
        
    //renderData(data);

    data.map((userEl) => {
      tableHead.innerHTML= 
      `<tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>`
      tableBody.innerHTML += 
      `<tr>
        <td>${userEl.id}</td>
        <td>${userEl.firstName}</td>
        <td>${userEl.lastName}</td>
      </tr>
       `
    });
       
  };
  loadData();
  
  // Anonymous Function for rendering data into the DOM
  
  
//  loadIntoTable(url, table);




