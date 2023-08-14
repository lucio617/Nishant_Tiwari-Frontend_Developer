import { SubHeader } from "./SubHeader";
import { useState, useEffect } from "react";
export function SubHeaderSec() {
    const [upcoming, setUpcoming] = useState([]);
    const loadData = async () => {
        let response = await fetch("https://api.spacexdata.com/v3/launches/upcoming", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();

        // console.log(response)
        setUpcoming(response);
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <div className="section">
                <h1>Upcoming Cores</h1>
            </div>
         

            <div className="subheader">
                {upcoming.map((data) => {
                    return (
                        <SubHeader title={data.mission_name} launch_date={data.launch_date_utc}></SubHeader>
                    )
                })}
        </div>
        </div>
    );
}
