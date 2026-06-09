{
	"inputs": [
		{
			"id": "api_token",
			"type": "promptString",
			"description": "Ingresa tu token Hostinger API (obligatorio)"
		}
	],
	"servers": {
		"hostinger-mcp": {
			"type": "stdio",
			"command": "npx",
			"args": [
				"hostinger-api-mcp@latest"
			],
			"env": {
				"API_TOKEN": "72i8jjEd0oVcaw133hZViR70iaT1MllaIXfYrSgG12c64dc3"
			}
		}
	}
}