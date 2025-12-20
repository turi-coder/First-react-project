function CountWithOutState() {

    let count =0;

    function inc(){
        count= count+1;
        console.log("count",count);
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Count app</h1>
            <div className="countApp">
                <h2>{count}</h2>
                <button onClick={inc}>+</button>
            </div>
        </>
    )
}


export default CountWithOutState