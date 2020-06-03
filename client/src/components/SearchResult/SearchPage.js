import React, { Component } from "react";
import Search from "./search";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ChatPop from "./ChatPop";
import { getUser, removeUserSession } from "../../Utils/Common";
const { If, Then, Else } = require("react-if");
function SearchPage() {
 const user = getUser();
 var name;
 if (!!user && !!user.name) {
   name = user.name;
 } else {
   name = "a";
 }
   {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}
export default SearchPage;
