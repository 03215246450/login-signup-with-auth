import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../config/Fbmethods";

export default function Protected(props: any) {
  const { Screens } = props;
  const [Loader, setLoader] = useState(false);
  const Navigate = useNavigate();

  const checkAuth = () => {
    setLoader(true);

    fbAuth()
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        Navigate("/login");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);
  return Loader ? (
    <div>
      <img
        src="https://i.stack.imgur.com/hzk6C.gif"
        className="img-fluid"
        alt="Please wait loading "
      />
    </div>
  ) : (
    <Screens />
  );
}
