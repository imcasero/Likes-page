import Description from "./Description";
import img from "../assets/photo.jpeg";
import CardTitle from "./CardTitle";
import Button from "./Button";

const Card = () => {
  return (
    <div className="container d-flex justify-content-center ">
      <div className="card w-25">
        <img src={img} className="card-img-top" alt="Card" />
        <div className="card-body">
          <CardTitle />
          <Description />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Card;
