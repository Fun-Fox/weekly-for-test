import MDXComponents from "@/components/mdx/MDXComponents";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `guide | ${siteConfig.name}`,
  };
}

export default async function Page() {
  return (
    <div className="flex flex-row w-full pt-12">
      <aside className="hidden md:block md:w-1/5 pl-6 max-h-[90vh] h-full overflow-auto sticky top-6 left-0"></aside>
      <div className="w-full md:w-3/5 px-2 md:px-12">
        <article id={`article`}>

          <MDXRemote
            source={content}
            components={MDXComponents}
            options={options}
          />
        </article>
        <Separator className="my-12 bg-gray-600" />
      </div>
      <div className="hidden md:flex flex-col justify-start lg:w-1/5 pr-6"></div>
    </div>
  );
}

const content = `

## 历史投稿人

***第1期***: [FunFox](https://github.com/Fun-Fox)

***第2期***: 待补充

## 当前投稿中-期数

***===《第2期》===*** 

## 投稿指南

### 一、[仓库](https://github.com/Fun-Fox/weekly-for-test.git)拉取

  git clone https://github.com/Fun-Fox/weekly-for-test.git

### 二、添加投稿内容

1. 使用[VSCode](https://code.visualstudio.com/)打开项目

2. 创建分支，分支命名规则：“weekly-[期数]-[作者笔名]”。 如第2期，作者笔名tt，则分支名为 weekly-002-tt。

  git checkout master && git checkout -b weekly-002-tt

3. 在/content目录下查看当前期数对应的mdx文件。 如第2期，则打开/content/002.mdx文件

4. 投稿前请查看《周刊模板及编写要求》

<img src="/content.png" width="15%" />

### 三、提交

  git add .

  git commit -m "简单描述更新的内容"

  git push origin weekly-[期数]-[作者笔名]

注：***提交完成后，我会进行合并***，感谢各位的投稿！
`;