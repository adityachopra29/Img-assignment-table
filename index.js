async function makeTable() {
    const response = await fetch("https://reqres.in/api/users");
    const jsonData = await response.json();
    const userData =  jsonData.data;
    console.log(userData);

    for(let i = 0; i < userData.length; i++){
      console.log(userData.length)
      let new_row = document.createElement("tr");
      
      let id = userData[i].id;
      idCell = document.createElement("th");
      let idNode = document.createTextNode(id);
      idCell.appendChild(idNode);

      let email = userData[i].email;
      emailCell = document.createElement("th");
      let emailNode = document.createTextNode(email);
      emailCell.appendChild(emailNode);

      let first_name = userData[i].first_name;
      fnameCell = document.createElement("th");
      let fnameNode = document.createTextNode(first_name);
      fnameCell.appendChild(fnameNode);

      let last_name = userData[i].last_name;
      lnameCell = document.createElement("th");
      let lnameNode = document.createTextNode(last_name);
      lnameCell.appendChild(lnameNode);

      let avatar_url = userData[i].avatar;
      avatarCell = document.createElement("th");
      let img = document.createElement("img");
      img.setAttribute("src", avatar_url);
      img.setAttribute("alt", Image);
      avatarCell.appendChild(img)

      new_row.appendChild(idCell)
      new_row.appendChild(emailCell)
      new_row.appendChild(fnameCell);
      new_row.appendChild(lnameCell);
      new_row.appendChild(avatarCell);


      document.getElementById("main-table").appendChild(new_row);
    }
    
}
makeTable();