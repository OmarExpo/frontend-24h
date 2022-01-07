loadData();


async function loadData() {

   // Arguments and Selectors
   const url = "http://localhost:8080/api/allCandidates";
   const votesUrl = 'http://localhost:8080/api/getVotes'; // PUT - method for votesUrl
   
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
            <th>Number of Votes</th>
          </tr>`
          tableBody.innerHTML += 
          `<tr>
            <td>${userEl.id}</td>
            <td>${userEl.firstName}</td>
            <td>${userEl.lastName}</td>
            <td>${userEl.votes}</td>
          </tr>
          `
        });

      // Start the candidate votes 
      fetch(votesUrl, {
        method: 'PUT'
      })
      .then(res => res.json())
      .then(() => location.reload())
      
  };
 
  
  




