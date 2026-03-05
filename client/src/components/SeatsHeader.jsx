function SeatsHeader() {
  const path = window.location.pathname.split("/").filter(Boolean).at(-1);
  return (
    <>
      <h1>Choose your seats</h1>
      <p>Movie Details</p>
      <p>Movie ID:{path}</p>
      <div className="available">
        <div className="color"></div>
        <p>Available</p>
      </div>
      <div className="take">
        <div className="color"></div>
        <p>Taken</p>
      </div>
      <div></div>
    </>
  );
}

export default SeatsHeader;
