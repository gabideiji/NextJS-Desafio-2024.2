import Image from 'next/image';

export default function Login() {
  return (
   <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
    <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#FF9E9E]">Login</h2>
        <p className="text-xs mt-4 text-[#002D74]">Bem-vindo de volta!</p>
        </div>
        <form className="flex flex-col gap-4">
        <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
        <div className='relative'>
            <input
            className="p-2 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="Password"
            />
        </div>
        <button className="bg-[#FF9E9E] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
        </form>
    </div>
   </section>
  );
}
