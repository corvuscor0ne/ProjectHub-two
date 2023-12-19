import classes from "./style.pages/studentProjects.module.scss";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import { joinProject } from "../services/projectService";

const Projects = () => {
    const handleJoinProject = async () => {
        try {
          const result = await joinProject(); // Вызов функции для присоединения к проекту
          console.log('Успешно присоединились к проекту:', result);
          // Обработка результата, например, обновление состояния или переход на другую страницу
        } catch (error) {
          console.error('Ошибка при присоединении к проекту:', error);
          // Обработка ошибки, например, вывод сообщения пользователю
        }
      };



    return (
        <>
            <Header />

            <div className={classes['Main']}>
                <div className={classes['Main__Projects']}>
                    <h1 className={classes['Main__Projects-text']}>Доступные проекты</h1>

                    <div className={classes['Main__Projects-blocks']}>
                        <p>имя проекта</p>
                        <p>описание проекта</p>
                        <button onClick={handleJoinProject}>Присоединиться к проекту</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
