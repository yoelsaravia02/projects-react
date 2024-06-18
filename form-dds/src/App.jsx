import { useForm } from "react-hook-form"

const App = () => {

  const { register, handleSubmit, formState: {errors}, watch} = useForm();
  console.log(errors)
  const onSubmit = handleSubmit((data) => {
    
  });


  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" 
      {...register("nombre", 
        {
          required: {
            value:true,
            message: "Nombre es requerido"
          },
          maxLength: {
            value: 20,
            message: "El nombre debe tener maximo 20 caracteres"
          },
          minLength: {
            value: 2,
            message: "El nombre debe tener minimo 2 caracteres"
          },
        }
      )}
      />
      { errors.nombre?.message && <span>{errors.nombre.message}</span> }
      

      <label htmlFor="correo">Correo</label>
      <input type="email" id="correo" 
      {...register("correo", {
        required: {
          value: true,
          message: "Correo es requerido"
        },
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          message: "Correo no valido"
        }
      })}
      />
      { errors.correo?.message && <span>{errors.correo.message}</span> }

      <label htmlFor="contraseña">Contraseña</label>
      <input type="password" id="contraseña" 
      {...register("contraseña",
        {
          required: {
            value: true,
            message: "Contraseña es requerida"
          },
          minLength: {
            value: 6,
            message: "La contraseña debe tener minimo 6 caracteres"
          }
        }
      )}
      />
      { errors.contraseña?.message && <span>{errors.contraseña.message}</span>}

      <label htmlFor="confirmarPassword">Confirmar contraseña</label>
      <input type="password" id="confirmarPassword"
      {...register("confirmarPassword", 
        {
          required: {
            value: true,
            message: "Confirmar contraseña es requerida"
          },
          validate: (value) => value === watch("contraseña") || "Las contraseñas no coinciden"
          
        }
      )}
      />

      { errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}

      <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
      <input type="date" id="fechaNacimiento"
      {...register("fechaNacimiento", 
        {
          required: {
            value: true,
            message: "Fecha de nacimiento es requerida"
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const diferencia = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            return diferencia >= 18 ? true : "Debes ser mayor de edad";
          }
        }
      )}
      />
      { errors.fechaNacimiento?.message && <span>{errors.fechaNacimiento.message}</span>}
      

      <label htmlFor="pais">Pais</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      { watch("pais") === "ar" && (
        <>
          <label htmlFor="provincia">Provincia</label>
          <input type="text" id="provincia"
          {...register("provincia",
            {
              required: {
                value: true,
                message: "Provincia es requerida"
              }
            }
          )}/>
        { errors.provincia && <span>{errors.provincia.message}</span>}
        
      </>)}

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

      <pre>
        {JSON.stringify(watch(), null, 2)}
      </pre>
    </form>
  )
}

export default App
