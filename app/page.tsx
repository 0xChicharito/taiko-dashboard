import Image from 'next/image';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-gray-800">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-white pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-white lg:p-4">
          Welcome to &nbsp;
          <code className="font-mono font-bold">Node 9X</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href="https://node9x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/lightnode9xlogo.png"
              alt="Node 9X Logo"
              className=""
              width={180}
              height={46}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <Image
          className="relative"
          src="/mainlogonode9x.png"
          alt="mainlogonode9x.png Logo"
          width={360}
          height={74}
          priority
        />
        <p className="ml-4 text-3xl font-semibold text-gray-800">
          Trusted Node Operator
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-8 px-4">
        <a
          href="https://service.node9x.com"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Services{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            Find in-depth information about Node 9X services.
          </p>
        </a>

        <a
          href="https://explorer.node9x.com"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Explorer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
           Node 9X Explorer.
          </p>
        </a>

        <a
          href="https://explorer.node9x.com"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Project{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
          Project is live
          </p>
        </a>

        <a
          href="https://t.me/Oxchicharito"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Us{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-75">
            We are using infrastructure of Hetzner. Ensuring uptime and stability of system.
          </p>
        </a>
      </div>

      {/* Icons Telegram và Twitter */}
      <div className="fixed bottom-4 right-4 flex space-x-4">
        <a
          href="https://t.me/Oxchicharito"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaTelegramPlane size={28} />
        </a>
        <a
          href="https://twitter.com/0xchicharito"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaTwitter size={28} />
        </a>
      </div>
    </main>
  );
}
