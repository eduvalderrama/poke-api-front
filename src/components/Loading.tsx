const Loading = () => {
  return (
    <div className="loading-mark" role="status">
      <img src="/pokeball.svg" alt="" className="loading-ball" />
      <span className="visually-hidden">Cargando</span>
    </div>
  );
};

export default Loading;
