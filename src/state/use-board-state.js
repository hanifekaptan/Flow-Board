import { useCallback } from 'react';
import useLocalStorage from '../hooks/use-local-storage';
import { v4 as uuidv4 } from 'uuid';

const emptyBoard = {
  backlog: [],
  inProgress: [],
  done: [],
};

function useBoardState() {
    const [boardData, setBoardData] = useLocalStorage('kanbanTasks', emptyBoard);

    const addTask = useCallback((columnId, newTaskData) => {
        setBoardData(prevData => {
            const taskId = uuidv4();
            const newTask = {
                id: taskId,
                ...newTaskData,
                status: columnId,
            };
            const currentColumn = prevData?.[columnId] || [];
            return {
                ...prevData,
                [columnId]: [...currentColumn, newTask],
            };
        });
    }, [setBoardData]);

    const deleteTask = useCallback((columnId, taskIdToDelete) => {
        setBoardData(prevData => {
            if (!prevData || !prevData[columnId]) return prevData; 
            
            return {
                ...prevData,
                [columnId]: prevData[columnId].filter(task => String(task.id) !== String(taskIdToDelete)),
            };
        });
    }, [setBoardData]);
    
    const updateTask = useCallback((columnId, taskIdToUpdate, updatedFields) => {
        setBoardData(prevData => {
            if (!prevData || !prevData[columnId]) return prevData; 
            
            return {
                ...prevData,
                [columnId]: prevData[columnId].map(task =>
                    String(task.id) === String(taskIdToUpdate) ? { ...task, ...updatedFields } : task
                ),
            };
        });
    }, [setBoardData]);

    const moveTask = useCallback((sourceColumnId, destinationColumnId, draggableId, sourceIndex, destinationIndex) => {
        setBoardData(prevData => {
            if (!prevData || !prevData[sourceColumnId] || !prevData[destinationColumnId]) return prevData;

            const newBoardData = { ...prevData };
            const sourceColumnTasks = Array.from(newBoardData[sourceColumnId]);
            
            const [movedTask] = sourceColumnTasks.splice(sourceIndex, 1);

            movedTask.status = destinationColumnId;
            
            if (sourceColumnId === destinationColumnId) {
                sourceColumnTasks.splice(destinationIndex, 0, movedTask);
                newBoardData[sourceColumnId] = sourceColumnTasks;
            } else {
                const destinationColumnTasks = Array.from(newBoardData[destinationColumnId]);
                destinationColumnTasks.splice(destinationIndex, 0, movedTask);
                newBoardData[sourceColumnId] = sourceColumnTasks;
                newBoardData[destinationColumnId] = destinationColumnTasks;
            }
            return newBoardData;
        });
    }, [setBoardData]);

    return {
        boardData,
        addTask,
        deleteTask,
        updateTask,
        moveTask,
    };
}

export default useBoardState;