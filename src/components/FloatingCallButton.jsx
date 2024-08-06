// import data
import { callData } from "../data.js";

const CallButton = () => {
  // destructure data
  const { icon } = callData;
  return (
    <div className="bottom-2 right-1 z-999 fixed">
      <button className="btn">
        {icon}
        <div className="ml-4">
          <p>Order / Reserve now</p>
        </div>
      </button>
    </div>
  );
};

export default CallButton;
