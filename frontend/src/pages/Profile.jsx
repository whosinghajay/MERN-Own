import React from 'react'

const Profile = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center p-7'>Profile</h1>
      <form className="flex flex-col gap-4 ">
        <img src={"https://img.freepik.com/free-vector/universe-system-realistic-composition_1284-24084.jpg?w=996&t=st=1697823606~exp=1697824206~hmac=4d8a77b241527539a571a09e5499ccab1cfdaaf85142c844e6d70696ff2fcd3e"} alt='profilePic' className='rounded-full h-24 w-24 self-center mt-2 object-cover cursor-pointer'/>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          Update
        </button>
        <button className="bg-green-600 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          Create Post
        </button>
      </form>
      <div className='flex justify-between'>
        <span className='text-red-500 font-semibold ml-2 mt-2'>Delete Account</span>
        <span className='text-red-500 font-semibold mr-2 mt-2'>Logout</span>
      </div>
      <p className='text-green-700 font-semibold text-center mt-4'>See your posts</p>
    </div>
  )
}

export default Profile
