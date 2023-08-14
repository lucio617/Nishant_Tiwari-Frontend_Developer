import { Card } from "./Card"
import { useState,useEffect } from "react";
import { useGlobalContext } from "./ContextReducer";
export function CardSection() {
    const [allHistory, setAllHistory] = useState([])
    const {globalState}=useGlobalContext();

    const search=""
    const loadData = async () => {
     
        let response = await fetch("https://api.spacexdata.com/v3/history", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();

        // console.log(response)
        setAllHistory(response.splice(0,4))
    };
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <div className="section">
                <h1>History</h1>
            </div>
            <div className="subheader">
                {allHistory.filter(item=>item.title.toLowerCase().includes(globalState.toLowerCase())).map((hist) => {
                    return (
                        <div><Card title={hist.title} event_date={hist.event_date_utc} link={hist.links.article} ></Card></div>

                    )
                })}

            </div>
        </div>
    )
}