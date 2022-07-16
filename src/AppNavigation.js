import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import PrintTranscript from "./PrintTranscript";
import Transcript from "./Transcript";
import ViewPDF from "./ViewPDF";


function AppNavigation() {
    let element = useRoutes([

        {
            element: <AppIndex />,
            children: [{ index: true, element: <Transcript /> },
            {
                path: "/print-transcript",
                element: <PrintTranscript />,
            },
            {
                path: "/view-pdf",
                element: <ViewPDF />,
            },
            ]
        },

    ]);
    return element;
}
export default AppNavigation;
