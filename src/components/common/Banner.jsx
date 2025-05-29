import Image from 'next/image';

const Banner = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-2'>
                {/* ---------- Left Block ---------- */}
                <div>
                    <h1>
                        Search And Tour With <span>Ozalams</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eius fugiat explicabo, ea iure debitis veritatis
                        molestiae aliquid sit officiis aspernatur quam quasi
                        quisquam quos laboriosam, inventore perferendis eaque
                        praesentium dolores.
                    </p>
                    <div>
                        <Image
                            src='/assets/icon1.png'
                            alt='icons'
                            width={200}
                            height={100}
                        />
                        <Image
                            src='/assets/icon2.png'
                            alt='icons'
                            width={200}
                            height={100}
                        />
                        <Image
                            src='/assets/icon3.png'
                            alt='icons'
                            width={200}
                            height={100}
                        />
                    </div>
                </div>
                {/* ---------- Right Block ---------- */}
                <div></div>
            </div>
        </div>
    );
};
export default Banner;
