import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const { category } = useParams();
  const categoryDetails = {
    photographer: {
      title: 'Professional Photographers',
      description: 'Capture your special moments with our talented photographers.',
      freelancers: [
        { name: 'Rajesh Sharma', specialty: 'Wedding Photography' },
        { name: 'Priya Patel', specialty: 'Portrait Photography' },
        { name: 'Amit Kumar', specialty: 'Nature Photography' }
      ]
    },
    artist: {
      title: 'Creative Artists',
      description: 'Bring your ideas to life with our skilled artists.',
      freelancers: [
        { name: 'Anjali Mishra', specialty: 'Painting' },
        { name: 'Rahul Gupta', specialty: 'Sculpture' },
        { name: 'Kriti Singh', specialty: 'Digital Art' }
      ]
    },
    writer: {
      title: 'Experienced Writers',
      description: 'Get your message across with our gifted writers.',
      freelancers: [
        { name: 'Arun Sharma', specialty: 'Content Writing' },
        { name: 'Swati Singh', specialty: 'Copywriting' },
        { name: 'Rohit Verma', specialty: 'Technical Writing' }
      ]
    },
    translation: {
      title: 'Accurate Translators',
      description: 'Break down language barriers with our skilled translators.',
      freelancers: [
        { name: 'Shreya Desai', specialty: 'English to Hindi' },
        { name: 'Rajiv Kapoor', specialty: 'French to English' },
        { name: 'Priyanka Reddy', specialty: 'Spanish to Hindi' }
      ]
    },
    editor: {
      title: 'Meticulous Editors',
      description: 'Polish your work with our detail-oriented editors.',
      freelancers: [
        { name: 'Sanjay Tiwari', specialty: 'Proofreading' },
        { name: 'Ananya Dubey', specialty: 'Copy Editing' },
        { name: 'Vivek Singhania', specialty: 'Content Editing' }
      ]
    },
    finance: {
      title: 'Financial Experts',
      description: 'Navigate your finances with our knowledgeable experts.',
      freelancers: [
        { name: 'Ankit Patel', specialty: 'Investment Planning' },
        { name: 'Neha Gupta', specialty: 'Tax Consulting' },
        { name: 'Rakesh Kumar', specialty: 'Financial Analysis' }
      ]
    },
    'data-analyst': {
      title: 'Data-Driven Analysts',
      description: 'Make informed decisions with our data analysis specialists.',
      freelancers: [
        { name: 'Sneha Malhotra', specialty: 'Data Visualization' },
        { name: 'Vikram Singh', specialty: 'Statistical Analysis' },
        { name: 'Anushka Chauhan', specialty: 'Data Mining' }
      ]
    },
    'music-producer': {
      title: 'Talented Music Producers',
      description: 'Bring your music to life with our experienced producers.',
      freelancers: [
        { name: 'Ravi Sharma', specialty: 'Hip Hop' },
        { name: 'Kavya Singh', specialty: 'Classical' },
        { name: 'Arjun Gupta', specialty: 'Electronic' }
      ]
    },
  };

  const currentCategory = categoryDetails[category];

  return (
    <div className="container mx-auto"> 
      <Navbar />
      <div className="category-details  bg-black text-white p-8 md:min-h-[40rem] ">
        <h1 className="text-3xl  mx-auto font-bold mb-4">{currentCategory?.title || "Category Details"}</h1>
        <p className="text-lg mx-auto mb-6">{currentCategory?.description}</p>

        <h2 className="text-xl font-semibold mb-4">Freelancers in this Category:</h2>

        <ul className="freelancer-list grid grid-cols-1 md:grid-cols-2 gap-4"> 
          {currentCategory?.freelancers.map((freelancer, index) => (
            <li key={index} className="freelancer bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-md flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-4 text-lg font-semibold">{freelancer.name}</span>
                <span className="text-gray-400">{freelancer.specialty}</span>
              </div>
              <button className="bg-blue-400 hover:bg-blue-700 text-gray-800 font-semibold px-4 py-2 rounded-md">Contact</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryDetails;