import Post from "../components/post"
import Code from "../components/code"
import Image from "next/image";
import Background from "../components/background";

function Blog_12_26_2023(props) {
      return (
      <Post bg_image={props.postData.bg_image}
        bg_title="A procession from Padshanama"
        bg_url="https://www.artic.edu/artworks/49336/a-procession-scene-with-musicians-from-a-copy-of-the-padshanama"
        heading="N Queens"
        date="19th December 2023">

       <p>We have to place <i>n</i> queens on a <i>n*n </i>chessboard so that no two queens are attacking each other.  </p>

       <p> Below we have a chessboard where n=5: </p>

        <img src="/static/blog_12_26_2023/n5.jpg" width="100%"/> 

        <p> Here is one of (many) solutions for this board:</p>

        <img src="/static/blog_12_26_2023/n5_sol.jpg" width="100%"/> 

        <p> We can confirm that no queens attach each other. A queen can move diagonally, horizationally & vertically. </p>
        <img src="/static/blog_12_26_2023/n5_sol1.jpg" width="100%"/> 
        <p> You should verify this holds for the other queens.</p>
        <p> Here you can see that no attacking line (extended using color of originating Q) passes through any of the Queens:</p>

        <img src="/static/blog_12_26_2023/n5_sol2.jpg" width="100%"/> 

        <p>We can simplify thinking about this problem by noticing that two queens can't occupy the same row or column (since they'd be attacking each other).</p> 
        <p>Then, we can try all combinations row by row, taking care that the block we place a queen in isn't being attacked by a queen from the rows above it.</p>
        <p> Here is how the recursion tree would look for a 4x4 board: </p>
        <img src="/static/blog_12_26_2023/n4_recursion.png" width="100%"/> 
        <p>And the pseudocode: 
        <img src="/static/blog_12_26_2023/pseudocode.png" width="100%"/> 
        both with permission from Jeff Erickson's <a target="_blank" href="https://jeffe.cs.illinois.edu/teaching/algorithms/">textbook.</a> </p>

        <p> The first two lines say that if we are done placing the final Q (i.e. the row is one greater than the grid size) print the result. </p>

        <p> The next block of lines says go over each column and checks if this block is under attack according to the following conditions.</p>

        <ol> 
          <li>Q[i] = j: a preceding row (i) has a Q in column j</li>
          <li>Q[i] = j+r-i: a preceding row (i) has a Q on the right diagonal obtained by j+r+i.</li>
          <li>Q[i] = j-r+i: a preceding row (i) has a Q on the left diagonal obtained by j-r-i.</li>

        </ol>
        <img src="/static/blog_12_26_2023/diagonal.jpg" width="100%"/> 

        <p>The formula initially calculates the coordinates of the two farthest boxes in its left and right diagonal (above it and if any).
        The diagonals must be j+r and j-r away by definition of diagonals. With each iteration of i, we move the diagonal one box inwards hence the i.
        </p> 

        <p>Once we finish checking the rows above our current position for any attacking queens, we decide whether to place the Q or skip the current box.</p>

Here is the solution translated to python:


        <Code className="language-python">
{`def place_queens(Q, r):
    if r == (len(Q)+1):
        print(Q)
    else:
        for j in range(len(Q)):
          legal = True
          for i in range(r):
            if (Q[i] == j) or (Q[i] == j+r-i) or (Q[i] == j-r+i):
              legal = False
          if legal:
            Q[r] = j
            place_queens(Q, r+1)
  
  place_queens([0,0,0,0,0],0) # 5*5, starting with row 0
`}
        </Code>
      </Post>

  );
}

export { Blog_12_26_2023 };
