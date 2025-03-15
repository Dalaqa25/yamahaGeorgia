import { useParams } from "react-router"

export default function DetialsPage() {

    const { productId } = useParams();

    return (
        <>
            <h1>detials id:</h1>
            <h1>{productId}</h1>
        </>
    )
}