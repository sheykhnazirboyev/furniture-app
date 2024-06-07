import img1 from '../../assets/BlogPageImage_Fisrt.png';
import img2 from '../../assets/BlogPageImage_Second.png';
import img3 from '../../assets/BlogPageImage_Third.png';

const Cards = () => {
    return (
        <div className='container px-6 py-10'>
            <div className="first-card flex gap-12 justify-between">
                <div className="leftBlog text-left w-2/3">
                    <img className='w-full' src={img1} alt="img" />
                    <h2 className='text-2xl my-4     font-bold'>Going all-in with millennial design</h2>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <h2 className='text-2xl font bold cursor-pointer my-8'>Read more</h2>
                    <img src={img2} alt="img" />
                    <h2 className='text-2xl my-4     font-bold'>Going all-in with millennial design</h2>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <h2 className='text-2xl font bold cursor-pointer my-8'>Read more</h2>
                    <img src={img3} alt="img" />
                    <h2 className='text-2xl my-4     font-bold'>Going all-in with millennial design</h2>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <h2 className='text-2xl font bold cursor-pointer my-8'>Read more</h2>
                </div>
                
                <div className="rightBlog">
                    <div className="category px-8 flex flex-col gap-8">
                        <input type="text" className='border border-spacing-1 rounded py-3' />
                        <h2 className='text-left font-bold text-2xl'>Categories</h2>
                        <div className="flex w-96 justify-between" >
                            <p>Crafts</p>
                            <p>2</p>
                        </div>
                        <div className="flex w-96 justify-between">
                            <p>Design</p>
                            <p>2</p>
                        </div>
                        <div className="flex w-96 justify-between">
                            <p>HandMade</p>
                            <p>2</p>
                        </div>
                        <div className="flex w-96 justify-between">
                            <p>Interior</p>
                            <p>2</p>
                        </div>

                    <div className='flex flex-col gap-9'>
                        <h2 className='text-2xl font-bold text-left my-5'>Resent Posts</h2>
                        <div  className='flex gap-4'>
                            <img className=' w-24' src={img1} alt="img" /> 
                            <div className='flex flex-col text-left  gap-2'>
                                <h2 className=' text-sm'>Going all-in with <br />    millennial design</h2>
                                <p className='text-xs'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div  className='flex gap-4'>
                            <img className=' w-24' src={img2} alt="img" /> 
                            <div className='flex flex-col text-left  gap-2'>
                                <h2 className=' text-sm'>Going all-in with <br />    millennial design</h2>
                                <p className='text-xs'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div  className='flex gap-4'>
                            <img className=' w-24' src={img3} alt="img" /> 
                            <div className='flex flex-col text-left  gap-2'>
                                <h2 className=' text-sm'>Going all-in with <br />    millennial design</h2>
                                <p className='text-xs'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div  className='flex gap-4'>
                            <img className=' w-24' src={img2} alt="img" /> 
                            <div className='flex flex-col text-left  gap-2'>
                                <h2 className=' text-sm'>Going all-in with <br />    millennial design</h2>
                                <p className='text-xs'>03 Aug 2022</p>
                            </div>
                        </div>
                        <div  className='flex gap-4'>
                            <img className=' w-24' src={img3} alt="img" /> 
                            <div className='flex flex-col text-left  gap-2'>
                                <h2 className=' text-sm'>Going all-in with <br />    millennial design</h2>
                                <p className='text-xs'>03 Aug 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Cards;
