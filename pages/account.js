import classes from "./style.pages/account.module.scss"
import Header from "../Components/Header";
import axios from 'axios';
import { useEffect, useState } from 'react';


const Account = () => {
  return (
    <>
    <Header/>

    <div className={classes["Main"]}>
     <div className={classes["Main__Account"]}>
         <div className={classes["Main__Account-block"]}>
             <h1 className={classes["Main__Account-block__text"]}>Портфолио</h1>
         </div>

     </div>

    </div>
    </>
  );
};

export default Account;
