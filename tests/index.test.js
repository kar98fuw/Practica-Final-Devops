const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("La página debe tener el título '¡Hola Mundo!'", () => {
    const filePath = path.join(__dirname, "../index.html");
    const html = fs.readFileSync(filePath, "utf8");
    const dom = new JSDOM(html);
    const title = dom.window.document.querySelector("h1").textContent;
    expect(title).toBe("¡Hola Mundo!");
});
