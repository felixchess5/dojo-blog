import BlogList from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
    // let name = 'mario';
    {/*
                Click Event Examples. e = event argument
                const handleCLick = (e) => {
                    console.log('hello, ninjas', e)
                };

                const handleClickAgain = (name, e) => {
                console.log('hello ' + name, e.target)
                }
             
                <button onClick={handleCLick}>Click Me</button>
                <button onClick={(e) => handleClickAgain('Mario', e)}>Click Me Again</button> 

                useState hooks are use primarily to automatically update data in the dom
                const [name, setName] = useState('mario');
                const handleClick = () => {
                setName('luigi');
                <p> { name } </p>
                <button onClick={handleClick}>Click Me</button>

                <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
            }
            const [name, setName] = useState('mario');
            console.log(name);
            <button onClick={ ()  => setName("luigi") }>Change Name</button>
            <p>{ name }</p>

            p*4 > lorem10 creates 4 <p> with lorem ipsum text with 10 words
            lorem20*5 generates 20 words in 5 lines

            npx json-server --watch data/db.json --port 8000 to launch local json server

            const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    handleDelete={handleDelete} // removed prop since no longer need the functionality to delete blogs from the dom

    setTimeout - to add latency
    */}
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            { isPending && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { blogs && <BlogList blogs={ blogs } title="All Blogs" /> /*adding blogs to this line guarantees that the right hand side will only display when the data is fully loaded*/ } 
        </div>
        
    );
}
 
export default Home;