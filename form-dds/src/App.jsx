import { useForm } from "react-hook-form"

const App = () => {

  const { register, handleSubmit, formState: {errors}} = useForm();
  console.log(errors)
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });


  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" 
      {...register("nombre", 
        {
          required: true,
          maxLength: 20,
          minLength: 2,
        }
      )}
      />
      
      {
        errors.nombre && errors.nombre.type === "required" && <span>Este campo es requerido</span>
      }
      {
        errors.nombre && errors.nombre.type === "maxLength" && <span>Maximo 20 caracteres</span>
      }
      {
        errors.nombre && errors.nombre.type === "minLength" && <span>Minimo 2 caracteres</span>
      }

      <label htmlFor="correo">Correo</label>
      <input type="email" id="correo" 
      {...register("correo", {
        required: true,
        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i
      })}
      />

      <label htmlFor="contraseña">Contraseña</label>
      <input type="password" id="contraseña" 
      {...register("contraseña",
        {
          required: true
        }
      )}
      />

      <label htmlFor="confirmarPassword">Confirmar contraseña</label>
      <input type="password" id="confirmarPassword"
      {...register("confirmarPassword", 
        {
          required: true
        }
      )}
      />

      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input type="date" id="fechaNacimiento"
      {...register("fechaNacimiento", 
        {
          required: true
        }
      )}
      />

      <label htmlFor="pais">Pais</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      <label htmlFor="foto">Foto</label>
      <input type="file" id="foto"
      {...register("foto")}
      />

      
      <label htmlFor="terminos">Acepto los terminos y condiciones</label>
      <input type="checkbox" id="terminos"
      {...register("terminos",
        {
          required: true
        }
      )}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
