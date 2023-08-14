export function SubHeader({title,launch_date}){
    return(
        <div className="subheadercomp">
            <h2>{title}</h2>
            <h5>Launch Date:{launch_date}</h5>
        </div>
    )
}