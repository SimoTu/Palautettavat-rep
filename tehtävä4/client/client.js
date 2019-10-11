function loadApp() {
  console.log("loading application");

  // Bind AJAX call to the click event of Button #lataa
  $('#lataa').click(function(event) {
    // TODO: selvitä mikä merkitys on ao. rivillä
    event.preventDefault();

    // The server must be bind to localhost (for testing) as we don't have a FQDN or HTTP proxy available
    //TODO: correct URI
    $.get("http://localhost:8080/api/v1/athletes/", function(data) {
      console.log("Sending HTTP GET to server");
    })
    .done(function( data ) {
      console.log("response from server :", data);
      //TODO: esitä vastaanotettu data webbisivulla, eli 
      // rakenna tässä kohtaa taulukko table+th+tr+td-elementein
      // palvelimelta tuleva vastaus on data-muuttujassa JavaScript-oliona
      let table = "<table id= table1><tbody><tr><th>Firstname</th><th>LastName</th><th>Nickname</th><th>Age</th><th>Weight</th><th>Sports</th><th>Stats</th><th>Image</th>"+
      "</tr>";


      for (i in data) {
      table= table + "<tr>";
      table= table + "<td>";
      table = table + data[i].firstname;
      table = table + "</td>";
      table= table + "<td>";
      table = table + data[i].lastname;
      table = table + "</td>";
      table= table + "<td>";
      table = table + data[i].nickname;
      table = table + "</td>";
      table= table + "<td>";
      table = table + data[i].age;
      table = table + "</td>";
      table= table + "<td>";
      table = table + data[i].weight;
      table = table + "</td>";
      table= table + "<td>";
      table = table + data[i].sports;
      table = table + "</td>";
      table= table + "<td>";
      table = table + data[i].stats;
      table = table + "</td>";
      table= table + "<td>";
      table = table +"<img class='kuva' src='" + data[i].img + "'></img>";
      table = table + "</td>";
      table = table + "</tr>";
      }

      table = table + "</tbody></table>";
      let ee = document.getElementById('athletes').innerHTML = "<p>" + JSON.stringify(data) + "</p>";

      let athletics = document.getElementById('athletes').innerHTML = table;

    })
    .fail(function(err) {
      console.log("error");
    })
    .always(function() {
      console.log("finished");
    });
  });
}