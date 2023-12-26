export function AgeDisplayResults({ days, months, years }) {
  return (
    <>
      <div className="results">
        <span className="purple">{years}</span>
        <span className="black">years</span>
      </div>

      <div className="results">
        <span className="purple">{months}</span>
        <span className="black">months</span>
      </div>

      <div className="results">
        <span className="purple">{days}</span>
        <span className="black">days</span>
      </div>
    </>
  );
}
