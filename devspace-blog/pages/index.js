import fs from "fs";
import path from "path";
import Layout from "../components/Layout";
import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
