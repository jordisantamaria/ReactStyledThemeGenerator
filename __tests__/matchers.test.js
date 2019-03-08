describe("Comparadores comunes", () => {
  const user = {
    name: "Jordi",
    lastname: "Santamaria"
  };

  const user2 = {
    name: "Jordi",
    lastname: "Santamaria"
  };

  test("igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });

  //*****Numeros*****

  //expect(2).toBeGreaterThan(1)
  //expect(2).toBeGreaterThanOrEqual(1)
  //expect(2).toBeLessThan(1)
  //expect(2).toBeLessThanOrEqual(1)
  //expect(0.4).toBeCloseTo(0.4)   .4 === .4 pero version flotante

  //****Verdadero*****

  // .toBeNull()
  // .toBeTruthy()
  // .toBeFalsy()
  // .toBeUndefined()
  // .not.toBeTruthy()

  //***arrays****

  // .toContain()
  // .toHaveLength()

  // toMatch(/your regex/)
  // not.toMatch(/your regex/)
  // toHaveLength()
});
