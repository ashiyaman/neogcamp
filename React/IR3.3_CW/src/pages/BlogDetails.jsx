import { useParams } from 'react-router-dom';

import Header from '../components/Header.jsx';

const BlogDetails = () => {
  const blogId = useParams();

  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie quam non dui maximus cursus. In ac quam varius, consectetur mi sit amet, facilisis eros. Sed ac magna venenatis, facilisis enim eu, ultrices metus. Suspendisse massa erat, pretium sit amet mattis ut, condimentum at sapien. Nullam vel accumsan lacus. Maecenas auctor orci tortor, eu dapibus arcu porttitor a. Sed diam neque, ullamcorper et felis at, interdum malesuada sapien. Praesent eu consectetur erat. Nunc non erat id mauris convallis lacinia non in nulla. In imperdiet, eros id vehicula egestas, mauris ipsum ullamcorper elit, in rhoncus eros sapien vitae metus. Vestibulum eget vehicula neque. Aenean purus lectus, convallis nec ex et, scelerisque auctor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam imperdiet dictum lorem, et elementum dolor gravida id. Morbi pharetra nec velit vel rhoncus.',
      datePosted: 'February 18, 2024',
    },
    {
      id: 2,
      title: 'Blog 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie quam non dui maximus cursus. In ac quam varius, consectetur mi sit amet, facilisis eros. Sed ac magna venenatis, facilisis enim eu, ultrices metus. Suspendisse massa erat, pretium sit amet mattis ut, condimentum at sapien. Nullam vel accumsan lacus. Maecenas auctor orci tortor, eu dapibus arcu porttitor a. Sed diam neque, ullamcorper et felis at, interdum malesuada sapien. Praesent eu consectetur erat. Nunc non erat id mauris convallis lacinia non in nulla. In imperdiet, eros id vehicula egestas, mauris ipsum ullamcorper elit, in rhoncus eros sapien vitae metus. Vestibulum eget vehicula neque. Aenean purus lectus, convallis nec ex et, scelerisque auctor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam imperdiet dictum lorem, et elementum dolor gravida id. Morbi pharetra nec velit vel rhoncus.',
      datePosted: 'March 5, 2024',
    },
    {
      id: 3,
      title: 'Blog 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie quam non dui maximus cursus. In ac quam varius, consectetur mi sit amet, facilisis eros. Sed ac magna venenatis, facilisis enim eu, ultrices metus. Suspendisse massa erat, pretium sit amet mattis ut, condimentum at sapien. Nullam vel accumsan lacus. Maecenas auctor orci tortor, eu dapibus arcu porttitor a. Sed diam neque, ullamcorper et felis at, interdum malesuada sapien. Praesent eu consectetur erat. Nunc non erat id mauris convallis lacinia non in nulla. In imperdiet, eros id vehicula egestas, mauris ipsum ullamcorper elit, in rhoncus eros sapien vitae metus. Vestibulum eget vehicula neque. Aenean purus lectus, convallis nec ex et, scelerisque auctor purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam imperdiet dictum lorem, et elementum dolor gravida id. Morbi pharetra nec velit vel rhoncus.',
      datePosted: 'August 23, 2024',
    },
  ];

  const blogData = blogs.find((blog) => blog.id == blogId.blogId);
  console.log(blogData);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>{blogData.title}</h2>
        <small>Posted on {blogData.datePosted}</small>
        <p className="pt-3">{blogData.content}</p>
      </main>
    </>
  );
};

export default BlogDetails;
