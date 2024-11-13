import { useState, React } from "react"
import getText from "./texts.tsx";

function TypingModule(){
    return (
        <div>
            <p>{getText("JAVA","EASY")}</p>
        </div>
    );
}

export default TypingModule;