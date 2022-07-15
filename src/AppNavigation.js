import { useRoutes } from "react-router-dom";
import PrintTranscript from "./PrintTranscript";
import Transcript from "./Transcript";


function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <Transcript />,
            children: [{ index: true }],
        },
        {
            path: "/print-transcript",
            element: <PrintTranscript />,
        },
    ]);
    return element;
}
export default AppNavigation;
