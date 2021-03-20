import React, { useState } from 'react'
import PageTitle from './components/PageTitle'

const Pesquisa = () => {
  const [data, setData] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0,
  })

  const notas = [1, 2, 3, 4, 5]
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const result = await response.json()
      setSuccess(true)
      setRetorno(result)
    } catch (err) {}
  }

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
      <p className="text-center mb-6">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!success ? (
        <div className="w-1/5	mx-auto">
          <label className="font-bold">Seu nome:</label>
          <input
            type="text"
            className="p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Nome"
            name="Nome"
            value={data.Nome}
            onChange={(e) => handleChange(e)}
          />
          <label className="font-bold">Email:</label>
          <input
            type="email"
            className="p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Email"
            name="Email"
            value={data.Email}
            onChange={(e) => handleChange(e)}
          />
          <label className="font-bold">Whatsapp:</label>
          <input
            type="phone"
            className="p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Whatsapp"
            name="Whatsapp"
            value={data.Whatsapp}
            onChange={(e) => handleChange(e)}
          />
          <label className="font-bold">Nota:</label>
          <div className="flex py-6">
            {notas.map((nota) => (
              <React.Fragment>
                <label className="block w-1/6 text-center">
                  {nota}
                  <br />
                  <input
                    type="radio"
                    name="Nota"
                    value={nota}
                    onClick={handleChange}
                  />
                </label>
              </React.Fragment>
            ))}
          </div>
          <button
            className="bg-blue-400 px-12 py-4 font-bold	rounded-lg shadow-lg hover:shadow"
            onClick={save}
          >
            Salvar
          </button>
        </div>
      ) : (
        <div className="w-1/5	mx-auto">
          <p className="mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center">
            Obrigado por contribuir com sua sugestão ou critica.
          </p>
          {retorno.showCoupon ? (
            <div className="text-center border p-4 mb-4">
              Seu Cupom: <br />{' '}
              <span className="font-bold text-2xl">{retorno.Cupom}</span>
            </div>
          ) : null}
          {retorno.showCoupon ? (
            <div className="text-center border p-4  mb-4">
              <span className="font-bold block mb">{retorno.Promo}</span>
              <br />
              <span className="italic">
                Tire um print ou foto desta tela e apresente ao garçom.
              </span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default Pesquisa
