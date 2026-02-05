import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Ikigai = () => {
  const [email, setEmail] = useState("");

  const handleNotify = (e) => {
    e.preventDefault();
    // Add your email collection logic here
    alert("Thank you! We will notify you when the book is available.");
    setEmail("");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const testimonials = [
    {
      quote:
        "This book is designed especially for you; young adults navigating the exciting but sometimes confusing path toward your future.",
      author: "From the Introduction",
      role: "Unlocking You",
    },
    {
      quote:
        "It is with great pleasure that I congratulate the publication of this wonderful book on finding your ikigai... a 'reason for living' or 'something that makes life worth living.'",
      author: "Hiroshi Yoshimoto",
      role: "Ambassador of Japan to Ghana",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="section-container py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <motion.div {...fadeInUp}>
              <div className="inline-block bg-secondary-400 text-secondary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🌟 New Release - International Acclaim
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Your <span className="text-secondary-300">Ikigai</span>
                <br />
                Unlock Your Purpose
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-primary-100">
                The life-changing workbook for young African dreamers seeking
                meaning, direction, and success.
              </p>
              <p className="text-lg mb-8 text-primary-50">
                Discover how to transform your life through the ancient Japanese
                wisdom of Ikigai, tailored for African youth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#buy-now"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl text-center text-lg transform hover:scale-105"
                >
                  🛒 Buy Now - GH₵ 50
                </a>
                <a
                  href="#learn-more"
                  className="border-2 border-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Learn More
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">
                    Endorsed by Ambassador of Japan
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Interactive Workbook Format</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Book Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Book Mockup Placeholder - Replace with actual image */}
              <div className="relative mx-auto max-w-md">
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex flex-col items-center justify-center p-8 text-white">
                    <div className="text-center">
                      <div className="mb-4">
                        <svg
                          className="w-20 h-20 mx-auto"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">UNLOCKING YOU</h3>
                      <p className="text-lg mb-4">
                        The Ikigai Workbook for Young Dreamers
                      </p>
                      <div className="border-t border-white/30 pt-4">
                        <p className="font-semibold">Samuel Odoi-Laryea</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shadow effect */}
                <div className="absolute inset-0 bg-primary-900/20 blur-2xl rounded-xl transform translate-y-8"></div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                New Release Jan 2026!
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Made in Ghana 🇬🇭
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="section-container">
          <div className="text-center text-gray-600 text-sm mb-4">
            <p className="font-semibold">Featured Endorsement:</p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg italic text-gray-700">
              "It would be my sincere hope that the Japanese concept of ikigai
              offers you a hint to make your lives deeper and richer."
            </p>
            <p className="mt-3 font-semibold text-gray-900">
              - Hiroshi Yoshimoto
            </p>
            <p className="text-sm text-gray-600">
              Ambassador Extraordinary and Plenipotentiary of Japan to Ghana
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding" id="learn-more">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Are You Asking These Questions?
              </h2>
              <p className="text-xl text-gray-600">
                If you're a young person navigating the exciting but sometimes
                confusing path toward your future, you're not alone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "What am I meant to do with my life?",
                "How do I discover my true purpose?",
                "What career path should I choose?",
                "How can I make a meaningful impact?",
                "What are my unique gifts and talents?",
                "How do I balance passion with practicality?",
              ].map((question, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-accent-500 rounded"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg
                    className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-800">{question}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-900">
                This Workbook Has Your Answers
              </h3>
              <p className="text-lg text-gray-700">
                "Unlocking You" is your companion for the journey toward a life
                of meaning, joy, and impact. Through the powerful Japanese
                concept of Ikigai - adapted for African youth - you'll discover
                your unique purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Iron Bar Story */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From $100 to $15 Million
              </h2>
              <p className="text-xl text-gray-300">
                The Most Powerful Story About Human Potential You'll Ever Hear
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  value: "$100",
                  item: "Raw Iron Bar",
                  description:
                    "Ordinary. Unrefined. Full of promise, realizing none of it.",
                },
                {
                  value: "$250",
                  item: "Horseshoes",
                  description: "Basic skill applied. Value doubled.",
                },
                {
                  value: "$70,000",
                  item: "Sewing Needles",
                  description: "Precision, patience, specialized knowledge.",
                },
                {
                  value: "$6,000,000",
                  item: "Watch Components",
                  description:
                    "Mastery. Years of excellence. Every detail matters.",
                },
              ].map((stage, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-secondary-400 mb-2">
                    {stage.value}
                  </div>
                  <div className="text-lg font-semibold mb-2">{stage.item}</div>
                  <p className="text-sm text-gray-300">{stage.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-xl text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-4">$15,000,000</div>
              <div className="text-2xl font-semibold mb-4">
                High-Tech Laser Components
              </div>
              <p className="text-xl mb-6">
                The same iron. Different skill. Extraordinary value.
              </p>
              <p className="text-lg italic">
                "Right now, you are that bar of iron. You have the same
                fundamental potential. The question is: what are you going to do
                with it?"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's Inside This Life-Changing Workbook
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              11 comprehensive chapters packed with exercises, reflections, and
              real African success stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌳",
                title: "Becoming the Big Tree",
                description:
                  "How environment shapes destiny - discover your roots and potential for growth",
              },
              {
                icon: "🎯",
                title: "Understanding Ikigai",
                description:
                  "Master the four elements: What you love, what you're good at, what the world needs, and what you can be paid for",
              },
              {
                icon: "💎",
                title: "Discover Your Talents",
                description:
                  "Multiple intelligences assessment to identify your unique abilities",
              },
              {
                icon: "❤️",
                title: "Find Your Passion",
                description:
                  "Activities and exercises to uncover what truly brings you joy",
              },
              {
                icon: "🌍",
                title: "Solve World Problems",
                description:
                  "Identify the needs you're called to address in your community",
              },
              {
                icon: "💰",
                title: "Create Value",
                description:
                  "Learn how your skills can generate income and sustainability",
              },
              {
                icon: "🚀",
                title: "Your Mission Statement",
                description:
                  "Craft a personal mission that guides your decisions and actions",
              },
              {
                icon: "🗺️",
                title: "Map Your Ikigai",
                description:
                  "Visual exercises to see where your purpose intersects",
              },
              {
                icon: "📋",
                title: "Action Planning",
                description:
                  "Transform insights into concrete steps with short and long-term goals",
              },
            ].map((chapter, index) => (
              <motion.div
                key={index}
                className="card hover:border-primary-200 border-2 border-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-4xl mb-4">{chapter.icon}</div>
                <h3 className="text-xl font-bold mb-3">{chapter.title}</h3>
                <p className="text-gray-600">{chapter.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* African Success Stories */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Stories. Real Impact.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from African leaders who discovered their Ikigai and
              transformed their communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Wangari Maathai",
                role: "Nobel Peace Prize Winner",
                achievement: "Green Belt Movement - planted 51 million trees",
                lesson: "Environmental conservation + Education + Activism",
              },
              {
                name: "Fred Swaniker",
                role: "Education Innovator",
                achievement: "Founded African Leadership Academy & University",
                lesson:
                  "Education expertise + Passion for Africa + Leadership development",
              },
              {
                name: "William Kamkwamba",
                role: "Inventor & Author",
                achievement: "Built windmill from scrap, powered his village",
                lesson:
                  "Engineering skills + Problem-solving + Community impact",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {story.role}
                </p>
                <p className="text-gray-700 mb-4">{story.achievement}</p>
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-secondary-800">
                    Their Ikigai:
                  </p>
                  <p className="text-sm text-gray-700">{story.lesson}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Your story could be next.
            </p>
            <p className="text-lg text-gray-600">
              This workbook includes case studies from across Africa - Kenya,
              Nigeria, Ghana, Ethiopia, Rwanda, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Readers Are Saying
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Meet the Author</h2>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                  Samuel Odoi-Laryea
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  A passionate educator and youth mentor dedicated to empowering
                  the next generation of African leaders.
                </p>
                <p className="text-gray-700 mb-4">
                  With extensive experience in ICT, education, entrepreneurship,
                  and project management, Samuel has worked with thousands of
                  young people across the continent.
                </p>
                <p className="text-gray-700 mb-6">
                  As a lecturer at Ghana Institute of Management and Public
                  Administration (GIMPA), he combines academic excellence with
                  practical wisdom, bridging Japanese philosophy and African
                  cultural insights.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-sm text-gray-600 mb-2">
                    Contact for workshops & speaking engagements:
                  </p>
                  <p className="font-semibold text-gray-900">
                    📧 sammilaryeas@gmail.com
                  </p>
                  <p className="font-semibold text-gray-900">📱 0264017512</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Book is Different */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why This Book is Different
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Not just another self-help book - this is your personal
              transformation companion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✍️",
                title: "Interactive Workbook",
                description:
                  "Exercises, reflection spaces, and activities you complete as you read",
              },
              {
                icon: "🌍",
                title: "African-Centered",
                description:
                  "Real examples from Ghana, Kenya, Nigeria, Ethiopia, and across the continent",
              },
              {
                icon: "🎓",
                title: "Evidence-Based",
                description:
                  "Combines Japanese wisdom, psychology research, and cultural insights",
              },
              {
                icon: "📈",
                title: "Action-Oriented",
                description:
                  "Concrete steps and goal-setting frameworks for immediate implementation",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-primary-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Now Section */}
      <section
        className="section-padding bg-gradient-to-br from-gray-50 to-white"
        id="buy-now"
      >
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Start Your Journey Today
                </h2>
                <p className="text-xl text-primary-100">
                  Transform from raw potential into your most valuable self
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-600 aspect-[3/4] rounded-lg flex items-center justify-center text-white p-8">
                      <div className="text-center">
                        <svg
                          className="w-24 h-24 mx-auto mb-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                        <h3 className="text-2xl font-bold">UNLOCKING YOU</h3>
                        <p className="text-sm mt-2">The Ikigai Workbook</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-5xl font-bold text-gray-900">
                          GH₵ 50
                        </span>
                        <span className="text-gray-500 line-through">
                          GH₵ 75
                        </span>
                      </div>
                      <p className="text-green-600 font-semibold mb-2">
                        ✅ Launch Special - Save 33%
                      </p>
                      <p className="text-sm text-gray-600">
                        Limited time introductory pricing
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-6 h-6 text-green-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          11 comprehensive chapters
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-6 h-6 text-green-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Interactive exercises & worksheets
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-6 h-6 text-green-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Real African success stories
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-6 h-6 text-green-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Endorsed by Japanese Ambassador
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-6 h-6 text-green-600 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          ISBN: 978-9988-52-877-5
                        </span>
                      </div>
                    </div>

                    <a
                      href="tel:0264017512"
                      className="block w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl text-center text-lg transform hover:scale-105 mb-4"
                    >
                      🛒 Buy Now - Call 0264017512
                    </a>

                    <a
                      href="mailto:sammilaryeas@gmail.com?subject=Unlocking You Book Order"
                      className="block w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                    >
                      📧 Order via Email
                    </a>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="font-bold text-xl mb-4 text-center">
                    Get Notified About Bulk Orders & Workshops
                  </h3>
                  <form
                    onSubmit={handleNotify}
                    className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Notify Me
                    </button>
                  </form>
                  <p className="text-sm text-gray-600 text-center mt-3">
                    For school orders, corporate training, or speaking
                    engagements
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-4 bg-green-50 px-6 py-4 rounded-lg border-2 border-green-200">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className="text-left">
                  <p className="font-bold text-gray-900">
                    100% Satisfaction Guaranteed
                  </p>
                  <p className="text-sm text-gray-600">
                    Transform your life or your money back
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Purpose is Waiting
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              "If you want to go fast, go alone. If you want to go far, go
              together." - Ghanaian Proverb
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Join thousands of young Africans discovering their Ikigai and
              transforming their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#buy-now"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl text-lg inline-block"
              >
                Get Your Copy Now
              </a>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block"
              >
                Contact for Bulk Orders
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ikigai;
