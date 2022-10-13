function Blog_10_9_2022(){
    return (
        <div className="Post">
   
        <div className="Content">

        
            <h1>This will be the 9th</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>This is another para</p>
            <p>This is another one</p>
            <p> Lorum Ipsum</p>
            </div>

    
           
            
            <style jsx>{`
@media (min-width: 700px) {
    .Post {
        display:grid;
        grid-template-columns: 25vw 50vw 35vw;
        margin-bottom:10vh;
    }
    
    .Content {

        grid-column: 2/2;
        grid-row:2/2;

    }

}
     
    `}</style>
        </div>
    );
}

export {Blog_10_9_2022};