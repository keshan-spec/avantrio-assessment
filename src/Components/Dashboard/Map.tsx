import { useRef, useState } from "react";

interface Props { }


export const Map: React.FC<Props> = () => {
  const map_div = useRef<HTMLDivElement | null>(null)

  //  used to check for the map's classlist whether it has hidden class to toggle the text above toggle button
  // NOTE: there are better ways to implement this
  const [classToggleState, setclassToggleState] = useState<boolean | undefined>(map_div.current?.classList.contains("hidden"))

  // toggles "hidden" class for the refereneced div (map container)
  const reduceMap = () => {
    map_div.current?.classList.toggle("hidden");
    setclassToggleState(map_div.current?.classList.contains("hidden"))
  }

  return (
    <div className="map_container" ref={map_div}>
      <div className="map__inner_container">
        <img src="assets/80-cool-grey@2x.png" alt="static map" />
      </div>

      <button className="toggle_btn" onClick={reduceMap}>
        {classToggleState ? <p className="text">Live location map here</p> : ""}
        <img src="assets/Path 86.png" alt="arrow" />
      </button>

      <div className="map__navigation">
        <img src="assets/Group 572@3x.png" alt="" />
        <img src="assets/Group 571@3x.png" alt="" />
      </div>

      <span className="reset_map_btn">Reset map</span>
    </div>
  );
}