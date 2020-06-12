 import React, { useEffect, useState } from "react";
 import axios from "axios";
 import { getUser, removeUserSession } from "../../Utils/Common";
 import Success from "./Success";

 function CheckoutCard(props) {
     var url_string = window.location.href;
     var url = new URL(url_string);

     var room = url.searchParams.get("classid");

     var bid = url.searchParams.get("bookingid");

     const [value, setValue] = useState(null);

     async function cancelclass() {
         try {
             const response = await axios.put(`/api/teachers/endclass?room=${room}`);
             setValue(response.data);
             console.log(response.data);
             window.location.reload();
         } catch (error) {
             console.error(error);
         }
     }
     async function cancelclassusers() {
         try {
             const response = await axios.put(`/api/users/endclass?room=${room}`);
             setValue(response.data);
             console.log(response.data);
             window.location.reload();
         } catch (error) {
             console.error(error);
         }
     }
     async function book() {
         try {
             const response = await axios.put(
                 `/api/teachers/book3?id=${"as"}&scheduleid=${bid}`
             );
             setValue(response.data);
             console.log(response.data);
         } catch (error) {
             console.error(error);
         }
     }

     const pushroute = () => {

         props.history.push("/");
     };
     useEffect(() => {
         cancelclass();
         cancelclassusers();
         book();

     }, []);

     {
         return ( <div >
             <Success />
             </div>
         );
     }
 }
 export default CheckoutCard;