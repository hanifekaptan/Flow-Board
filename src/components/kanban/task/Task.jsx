import styles from './Task.module.css';
import TaskTag from './TaskTag';

const Task = ({ task, provided, onEdit }) => {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`${styles.taskCard} ${styles[task.status] || ''}`}
        >
            <div className={styles.tagsContainer}>
                {task.priority && <TaskTag text={task.priority} type="priority" />}
                {task.tag && <TaskTag text={task.tag} type="tag" />}
            </div>
            <div className={styles.header}>
                <div className={styles.actionsMenu}>
                    <button onClick={() => onEdit(task)} className={styles.actionButton}>
                        ⋮
                    </button>
                </div>
            </div>

            <h4 className={styles.title}>{task.title}</h4>

            <p className={styles.description}>
                {task.description || 'Detail Text'}
            </p>
            
        </div>
    );
};

export default Task;