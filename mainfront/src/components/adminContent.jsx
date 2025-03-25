import '../assets/admin.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function AdminContent() {
    // interval animations between h2Text
    const h2Text = ["modify", "add", "delete"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState(true)
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % h2Text.length)
                setFade(true)
            }, 300)
        }, 3000)

        return () => clearInterval(interval)
    }, [h2Text.length])


    // data fetching
    const [accessories, setAccessories] = useState([]);
    const [motorcycles, setMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessoriesResponse = await axios.get('https://yamahageorgia-backend.onrender.com/api/accessories');
                const motorcyclesResponse = await axios.get('https://yamahageorgia-backend.onrender.com/api/products');
    
                console.log("Accessories Response:", accessoriesResponse);
                console.log("Motorcycles Response:", motorcyclesResponse);
    
                // Adjust data access based on actual structure
                setAccessories(accessoriesResponse.data.data || accessoriesResponse.data);
                setMotorcycles(motorcyclesResponse.data.data || motorcyclesResponse.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
        <div className='admin-content'>
            <div className='admin-content-wrapper'>
                <div style={{textAlign:'center', fontFamily:'Atkinson Hyperlegible Mono'}}>
                    <h1 style={{color:'#8294a6'}}>
                        Hello,Admin!👋
                    </h1>
                    <h2 className={fade ? 'fade-in' : 'fade-out'} style={{fontSize:'2rem', color:'#000'}}>
                        {h2Text[currentIndex]} your data
                    </h2>
                </div>
                <form action="">
                    <input style={{textAlign:'center', width:'400px'}} placeholder='search item' type="text" />
                </form>
                <div>
                    <h2>Accessories</h2>
                        {accessories.map((item, index) => (
                            <li key={index}>{item.name || "No Name"}</li>
                        ))}

                    <h2>Motorcycles</h2>
                        {motorcycles.map((item, index) => (
                            <li key={index}>{item.name || "No Name"}</li>
                        ))}
                </div>
            </div>
        </div>
        </>
    )
}
