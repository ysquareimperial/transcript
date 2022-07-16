import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import PrintTranscript from "./PrintTranscript";
import Transcript from "./Transcript";


function AppNavigation() {
    let element = useRoutes([

        {
            element: <AppIndex />,
            children: [{ index: true, element: <Transcript /> },
            {
                path: "/print-transcript",
                element: <PrintTranscript />,
            },
            ]
        },

    ]);
    return element;
}
export default AppNavigation;
