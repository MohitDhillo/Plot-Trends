import {QueryParams} from "@/app/classes/QueryParams";

export async function getStockData(query: QueryParams) {
    try {
        const baseUrl = 'http://localhost:3000/api/stocks/getValues'; // Include the protocol
        const queryParams = new URLSearchParams(query).toString();
        const fullUrl = `${baseUrl}?${queryParams}`;

        // Make the GET request
        const response = await fetch(fullUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function getStocksAutocompleteData(query: QueryParams) {
    try {
        const baseUrl = 'http://localhost:3000/api/stocks/auto-complete'; // Include the protocol
        const queryParams = new URLSearchParams(query).toString();
        const fullUrl = `${baseUrl}?${queryParams}`;

        // Make the GET request
        const response = await fetch(fullUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}