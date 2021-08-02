import styles from "@/styles/index/RecentWritings.module.scss";
import Button from "../Button";
import RecentPostCard from "./RecentPostCard";

const RecentWritings = ({ posts }: { posts: BlogPost[] }) => (
  <section className={styles.recentWritings}>
    <h1>Recent Writings</h1>
    <div className={styles.posts}>
      {posts.map((post) => (
        <RecentPostCard
          key={post.slug}
          slug={post.slug}
          tag={post.tag}
          title={post.title}
          summary={post.summary}
          {...(post.image
            ? {
                image: post.image,
              }
            : {})}
        />
      ))}
    </div>
    <Button href="/blog" external={false}>
      View All Posts
    </Button>
  </section>
);

export default RecentWritings;
