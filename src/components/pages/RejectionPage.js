import site from "../../site-info"

function RejectionPage()
{
    return (
        <div>
            <h1>Rejection Page</h1>
            <p>
                Sorry, but { site.name } requires you to accept cookies
            </p>
        </div>
    )
}

export default RejectionPage