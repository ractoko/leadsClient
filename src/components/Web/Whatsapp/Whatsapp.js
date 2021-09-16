import React, { useState, useEffect } from "react";
import { getWhatsAppApi } from "../../../api/whatsapp";

import "./Whatsapp.scss";
import Whatsapp from ".";

export default function WhatsappView() {
  const [whatsData, setWhatsData] = useState([]);

  useEffect(() => {
    getWhatsAppApi().then(response => {
      if(response !== undefined){
        const scan = response;
        setWhatsData(scan);
      }
    });
  }, []);

  return (
    <div>
      <img src={whatsData} alt="" />
    </div>
  );
}
