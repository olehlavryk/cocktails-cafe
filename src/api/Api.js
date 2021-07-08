class Api {
    constructor() {
        this.apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";
    }

    async getRandomCocktail() {
        try {
            const response = await fetch(`${this.apiUrl}/random.php`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request Error: ", error);
        }
    }

    async getCocktailById(id) {
        try {
            const response = await fetch(`${this.apiUrl}/lookup.php?i=${id}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request Error: ", error);
        }
    }

    async getCoctailsByQuery(query) {
        try {
            const response = await fetch(`${this.apiUrl}/search.php${query}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request Error: ", error);
        }
    }


}

export default new Api();