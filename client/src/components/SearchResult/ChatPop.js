import React, { Component } from "react";
import Search from "./search";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./CharPop.css";
function ChatPop() {
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  {
    return (
      <div>
        <button class="open-button" onClick={openForm}>
          <i class="fa fa-comment fa-lg"></i>
        </button>

        <div class="chat-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>
              <li>
                Message
                <span class="close" onClick={closeForm}>
                  &times;
                </span>
              </li>
            </h1>

            <label for="msg">
              <b>Message</b>
            </label>
            <textarea
              placeholder="Type message.."
              name="msg"
              required
            ></textarea>

            <button type="submit" class="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ChatPop;
