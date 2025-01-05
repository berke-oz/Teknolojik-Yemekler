describe("Pizza Order Form Tests", () => {
  beforeEach(() => {

    cy.visit("http://localhost:3000");
  });

  it("renders the form correctly", () => {
    cy.contains("Position Absolute Acı Pizza").should("be.visible");


    cy.contains("Boyut Seç").should("be.visible");
    cy.get('input[type="radio"][name="boyut"]').should("have.length", 3);

    cy.get('select[name="hamur"]').should("exist");
  });

  it("allows user to select pizza size, dough, and extras", () => {
    cy.get('input[type="radio"][name="boyut"]').check("Orta");

    cy.get('select[name="hamur"]').select("İnce");
    cy.get('input[type="checkbox"][name="ekstraMalzemeler"]').check(["Pepperoni", "Sucuk", "Mısır", "Biber"]);

    cy.get('input[type="radio"][name="boyut"]:checked').should("have.value", "Orta");
    cy.get('select[name="hamur"]').should("have.value", "İnce");
    cy.get('input[type="checkbox"][name="ekstraMalzemeler"]:checked').should("have.length", 4);
  });
});