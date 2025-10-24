import './newsletter.css'

const newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our News Letter Page and Stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default newsletter