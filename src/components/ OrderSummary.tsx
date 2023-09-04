import { useNavigate } from "react-router-dom";
export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      OrderSummary
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
