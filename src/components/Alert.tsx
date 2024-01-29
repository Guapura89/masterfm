import { Fade } from "react-awesome-reveal";
import { AlertState } from "@/hooks/useAlert";

const Alert = ({ props }: { props: AlertState }) => {
  return (
    <Fade
      direction="down"
      duration={300}
      className={`absolute ${
        !props.hidden ? "" : "hidden"
      } bg-white w-auto h-10 rounded-md p-2 border-b-4 border-green-400 right-10 top-10`}
    >
      <h1>{props.message}</h1>
    </Fade>
  );
};

export { Alert };
