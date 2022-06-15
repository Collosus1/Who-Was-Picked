/*
 window.addEventListener("load", function() {
  const form = document.getElementById('apiForm');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
        return window.location.href = "http://google.com";
      })
  });
});
*/


          function blobby() {
            document.getElementById('vote').value = 'blobby';
            document.getElementById("apiForm").submit();
          };

          function wheelix() {
            document.getElementById('vote').value = 'wheelix';
            document.getElementById("apiForm").submit();
            return false;
          };

          function phlake() {
            document.getElementById('vote').value = 'phlake';
            document.getElementById("apiForm").submit();
            
          };






          
          
