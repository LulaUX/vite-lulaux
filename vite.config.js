import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
  const port = 8080

  console.log(command, mode)

  const env = loadEnv(mode, process.cwd())

  console.log(env.VITE_NAME)

  if (mode === "development"){
    console.log("Modo de desarrollo")
    return {
      server:  {
        port
      }
    }
  } else {
    console.log("Modo de producción")
    return {
      build:  {
        lib: {
          entry: resolve(__dirname, 'lib', 'main.js'),
          name: 'demo',
          fileName: (format) => `demo.${format}.js`
        }
      }
    }
  }


})