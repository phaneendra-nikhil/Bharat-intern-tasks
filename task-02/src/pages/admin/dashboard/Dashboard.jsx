import React, { useContext, useEffect } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode, getAllBlog, deleteBlogs } = context;
    console.log(getAllBlog)
    
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div className="py-10">
                <div
                    className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        <img
                            className=" w-60 h-60  object-cover rounded-fullp-1"
                            src={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'} alt="profile"
                        />
                    </div>
                    <div className="right p-10">
                        <h1
                            className='text-left font-bold text-3xl mb-2'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                        >
                            Phaneendra Nikhil
                        </h1>

                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            Full Stack Web Developer
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">tallapragadaphaneendranikhil@gmail.com
                        </h2>
                        {/* <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            <span>Total Blog : </span>  4
                        </h2> */}
                        <div className=" flex gap-2 mt-4">
                            <Link to={'/createblog'}>
                                <div className=" mb-5">
                                    <Button
                                        style={{
                                            background: mode === 'dark'
                                                ? 'rgb(226, 232, 240)'
                                                : '#252525',
                                            color: mode === 'dark'
                                                ? 'black'
                                                : 'white'
                                        }}
                                        className='px-10 py-4'
                                    >
                                        Create Blog
                                    </Button>
                                </div>
                            </Link>
                            <div className="mb-2">
                                <Button 
                                    onClick={logout}
                                    style={{
                                        background: mode === 'dark'
                                            ? '#ED2B2A'
                                            : '#ED2B2A',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                    className='px-8 py-4'
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                

                {/* Table  */}
                <div className="">
                    <div className=' container mx-auto px-2 max-w-6xl my-5' >
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* table  */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >
                                {/* thead  */}
                                <thead
                                    style={{
                                        background: mode === 'dark'
                                            ? 'white'
                                            : '#252525'
                                    }}
                                    className="text-l ">
                                    <tr>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-5">
                                            S.No
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-5">
                                            Thumbnail
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-5">
                                            Title
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-5">
                                            Category
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-5">
                                            Date
                                        </th>
                                        <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-5">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {/* tbody  */}
                                {getAllBlog.length > 0
                                    ?
                                    <>
                                        {getAllBlog.map((item, index) => {
                                            const {thumbnail, date, id} = item;
                                            console.log(item)
                                            return (
                                                <tbody>
                                                    <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                                        {/* S.No   */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {index + 1}.
                                                        </td>
                                                        {/* Blog Thumbnail  */}
                                                        <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                            {/* thumbnail  */}
                                                            <img className='w-30 h-20 rounded-lg' 
                                                            src={thumbnail} alt="thumbnail" />
                                                        </th>
                                                        {/* Blog Title  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {item.blogs.title}
                                                        </td>
                                                        {/* Blog Category  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {item.blogs.category}
                                                        </td>
                                                        {/* Blog Date  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {date}
                                                        </td>
                                                        {/* Delete Blog  */}
                                                        <td onClick={()=> deleteBlogs(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            <button className=' px-8 py-3 rounded-lg text-white font-bold bg-red-500'>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}</>
                                    :
                                    <>
                                        <h1>Not Found</h1>
                                    </>
                                }
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard