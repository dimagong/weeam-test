import { memo } from "react";
import { FieldTypes, IFormFields } from "../types/formFields";

interface ITabResult  { 
    idTab: string;
    handleChangeTab: (event: React.ChangeEvent<HTMLInputElement>) => void;
    title: IFormFields['title'] | undefined;
    items: IFormFields['items'] | undefined;
    buttons: IFormFields['buttons'] | undefined;
}

export const TabResult = memo(({idTab, handleChangeTab, title, items, buttons  }: ITabResult) => {
    return (
        <>
            <input
                className="input"
                name="tabs"
                type="radio"
                id="tab-2"
                checked={idTab === "tab-2"}
                onChange={handleChangeTab}
            />
            <label className="label" htmlFor="tab-2">
                Result
            </label>
            <div className="panel">

                <form className="panel__form">
                    {title && <div className="form__title">{title}</div>}
                    {items?.length ?
                        items.map((item, index) => {
                            const type = FieldTypes[item.type as keyof typeof FieldTypes];
                            return (
                                <div className="form__container" key={type + index}>
                                    {item.label && <label className="form__label" htmlFor={type + index}>{item.label}</label>}
                                    <input id={type + index} className="form__input" type={type} placeholder={item.placeholder} />

                                </div>
                            );
                        }) : <div className="form__container-wrong">Empty data or input error</div>}
                    <div className="form__buttons">{buttons && buttons.map((btn, index) => {

                        return (
                            <button className="form__button" key={index} >
                                {btn.name}
                            </button>
                        );
                    })}</div>

                </form>
            </div>
        </>
    );
});