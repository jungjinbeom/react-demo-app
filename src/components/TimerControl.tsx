import { useEffect, useState } from "react";
import { useBoolean } from "usehooks-ts";
function Timer() {
  useEffect(() => {
    const saveTitle = document.title;
    const id = setInterval(() => {
      document.title = `Now : ${new Date().getTime()}`;
    }, 100);
    return () => {
      clearInterval(id);
      document.title = saveTitle;
    };
  });
  return <p>Playing</p>;
}
export default function TimerControl() {
  const { value: playing, toggle: togglePlaying } = useBoolean();

  const [count, setCount] = useState(0);

  return (
    <div>
      {playing ? <Timer /> : <p>Stop</p>}
      <button type="button" onClick={togglePlaying}>
        Toggle
      </button>
      {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
