function Button({ type, color, size, variant, text }) {
  return (
    <div>
      <button
        type={type}
        className={`btn btn-color_${color} btn-size_${size} btn-variant_${variant}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
