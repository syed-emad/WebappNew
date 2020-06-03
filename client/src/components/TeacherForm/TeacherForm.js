import React, { useEffect, useState } from "react";

//waitimport { Link } from "react-router-dom";
function TeachersForm() {
  // let { name } = useParams();\var name
  var name;
  var price;
  var time;
  var day;
  var url_string = window.location.href;
  var url = new URL(url_string);
  name = url.searchParams.get("name");
  price = url.searchParams.get("price");
  //console.log("aaaa");
  //   console.log(name);

  return <div></div>;
}

export default TeachersForm;
