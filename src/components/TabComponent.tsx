import { useMemo, useState } from "react";
import "./TabComponents.css";
import { IFormFields } from "../types/formFields";
import { TabConfig } from "./TabConfig";
import { TabResult } from "./TabResult";
import { convertJsonData } from "../helpers/convertJsonData";

export const TabComponent = () => {
    const [idTab, setIdTab] = useState<string>("tab-1");
    const [jsonData, setJsonData] = useState<string>("");
    

    const handleChangeTab = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdTab(event.target.id);
    };

    const handleClickTab = (event: React.MouseEvent<HTMLButtonElement>) => {
            setIdTab("tab-2");
    };

    const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJsonData(event.target.value);
    };

    const { items, title, buttons } = useMemo(() => convertJsonData(jsonData) ?? {} as IFormFields, [jsonData]);


    return (
        <div>
            <div className="tabs">
                <TabConfig idTab={idTab} handleChangeTab={handleChangeTab} handleTextArea={handleTextArea} jsonData={jsonData} handleClickTab={handleClickTab} />
                <TabResult idTab={idTab} handleChangeTab={handleChangeTab} title={title} items={items} buttons={buttons} />
                
            </div>
        </div>
    );
};
