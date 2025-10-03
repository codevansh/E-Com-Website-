import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-navbox">
                    Description
                </div>
                <div className="descriptionBox-navbox fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionBox-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptatibus omnis ratione accusantium placeat amet eius. Neque eos tempore dolore aliquid earum, voluptates quam magni dolorum eum quo facilis, molestias ducimus deleniti nostrum optio? Illum similique beatae magnam alias odit.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, soluta.</p>
            </div>
        </div>
    )
}

export default DescriptionBox