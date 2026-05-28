import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  return (
    <>
      <Head>
        <title>Futebol Manager - Início</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <div className="relative h-screen w-screen overflow-hidden bg-black">
        {/* Fundo do Estádio */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/assets/estadio-bg.jpg')",
            filter: 'brightness(0.6)'
          }}
        />
        
        {/* Camada de sobreposição escura */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        {/* Conteúdo Principal */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          
          {/* Título */}
          <div className="mb-16 text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-200">
                FOOTBALL
              </span>
              <br />
              <span className="text-white/90">MANAGER</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 font-light tracking-wider">
              ESCASSEZ GLOBAL • ATLETAS ÚNICOS
            </p>
          </div>

          {/* Menu Principal - Botões Retangulares com Cantos Arredondados */}
          <div className="flex flex-col gap-5 w-full max-w-sm">
            
            {/* Botão JOGAR */}
            <button 
              onClick={() => console.log('Navegar para criar clube / login')}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-green-500 to-emerald-700 px-10 py-6 text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                JOGAR
              </span>
            </button>

            {/* Botão CONFIGURAÇÕES */}
            <button 
              onClick={() => setMenuAtivo(!menuAtivo)}
              className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 text-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                CONFIGURAÇÕES
              </span>
            </button>

            {/* Botão LOJA */}
            <button 
              onClick={() => console.log('Navegar para loja')}
              className="rounded-3xl bg-gradient-to-b from-yellow-500 to-amber-700 px-10 py-5 text-xl font-semibold text-white hover:from-yellow-400 hover:to-amber-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              LOJA
            </button>
          </div>

          {/* Versão e Status */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm font-mono">v0.1.0-alpha</p>
            <p className="text-gray-600 text-xs mt-1">Servidor: {process.env.NEXT_PUBLIC_API_URL || 'localhost'}</p>
          </div>
        </div>
      </div>
    </>
  );
}
