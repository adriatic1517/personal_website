import fs from "fs";
import path from "path";
import { setDefaultHighWaterMark } from "stream";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id

    // const id = fileName.replace(/\.html$/, '');
    const id = fileName;
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    let fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    fileContents = fileContents.split("\n");
    let title = fileContents[0].slice("title: ".length);
    if (title.length > 40) {
      title = title.slice(0, 40) + " ...";
    }

    let date = fileContents[1].slice("date: ".length);

    let bg_image = "/bg_images/" + fileContents[2].slice("img: ".length);

    // Combine the data with the id
    return {
      id,
      title,
      bg_image,
      date,
    };
  });

  // Sort posts by date
  allPostsData.sort((a, b) => {

   
    let a_array = a.date.split('\/');
    let b_array = b.date.split('\/');

    let month_a = a_array[0];
    let day_a = a_array[1];
    let year_a = a_array[2];

    let month_b = b_array[0];
    let day_b = b_array[1];
    let year_b = b_array[2];


    let data_a = new Date(year_a, month_a, day_a);
    let data_b = new Date(year_b, month_b, day_b);

    return data_b - data_a;
  });

  return allPostsData;

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
  let fileContents = fs.readFileSync(fullPath, "utf8");
  fileContents = fileContents.split("\n");
  let title = fileContents[0].slice("title: ".length);
  let date = fileContents[1];
  let bg_image = "/bg_images/" + fileContents[2].slice("img: ".length);
  let component_name = fileContents[3].slice("component_name: ".length);
  let caption = fileContents[4].slice("caption: ".length);
  let img_name = fileContents[5];

  // Combine the data with the id
  return {
    id,
    title,
    date,
    bg_image,
    component_name,
    caption,
    img_name,
  };
}
