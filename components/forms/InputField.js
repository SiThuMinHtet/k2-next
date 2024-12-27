import styles from './InputField.module.scss'

export default function InputField({ type, name, placeholder, icon }) {
  return (
    <div className={styles.inputGroup}>
      {icon && <i className={`fa-solid ${icon}`}></i>}
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        className={icon ? styles.withIcon : styles.withoutIcon}
      />
    </div>
  )
}

