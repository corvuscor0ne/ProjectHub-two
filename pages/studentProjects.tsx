import classes from "./style.pages/studentProjects.module.scss"
import Header from "../Components/Header"
import { useState, useEffect } from "react";

interface Project {
    id: number;
    name: string;
    description: string;
    // Другие свойства проекта
}

const Projects = () => {
    const [joinedProjects, setJoinedProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchJoinedProjects = async () => {
            try {
                
                const fetchedData: Project[] = [
                    { id: 1, name: 'Проект 1', description: 'Описание проекта 1' },
                    { id: 2, name: 'Проект 2', description: 'Описание проекта 2' },
                    // ... другие данные
                ];

                setJoinedProjects(fetchedData); // Установка данных в состояние
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        };

        // Вызов функции при монтировании компонента
        fetchJoinedProjects();
    }, []);

    return(
        <>
        <Header/>

        <div className={classes['Main']}>
                <div className={classes['Main__Block']}>
                    <div className={classes['Main__Block-text']}>
                        <h1>Действующие проекты</h1>
                        <div className={classes['Main__Block-works']}>
                            {joinedProjects.map((project) => (
                                <div className={classes['Main__Block-works__work']} key={project.id}>
                                    <p>{project.name}</p>
                                    <p>{project.description}</p>
                                    <div className={classes['Main__Block-works__work-button']}>
                                        <p>Подробнее</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                <div className={classes["Main__Block__succes"]}>
                    <h1 className={classes["Main__Block__succes-text"]}>Выполненные работы</h1>

                    <div className={classes["Main__Block__succec-works"]}>
                        <div className={classes["Main__Block__succes-works-complete"]}>
                            <p className={classes["Main__Block__succes-works-complete-text"]}>Имя проекта</p>
                            <p className={classes["Main__Block__succes-works-complete-textt"]}>Подробнее</p> 
                        </div>
                    </div>
                    <div className={classes["Main__Block__succec-works"]}>
                        <div className={classes["Main__Block__succes-works-complete"]}>
                            <p className={classes["Main__Block__succes-works-complete-text"]}>Имя проекта</p>
                            <p className={classes["Main__Block__succes-works-complete-textt"]}>Подробнее</p> 
                        </div>
                    </div>
                    <div className={classes["Main__Block__succec-works"]}>
                        <div className={classes["Main__Block__succes-works-complete"]}>
                            <p className={classes["Main__Block__succes-works-complete-text"]}>Имя проекта</p>
                            <p className={classes["Main__Block__succes-works-complete-textt"]}>Подробнее</p> 
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Projects;



