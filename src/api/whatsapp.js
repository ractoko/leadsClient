import { basePath, apiVersion } from "./config";

export function getWhatsAppApi() {
    const url = `${basePath}/${apiVersion}/whatsapp`;
  
    return fetch(url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        console.log(result.scan);
        return result.scan;
      })
      .catch(err => {
        console.log(err);
      });
}