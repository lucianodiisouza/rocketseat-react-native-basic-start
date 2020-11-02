import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * iOS com emulador: usar localhost
 * iOS com dispositivo físico: ip da máquina
 * Android com emulador: localhost // adb reverse //
 */
