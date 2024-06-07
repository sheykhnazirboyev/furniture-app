import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="container text-center w-full h-80">
            <header className="bg-no-repeat bg-auto h-80 bg-center flex flex-col gap-2 justify-center items-center bg-blog-hero">
                <h1 className="text-3xl font-bold">Blog</h1>
                <div className="flex gap-2 items-center">    
                    <Link to={'/'} className="font-bold text-xl">Home </Link>
                    <Link to={'/blog'}>Blog </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
