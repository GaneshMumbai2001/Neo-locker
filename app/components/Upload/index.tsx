import Image from "next/image";

interface UploadFeature {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const uploadFeatures: UploadFeature[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Upload',
        subheading: 'you can send your photo',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Submit',
        subheading: 'you can submit ',
    },
];

const Upload = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="upload-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">UPLOAD</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">The most trusted cryptocurrency platform</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {uploadFeatures.map((item, index) => (
                            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={index}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{item.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{item.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Form */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4">Upload Your Document</h3>
                <p className="mb-4 text-bluish">Securely upload and manage your important documents.</p>
                <form className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" className="w-full border rounded-md py-2 px-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-medium mb-2">Type</label>
                        <input type="text" id="type" className="w-full border rounded-md py-2 px-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-gray-700 font-medium mb-2">File Upload</label>
                        <input type="file" id="file" className="w-full border rounded-md py-2 px-3" />
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-navyblue to-navyblue text-white border border-purple font-medium py-2 px-4 rounded-md hover:opacity-90">Upload</button> 
                </form>
            </div>
        </div>
    );
}

export default Upload;
