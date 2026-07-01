● Simple workflow — just add a new file to _posts/ and push.

  Posts are grouped into year-month subfolders so _posts/ doesn't get
  unwieldy (Jekyll reads posts recursively, so subfolders work fine and
  don't change the post's URL — that's still controlled by permalink in
  _config.yml).

  1. Create the file with this exact naming format, inside the matching
     YYYY-MM subfolder (create the subfolder if it doesn't exist yet):

    _posts/YYYY-MM/YYYY-MM-DD-your-title.md


  2. Paste this header at the top, then write below it:

  ---
  layout: post
  title: "Your Post Title Here"
  date: 2026-07-15 11:53:00 -0500
  tags: [gamedev, design]
  ---
  
  Your content goes here. Write in plain Markdown.

  ## A Heading

  A paragraph. **Bold**, *italic*, [a link](https://example.com).


  3. Push to GitHub:
  git add .
  git commit -m "New post: your title"
  git push

  GitHub builds and publishes it automatically in ~30 seconds.

  ---
  That's the entire workflow. No CMS, no dashboard, no database. Your post will appear on the blog listing page and in the Recent Posts section on the home page automatically.




  4. To add an image:

  ● Just put the image in your images/ folder and reference it in the Markdown.

  1. Add the image to your repo:
  images/my-post-image.jpg

  2. Reference it in your post:
  ---
  layout: post
  title: "My Post"
  date: 2026-07-15
  tags: [gamedev]
  ---
  
  Here's a screenshot of the level I've been building:

  ![Level design overview](/images/my-post-image.jpg)
  
  More text continues here...

  The format is ![alt text](/images/filename.jpg).

  3. Push both the image and the post file together:
  git add .
  git commit -m "New post with images"
  git push

  ---


  5 Short Preview

  ❯ one question, in the index.html of the blog folder, what does "blog-card-excerpt" mean?                                                                                                                                                                                                                                     

● It's the short preview text shown under each post title in the listing.

  "Excerpt" is a publishing term for a snippet or summary of a longer piece. In this case, Jekyll automatically takes the first paragraph of your post and uses it as the excerpt. So on the blog listing page and the Recent Posts section, visitors see a brief taste of what the post is about before clicking in.

  For example your "About My Old Blog" post — the excerpt would show the opening line: "It's wonderful that Github provides the personal webpage function..." — just enough to give a sense of what the post is about.

  If you ever want to control exactly where the excerpt cuts off rather than letting Jekyll pick the first paragraph, you can add <!--more--> anywhere in your post:

  This is the part I want shown as the preview.

  <!--more-->

  Everything after this line is hidden from the excerpt.



