import { getCachedPosts, setCachedPosts } from '@/lib/cache';
import { PostsByMonth, WeeklyPost } from '@/types/weekly';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export async function getWeeklyPosts(): Promise<{ posts: WeeklyPost[]; postsByMonth: PostsByMonth }> {
  const cache = getCachedPosts();
  if (cache.posts && cache.postsByMonth) {
    return { posts: cache.posts, postsByMonth: cache.postsByMonth };
  }

  const postsDirectory = path.join(process.cwd(), 'content')
  let filenames = await fs.promises.readdir(postsDirectory)
  filenames = filenames.reverse()

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = await fs.promises.readFile(fullPath, 'utf8')

      const { data, content } = matter(fileContents)
      const month = dayjs(data.date).format('YYYY-MM-DD').slice(0, 7);

      const visible = !(data.visible === 'draft' || data.visible === 'invisible');
      const pin = data.pin && data.pin === 'pin';

      return {
        id: month,
        metadata: data, // { slug/url title date }
        title: data.title,
        slug: data.slug,
        visible,
        pin,
        content,
      }
    })
  )

  // Group by month
  const postsByMonth: PostsByMonth = posts.reduce((acc: PostsByMonth, post: WeeklyPost) => {
    const month = dayjs(post.metadata.date).format('YYYY-MM-DD').slice(0, 7);
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(post);
    return acc;
  }, {});

  setCachedPosts({
    posts,
    postsByMonth
  });
  return {
    posts,
    postsByMonth
  }
}
