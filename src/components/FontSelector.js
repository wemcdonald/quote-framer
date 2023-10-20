import {MenuItem, Stack, TextField, Typography} from "@mui/material";
import {useFont} from "../FontProvider";

export function FontSelectors() {
    const {quoteFont, setQuoteFont, attributionFont, setAttributionFont} = useFont();
    return (
        <Stack direction={"column"} gap={2}>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
                <Typography>Quote</Typography>
                <FontSelector font={quoteFont} setFont={setQuoteFont}/>
            </Stack>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
                <Typography>Attribution</Typography>
                <FontSelector font={attributionFont} setFont={setAttributionFont}/>
            </Stack>
        </Stack>
    )
}

export function FontSelector({font, setFont}) {
    const {defaultFontFamilies, defaultFontSizes, defaultFontWeights,} = useFont();
    return (
        <Stack direction={"row"} gap={1} sx={{
            "& .MuiSelect-select": {
                paddingTop: "4px",
                paddingBottom: "4px",
            }
        }}>
            <TextField
                select
                label="Font"
                value={font.fontFamily}
                onChange={(e) => setFont({...font, fontFamily: e.target.value})}
                variant="outlined"
            >
                {defaultFontFamilies.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                select
                label="Weight"
                value={font.fontWeight}
                onChange={(e) => setFont({...font, fontWeight: e.target.value})}
                variant="outlined"
            >
                {defaultFontWeights.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                select
                label="Size"
                value={font.fontSize}
                onChange={(e) => setFont({...font, fontSize: e.target.value})}
                variant="outlined"
            >
                {defaultFontSizes.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </Stack>
    )
}
