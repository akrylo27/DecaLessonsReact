import styles from './Input.module.scss'

function Input({
  type,
  placeholder,
  size,
  color,
  variant,
  value,
  onChange,
  ...props
}) {
  return (
    <div>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;
