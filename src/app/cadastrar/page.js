'use client'
import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import MyButton from '../components/MyButton'

const Cadastrar = () => {
  const [radioSelecionado, setarRadioSelecionado] = useState("artisan");

  const handleRadioChange = (value) => {
    setarRadioSelecionado(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Wrapper>
          <p className="text-3xl text-grass mb-3">Cadastrar disponibilidade</p>
          <form onSubmit={onSubmit} className='w-[100vw] flex flex-col justify-center items-center'>
            <input className="w-[60%]" type='text' placeholder='Insira seu nome do Arena'/><br />
            <div className='flex'>
            <input 
              type="radio"
              id="artisan"
              value="artisan"
              checked={
                radioSelecionado === "artisan"
              }
              onChange={() => handleRadioChange("artisan")}
              />
              <label
                htmlFor="artisan"
                >
                 Artisan
              </label>
              </div>
              <div className='flex'>
              <input 
              type="radio"
              id="true-art"
              value="true-art"
              checked={
                radioSelecionado === "true-art"
              }
              onChange={() => handleRadioChange("true-art")}
              />
              <label
                htmlFor="true-art"
                >
                 True Art
              </label>
              </div>
              <div className='flex'>
              <input 
              type="radio"
              id="standard"
              value="standard"
              checked={
                radioSelecionado === "standard"
              }
              onChange={() => handleRadioChange("standard")}
              />
              <label
                htmlFor="standard"
                >
                 Standard
              </label>
              </div>
            <MyButton>Cadastrar</MyButton>
          </form>
    </Wrapper>
  )
}

export default Cadastrar