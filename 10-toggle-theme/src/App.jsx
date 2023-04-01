import React, { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  const tema = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  function mudarTema(){
    setDark(dark => !dark)
  }

  return (
    <div style={ tema }>
      <h1>React - Tema Claro / Escuro</h1>
      <hr />
      <button onClick={mudarTema}>Tema</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, non quasi? Sint debitis quae provident fuga odit natus, eveniet, harum facere inventore officia praesentium recusandae quos nihil voluptatum ab animi.
        Saepe tempore at voluptates iste mollitia beatae aperiam, facilis ipsum debitis, porro magnam quam deserunt laborum necessitatibus voluptatem nobis nisi. Aliquid illum tenetur, enim repellat odit repudiandae harum provident omnis.
        Sint pariatur eveniet accusamus, odio quam aliquid neque, reiciendis nisi unde molestias ea! Voluptate iure, quisquam optio voluptatem dignissimos repudiandae odio nemo aliquam doloremque laudantium, quibusdam aperiam totam cum nihil.
        Possimus earum alias molestias perferendis consequatur vero beatae officia tenetur accusamus minus, quod fuga recusandae quibusdam magni harum provident quidem obcaecati maxime unde inventore! Earum vel atque pariatur molestiae ex.
        Cupiditate illo doloremque in odit deserunt dicta corrupti, facere, eius nemo eos voluptates praesentium, excepturi cumque. Velit quae ipsam architecto repellat, quas maiores suscipit. Temporibus officiis ab vel ratione iusto.
        Deleniti corrupti asperiores provident quasi neque accusamus commodi, cumque minus, fuga iste, at omnis mollitia perferendis perspiciatis fugiat dolores! Culpa corrupti tenetur assumenda mollitia fugiat officia cumque vero animi iste!
        Tempora excepturi error optio est nihil aperiam similique sapiente, sint sequi totam magnam fugiat praesentium magni commodi nam, assumenda eveniet. Labore porro beatae officiis voluptatum, odit quod eum minima tempora!
        Accusantium incidunt exercitationem repudiandae suscipit facilis neque, voluptas eius aliquid consequatur, eaque dolor deserunt delectus accusamus expedita quis sint vero autem, et quam fuga! Libero enim illo ullam corrupti hic.
        Facilis adipisci earum fugiat corrupti! Vel unde ipsa iste cupiditate, rem earum aliquid aperiam temporibus repellat nobis neque, ratione velit eaque excepturi, et dolorem totam at alias exercitationem quibusdam? Veniam?
        Cumque repellat temporibus ratione animi, nesciunt nobis non architecto veritatis numquam rerum possimus, fugiat magni doloribus enim sapiente dolor quisquam ducimus? Quod delectus magnam accusantium deleniti, enim commodi dignissimos sunt.</p>
    </div>
  )
}

export default App
