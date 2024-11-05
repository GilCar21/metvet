import { useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div className='max-w-[1440px] 2xl:mx-auto mx-[24px] flex bg-white rounded-lg mt-5 '>
        <div className='w-[50%] flex justify-center flex-col px-8'>
          <h2 className='font-bold text-[36px] text-[#201836]'>A Medvet</h2>
          <p className='text-[#201836]'>
            Desde 2012, a Medvet Distribuidora se destaca no mercado de produtos veterinários do Rio Grande do Norte, oferecendo soluções inovadoras e de alta qualidade para clínicas veterinárias, pet shops e criadores. Com uma equipe dedicada e apaixonada pelo bem-estar animal, estamos comprometidos em levar o que há de melhor no setor pet para todo o estado. Nossa missão é garantir que os profissionais e empresários tenham acesso aos produtos mais confiáveis, promovendo a saúde e o bem-estar dos pets e fortalecendo o mercado pet local.</p>
        </div>
        <div className='flex justify-center w-[50%]'>
          <img src="/img1.png" alt=""  />
        </div>
      </div>

      <div className='max-w-[1440px] 2xl:mx-auto mx-[24px] flex bg-[#006F44] rounded-lg mt-4 '>
        <div className='flex justify-center w-[50%] py-[56px]'>
          <img src="/img2.png" alt="" className='xl:w-[400px]'/>
        </div>
        <div className='w-[50%] flex justify-center flex-col pr-6'>
          <h2 className='font-bold text-[36px] text-[#ffffff]'>Indústrias Parceiras</h2>
          <p className='text-[#f4f4f4]'>
          Na Medvet Distribuidora, trabalhamos lado a lado com as maiores e mais renomadas indústrias do setor veterinário e pet do Brasil e do mundo. Sabemos que a qualidade dos produtos é fundamental para garantir o sucesso dos nossos clientes e o bem-estar dos animais. Por isso, selecionamos cuidadosamente as marcas que distribuímos, assegurando que cada item em nosso portfólio atenda aos mais altos padrões de qualidade e eficácia. Entre as nossas parceiras estão as líderes do mercado, reconhecidas por sua inovação e compromisso com a saúde animal.
          </p>
        </div>
      </div>

      <div className='mt-4 rounded-lg overflow-hidden 2xl:mx-auto mx-[24px] flex justify-between max-w-[1440px] px-6 bg-white items-center h-[138px]'>
        <img src="/marca1.png" alt="banner" />
        <img src="/marca2.png" alt="banner" />
        <img src="/marca3.png" alt="banner" />
        <img src="/marca4.png" alt="banner" />
        <img src="/marca5.png" alt="banner" />
        <img src="/marca6.png" alt="banner" />
        <img src="/marca7.png" alt="banner" />
      </div>

      <div className='max-w-[1440px] 2xl:mx-auto mx-[24px] flex bg-white rounded-lg mt-5 '>
        <div className='w-[50%] flex justify-center flex-col px-8'>
          <h2 className='font-bold text-[36px] text-[#201836]'>Digital</h2>
          <p className='text-[#201836]'>
            A Medvet entende a importância do mundo digital na atualidade e tem se destacado em suas ações online. Nossas redes sociais são um canal direto com nossos clientes e parceiros, onde compartilhamos dicas, novidades, promoções e informações sobre o mercado veterinário. Com uma presença forte no Instagram, Facebook e LinkedIn, a Medvet não apenas divulga seus produtos, mas também cria uma comunidade engajada, proporcionando interação e soluções para quem atua no segmento pet. Fique por dentro das nossas campanhas digitais e faça parte dessa rede de sucesso.
          </p>
        </div>
        <div className='flex justify-center w-[50%] py-[56px]'>
          <img src="/img3.png" alt="" />
        </div>
      </div>

      <div className='max-w-[1440px] 2xl:mx-auto mx-[24px] flex bg-[#006F44] rounded-lg mt-4 '>
        <div className='flex justify-center w-[50%] py-[56px]'>
          <img src="/img4.png" alt="" />
        </div>
        <div className='w-[50%] flex justify-center flex-col pr-6'>
          <h2 className='font-bold text-[36px] text-[#ffffff]'>Nossas avaliações</h2>
          <p className='text-[#f4f4f4]'>
            A confiança dos nossos clientes é o nosso maior patrimônio. No Google, contamos com excelentes avaliações, reflexo da dedicação que temos em oferecer sempre o melhor atendimento, os melhores produtos e as melhores condições para lojistas e profissionais veterinários. Nosso relacionamento com os parceiros é pautado na transparência e na busca constante pela excelência. A satisfação de quem escolhe a Medvet Distribuidora é a nossa maior motivação para continuar crescendo e inovando.
          </p>
        </div>
      </div>

      <div className='py-[56px] px-[42px] max-w-[1440px] 2xl:mx-auto mx-[24px] bg-white mt-4 rounded-lg'>
        <h2 className='font-bold text-[#201836] text-[36px]'>Contato</h2>

        <div className='flex justify-around mt-8'>
          <a href=''>
            <img src="/whats.png" alt="" />
            <p className='font-bold text-[#201836] text-[18px] mt-3'> (84) 3302-0500</p>
          </a>
          <a href='' className='max-w-[266px] flex flex-col justify-center'>
            <img src="/local.png" alt="" />
            <p className='font-bold text-[#201836] text-[18px]'> R. das Encyclias, 16 - Emaús, Parnamirim - RN, 59148-77</p>
          </a>
        </div>
      </div>

      <footer className='mx-4 bg-[#0D1113] mt-4 rounded-t-2xl'>
        <div className='max-w-[1440px] 2xl:mx-auto mx-[24px] flex justify-between items-center'>
          <img src="/logo2.png" alt="" />
          <div >
            <p className='text-white font-bold text-[18px]'>Redes Sociais</p>
            <div className='flex gap-4'>
              <a href="">
                <img src="/whats2.png" alt="" />
              </a>
              <a href="">
                <img src="/linkedin.png" alt="" />
              </a>
              <a href="">
                <img src="/insta.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
