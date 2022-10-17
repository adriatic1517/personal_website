import fs from 'fs';
import path from 'path';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id

    // const id = fileName.replace(/\.html$/, '');
    const id = fileName;
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    let fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    fileContents = fileContents.split("\n");
    let title = fileContents[0].slice("title: ".length);
    if ((title.length) > 40) {
      title = title.slice(0, 40) + " ...";
    }

    let date = fileContents[1].slice("date: ".length);

    let bg_image =  "/bg_images/"  + fileContents[2].slice("img: ".length);
    
    // Combine the data with the id
    return {
      id,
      title, 
      bg_image, 
      date
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}`);
  let fileContents = fs.readFileSync(fullPath, 'utf8');
  fileContents = fileContents.split("\n");
  let title = fileContents[0].slice("title: ".length);
  let date = fileContents[1];
  let bg_image = "/bg_images/" + fileContents[2].slice("img: ".length);
  let component_name = fileContents[3].slice("component_name: ".length);
  let caption = fileContents[4].slice("caption: ".length);
 

 
  // Combine the data with the id
  return {
    id,
    title,
    date, 
    bg_image,
    component_name,
    caption
  };
}

