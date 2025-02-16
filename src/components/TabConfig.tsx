import { memo } from "react";


 interface ITab { 
    idTab: string;
    handleChangeTab: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    jsonData: string;
    handleClickTab: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TabConfig =  memo(({idTab, handleChangeTab, handleTextArea,jsonData, handleClickTab }: ITab) => {
    return (
        <>
            <input
                    className="input"
                    name="tabs"
                    type="radio"
                    id="tab-1"
                    checked={idTab === "tab-1"}
                    onChange={handleChangeTab}
                />
                <label className="label" htmlFor="tab-1">
                    Config
                </label>
                <div className="panel">
                    <h1>Enter json data </h1>
                    <div className="panel__textarea">
                        <textarea
                            name="textarea"
                            className="textarea"
                            cols={50}
                            rows={20}
                            placeholder="Write your code here"
                            onChange={handleTextArea}
                            value={jsonData}
                        />

                        <button className="textarea__button" onClick={handleClickTab}>
                            Apply
                        </button>
                    </div>
                </div>
        </>
    );
});