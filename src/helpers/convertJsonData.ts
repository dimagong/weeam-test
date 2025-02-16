import { IFormFields } from "../types/formFields";

export const convertJsonData = (jsonData: string = ""): IFormFields | null => {
        try {
            if (!jsonData) {
                return null;
            }
            const addQuotesKeysJsonData = jsonData.replace(/(\w+)\s*:/g, '"$1":').replace(/'([^']*)'/g, '"$1"');
            return JSON.parse(addQuotesKeysJsonData) || "";
            
        } catch (error) {
            return null;
        }

    };