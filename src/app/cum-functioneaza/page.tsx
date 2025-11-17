export default function CumFunctioneaza() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Cum funcționează SavePay?
      </h1>

      {/* ETAPA 1 */}
      <div className="savepay-card mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Creezi un cont SavePay</h2>
        <p className="text-gray-700">
          După instalarea aplicației, îți creezi un cont și primești automat un cod QR unic. 
          Acest QR te identifică în orice magazin partener.
        </p>
      </div>

      {/* ETAPA 2 */}
      <div className="savepay-card mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Scanezi codul tău QR</h2>
        <p className="text-gray-700">
          La casă, furnizorul scanează codul tău QR SavePay. 
          Astfel, sistemul știe că tu ești cumpărătorul.
        </p>
      </div>

      {/* ETAPA 3 */}
      <div className="savepay-card mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Primești chitanța digital instant</h2>
        <p className="text-gray-700">
          După ce plătești, comerciantul trimite chitanța direct în contul tău SavePay. 
          Totul digital, rapid și fără hârtie.
        </p>
      </div>

    </main>
  );
}
