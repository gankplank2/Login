import { ManageAccount } from "./FirebaseConfig.js";
document.getElementById("close").addEventListener("submit", (event)=>{
    event.preventDefault();


    const  account = new ManageAccount();
    account.signOut()

})