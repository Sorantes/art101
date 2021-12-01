


var myUrl = "https://xkcd.com/4/info.0.json"
//var myUrl = "https://yesno.wtf/api"


$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      //$("#output").html(JSON.stringify(data));
      //var imgUrl = "https://cataas.com" + data.url;
      var titleTxt = data.answer;
      $("#title").html(titleTxt);
      var imgUrl = data.img;
      var imgTag = "<img src=" + imgUrl + ">";
      console.log(imgUrl, imgTag);
      $("#image").html(imgTag);
      //$("#image").html(imgUrl);
  })
  // If the request fails
  .fail(function(request,error) {
      console.log(request, error);

	})

}
