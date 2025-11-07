import { useState, useEffect } from 'react';
import styles from './TaskModal.module.css';

const TaskModal = ({ isOpen, onClose, onSave, initialData, onDelete }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [priority, setPriority] = useState('mid');

    const isEditMode = Boolean(initialData);

    useEffect(() => {
        if (isOpen) {
            if (isEditMode) {
                setTitle(initialData.title || '');
                setDescription(initialData.description || '');
                setTag(initialData.tag || '');
                setPriority(initialData.priority || 'Medium');
            } else {
                setTitle('');
                setDescription('');
                setTag('');
                setPriority('Medium');
            }
        }
    }, [initialData, isOpen, isEditMode]);

    if (!isOpen) {
        return null;
    }

    const handleSave = () => {
        if (!title.trim()) {
            alert('Görev başlığı zorunludur!');
            return;
        }

        const taskData = {
            title: title,
            description,
            tag,
            priority,
        };

        if (isEditMode) {
            taskData.id = initialData.id;
        }

        onSave(taskData);
        onClose();
    };

    const handleDelete = () => {
        if (onDelete && initialData?.id) {
            onDelete(initialData.id);
        }
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>{isEditMode ? 'Görevi Düzenle' : 'Yeni Görev'}</h2>

                <label htmlFor="title">Görev Başlığı *</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Örn: Yeni arayüzü tasarla" />

                <label htmlFor="description">Açıklama</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Görevle ilgili detayları buraya yazın..." />

                <label htmlFor="tag">Etiket</label>
                <input id="tag" type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Örn: Tasarım" />

                <label htmlFor="priority">Öncelik</label>
                <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">Yüksek</option>
                    <option value="Medium">Orta</option>
                    <option value="Low">Düşük</option>
                </select>

                <div className={styles.modalActions}>
                    {isEditMode && (
                        <button onClick={handleDelete} className={styles.deleteButton}>
                            Sil
                        </button>
                    )}
                    <div className={styles.mainActions}>
                        <button onClick={onClose} className={styles.cancelButton}>
                            Kapat
                        </button>
                        <button onClick={handleSave} className={styles.saveButton}>
                            Kaydet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;