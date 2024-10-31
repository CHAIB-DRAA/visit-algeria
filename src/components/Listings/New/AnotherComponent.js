import Image from "next/image";

const AnotherComponent = ({ imageUrl }) => {
    return (
        <div>
            <h2>Here's the uploaded image in another component:</h2>
            <Image src={imageUrl} alt="Uploaded Image" width={500} height={300} />
        </div>
    );
};

export default AnotherComponent;
