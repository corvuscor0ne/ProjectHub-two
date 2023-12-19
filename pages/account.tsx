import classes from "./style.pages/account.module.scss"
import Header from "../Components/Header";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from "../Context/AuthContext"; // Путь к вашему контексту авторизации

const Account = () => {
  const router = useRouter();
  const { user, getUser } = useAuth(); // Предполагается, что у вас есть метод getUser для получения пользователя

  useEffect(() => {
    const checkAccount = async () => {
      try {
        const userData = await getUser(); 
        if (!userData) {
          
          router.push('/auth'); 
        }
      } catch (error) {
        console.error('Ошибка при проверке аккаунта:', error);
      }
    };

    checkAccount();
  }, [router, getUser]);


  return (
    <>
    <Header/>

    <div className={classes["Main"]}>
     <div className={classes["Main__Account"]}>
         <div className={classes["Main__Account-block"]}>
             <h1 className={classes["Main__Account-block__text"]}>Портфолио</h1>
             <img width="100" height="100" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
         </div>

     </div>

    </div>
    </>
  );
};

export default Account;
