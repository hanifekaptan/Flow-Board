import styles from './TaskTag.module.css';

const TaskTag = ({ text, type }) => {
  const priorityClass =
    type === 'priority' ? styles[text.toLowerCase()] || '' : '';
  
  return (
    <span className={`${styles.tagStyle} ${styles[type]} ${priorityClass}`}>
      {text}
    </span>
  );
};

export default TaskTag;