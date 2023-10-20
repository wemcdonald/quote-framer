import {createContext, useCallback, useContext, useState} from "react";

const defaultFontFamilies = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
const defaultFontWeights = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
const defaultFontSizes = ["18px", "20px", "24px", "28px", "32px", "36px", "44px", "52px", "60px", "68px", "76px", "84px", "92px"];

const FontContext = createContext(() => {});
export const useFont = () => useContext(FontContext);

export default function FontProvider({ children }) {
    const [fontFamilies, setFontFamilies] = useState(defaultFontFamilies);
    const [quoteFont, setQuoteFont] = useState({fontFamily: fontFamilies[0], fontWeight: "600", fontSize: "52px"});
    const [attributionFont, setAttributionFont] = useState({fontFamily: fontFamilies[0], fontWeight: "400", fontSize: "24px"});

    const handleFontFile = useCallback((file) => {
        if (file) {
            const fontFace = new FontFace('CustomFont', URL.createObjectURL(file));
            fontFace.load().then((loadedFontFace) => {
                document.fonts.add(loadedFontFace);
                setFontFamilies(['CustomFont']);
            });
        }
    }, []);

    const settings = {
        defaultFontFamilies,
        defaultFontSizes,
        defaultFontWeights,
        quoteFont,
        setQuoteFont,
        attributionFont,
        setAttributionFont,
    };

    return (
        <FontContext.Provider value={settings}>
            {children}
        </FontContext.Provider>
    );
}
