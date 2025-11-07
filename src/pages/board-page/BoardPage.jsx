import React from 'react';
import Board from '../../components/kanban/board/Board';
import styles from './BoardPage.module.css';

const BoardPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Board />
    </div>
  );
};

export default BoardPage;