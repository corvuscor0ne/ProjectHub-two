import classes from "./style.pages/projects.module.scss";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import { joinProject } from "../services/projectService";
import UIButton from "../Components/UIButton";
import axios from "axios";


const Projects = ({projectId}) => {
    const [project, setProject] = useState(null);
  const [role, setRole] = useState('');
  const [joining, setJoining] = useState(false);

  useEffect(() => {
    // Получение информации о проекте по его ID
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/api/projects/${projectId}`);
        setProject(res.data);
        // Проверка, присоединен ли пользователь к проекту
        const currentUserIsParticipant = res.data.participants.some(participant => participant.userId === 'currentUserId');
        if (currentUserIsParticipant) {
          setJoining(true);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleJoinProject = async () => {
    if (!role) {
      alert('Please select a role.');
      return;
    }

    try {
      await axios.post(`/api/projects/${projectId}/participants`, { userId: 'currentUserId', role });
      setJoining(true);
      // Дополнительные действия после успешного присоединения к проекту
    } catch (error) {
      console.error('Error joining project:', error);
    }
  };

  const handleLeaveProject = async () => {
    try {
      await axios.delete(`/api/projects/${projectId}/participants/currentUserId`);
      setJoining(false);
      // Дополнительные действия после успешного покидания проекта
    } catch (error) {
      console.error('Error leaving project:', error);
    }
  };



    return (
        <>
            <Header />

            <div className={classes['Project__Main']}>
                <div className={classes['Project__Main-name']}>
                      <h1>Name</h1>
                      <div className={classes['Project__Main-status']}>Статус</div>
                </div>
                <div className={classes['Project__Main__Members']}>
                    <h2>Участники</h2>
                    <ul className={classes['Project__Main__Member-list']}>
                    <li>member</li>
                    <li>member</li>
                    <li>member</li>
                 </ul>
                </div>
                <div className={classes['Project__Main__Discription']}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor voluptatum non fuga eos eligendi nemo hic porro, aperiam voluptates, doloremque 
                    minus minima fugit dolorum dolorem illum atque nostrum recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor voluptatum non fuga eos eligendi nemo hic porro, aperiam voluptates, doloremque 
                    minus minima fugit dolorum dolorem illum atque nostrum recusandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor voluptatum non fuga eos eligendi nemo hic porro, aperiam voluptates, doloremque
                    </p>
                </div>
                <div className={classes['Project__Main__Skills']}>
                  <h2>Навыки</h2>
                  <ul className={classes['Project__Main__Skills-list']}>
                      <li>Skill1</li>
                      <li>Skill2</li>
                      <li>Skill3</li>
                  </ul>
                </div>
                <div className={classes['Project__Buttons']}>
                <UIButton type="number" children="Редактировать"/>
                <UIButton type="number" children="Пригласить"/>
                <UIButton type="active" children="Удалить участника"/>
                <UIButton type="active" children="Покинуть"/>
                </div>
            </div>
    
        </>
    );
};

export default Projects;
