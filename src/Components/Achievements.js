import { BsTrophyFill } from "react-icons/bs";
import React from 'react';

const achievements = [
  { title: 'Project 1', description: 'Achievement 1 description' },
  { title: 'Project 2', description: 'Achievement 2 description' },
  { title: 'Project 3', description: 'Achievement 3 description' },
];

function AchievementItem({ achievement }) {
  const styles = {
    section: {
      borderLeft: "2px solid #F9C74F",
      background: "linear-gradient(to bottom left, #333333, #333333)",
      padding: "2rem",
      borderRadius: "10px",
      marginBottom: "1vh",
    },
    title: {
      fontSize: "2rem",
      paddingBottom: "1rem",
    },
    description: {
      color: "#ccc",
      fontSize: "clamp(13px, 1vw, 15px)",
    },
  };

  return (
    <section style={styles.section}>
      <h4 style={styles.title}>{achievement.title}</h4>
      <p style={styles.description}>{achievement.description}</p>
    </section>
  );
}

function Achievements() {
  const styles = {
    section: {
      paddingTop: "2rem",
      marginBottom: "15vh",
      backgroundColor: "#212121",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "clamp(20px, 6vw, 35px)",
      marginBottom: "5vh",
    },
    icon: {
      fill: "#F9C74F",
    },
    title: {
      padding: "0.5rem",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "1.5rem",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      paddingBottom: "4vh",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <BsTrophyFill style={styles.icon} />
        <h1 style={styles.title}>Achievements</h1>
      </div>
      <div style={styles.container}>
        <h3 style={styles.sectionTitle}>Achievements</h3>
        {achievements.map((achievement, index) => (
          <AchievementItem key={index} achievement={achievement} />
        ))}
      </div>
    </section>
    
  );
}
console.log("Achievements component is rendering");

export default Achievements;
