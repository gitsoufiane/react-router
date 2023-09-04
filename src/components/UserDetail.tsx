import { useParams } from "react-router-dom";
export default function UserDetail() {
  const params = useParams();
  const { userId } = params;
  return <div>UserDetail : {userId}</div>;
}
