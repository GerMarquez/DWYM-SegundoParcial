import BACKEND_URI from "../constants/BACKEND_URI";

/**
 * Realiza llamadas a la API.
 * @estado LISTO.
 */
export class BackendCaller {
    /**
     * Identificador de la API.
     */
    static #API_URI = BACKEND_URI.base + "/gmarquez/";

    static async getList() {
        // console.log("Calling API at:", this.#API_URI);
        try {
            const response = await fetch(this.#API_URI ,
                {
                    method: "GET",
                }
            );

            const statusCode = response.status;
            console.log("response received");
            const data = await response.json();
            return { statusCode, data };
        } catch (error) {
            console.error("Error getList:", error);
        }
    }

    static async getSingle(id) {
         console.log("Calling API at:", this.#API_URI);
        try {
            const response = await fetch(this.#API_URI + id,
                {
                    method: "GET",
                }
            );

            const statusCode = response.status;
            console.log("response received");
            const data = await response.json();
            return { statusCode, data };
        } catch (error) {
            console.error("Error getSingle:", error);
        }
    }

    static async createSingle(object) {
        try {
            const response = await fetch(this.#API_URI,
                {
                    method: "POST",
                    body: JSON.stringify(object)
                }
            );

            const statusCode = response.status;
            console.log("response received");
            const data = await response.json();
            return { statusCode, data };
        } catch (error) {
            console.error("Error createSingle:", error);
        }
    }

    static async deleteSingle(id) {
        try {
            const response = await fetch(this.#API_URI + id,
                {
                    method: "DELETE",
                }
            );

            const statusCode = response.status;
            console.log("response received");
            const data = await response.json();
            return { statusCode, data };
        } catch (error) {
            console.error("Error deleteSinngle:", error);
        }
    }

    static async editSingle(id, object) {
        try {
            const response = await fetch(this.#API_URI + id,
                {
                    method: "PUT",
                    body: JSON.stringify(object)
                }
            );

            const statusCode = response.status;
            console.log("response received");
            const data = await response.json();
            return { statusCode, data };
        } catch (error) {
            console.error("Error deleteSinngle:", error);
        }
    }
}


export default BackendCaller;