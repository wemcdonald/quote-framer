import {Box, Stack} from "@mui/material";
import {useFont} from "../FontProvider";

export default function QuoteCard({row, index}) {
    return (
        <Box
            id={`quote-card-${index}`}
            sx={{
                width: '100%',
                paddingTop: '62.5%', // 1280:800 Aspect Ratio
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Stack
                padding={4}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    bgcolor: 'black',
                    color: 'white',
                }}
            >
                <Stack
                    direction={"column"}
                    gap={6}
                    height={"100%"}
                    justifyContent={"center"}
                >
                    <Quote quote={row[0]}/>
                    <Attribution attribution={row[1]}/>
                </Stack>
            </Stack>
        </Box>
    );
};

function Quote({quote}) {
    const {quoteFont} = useFont();
    return (
        <Stack
            maxHeight="75%"
            sx={{
                font: quoteFont.font,
                fontSize: quoteFont.fontSize,
                fontWeight: quoteFont.fontWeight,
            }}
        >{quote}</Stack>
    )
}


function Attribution({attribution}) {
    const {attributionFont} = useFont();
    attribution = attribution || "Unknown";
    return (
        <Stack
            height="25%"
            sx={{
                font: attributionFont.font,
                fontSize: attributionFont.fontSize,
                fontWeight: attributionFont.fontWeight,
            }}
        >
            {attribution}
        </Stack>
    )
}
