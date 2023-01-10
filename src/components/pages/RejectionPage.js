function RejectionPage(props)
{

    const rejectionText = "Sorry, but frfrnocapngl requires you to accept cookies";

    props.customMessage = "Custom text"

    return (
        <div>
            <h1>Rejection Page</h1>
            <p>{ props.customMessage ? rejectionText : props.customMessage }</p>
        </div>
    )
}

export default RejectionPage