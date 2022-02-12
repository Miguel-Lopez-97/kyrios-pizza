/* Cualquier otro producto relacionado con pizzas tiene el id apartir del numero 1000, y de pizzas apartir del 100 */

export const Pizzas = JSON.parse(`{
    "id":1,
    "name":"PIZZAS, Lasañas y Panzerotii",
    "url":"https://drive.google.com/uc?export=download&id=10950oWBK33JunSCpAu1e1KOsUYbybqCJ",
    "products":[
			{"id":101,
         	"name":"Pizza Hawaiana",
         	"url":"https://drive.google.com/uc?export=download&id=1R_4XJCEXwYAeWbbGTE-2RU7hrDE8tZyK",
         	"description":"Queso + Jamón + Piña",
         	"value":{
				 "XL":40000,
				 "Small":32000,
				 "MS":22000,
				 "individual":5000
			 }},
			 {"id":102,
         	"name":"Pizza Pollo con Champiñones",
         	"url":"https://drive.google.com/uc?export=download&id=1RGjSzgK6gDxKzLBa69sv4G5Lp2h4BEOW",
         	"description":"Queso + Pollo + Champiñones",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":103,
         	"name":"Pizza de Pepperonni",
         	"url":"https://drive.google.com/uc?export=download&id=1tfe3klblvO7Q2tuvSJvA2NvK8Qez1ySY",
         	"description":"Queso + Jamón + Salami + Pepperoni",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":104,
         	"name":"Pizza Mexicana",
         	"url":"https://drive.google.com/uc?export=download&id=1udV3IKSoXoeNLSXX2YHtRFXYpCVv2-HU",
         	"description":"Queso + Carne Molida extraseca + Pico de Gallo + Maicitos + Jalapeño",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":105,
         	"name":"Pizza Ranchera",
         	"url":"https://drive.google.com/uc?export=download&id=13amGC7G0sLM8nBBqnMBwWmUf8CQckvRx",
         	"description":"Queso + Tocineta + Maiz Tierno en Salasa BBQ + Chorizo + Cebolla",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":106,
         	"name":"Pizza BBQ",
         	"url":"https://drive.google.com/uc?export=download&id=125iUWBmC4YqelgrrlAW9OKexdd9mXSoX",
         	"description":"Queso + Pollo Desmechado + Salsa BBQ",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":107,
         	"name":"Pizza Pollo Carne",
         	"url":"https://drive.google.com/uc?export=download&id=15euZxtcXxP0OxePBq333do9L8rIOmn1l",
         	"description":"Queso + Jamón + Piña",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":108,
         	"name":"Pizza Americana",
         	"url":"https://drive.google.com/uc?export=download&id=14cAtPcAEZJ-wN8n5zqO4kaDDFIQ2T08w",
         	"description":"Queso + Carne Desmechada + Salami + Pimentón y Cebolla",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":109,
         	"name":"Pizza Tropical",
         	"url":"https://drive.google.com/uc?export=download&id=1axjbQVQs-GYBTENW8Cj6tFZGenf5c8Rs",
         	"description":"Queso + Piña + Uvas pasas + Cerezas",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":5000
			}},
			 {"id":100,
         	"name":"Pizza Personalizada",
         	"url":"https://drive.google.com/uc?export=download&id=10950oWBK33JunSCpAu1e1KOsUYbybqCJ",
         	"description":"Seleccione el tamaño de la pizza que quiere compartir, esta puede tener dos sabores distintos en su preparación para la MS o Small, mientras en la XL puede prepararse hasta en cuatro sabores, no olvide aclarar en el Carrito de Compras estos sabores",
         	"value":{
				"XL":40000,
				"Small":32000,
				"MS":22000,
				"individual":null
			}},
			 {"id":1001,
         	"name":"Panzerotii de Carnes",
         	"url":"https://drive.google.com/uc?export=download&id=1DsXncnAAMeWpkca6alj3V3s9DlQkArcG",
         	"description":"Queso + Champiñones + Salsa Bolognesa + Pollo desmechado + Carne Desmechada",
         	"value":13000},
			 {"id":1002,
         	"name":"Panzerotii Hawaiano",
         	"url":"https://drive.google.com/uc?export=download&id=18JRCIkH_kHZrrbA-kxECvhlo6BD-RlOP",
         	"description":"Queso + Jamón + Piña",
         	"value":13000},
			 {"id":1003,
         	"name":"Panzerotii Especial",
         	"url":"https://drive.google.com/uc?export=download&id=1DsXncnAAMeWpkca6alj3V3s9DlQkArcG",
         	"description":"Pidelo a tu gusto, mixto o con algún ingrediente extra",
         	"value":15000},
			 {"id":1004,
         	"name":"Lasaña",
         	"url":"https://drive.google.com/uc?export=download&id=19TNmQk-MdTJSyejzCijjbdSeW6C0usvc",
         	"description":"Queso + Salsa Bolognesa + Pasta + Pollo Desmechado + Carne Desmechada + Champiñones + Tajada de Pan",
         	"value":13000},
			 {"id":1005,
         	"name":"Lasaña Especial",
         	"url":"https://drive.google.com/uc?export=download&id=1kvtO2P90A0QA2opyie2YJ5XWlCvM0yt-",
         	"description":"Pidela a tu gusto, mixto o con algún ingrediente extra",
         	"value":15000}
	]
}`)