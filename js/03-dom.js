$(document).ready(function () {

  $("#03-dom-form").submit(function (event) {
    // Evitar la acción predeterminada del formulario
    event.preventDefault();

    // Aquí puedes realizar cualquier acción que desees con los datos del formulario
    let inputValue = $("#03-dom-input").val();
    console.log("Valor del input:" + inputValue);
    let url = 'https://www.' + inputValue;
    let href = "href='" + url + "'";
    let x = "<li><a " + href + ">" + inputValue + "</a></li>";



    // Realizar la solicitud AJAX
    $.ajax({
      url: url,
      type: "HEAD", // Usa el método HEAD para obtener solo los encabezados sin el cuerpo de la respuesta
      success: function (data, status, xhr) {
        // Verificar si el código de estado es 200
        if (xhr.status === 200 || xhr.status === 0 ) {
          $("#03-dom-ul").append(x);
        } else {
          $("#03-dom-input").css('border', '2px solid red')
          $("#03-dom-input-btn").attr('value', 'not found')
          setTimeout(() => {
            $("#03-dom-input").css('border', '2px solid black')
            $("#03-dom-input-btn").attr('value', 'enter')
          }, 2000);
        }
      },
      error: function (xhr, status, error) {
        
        $("#03-dom-input").css('border', '2px solid red')
        $("#03-dom-input-btn").attr('value', "error: " + error)
        setTimeout(() => {
          $("#03-dom-input").css('border', '2px solid black')
          $("#03-dom-input-btn").attr('value', 'enter')
        }, 2000);
      } 
    });
  });


});