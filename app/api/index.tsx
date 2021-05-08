import React from "react";
import axios from "axios";
const instance = axios.create();

export class ApiConfig {
  getJSON(URL: string) {
    return new Promise((resolve, reject) => {
      instance({
        method: "GET",
        headers: { "Content-type": "application/json" },
        url: URL,
      })
        .then((res: any) => {
          resolve(res);
        })
        .catch((Error: any) => {
          reject(Error);
        });
    });
  }
}
