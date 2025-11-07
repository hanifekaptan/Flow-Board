import { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import styles from './Board.module.css';
import Column from '../column/Column';
import Task from '../task/Task';
import TaskModal from '../../common/task-modal/TaskModal';
import HelpModal from '../../common/help-modal/HelpModal';
import useBoardState from '../../../state/use-board-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Board = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const {
    boardData: tasks,
    addTask,
    deleteTask,
    updateTask,
    moveTask,
  } = useBoardState();

  const handleOpenNewTaskModal = useCallback(() => {
    setTaskToEdit(null);
    setIsTaskModalOpen(true);
  }, []);

  const handleOpenEditTaskModal = useCallback((task) => {
    setTaskToEdit(task);
    setIsTaskModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsTaskModalOpen(false);
    setTaskToEdit(null);
  }, []);

  const handleSaveTask = useCallback((taskData) => {
    if (taskData.id) {
      updateTask(taskToEdit.status, taskData.id, taskData);
    } else {
      addTask('backlog', taskData);
    }
    handleCloseModal();
  }, [addTask, updateTask, handleCloseModal, taskToEdit]);

  const handleDeleteTask = useCallback((taskIdToDelete) => {
    if (window.confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
      deleteTask(taskToEdit.status, taskIdToDelete);
      handleCloseModal();
    }
  }, [deleteTask, handleCloseModal, taskToEdit]);

  const handleOnDragEnd = useCallback((result) => {
    const { source, destination, draggableId } = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }
    if (
      destination.droppableId === 'inProgress' &&
      source.droppableId !== 'inProgress' &&
      tasks.inProgress.length >= 3
    ) {
      alert('Yapılıyor sütununda en fazla 3 görev olabilir!');
      return;
    }
    moveTask(source.droppableId, destination.droppableId, draggableId, source.index, destination.index);
  }, [moveTask, tasks]);

  const handleOpenHelpModal = useCallback(() => setIsHelpModalOpen(true), []);
  const handleCloseHelpModal = useCallback(() => setIsHelpModalOpen(false), []);

  return (
    <div className={styles.boardWrapper}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={styles.boardContainer}>
          <div className={styles.columnsWrapper}>
            {Object.entries(tasks).map(([columnId, columnTasks]) => (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={styles.droppableColumn}
                  >
                    <Column
                      className={styles[columnId]}
                      title={columnId.replace(/([A-Z])/g, ' $1').trim()}
                    >
                      {(columnTasks || []).map((task, index) => (
                        <Draggable key={String(task.id)} draggableId={String(task.id)} index={index}>
                          {(provided) => (
                            <Task
                              task={task}
                              provided={provided}
                              onEdit={handleOpenEditTaskModal}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Column>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>

      <div className={styles.floatingActions}>
        <button className={styles.addTaskButton} onClick={handleOpenNewTaskModal}>
          Oluştur
        </button>

        <button className={styles.iconButton} onClick={handleOpenHelpModal}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>

        <button className={styles.iconButton} onClick={() => alert('Ayarlar menüsü ileride eklenecek!')}>
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        initialData={taskToEdit}
        onDelete={handleDeleteTask}
      />

      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={handleCloseHelpModal}
      />
    </div>
  );
};

export default Board;