// import '../css/FormModal.css'
import styles from '../styles/Modal.module.scss'
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button className={styles.modal_close} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
