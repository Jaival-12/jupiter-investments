import CountUp from "react-countup";

function TestCountUp() {
  return (
    <div className="p-10 text-5xl">
      <CountUp end={100} duration={3} />
    </div>
  );
}

export default TestCountUp;