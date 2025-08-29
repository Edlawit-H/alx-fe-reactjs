import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">React Form Handling</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Controlled Form</h2>
        <RegistrationForm />
      </div>

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Formik Form</h2>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
