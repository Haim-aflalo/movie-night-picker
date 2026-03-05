import data from "../data/seats.json";

function Seats() {
  const path = window.location.pathname.split("/").filter(Boolean).at(-1);
  return (
    <>
      <h6>SCREEN</h6>
      <div>
        {Object.fromEntries(
          Object.entries(data).filter(([key]) => key === path),
        ).map((seat, index) => {
            
        })}
      </div>
    </>
  );
}

export default Seats;
