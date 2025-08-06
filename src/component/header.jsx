




export default function Header(num){
    const percentage = (num.id / 20) * 100;
    const result = Math.floor(percentage);


    return (
        <>
            <h2>Flash cards</h2>
            <div className="header">
                <div className="scale">
                    <div className="width" style={{width:`${percentage}%`}}>

                    </div>
                    <p>{result}%</p>
                </div>
                <div className="amount">
                    <p>{num.id+1} of 20</p>
                </div>
            </div>

        </>
    );

}