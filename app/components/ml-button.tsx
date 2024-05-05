"use client"

import { ReactElement } from "react";

interface MLButtonProps extends React.HTMLProps<HTMLButtonElement> {
    label?: string;
    children?: ReactElement;
    className?: string;
    secondary?: boolean;
    dataTest?: string;
    type?: "button" | "reset" | "submit"
}

export function MLButton(props: MLButtonProps) {
    const classButtonType = props.secondary ? 'bg-white hover:bg-slate-200' : '';
    const classDisabled = props.disabled ? 'disabled' : '';

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (!props.disabled && props.onClick) {
            props.onClick(event);
        }
    }
    const classButton="button-blue"
           
    return (
        <div data-test={props.dataTest} className={props.className}>
             <button
                {...props}
                onClick={handleClick}
                className={`${classDisabled} ${classButton} ${classButtonType}`}
                aria-label={props.label}
                disabled={props.disabled}
                type={props.type || "button"}
            >
                {props.label && props.label.length > 0 ? <span className="text-xs md:text-sm">{props.label}</span> : null}
                {props.children}
            </button>
        </div>
    );
}