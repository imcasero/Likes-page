import { FcLike } from "react-icons/fc";
import { useState } from "react";
const Button = () => {
  const initialLike = Math.floor(Math.random() * 1000);
  const [like, setLike] = useState(initialLike);

  function incrementLike() {
    setLike(like + 1);
  }
  return (
    <div className="w-100 d-flex text-center align-items-center mt-3">
      <button onClick={incrementLike} className="custom-button">
        <FcLike />
      </button>
      <span className="like_span">{like}</span>
    </div>
  );
};

export default Button;
