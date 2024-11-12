import React, { useState, useEffect } from 'react'
import { Shield, Github, Terminal, Cpu, Binary, Flag, Lock } from 'lucide-react'

const BinaryBattlefieldComponent = () => {
  const [glitchText, setGlitchText] = useState("BHISHMA'S BINARY BATTLEFIELD")

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+'
      const newText = "BHISHMA'S BINARY BATTLEFIELD".split('').map((char, index) =>
        Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char
      ).join('')
      setGlitchText(newText)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {glitchText}
          </span>
          <span className="relative z-10">BHISHMA'S BINARY BATTLEFIELD</span>
        </h1>
        <p className="text-xl md:text-2xl text-green-400">Reverse Engineer the Code of Dharma</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-400">
            <Shield className="mr-2" />
            Mission Briefing
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Digital warriors, prepare for a challenge! In the “EasyyyyyPWD” mission, you must
            examine a binary and discover the correct username and password combination hidden
            within. Disassemble and analyze this code to uncover the secrets.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-400">
            <Terminal className="mr-2" />
            Battle Phases
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-yellow-500">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400 flex items-center">
                <Binary className="mr-2" /> Decode the Binary
              </h3>
              <p className="text-sm text-gray-300">
                Analyze the program using Ghidra or IDA. Despite stripped headers, with IDA’s
                powerful insights, track the binary structure to decode usernames and passwords.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-blue-500">
              <h3 className="text-lg font-semibold mb-2 text-blue-400 flex items-center">
                <Lock className="mr-2" /> Crack the Keys
              </h3>
              <p className="text-sm text-gray-300">
                Identify two 128-bit keys and apply them to reveal the hidden credentials.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-red-500">
              <h3 className="text-lg font-semibold mb-2 text-red-400 flex items-center">
                <Cpu className="mr-2" /> Verify the Victory
              </h3>
              <p className="text-sm text-gray-300">
                Use SIMD instructions to compare your results. Once the username and password match
                expectations, you’ll see the final flag as your sign of success.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-400">
            <Github className="mr-2" />
            Access the Digital Armory
          </h2>
          <p className="mb-4 text-gray-300">Click the link below to access the repository:</p>
          <a
            href="https://github.com/Fujimori-Zeta/Utkrishta-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 underline"
          >
            Bhishma's Binary Battlefield Repository
          </a>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Bhishma's Wisdom</h2>
          <blockquote className="italic text-gray-300 border-l-4 border-green-500 pl-4">
            "True victory lies not in the strength of your weapons, but in the power of your
            intellect. Decode my legacy, and the secrets of the universe shall be yours."
          </blockquote>
        </section>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Chakravyuh</p>
      </footer>
    </div>
  )
}

export default BinaryBattlefieldComponent
