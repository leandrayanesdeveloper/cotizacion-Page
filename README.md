# 📈 Cotizador de Criptomonedas 💰

Una aplicación web sencilla y rápida para cotizar el precio actual de las principales criptomonedas en distintas divisas, utilizando la API de **CryptoCompare**.

## 🚀 Características

* **Cotización en Tiempo Real:** Obtiene el precio actual, el precio más alto y el más bajo de las últimas 24 horas, y la variación porcentual.
* **Múltiples Divisas:** Permite seleccionar entre Dólar (USD), Euro (EUR), Pesos Colombianos (COP) y Bolívares (VES).
* **Principales Criptomonedas:** Soporte para Bitcoin (BTC), USDT, Binance Coin (BNB) y Ethereum (ETH).
* **Diseño Responsivo:** Adaptado para una buena visualización en dispositivos móviles (mediante CSS Media Queries).

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura de la aplicación.
* **CSS3:** Estilos personalizados, incluyendo la fuente "Bebas Neue".
* **JavaScript (ES6+):** Lógica principal, manejo de eventos y consumo de la API.
* **API Externa:** [CryptoCompare - PriceMultiFull](https://min-api.cryptocompare.com/data/pricemultifull) para obtener los datos de cotización.

## ⚙️ Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

| Archivo | Descripción |
| :--- | :--- |
| `index.html` | Contiene la estructura principal (formulario, contenedor de resultados, enlaces al CSS/JS). |
| `style.css` | Define el diseño, la disposición (flexbox), y la responsividad de la interfaz. |
| `script.js` | Contiene la lógica de JavaScript para interactuar con el formulario y la API. |
| `imag/` | Carpeta para almacenar imágenes y assets (ej. `undraw_digital-currency_u5p6.svg`, `pricing.png`). |

## 💻 Instalación y Uso

1.  **Clonar el repositorio** (si aplica) o **descargar los archivos** a tu máquina local.
2.  Abre el archivo `index.html` en tu navegador web.
3.  **Selecciona** la moneda y la criptomoneda deseadas en los menús desplegables.
4.  **Ingresa** el monto (aunque el código actual no lo utiliza para el cálculo, es parte del formulario).
5.  Haz clic en el botón **"COTIZAR"**.
6.  Los resultados de la cotización aparecerán bajo el formulario.

---

## 📝 Fragmento de Código Clave (JavaScript)

El corazón de la aplicación se encuentra en la función de manejo del evento `submit` del formulario, que realiza la llamada a la API:

```javascript
// ... (selectores y lógica para obtener valores)

