import { isPair } from "../lib/utils";
import axios from "axios";

const getDataFromApi = url => {
  return axios.get(url).then(({ data }) => data);
};

const callbackHell = callback => callback("esto es un callback");

describe("Calculos matematicos", () => {
  test("Prueba de numero par", () => {
    expect(isPair(4)).toBe(true);
  });

  test("Callback", done => {
    function otherCallback(data) {
      expect(data).toBe("esto es un callback");
      done();
    }
    callbackHell(otherCallback);
  });
});

describe("Probando promesas", () => {
  test("Realizando una peticion a una api", done => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});

describe("Probando async/await", () => {
  test("Realizando una peticion a una api", async () => {
    const api = "https://rickandmortyapi.com/api/character/";
    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThan(0);
  });

  test("Realizando una peticion a una api con error", async () => {
    const apiError = "http://httpstat.us/500";
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(
      Error("Request failed with status code 500")
    );
  });

  test("Resuelve un Hola", async () => {
    await expect(Promise.resolve("Hola")).resolves.toBe("Hola");
    await expect(Promise.reject("Error")).rejects.toBe("Error");
  });

  //snapshots => captura de imagen de unos datos que no deberian cambiar, de modo que si una llamada
  //del api a esos datos cambia, el test fallara.
});

//despues de las pruebas
/*

afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

//antes de las pruebas

beforeAll(() => console.log('Antes de todas las pruebas'));
beforeEach(() => console.log('Antes de cada prueba'));

*/
