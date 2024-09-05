import Image from 'next/image';

export default function Login() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="w-full md:w-1/2 px-8 md:px-16 flex flex-col">
          <div className="mb-8">
            <h2 className="font-bold text-3xl text-[#FF9E9E]">Login</h2>
            <p className="text-xl mt-4 text-[#393a3a]">Bem-vindo de volta!</p>
          </div>
          
          <form className="flex flex-col gap-4">
            <input
              className="p-2 rounded-xl border border-gray-300"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border border-gray-300 w-full"
                type="password"
                name="password"
                placeholder="Senha"
              />
            </div>
            <button className="bg-[#FF9E9E] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
          </form>
        </div>

        <div className="hidden md:block w-1/2 ml-6">
          <Image
            className="rounded-2xl"
            src="/logo/capa.jpg"
            alt="Login Background"
            layout="responsive"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
