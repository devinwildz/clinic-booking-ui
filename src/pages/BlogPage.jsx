import { motion } from 'framer-motion';
import { useState } from 'react';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Medical', 'Health', 'Doctors', 'Clinic'];
  
  const blogs = [
    {
      id: 1,
      title: 'The Benefits of Telemedicine in Modern Healthcare',
      category: 'Medical',
      image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/11/blog-10.jpg',
      excerpt: 'Explore how telemedicine is revolutionizing healthcare delivery and improving patient outcomes...',
      date: 'Mar 12, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding Mental Health in the Digital Age',
      category: 'Health',
      image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/09/blog-02-1.jpg',
      excerpt: 'A comprehensive guide to maintaining mental wellness in our increasingly connected world...',
      date: 'Mar 10, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Latest Advances in Medical Technology',
      category: 'Medical',
      image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/09/blog-04.jpg',
      excerpt: 'Discover the cutting-edge technologies shaping the future of healthcare...',
      date: 'Mar 8, 2024',
      readTime: '6 min read'
    }
    // Add more blog posts as needed
  ];

  const filteredBlogs = selectedCategory.toLowerCase() === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news and insights from the medical world
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-[#0e82fd] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#0e82fd] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="text-[#0e82fd] font-medium hover:text-[#0e82fd]/80 transition-colors"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;