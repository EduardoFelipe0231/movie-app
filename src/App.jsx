import RoutesApp from './routes'
import { ToastContainer, toast, Bounce, Zoom} from 'react-toastify';

function App() {

  const contextClass = {
    success: "bg-emerald-50 border border-emerald-700 text-emerald-900 font-zinc-200",
    error: "bg-rose-100 border border-red-700 text-red-800",
    info: "bg-cyan-50 border border-teal-700 text-teal-900",
    warning: "bg-amber-50 border border-yellow-750 text-yellow-950",
    default: "bg-zinc-900 border border-zinc-800 text-zinc-100",
    dark: "bg-zinc-900 border border-zinc-900 text-zinc-900",
  };
    

  return (
    <>
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex px-6 min-h-13 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
        }
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
      <RoutesApp />
    </>
  )
}

export default App
