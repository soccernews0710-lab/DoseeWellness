const Circles = () => {
  const items = ['人', '自然', '地球', '循環', '未来'];

  return (
    <div className="circles-wrapper">
      {items.map((item, i) => (
        <div key={i} className="circle">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Circles;