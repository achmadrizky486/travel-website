import React from "react";
import bora from "../assets/borabora.jpg";
import bora2 from "../assets/borabora2.jpg";
import mald from "../assets/maldives.jpg";
import mald2 from "../assets/maldives2.jpg";
import mald3 from "../assets/maldives3.jpg";
import key from "../assets/keywest.jpg";
import SelectCards from "./SelectCards";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCards bg={bora} text="Bora Bora" />
      <SelectCards bg={bora2} text="Maldives" />
      <SelectCards bg={mald} text="Antigua" />
      <SelectCards bg={mald2} text="Cozumel" />
      <SelectCards bg={mald3} text="Perak" />
      <SelectCards bg={key} text="Surabaya" />
    </div>
  );
};

export default Selects;
